import Link from "next/link";

// ── Actualiza estos datos con los tuyos ──────────────────────────────────────
const CONTACT = {
  email:    "rpercy738@gmail.com",
  linkedin: "https://www.linkedin.com/in/percy-johan-rojas-maldonado-745435202/",
  github:   "https://github.com/percy0216",
  whatsapp: "https://wa.me/51919688588", // formato: 51 + número sin espacios
};

// ── Tarjetas de contacto ─────────────────────────────────────────────────────
const contactLinks = [
  {
    label:       "LinkedIn",
    description: "El canal más profesional. Ideal para propuestas de trabajo o colaboraciones.",
    href:        CONTACT.linkedin,
    cta:         "Ver perfil",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    accent: "blue",
  },
  {
    label:       "Email",
    description: "Para consultas detalladas, propuestas formales o lo que necesites contarme.",
    href:        `mailto:${CONTACT.email}`,
    cta:         "Enviar correo",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    accent: "indigo",
  },
  {
    label:       "GitHub",
    description: "Revisa mi código, proyectos en curso y contribuciones open source.",
    href:        CONTACT.github,
    cta:         "Ver repositorios",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    accent: "gray",
  },
  {
    label:       "WhatsApp",
    description: "Para respuestas rápidas o si prefieres hablar directamente.",
    href:        CONTACT.whatsapp,
    cta:         "Abrir chat",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    accent: "green",
  },
];

const accentMap: Record<string, string> = {
  blue:   "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
  indigo: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400",
  gray:   "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",
  green:  "bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400",
};

const ctaMap: Record<string, string> = {
  blue:   "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
  indigo: "text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300",
  gray:   "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
  green:  "text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300",
};

export default function ContactPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">

      {/* ── Header ── */}
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          Contacto
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Conversemos.
        </h1>
        <p className="mt-3 max-w-xl text-base md:text-lg text-gray-600 dark:text-gray-400">
          Elige el canal que más te acomode. Respondo rápido y con gusto.
        </p>
      </header>

      {/* ── Grid de tarjetas ── */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactLinks.map(({ label, description, href, cta, icon, accent }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 dark:border-gray-800 dark:bg-gray-900/60"
          >
            {/* Ícono */}
            <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${accentMap[accent]}`}>
              {icon}
            </span>

            {/* Texto */}
            <div className="flex flex-1 flex-col gap-1">
              <p className="font-semibold text-gray-900 dark:text-white">{label}</p>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>

            {/* CTA */}
            <span className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${ctaMap[accent]}`}>
              {cta}
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        ))}
      </div>

      {/* ── Nota al pie ── */}
      <p className="mt-8 text-sm text-gray-400 dark:text-gray-500">
        Ubicado en Huánuco, Perú · Disponible para proyectos remotos y locales.
      </p>
    </div>
  );
}