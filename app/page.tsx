const services = [
  { code: "01", title: "Engenharia estrutural", text: "Dimensionamento estático e dinâmico de estruturas metálicas, bases, plataformas e equipamentos industriais." },
  { code: "02", title: "Análise FEA", text: "Simulações por elementos finitos para validar tensões, deformações, fadiga e segurança antes da fabricação." },
  { code: "03", title: "BIM e modelagem 3D", text: "Compatibilização, maquetes virtuais e modelos coordenados que reduzem interferências e retrabalho em campo." },
  { code: "04", title: "Detalhamento técnico", text: "Desenhos 2D, listas de materiais e documentação executiva pronta para fabricação, montagem e inspeção." },
];

const projects = [
  { title: "Ponte ferroviária", area: "Infraestrutura ferroviária", image: "/projects/ponte-ferroviaria.webp", text: "Estrutura metálica mista com análise FEA, modelagem 3D, detalhamento 2D e tecnologia BIM." },
  { title: "Galpão para mineração", area: "Mineração", image: "/projects/galpao-mineracao.webp", text: "Estrutura para equipamentos sensíveis, com projeto, dimensionamento e coordenação construtiva." },
  { title: "Grippers de manipulação", area: "Automotivo", image: "/projects/fea-gripper.webp", text: "Cálculo estrutural e avaliação FEA para dispositivos de linhas de montagem de carrocerias." },
  { title: "Plataformas industriais", area: "Automação industrial", image: "/projects/plataforma.webp", text: "Projeto estrutural de plataforma para linha automotiva, integrado ao processo e aos equipamentos." },
];

const capabilities = ["SAP2000", "Autodesk Robot", "Ansys", "Advanced Steel", "Navisworks", "CATIA", "NX"];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="GSA Engenharia - início">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span><strong>GSA</strong><b>ENGENHARIA</b><small>Engenharia com foco em qualidade</small></span>
        </a>
        <nav aria-label="Navegação principal"><a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#processo">Processo</a><a href="#sobre">Sobre</a></nav>
        <a className="button button-small" href="#contato">Solicitar proposta <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" aria-hidden="true" /><div className="blueprint" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Engenharia estrutural • Projetos industriais</p>
          <h1>Precisão que<br />transforma <em>projetos</em><br />em realidade.</h1>
          <p className="hero-copy">Da concepção à fabricação, conectamos cálculo estrutural, análise FEA, BIM e detalhamento para entregar soluções seguras, eficientes e executáveis.</p>
          <div className="hero-actions"><a className="button" href="#projetos">Conheça nossos projetos <Arrow /></a><a className="text-link" href="#servicos">Explorar especialidades <span>↓</span></a></div>
        </div>
        <div className="hero-index" aria-hidden="true"><span>GSA / 2026</span><b>01</b></div>
        <div className="hero-rail">
          <div><b>FEA</b><span>Validação estrutural</span></div><div><b>BIM</b><span>Coordenação integrada</span></div><div><b>2D + 3D</b><span>Projeto executivo</span></div><div><b>INDÚSTRIA</b><span>Soluções sob medida</span></div>
        </div>
      </section>

      <section className="intro section" id="sobre">
        <div className="section-label"><span>01</span> Engenharia aplicada</div>
        <div className="intro-grid"><h2>Projetamos o que a indústria precisa <em>construir com confiança.</em></h2><div><p>Transformamos desafios complexos em soluções de engenharia claras, verificáveis e prontas para execução. Cada decisão é orientada por análise técnica, segurança e visão de ciclo completo.</p><a className="line-link" href="#processo">Como trabalhamos <Arrow /></a></div></div>
        <div className="metrics" aria-label="Principais competências"><div><strong>FEA</strong><span>Análises estáticas<br />e dinâmicas</span></div><div><strong>BIM</strong><span>Modelos coordenados<br />e compatibilizados</span></div><div><strong>2D/3D</strong><span>Do conceito ao<br />detalhamento executivo</span></div><div><strong>360°</strong><span>Visão integrada de<br />engenharia e fabricação</span></div></div>
      </section>

      <section className="services section" id="servicos">
        <div className="section-label light"><span>02</span> Nossas especialidades</div>
        <div className="section-heading light"><h2>Engenharia completa,<br /><em>decisão técnica precisa.</em></h2><p>Competências integradas para desenvolver, verificar e documentar cada etapa do projeto.</p></div>
        <div className="service-list">{services.map((service) => <article key={service.code}><span>{service.code}</span><h3>{service.title}</h3><p>{service.text}</p><i aria-hidden="true">↗</i></article>)}</div>
      </section>

      <section className="projects section" id="projetos">
        <div className="section-label"><span>03</span> Projetos selecionados</div>
        <div className="section-heading"><h2>Experiência que sai<br />do modelo e <em>chega ao campo.</em></h2><p>Uma amostra de soluções desenvolvidas para infraestrutura, mineração e indústria automotiva.</p></div>
        <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-image"><img src={project.image} alt={project.title} loading={index > 1 ? "lazy" : "eager"} /></div><div className="project-meta"><span>{project.area}</span><b>0{index + 1}</b></div><h3>{project.title}</h3><p>{project.text}</p></article>)}</div>
        <a className="button dark-button" href="#contato">Falar sobre um projeto <Arrow /></a>
      </section>

      <section className="process section" id="processo">
        <div className="process-media"><img src="/projects/modelagem-bim.webp" alt="Modelo BIM coordenado de instalação industrial" loading="lazy" /><div className="scan-line" aria-hidden="true" /><span className="media-tag">Modelo federado / BIM</span></div>
        <div className="process-content"><div className="section-label light"><span>04</span> Método GSA</div><h2>Rigor em cada etapa.<br /><em>Clareza em cada entrega.</em></h2><div className="steps"><div><b>01</b><span><strong>Entendimento</strong>Escopo, requisitos, interfaces e critérios de projeto.</span></div><div><b>02</b><span><strong>Desenvolvimento</strong>Cálculos, concepção, modelagem e compatibilização.</span></div><div><b>03</b><span><strong>Validação</strong>Simulações FEA, verificações e revisões técnicas.</span></div><div><b>04</b><span><strong>Entrega</strong>Detalhamento executivo e documentação para fabricação.</span></div></div></div>
      </section>

      <section className="technology section">
        <div className="section-label"><span>05</span> Tecnologia aplicada</div>
        <div className="tech-grid"><div><h2>Ferramentas líderes.<br /><em>Engenharia sem improviso.</em></h2><p>Escolhemos a tecnologia adequada a cada desafio, mantendo rastreabilidade entre cálculo, modelo e documentação.</p></div><div className="tech-list">{capabilities.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></div>
      </section>

      <section className="sectors"><div className="sector-image"><img src="/projects/robotica.webp" alt="Robô industrial em operação" loading="lazy" /></div><div className="sector-content"><p className="eyebrow">Onde atuamos</p><h2>Soluções para ambientes onde <em>precisão não é opcional.</em></h2><div className="sector-tags"><span>Automotivo</span><span>Mineração</span><span>Ferroviário</span><span>Estruturas metálicas</span><span>Automação industrial</span><span>Infraestrutura</span></div></div></section>

      <section className="contact section" id="contato">
        <div className="contact-copy"><p className="eyebrow">Próximo projeto</p><h2>Vamos transformar seu desafio em uma solução de <em>engenharia.</em></h2><p>Conte brevemente o que você precisa. A GSA analisa o cenário e retorna com o melhor caminho técnico para o projeto.</p></div>
        <form action="mailto:contato@gsaengenharia.com.br" method="post" encType="text/plain"><label>Nome<input type="text" name="nome" placeholder="Como podemos chamar você?" required /></label><label>E-mail corporativo<input type="email" name="email" placeholder="voce@empresa.com.br" required /></label><label>Empresa<input type="text" name="empresa" placeholder="Nome da empresa" /></label><label>Sobre o projeto<textarea name="projeto" placeholder="Descreva o desafio, escopo ou necessidade" rows={3} required /></label><button className="button" type="submit">Solicitar análise inicial <Arrow /></button></form>
      </section>

      <footer><div className="brand footer-brand"><span className="brand-mark"><i /><i /><i /></span><span><strong>GSA</strong><b>ENGENHARIA</b><small>Engenharia com foco em qualidade</small></span></div><div><span>Navegação</span><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#processo">Processo</a></div><div><span>Especialidades</span><p>Estruturas • FEA • BIM<br />Modelagem • Detalhamento</p></div><div><span>Contato</span><a href="mailto:contato@gsaengenharia.com.br">contato@gsaengenharia.com.br</a><a href="#contato">Solicitar proposta</a></div><p className="copyright">© 2026 GSA Engenharia. Todos os direitos reservados.</p></footer>
    </main>
  );
}
