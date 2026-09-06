import React, { useState } from 'react';
import { X, ShieldCheck } from 'lucide-react';

export function AddRoleModal({ isOpen, onClose, onSaveRole }) {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [roleType, setRoleType] = useState('Executive Command');
  const [teamSize, setTeamSize] = useState(10);
  const [strategicScope, setStrategicScope] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !organization) return;
    onSaveRole({
      title,
      organization,
      roleType,
      teamSize: parseInt(teamSize, 10) || 1,
      strategicScope,
      startDate: new Date().toISOString().split('T')[0]
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
        width: '100%', maxWidth: '520px',
        padding: '24px', color: '#F8FAFC'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={20} color="#A78BFA" /> Add Leadership Position
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}><X size={20} /></button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label style={{ fontSize: '12px', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>Role / Position Title</label>
            <input required value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Chief Technology Officer / Board Director" style={{ width: '100%', padding: '9px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '8px', color: '#F8FAFC' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '12px', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>Organization</label>
              <input required value={organization} onChange={e => setOrganization(e.target.value)} placeholder="e.g. Global Tech Enterprise" style={{ width: '100%', padding: '9px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '8px', color: '#F8FAFC' }} />
            </div>
            <div>
              <label style={{ fontSize: '12px', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>Team Size</label>
              <input type="number" value={teamSize} onChange={e => setTeamSize(e.target.value)} style={{ width: '100%', padding: '9px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '8px', color: '#F8FAFC' }} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '12px', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>Strategic Scope & Mission</label>
            <textarea rows={3} value={strategicScope} onChange={e => setStrategicScope(e.target.value)} placeholder="Key responsibilities and strategic governance..." style={{ width: '100%', padding: '9px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '8px', color: '#F8FAFC' }} />
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button type="button" onClick={onClose} style={{ flex: 1, padding: '10px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '8px', color: '#94A3B8', fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
            <button type="submit" style={{ flex: 2, padding: '10px', backgroundColor: '#A78BFA', border: 'none', borderRadius: '8px', color: '#0B0F19', fontWeight: 800, cursor: 'pointer' }}>Save Leadership Role</button>
          </div>
        </form>
      </div>
    </div>
  );
}
