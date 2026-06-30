import { useParams, Link, useNavigate } from 'react-router-dom';
import { repoList } from '../../utils/dummyData';

export default function GuestDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const repo = repoList.find((r) => String(r.id) === id && r.status === 'Terverifikasi');

  if (!repo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <span className="material-symbols-rounded text-gray-300 text-[48px] mb-3">search_off</span>
        <h2 className="text-lg font-semibold text-on-surface">Repositori tidak ditemukan</h2>
        <p className="text-sm text-gray-400 mt-1">Repositori mungkin belum diverifikasi atau tidak tersedia.</p>
        <Link to="/guest" className="btn-primary mt-5">
          <span className="material-symbols-rounded text-[18px]">arrow_back</span>
          Kembali ke Repositori
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto text-left">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors mb-5"
      >
        <span className="material-symbols-rounded text-[18px]">arrow_back</span>
        Kembali
      </button>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <span className="badge badge-info">{repo.kategori}</span>
          <span className="text-sm text-gray-400">{repo.tahun}</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-on-surface leading-snug mb-6">
          {repo.judul}
        </h1>

        {/* Abstrak — terkunci untuk guest */}
        <div className="mb-5">
          <p className="text-sm font-semibold text-on-surface mb-2">Abstrak</p>
          <div className="relative rounded-xl overflow-hidden border border-outline/40">
            <p className="text-sm text-gray-500 leading-relaxed p-4 blur-sm select-none pointer-events-none">
              Penelitian ini membahas perancangan dan implementasi sistem untuk menyelesaikan
              permasalahan yang ditemukan pada objek penelitian. Metode yang digunakan meliputi
              analisis kebutuhan, perancangan sistem, implementasi, serta pengujian untuk
              memastikan sistem berjalan sesuai dengan tujuan yang telah ditetapkan sebelumnya
              oleh peneliti.
            </p>
            <div className="absolute inset-0 bg-white/40 flex flex-col items-center justify-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center">
                <span className="material-symbols-rounded icon-filled text-gray-400 text-[20px]">lock</span>
              </div>
              <p className="text-xs font-medium text-gray-500">Abstrak terkunci untuk tamu</p>
            </div>
          </div>
        </div>

        {/* Notice — info terbatas untuk guest */}
        <div className="flex items-start gap-3 bg-primary/5 border border-primary/15 rounded-xl px-4 py-3">
          <span className="material-symbols-rounded text-primary text-[20px] mt-0.5">info</span>
          <p className="text-sm text-gray-600 leading-relaxed">
            Kamu melihat informasi terbatas sebagai tamu. Masuk sebagai mahasiswa atau admin untuk
            melihat detail lengkap seperti abstrak, penulis, dan dokumen tugas akhir.
          </p>
        </div>

        <Link to="/login" className="btn-primary w-full justify-center mt-5">
          <span className="material-symbols-rounded text-[18px]">login</span>
          Masuk untuk Lihat Selengkapnya
        </Link>
      </div>
    </div>
  );
}