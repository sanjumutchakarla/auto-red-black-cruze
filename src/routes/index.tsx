import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shield, Sparkles, Square, Wrench, Layers, Droplets, Phone, MapPin, Clock, ChevronRight, Play, X, Images, Film, Sun, Moon } from "lucide-react";
import logoAsset from "@/assets/auto-cruze-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Official Partnership Powered by Würth | PPF, Ceramic Coating & Car Accessories" },
      { name: "description", content: "Auto Cruze — Würth authorized partner for PPF, ceramic coating, window filming & premium car accessories. 500+ cars protected." },
      { property: "og:title", content: "Auto Cruze — Premium Car Protection" },
      { property: "og:description", content: "Würth authorized PPF, ceramic coating & detailing studio." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Shield, title: "Paint Protection Film", desc: "Self-healing PPF that shields paint from rocks, scratches & UV damage for years." },
  { icon: Sparkles, title: "Ceramic Coating", desc: "9H hardness nano-ceramic for mirror gloss and hydrophobic, easy-clean finish." },
  { icon: Square, title: "Window Filming", desc: "Heat-rejecting tints for comfort, privacy and interior protection." },
  { icon: Wrench, title: "Car Accessories", desc: "Premium interior & exterior accessories — alloys, mats, lighting & more." },
  { icon: Layers, title: "Body Wrapping", desc: "Custom vinyl wraps in gloss, matte, satin & chrome — change your color, not your paint." },
  { icon: Droplets, title: "Detailing", desc: "Full interior + exterior detailing with paint correction and deep cleaning." },
];

const steps = [
  { n: "01", t: "Consultation", d: "Walk-in or call. We listen to what you want for your car." },
  { n: "02", t: "Inspection", d: "Detailed paint & surface inspection under bright shop lighting." },
  { n: "03", t: "Prep", d: "Wash, decontamination and clay-bar prep for a flawless base." },
  { n: "04", t: "Application", d: "Certified application of PPF, ceramic or wrap by trained pros." },
  { n: "05", t: "Delivery", d: "Quality check, walkthrough & handover — your car ready to shine." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <WurthBanner />
      <Gallery />
      <Process />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/919515285124"
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-glow transition-transform hover:scale-110"
        aria-label="WhatsApp"
        style={{ boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)" }}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
      </a>
    </div>
  );
}

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const saved = (typeof localStorage !== "undefined" && localStorage.getItem("ac-theme")) as "dark" | "light" | null;
    const initial = saved ?? "dark";
    setTheme(initial);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("ac-theme", theme);
  }, [theme]);
  return { theme, toggle: () => setTheme(t => (t === "dark" ? "light" : "dark")) };
}

function ThemeToggle({ theme, toggle }: { theme: "dark" | "light"; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="grid h-10 w-10 place-items-center border-2 border-border text-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <div className="grid place-items-center rounded-sm bg-black p-1" style={{ height: size, width: size }}>
      <img src={logoAsset.url} alt="Auto Cruze" className="h-full w-full object-contain" />
    </div>
  );
}

function Nav() {
  const { theme, toggle } = useTheme();
  return (
    <nav className="fixed top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <LogoMark />
          <div className="leading-tight">
            <div className="font-display text-lg font-black tracking-wider">AUTO CRUZE</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Würth Authorized</div>
          </div>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {["Services", "Gallery", "Process", "Partner", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} toggle={toggle} />
          <a href="#contact" className="clip-angled bg-primary px-6 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105">Book Now</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/20 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-4 py-2">
          <span className="animate-pulse-red h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Würth Authorized Partner</span>
        </div>
        <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          Protect. Perfect.<br />
          <span className="text-primary" style={{ textShadow: "var(--shadow-glow)" }}>Personalize.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Premium PPF, ceramic coating, window filming and car accessories — installed by certified pros using Würth-grade products.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#services" className="clip-angled bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-red transition-transform hover:scale-105">Explore Services</a>
          <a href="tel:9515285124" className="clip-angled border-2 border-primary bg-transparent px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-primary/10">Call 9515285124</a>
        </div>
        <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
          {[["500+", "Cars Protected"], ["5★", "Customer Rating"], ["4+", "Years Experience"]].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl font-black text-primary md:text-5xl">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel label="Our Services" />
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-black uppercase md:text-6xl">
          Engineered for <span className="text-primary">Perfection</span>
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <div key={s.title} className="group relative overflow-hidden border border-border bg-card p-8 transition-all hover:border-primary hover:shadow-red">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-all group-hover:bg-primary/15" />
              <div className="hex-shield relative grid h-14 w-14 place-items-center bg-primary text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary">
                Enquire <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WurthBanner() {
  return (
    <section id="partner" className="relative overflow-hidden py-20" style={{ background: "var(--gradient-red)" }}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-[auto_1fr]">
        <div className="hex-shield grid h-32 w-32 place-items-center bg-background font-display text-3xl font-black text-primary">W</div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground/80">Official Partnership</div>
          <h2 className="mt-2 font-display text-3xl font-black uppercase text-primary-foreground md:text-5xl">OFFICIAL PARTNERSHIP POWERED BY WÜRTH</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/90">
            We use only genuine Würth chemicals, films and tools — the same trusted by professional detailers across the globe.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Genuine Products", "Certified Application", "Manufacturer Warranty", "Pro-Grade Tools"].map(t => (
              <span key={t} className="border border-primary-foreground/30 bg-background/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const galleryImages = [
  { src: "https://i.pinimg.com/736x/d9/5c/d0/d95cd04d85043401df2b957eeba934cd.jpg", title: "Ceramic Coating" },
  { src: "https://i.pinimg.com/1200x/73/46/95/734695b8cbe45485127784142a6374dc.jpg", title: "PPF Application" },
  { src: "https://i.pinimg.com/736x/8b/4c/4a/8b4c4a5f5f5f5f5f5f5f5f5f5f5f5f5f.jpg", title: "Gloss Finish" },
  { src: "https://i.pinimg.com/736x/1c/2d/3e/1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f.jpg", title: "Matte Wrap" },
  { src: "https://i.pinimg.com/736x/9a/8b/7c/9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d.jpg", title: "Interior Detail" },
  { src: "https://i.pinimg.com/736x/a9/b8/c7/a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4.jpg", title: "Window Tint" },
  { src: "https://i.pinimg.com/736x/b8/c7/d6/b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3.jpg", title: "Showroom Shine" },
  { src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800&q=80", title: "Paint Correction" },
];

const galleryVideos = [
  { thumb: "https://i.pinimg.com/1200x/73/46/95/734695b8cbe45485127784142a6374dc.jpg", title: "PPF Install Time-lapse", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { thumb: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80", title: "Hydrophobic Test", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { thumb: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80", title: "Wrap Reveal", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { thumb: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", title: "Ceramic Beading", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

function Gallery() {
  const [tab, setTab] = useState<"images" | "videos">("images");
  const [lightbox, setLightbox] = useState<{ type: "image" | "video"; src: string; title: string } | null>(null);

  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel label="Our Work" />
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-black uppercase md:text-6xl">
            Studio <span className="text-primary">Gallery</span>
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setTab("images")}
              className={`clip-angled flex items-center gap-2 px-6 py-3 font-display text-xs font-bold uppercase tracking-widest transition-all ${tab === "images" ? "bg-primary text-primary-foreground shadow-red" : "border-2 border-border bg-transparent text-muted-foreground hover:border-primary"}`}
            >
              <Images className="h-4 w-4" /> Images
            </button>
            <button
              onClick={() => setTab("videos")}
              className={`clip-angled flex items-center gap-2 px-6 py-3 font-display text-xs font-bold uppercase tracking-widest transition-all ${tab === "videos" ? "bg-primary text-primary-foreground shadow-red" : "border-2 border-border bg-transparent text-muted-foreground hover:border-primary"}`}
            >
              <Film className="h-4 w-4" /> Videos
            </button>
          </div>
        </div>

        {tab === "images" ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightbox({ type: "image", src: img.src, title: img.title })}
                className={`group relative overflow-hidden border border-border bg-card transition-all hover:border-primary hover:shadow-red ${i % 5 === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-[4/3]"}`}
              >
                <img src={img.src} alt={img.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-left opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="font-display text-sm font-bold uppercase tracking-wider text-primary">{img.title}</div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {galleryVideos.map(v => (
              <button
                key={v.title}
                onClick={() => setLightbox({ type: "video", src: v.src, title: v.title })}
                className="group relative aspect-video overflow-hidden border border-border bg-card transition-all hover:border-primary hover:shadow-red"
              >
                <img src={v.thumb} alt={v.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-background/40 transition-colors group-hover:bg-background/20" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="hex-shield grid h-20 w-20 place-items-center bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                    <Play className="h-8 w-8 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-5 text-left">
                  <div className="font-display text-lg font-bold uppercase tracking-wide">{v.title}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-background/95 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center border-2 border-primary bg-background text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative max-h-[90vh] w-full max-w-5xl" onClick={e => e.stopPropagation()}>
            {lightbox.type === "image" ? (
              <img src={lightbox.src} alt={lightbox.title} className="max-h-[90vh] w-full object-contain" />
            ) : (
              <video src={lightbox.src} controls autoPlay className="max-h-[90vh] w-full" />
            )}
            <div className="mt-4 text-center font-display text-lg font-bold uppercase tracking-wider text-primary">{lightbox.title}</div>
          </div>
        </div>
      )}
    </section>
  );
}



function Process() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel label="The Process" />
        <h2 className="mt-3 font-display text-4xl font-black uppercase md:text-6xl">5 Steps to <span className="text-primary">Showroom</span></h2>
        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.n} className="relative border border-border bg-card p-6 transition-colors hover:border-primary">
              <div className="font-display text-5xl font-black text-primary/30">{s.n}</div>
              <h3 className="mt-2 font-display text-lg font-bold uppercase">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              {i < steps.length - 1 && <ChevronRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary md:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel label="Get In Touch" />
        <h2 className="mt-3 font-display text-4xl font-black uppercase md:text-6xl">Book Your <span className="text-primary">Slot</span></h2>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            {[
              { icon: Phone, label: "Call Us", value: "+91 9515285124", href: "tel:9515285124" },
              { icon: MapPin, label: "Visit Studio", value: "Auto Cruze, Würth Authorized Center" },
              { icon: Clock, label: "Hours", value: "Mon – Sat · 9:30 AM – 8:30 PM" },
            ].map(c => (
              <a key={c.label} href={c.href ?? "#"} className="flex items-start gap-4 border border-border bg-card p-5 transition-colors hover:border-primary">
                <div className="hex-shield grid h-12 w-12 shrink-0 place-items-center bg-primary text-primary-foreground"><c.icon className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-display text-lg font-bold">{c.value}</div>
                </div>
              </a>
            ))}
            <div className="border border-border bg-card p-5">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">GSTIN</div>
              <div className="mt-1 font-display text-lg font-bold tracking-wide">37BSVPR9136E1ZZ</div>
            </div>
          </div>

          <form className="border border-border bg-card p-8" onSubmit={(e) => { e.preventDefault(); window.location.href = "tel:9515285124"; }}>
            <h3 className="font-display text-2xl font-bold uppercase">Enquiry Form</h3>
            <div className="mt-6 space-y-4">
              <input required placeholder="Your name" className="w-full border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary" />
              <input required type="tel" placeholder="Phone number" className="w-full border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary" />
              <select className="w-full border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary">
                <option>Service interested in</option>
                {services.map(s => <option key={s.title}>{s.title}</option>)}
              </select>
              <textarea rows={4} placeholder="Tell us about your car" className="w-full border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary" />
              <button type="submit" className="clip-angled w-full bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-red transition-transform hover:scale-[1.02]">
                Request Callback
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <LogoMark size={40} />
          <div>
            <div className="font-display text-base font-black tracking-wider">AUTO CRUZE</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">PPF · Ceramic · Filming</div>
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground md:text-right">
          <div>GSTIN: 37BSVPR9136E1ZZ</div>
          <div className="mt-1">© {new Date().getFullYear()} Auto Cruze. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-10 bg-primary" />
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{label}</span>
    </div>
  );
}
