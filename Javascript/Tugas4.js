class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null; // Awalnya belum menyewa apapun
  }

  // Metode untuk mencatat transaksi penyewaan
  sewaKendaraan(namaKendaraan) {
    this.kendaraanDisewa = namaKendaraan;
    console.log(`Berhasil: ${this.nama} menyewa kendaraan ${namaKendaraan}.`);
  }
}

// Array untuk menyimpan semua data pelanggan
let daftarPelanggan = [];

// Fungsi untuk menampilkan pelanggan yang sedang menyewa
function tampilkanPenyewa() {
    console.log("\n==> DAFTAR PELANGGAN YANG SEDANG MENYEWA <==");
    
    let penyewaAktif = daftarPelanggan.filter(p => p.kendaraanDisewa !== null);

    if (penyewaAktif.length === 0) {
        console.log("Belum ada pelanggan yang menyewa kendaraan.");
    } else {
        penyewaAktif.forEach((p, index) => {
            console.log(`${index + 1}. Nama: ${p.nama} | HP: ${p.nomorTelepon} | Kendaraan: ${p.kendaraanDisewa}`);
        });
    }
    console.log("=====================================\n");
}

// 1. Daftarkan pelanggan baru 
let pelanggan1 = new Pelanggan("Kevin Santoso", "08123456789");
let pelanggan2 = new Pelanggan("Budi Utomo", "08987654321");
let pelanggan3 = new Pelanggan("Daril Bay", "08123413523");

// 2. Masukkan ke dalam daftar sistem
daftarPelanggan.push(pelanggan1, pelanggan2, pelanggan3);

// 3. Lakukan transaksi sewa
pelanggan1.sewaKendaraan("Toyota Avanza");
pelanggan2.sewaKendaraan("Toyota GR Yaris");
pelanggan3.sewaKendaraan("Toyota FT86");


// 4. Tampilkan daftar penyewa aktif
tampilkanPenyewa();