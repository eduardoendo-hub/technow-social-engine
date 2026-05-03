/* global React */
function CTABanner() {
  return (
    <section style={{ padding: '60px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', background: 'linear-gradient(135deg, #0ABAB5 0%, #057572 100%)', borderRadius: 24, padding: '56px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 320, height: 320, background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -40, width: 280, height: 280, background: 'radial-gradient(circle, rgba(236,96,136,0.18) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(8,15,15,0.55)', marginBottom: 12 }}>Pronto pra automatizar?</div>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 36, fontWeight: 900, letterSpacing: '-1px', color: '#04201F', margin: 0, lineHeight: 1.05, maxWidth: 520 }}>Conheça a Tech Now em uma reunião de 30 minutos.</h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ background: '#080F0F', color: '#EDF4F4', border: 'none', padding: '14px 26px', borderRadius: 99, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Agendar conversa</button>
            <button style={{ background: 'rgba(8,15,15,0.10)', color: '#04201F', border: '1px solid rgba(8,15,15,0.25)', padding: '13px 24px', borderRadius: 99, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Ver preços</button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.CTABanner = CTABanner;
