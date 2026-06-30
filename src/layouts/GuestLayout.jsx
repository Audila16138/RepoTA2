import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function GuestLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface">
      {/* Navbar */}
      <header className="bg-white border-b border-outline/40 px-4 sm:px-6 h-14 flex items-center justify-between shadow-sm relative">
        <Link to="/guest" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-rounded icon-filled text-white text-[16px]">auto_stories</span>
          </div>
          <span className="font-bold text-primary text-sm">RepoTA</span>
        </Link>

        {/* Desktop action */}
        <Link
          to="/login"
          className="hidden sm:inline-flex btn-primary text-xs py-1.5 px-3"
        >
          <span className="material-symbols-rounded text-[16px]">login</span>
          Masuk
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="sm:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-rounded text-[22px] text-gray-600">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="sm:hidden absolute top-14 left-0 right-0 bg-white border-b border-outline/40 shadow-card px-4 py-3 z-20">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full justify-center text-xs py-2"
            >
              <span className="material-symbols-rounded text-[16px]">login</span>
              Masuk
            </Link>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Outlet />
      </main>
    </div>
  );
}