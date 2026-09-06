import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { LeadershipPage } from './pages/LeadershipPage';
import { AccoladesPage } from './pages/AccoladesPage';
import { PhilanthropyPage } from './pages/PhilanthropyPage';
import { StatecraftGuide } from './pages/StatecraftGuide';
import { AddRoleModal } from './components/AddRoleModal';
import { AddAccoladeModal } from './components/AddAccoladeModal';
import { AIChatModal } from './components/AIChatModal';

export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [state, setState] = useState({
    leadershipRoles: [],
    accolades: [],
    philanthropy: [],
    sovereigntyLogs: [],
    settings: {},
    metrics: {}
  });

  const [isAddRoleOpen, setIsAddRoleOpen] = useState(false);
  const [isAddAccoladeOpen, setIsAddAccoladeOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  const fetchState = async () => {
    try {
      const res = await fetch('/api/state');
      if (res.ok) {
        const data = await res.json();
        setState(data);
      }
    } catch (e) {
      console.error('Failed to load state from Gaja Lakshmi FastAPI server', e);
    }
  };

  useEffect(() => {
    fetchState();
  }, []);

  const handleSaveRole = async (roleData) => {
    try {
      const res = await fetch('/api/roles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(roleData)
      });
      if (res.ok) fetchState();
    } catch (e) {
      console.error('Error saving role', e);
    }
  };

  const handleDeleteRole = async (rid) => {
    if (!window.confirm('Remove this leadership position?')) return;
    try {
      const res = await fetch(`/api/roles/${rid}`, { method: 'DELETE' });
      if (res.ok) fetchState();
    } catch (e) {
      console.error('Error deleting role', e);
    }
  };

  const handleSaveAccolade = async (accData) => {
    try {
      const res = await fetch('/api/accolades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(accData)
      });
      if (res.ok) fetchState();
    } catch (e) {
      console.error('Error saving accolade', e);
    }
  };

  const handleDeleteAccolade = async (aid) => {
    if (!window.confirm('Remove this accolade?')) return;
    try {
      const res = await fetch(`/api/accolades/${aid}`, { method: 'DELETE' });
      if (res.ok) fetchState();
    } catch (e) {
      console.error('Error deleting accolade', e);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0B0F19', color: '#F1F5F9' }}>
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        metrics={state.metrics}
        onOpenAddRole={() => setIsAddRoleOpen(true)}
        onOpenAddAccolade={() => setIsAddAccoladeOpen(true)}
        onOpenAIChat={() => setIsAIChatOpen(true)}
      />

      {/* Main Content Area */}
      <div style={{ flex: 1, marginLeft: '270px', display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header
          activeTab={activeTab}
          metrics={state.metrics}
          onOpenAddRole={() => setIsAddRoleOpen(true)}
        />

        <main style={{ flex: 1 }}>
          {activeTab === 'dashboard' && (
            <Dashboard
              state={state}
              onNavigateTab={setActiveTab}
              onOpenAddRole={() => setIsAddRoleOpen(true)}
              onOpenAddAccolade={() => setIsAddAccoladeOpen(true)}
            />
          )}

          {activeTab === 'leadership' && (
            <LeadershipPage
              roles={state.leadershipRoles}
              onOpenAddRole={() => setIsAddRoleOpen(true)}
              onDeleteRole={handleDeleteRole}
            />
          )}

          {activeTab === 'accolades' && (
            <AccoladesPage
              accolades={state.accolades}
              onOpenAddAccolade={() => setIsAddAccoladeOpen(true)}
              onDeleteAccolade={handleDeleteAccolade}
            />
          )}

          {activeTab === 'philanthropy' && (
            <PhilanthropyPage
              philanthropy={state.philanthropy}
            />
          )}

          {activeTab === 'statecraft' && (
            <StatecraftGuide />
          )}
        </main>
      </div>

      {/* Modals */}
      <AddRoleModal
        isOpen={isAddRoleOpen}
        onClose={() => setIsAddRoleOpen(false)}
        onSaveRole={handleSaveRole}
      />

      <AddAccoladeModal
        isOpen={isAddAccoladeOpen}
        onClose={() => setIsAddAccoladeOpen(false)}
        onSaveAccolade={handleSaveAccolade}
      />

      <AIChatModal
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
      />
    </div>
  );
}
