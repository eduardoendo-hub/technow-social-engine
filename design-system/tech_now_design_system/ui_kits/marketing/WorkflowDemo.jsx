/* global React */
const { useState, useEffect } = React;

function WorkflowDemo() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 4), 1800);
    return () => clearInterval(t);
  }, []);
  const steps = [
    { label: 'Captura lead via formulário', status: 'done' },
    { label: 'Enriquece dados via API', status: step >= 1 ? 'done' : 'wait' },
    { label: 'Pontua e classifica com IA', status: step >= 2 ? 'done' : 'wait' },
    { label: 'Envia para CRM + notifica time', status: step >= 3 ? 'done' : 'wait' }
  ];
  return (
    <section style={{ padding: '20px 32px 100px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#0ABAB5', marginBottom: 14 }}>Como funciona</div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 36, fontWeight: 900, letterSpacing: '-1px', color: '#EDF4F4', margin: '0 0 16px', lineHeight: 1.1 }}>De ideia para produção em <em style={{ fontStyle: 'normal', color: '#81D8D0' }}>uma semana</em>.</h2>
          <p style={{ fontSize: 14, color: '#9ABABA', lineHeight: 1.6, margin: '0 0 24px' }}>Você descreve o processo. A gente desenha, conecta os sistemas e põe pra rodar — com observabilidade e SLA desde o dia 1.</p>
          <button style={{ background: 'transparent', color: '#0ABAB5', border: '1px solid #0ABAB5', padding: '10px 20px', borderRadius: 99, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Ver caso completo →</button>
        </div>
        <div style={{ background: '#06100F', border: '1px solid #0F2020', borderRadius: 18, overflow: 'hidden', boxShadow: '0 18px 48px -16px rgba(0,0,0,0.55)' }}>
          <div style={{ height: 2, background: 'linear-gradient(90deg, #0ABAB5, #81D8D0, #EC6088)' }} />
          <div style={{ padding: '14px 18px', borderBottom: '1px solid #0F2020', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 8, height: 8, background: '#30D158', borderRadius: '50%', boxShadow: '0 0 8px #30D158' }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#EDF4F4' }}>workflow: lead-enrichment</span>
            <span style={{ marginLeft: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#1A3535' }}>v1.4 · LIVE</span>
          </div>
          <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: s.status === 'done' ? 'rgba(10,186,181,0.07)' : '#080F0F', border: '1px solid', borderColor: s.status === 'done' ? 'rgba(10,186,181,0.25)' : '#0F2020', borderRadius: 10, padding: '10px 12px' }}>
                <span style={{ width: 18, height: 18, borderRadius: '50%', background: s.status === 'done' ? '#0ABAB5' : '#0F2020', color: '#04201F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 900 }}>{s.status === 'done' ? '✓' : i + 1}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: s.status === 'done' ? '#EDF4F4' : '#9ABABA' }}>{s.label}</span>
                <span style={{ marginLeft: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#1A3535' }}>{s.status === 'done' ? '0.4s' : '—'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.WorkflowDemo = WorkflowDemo;
