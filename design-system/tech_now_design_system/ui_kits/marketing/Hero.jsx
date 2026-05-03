/* global React */
function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '120px 32px 100px' }}>
      <div style={{ position: 'absolute', top: '-120px', left: '-180px', width: 600, height: 600, background: 'radial-gradient(circle, rgba(10,186,181,0.16) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '20%', right: '-120px', width: 420, height: 420, background: 'radial-gradient(circle, rgba(236,96,136,0.10) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #0ABAB5 30%, #81D8D0 50%, #EC6088 70%, transparent)' }} />

      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 99, background: 'rgba(10,186,181,0.10)', border: '1px solid rgba(10,186,181,0.25)', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0ABAB5', marginBottom: 28 }}>
          <span style={{ width: 6, height: 6, background: '#EC6088', borderRadius: '50%' }} />
          IA · Automação · Hoje
        </div>
        <h1 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 900, fontSize: 84, letterSpacing: '-0.04em', lineHeight: 1, color: '#EDF4F4', margin: 0 }}>
          Automação,<br /><em style={{ fontStyle: 'normal', color: '#0ABAB5' }}>agora</em>.
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: '#9ABABA', maxWidth: 620, margin: '24px auto 36px' }}>
          A Tech Now usa IA para automatizar as tarefas que travam o seu negócio — do atendimento à operação, em dias, não meses.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button style={{ background: '#0ABAB5', color: '#04201F', border: 'none', padding: '14px 28px', borderRadius: 99, fontWeight: 700, fontSize: 14, cursor: 'pointer', boxShadow: '0 0 24px rgba(10,186,181,0.30)' }}>Falar com um especialista</button>
          <button style={{ background: 'transparent', color: '#EDF4F4', border: '1px solid #1A3535', padding: '13px 26px', borderRadius: 99, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Ver demonstração</button>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
