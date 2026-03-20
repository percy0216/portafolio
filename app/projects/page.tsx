import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

// ── Tipos ────────────────────────────────────────────────────────────────────
type Proyecto = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  tipo: "fullstack" | "frontend" | "backend";
  image?: string;
  github?: string;
  demo?: string;
};

// ── Datos ─────────────────────────────────────────────────────────────────────
// Agrega image y github a cada proyecto cuando los tengas disponibles
const misProyectos: Proyecto[] = [
  {
    id: 1,
    title: "Sistema de Citas Médicas",
    description:
      "Plataforma web integral para la gestión de citas médicas. Proyecto fullstack que consolida la interfaz de usuario y la lógica de servidor.",
    tags: ["Fullstack", "Salud", "Web"],
    tipo: "fullstack",
    // image: "/screenshots/citas-medicas.png",
    github: "https://github.com/percy0216/Proyecto-Citas",
  },
  {
    id: 2,
    title: "Aliado MYPE (Finalista Hackathon)",
    description:
      "Aplicación financiera orientada a micro y pequeñas empresas. Proyecto finalista con una arquitectura dividida entre frontend y backend.",
    tags: ["Finanzas", "Frontend", "Backend"],
    tipo: "fullstack",
    image: "/screenshots/aliado-mype.png",
    github: "https://github.com/percy0216/Cascaron-Hackaton-FRONTEND",
  },
  {
    id: 3,
    title: "Gestor de Expedientes Legales",
    description:
      "Sistema robusto desarrollado en Laravel, diseñado específicamente para la administración, seguimiento y control de expedientes para abogados.",
    tags: ["Laravel", "Backend", "Legal"],
    tipo: "backend",
    github: "https://github.com/percy0216/Proyecto-LP3-Laravel",
  },
  {
    id: 4,
    title: "Automatización de Horarios (Bembos)",
    description:
      "Herramienta web creada para automatizar y optimizar la generación de turnos del personal, reduciendo el tiempo de gestión manual.",
    tags: ["Automatización", "React", "Gestión"],
    tipo: "fullstack",
    image: "/screenshots/horario-bembos.png",
    github: "https://github.com/percy0216/horario-bembos",
  },
  {
    id: 5,
    title: "SG-EXPEDIENTES (Colaborativo)",
    description:
      "Participación en el desarrollo de un sistema de gestión de expedientes, aplicando control de versiones y trabajo en equipo.",
    tags: ["Trabajo en Equipo", "Gestión", "Web"],
    tipo: "backend",
    github: "https://github.com/alexisanchezz/SG-EXPEDIENTES-LP2",
  },
  {
    id: 6,
    title: "Backend con Flask",
    description:
      "Colaboración en el desarrollo de la arquitectura de servidor y API utilizando Python y el microframework Flask.",
    tags: ["Flask", "Python", "Backend"],
    tipo: "backend",
    
    github: "https://github.com/MightyCough/Proyecto_ing_soft",
  },
  {
    id: 7,
    title: "Landing Page San Valentín",
    description:
      "Desarrollo de una interfaz web estática y atractiva (trabajo freelance) para la campaña comercial de un cliente.",
    tags: ["Freelance", "Frontend", "UI"],
    tipo: "frontend",
    image: "/screenshots/san-valentin.png",
    github: "https://github.com/percy0216/valentines-day",
  },
  {
    id: 8,
    title: "App Interactiva San Valentín",
    description:
      "Aplicación web mobile-first con múltiples etapas y temática de terminal hacker, desarrollada como un detalle personal.",
    tags: ["Mobile-first", "Frontend", "Next.js"],
    tipo: "frontend",
    image: "/screenshots/valentine-liz.png",
    github: "https://github.com/percy0216/valentines-liz",
  },
  {
    id: 9,
    title: "Tributo Día del Padre",
    description:
      "Página web estática desarrollada como un proyecto personal conmemorativo, enfocada en diseño y maquetación.",
    tags: ["Frontend", "Personal", "HTML/CSS"],
    tipo: "frontend",
    image: "/screenshots/dia-padre.png",
    github: "https://github.com/percy0216/fathersday",
  },
];

// ── Componente de fila con scroll horizontal ──────────────────────────────────
function ProjectRow({
  title,
  subtitle,
  proyectos,
}: {
  title: string;
  subtitle: string;
  proyectos: Proyecto[];
}) {
  return (
    <section className="mt-12">
      {/* Encabezado de sección */}
      <div className="flex items-end justify-between px-0">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {proyectos.length} proyecto{proyectos.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Scroll horizontal */}
      <div className="relative mt-4">
        {/* Fade derecho para indicar que hay más */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white dark:from-gray-950" />

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700">
          {proyectos.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              tags={p.tags}
              image={p.image}
              github={p.github}
              demo={p.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Página principal ──────────────────────────────────────────────────────────
export default function ProjectsPage() {
  const fullstack = misProyectos.filter((p) => p.tipo === "fullstack");
  const frontend  = misProyectos.filter((p) => p.tipo === "frontend");
  const backend   = misProyectos.filter((p) => p.tipo === "backend");

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      {/* ── Header ── */}
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Proyectos destacados
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Trabajo que representa lo que hago.
          </h1>
          <p className="mt-3 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-400">
            Una selección de proyectos personales, académicos y colaborativos donde aplico
            desarrollo fullstack, automatización y diseño de interfaces centradas en la
            experiencia de usuario.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          ¿Tienes una idea? Conversemos
        </Link>
      </header>

      {/* ── Filas por categoría ── */}
      {fullstack.length > 0 && (
        <ProjectRow
          title="Proyectos Fullstack"
          subtitle="Casos donde participé tanto en el frontend como en el backend."
          proyectos={fullstack}
        />
      )}
      {frontend.length > 0 && (
        <ProjectRow
          title="Proyectos Frontend"
          subtitle="Interfaces web, landing pages y experiencias enfocadas en el usuario."
          proyectos={frontend}
        />
      )}
      {backend.length > 0 && (
        <ProjectRow
          title="Proyectos Backend"
          subtitle="APIs, lógica de negocio y servicios que soportan las aplicaciones."
          proyectos={backend}
        />
      )}
    </div>
  );
}