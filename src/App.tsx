import { useEffect, useMemo, useState } from "react";
import { portfolio, site, type SegmentId } from "./content/siteContent";

const segments = Object.keys(portfolio) as SegmentId[];
const whatsappUrl = `https://wa.me/${site.contacts.whatsappNumber}?text=${encodeURIComponent("Olá, gostaria de conhecer melhor os serviços da Mandacaru Engenharia.")}`;

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [segment, setSegment] = useState<SegmentId>("logistica");
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [galleryPaused, setGalleryPaused] = useState(false);

  const segmentContent = portfolio[segment];
  const currentProject = segmentContent.projects[projectIndex] ?? segmentContent.projects[0];
  const currentImage = currentProject.images[imageIndex] ?? currentProject.images[0];
  const projectCount = segmentContent.projects.length;

  useEffect(() => {
    setProjectIndex(0);
    setImageIndex(0);
  }, [segment]);

  useEffect(() => {
    setImageIndex(0);
  }, [projectIndex]);

  useEffect(() => {
    if (galleryPaused || currentProject.images.length < 2) return;
    const timer = window.setInterval(() => setImageIndex((current) => (current + 1) % currentProject.images.length), 4600);
    return () => window.clearInterval(timer);
  }, [galleryPaused, currentProject.images.length]);

  const menuItems = useMemo(() => [["A Mandacaru", "empresa"], ["Serviços", "servicos"], ["Obras", "obras"], ["Método", "metodo"], ["Artigos", "insights"]], []);
  const selectSegment = (nextSegment: SegmentId) => setSegment(nextSegment);
  const nextImage = () => setImageIndex((current) => (current + 1) % currentProject.images.length);
  const previousImage = () => setImageIndex((current) => (current - 1 + currentProject.images.length) % currentProject.images.length);
  const nextProject = () => setProjectIndex((current) => (current + 1) % projectCount);
  const previousProject = () => setProjectIndex((current) => (current - 1 + projectCount) % projectCount);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <button className="brand-button" onClick={() => scrollToSection("inicio")} aria-label="Ir ao início">
            <img src={site.brand.logo} alt={site.brand.name} />
          </button>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {menuItems.map(([label, id]) => <button key={id} onClick={() => scrollToSection(id)}>{label}</button>)}
          </nav>
          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Fale conosco <span>◌</span></a>
          <button className="menu-button" onClick={() => setMobileMenuOpen((current) => !current)} aria-expanded={mobileMenuOpen} aria-label="Abrir menu">{mobileMenuOpen ? "×" : "☰"}</button>
        </div>
        {mobileMenuOpen && <nav className="mobile-nav" aria-label="Navegação móvel">{menuItems.map(([label, id]) => <button key={id} onClick={() => { scrollToSection(id); setMobileMenuOpen(false); }}>{label}<span>→</span></button>)}<a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp comercial</a></nav>}
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-copy">
            <span className="accent-line" />
            <p className="eyebrow">Engenharia construtiva</p>
            <h1>Gestão que traz<br /><span>previsibilidade</span><br />aos ativos.</h1>
            <p className="lead">Desenvolvemos e gerenciamos empreendimentos logísticos, industriais, comerciais e corporativos com foco em prazo, custo, qualidade, segurança e valorização do patrimônio.</p>
            <div className="hero-actions"><button onClick={() => scrollToSection("obras")}>Conheça nossas obras <span>→</span></button><a href={whatsappUrl} target="_blank" rel="noreferrer">Falar com o comercial <span>◌</span></a></div>
          </div>
          <div className="hero-image"><img src="./media/lpbens/lpbens-vista-geral.webp" alt="Empreendimento logístico acompanhado pela Mandacaru" /><div className="hero-metrics"><div><strong>+450 mil</strong><small>m² desenvolvidos e gerenciados</small></div><div><strong>+R$450 mi</strong><small>em obras sob gestão</small></div></div></div>
        </section>

        <section className="client-strip" aria-label="Empresas que confiam na Mandacaru"><p>Empresas que confiam no nosso trabalho</p><div>{site.clients.concat(site.clients).map((client, index) => <span key={`${client.name}-${index}`}>{"logo" in client ? <img src={client.logo} alt={client.name} /> : <><i /> {client.name}</>}</span>)}</div></section>

        <section id="empresa" className="content-section company-section">
          <div className="section-index"><p className="eyebrow">01 — Quem somos</p><span /></div>
          <div><h2>A qualidade se constrói<br /><span>diariamente em campo.</span></h2><div className="company-text"><p>Atuamos de forma prática e integrada em empreendimentos logísticos, industriais, comerciais e corporativos.</p><div><p>Somos parceiros estratégicos de proprietários, investidores, gestores e ocupantes, conectando os objetivos técnicos e financeiros de cada ativo.</p><p>Nossas equipes multidisciplinares acompanham desde o planejamento e a contratação até a entrega, ocupação e operação.</p></div></div></div>
        </section>

        <section id="servicos" className="content-section services-section"><div className="section-heading"><p className="eyebrow">02 — O que fazemos</p><h2>Controle técnico para todo o<br />ciclo do empreendimento.</h2></div><div className="service-grid">{site.services.map((service, index) => <article key={service.title}><div><b>0{index + 1}</b><span>✦</span></div><h3>{service.title}</h3><p>{service.text}</p></article>)}</div></section>

        <section className="content-section proof-section"><div className="proof-heading"><p className="eyebrow">Por que a Mandacaru?</p><h2>Obras complexas.<br /><span>Gestão de ponta.</span></h2><p>Desenvolvemos e gerenciamos centenas de milhares de metros quadrados para grandes investidores, conduzindo cada empreendimento do início ao fim.</p></div><div className="proof-grid">{site.proof.map((item) => <article key={item.value}><strong>{item.value}</strong><p>{item.label}</p></article>)}</div><div className="differential-grid">{site.differentials.map(([title, text], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section id="obras" className="content-section portfolio-section"><div className="portfolio-header"><div><p className="eyebrow">03 — Portfólio de obras</p><p>Selecione um segmento para conhecer os cases e acervos que representam cada frente de atuação.</p></div><h2>Obras com gestão<br /><span>de ponta a ponta.</span></h2></div><div className="segment-tabs">{segments.map((segmentId) => <button key={segmentId} className={segmentId === segment ? "active" : ""} onClick={() => selectSegment(segmentId)}>{portfolio[segmentId].label}</button>)}</div><div className="portfolio-card" onMouseEnter={() => setGalleryPaused(true)} onMouseLeave={() => setGalleryPaused(false)}><div className="portfolio-image"><img src={currentImage} alt={`${currentProject.name} — imagem ${imageIndex + 1}`} /><div className="image-overlay"><div><b>{currentProject.name}</b><small>Imagem {String(imageIndex + 1).padStart(2, "0")} / {String(currentProject.images.length).padStart(2, "0")}</small></div><div><button onClick={previousImage} aria-label="Imagem anterior">←</button><button onClick={nextImage} aria-label="Próxima imagem">→</button></div></div></div><div className="portfolio-copy"><div className="portfolio-meta"><span>{segmentContent.label}</span><span>Case {String(projectIndex + 1).padStart(2, "0")}</span></div><p className="portfolio-eyebrow">{currentProject.eyebrow}</p><h3>{currentProject.name}</h3><strong className="project-detail">{currentProject.detail}</strong><p>{currentProject.description}</p><div className="project-facts">{currentProject.facts.map((fact) => <div key={fact.label}><small>{fact.label}</small><strong>{fact.value}</strong></div>)}</div>{projectCount > 1 && <div className="project-selector">{segmentContent.projects.map((project, index) => <button key={project.name} className={index === projectIndex ? "active" : ""} onClick={() => setProjectIndex(index)} aria-label={`Abrir ${project.name}`} />)}</div>}</div></div></section>

        <section id="metodo" className="content-section method-section"><div><p className="eyebrow">04 — Método Mandacaru</p><h2>Presença constante em campo para reduzir incertezas e gerar resultados.</h2></div><div>{[["01", "Qualificar o investimento", "Filtragem de mercado e análise de oportunidades para viabilizar ativos industriais, logísticos e built-to-suit."], ["02", "Avaliar e licenciar", "Due diligence técnica, ambiental e jurídica, seguida dos licenciamentos necessários à implantação."], ["03", "Gerenciar a execução", "Monitoramento das atividades, compras, produção e riscos para preservar prazo, custo e qualidade."], ["04", "Entregar performance", "Governança firme e decisões técnicas para assegurar o resultado esperado pelo investidor e pelo ocupante."]].map(([number, title, text]) => <article key={number}><strong>{number}</strong><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section id="insights" className="content-section insights-section"><div className="insights-heading"><div><p className="eyebrow">Conteúdo técnico</p><h2>Informação para decisões<br /><span>mais seguras na obra.</span></h2></div><p>Análises da Mandacaru sobre fluxo de caixa, controle de custos e gestão técnica para proteger o investimento em cada etapa do empreendimento.</p></div><div className="article-grid">{site.articles.map((article) => <a key={article.title} className="article-card" href={article.url} target="_blank" rel="noreferrer"><img src={article.cover} alt="" /><div><div><span>{article.category}</span><time>{article.date}</time></div><h3>{article.title}</h3><p>{article.excerpt}</p><b>Ler no LinkedIn →</b></div></a>)}</div></section>

        <section id="contato" className="content-section contact-section"><div><p className="eyebrow">Contato comercial</p><h2>Vamos conversar<br />sobre sua próxima obra?</h2></div><a href={whatsappUrl} target="_blank" rel="noreferrer"><span><small>WhatsApp comercial</small><strong>{site.contacts.whatsappLabel}</strong></span><b>◌</b></a></section>
      </main>

      <footer><div><img src={site.brand.logo} alt={site.brand.name} /><p>{site.brand.tagline}</p></div><div><small>Navegação</small><button onClick={() => scrollToSection("empresa")}>A Mandacaru</button><button onClick={() => scrollToSection("obras")}>Obras</button><button onClick={() => scrollToSection("insights")}>Artigos</button></div><div><small>Acompanhe</small><div><a href={site.contacts.linkedin} target="_blank" rel="noreferrer">in</a><a href={site.contacts.instagram} target="_blank" rel="noreferrer">ig</a></div></div><p className="footer-note">© 2026 Mandacaru Engenharia Construtiva <span>Prazo, custo, qualidade e segurança.</span></p></footer>
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Mandacaru pelo WhatsApp">◌</a>
    </div>
  );
}
