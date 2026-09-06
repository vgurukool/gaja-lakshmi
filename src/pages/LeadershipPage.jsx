import React from 'react';
import { ShieldCheck, Plus, Trash2, Users, Calendar, Target, Award } from 'lucide-react';

export function LeadershipPage({ roles = [], onOpenAddRole, onDeleteRole }) {
  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#F8FAFC', margin: 0, fontFamily: "'Cinzel', serif" }}>
            Rājya & Prabhutva — Executive Command & Governance
          </h1>
          <p style={{ fontSize: '13px', color: '#94A3B8', margin: '4px 0 0 0' }}>
            Holding positions of command, institutional governance, and guiding teams with wisdom, fairness, and strategic foresight.
          </p>
        </div>

        <button
          onClick={onOpenAddRole}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            borderRadius: '10px',
            backgroundColor: '#A78BFA',
            color: '#0B0F19',
            fontWeight: 800,
            fontSize: '13px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <Plus size={16} /> Add Leadership Position
        </button>
      </div>

      {/* Roles List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {roles.map(r => (
          <div
            key={r.id}
            style={{
              backgroundColor: '#0F172A',
              border: '1px solid #1E293B',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div style={{ flex: 1, minWidth: '320px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', backgroundColor: 'rgba(139, 92, 246, 0.15)', color: '#A78BFA' }}>
                  {r.roleType}
                </span>
                <span style={{ fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34D399' }}>
                  {r.status}
                </span>
              </div>

              <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#F8FAFC', margin: '0 0 4px 0' }}>
                {r.title}
              </h2>
              <div style={{ fontSize: '13.5px', color: '#FBBF24', fontWeight: 700, marginBottom: '12px' }}>
                {r.organization}
              </div>

              {r.strategicScope && (
                <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '14px' }}>
                  {r.strategicScope}
                </p>
              )}

              {/* Accomplishments */}
              {(r.keyAccomplishments || []).length > 0 && (
                <div style={{ backgroundColor: '#1E293B', borderRadius: '10px', padding: '14px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                    Key Strategic Milestones:
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {r.keyAccomplishments.map((acc, i) => (
                      <div key={i} style={{ fontSize: '12.5px', color: '#F8FAFC', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                        <span style={{ color: '#FBBF24' }}>✓</span> {acc}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#A78BFA' }}>
                  {r.teamSize}
                </div>
                <span style={{ fontSize: '11px', color: '#94A3B8' }}>Team Commanded</span>

                <div style={{ fontSize: '12px', color: '#64748B', marginTop: '8px' }}>
                  Serving since {r.startDate}
                </div>
              </div>

              <button
                onClick={() => onDeleteRole(r.id)}
                style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', marginTop: '24px' }}
              >
                <Trash2 size={14} /> Remove Role
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
