// **Data Produk**
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Keyboard", harga: 850000 },
    { id: 5, nama: "Mouse", harga: 400000 }
];

// Nama fungsi bebas (EventHandler)
const eventHandler = {
    logAksi: function (pesan) {
        console.log(`[LOG]: ${pesan}`);
    }
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
    const produkBaru = { id, nama, harga };
    // Menggunakan Spread Operator sesuai perintah soal
    produkList = [...produkList, produkBaru];
    eventHandler.logAksi(`Produk ${nama} ditambahkan.`);
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(id) {
    produkList = produkList.filter(produk => produk.id !== id);
    eventHandler.logAksi(`Produk ID ${id} dihapus.`);
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
    console.log("\n=== Daftar Produk ===");
    produkList.forEach((produk) => {
        // Destructuring sesuai perintah soal
        const { id, nama, harga } = produk;
        console.log(`ID: ${id}, Nama: ${nama}, Harga: ${harga}`);
    });
}

tampilkanProduk();

// Contoh penambahan data
tambahProduk(6, "Smartwatch", 2500000);
tampilkanProduk();

// Menghapus produk ID 2
hapusProduk(2);
tampilkanProduk();