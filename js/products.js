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
				gallery: [
					"assets/images/bluabu-1.jpg",
					"assets/images/bluabu-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan bludru warna abu-abu elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan bludru premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 4000,
				diskon: null
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"bludru",
				"abu-abu"
			]
		},

		{
			id: "2",
			nama: "Hard Cover Bludru Biru",
			kategori: "Hard Cover Bludru",
			gambar: {
				utama: "assets/images/blubir.jpg",
				gallery: [
					"assets/images/blubir-1.jpg",
					"assets/images/blubir-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan bludru warna biru elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan bludru premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 4000,
				diskon: null
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"bludru",
				"biru"
			]
		},

		{
			id: "3",
			nama: "Hard Cover Bludru Coklat",
			kategori: "Hard Cover Bludru",
			gambar: {
				utama: "assets/images/blucok.jpg",
				gallery: [
					"assets/images/blucok-1.jpg",
					"assets/images/blucok-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan bludru warna coklat elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan bludru premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 4000,
				diskon: 3800
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"bludru",
				"coklat"
			]
		},

		{
			id: "4",
			nama: "Hard Cover Bludru Hijau",
			kategori: "Hard Cover Bludru",
			gambar: {
				utama: "assets/images/bluhij.jpg",
				gallery: [
					"assets/images/bluhij-1.jpg",
					"assets/images/bluhij-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan bludru warna hijau elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan bludru premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 4000,
				diskon: 3800
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"bludru",
				"hijau"
			]
		},

		{
			id: "5",
			nama: "Hard Cover Bludru Hitam",
			kategori: "Hard Cover Bludru",
			gambar: {
				utama: "assets/images/bluhit.jpg",
				gallery: [
					"assets/images/bluhit-1.jpg",
					"assets/images/bluhit-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan bludru warna hitam elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan bludru premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 4000,
				diskon: 3800
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"bludru",
				"hitam"
			]
		},

		{
			id: "6",
			nama: "Hard Cover Bludru Merah Marun",
			kategori: "Hard Cover Bludru",
			gambar: {
				utama: "assets/images/blumar.jpg",
				gallery: [
					"assets/images/blumar-1.jpg",
					"assets/images/blumar-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan bludru warna merah marun elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan bludru premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 4000,
				diskon: 3800
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"bludru",
				"merah marun"
			]
		},

		{
			id: "7",
			nama: "Hard Cover Bludru Ungu",
			kategori: "Hard Cover Bludru",
			gambar: {
				utama: "assets/images/blungu.jpg",
				gallery: [
					"assets/images/blungu-1.jpg",
					"assets/images/blungu-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan bludru warna ungu elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan bludru premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 4000,
				diskon: null
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"bludru",
				"ungu"
			]
		},

		{
			id: "8",
			nama: "Hard Cover Diamond Gold",
			kategori: "Hard Cover Diamond",
			gambar: {
				utama: "assets/images/diagol.jpg",
				gallery: [
					"assets/images/diagol-1.jpg",
					"assets/images/diagol-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna kuning emas elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3200,
				diskon: 3000
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"diamond",
				"emas"
			]
		},

		{
			id: "9",
			nama: "Hard Cover Diamond Biru",
			kategori: "Hard Cover Diamond",
			gambar: {
				utama: "assets/images/diabir.jpg",
				gallery: [
					"assets/images/diabir-1.jpg",
					"assets/images/diabir-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna biru elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3200,
				diskon: 3000
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"diamond",
				"biru"
			]
		},

		{
			id: "10",
			nama: "Hard Cover Diamond Hijau",
			kategori: "Hard Cover Diamond",
			gambar: {
				utama: "assets/images/diahij.jpg",
				gallery: [
					"assets/images/diahij-1.jpg",
					"assets/images/diahij-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna hijau elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3200,
				diskon: 3000
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"diamond",
				"hijau"
			]
		},

		{
			id: "11",
			nama: "Hard Cover Diamond Hitam",
			kategori: "Hard Cover Diamond",
			gambar: {
				utama: "assets/images/diahit.jpg",
				gallery: [
					"assets/images/diahit-1.jpg",
					"assets/images/diahit-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna hitam elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3200,
				diskon: 3000
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"diamond",
				"hitam"
			]
		},

		{
			id: "12",
			nama: "Hard Cover Diamond Krem",
			kategori: "Hard Cover Diamond",
			gambar: {
				utama: "assets/images/diakrem.jpg",
				gallery: [
					"assets/images/diakrem-1.jpg",
					"assets/images/diakrem-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna krem/putih tulang elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3200,
				diskon: 3000
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"diamond",
				"krem"
			]
		},

		{
			id: "13",
			nama: "Hard Cover Diamond Merah",
			kategori: "Hard Cover Diamond",
			gambar: {
				utama: "assets/images/diamer.jpg",
				gallery: [
					"assets/images/diamer-1.jpg",
					"assets/images/diamer-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna merah elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3200,
				diskon: 3000
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"diamond",
				"merah"
			]
		},

		{
			id: "14",
			nama: "Hard Cover Glossy Biru",
			kategori: "Hard Cover Glossy",
			gambar: {
				utama: "assets/images/glossybr.jpg",
				gallery: [
					"assets/images/glossybr-1.jpg",
					"assets/images/glossybr-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna biru glossy mengkilap.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3500,
				diskon: 3300
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"glossy",
				"biru"
			]
		},

		{
			id: "15",
			nama: "Hard Cover Glossy Hijau",
			kategori: "Hard Cover Glossy",
			gambar: {
				utama: "assets/images/glossyhj.jpg",
				gallery: [
					"assets/images/glossyhj-1.jpg",
					"assets/images/glossyhj-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna hijau glossy mengkilap.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3500,
				diskon: 3300
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"glossy",
				"hijau"
			]
		},

		{
			id: "16",
			nama: "Hard Cover Glossy Emas",
			kategori: "Hard Cover Glossy",
			gambar: {
				utama: "assets/images/glossygold.jpg",
				gallery: [
					"assets/images/glossygold-1.jpg",
					"assets/images/glossygold-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna emas glossy mengkilap.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3500,
				diskon: 3300
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"glossy",
				"emas"
			]
		},

		{
			id: "17",
			nama: "Hard Cover Glossy Merah",
			kategori: "Hard Cover Glossy",
			gambar: {
				utama: "assets/images/glossymr.jpg",
				gallery: [
					"assets/images/glossymr-1.jpg",
					"assets/images/glossymr-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna merah glossy mengkilap.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3500,
				diskon: 3300
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"glossy",
				"merah"
			]
		},

		{
			id: "18",
			nama: "Hard Cover Glossy Ungu",
			kategori: "Hard Cover Glossy",
			gambar: {
				utama: "assets/images/glossyungu.jpg",
				gallery: [
					"assets/images/glossyungu-1.jpg",
					"assets/images/glossyungu-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna ungu glossy mengkilap.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3500,
				diskon: null
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"glossy",
				"ungu"
			]
		},

		{
			id: "19",
			nama: "Hard Cover RCP Biru Muda Motif",
			kategori: "Hard Cover RCP",
			gambar: {
				utama: "assets/images/rcpbma.jpg",
				gallery: [
					"assets/images/rcpbma-1.jpg",
					"assets/images/rcpbma-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna biru muda motif akar elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3200,
				diskon: 3000
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"rcp",
				"biru muda"
			]
		},

		{
			id: "20",
			nama: "Hard Cover RCP Biru Tua Motif",
			kategori: "Hard Cover RCP",
			gambar: {
				utama: "assets/images/rcpbta.jpg",
				gallery: [
					"assets/images/rcpbta-1.jpg",
					"assets/images/rcpbta-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna biru tua motif akar elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3200,
				diskon: 3000
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"rcp",
				"biru tua"
			]
		},

		{
			id: "21",
			nama: "Hard Cover RCP 70 Coklat Batik",
			kategori: "Hard Cover RCP",
			gambar: {
				utama: "assets/images/rcp70.jpg",
				gallery: [
					"assets/images/rcp70-1.jpg",
					"assets/images/rcp70-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna coklat bermotif batik elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3500,
				diskon: 3300
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"rcp",
				"batik"
			]
		},

		{
			id: "22",
			nama: "Hard Cover RCP Putih Motif Kembang",
			kategori: "Hard Cover RCP",
			gambar: {
				utama: "assets/images/rcpput.jpg",
				gallery: [
					"assets/images/rcpput-1.jpg",
					"assets/images/rcpput-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna putih dengan motif kembang elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3200,
				diskon: 3000
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"rcp",
				"putih kembang"
			]
		},

		{
			id: "23",
			nama: "Hard Cover Glossy Silver",
			kategori: "Hard Cover Glossy",
			gambar: {
				utama: "assets/images/glossysil.jpg",
				gallery: [
					"assets/images/glossysil-1.jpg",
					"assets/images/glossysil-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna silver glossy mengkilap elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3500,
				diskon: null
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"glossy",
				"silver"
			]
		},

		{
			id: "24",
			nama: "Hard Cover Diamond Silver",
			kategori: "Hard Cover Diamond",
			gambar: {
				utama: "assets/images/diasil.jpg",
				gallery: [
					"assets/images/diasil-1.jpg",
					"assets/images/diasil-2.jpg"
				]
			},
			deskripsi: {
				pendek: "Sampul buku Yasin hardcover bahan fancy paper warna silver elegan.",
				panjang: "Sampul buku Yasin dengan desain hardcover berbahan fancy paper premium yang memberikan tampilan mewah dan elegan. Dilengkapi lafadz Allah poli embos dengan lapisan mika plastik sehingga terlihat mengkilap dan lebih awet. Cocok digunakan untuk buku Yasin, tahlilan, maupun kenang-kenangan."
			},
			harga: {
				normal: 3200,
				diskon: 3000
			},
			penjualan: {
				terjual: 125,
				rating: 4.6
			},
			stok: 200,
			varian: {
				tipe: [
					{
						kode: "PS",
						nama: "Punggung Standar (PS)",
						deskripsi: "Untuk buku 192–240 halaman (±1 cm)",
						hargaTambahan: 0
					},
					{
						kode: "PK",
						nama: "Punggung Kecil (PK)",
						deskripsi: "Untuk buku 128–180 halaman (±0.7 cm)",
						hargaTambahan: 0
					}
				]
			},
			unggulan: true,
			tags: [
				"yasin",
				"hardcover",
				"diamond",
				"silver"
			]
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
};

// Export ke window
window.Products = Products;

// Inisialisasi debug di development (opsional)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    Products.debug();
}
