export type SegmentId = "logistica" | "varejo" | "residencial";

export type Project = {
  name: string;
  eyebrow: string;
  detail: string;
  description: string;
  images: string[];
  facts: Array<{ label: string; value: string }>;
};

export const site = {
  brand: {
    name: "Mandacaru Engenharia Construtiva",
    logo: "./media/leo/mandacaru-logo-oficial.webp",
    tagline: "Engenharia, gestão de obras e suporte técnico para ativos imobiliários em diferentes escalas.",
  },
  contacts: {
    whatsappNumber: "5511973079863",
    whatsappLabel: "+55 11 97307-9863",
    linkedin: "https://www.linkedin.com/company/135127964/",
    instagram: "https://www.instagram.com/mandacaru_construcoes/",
  },
  proof: [
    { value: "+450.000 m²", label: "Empreendimentos logísticos e industriais desenvolvidos e gerenciados." },
    { value: "+20.000 m²", label: "Lojas de varejo entregues em São Paulo." },
    { value: "+R$450 mi", label: "Em obras sob gerenciamento." },
  ],
  services: [
    { title: "Gerenciamento de obras", text: "Monitoramento e controle das atividades para assegurar prazo, custo, qualidade e segurança." },
    { title: "Desenvolvimento imobiliário", text: "Due diligence, viabilidade, licenciamento e implantação para ativos logísticos e industriais." },
    { title: "Qualidade construtiva", text: "Fiscalização de campo, identificação de desvios e decisões técnicas aplicadas à execução." },
    { title: "Suporte técnico-operacional", text: "Vistorias, reformas, manutenção e gestão técnica conectadas à performance do ativo." },
  ],
  differentials: [
    ["Experiência do terreno à entrega", "Participamos de todas as etapas: estudos de viabilidade, desenvolvimento, coordenação de projetos, legalização, contratação e gerenciamento da construção."],
    ["Visão de investidor", "Nossa engenharia protege o investimento, equilibrando prazo, custo, qualidade e valorização do ativo."],
    ["Presença real em campo", "Fiscalização contínua, decisões rápidas e resolução de problemas antes que impactem o cronograma."],
    ["Gestão completa do empreendimento", "Orçamento, contratos, planejamento, qualidade e riscos integrados em uma única gestão previsível."],
  ],
  clients: [
    { name: "Lojas Eskala", logo: "./media/clients/eskala.png" },
    { name: "Lojas Barracão", logo: "./media/clients/barracao.png" },
    { name: "LP BENS", logo: "./media/clients/lpbens.jpg" },
    { name: "LEO Madeiras", logo: "./media/clients/leo.png" },
    { name: "ICON REALTY", wordmark: true },
    { name: "Academia Cristal", logo: "./media/clients/crystal.png" },
  ],
  articles: [
    {
      category: "Planejamento financeiro",
      date: "20 ago. 2026",
      title: "O valor total da obra não informa quanto caixa o investidor precisará em cada etapa",
      excerpt: "O custo total não revela quando o capital será exigido. Curva ABC e cronograma físico-financeiro ajudam a antecipar a pressão de caixa em cada etapa.",
      cover: "./media/articles/fluxo-caixa.jpg",
      url: "https://www.linkedin.com/pulse/o-valor-total-da-obra-n%C3%A3o-informa-quanto-caixa-investidor-mbfvf/",
    },
    {
      category: "Gestão e controle",
      date: "18 ago. 2026",
      title: "Quanto do capital de uma obra pode desaparecer por falta de gestão?",
      excerpt: "Retrabalho, compras emergenciais, atrasos e decisões tardias comprometem o capital investido — mesmo quando o desperdício não é visível no canteiro.",
      cover: "./media/articles/protecao-capital.jpg",
      url: "https://www.linkedin.com/pulse/quanto-do-capital-de-uma-obra-pode-desaparecer-por-4tgvf/",
    },
  ],
} as const;

const retailImages = Array.from({ length: 44 }, (_, index) => `./media/varejo/varejo-${String(index + 3).padStart(2, "0")}.jpg`);
const residentialImages = Array.from({ length: 12 }, (_, index) => `./media/residencial/residencial-${String(index + 1).padStart(2, "0")}.jpeg`);

export const portfolio: Record<SegmentId, { label: string; title: string; summary: string; projects: Project[] }> = {
  logistica: {
    label: "Logística e industrial",
    title: "Ativos corporativos de alta escala.",
    summary: "Empreendimentos desenvolvidos e gerenciados do terreno à entrega, para operações logísticas e industriais de grande porte.",
    projects: [
      {
        name: "Galpão LEO Madeiras",
        eyebrow: "Built-to-suit • Logística",
        detail: "Barueri – SP | 82.000 m²",
        description: "Centro logístico de padrão AAA, concebido para operações de grande porte, com piso 100% estaqueado, docas de alta capacidade, pavimento industrial de alto desempenho e infraestrutura de longa vida útil.",
        images: ["./media/leo/leo-concluido.jpg", "./media/leo/leo-fundacao.webp", "./media/leo/leo-piso-01.webp", "./media/leo/leo-piso-02.webp", "./media/leo/leo-piso-03.webp", "./media/leo/leo-terraplenagem.webp", "./media/leo/leo-drenagem.webp", "./media/leo/leo-vista-geral.webp"],
        facts: [{ label: "Área construída", value: "82.000 m²" }, { label: "Padrão", value: "AAA" }, { label: "Fundação", value: "+5.200 estacas" }],
      },
      {
        name: "Galpão LP BENS",
        eyebrow: "Logístico • Especulativo",
        detail: "Cajamar – SP | 60.000 m²",
        description: "Condomínio logístico conduzido desde a due diligence imobiliária até o desenvolvimento, licenciamento e gerenciamento da obra, com implantação de 114.000 m² de área total.",
        images: ["./media/lpbens/lpbens-vista-geral.webp", "./media/lpbens/lpbens-aereo-01.jpg", "./media/lpbens/lpbens-aereo-02.jpg", "./media/lpbens/lpbens-aereo-03.jpg", "./media/lpbens/lpbens-talude-01.webp", "./media/lpbens/lpbens-talude-02.webp", "./media/lpbens/lpbens-terraplenagem.webp", "./media/lpbens/lpbens-drenagem.webp", "./media/lpbens/lpbens-operacao.webp"],
        facts: [{ label: "Área construída", value: "60.000 m²" }, { label: "Área total", value: "114.000 m²" }, { label: "Implantação", value: "10 meses" }],
      },
    ],
  },
  varejo: {
    label: "Obras de varejo",
    title: "Implantações que respeitam a operação.",
    summary: "Reformas, adequações e novas unidades comerciais planejadas para preservar ritmo, qualidade e continuidade da operação.",
    projects: [{ name: "Acervo de Obras de Varejo", eyebrow: "Comercial • Implantação e reformas", detail: "São Paulo – SP | 44 imagens", description: "Seleção de obras varejistas realizadas pela Mandacaru, com coordenação técnica, planejamento de frentes, controle de qualidade e atenção à experiência do cliente final.", images: retailImages, facts: [{ label: "Acervo", value: "44 imagens" }, { label: "Escopo", value: "Implantação e reforma" }, { label: "Atuação", value: "São Paulo – SP" }] }],
  },
  residencial: {
    label: "Obras residenciais",
    title: "Cuidado técnico em cada ambiente.",
    summary: "Reformas, interiores e áreas de lazer com acompanhamento próximo, decisões bem coordenadas e qualidade de acabamento.",
    projects: [{ name: "Acervo Residencial Mandacaru", eyebrow: "Residencial • Reformas e interiores", detail: "Interiores, áreas de lazer e paisagismo", description: "Uma seleção de intervenções residenciais conduzidas com o mesmo rigor de planejamento, acompanhamento e execução aplicado aos empreendimentos corporativos.", images: residentialImages, facts: [{ label: "Acervo", value: "12 imagens" }, { label: "Escopo", value: "Reformas e interiores" }, { label: "Atuação", value: "Alto padrão" }] }],
  },
};
