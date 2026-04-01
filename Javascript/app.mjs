// app.mjs
import { index, store, destroy } from "./controller.mjs"; 

const main = () => {
    // 1. Tambahkan minimal 2 data baru [cite: 37, 54, 59]
    store({ nama: 'Zetsu', umur: 19, alamat: 'Surabaya', email: 'zetsu@unesa.ac.id' });
    store({ nama: 'Yuki', umur: 22, alamat: 'Gedangan', email: 'yuki@sidoarjo.com' });

    // 2. Tampilkan data setelah ditambah [cite: 56]
    index();

    // 3. Hapus salah satu data 
    destroy('Data 2');

    // 4. Tampilkan data akhir untuk verifikasi
    console.log("\n--- Data Setelah Penghapusan ---");
    index();
};

main(); // Jalankan program utama 