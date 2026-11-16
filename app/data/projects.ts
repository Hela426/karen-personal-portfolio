export type ProjectCategory =
  | "frontend"
  | "fullstack"
  | "ecommerce"
  | "design";

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
  },
  {
    id: "personal-portfolio",
    title: "Karen — Personal Portfolio",
    category: "frontend",
    status: "development",
    year: "2026",
    image: "/images/projects/portfolio.png",
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
  },
];
