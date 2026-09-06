import React from 'react';
import {
  Crown,
  ShieldCheck,
  Award,
  HeartHandshake,
  BookOpen,
  Bot,
  Plus
} from 'lucide-react';

export function Sidebar({ activeTab, setActiveTab, metrics = {}, onOpenAddRole, onOpenAddAccolade, onOpenAIChat }) {
  return (
    <aside style={{
      width: '270px',
      backgroundColor: '#0F172A',
      borderRight: '1px solid #1E293B',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      zIndex: 40,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header Brand */}
      <div style={{
        height: '76px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        borderBottom: '1px solid #1E293B',
        gap: '12px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          boxShadow: '0 4px 12px rgba(139, 92, 246, 0.35)',
          color: '#0B0F19'
        }}>
          🐘
        </div>
        <div>
          <h1 style={{ fontSize: '17px', fontWeight: 900, color: '#F8FAFC', margin: 0, fontFamily: "'Cinzel', serif" }}>
            GAJA LAKSHMI
          </h1>
          <span style={{ fontSize: '10px', fontWeight: 700, color: '#FBBF24', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'block' }}>
            Sovereignty & Royal Grace
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '5px', flex: 1, overflowY: 'auto' }}>
        <button
          onClick={() => setActiveTab('dashboard')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '11px 14px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: activeTab === 'dashboard' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
            color: activeTab === 'dashboard' ? '#FBBF24' : '#94A3B8',
            fontWeight: activeTab === 'dashboard' ? 800 : 600,
            fontSize: '13.5px',
            cursor: 'pointer',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Crown size={18} color={activeTab === 'dashboard' ? '#FBBF24' : '#94A3B8'} />
            <span>Royal Overview</span>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('leadership')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '11px 14px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: activeTab === 'leadership' ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
            color: activeTab === 'leadership' ? '#A78BFA' : '#94A3B8',
            fontWeight: activeTab === 'leadership' ? 800 : 600,
            fontSize: '13.5px',
            cursor: 'pointer',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={18} color={activeTab === 'leadership' ? '#A78BFA' : '#94A3B8'} />
            <span>Leadership & Governance</span>
          </div>
          <span style={{ fontSize: '11px', fontWeight: 800, padding: '2px 7px', borderRadius: '10px', backgroundColor: '#1E293B', color: '#A78BFA' }}>
            {metrics.activeRolesCount || 3}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('accolades')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '11px 14px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: activeTab === 'accolades' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
            color: activeTab === 'accolades' ? '#FBBF24' : '#94A3B8',
            fontWeight: activeTab === 'accolades' ? 800 : 600,
            fontSize: '13.5px',
            cursor: 'pointer',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Award size={18} color={activeTab === 'accolades' ? '#FBBF24' : '#94A3B8'} />
            <span>Accolades & Prestige</span>
          </div>
          <span style={{ fontSize: '11px', fontWeight: 800, padding: '2px 7px', borderRadius: '10px', backgroundColor: '#1E293B', color: '#FBBF24' }}>
            {metrics.totalAccolades || 4}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('philanthropy')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '11px 14px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: activeTab === 'philanthropy' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
            color: activeTab === 'philanthropy' ? '#34D399' : '#94A3B8',
            fontWeight: activeTab === 'philanthropy' ? 800 : 600,
            fontSize: '13.5px',
            cursor: 'pointer',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <HeartHandshake size={18} color={activeTab === 'philanthropy' ? '#34D399' : '#94A3B8'} />
            <span>Protective Philanthropy</span>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('statecraft')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '11px 14px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: activeTab === 'statecraft' ? 'rgba(217, 119, 6, 0.15)' : 'transparent',
            color: activeTab === 'statecraft' ? '#F59E0B' : '#94A3B8',
            fontWeight: activeTab === 'statecraft' ? 800 : 600,
            fontSize: '13.5px',
            cursor: 'pointer',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BookOpen size={18} color={activeTab === 'statecraft' ? '#F59E0B' : '#94A3B8'} />
            <span>Vedic Statecraft & Niti</span>
          </div>
        </button>
      </nav>

      {/* Quick Action Buttons */}
      <div style={{ padding: '16px', borderTop: '1px solid #1E293B', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button
          onClick={onOpenAddRole}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '9px',
            borderRadius: '8px',
            backgroundColor: '#A78BFA',
            color: '#0B0F19',
            fontWeight: 800,
            fontSize: '12.5px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <Plus size={16} /> Add Leadership Role
        </button>

        <button
          onClick={onOpenAIChat}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '9px',
            borderRadius: '8px',
            backgroundColor: '#1E293B',
            border: '1px solid #334155',
            color: '#A78BFA',
            fontWeight: 700,
            fontSize: '12.5px',
            cursor: 'pointer'
          }}
        >
          <Bot size={16} /> Royal Statecraft Advisor
        </button>

        <div style={{ fontSize: '11px', color: '#64748B', textAlign: 'center', marginTop: '4px' }}>
          Port: <strong style={{ color: '#FBBF24' }}>3004</strong> • FastAPI
        </div>
      </div>
    </aside>
  );
}
