import React from 'react';
import { HeartHandshake, Users, DollarSign, Globe, Sparkles } from 'lucide-react';

export function PhilanthropyPage({ philanthropy = [] }) {
  const totalBeneficiaries = philanthropy.reduce((sum, p) => sum + (p.beneficiariesCount || 0), 0);
  const totalAmount = philanthropy.reduce((sum, p) => sum + (p.amountContributed || 0), 0);

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#F8FAFC', margin: 0, fontFamily: "'Cinzel', serif" }}>
          Udāratva & Kshema — Protective Philanthropy & Community Endowments
        </h1>
        <p style={{ fontSize: '13px', color: '#94A3B8', margin: '4px 0 0 0' }}>
          Just as the royal elephant shelters and defends the herd, true Gaja sovereignty is measured by your capacity to uplift and empower others.
        </p>
      </div>

      {/* Top Philanthropy Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', marginBottom: '28px' }}>
        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '14px', padding: '20px' }}>
          <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase' }}>People Impacted</span>
          <div style={{ fontSize: '28px', fontWeight: 900, color: '#34D399', margin: '4px 0' }}>
            {totalBeneficiaries.toLocaleString()}+
          </div>
          <span style={{ fontSize: '11px', color: '#64748B' }}>Direct beneficiaries & scholars</span>
        </div>

        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '14px', padding: '20px' }}>
          <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase' }}>Total Endowments</span>
          <div style={{ fontSize: '28px', fontWeight: 900, color: '#FBBF24', margin: '4px 0' }}>
            ${totalAmount.toLocaleString()}
          </div>
          <span style={{ fontSize: '11px', color: '#64748B' }}>Contributed to date</span>
        </div>

        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '14px', padding: '20px' }}>
          <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase' }}>Key Pillars</span>
          <div style={{ fontSize: '28px', fontWeight: 900, color: '#A78BFA', margin: '4px 0' }}>
            3 Initiatives
          </div>
          <span style={{ fontSize: '11px', color: '#64748B' }}>Culture, Tech Grants & Clean Water</span>
        </div>
      </div>

      {/* Initiatives List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {philanthropy.map(p => (
          <div
            key={p.id}
            style={{
              backgroundColor: '#0F172A',
              border: '1px solid #1E293B',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34D399', display: 'inline-block', marginBottom: '6px' }}>
                {p.category}
              </span>
              <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#F8FAFC', margin: '0 0 6px 0' }}>
                {p.initiativeName}
              </h2>
              <p style={{ fontSize: '13px', color: '#CBD5E1', margin: '0 0 8px 0', maxWidth: '750px' }}>
                {p.impactSummary}
              </p>
              <span style={{ fontSize: '11px', color: '#64748B' }}>
                Initiative Date: {p.date}
              </span>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#34D399' }}>
                ${Number(p.amountContributed).toLocaleString()}
              </div>
              <span style={{ fontSize: '11.5px', color: '#CBD5E1', fontWeight: 700 }}>
                {p.beneficiariesCount} Beneficiaries
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
