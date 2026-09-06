import React, { useState } from 'react';
import { X, Award } from 'lucide-react';

export function AddAccoladeModal({ isOpen, onClose, onSaveAccolade }) {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [issuingBody, setIssuingBody] = useState('');
  const [category, setCategory] = useState('Industry Award');
  const [yearAwarded, setYearAwarded] = useState(new Date().getFullYear());
  const [significance, setSignificance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !issuingBody) return;
    onSaveAccolade({
      title,
      issuingBody,
      category,
      yearAwarded: parseInt(yearAwarded, 10),
      significance
    });
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 100, padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#0F172A',
        border: '1px solid #334155',
        borderRadius: '18px',
        width: '100%', maxWidth: '480px',
        padding: '24px', color: '#F8FAFC'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={20} color="#FBBF24" /> Add Accolade & Honor (Yashas)
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}><X size={20} /></button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label style={{ fontSize: '12px', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>Award / Recognition Title</label>
            <input required value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Distinguished Fellow / Executive of Year" style={{ width: '100%', padding: '9px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '8px', color: '#F8FAFC' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '12px', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>Issuing Body / Institution</label>
              <input required value={issuingBody} onChange={e => setIssuingBody(e.target.value)} placeholder="e.g. Enterprise Alliance" style={{ width: '100%', padding: '9px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '8px', color: '#F8FAFC' }} />
            </div>
            <div>
              <label style={{ fontSize: '12px', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>Year Awarded</label>
              <input type="number" value={yearAwarded} onChange={e => setYearAwarded(e.target.value)} style={{ width: '100%', padding: '9px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '8px', color: '#F8FAFC' }} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '12px', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>Significance & Impact</label>
            <textarea rows={3} value={significance} onChange={e => setSignificance(e.target.value)} placeholder="Why this honor was bestowed..." style={{ width: '100%', padding: '9px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '8px', color: '#F8FAFC' }} />
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button type="button" onClick={onClose} style={{ flex: 1, padding: '10px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '8px', color: '#94A3B8', fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
            <button type="submit" style={{ flex: 2, padding: '10px', backgroundColor: '#F59E0B', border: 'none', borderRadius: '8px', color: '#0B0F19', fontWeight: 800, cursor: 'pointer' }}>Save Accolade</button>
          </div>
        </form>
      </div>
    </div>
  );
}
