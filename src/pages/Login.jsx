import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const TABS = [
  { key: 'mahasiswa', label: 'Mahasiswa', icon: 'school' },
  { key: 'admin',     label: 'Admin',     icon: 'admin_panel_settings' },
];

export default function Login() {
  const navigate  = useNavigate();
  const [tab, setTab]         = useState('mahasiswa');
  const [nim, setNim]         = useState('');
  const [password, setPass]   = useState('');
  const [showPass, setShow]   = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (tab === 'admin') navigate('/admin/dashboard');
      else                 navigate('/mahasiswa/dashboard');
    }, 900);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-surface to-white flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <span className="material-symbols-rounded icon-filled text-white text-[20px]">auto_stories</span>
          </div>
          <span className="font-bold text-primary text-lg">RepoTA</span>
        </div>

        {/* Welcome text — centered */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-on-surface mb-1">Selamat Datang</h1>
          <p className="text-sm text-gray-400">Masuk sebagai siapa?</p>
        </div>

        {/* Tab selector — hanya Mahasiswa & Admin */}
        <div className="flex gap-1.5 bg-gray-100 p-1 rounded-xl mb-6">
          {TABS.map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all
                ${tab === key ? 'bg-white text-primary shadow-card' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <span className="material-symbols-rounded text-[16px]">{icon}</span>
              {label}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              {tab === 'admin' ? 'Username' : 'NIM / Email'}
            </label>
            <input
              type="text"
              className="input"
              placeholder={tab === 'admin' ? 'admin@univ.ac.id' : '2021xxxxx'}
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                className="input pr-10"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPass(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShow(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <span className="material-symbols-rounded text-[18px]">
                  {showPass ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
            {tab === 'mahasiswa' && (
              <div className="flex justify-end mt-1">
                <a href="#" className="text-xs text-primary hover:underline">Lupa password?</a>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center py-2.5 text-sm"
          >
            {loading
              ? <span className="material-symbols-rounded text-[18px] animate-spin">refresh</span>
              : <span className="material-symbols-rounded text-[18px]">login</span>
            }
            {loading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>

        {/* Link ke akses Tamu — bukan tab, tapi jalur terpisah */}
        <div className="mt-6 text-center">
          <Link
            to="/guest"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors"
          >
            <span className="material-symbols-rounded text-[18px]">person_search</span>
            Jelajahi repositori sebagai Tamu
          </Link>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          © 2025 RepoTA · Universitas Ahmad Dahlan - Prodi Sistem Informasi
        </p>
      </div>
    </div>
  );
}