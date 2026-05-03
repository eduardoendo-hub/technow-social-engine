/* global React */
function LogoBar() {
  const names = ['ACME', 'NORTH•CO', 'lumen', 'Pierre&Co', 'fluxo', 'Olivar'];
  return (
    <section style={{ borderTop: '1px solid #0F2020', borderBottom: '1px solid #0F2020', padding: '28px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#1A3535' }}>+200 empresas confiam</span>
        {names.map(n => (
          <span key={n} style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 16, color: '#2A4040', letterSpacing: '-0.02em' }}>{n}</span>
        ))}
      </div>
    </section>
  );
}
window.LogoBar = LogoBar;
