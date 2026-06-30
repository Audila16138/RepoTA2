import { repoList, statsMahasiswa } from '../../utils/dummyData';
import { statusBadge, truncate } from '../../utils/helpers';

export default function DashboardMahasiswa() {
  const visibleStats = statsMahasiswa.filter((s) => s.label !== 'Menunggu');

  // Data untuk tabel "Riwayat Upload Mahasiswa" (selain repo Budi sendiri)
  const riwayatUpload = [repoList[2], repoList[3], repoList[4], repoList[1]];

  // Data untuk tabel "Daftar Repository Mahasiswa" (semua repo)
  const daftarRepo = repoList;

  return (
    <div className="space-y-5">

      {/* Welcome banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-500 to-primary-400 rounded-2xl p-6 sm:p-8 text-white">
        <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10"></div>
        <div className="pointer-events-none absolute -bottom-14 right-16 w-28 h-28 rounded-full bg-white/10"></div>

        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="hidden xs:flex w-14 h-14 rounded-2xl bg-white/15 items-center justify-center shrink-0">
              <span className="material-symbols-rounded icon-filled text-[28px]">waving_hand</span>
            </div>
            <div>
              <p className="text-white/70 text-sm">Selamat datang kembali,</p>
              <h2 className="text-xl sm:text-2xl font-bold mt-0.5">Budi Santoso</h2>
              <p className="text-white/60 text-xs mt-1">NIM 20210078 · Teknik Informatika</p>
            </div>
          </div>

          <a href="/mahasiswa/upload" className="inline-flex items-center justify-center gap-2 bg-white text-primary text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-white/90 transition-colors shrink-0">
            <span className="material-symbols-rounded text-[18px]">upload_file</span>
            Upload Repositori
          </a>
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {visibleStats.map(({ label, value, icon, color }) => (
          <div key={label} className="card flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
              <span className="material-symbols-rounded icon-filled text-[20px]">{icon}</span>
            </div>
            <div>
              <p className="text-xl font-bold text-on-surface">{value}</p>
              <p className="text-xs text-gray-400 leading-snug">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bento: Riwayat Upload + Aksi Cepat */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Riwayat Upload Mahasiswa */}
        <div className="card lg:col-span-2">
          <p className="text-sm font-semibold mb-4">Riwayat Upload Mahasiswa</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="table-th rounded-tl-lg">Nama Mahasiswa</th>
                  <th className="table-th">Judul Repository</th>
                  <th className="table-th rounded-tr-lg">Tanggal Upload</th>
                </tr>
              </thead>
              <tbody>
                {riwayatUpload.map((r) => (
                  <tr key={r.id} className="table-row">
                    <td className="table-td font-medium whitespace-nowrap">{r.namaMahasiswa}</td>
                    <td className="table-td max-w-[260px]">{truncate(r.judul, 45)}</td>
                    <td className="table-td text-gray-400 whitespace-nowrap">{r.tanggal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick actions */}
        <div className="card flex flex-col gap-3">
          <p className="text-sm font-semibold">Aksi Cepat</p>
          {[
            { label: 'Upload Repositori Baru', icon: 'upload_file',   href: '/mahasiswa/upload',     color: 'bg-primary/10 text-primary' },
            { label: 'Cek Similaritas',        icon: 'manage_search', href: '/mahasiswa/similarity', color: 'bg-green-50 text-green-600' },
            { label: 'Lihat Riwayat',          icon: 'history',       href: '/mahasiswa/history',    color: 'bg-yellow-50 text-yellow-600' },
          ].map(({ label, icon, href, color }) => (
            <a key={href} href={href} className="flex items-center gap-3 p-3 rounded-xl border border-outline/40 hover:border-primary/40 hover:bg-primary/5 transition group">
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
                <span className="material-symbols-rounded icon-filled text-[18px]">{icon}</span>
              </span>
              <span className="text-sm font-medium text-gray-600 group-hover:text-primary">{label}</span>
              <span className="material-symbols-rounded text-[16px] text-gray-300 ml-auto group-hover:text-primary">chevron_right</span>
            </a>
          ))}
        </div>

      </div>

      {/* Daftar Repository Mahasiswa */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold">Daftar Repository Mahasiswa</p>
          <a href="/mahasiswa/history" className="text-xs text-primary hover:underline font-medium">Lihat semua →</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="table-th rounded-tl-lg">No</th>
                <th className="table-th">Nama Mahasiswa</th>
                <th className="table-th">Judul Repository</th>
                <th className="table-th">Tanggal Upload</th>
                <th className="table-th rounded-tr-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              {daftarRepo.map((r, i) => (
                <tr key={r.id} className="table-row">
                  <td className="table-td text-gray-400">{i + 1}</td>
                  <td className="table-td font-medium whitespace-nowrap">{r.namaMahasiswa}</td>
                  <td className="table-td max-w-[260px]">{truncate(r.judul, 50)}</td>
                  <td className="table-td text-gray-400 whitespace-nowrap">{r.tanggal}</td>
                  <td className="table-td">
                    <span className={statusBadge(r.status)}>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}