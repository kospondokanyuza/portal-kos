// penghuni.js

const penghuniData = [
  {
    namaLengkap: "Rahmat Bintang Mufadhal",
    namaPanggilan: "Bintang",
    nomorKamar: "01",
    tipeSewa: "Berdua",
    mulaiSewa: "2025-08-01",
    akhirSewa: "2026-08-01",
    sistemPembayaran: "6 bulan",
    statusPembayaranAwal: "Belum Bayar 6 Bulan",
    tanggalBayarTerakhir: "2025-08-01"
  },
  {
    namaLengkap: "Rendi Hardian",
    namaPanggilan: "Rendi",
    nomorKamar: "01",
    tipeSewa: "Berdua",
    mulaiSewa: "2025-08-01",
    akhirSewa: "2026-08-01",
    sistemPembayaran: "6 bulan",
    statusPembayaranAwal: "Belum Bayar 6 Bulan",
    tanggalBayarTerakhir: "2025-08-01"
  },
  {
    namaLengkap: "Dhiwa Alfath",
    namaPanggilan: "Dhiwa",
    nomorKamar: "02",
    tipeSewa: "Berdua",
    mulaiSewa: "2025-07-11",
    akhirSewa: "2026-07-11",
    sistemPembayaran: "6 bulan",
    statusPembayaranAwal: "Belum Bayar 6 Bulan",
    tanggalBayarTerakhir: "2025-07-11"
  },
  {
    namaLengkap: "Rasyid Al Zidan",
    namaPanggilan: "Rasyid",
    nomorKamar: "02",
    tipeSewa: "Berdua",
    mulaiSewa: "2025-07-11",
    akhirSewa: "2026-07-11",
    sistemPembayaran: "6 bulan",
    statusPembayaranAwal: "Belum Bayar 6 Bulan",
    tanggalBayarTerakhir: "2025-07-11"
  },
  {
    namaLengkap: "Hanif Sulistyo Budhi",
    namaPanggilan: "Hanif",
    nomorKamar: "03",
    tipeSewa: "Sendiri",
    mulaiSewa: "2025-08-17",
    akhirSewa: "2026-08-17",
    sistemPembayaran: "6 bulan",
    statusPembayaranAwal: "Belum Bayar 6 Bulan",
    tanggalBayarTerakhir: "2025-08-17"
  },
  {
    namaLengkap: "Ananda Erlangga",
    namaPanggilan: "Nanda",
    nomorKamar: "04",
    tipeSewa: "Berdua",
    mulaiSewa: "2025-07-07",
    akhirSewa: "2026-07-07",
    sistemPembayaran: "3 bulan",
    statusPembayaranAwal: "Belum Bayar 3 Bulan",
    tanggalBayarTerakhir: "2025-07-07"
  },
  {
    namaLengkap: "Darma Septian",
    namaPanggilan: "Darma",
    nomorKamar: "04",
    tipeSewa: "Berdua",
    mulaiSewa: "2025-07-07",
    akhirSewa: "2026-07-07",
    sistemPembayaran: "3 bulan",
    statusPembayaranAwal: "Belum Bayar 3 Bulan",
    tanggalBayarTerakhir: "2025-07-07"
  }
];

// Fungsi bantu untuk hitung tanggal bayar selanjutnya
function hitungPembayaranSelanjutnya(tanggalBayarTerakhir, sistemPembayaran) {
  const tanggal = new Date(tanggalBayarTerakhir);
  if (sistemPembayaran === "3 bulan") {
    tanggal.setMonth(tanggal.getMonth() + 3);
  } else if (sistemPembayaran === "6 bulan") {
    tanggal.setMonth(tanggal.getMonth() + 6);
  }
  return tanggal.toISOString().split("T")[0]; // Format YYYY-MM-DD
}

// Tambahkan field tanggalPembayaranSelanjutnya secara otomatis
penghuniData.forEach(p => {
  p.tanggalPembayaranSelanjutnya = hitungPembayaranSelanjutnya(p.tanggalBayarTerakhir, p.sistemPembayaran);
});

// Export untuk digunakan di file lain
window.penghuniData = penghuniData;
