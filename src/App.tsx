/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Search,
  Code,
  TrendingUp,
  BarChart3,
  ChevronDown,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formState, setFormState] = useState<"idle" | "sending" | "ok" | "error">("idle");

  useEffect(() => {
    const onScroll = () => setScrollProgress(Math.min(window.scrollY / 100, 1));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Price Tracker con Alertas en Tiempo Real",
      category: "Web Development",
      description: "Aplicación web que monitorea precios de productos y notifica al usuario cuando alcanzan el umbral deseado.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000",
      size: "large",
      tags: ["WEB DEV"]
    }
  ];

  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav
        className="fixed left-0 w-full z-50"
        style={{
          top: `${20 * (1 - scrollProgress)}px`,
          paddingLeft: `${20 * (1 - scrollProgress)}vw`,
          paddingRight: `${20 * (1 - scrollProgress)}vw`,
        }}
      >
        <div
          className="glass-nav flex items-center justify-between px-5 py-3"
          style={{ borderRadius: `${9999 * (1 - scrollProgress)}px` }}
        >
          <div className="text-base font-black tracking-tighter text-primary shrink-0">
            TKP
          </div>
          <div className="hidden md:flex gap-6 items-center text-xs font-semibold uppercase tracking-widest">
            <a href="#projects" className="text-on-surface/50 hover:text-primary-soft transition-colors">Projects</a>
            <a href="#services" className="text-on-surface/50 hover:text-primary-soft transition-colors">Services</a>
            <a href="#about" className="text-on-surface/50 hover:text-primary-soft transition-colors">About</a>
          </div>
          <button className="bg-[linear-gradient(135deg,#ff5f1f,#832700)] text-white px-5 py-2 rounded-full font-bold text-xs hover:shadow-[0_0_20px_rgba(255,95,31,0.3)] transition-all active:scale-95 shrink-0">
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
        <div className="hero-gradient-blur top-[-10%] left-[-5%]" />
        <div className="hero-gradient-blur bottom-[-10%] right-[-5%] rotate-180" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            Marketing de <span className="text-editorial-gradient">Resultados</span> <br /> 
            + Desarrollo Web de <span className="text-editorial-gradient">Alto Rendimiento</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-on-surface/70 leading-relaxed font-light">
            Ayudo a marcas a escalar mediante sitios web optimizados y estrategias digitales basadas en datos. 
            Combinando la ingeniería técnica con la psicología de conversión.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full md:w-auto px-10 py-4 bg-[linear-gradient(135deg,#ff5f1f,#832700)] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,95,31,0.4)] transition-all">
              Ver Proyectos
            </button>
            <button className="w-full md:w-auto px-10 py-4 border border-outline-variant/30 rounded-full hover:bg-surface-high transition-colors font-medium">
              Mis Servicios
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-32 bg-surface-low px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Proyectos Destacados</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["ALL", "SEM/SEO", "WEB DEV", "LANDINGS"].map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-md text-xs font-bold transition-all border ${
                    activeFilter === filter 
                    ? "bg-surface-high text-secondary border-primary/50" 
                    : "bg-surface text-on-surface/40 border-transparent hover:text-primary"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                className={`${project.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'} group flex flex-row rounded-2xl bg-surface-high transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden`}
              >
                {/* Image — left side */}
                <div className={`overflow-hidden shrink-0 ${project.size === 'large' ? 'w-1/2' : 'w-2/5'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50 group-hover:opacity-100"
                  />
                </div>
                {/* Text — right side, shifted up */}
                <div className="flex flex-col justify-start p-8 pt-10 self-start w-full">
                  <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">{project.category}</span>
                  <h3 className={`font-bold mt-3 ${project.size === 'large' ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{project.title}</h3>
                  {project.description && (
                    <p className="text-on-surface/60 mt-3 text-sm md:text-base leading-relaxed">{project.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
                Soluciones <br /> que <span className="text-secondary">Convierten.</span>
              </h2>
              <p className="text-lg md:text-xl text-on-surface/60 leading-relaxed max-w-md">
                No solo diseño sitios bonitos; construyo activos digitales diseñados para captar, retener y convertir a tu audiencia ideal.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Search className="w-8 h-8" />, title: "Auditoría SEO & SEM", desc: "Análisis profundo de visibilidad y optimización de pauta publicitaria." },
                { icon: <Code className="w-8 h-8" />, title: "Desarrollo Web", desc: "Sitios rápidos, escalables y optimizados para dispositivos móviles." },
                { icon: <TrendingUp className="w-8 h-8" />, title: "Diseño CRO", desc: "Optimización de la tasa de conversión para maximizar el ROI." },
                { icon: <BarChart3 className="w-8 h-8" />, title: "Analítica Digital", desc: "Configuración de seguimiento y reportes basados en datos reales." }
              ].map((service, i) => (
                <div key={i} className="p-10 rounded-2xl bg-surface-low border border-white/5 hover:bg-surface-high transition-all group">
                  <div className="text-secondary mb-6 group-hover:text-primary transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-sm text-on-surface/50 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-surface-low px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-surface-high shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Samuel Martínez"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Arquitecto Digital con Mentalidad de Negocio</h2>
          <p className="text-xl md:text-2xl text-on-surface/80 leading-relaxed italic font-light">
            "Mi enfoque combina la precisión técnica del desarrollo front-end con la visión estratégica del marketing moderno. Entiendo que un sitio web no es una pieza de arte, es una herramienta de crecimiento."
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-surface px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">¿Listo para escalar?</h2>
            <p className="text-on-surface/50 text-lg">Hablemos sobre tu próximo proyecto y cómo podemos alcanzar tus objetivos.</p>
          </div>
          <form
            className="space-y-8 bg-surface-low p-8 md:p-16 rounded-3xl shadow-2xl relative z-10 border border-white/5"
            onSubmit={async (e) => {
              e.preventDefault();
              const data = Object.fromEntries(new FormData(e.currentTarget));
              setFormState("sending");
              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });
                setFormState(res.ok ? "ok" : "error");
              } catch {
                setFormState("error");
              }
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-secondary">Nombre</label>
                <input
                  name="nombre"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-surface-high border border-outline-variant/20 rounded-xl p-5 focus:ring-2 focus:ring-primary/50 text-sm transition-all placeholder:text-neutral-600 outline-none"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-secondary">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="w-full bg-surface-high border border-outline-variant/20 rounded-xl p-5 focus:ring-2 focus:ring-primary/50 text-sm transition-all placeholder:text-neutral-600 outline-none"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-secondary">Asunto</label>
              <div className="relative">
                <select name="asunto" className="w-full bg-surface-high border border-outline-variant/20 rounded-xl p-5 focus:ring-2 focus:ring-primary/50 text-sm transition-all text-on-surface/60 appearance-none outline-none">
                  <option>Desarrollo Web</option>
                  <option>Estrategia SEO/SEM</option>
                  <option>Consultoría Integral</option>
                  <option>Otro</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface/40 pointer-events-none" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-secondary">Mensaje</label>
              <textarea
                name="mensaje"
                rows={4}
                required
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full bg-surface-high border border-outline-variant/20 rounded-xl p-5 focus:ring-2 focus:ring-primary/50 text-sm transition-all placeholder:text-neutral-600 outline-none resize-none"
              />
            </div>

            {formState === "ok" && (
              <p className="text-center text-sm font-bold text-secondary">
                ¡Mensaje enviado! Te responderé pronto.
              </p>
            )}
            {formState === "error" && (
              <p className="text-center text-sm font-bold text-primary">
                Algo salió mal. Inténtalo de nuevo.
              </p>
            )}

            <button
              type="submit"
              disabled={formState === "sending" || formState === "ok"}
              className="w-full py-5 bg-[linear-gradient(135deg,#ff5f1f,#832700)] text-white font-black rounded-full shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:pointer-events-none"
            >
              {formState === "sending" ? "ENVIANDO..." : "ENVIAR PROPUESTA"}
              {formState !== "sending" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-low w-full py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-xl font-black text-on-surface tracking-tighter">
            The Kinetic Professional
          </div>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="https://www.linkedin.com/in/samuel-martínez-durán-40a70335b" target="_blank" rel="noopener noreferrer" className="text-on-surface/40 hover:text-secondary transition-colors">LinkedIn</a>
            <a href="https://github.com/anonimo4smp-blip" target="_blank" rel="noopener noreferrer" className="text-on-surface/40 hover:text-secondary transition-colors">GitHub</a>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface/20">
            © 2026 The Kinetic Professional. Marketing & Code.
          </p>
        </div>
      </footer>
    </div>
  );
}
