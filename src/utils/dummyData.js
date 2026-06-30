// ── Repository / Submission list ────────────────────────────────────
export const repoList = [
  {
    id: 1,
    namaMahasiswa: 'Budi Santoso',
    nama: 'Budi Santoso',
    nim: '20210078',
    judul: 'Sistem Informasi Manajemen Perpustakaan Berbasis Web',
    kategori: 'Sistem Informasi',
    similarity: 12,
    tanggal: '12 Jan 2025',
    status: 'Terverifikasi',
  },
  {
    id: 2,
    namaMahasiswa: 'Siti Rahayu',
    nama: 'Siti Rahayu',
    nim: '20210091',
    judul: 'Aplikasi Mobile Pemesanan Makanan Berbasis Android',
    kategori: 'Mobile',
    similarity: 25,
    tanggal: '10 Jan 2025',
    status: 'Menunggu',
  },
  {
    id: 3,
    namaMahasiswa: 'Ahmad Fauzi',
    nama: 'Ahmad Fauzi',
    nim: '20210045',
    judul: 'Implementasi Machine Learning untuk Deteksi Penyakit Tanaman',
    kategori: 'Machine Learning',
    similarity: 8,
    tanggal: '05 Jan 2025',
    status: 'Terverifikasi',
  },
  {
    id: 4,
    namaMahasiswa: 'Dewi Lestari',
    nama: 'Dewi Lestari',
    nim: '20210112',
    judul: 'Sistem Keamanan Jaringan Menggunakan Metode IDS',
    kategori: 'Keamanan Jaringan',
    similarity: 35,
    tanggal: '02 Jan 2025',
    status: 'Perlu Revisi',
  },
  {
    id: 5,
    namaMahasiswa: 'Rizky Pratama',
    nama: 'Rizky Pratama',
    nim: '20210067',
    judul: 'Website E-Commerce dengan Fitur Rekomendasi Produk',
    kategori: 'Web',
    similarity: 18,
    tanggal: '28 Des 2024',
    status: 'Terverifikasi',
  },
  {
    id: 6,
    namaMahasiswa: 'Putri Anggraini',
    nama: 'Putri Anggraini',
    nim: '20210103',
    judul: 'Sistem Pendukung Keputusan Pemilihan Beasiswa Menggunakan AHP',
    kategori: 'Sistem Informasi',
    similarity: 21,
    tanggal: '20 Des 2024',
    status: 'Menunggu',
  },
];

// ── Stats untuk dashboard mahasiswa ─────────────────────────────────
export const statsMahasiswa = [
  {
    label: 'Pengajuan Saya',
    value: 3,
    icon: 'description',
    color: 'bg-blue-50 text-blue-500',
  },
  {
    label: 'Terverifikasi',
    value: 2,
    icon: 'check_circle',
    color: 'bg-green-50 text-green-500',
  },
  {
    label: 'Menunggu',
    value: 1,
    icon: 'schedule',
    color: 'bg-yellow-50 text-yellow-500',
  },
  {
    label: 'Perlu Revisi',
    value: 0,
    icon: 'edit_note',
    color: 'bg-red-50 text-red-400',
  },
];

// ── Stats untuk dashboard admin ─────────────────────────────────────
export const statsAdmin = [
  {
    label: 'Total Repositori',
    value: 128,
    icon: 'folder_copy',
    color: 'bg-blue-50 text-blue-500',
    trend: '+12%',
  },
  {
    label: 'Terverifikasi',
    value: 94,
    icon: 'check_circle',
    color: 'bg-green-50 text-green-500',
    trend: '+8%',
  },
  {
    label: 'Menunggu Review',
    value: 21,
    icon: 'schedule',
    color: 'bg-yellow-50 text-yellow-500',
    trend: '+3%',
  },
  {
    label: 'Perlu Revisi',
    value: 13,
    icon: 'edit_note',
    color: 'bg-red-50 text-red-400',
    trend: '-2%',
  },
];

// ── Upload per bulan (untuk BarChart) ───────────────────────────────
export const uploadPerBulan = [
  { bulan: 'Jul', jumlah: 1 },
  { bulan: 'Agu', jumlah: 2 },
  { bulan: 'Sep', jumlah: 3 },
  { bulan: 'Okt', jumlah: 5 },
  { bulan: 'Nov', jumlah: 4 },
  { bulan: 'Des', jumlah: 3 },
  { bulan: 'Jan', jumlah: 6 },
];

// ── Distribusi kategori (untuk PieChart "Distribusi Kategori") ─────
// PieChart di DashboardAdmin.jsx pakai dataKey="value", jadi field
// harus bernama `name` dan `value` agar Legend & Tooltip muncul benar.
export const distribusiKategori = [
  { name: 'Sistem Informasi', value: 38 },
  { name: 'Mobile', value: 22 },
  { name: 'Machine Learning', value: 31 },
  { name: 'Keamanan Jaringan', value: 17 },
  { name: 'Web', value: 20 },
];

// ── Daftar kategori (untuk halaman admin/Kategori.jsx & guest/Browse.jsx) ─
export const kategoriList = [
  { id: 1, nama: 'Sistem Informasi', jumlah: 38 },
  { id: 2, nama: 'Mobile', jumlah: 22 },
  { id: 3, nama: 'Machine Learning', jumlah: 31 },
  { id: 4, nama: 'Keamanan Jaringan', jumlah: 17 },
  { id: 5, nama: 'Web', jumlah: 20 },
];

// ── Daftar keyword populer (untuk halaman admin/Keyword.jsx) ───────
export const keywordList = [
  { id: 1, kata: 'machine learning', frekuensi: 42 },
  { id: 2, kata: 'sistem informasi', frekuensi: 38 },
  { id: 3, kata: 'android', frekuensi: 29 },
  { id: 4, kata: 'web', frekuensi: 25 },
  { id: 5, kata: 'keamanan jaringan', frekuensi: 21 },
  { id: 6, kata: 'e-commerce', frekuensi: 18 },
  { id: 7, kata: 'data mining', frekuensi: 15 },
  { id: 8, kata: 'IoT', frekuensi: 12 },
  { id: 9, kata: 'deep learning', frekuensi: 9 },
  { id: 10, kata: 'cloud computing', frekuensi: 6 },
];


export const aktivitasTerbaru = [
  {
    id: 1,
    namaMahasiswa: 'Budi Santoso',
    aksi: 'mengupload repositori baru',
    judul: 'Sistem Informasi Manajemen Perpustakaan',
    waktu: '5 menit lalu',
    icon: 'upload_file',
  },
  {
    id: 2,
    namaMahasiswa: 'Siti Rahayu',
    aksi: 'mengajukan revisi',
    judul: 'Aplikasi Mobile Pemesanan Makanan',
    waktu: '1 jam lalu',
    icon: 'edit_note',
  },
  {
    id: 3,
    namaMahasiswa: 'Admin',
    aksi: 'memverifikasi repositori',
    judul: 'Implementasi Machine Learning Deteksi Penyakit',
    waktu: '3 jam lalu',
    icon: 'check_circle',
  },
];