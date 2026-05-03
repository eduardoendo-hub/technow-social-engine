/* global React */
function Feature({ tag, title, body, accent }) {
  return (
    <div style={{ background: '#06100F', border: '1px solid #0F2020', borderRadius: 18, padding: 28, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: accent }} />
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#0ABAB5', marginBottom: 18 }}>{tag}</div>
      <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px', color: '#EDF4F4', lineHeight: 1.15, margin: '0 0 10px' }}>{title}</h3>
      <p style={{ fontSize: 13, color: '#9ABABA', lineHeight: 1.55, margin: 0 }}>{body}</p>
    </div>
  );
}

function FeatureGrid() {
  return (
    <section style={{ padding: '100px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#0ABAB5', marginBottom: 12 }}>O que fazemos</div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 44, fontWeight: 900, letterSpacing: '-1.5px', color: '#EDF4F4', margin: 0, lineHeight: 1.05 }}>Soluções de <em style={{ fontStyle: 'normal', color: '#81D8D0' }}>IA aplicada</em>,<br />não de slide.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <Feature tag="Atendimento" title="Agentes que resolvem, não respondem." body="Bots conectados aos seus sistemas resolvem 80% dos chamados sem passar pra humanos." accent="#0ABAB5" />
          <Feature tag="Operação" title="Workflows que rodam sozinhos." body="Do lead ao pós-venda — cada etapa orquestrada com regras claras e auditadas." accent="#81D8D0" />
          <Feature tag="Insights" title="Dashboards que falam sua língua." body="Pergunte em português, receba a resposta em segundos com a fonte do dado." accent="#EC6088" />
        </div>
      </div>
    </section>
  );
}
window.FeatureGrid = FeatureGrid;
