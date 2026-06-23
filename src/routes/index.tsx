import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Wheat,
  Leaf,
  Facebook,
  Navigation,
  Menu,
  X,
} from "lucide-react";

import heroVitrine from "@/assets/hero-vitrine.jpg";
import imgPains from "@/assets/pains.jpg";
import imgViennoiseries from "@/assets/viennoiseries.jpg";
import imgPatisseries from "@/assets/patisseries.jpg";
import imgSnacking from "@/assets/snacking.jpg";
import imgHistoire from "@/assets/histoire.jpg";
import imgFacade from "@/assets/facade.jpg";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import gal4 from "@/assets/gal-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Girondon — Boulangerie artisanale à Amboise" },
      {
        name: "description",
        content:
          "Pain au levain naturel, viennoiseries et pâtisseries 100% maison au cœur d'Amboise, Val de Loire. Blé français CRC, ingrédients de qualité.",
      },
      { property: "og:title", content: "Maison Girondon — Boulangerie à Amboise" },
      {
        property: "og:description",
        content: "Boulangerie-pâtisserie artisanale au pied du château d'Amboise.",
      },
      { property: "og:image", content: heroVitrine },
    ],
  }),
  component: Home,
});

const ADDRESS = "99 Rue Nationale, 37400 Amboise";
const PHONE_DISPLAY = "02 47 57 02 62";
const PHONE_TEL = "+33247570262";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Maison Girondon, 99 Rue Nationale, 37400 Amboise");
const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("99 Rue Nationale, 37400 Amboise") +
  "&output=embed";

const NAV = [
  { href: "#accueil", label: "Accueil" },
  { href: "#produits", label: "Nos Produits" },
  { href: "#histoire", label: "Notre Histoire" },
  { href: "#avis", label: "Avis" },
  { href: "#trouver", label: "Nous trouver" },
];

const PRODUITS = [
  {
    title: "Pains",
    img: imgPains,
    desc: "Baguette tradition, tourte de campagne, pain complet et pains spéciaux.",
    tags: ["Levain naturel", "Blé français CRC"],
  },
  {
    title: "Viennoiseries",
    img: imgViennoiseries,
    desc: "Croissants pur beurre, pains au chocolat, brioches et chaussons feuilletés à la main.",
    tags: ["Pur beurre", "Fait maison"],
  },
  {
    title: "Pâtisseries",
    img: imgPatisseries,
    desc: "Tartes de saison, éclairs, paris-brest et créations du chef pâtissier.",
    tags: ["Fruits de saison", "100% maison"],
  },
  {
    title: "Sandwichs & snacking",
    img: imgSnacking,
    desc: "Sandwichs sur baguette tradition, quiches, salades et formules à emporter.",
    tags: ["À emporter", "Frais du jour"],
  },
];

const AVIS = [
  {
    name: "Camille L.",
    text:
      "La meilleure baguette d'Amboise ! Croûte croustillante, mie alvéolée, on sent le vrai savoir-faire.",
  },
  {
    name: "Jean-Pierre M.",
    text:
      "Accueil très chaleureux, viennoiseries exceptionnelles. Une étape obligatoire avant la visite du château.",
  },
  {
    name: "Sophie R.",
    text:
      "Pâtisseries d'une grande finesse et pain au levain remarquable. Bravo à toute l'équipe.",
  },
];

const HORAIRES = [
  { jour: "Lundi", h: "Fermé" },
  { jour: "Mardi", h: "7h00 – 13h00 · 15h30 – 19h00" },
  { jour: "Mercredi", h: "7h00 – 13h00 · 15h30 – 19h00" },
  { jour: "Jeudi", h: "7h00 – 13h00 · 15h30 – 19h00" },
  { jour: "Vendredi", h: "7h00 – 13h00 · 15h30 – 19h00" },
  { jour: "Samedi", h: "7h00 – 13h00 · 15h30 – 18h30" },
  { jour: "Dimanche", h: "Fermé" },
];

function Home() {
  const [lang, setLang] = useState<"FR" | "EN">("FR");
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#accueil" className="flex min-w-0 items-center gap-2">
            <Wheat className="h-5 w-5 shrink-0 text-bordeaux" aria-hidden />
            <span className="truncate font-display text-lg font-semibold tracking-tight text-bordeaux">
              Maison Girondon
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/75 transition-colors hover:text-bordeaux"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold sm:flex">
              {(["FR", "EN"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-2.5 py-1 transition-colors ${
                    lang === l
                      ? "bg-bordeaux text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={lang === l}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              className="grid h-10 w-10 place-items-center rounded-md text-foreground lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary"
                >
                  {n.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2 px-2">
                {(["FR", "EN"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`rounded-full border border-border px-3 py-1 text-xs font-semibold ${
                      lang === l ? "bg-bordeaux text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>

      <section id="accueil" className="relative isolate overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroVitrine}
            alt="Vitrine de la boulangerie Maison Girondon à Amboise"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bark/70 via-bark/55 to-bark/85" />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32 md:py-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-bark/30 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cream backdrop-blur">
            <Wheat className="h-3.5 w-3.5" /> Amboise · Val de Loire
          </span>
          <h1 className="text-balance mt-6 font-display text-4xl font-semibold leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            Une boulangerie artisanale<br className="hidden sm:inline" /> au cœur d'Amboise
          </h1>
          <p className="text-balance mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
            Pain au levain naturel, viennoiseries pur beurre et pâtisseries faites
            maison chaque jour. Du blé français issu de la filière CRC, un
            savoir-faire transmis avec passion.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#trouver"
              className="inline-flex items-center gap-2 rounded-full bg-bordeaux px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-bark/30 transition-transform hover:-translate-y-0.5"
            >
              <MapPin className="h-4 w-4" /> Nous trouver
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-6 py-3 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-cream/20"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
          {[
            { icon: Wheat, t: "Blé français CRC", s: "Culture raisonnée & contrôlée" },
            { icon: Leaf, t: "Levain naturel", s: "Fermentation longue, mie aérée" },
            { icon: Star, t: "100% fait maison", s: "Chaque jour dans notre fournil" },
          ].map((v) => (
            <div key={v.t} className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-bordeaux/10 text-bordeaux">
                <v.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold text-bark">{v.t}</p>
                <p className="text-sm text-muted-foreground">{v.s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="produits" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick">Nos produits</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-bark sm:text-5xl">
              Le meilleur de la tradition française
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Toute notre gamme est élaborée chaque matin, à partir d'ingrédients
              soigneusement sélectionnés, dans le respect des gestes artisanaux.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUITS.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl hover:shadow-bark/10"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-bark">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-bark/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="histoire" className="relative bg-secondary py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative">
            <img
              src={imgHistoire}
              alt="Le savoir-faire de la Maison Girondon"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[5/4] w-full rounded-3xl object-cover shadow-xl shadow-bark/15"
            />
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-bordeaux px-5 py-4 text-primary-foreground shadow-lg sm:block">
              <p className="font-display text-3xl font-semibold leading-none">+30 ans</p>
              <p className="text-xs uppercase tracking-widest opacity-80">de passion</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick">Notre histoire</p>
            <h2 className="text-balance mt-3 font-display text-3xl font-semibold text-bark sm:text-5xl">
              Le pain comme un geste de transmission
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">
              Installée depuis plusieurs années sur la Rue Nationale, à deux pas
              de l'église Saint-Denis et du château d'Amboise, la Maison
              Girondon perpétue les gestes d'une boulangerie-pâtisserie
              authentique. Levain naturel, pétrissage doux, longues
              fermentations : chaque pain raconte la patience de l'artisan.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/85">
              Notre équipe vous accueille chaque jour avec le sourire, qu'il
              s'agisse de la baguette du quotidien ou d'une pâtisserie pour
              célébrer un moment d'exception au cœur du Val de Loire.
            </p>
          </div>
        </div>
      </section>

      <section id="avis" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < 4 ? "fill-current" : "fill-current opacity-50"}`}
                />
              ))}
            </div>
            <p className="mt-3 font-display text-2xl font-semibold text-bark">4,5 / 5 sur Google</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-bark sm:text-4xl">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {AVIS.map((a) => (
              <figure key={a.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-3 flex text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-foreground/85">
                  « {a.text} »
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  — {a.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="galerie" className="bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick">Galerie</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-bark sm:text-5xl">
              Un aperçu de la maison
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {[gal1, gal2, gal3, gal4, imgFacade, imgPatisseries, imgPains, imgViennoiseries].map(
              (src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="trouver" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brick">Nous trouver</p>
              <h2 className="text-balance mt-3 font-display text-3xl font-semibold text-bark sm:text-5xl">
                Au pied du château d'Amboise
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                En plein centre-ville, à quelques pas de l'église Saint-Denis et
                du château royal. Idéal pour une pause gourmande pendant votre
                visite du Val de Loire.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-bordeaux" />
                  <div className="min-w-0">
                    <p className="font-semibold text-bark">{ADDRESS}</p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-bordeaux hover:underline"
                    >
                      <Navigation className="h-3.5 w-3.5" /> Itinéraire
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-secondary"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-bordeaux" />
                  <div className="min-w-0">
                    <p className="font-semibold text-bark">{PHONE_DISPLAY}</p>
                    <p className="text-sm text-muted-foreground">Appeler la boutique</p>
                  </div>
                </a>
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-3 flex items-center gap-2 text-bark">
                    <Clock className="h-5 w-5 text-bordeaux" />
                    <p className="font-display text-lg font-semibold">Horaires d'ouverture</p>
                  </div>
                  <dl className="divide-y divide-border">
                    {HORAIRES.map((h) => (
                      <div key={h.jour} className="grid grid-cols-[5rem_1fr] gap-3 py-2 text-sm">
                        <dt className="font-semibold text-bark">{h.jour}</dt>
                        <dd className={h.h === "Fermé" ? "text-muted-foreground" : "text-foreground/85"}>
                          {h.h}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-lg shadow-bark/10">
              <iframe
                title="Carte Maison Girondon, Amboise"
                src={MAPS_EMBED}
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-bark text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Wheat className="h-5 w-5 text-gold" />
              <span className="font-display text-xl font-semibold">Maison Girondon</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-cream/75">
              Boulangerie-pâtisserie artisanale au cœur d'Amboise, Val de Loire.
            </p>
          </div>
          <div className="text-sm leading-relaxed text-cream/85">
            <p className="font-display text-base font-semibold text-cream">Contact</p>
            <p className="mt-3">{ADDRESS}</p>
            <a href={`tel:${PHONE_TEL}`} className="block hover:text-gold">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <p className="font-display text-base font-semibold text-cream">Suivez-nous</p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/30 transition-colors hover:bg-cream/10"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-cream/15">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-cream/60 sm:flex-row sm:items-center sm:px-6">
            <p>© {new Date().getFullYear()} Maison Girondon — Tous droits réservés.</p>
            <p>Site vitrine · Mentions légales</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
