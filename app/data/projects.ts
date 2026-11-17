export type ProjectCategory =
  | "frontend"
  | "fullstack"
  | "ecommerce"
  | "design";

export type ProjectImage = {
  src: string;
  caption: { es: string; en: string };
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  status: "completed" | "development" | "planned";
  year: string;
  image: string;
  description: {
    es: string;
    en: string;
  };
  features: {
    es: string[];
    en: string[];
  };
  technologies: string[];
  details?: { es: string; en: string };
  gallery?: ProjectImage[];
  quality?: { tests: number; lighthouse: { performance: number; accessibility: number; bestPractices: number; seo: number } };
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "gema-brillante",
    title: "Gema Brillante",
    category: "fullstack",
    status: "completed",
    year: "2026",
    image: "/images/projects/gema-brillante.png",
    details: {
      es: "Aplicación privada para una comunidad de rol que reúne herramientas sociales y narrativas, perfiles, correspondencia y administración de permisos. El acceso está restringido a sus participantes.",
      en: "A private roleplaying application combining social and narrative tools, profiles, correspondence and permission management. Access is restricted to participants.",
    },
    description: {
      es: "Plataforma web privada para comunidades de rol, con perfiles de personajes y herramientas de gestión narrativa.",
      en: "A private web platform for roleplaying communities, with character profiles and narrative management tools.",
    },
    features: {
      es: [
        "Autenticación de usuarios",
        "Perfiles personalizados",
        "Gestión de roles y permisos",
        "Publicaciones y comentarios",
        "Correspondencia privada",
        "Gestión de campañas",
        "Modo claro y oscuro",
      ],
      en: [
        "User authentication",
        "Custom character profiles",
        "Role and permission management",
        "Posts and comments",
        "Private correspondence",
        "Campaign management",
        "Light and dark mode",
      ],
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
    ],
    gallery: [
      { src: "/images/projects/gema-brillante.png", caption: { es: "Inicio de sesion", en: "Login" } },
      { src: "/images/projects/gema-brillante-inicio.png", caption: { es: "Tablon de publicaciones", en: "Publication board" } },
      { src: "/images/projects/gema-brillante-perfil.png", caption: { es: "Perfil", en: "Profile" } },
    ],
    github:
      "https://github.com/Hela426/gema-brillante",
    demo: "https://gema-brillante.vercel.app/",
  },
  {
    id: "personal-portfolio",
    title: "Karen — Personal Portfolio",
    category: "frontend",
    status: "development",
    year: "2026",
    image: "/images/projects/portfolio.png",
    details: {
      es: "Portafolio profesional bilingüe con una identidad editorial minimalista, ilustraciones en acuarela, temas claro y oscuro y una mascota interactiva inspirada en Molly. Reúne proyectos, habilidades, experiencia y hojas de vida.",
      en: "A bilingual professional portfolio with a minimalist editorial identity, watercolor illustrations, light and dark themes, and an interactive companion inspired by Molly. It showcases projects, skills, experience and resumes.",
    },
    description: {
      es: "Mi espacio profesional y creativo, inspirado en el minimalismo, las ilustraciones en acuarela y Molly.",
      en: "My professional and creative space, inspired by minimalism, watercolor illustrations and Molly.",
    },
    features: {
      es: [
        "Diseño responsivo",
        "Sistema bilingüe",
        "Modo claro y oscuro",
        "Mascota interactiva",
        "Selector de hojas de vida",
        "Galería de tecnologías",
      ],
      en: [
        "Responsive design",
        "Bilingual system",
        "Light and dark mode",
        "Interactive cat companion",
        "Resume selector",
        "Technology gallery",
      ],
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SVG",
    ],
    github:
      "https://github.com/Hela426/karen-personal-portfolio",
    demo: "https://karenbaron-portfolio.netlify.app/",
  },
  {
    id: "shiro-fragrances",
    title: "SHIRO — Fragrances",
    category: "ecommerce",
    status: "completed",
    year: "2026",
    image: "/images/projects/shiro-cover.webp",
    description: {
      es: "Tienda virtual de perfumería de lujo inspirada en el minimalismo japonés, con catálogo interactivo y compra simulada.",
      en: "A Japanese-inspired luxury fragrance storefront with an interactive catalog and simulated checkout.",
    },
    details: {
      es: "Proyecto conceptual de comercio electrónico con seis fragancias, navegación bilingüe, carrito y favoritos persistentes. Incluye cupones, confirmación de pedidos, pruebas unitarias e integración continua. No procesa pagos reales.",
      en: "A conceptual ecommerce project with six fragrances, bilingual navigation, a persistent cart and wishlist. It includes coupons, order confirmation, unit testing and continuous integration. No real payments are processed.",
    },
    features: {
      es: ["Catálogo con búsqueda bilingüe y filtros", "Páginas dinámicas de productos", "Carrito y favoritos persistentes", "Checkout simulado con cupones", "Confirmación de pedidos", "Interfaz ES/EN", "SEO y accesibilidad", "Integración continua con GitHub Actions"],
      en: ["Catalog with bilingual search and filters", "Dynamic product pages", "Persistent cart and wishlist", "Simulated checkout with coupons", "Order confirmation", "English and Spanish interface", "SEO and accessibility", "Continuous integration with GitHub Actions"],
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CSS Modules", "Zustand", "Vitest", "GitHub Actions", "Netlify"],
    gallery: [
      { src: "/images/projects/shiro-cover.webp", caption: { es: "Campaña visual", en: "Visual campaign" } },
      { src: "/images/projects/shiro-tsuki.webp", caption: { es: "Concepto Tsuki", en: "Tsuki concept" } },
      { src: "/images/projects/shiro-sakura.webp", caption: { es: "Concepto Sakura", en: "Sakura concept" } },
      { src: "/images/projects/shiro-mori.webp", caption: { es: "Concepto Mori", en: "Mori concept" } },
    ],
    quality: { tests: 52, lighthouse: { performance: 88, accessibility: 94, bestPractices: 100, seo: 100 } },
    github: "https://github.com/Hela426/shiro-fragrances",
    demo: "https://shiro-fragrances.netlify.app/",
  },
];
