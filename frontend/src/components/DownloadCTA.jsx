import React, { useState } from 'react';
import { Download, Smartphone, CheckCircle } from 'lucide-react';

export default function DownloadCTA() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();
    setDownloading(true);
    
    try {
      // In production, point to the actual backend URL, hardcoding localhost for dev testing
      const response = await fetch('http://localhost:3001/api/download/apk');
      if (!response.ok) throw new Error('Download not available yet');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sharent-latest.apk';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert('APK currently unavailable or server is down. Admin needs to upload one first!');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section className="section" id="download">
      <div className="container">
        <div className="glass-card flex flex-col items-center justify-center text-center animate-on-scroll" style={{ padding: '80px 40px', background: 'var(--accent-primary)', color: 'white' }}>
          
          <h2 style={{ fontSize: '3rem', marginBottom: '24px', color: 'white' }}>Ready to Share the Ride?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px', opacity: 0.9 }}>
            Join thousands of users reinventing travel and localized renting. Download the ShareRent app today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button 
              onClick={handleDownload} 
              disabled={downloading}
              className="btn" 
              style={{ padding: '16px 32px', fontSize: '1.1rem', background: 'white', color: 'var(--accent-primary)', border: 'none', fontWeight: 600, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            >
              {downloading ? 'Downloading...' : 'Direct APK Download'}
              {!downloading && <Download size={20} style={{ marginLeft: '12px' }} />}
            </button>
            <button 
              className="btn btn-secondary" 
              style={{ padding: '16px 32px', fontSize: '1.1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
            >
              Play Store
              <Smartphone size={20} style={{ marginLeft: '12px' }} />
            </button>
          </div>

          <div className="flex items-center gap-4 mt-8" style={{ marginTop: '40px', fontSize: '0.9rem', opacity: 0.8 }}>
             <CheckCircle size={16} /> Verified Security 
             <CheckCircle size={16} /> Regular Updates
          </div>
        </div>
      </div>
    </section>
  );
}
