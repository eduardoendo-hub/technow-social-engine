/* global React */
const { useState } = React;

function Logo({ size = 22 }) {
  const dot = Math.max(3, Math.round(size * 0.18));
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>
      <span style={{ color: '#EDF4F4', fontSize: size }}>Tech</span>
      <span style={{ color: '#0ABAB5', fontSize: size }}>Now</span>
      <span style={{ width: dot, height: dot, background: '#EC6088', borderRadius: '50%', marginLeft: 4, marginBottom: size * 0.65, boxShadow: '0 0 8px rgba(236,96,136,0.7)', flexShrink: 0 }} />
    </span>
  );
}

function Header() {
  const [active, setActive] = useState('Produto');
  const items = ['Produto', 'Soluções', 'Preços', 'Casos', 'Docs'];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(8,15,15,0.85)', backdropFilter: 'blur(14px)', borderBottom: '1px solid #0F2020' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 40 }}>
        <Logo size={22} />
        <nav style={{ display: 'flex', gap: 28, flex: 1 }}>
          {items.map(label => (
            <button key={label} onClick={() => setActive(label)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, color: active === label ? '#EDF4F4' : '#9ABABA', padding: 0 }}>
              {label}
            </button>
          ))}
        </nav>
        <button style={{ background: 'transparent', border: 'none', color: '#9ABABA', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Entrar</button>
        <button style={{ background: '#0ABAB5', color: '#04201F', border: 'none', padding: '9px 18px', borderRadius: 99, fontWeight: 700, fontSize: 13, cursor: 'pointer', boxShadow: '0 0 18px rgba(10,186,181,0.25)' }}>Começar agora</button>
      </div>
    </header>
  );
}

window.Header = Header;
window.TNLogo = Logo;
