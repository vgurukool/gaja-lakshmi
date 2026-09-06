import React from 'react';
import {
  Crown,
  ShieldCheck,
  Award,
  HeartHandshake,
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Zap,
  Users,
  Compass
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

export function Dashboard({ state, onNavigateTab, onOpenAddRole, onOpenAddAccolade }) {
  const metrics = state.metrics || {};
  const roles = state.leadershipRoles || [];
  const accolades = state.accolades || [];
  const philanthropy = state.philanthropy || [];
  const logs = state.sovereigntyLogs || [];

  const chartData = logs.slice().reverse().map(l => ({
    date: l.date.slice(5),
    Sovereignty: l.sovereigntyScore,
    Leadership: l.leadershipScore,
    Reputation: l.reputationScore
  }));

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        borderRadius: '20px',
        padding: '28px 32px',
        marginBottom: '28px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{ maxWidth: '750px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(245, 158, 11, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 800,
            color: '#FBBF24',
            marginBottom: '10px'
          }}>
            <Crown size={13} />
            SOVEREIGN EXECUTIVE COMMAND, REPUTATION & PROTECTIVE INFLUENCE
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: 900, color: '#F8FAFC', margin: '0 0 8px 0', fontFamily: "'Cinzel', serif" }}>
            Gaja Lakshmi Sovereignty Dashboard
          </h1>
          <p style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
            Flanked by two celestial royal elephants (*Diggajas*), Gaja Lakshmi represents sovereign authority (*Rājya*), institutional command (*Prabhutva*), public renown (*Yashas*), and the magnanimity to shelter and uplift others (*Kshema*).
          </p>
        </div>

        {/* Sovereignty Score Card */}
        <div style={{
          backgroundColor: '#0F172A',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '18px 24px',
          textAlign: 'center',
          minWidth: '200px'
        }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>
            Sovereignty Index
          </span>
          <div style={{ fontSize: '32px', fontWeight: 900, color: '#FBBF24', margin: '2px 0' }}>
            {metrics.sovereigntyIndex || 91}/100
          </div>
          <span style={{ fontSize: '11.5px', color: '#34D399', fontWeight: 700 }}>
            ● Royal Standing Active
          </span>
        </div>
      </div>

      {/* 4 Telemetry Metrics Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px', marginBottom: '28px' }}>
        <div
          onClick={() => onNavigateTab('leadership')}
          style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '14px', padding: '20px', cursor: 'pointer', transition: 'all 0.2s' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>Executive Commands</span>
            <ShieldCheck size={18} color="#A78BFA" />
          </div>
          <div style={{ fontSize: '26px', fontWeight: 900, color: '#A78BFA' }}>
            {metrics.activeRolesCount || 3} Active Roles
          </div>
          <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px' }}>
            Board Governance & Executive Command
          </div>
        </div>

        <div
          onClick={() => onNavigateTab('leadership')}
          style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '14px', padding: '20px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>Team Commanded</span>
            <Users size={18} color="#60A5FA" />
          </div>
          <div style={{ fontSize: '26px', fontWeight: 900, color: '#60A5FA' }}>
            {metrics.totalTeamCommanded || 190} People
          </div>
          <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px' }}>
            Engineers, Researchers & Mentees
          </div>
        </div>

        <div
          onClick={() => onNavigateTab('accolades')}
          style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '14px', padding: '20px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>Accolades & Prestige</span>
            <Award size={18} color="#FBBF24" />
          </div>
          <div style={{ fontSize: '26px', fontWeight: 900, color: '#FBBF24' }}>
            {metrics.totalAccolades || 4} Honors
          </div>
          <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px' }}>
            Public Credibility & Fellowships
          </div>
        </div>

        <div
          onClick={() => onNavigateTab('philanthropy')}
          style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '14px', padding: '20px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>Philanthropic Reach</span>
            <HeartHandshake size={18} color="#34D399" />
          </div>
          <div style={{ fontSize: '26px', fontWeight: 900, color: '#34D399' }}>
            {(metrics.totalBeneficiaries || 5735).toLocaleString()}
          </div>
          <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px' }}>
            Beneficiaries Lifted • ${(metrics.totalPhilanthropyAmount || 83000).toLocaleString()} Endowed
          </div>
        </div>
      </div>

      {/* 2-Column Split: Executive Roles & Accolades Spotlight */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '28px' }}>
        {/* Executive Roles Spotlight */}
        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '16px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={18} color="#A78BFA" /> Executive Command & Governance
            </h3>
            <button
              onClick={() => onNavigateTab('leadership')}
              style={{ background: 'none', border: 'none', color: '#A78BFA', fontSize: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              View All <ArrowUpRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {roles.slice(0, 3).map(r => (
              <div
                key={r.id}
                style={{
                  backgroundColor: '#1E293B',
                  borderRadius: '10px',
                  padding: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#F8FAFC' }}>
                    {r.title}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#94A3B8' }}>
                    {r.organization} • {r.roleType}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#FBBF24' }}>
                    {r.teamSize} Team Members
                  </span>
                  <div style={{ fontSize: '10.5px', color: '#64748B' }}>
                    Since {r.startDate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accolades Spotlight */}
        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '16px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={18} color="#FBBF24" /> Accolades & Public Honors (Yashas)
            </h3>
            <button
              onClick={() => onNavigateTab('accolades')}
              style={{ background: 'none', border: 'none', color: '#FBBF24', fontSize: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              View All <ArrowUpRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {accolades.slice(0, 3).map(a => (
              <div
                key={a.id}
                style={{
                  backgroundColor: '#1E293B',
                  borderRadius: '10px',
                  padding: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#F8FAFC' }}>
                    {a.title}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#94A3B8' }}>
                    {a.issuingBody} • {a.category}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#FBBF24', backgroundColor: '#0F172A', padding: '2px 8px', borderRadius: '6px' }}>
                    {a.yearAwarded}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7-Day Sovereignty Progression Chart */}
      <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '16px', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC', margin: 0 }}>
              Sovereignty, Leadership Command & Reputation Progression
            </h3>
            <span style={{ fontSize: '12px', color: '#94A3B8' }}>Multi-dimensional executive poise index</span>
          </div>
        </div>

        <div style={{ height: '280px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <XAxis dataKey="date" stroke="#64748B" />
              <YAxis stroke="#64748B" domain={[60, 100]} />
              <Tooltip contentStyle={{ backgroundColor: '#1E293B', borderColor: '#334155', borderRadius: '8px', color: '#F8FAFC' }} />
              <Legend />
              <Area type="monotone" dataKey="Sovereignty" stroke="#FBBF24" fill="rgba(245, 158, 11, 0.2)" />
              <Area type="monotone" dataKey="Leadership" stroke="#A78BFA" fill="rgba(139, 92, 246, 0.15)" />
              <Area type="monotone" dataKey="Reputation" stroke="#34D399" fill="rgba(16, 185, 129, 0.15)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
