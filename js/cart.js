/**
 * Cart Class - Mengelola keranjang belanja
 * Fitur: localStorage, toast notification, validasi, dll
 */

// Constants
const DEFAULT_PRODUCT_IMAGE = 'assets/images/default-product.jpg';

class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.fixOldData(); // Perbaiki data lama
        this.init();
    }

    // Tambahkan fungsi untuk memperbaiki data lama
    fixOldData() {
        // Perbaiki data lama yang mungkin menyimpan gambar sebagai object
        let needSave = false;
        
        this.items = this.items.map(item => {
            // Perbaiki gambar jika masih object
            if (item.gambar && typeof item.gambar === 'object') {
                needSave = true;
                
                // Ambil gambar dari object
                if (item.gambar.utama && typeof item.gambar.utama === 'string') {
                    item.gambar = item.gambar.utama;
                } else if (item.gambar.length && typeof item.gambar[0] === 'string') {
                    item.gambar = item.gambar[0];
                } else {
                    item.gambar = DEFAULT_PRODUCT_IMAGE;
                }
            }
            return item;
        });
        
        if (needSave) {
            this.save();
        }
    }

    init() {
        this.updateCount();
        this.initEventListeners();
    }

    initEventListeners() {
        // Event listener untuk storage changes (jika ada tab lain yang mengubah cart)
        window.addEventListener('storage', (e) => {
            if (e.key === 'cart') {
                this.items = JSON.parse(e.newValue) || [];
                this.updateCount();
                
                // Trigger custom event
                window.dispatchEvent(new CustomEvent('cartUpdated', { 
                    detail: { items: this.items } 
                }));
            }
        });
    }

    /**
     * Menambahkan item ke keranjang
     * @param {Object} product - Produk yang akan ditambahkan
     * @param {Object} varian - Varian yang dipilih
     * @param {number} quantity - Jumlah
     */
    add(product, varian, quantity = 1) {
        // Validasi input
        if (!product || !product.id) {
            console.error('Product tidak valid');
            this.showNotification({ nama: 'Produk tidak dikenal' }, 'error');
            return false;
        }

        if (!varian || !varian.tipe) {
            console.error('Varian tidak valid');
            this.showNotification({ nama: 'Pilih varian terlebih dahulu' }, 'error');
            return false;
        }

        if (quantity < 1 || isNaN(quantity)) {
            quantity = 1;
        }

        // Cek apakah item dengan tipe yang sama sudah ada
        const existingItemIndex = this.items.findIndex(item => 
            item.id === product.id && 
            item.varian.tipe === varian.tipe
        );

        // Cari info varian untuk detail
        const tipeVarian = product.varian?.tipe?.find(t => t.kode === varian.tipe);
        
        // Hitung harga dengan tambahan varian
        let harga = product.harga?.diskon || product.harga?.normal || 0;
        if (tipeVarian && tipeVarian.hargaTambahan) {
            harga += tipeVarian.hargaTambahan;
        }

        // PASTIKAN GAMBAR ADALAH STRING
        let gambarItem = DEFAULT_PRODUCT_IMAGE;
        
        if (product.gambar) {
            if (typeof product.gambar === 'string') {
                gambarItem = product.gambar;
            } else if (product.gambar.utama && typeof product.gambar.utama === 'string') {
                gambarItem = product.gambar.utama;
            } else if (product.gambar.length && typeof product.gambar[0] === 'string') {
                gambarItem = product.gambar[0];
            }
        }

        if (existingItemIndex >= 0) {
            // Update quantity item yang sudah ada
            this.items[existingItemIndex].quantity += quantity;
            this.showNotification(product, 'update');
        } else {
            // Tambah item baru dengan gambar yang sudah dipastikan string
            const newItem = {
                id: product.id,
                nama: product.nama || 'Produk',
                gambar: gambarItem, // PASTIKAN STRING
                varian: {
                    tipe: varian.tipe,
                    tipeNama: tipeVarian ? tipeVarian.nama : varian.tipe
                },
                harga: harga,
                quantity: quantity,
                addedAt: new Date().toISOString() // Untuk tracking
            };

            this.items.push(newItem);
            this.showNotification(product, 'add');
        }

        this.save();
        return true;
    }

    /**
     * Menghapus item dari keranjang
     * @param {number} index - Index item yang akan dihapus
     */
    remove(index) {
        if (index >= 0 && index < this.items.length) {
            const removedItem = this.items[index];
            this.items.splice(index, 1);
            this.save();
            this.showNotification(removedItem, 'remove');
            return true;
        }
        return false;
    }

    /**
     * Menghapus item berdasarkan ID produk
     * @param {string|number} productId - ID produk
     * @param {string} tipeVarian - Tipe varian (opsional)
     */
    removeById(productId, tipeVarian = null) {
        const initialLength = this.items.length;
        
        if (tipeVarian) {
            // Hapus spesifik varian
            this.items = this.items.filter(item => 
                !(item.id === productId && item.varian.tipe === tipeVarian)
            );
        } else {
            // Hapus semua varian produk
            this.items = this.items.filter(item => item.id !== productId);
        }
        
        if (this.items.length !== initialLength) {
            this.save();
            return true;
        }
        return false;
    }

    /**
     * Update quantity item
     * @param {number} index - Index item
     * @param {number} quantity - Quantity baru
     */
    updateQuantity(index, quantity) {
        if (index >= 0 && index < this.items.length) {
            quantity = parseInt(quantity);
            
            if (quantity > 0 && !isNaN(quantity)) {
                this.items[index].quantity = quantity;
                this.save();
                return true;
            } else if (quantity <= 0) {
                // Jika quantity 0 atau negatif, hapus item
                return this.remove(index);
            }
        }
        return false;
    }

    /**
     * Mendapatkan total jumlah item
     * @returns {number} Total quantity
     */
    getTotalItems() {
        return this.items.reduce((sum, item) => sum + (item.quantity || 0), 0);
    }

    /**
     * Mendapatkan total harga
     * @returns {number} Subtotal
     */
    getSubtotal() {
        return this.items.reduce((sum, item) => sum + ((item.harga || 0) * (item.quantity || 0)), 0);
    }

    /**
     * Mendapatkan total item unik
     * @returns {number} Jumlah item unik
     */
    getUniqueItemCount() {
        return this.items.length;
    }

    /**
     * Cek apakah produk sudah ada di keranjang
     * @param {string|number} productId - ID produk
     * @param {string} tipeVarian - Tipe varian (opsional)
     * @returns {boolean}
     */
    isInCart(productId, tipeVarian = null) {
        if (tipeVarian) {
            return this.items.some(item => 
                item.id === productId && item.varian.tipe === tipeVarian
            );
        }
        return this.items.some(item => item.id === productId);
    }

    /**
     * Mendapatkan quantity produk di keranjang
     * @param {string|number} productId - ID produk
     * @param {string} tipeVarian - Tipe varian
     * @returns {number}
     */
    getItemQuantity(productId, tipeVarian) {
        const item = this.items.find(item => 
            item.id === productId && item.varian.tipe === tipeVarian
        );
        return item ? item.quantity : 0;
    }

    /**
     * Menyimpan keranjang ke localStorage
     */
    save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.updateCount();
        
        // Trigger custom event untuk komponen lain
        window.dispatchEvent(new CustomEvent('cartUpdated', { 
            detail: { items: this.items } 
        }));
    }

    /**
     * Update counter keranjang di semua elemen
     */
    updateCount() {
        const count = this.getTotalItems();
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    /**
     * Menampilkan notifikasi
     * @param {Object} item - Item yang ditambahkan/dihapus
     * @param {string} action - Aksi (add/update/remove/error)
     */
    showNotification(item, action = 'add') {
        try {
            // Validasi item
            if (!item) {
                console.error('Item tidak ada');
                return;
            }

            // Hapus notifikasi sebelumnya
            const existingToast = document.querySelector('.toast-notification');
            if (existingToast) existingToast.remove();

            // CARI GAMBAR DENGAN AMAN - PASTIKAN STRING
            let gambar = DEFAULT_PRODUCT_IMAGE;
            let nama = 'Produk';
            
            // Dapatkan nama
            if (item.nama && typeof item.nama === 'string') {
                nama = item.nama;
            } else if (item.product?.nama && typeof item.product.nama === 'string') {
                nama = item.product.nama;
            }
            
            // Dapatkan gambar - PERIKSA APAKAH STRING ATAU OBJECT
            if (item.gambar) {
                if (typeof item.gambar === 'string') {
                    gambar = item.gambar;
                } else if (typeof item.gambar === 'object') {
                    // Jika object, ambil properti utama
                    if (item.gambar.utama && typeof item.gambar.utama === 'string') {
                        gambar = item.gambar.utama;
                    } else if (item.gambar.length && typeof item.gambar[0] === 'string') {
                        gambar = item.gambar[0];
                    }
                }
            } else if (item.product?.gambar) {
                // Jika item punya product.gambar
                if (typeof item.product.gambar === 'string') {
                    gambar = item.product.gambar;
                } else if (item.product.gambar.utama && typeof item.product.gambar.utama === 'string') {
                    gambar = item.product.gambar.utama;
                }
            }
            
            // PASTIKAN GAMBAR STRING, JIKA BUKAN STRING PAKAI DEFAULT
            if (typeof gambar !== 'string') {
                console.error('Gambar masih bukan string:', gambar);
                gambar = DEFAULT_PRODUCT_IMAGE;
            }

            // Buat element toast
            const toast = document.createElement('div');
            toast.className = 'toast-notification';
            
            // Konfigurasi berdasarkan action
            let icon = '✓';
            let message = 'Ditambahkan ke keranjang';
            let bgColor = 'linear-gradient(135deg, #a51533 0%, #cf1d3f 100%)';
            
            if (action === 'update') {
                icon = '↻';
                message = 'Jumlah diperbarui';
                bgColor = 'linear-gradient(135deg, #fcaf17 0%, #cf1d3f 100%)';
            } else if (action === 'remove') {
                icon = '✕';
                message = 'Dihapus dari keranjang';
                bgColor = 'linear-gradient(135deg, #f5515f 0%, #9f041b 100%)';
            } else if (action === 'error') {
                icon = '⚠';
                message = item.nama || 'Terjadi kesalahan';
                bgColor = 'linear-gradient(135deg, #f5515f 0%, #9f041b 100%)';
            }
            
            // Isi toast dengan gambar yang sudah dipastikan aman
            toast.innerHTML = `
                <div class="toast-content" style="background: ${bgColor}">
                    <img src="${gambar}" alt="${nama}" class="toast-image" 
                         onerror="this.onerror=null; this.src='${DEFAULT_PRODUCT_IMAGE}';
                    <div class="toast-text">
                        <div class="toast-title">${nama}</div>
                        <div class="toast-message">
                            <span class="toast-icon">${icon}</span> ${message}
                        </div>
                    </div>
                    ${action !== 'remove' && action !== 'error' ? '<a href="checkout.html" class="toast-action">Lihat</a>' : ''}
                </div>
                <div class="toast-progress"></div>
            `;
            
            document.body.appendChild(toast);
            
            // Trigger reflow untuk animasi
            toast.offsetHeight;
            
            // Tampilkan toast
            setTimeout(() => {
                toast.classList.add('toast-show');
            }, 10);
            
            // Auto hilang setelah 3 detik
            setTimeout(() => {
                toast.classList.remove('toast-show');
                toast.classList.add('toast-hide');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
            
        } catch (error) {
            console.error('Error di showNotification:', error);
        }
    }

    /**
     * Mengosongkan keranjang
     */
    clear() {
        if (this.items.length > 0) {
            this.items = [];
            this.save();
            return true;
        }
        return false;
    }

    /**
     * Mendapatkan data untuk checkout
     * @returns {Object} Data checkout
     */
    getCheckoutData() {
        return {
            items: [...this.items],
            subtotal: this.getSubtotal(),
            totalItems: this.getTotalItems(),
            uniqueItems: this.getUniqueItemCount()
        };
    }

    /**
     * Format data untuk dikirim ke server
     * @returns {Array} Data terformat
     */
    formatForServer() {
        return this.items.map(item => ({
            product_id: item.id,
            varian_tipe: item.varian.tipe,
            quantity: item.quantity,
            harga: item.harga,
            subtotal: item.harga * item.quantity
        }));
    }

    /**
     * Export cart ke JSON
     */
    exportToJSON() {
        const data = {
            items: this.items,
            total: this.getSubtotal(),
            date: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cart-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
    }

    /**
     * Import cart dari JSON
     * @param {string} jsonString - JSON string
     */
    importFromJSON(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (data.items && Array.isArray(data.items)) {
                this.items = data.items;
                this.save();
                return true;
            }
        } catch (e) {
            console.error('Gagal import cart:', e);
        }
        return false;
    }

    /**
     * Validasi stock sebelum checkout
     * @param {Function} getStockFunction - Function untuk cek stock
     */
    async validateStock(getStockFunction) {
        const outOfStock = [];
        
        for (const item of this.items) {
            try {
                const stock = await getStockFunction(item.id, item.varian.tipe);
                if (stock < item.quantity) {
                    outOfStock.push({
                        ...item,
                        availableStock: stock
                    });
                }
            } catch (e) {
                console.error('Gagal cek stock:', e);
            }
        }
        
        return outOfStock;
    }

    /**
     * Simpan riwayat belanja setelah checkout
     */
    saveToHistory() {
        const history = JSON.parse(localStorage.getItem('orderHistory')) || [];
        
        history.push({
            orderId: `ORD-${Date.now()}`,
            date: new Date().toISOString(),
            items: [...this.items],
            total: this.getSubtotal()
        });
        
        localStorage.setItem('orderHistory', JSON.stringify(history));
    }

    /**
     * Dapatkan riwayat belanja
     * @returns {Array} Riwayat belanja
     */
    getHistory() {
        return JSON.parse(localStorage.getItem('orderHistory')) || [];
    }

    /**
     * Hapus riwayat belanja
     */
    clearHistory() {
        localStorage.removeItem('orderHistory');
    }
}

// Inisialisasi cart
window.cart = new Cart();

// Tambahkan CSS untuk toast notification (jika belum ada)
(function addToastStyles() {
    // Cek apakah style sudah ada
    if (document.querySelector('#cart-toast-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'cart-toast-styles';
    style.textContent = `
        .toast-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            width: 320px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            transform: translateX(400px);
            transition: transform 0.3s ease;
            pointer-events: all;
        }
        
        .toast-notification.toast-show {
            transform: translateX(0);
        }
        
        .toast-notification.toast-hide {
            transform: translateX(400px);
        }
        
        .toast-content {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px;
            color: white;
        }
        
        .toast-image {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 8px;
            border: 2px solid rgba(255,255,255,0.3);
            background: white;
        }
        
        .toast-text {
            flex: 1;
        }
        
        .toast-title {
            font-weight: 600;
            font-size: 0.95rem;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 150px;
        }
        
        .toast-message {
            font-size: 0.85rem;
            opacity: 0.9;
            display: flex;
            align-items: center;
            gap: 4px;
        }
        
        .toast-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 18px;
            height: 18px;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
            font-size: 12px;
        }
        
        .toast-action {
            background: rgba(255,255,255,0.2);
            color: white;
            text-decoration: none;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            transition: background 0.3s;
            white-space: nowrap;
        }
        
        .toast-action:hover {
            background: rgba(255,255,255,0.3);
        }
        
        .toast-progress {
            height: 3px;
            background: rgba(255,255,255,0.5);
            width: 100%;
            animation: toastProgress 3s linear forwards;
        }
        
        @keyframes toastProgress {
            0% { width: 100%; }
            100% { width: 0%; }
        }
        
        @media (max-width: 768px) {
            .toast-notification {
                width: calc(100% - 40px);
                left: 20px;
                right: 20px;
                transform: translateY(-400px);
            }
            
            .toast-notification.toast-show {
                transform: translateY(0);
            }
            
            .toast-notification.toast-hide {
                transform: translateY(-400px);
            }
        }
    `;
    document.head.appendChild(style);
})();

// Export untuk digunakan di module (jika diperlukan)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Cart;
}