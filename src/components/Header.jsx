import React from 'react';
import { Crown, Sparkles, ShieldCheck } from 'lucide-react';

export function Header({ activeTab, metrics = {}, onOpenAddRole }) {
  const titles = {
    dashboard: 'Royal Sovereignty & Executive Overview',
    leadership: 'Rājya & Prabhutva — Executive Command & Governance',
    accolades: 'Yashas & Kirti — Accolades, Honors & Social Capital',
    philanthropy: 'Udāratva & Kshema — Protective Influence & Community Endowments',
    statecraft: 'Rāja Dharma & Chanakya Niti Principles'
  };

  return (
    <header style={{
      height: '76px',
      backgroundColor: '#0F172A',
      borderBottom: '1px solid #1E293B',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 30
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)'
        }}>
          🐘
        </div>
        <div>
          <h2 style={{ fontSize: '17px', fontWeight: 900, margin: 0, color: '#F8FAFC' }}>
            {titles[activeTab] || 'Gaja Lakshmi'}
          </h2>
          <span style={{ fontSize: '11.5px', color: '#94A3B8' }}>
            जय सर्वगते देवि सर्वशक्तिप्रदायिनि • Sovereignty, Royal Dignity & Social Influence
          </span>
        </div>
      </div>

      {/* Right Stats Chip */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(30, 41, 59, 0.8)',
          border: '1px solid #334155',
          borderRadius: '14px',
          padding: '6px 14px',
          fontSize: '12px',
          fontWeight: 800
        }}>
          <span style={{ color: '#FBBF24' }}>👑 Sovereignty: {metrics.sovereigntyIndex || 91}/100</span>
          <span style={{ color: '#64748B' }}>•</span>
          <span style={{ color: '#A78BFA' }}>🛡️ Team: {metrics.totalTeamCommanded || 190} Commanded</span>
        </div>
      </div>
    </header>
  );
}
