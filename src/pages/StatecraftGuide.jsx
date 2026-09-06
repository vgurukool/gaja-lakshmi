import React from 'react';
import { BookOpen, Crown, Shield, Compass, Sparkles } from 'lucide-react';

export function StatecraftGuide() {
  const principles = [
    {
      title: "Gaja-Gamana (The Elephant's Majestic Composure)",
      sanskrit: "गजगामी प्रशान्तचित्तः",
      description: "An elephant walks with deliberate, majestic, unhurried steps. A sovereign leader does not panic at market volatility or organizational noise. They act from deep strategic calm.",
      action: "Cultivate high emotional composure (Dhira) under executive pressure."
    },
    {
      title: "Prabhu-Shakti (The Power of Capital & Command)",
      sanskrit: "प्रभुशक्तिः कोषबलसम्पन्नता",
      description: "In Chanakya Niti, Prabhu Shakti is the capacity to mobilize financial reserves, reliable logistics, and high-performing teams to execute long-range visions.",
      action: "Maintain healthy reserves and top-tier infrastructure for strategic agility."
    },
    {
      title: "Kshema-Dharma (Protective Magnanimity)",
      sanskrit: "लोकक्षेमार्थं प्रवर्तनम्",
      description: "Power without protection is mere tyranny. True Gaja sovereignty is validated when your power serves as a shelter (Kshema) and creates abundant livelihoods for others.",
      action: "Invest actively in mentorship, job creation, and sustainable community philanthropy."
    },
    {
      title: "Yashas & Satyam (Reputation Founded on Integrity)",
      sanskrit: "सत्येन लभ्यते कीर्तिः",
      description: "Dhana Lakshmi gives coins, but Gaja Lakshmi gives the prestige and peer trust that no amount of gold can purchase. A leader's word is their bond.",
      action: "Guard credibility and transparent governance as your highest intangible asset."
    }
  ];

  return (
    <div style={{ padding: '32px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#F8FAFC', margin: 0, fontFamily: "'Cinzel', serif" }}>
          Vedic Statecraft & Raja Dharma (Gaja Niti Guide)
        </h1>
        <p style={{ fontSize: '13px', color: '#94A3B8', margin: '4px 0 0 0' }}>
          Classical Sanskrit principles for modern CEOs, executives, founders, and community stewards.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        {principles.map((p, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#0F172A',
              border: '1px solid #1E293B',
              borderRadius: '16px',
              padding: '24px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Crown size={18} color="#FBBF24" />
              <span style={{ fontSize: '12px', color: '#A78BFA', fontWeight: 800 }}>{p.sanskrit}</span>
            </div>

            <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#F8FAFC', margin: '0 0 10px 0' }}>
              {p.title}
            </h2>

            <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '14px' }}>
              {p.description}
            </p>

            <div style={{ backgroundColor: '#1E293B', borderRadius: '8px', padding: '10px 14px', borderLeft: '3px solid #F59E0B' }}>
              <strong style={{ fontSize: '11.5px', color: '#FBBF24', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Executive Application:</strong>
              <span style={{ fontSize: '12.5px', color: '#F8FAFC' }}>{p.action}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
