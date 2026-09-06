import React from 'react';
import { Award, Plus, Trash2, ExternalLink, Sparkles } from 'lucide-react';

export function AccoladesPage({ accolades = [], onOpenAddAccolade, onDeleteAccolade }) {
  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#F8FAFC', margin: 0, fontFamily: "'Cinzel', serif" }}>
            Yashas & Kirti — Accolades, Honors & Social Capital
          </h1>
          <p style={{ fontSize: '13px', color: '#94A3B8', margin: '4px 0 0 0' }}>
            Reputation, public honors, and peer respect that reflect ethical stature and enduring impact.
          </p>
        </div>

        <button
          onClick={onOpenAddAccolade}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            borderRadius: '10px',
            backgroundColor: '#F59E0B',
            color: '#0B0F19',
            fontWeight: 800,
            fontSize: '13px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <Plus size={16} /> Add Accolade / Honor
        </button>
      </div>

      {/* Accolades Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        {accolades.map(a => (
          <div
            key={a.id}
            style={{
              backgroundColor: '#0F172A',
              border: '1px solid #1E293B',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Award size={22} color="#FBBF24" />
                </div>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#FBBF24', backgroundColor: '#1E293B', padding: '4px 10px', borderRadius: '8px' }}>
                  {a.yearAwarded}
                </span>
              </div>

              <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#F8FAFC', margin: '0 0 4px 0' }}>
                {a.title}
              </h2>
              <div style={{ fontSize: '13px', color: '#A78BFA', fontWeight: 700, marginBottom: '12px' }}>
                {a.issuingBody} • {a.category}
              </div>

              {a.significance && (
                <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '16px' }}>
                  {a.significance}
                </p>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1E293B', paddingTop: '14px' }}>
              {a.credentialUrl ? (
                <a
                  href={a.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#60A5FA', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}
                >
                  Verify Credential <ExternalLink size={13} />
                </a>
              ) : <div />}

              <button
                onClick={() => onDeleteAccolade(a.id)}
                style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}
              >
                <Trash2 size={14} /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
