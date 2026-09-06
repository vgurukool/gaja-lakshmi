import React, { useState } from 'react';
import { X, Send, Bot, Sparkles, Crown } from 'lucide-react';

export function AIChatModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "🐘 **Greetings, Leader.** I am your Gaja Lakshmi Royal Statecraft Advisor.\n\nI provide strategic counsel grounded in **Raja Dharma, Chanakya Niti, and executive poise (*Gaja Gati*)**. How may I advise your sovereign decisions today?"
    }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { sender: 'bot', text: data.response || 'Guidance received.' }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Error connecting to Statecraft Advisor.' }]);
    } finally {
      setLoading(false);
    }
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
        width: '100%', maxWidth: '640px',
        height: '600px',
        display: 'flex', flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        color: '#F8FAFC'
      }}>
        {/* Header */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #F59E0B, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Crown size={18} color="#0B0F19" />
            </div>
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 800, margin: 0 }}>Gaja Niti — Royal Statecraft Advisor</h3>
              <span style={{ fontSize: '11px', color: '#94A3B8' }}>Chanakya Niti & Executive Poise</span>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}><X size={18} /></button>
        </div>

        {/* Message Log */}
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {messages.map((m, i) => (
            <div key={i} style={{ alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
              <div style={{
                backgroundColor: m.sender === 'user' ? '#8B5CF6' : '#1E293B',
                color: '#F8FAFC',
                padding: '12px 16px',
                borderRadius: '14px',
                fontSize: '13px',
                lineHeight: 1.5,
                whiteSpace: 'pre-line'
              }}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ alignSelf: 'flex-start', color: '#A78BFA', fontSize: '12px' }}>
              Consulting royal statecraft principles...
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSend} style={{ padding: '16px', borderTop: '1px solid #1E293B', display: 'flex', gap: '10px' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about leadership, fleet management, or executive composure..."
            style={{ flex: 1, padding: '10px 14px', backgroundColor: '#1E293B', border: '1px solid #334155', borderRadius: '10px', color: '#F8FAFC' }}
          />
          <button type="submit" disabled={loading} style={{ padding: '10px 18px', backgroundColor: '#F59E0B', border: 'none', borderRadius: '10px', color: '#0B0F19', fontWeight: 800, cursor: 'pointer' }}>
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
