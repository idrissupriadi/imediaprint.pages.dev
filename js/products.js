/**
 * Products Class - Mengelola data produk
 * Fitur: Data produk, filtering, sorting, pencarian, dll
 */

const Products = {
    data: [
        {
            id: "1",
            nama: "Hard Cover Bludru Abu-abu",
            kategori: "Hard Cover Bludru",
            gambar: {
                utama: "assets/images/bluabu.jpg",
                gallery: ["assets/images/bluabu-1.jpg", "assets/images/bluabu-2.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover bludru warna abu-abu elegan",
                panjang: "Hard cover dengan bahan bludru berkualitas, cocok untuk buku tahunan, skripsi, atau dokumen penting. Tersedia pilihan punggung standar dan punggung kecil."
            },
            harga: {
                normal: 4000,
                diskon: null // null berarti tidak ada diskon
            },
            penjualan: {
                terjual: 125,
                rating: 4.5
            },
            stok: 200,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        deskripsi: "Punggung buku ukuran standar",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        deskripsi: "Punggung buku ukuran kecil/hemat",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: true,
            berat: 200, // dalam gram
            tags: ["bludru", "abu-abu", "elegan"]
        },
        {
            id: "2",
            nama: "Hard Cover Bludru Biru",
            kategori: "Hard Cover Bludru",
            gambar: {
                utama: "assets/images/blubir.jpg",
                gallery: ["assets/images/blubir-1.jpg", "assets/images/blubir-2.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover bludru warna biru elegan",
                panjang: "Hard cover dengan bahan bludru berkualitas, warna biru yang elegan cocok untuk berbagai kebutuhan percetakan."
            },
            harga: {
                normal: 4000,
                diskon: null
            },
            penjualan: {
                terjual: 98,
                rating: 4.7
            },
            stok: 200,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: true,
            berat: 200,
            tags: ["bludru", "biru", "elegan"]
        },
        {
            id: "3",
            nama: "Hard Cover Bludru Coklat",
            kategori: "Hard Cover Bludru",
            gambar: {
                utama: "assets/images/blucok.jpg",
                gallery: ["assets/images/blucok-1.jpg", "assets/images/blucok-2.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover bludru warna coklat elegan",
                panjang: "Hard cover bludru warna coklat dengan tekstur lembut dan elegan."
            },
            harga: {
                normal: 4000,
                diskon: null
            },
            penjualan: {
                terjual: 156,
                rating: 4.6
            },
            stok: 200,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: true,
            berat: 200,
            tags: ["bludru", "coklat", "elegan"]
        },
        {
            id: "4",
            nama: "Hard Cover Bludru Hijau",
            kategori: "Hard Cover Bludru",
            gambar: {
                utama: "assets/images/bluhij.jpg",
                gallery: ["assets/images/bluhij-1.jpg", "assets/images/bluhij-2.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover bludru warna hijau elegan",
                panjang: "Hard cover bludru warna hijau segar untuk tampilan yang berbeda."
            },
            harga: {
                normal: 4000,
                diskon: null
            },
            penjualan: {
                terjual: 87,
                rating: 4.4
            },
            stok: 200,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: true,
            berat: 200,
            tags: ["bludru", "hijau", "elegan"]
        },
        {
            id: "5",
            nama: "Hard Cover Bludru Hitam",
            kategori: "Hard Cover Bludru",
            gambar: {
                utama: "assets/images/bluhit.jpg",
                gallery: ["assets/images/bluhit-1.jpg", "assets/images/bluhit-2.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover bludru warna hitam elegan",
                panjang: "Hard cover bludru warna hitam klasik, cocok untuk berbagai kesempatan."
            },
            harga: {
                normal: 4000,
                diskon: null
            },
            penjualan: {
                terjual: 213,
                rating: 4.8
            },
            stok: 200,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: true,
            berat: 200,
            tags: ["bludru", "hitam", "klasik"]
        },
		{
            id: "6",
            nama: "Hard Cover Bludru Marun",
            kategori: "Hard Cover Bludru",
            gambar: {
                utama: "assets/images/blumar.jpg",
                gallery: ["assets/images/blumar-1.jpg", "assets/images/blumar-2.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover bludru warna hitam elegan",
                panjang: "Hard cover bludru warna hitam klasik, cocok untuk berbagai kesempatan."
            },
            harga: {
                normal: 4000,
                diskon: null
            },
            penjualan: {
                terjual: 213,
                rating: 4.8
            },
            stok: 200,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: true,
            berat: 200,
            tags: ["bludru", "hitam", "klasik"]
        },
		{
            id: "7",
            nama: "Hard Cover Bludru Ungu",
            kategori: "Hard Cover Bludru",
            gambar: {
                utama: "assets/images/blungu.jpg",
                gallery: ["assets/images/blungu-1.jpg", "assets/images/blungu-2.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover bludru warna hitam elegan",
                panjang: "Hard cover bludru warna hitam klasik, cocok untuk berbagai kesempatan."
            },
            harga: {
                normal: 4000,
                diskon: null
            },
            penjualan: {
                terjual: 213,
                rating: 4.8
            },
            stok: 200,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: true,
            berat: 200,
            tags: ["bludru", "hitam", "klasik"]
        },
		{
            id: "8",
            nama: "Hard Cover Diamond Gold",
            kategori: "Hard Cover Diamond",
            gambar: {
                utama: "assets/images/diagol.jpg",
                gallery: ["assets/images/diagol-1.jpg", "assets/images/diagol-2.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover bludru warna hitam elegan",
                panjang: "Hard cover bludru warna hitam klasik, cocok untuk berbagai kesempatan."
            },
            harga: {
                normal: 4000,
                diskon: null
            },
            penjualan: {
                terjual: 213,
                rating: 4.8
            },
            stok: 200,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: true,
            berat: 200,
            tags: ["bludru", "hitam", "klasik"]
        },
        {
            id: "9",
            nama: "Hard Cover Diamond Biru",
            kategori: "Hard Cover Diamond",
            gambar: {
                utama: "assets/images/diabir.jpg",
                gallery: ["assets/images/diabir-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover glossy warna putih mengkilap",
                panjang: "Hard cover dengan finishing glossy yang mengkilap dan tahan lama."
            },
            harga: {
                normal: 4500,
                diskon: null
            },
            penjualan: {
                terjual: 67,
                rating: 4.3
            },
            stok: 150,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: false,
            berat: 220,
            tags: ["glossy", "putih", "mengkilap"]
        },
		{
            id: "10",
            nama: "Hard Cover Diamond Hijau",
            kategori: "Hard Cover Diamond",
            gambar: {
                utama: "assets/images/diahij.jpg",
                gallery: ["assets/images/diahij-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover glossy warna putih mengkilap",
                panjang: "Hard cover dengan finishing glossy yang mengkilap dan tahan lama."
            },
            harga: {
                normal: 4500,
                diskon: null
            },
            penjualan: {
                terjual: 67,
                rating: 4.3
            },
            stok: 150,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: false,
            berat: 220,
            tags: ["glossy", "putih", "mengkilap"]
        },
		{
            id: "11",
            nama: "Hard Cover Diamond Hitam",
            kategori: "Hard Cover Diamond",
            gambar: {
                utama: "assets/images/diahit.jpg",
                gallery: ["assets/images/diahit-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover glossy warna putih mengkilap",
                panjang: "Hard cover dengan finishing glossy yang mengkilap dan tahan lama."
            },
            harga: {
                normal: 4500,
                diskon: null
            },
            penjualan: {
                terjual: 67,
                rating: 4.3
            },
            stok: 150,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: false,
            berat: 220,
            tags: ["glossy", "putih", "mengkilap"]
        },
		{
            id: "12",
            nama: "Hard Cover Diamond Krem",
            kategori: "Hard Cover Diamond",
            gambar: {
                utama: "assets/images/diakrem.jpg",
                gallery: ["assets/images/diakrem-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover glossy warna putih mengkilap",
                panjang: "Hard cover dengan finishing glossy yang mengkilap dan tahan lama."
            },
            harga: {
                normal: 4500,
                diskon: null
            },
            penjualan: {
                terjual: 67,
                rating: 4.3
            },
            stok: 150,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: false,
            berat: 220,
            tags: ["glossy", "putih", "mengkilap"]
        },
		{
            id: "13",
            nama: "Hard Cover Diamond Merah",
            kategori: "Hard Cover Diamond",
            gambar: {
                utama: "assets/images/diamer.jpg",
                gallery: ["assets/images/diamer-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover glossy warna putih mengkilap",
                panjang: "Hard cover dengan finishing glossy yang mengkilap dan tahan lama."
            },
            harga: {
                normal: 4500,
                diskon: null
            },
            penjualan: {
                terjual: 67,
                rating: 4.3
            },
            stok: 150,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: false,
            berat: 220,
            tags: ["glossy", "putih", "mengkilap"]
        },
		{
            id: "14",
            nama: "Hard Cover Glossy Biru",
            kategori: "Hard Cover Glossy",
            gambar: {
                utama: "assets/images/glossybr.jpg",
                gallery: ["assets/images/glossybr-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover glossy warna putih mengkilap",
                panjang: "Hard cover dengan finishing glossy yang mengkilap dan tahan lama."
            },
            harga: {
                normal: 4500,
                diskon: null
            },
            penjualan: {
                terjual: 67,
                rating: 4.3
            },
            stok: 150,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: false,
            berat: 220,
            tags: ["glossy", "putih", "mengkilap"]
        },
        {
            id: "15",
            nama: "Hard Cover Glossy Hijau",
            kategori: "Hard Cover Glossy",
            gambar: {
                utama: "assets/images/glossyhj.jpg",
                gallery: ["assets/images/glossyhj-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover glossy warna hitam mengkilap",
                panjang: "Hard cover glossy hitam dengan permukaan mengkilap dan elegan."
            },
            harga: {
                normal: 4500,
                diskon: 4000 // Diskon Rp 500
            },
            penjualan: {
                terjual: 89,
                rating: 4.6
            },
            stok: 150,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: false,
            berat: 220,
            tags: ["glossy", "hitam", "diskon"]
        },
		{
            id: "16",
            nama: "Hard Cover Glossy Gold",
            kategori: "Hard Cover Glossy",
            gambar: {
                utama: "assets/images/glossygold.jpg",
                gallery: ["assets/images/glossygold-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover glossy warna hitam mengkilap",
                panjang: "Hard cover glossy hitam dengan permukaan mengkilap dan elegan."
            },
            harga: {
                normal: 4500,
                diskon: 4000 // Diskon Rp 500
            },
            penjualan: {
                terjual: 89,
                rating: 4.6
            },
            stok: 150,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: false,
            berat: 220,
            tags: ["glossy", "hitam", "diskon"]
        },
		{
            id: "16",
            nama: "Hard Cover Glossy Merah",
            kategori: "Hard Cover Glossy",
            gambar: {
                utama: "assets/images/glossymr.jpg",
                gallery: ["assets/images/glossymr-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover glossy warna hitam mengkilap",
                panjang: "Hard cover glossy hitam dengan permukaan mengkilap dan elegan."
            },
            harga: {
                normal: 4500,
                diskon: 4000 // Diskon Rp 500
            },
            penjualan: {
                terjual: 89,
                rating: 4.6
            },
            stok: 150,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: false,
            berat: 220,
            tags: ["glossy", "hitam", "diskon"]
        },
		{
            id: "16",
            nama: "Hard Cover Glossy Ungu",
            kategori: "Hard Cover Glossy",
            gambar: {
                utama: "assets/images/glossyungu.jpg",
                gallery: ["assets/images/glossyungu-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover glossy warna hitam mengkilap",
                panjang: "Hard cover glossy hitam dengan permukaan mengkilap dan elegan."
            },
            harga: {
                normal: 4500,
                diskon: 4000 // Diskon Rp 500
            },
            penjualan: {
                terjual: 89,
                rating: 4.6
            },
            stok: 150,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: false,
            berat: 220,
            tags: ["glossy", "hitam", "diskon"]
        },
        {
            id: "18",
            nama: "Hard Cover RCP Biru Muda Akar",
            kategori: "Hard Cover RCP",
            gambar: {
                utama: "assets/images/rcpbma.jpg",
                gallery: ["assets/images/rcpbma-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover diamond dengan efek silver",
                panjang: "Hard cover dengan efek diamond yang berkilau, cocok untuk buku mewah."
            },
            harga: {
                normal: 5500,
                diskon: null
            },
            penjualan: {
                terjual: 45,
                rating: 4.9
            },
            stok: 100,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 500 // Tambahan untuk diamond
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 500
                    }
                ]
            },
            unggulan: false,
            berat: 250,
            tags: ["diamond", "silver", "mewah"]
        },
        {
            id: "19",
            nama: "Hard Cover RCP Biru Tua Akar",
            kategori: "Hard Cover RCP",
            gambar: {
                utama: "assets/images/rcpbta.jpg",
                gallery: ["assets/images/rcpbta-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover RCP motif marmer",
                panjang: "Hard cover RCP dengan motif marmer yang elegan dan unik."
            },
            harga: {
                normal: 5000,
                diskon: 4500
            },
            penjualan: {
                terjual: 34,
                rating: 4.5
            },
            stok: 120,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 0
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 0
                    }
                ]
            },
            unggulan: false,
            berat: 230,
            tags: ["rcp", "marmer", "motif"]
        },
		{
            id: "20",
            nama: "Hard Cover RCP 70",
            kategori: "Hard Cover RCP",
            gambar: {
                utama: "assets/images/rcp70.jpg",
                gallery: ["assets/images/rcp70-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover diamond dengan efek silver",
                panjang: "Hard cover dengan efek diamond yang berkilau, cocok untuk buku mewah."
            },
            harga: {
                normal: 5500,
                diskon: null
            },
            penjualan: {
                terjual: 45,
                rating: 4.9
            },
            stok: 100,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 500 // Tambahan untuk diamond
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 500
                    }
                ]
            },
            unggulan: false,
            berat: 250,
            tags: ["diamond", "silver", "mewah"]
        },
		{
            id: "21",
            nama: "Hard Cover RCP Putih",
            kategori: "Hard Cover RCP",
            gambar: {
                utama: "assets/images/rcpput.jpg",
                gallery: ["assets/images/rcpput-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover diamond dengan efek silver",
                panjang: "Hard cover dengan efek diamond yang berkilau, cocok untuk buku mewah."
            },
            harga: {
                normal: 5500,
                diskon: null
            },
            penjualan: {
                terjual: 45,
                rating: 4.9
            },
            stok: 100,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 500 // Tambahan untuk diamond
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 500
                    }
                ]
            },
            unggulan: false,
            berat: 250,
            tags: ["diamond", "silver", "mewah"]
        },
		{
            id: "22",
            nama: "Hard Cover Glossy Silver",
            kategori: "Hard Cover Glossy",
            gambar: {
                utama: "assets/images/glossysil.jpg",
                gallery: ["assets/images/glossysil-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover diamond dengan efek silver",
                panjang: "Hard cover dengan efek diamond yang berkilau, cocok untuk buku mewah."
            },
            harga: {
                normal: 5500,
                diskon: null
            },
            penjualan: {
                terjual: 45,
                rating: 4.9
            },
            stok: 100,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 500 // Tambahan untuk diamond
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 500
                    }
                ]
            },
            unggulan: false,
            berat: 250,
            tags: ["diamond", "silver", "mewah"]
        },
		{
            id: "23",
            nama: "Hard Cover Diamond Silver",
            kategori: "Hard Cover Diamond",
            gambar: {
                utama: "assets/images/diasil.jpg",
                gallery: ["assets/images/diasil-1.jpg"]
            },
            deskripsi: {
                pendek: "Hard cover diamond dengan efek silver",
                panjang: "Hard cover dengan efek diamond yang berkilau, cocok untuk buku mewah."
            },
            harga: {
                normal: 5500,
                diskon: null
            },
            penjualan: {
                terjual: 45,
                rating: 4.9
            },
            stok: 100,
            varian: {
                tipe: [
                    {
                        kode: "PS",
                        nama: "Punggung Standar (PS)",
                        hargaTambahan: 500 // Tambahan untuk diamond
                    },
                    {
                        kode: "PK",
                        nama: "Punggung Kecil (PK)",
                        hargaTambahan: 500
                    }
                ]
            },
            unggulan: false,
            berat: 250,
            tags: ["diamond", "silver", "mewah"]
        }
    ],

    /**
     * Mendapatkan semua produk
     * @returns {Array} Semua produk
     */
    getAll() {
        return this.data;
    },

    /**
     * Mendapatkan produk berdasarkan ID
     * @param {string|number} id - ID produk
     * @returns {Object|null} Produk atau null jika tidak ditemukan
     */
    getById(id) {
        return this.data.find(p => p.id === id) || null;
    },

    /**
     * Mendapatkan produk unggulan
     * @param {number} limit - Jumlah maksimal produk
     * @returns {Array} Produk unggulan
     */
    getUnggulan(limit = 4) {
        return this.data.filter(p => p.unggulan).slice(0, limit);
    },

    /**
     * Mendapatkan produk terbaru
     * @param {number} limit - Jumlah maksimal produk
     * @returns {Array} Produk terbaru (berdasarkan ID)
     */
    getTerbaru(limit = 4) {
        return [...this.data]
            .sort((a, b) => parseInt(b.id) - parseInt(a.id))
            .slice(0, limit);
    },

    /**
     * Mendapatkan produk terlaris
     * @param {number} limit - Jumlah maksimal produk
     * @returns {Array} Produk terlaris
     */
    getTerlaris(limit = 4) {
        return [...this.data]
            .sort((a, b) => (b.penjualan?.terjual || 0) - (a.penjualan?.terjual || 0))
            .slice(0, limit);
    },

    /**
     * Mencari produk berdasarkan query
     * @param {string} query - Kata kunci pencarian
     * @returns {Array} Hasil pencarian
     */
    search(query) {
        if (!query) return this.data;
        
        const q = query.toLowerCase().trim();
        return this.data.filter(p => 
            p.nama.toLowerCase().includes(q) || 
            (p.deskripsi.pendek && p.deskripsi.pendek.toLowerCase().includes(q)) ||
            (p.deskripsi.panjang && p.deskripsi.panjang.toLowerCase().includes(q)) ||
            (p.tags && p.tags.some(tag => tag.toLowerCase().includes(q)))
        );
    },

    /**
     * Filter produk dengan berbagai parameter
     * @param {Object} params - Parameter filter
     * @returns {Array} Hasil filter
     */
    filter(params = {}) {
        let hasil = [...this.data];
        
        // Filter kategori
        if (params.kategori && params.kategori !== 'all') {
            hasil = hasil.filter(p => p.kategori === params.kategori);
        }
        
        // Filter varian
        if (params.varian && params.varian !== 'all') {
            hasil = hasil.filter(p => 
                p.varian.tipe.some(t => t.kode === params.varian)
            );
        }
        
        // Filter harga minimum
        if (params.hargaMin && !isNaN(params.hargaMin)) {
            hasil = hasil.filter(p => {
                const harga = p.harga.diskon || p.harga.normal;
                return harga >= params.hargaMin;
            });
        }
        
        // Filter harga maksimum
        if (params.hargaMax && !isNaN(params.hargaMax)) {
            hasil = hasil.filter(p => {
                const harga = p.harga.diskon || p.harga.normal;
                return harga <= params.hargaMax;
            });
        }
        
        // Filter diskon
        if (params.diskonOnly) {
            hasil = hasil.filter(p => p.harga.diskon !== null);
        }
        
        // Filter stok tersedia
        if (params.inStockOnly) {
            hasil = hasil.filter(p => p.stok > 0);
        }
        
        return hasil;
    },

    /**
     * Sort produk
     * @param {Array} products - Array produk
     * @param {string} sortBy - Kriteria sorting
     * @returns {Array} Produk yang sudah di-sort
     */
    sort(products, sortBy = 'default') {
        const sorted = [...products];
        
        switch(sortBy) {
            case 'termurah':
                return sorted.sort((a, b) => {
                    const hargaA = a.harga.diskon || a.harga.normal;
                    const hargaB = b.harga.diskon || b.harga.normal;
                    return hargaA - hargaB;
                });
                
            case 'termahal':
                return sorted.sort((a, b) => {
                    const hargaA = a.harga.diskon || a.harga.normal;
                    const hargaB = b.harga.diskon || b.harga.normal;
                    return hargaB - hargaA;
                });
                
            case 'terlaris':
                return sorted.sort((a, b) => 
                    (b.penjualan?.terjual || 0) - (a.penjualan?.terjual || 0)
                );
                
            case 'rating':
                return sorted.sort((a, b) => 
                    (b.penjualan?.rating || 0) - (a.penjualan?.rating || 0)
                );
                
            case 'terbaru':
                return sorted.sort((a, b) => parseInt(b.id) - parseInt(a.id));
                
            default:
                return sorted;
        }
    },

    /**
     * Mendapatkan semua kategori unik
     * @returns {Array} Daftar kategori
     */
    getKategori() {
        const kategori = this.data.map(p => p.kategori);
        return [...new Set(kategori)]; // Hapus duplikat
    },

    /**
     * Mendapatkan semua varian unik
     * @returns {Array} Daftar varian
     */
    getVarian() {
        const varian = [];
        this.data.forEach(p => {
            p.varian.tipe.forEach(t => {
                if (!varian.some(v => v.kode === t.kode)) {
                    varian.push({
                        kode: t.kode,
                        nama: t.nama
                    });
                }
            });
        });
        return varian;
    },

    /**
     * Mendapatkan range harga
     * @returns {Object} Harga minimum dan maksimum
     */
    getHargaRange() {
        const harga = this.data.map(p => p.harga.diskon || p.harga.normal);
        return {
            min: Math.min(...harga),
            max: Math.max(...harga)
        };
    },

    /**
     * Cek ketersediaan stok
     * @param {string} id - ID produk
     * @param {string} tipe - Tipe varian
     * @param {number} quantity - Jumlah yang diminta
     * @returns {boolean} Stok tersedia atau tidak
     */
    cekStok(id, tipe, quantity = 1) {
        const produk = this.getById(id);
        if (!produk) return false;
        
        // Cek apakah varian tersedia
        const varianTersedia = produk.varian.tipe.some(t => t.kode === tipe);
        if (!varianTersedia) return false;
        
        return produk.stok >= quantity;
    },

    /**
     * Kurangi stok (setelah checkout)
     * @param {string} id - ID produk
     * @param {number} quantity - Jumlah yang dibeli
     */
    kurangiStok(id, quantity = 1) {
        const produk = this.getById(id);
        if (produk) {
            produk.stok = Math.max(0, produk.stok - quantity);
            // Trigger event
            window.dispatchEvent(new CustomEvent('stokUpdated', { 
                detail: { id, stok: produk.stok } 
            }));
        }
    },

    /**
     * Hitung total harga
     * @param {string} id - ID produk
     * @param {string} tipe - Tipe varian
     * @param {number} quantity - Jumlah
     * @returns {number} Total harga
     */
    hitungHarga(id, tipe, quantity = 1) {
        const produk = this.getById(id);
        if (!produk) return 0;
        
        const hargaDasar = produk.harga.diskon || produk.harga.normal;
        const varian = produk.varian.tipe.find(t => t.kode === tipe);
        const hargaTambahan = varian?.hargaTambahan || 0;
        
        return (hargaDasar + hargaTambahan) * quantity;
    },

    /**
     * Format harga ke rupiah
     * @param {number} harga - Harga
     * @returns {string} Harga terformat
     */
    formatRupiah(harga) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(harga);
    },

    /**
     * Debug produk
     */
    debug() {
        console.log('=== PRODUCTS DEBUG ===');
        console.log('Total Produk:', this.data.length);
        console.log('Kategori:', this.getKategori());
        console.log('Range Harga:', this.getHargaRange());
        console.log('Produk Unggulan:', this.getUnggulan().length);
        console.log('=====================');
    }
};

// Export ke window
window.Products = Products;

// Inisialisasi debug di development (opsional)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('Products.js loaded');
    Products.debug();
}