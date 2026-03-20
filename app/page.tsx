import Link from "next/link";

// Add to your global CSS or _document.tsx:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

const techStack = [
  { label: "Laravel",     icon: "devicon-laravel-plain" },
  { label: "React",       icon: "devicon-react-original" },
  { label: "TypeScript",  icon: "devicon-typescript-plain" },
  { label: "Next.js",     icon: "devicon-nextjs-plain" },
  { label: "Django",      icon: "devicon-django-plain" },
  { label: "Docker",      icon: "devicon-docker-plain" },
  { label: "Supabase",    icon: "devicon-supabase-plain" },
];

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <section className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Portafolio personal
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hola, soy Percy.
            <span className="block text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-2">
              Estudiante de Ingeniería de Sistemas y desarrollador Fullstack.
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Desde Huánuco, me dedico a construir soluciones web eficientes y escalables.
            Me especializo en ecosistemas modernos como React, TypeScript, Next.js y Laravel.
            Disfruto transformando problemas complejos en aplicaciones prácticas e intuitivas,
            ya sea automatizando procesos operativos, gestionando bases de datos o diseñando
            soluciones analíticas.
          </p>

          {/* ── CTAs — "Ver proyectos" como acción principal clara ── */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
            >
              Ver mis proyectos
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Hablemos de tu proyecto
            </Link>
            <a
              href="/cv/percy-cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-lg border border-dashed border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 hover:border-gray-400 hover:text-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-white"
            >
              Descargar CV en PDF
            </a>
          </div>

          {/* ── Tech tags con íconos devicons ── */}
          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map(({ label, icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800/60 dark:text-gray-400"
              >
                <i className={`${icon} text-sm`} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/60">
          <dl className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500 dark:text-gray-400">Ubicación</dt>
              <dd className="font-medium">Huánuco, Perú</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500 dark:text-gray-400">Rol</dt>
              <dd className="font-medium">Fullstack Developer</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500 dark:text-gray-400">Enfoque</dt>
              <dd className="font-medium text-right">
                Soluciones web escalables,
                <br />
                automatización y analítica.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── Espaciado reducido entre hero y "Sobre mí" ── */}
      <section className="mt-10 border-t border-gray-200 pt-10 dark:border-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Sobre mí
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          <p>
            Soy estudiante de Ingeniería de Sistemas con una fuerte vocación por el desarrollo
            de software, la ciberseguridad y la gestión ágil de proyectos. Mi objetivo principal
            es utilizar la tecnología para resolver problemas del mundo real y optimizar flujos
            de trabajo.
          </p>
          <p>
            En mi trayectoria, busco siempre generar un impacto directo y útil. En el sector privado, he
            desarrollado herramientas de gestión interna, como un sistema automatizado de
            generación de horarios para Bembos. También disfruto creando
            herramientas a medida para mi día a día, como mi propio gestor móvil de finanzas
            personales.
          </p>
          <p>
            Mi stack tecnológico me permite abarcar la arquitectura completa de un proyecto.
            Construyo la lógica de servidor con Laravel y Django, desarrollo interfaces dinámicas
            usando React, Next.js y Angular, y utilizo Docker para la contenerización de mis
            entornos. A la par, sigo capacitándome constantemente en áreas de seguridad como el
            pentesting.
          </p>
          <p>
            Más allá del código, soy un gran entusiasta del hardware y me gusta armar y optimizar
            computadoras. En mi tiempo libre, disfruto desconectando con los videojuegos, ya sea
            jugando FC26, gestionando mi biblioteca de Steam o explorando el universo en Outer
            Wilds.
          </p>
        </div>
      </section>

      {/* ── Contacto rápido ── */}
      <section className="mt-10 border-t border-gray-200 pt-10 dark:border-gray-800">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Contacto
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              ¿Trabajamos juntos?
            </h2>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
              Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Ver todos los canales
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* 3 tarjetas compactas */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {/* GitHub */}
          <a
            href="https://github.com/percy0216"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:border-gray-800 dark:bg-gray-900/60"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
              <p className="truncate text-xs text-gray-500 dark:text-gray-400">Código y proyectos</p>
            </div>
            <svg className="ml-auto h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:rpercy738@gmail.com"
            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:border-gray-800 dark:bg-gray-900/60"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="font-medium text-gray-900 dark:text-white">Email</p>
              <p className="truncate text-xs text-gray-500 dark:text-gray-400">tuemail@gmail.com</p>
            </div>
            <svg className="ml-auto h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/51919688588"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:border-gray-800 dark:bg-gray-900/60"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="font-medium text-gray-900 dark:text-white">WhatsApp</p>
              <p className="truncate text-xs text-gray-500 dark:text-gray-400">Respuesta rápida</p>
            </div>
            <svg className="ml-auto h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
