import React, { useState } from 'react';
import { UploadCloud, Shield, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!email) return setStatus({ type: 'error', message: 'Admin login email required' });
    if (!password) return setStatus({ type: 'error', message: 'Admin password required' });
    if (!file) return setStatus({ type: 'error', message: 'No APK file selected' });
    if (!file.name.endsWith('.apk')) return setStatus({ type: 'error', message: 'File must be an APK' });

    setUploading(true);
    setStatus({ type: '', message: '' });

    const formData = new FormData();
    formData.append('apk', file);

    try {
      // Assuming backend is running on localhost:3001 in dev
      const response = await fetch('http://localhost:3001/api/admin/upload-apk', {
        method: 'POST',
        headers: {
          'x-admin-email': email,
          'x-admin-password': password,
        },
        body: formData,
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus({ type: 'success', message: 'Success! New APK is now live.' });
        setFile(null);
        setPassword('');
      } else {
        throw new Error(data.message || 'Upload failed');
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="glass-card" style={{ maxWidth: '500px', margin: '0 auto', padding: '40px', position: 'relative' }}>
          
          <div className="flex flex-col items-center text-center mb-8">
            <div style={{ padding: '16px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', marginBottom: '16px' }}>
              <Shield size={32} />
            </div>
            <h1 style={{ fontSize: '2rem' }}>Admin Portal</h1>
            <p style={{ color: 'var(--text-muted)' }}>Upload the latest ShareRent APK</p>
          </div>

          {status.message && (
            <div style={{ 
              padding: '12px 16px', 
              borderRadius: '8px', 
              marginBottom: '24px',
              display: 'flex', alignItems: 'center', gap: '8px',
              background: status.type === 'error' ? 'rgba(239,68,68,0.1)' : 'rgba(34,197,94,0.1)',
              color: status.type === 'error' ? '#ef4444' : '#22c55e',
              border: `1px solid ${status.type === 'error' ? '#ef4444' : '#22c55e'}`
            }}>
              {status.type === 'error' ? <AlertCircle size={20} /> : <CheckCircle2 size={20} />}
              {status.message}
            </div>
          )}

          <form onSubmit={handleUpload} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" style={{ fontWeight: 600 }}>Login (Email)</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email..."
                style={{
                  padding: '12px 16px', borderRadius: '8px',
                  background: 'var(--bg-color)', border: '1px solid var(--border-color)',
                  color: 'var(--text-color)', outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" style={{ fontWeight: 600 }}>Password</label>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                style={{
                  padding: '12px 16px', borderRadius: '8px',
                  background: 'var(--bg-color)', border: '1px solid var(--border-color)',
                  color: 'var(--text-color)', outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="apk-upload" style={{ fontWeight: 600 }}>APK File</label>
              
              <div 
                style={{
                  border: '1px dashed var(--border-color)', borderRadius: '12px', padding: '32px',
                  textAlign: 'center', cursor: 'pointer',
                  background: file ? 'var(--card-bg)' : 'transparent',
                  borderColor: file ? 'var(--accent-primary)' : 'var(--border-color)',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => document.getElementById('apk-upload').click()}
              >
                <div className="flex flex-col items-center gap-2">
                  <UploadCloud size={32} style={{ color: file ? 'var(--accent-primary)' : 'var(--text-muted)' }} />
                  <p style={{ fontWeight: 500, color: file ? 'var(--text-color)' : 'var(--text-muted)' }}>
                    {file ? file.name : 'Click to select APK file'}
                  </p>
                </div>
              </div>
              
              <input 
                type="file" 
                id="apk-upload"
                accept=".apk, application/vnd.android.package-archive"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={uploading}
              style={{ width: '100%', padding: '14px', marginTop: '10px' }}
            >
              {uploading ? 'Uploading...' : 'Publish Update'}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
