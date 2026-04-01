// controller.mjs
import users from "./data.mjs"; // Import data awal

// 1. Melihat data menggunakan map() 
const index = () => {
    console.log("\n=== Daftar User (Menggunakan Map) ===");
    users.map((user, i) => {
        console.log(`${i + 1}. ${user.nama} | ${user.umur} Thn | ${user.alamat} | ${user.email}`);
    });
};

// 2. Menambah data menggunakan push() 
const store = (user) => {
    users.push(user);
    console.log(`[Berhasil] Menambahkan: ${user.nama}`);
};

// 3. Menghapus data (Berdasarkan Nama) 
const destroy = (nama) => {
    const indexHapus = users.findIndex(user => user.nama === nama);
    if (indexHapus !== -1) {
        users.splice(indexHapus, 1);
        console.log(`[Berhasil] Menghapus data: ${nama}`);
    } else {
        console.log(`[Gagal] Data ${nama} tidak ditemukan.`);
    }
};

export { index, store, destroy }; // Named export 