/* global React */
function Footer() {
  const cols = [
    { title: 'Produto', items: ['Workflows', 'Agentes IA', 'Integrações', 'API'] },
    { title: 'Empresa', items: ['Sobre', 'Casos', 'Carreiras', 'Contato'] },
    { title: 'Recursos', items: ['Docs', 'Blog', 'Status', 'Suporte'] }
  ];
  return (
    <footer style={{ borderTop: '1px solid #0F2020', padding: '56px 32px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          <window.TNLogo size={26} />
          <p style={{ fontSize: 12, color: '#9ABABA', maxWidth: 260, margin: '14px 0 0', lineHeight: 1.55 }}>Soluções de IA pra otimizar o seu negócio. Real, hoje.</p>
        </div>
        {cols.map(c => (
          <div key={c.title}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#0ABAB5', marginBottom: 14 }}>{c.title}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {c.items.map(it => <li key={it} style={{ fontSize: 13, color: '#9ABABA' }}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1080, margin: '40px auto 0', paddingTop: 20, borderTop: '1px solid #0F2020', display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#1A3535' }}>
        <span>© 2026 Tech Now</span>
        <span>Made with care · SP, Brasil</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
