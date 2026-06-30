import { useState } from 'react';

export default function UploadRepo() {
  const [file, setFile]       = useState(null);
  const [dragging, setDrag]   = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors]   = useState({});

  const [form, setForm] = useState({
    judul: '', abstrak: '', kategori: '', tahun: '', keywords: '',
  });

  function handleDrop(e) {
    e.preventDefault(); setDrag(false);
    const f = e.dataTransfer.files[0];
    if (f?.type === 'application/pdf') {
      setFile(f);
      setErrors((prev) => ({ ...prev, file: undefined }));
    }
  }

  function handleFile(e) {
    const f = e.target.files[0];
    if (f) {
      setFile(f);
      setErrors((prev) => ({ ...prev, file: undefined }));
    }
  }

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate() {
    const newErrors = {};
    if (!file)               newErrors.file     = 'File PDF wajib diunggah';
    if (!form.judul.trim())  newErrors.judul     = 'Judul tugas akhir wajib diisi';
    if (!form.kategori)      newErrors.kategori  = 'Pilih salah satu kategori';
    if (!form.tahun)         newErrors.tahun     = 'Pilih tahun';
    if (!form.abstrak.trim()) newErrors.abstrak  = 'Abstrak wajib diisi';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1200);
  }

  if (success) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <span className="material-symbols-rounded icon-filled text-green-600 text-[40px]">check_circle</span>
      </div>
      <h2 className="text-xl font-bold text-on-surface">Berhasil Diajukan!</h2>
      <p className="text-sm text-gray-400 mt-2 max-w-xs">
        Repositorismu sedang menunggu verifikasi admin. Kami akan memberi tahu kamu setelah diproses.
      </p>
      <button
        onClick={() => { setSuccess(false); setForm({ judul:'',abstrak:'',kategori:'',tahun:'',keywords:'' }); setFile(null); setErrors({}); }}
        className="btn-primary mt-6"
      >
        <span className="material-symbols-rounded text-[18px]">add</span>
        Upload Lagi
      </button>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>

        {/* Upload area */}
        <div className="card">
          <p className="text-sm font-semibold mb-3">File Tugas Akhir (PDF)</p>
          <div
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-8 text-center transition cursor-pointer
              ${dragging ? 'border-primary bg-primary/5'
                : errors.file ? 'border-red-400 bg-red-50/50'
                : 'border-outline/60 hover:border-primary/50 hover:bg-primary/[0.02]'}`}
            onClick={() => document.getElementById('file-input').click()}
          >
            {file ? (
              <div className="flex items-center justify-center gap-3">
                <span className="material-symbols-rounded icon-filled text-red-500 text-[32px]">picture_as_pdf</span>
                <div className="text-left">
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <button type="button" onClick={(e) => { e.stopPropagation(); setFile(null); }}
                  className="ml-3 text-gray-400 hover:text-red-500">
                  <span className="material-symbols-rounded text-[18px]">close</span>
                </button>
              </div>
            ) : (
              <>
                <span className={`material-symbols-rounded text-[48px] ${errors.file ? 'text-red-300' : 'text-gray-300'}`}>upload_file</span>
                <p className={`mt-2 text-sm font-medium ${errors.file ? 'text-red-500' : 'text-gray-500'}`}>Drag & drop PDF di sini</p>
                <p className="text-xs text-gray-400 mt-1">atau klik untuk pilih file · Maks 10 MB</p>
              </>
            )}
          </div>
          <input id="file-input" type="file" accept=".pdf" className="hidden" onChange={handleFile} />
          {errors.file && (
            <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-rounded text-[14px]">error</span>
              {errors.file}
            </p>
          )}
        </div>

        {/* Metadata */}
        <div className="card space-y-4">
          <p className="text-sm font-semibold">Informasi Repositori</p>

          <div>
            <label className="label">Judul Tugas Akhir *</label>
            <input
              className={`input ${errors.judul ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
              placeholder="Judul lengkap tugas akhir"
              value={form.judul} onChange={(e) => updateField('judul', e.target.value)} />
            {errors.judul && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <span className="material-symbols-rounded text-[14px]">error</span>
                {errors.judul}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">Kategori *</label>
              <select
                className={`input ${errors.kategori ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
                value={form.kategori}
                onChange={(e) => updateField('kategori', e.target.value)}>
                <option value="">Pilih kategori</option>
                <option>Sistem Informasi</option>
                <option>Kecerdasan Buatan</option>
                <option>Data Science</option>
                <option>Internet of Things</option>
                <option>Mobile Development</option>
                <option>Keamanan Siber</option>
                <option>Cloud Computing</option>
                <option>Game Development</option>
              </select>
              {errors.kategori && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <span className="material-symbols-rounded text-[14px]">error</span>
                  {errors.kategori}
                </p>
              )}
            </div>
            <div>
              <label className="label">Tahun *</label>
              <select
                className={`input ${errors.tahun ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
                value={form.tahun}
                onChange={(e) => updateField('tahun', e.target.value)}>
                <option value="">Pilih tahun</option>
                {[2025,2024,2023,2022].map(y => <option key={y}>{y}</option>)}
              </select>
              {errors.tahun && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <span className="material-symbols-rounded text-[14px]">error</span>
                  {errors.tahun}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="label">Keyword (pisahkan dengan koma)</label>
            <input className="input" placeholder="machine learning, python, dataset"
              value={form.keywords} onChange={(e) => updateField('keywords', e.target.value)} />
          </div>

          <div>
            <label className="label">Abstrak *</label>
            <textarea
              className={`input resize-none ${errors.abstrak ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
              rows={5}
              placeholder="Tulis abstrak tugas akhir di sini..."
              value={form.abstrak} onChange={(e) => updateField('abstrak', e.target.value)} />
            {errors.abstrak && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <span className="material-symbols-rounded text-[14px]">error</span>
                {errors.abstrak}
              </p>
            )}
          </div>
        </div>

        {Object.keys(errors).length > 0 && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
            <span className="material-symbols-rounded text-[18px]">warning</span>
            Lengkapi data yang wajib diisi sebelum mengajukan.
          </div>
        )}

        <div className="flex gap-3 justify-end">
          <button type="button" className="btn-secondary">Simpan Draft</button>
          <button type="submit" disabled={loading} className="btn-primary">
            {loading
              ? <><span className="material-symbols-rounded text-[18px] animate-spin">refresh</span> Mengirim...</>
              : <><span className="material-symbols-rounded text-[18px]">send</span> Ajukan</>
            }
          </button>
        </div>
      </form>
    </div>
  );
}