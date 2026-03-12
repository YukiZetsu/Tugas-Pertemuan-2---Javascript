let produktoko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// 1. Fungsi Menambahkan Produk
function tambahProduk(nama, harga, stok) {
    // Mencari ID terakhir agar ID baru selalu urut
    let idBaru = produktoko.length > 0 ? produktoko[produktoko.length - 1].id + 1 : 1;

    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };

    produktoko.push(produkBaru);
    console.log("Produk baru berhasil ditambahkan!");
}

// 2. Fungsi Menghapus Produk berdasarkan ID
function hapusProduk(id) {
    // Kita cari index-nya pakai findIndex yang tadi kita bahas
    let index = produktoko.findIndex(produk => produk.id === id);

    if (index !== -1) {
        produktoko.splice(index, 1);
        console.log("Produk dengan ID " + id + " berhasil dihapus.");
    } else {
        console.log("Produk tidak ditemukan.");
    }
}

// 3. Fungsi Menampilkan Produk
function tampilkanProduk() {
    console.log("--- Daftar Produk Toko ---");
    produktoko.forEach(function (produk) {
        console.log("ID: " + produk.id + ", Nama: " + produk.nama + ", Harga: " + produk.harga + ", Stok: " + produk.stok);
    });
}

// --- UJI COBA ---
tampilkanProduk();

tambahProduk("Monitor", 1500000, 5);
tampilkanProduk();

hapusProduk(2); // Menghapus Mouse
tampilkanProduk();