import type { Metadata } from "next";
import Image from "next/image";
import SmoothScroll from "../../Component/SmothScrolling";
import {
  BadgeCheck,
  CalendarDays,
  Droplets,
  FileCheck2,
  Globe2,
  Handshake,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Girganga Foundation Inc., USA",
  description:
    "Girganga Foundation Inc., USA supports water security, climate resilience, and community development in India.",
};

const foundationImages = {
  chairman:
    "/image/foundation-usa/Harishbhai-Bhalani.jpeg",
  treasurer:
    "/image/foundation-usa/Dr-Pradip-Kansagara.jpeg",
  projectOne: "/image/foundation-usa/20240929_150356_HDR.jpg",
  projectTwo: "/image/foundation-usa/ટોડી 2.jpg",
  qrCode:
    "/image/foundation-usa/Screenshot 2026-10-01 110735.png",
};

const supportAreas = [
  {
    icon: Droplets,
    title: "Water Security",
    description:
      "Groundwater recharge, rainwater harvesting, and restoration of water conservation structures.",
  },
  {
    icon: Leaf,
    title: "Climate Resilience",
    description:
      "Community-led interventions addressing drought, water scarcity, and climate vulnerability.",
  },
  {
    icon: Users,
    title: "Rural Development",
    description:
      "Sustainable livelihoods and community development in rural and underserved areas.",
  },
  {
    icon: Handshake,
    title: "Global Philanthropy",
    description:
      "Connecting U.S.-based donors and institutions with grassroots initiatives in India.",
  },
];

const organizationFacts = [
  {
    icon: FileCheck2,
    value: "501(c)(3)",
    label: "Federal tax-exempt organization",
  },
  { icon: Users, value: "509(a)(2)", label: "Public charity" },
  { icon: Landmark, value: "42-2587333", label: "EIN / Tax ID" },
  { icon: CalendarDays, value: "May 14, 2026", label: "Effective date" },
];

export default function FoundationUsaPage() {
  return (
    <SmoothScroll>
      <main className="bg-white text-slate-800">
      <section className="relative overflow-hidden bg-[#f4fbfd]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-(--color-primary)/10" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-(--color-secondary)/20" />
        <div className="container relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="@container">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--color-primary)/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-(--color-primary) shadow-sm">
                <Globe2 size={16} />
                United States
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.08] text-slate-900 sm:whitespace-nowrap sm:text-[clamp(1.75rem,5cqw,3.75rem)]">
                Girganga Foundation <span className="text-(--color-primary)">Inc., USA</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-slate-600 sm:text-xl">
                A U.S. charitable organization supporting water security,
                climate resilience, and community development.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">Water Security</span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">Climate Resilience</span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">Community Development</span>
              </div>
            </div>

            <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full p-3 sm:h-80 sm:w-80 sm:p-4">
              <Image
                src="/image/girganga-parivar-trust.png"
                alt="Girganga Parivar Trust"
                width={288}
                height={288}
                priority
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-(--color-primary)">Leadership</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Guided by committed community leaders</h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {[
              {
                name: "Mr. Haris Bhalani",
                role: "Chairman",
                location: "Maryland, USA",
                image: foundationImages.chairman,
              },
              {
                name: "Dr. Pradip Kansagara",
                role: "Treasurer",
                location: "Salt Lake City, Utah, USA",
                image: foundationImages.treasurer,
              },
            ].map((person) => (
              <article key={person.name} className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-900/5">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-7 text-center">
                  <h3 className="text-2xl font-black text-[#17356b]">{person.name}</h3>
                  <p className="mt-1 font-bold text-(--color-primary)">{person.role}</p>
                  <p className="mt-2 text-sm text-slate-500">{person.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbfd]">
        <div className="container py-14 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-[1fr_340px]">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {organizationFacts.map(({ icon: Icon, value, label }) => (
                  <div key={value} className="flex flex-col justify-center border-b border-slate-100 p-7 text-center last:border-0 sm:border-r lg:border-b-0">
                    <Icon className="mx-auto text-(--color-primary)" size={34} strokeWidth={1.8} />
                    <p className="mt-4 text-xl font-black text-[#17356b]">{value}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{label}</p>
                  </div>
                ))}
              </div>

              <aside className="flex flex-col items-center justify-center bg-[#17356b] p-7 text-center text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Support our work</p>
                <div className="relative mt-4 h-44 w-44 overflow-hidden rounded-2xl bg-white p-2">
                  <Image src={foundationImages.qrCode} alt="Zelle payment QR code for Girganga Foundation Inc." fill sizes="176px" className="object-contain p-2" />
                </div>
                <p className="mt-4 text-sm font-semibold">Scan in your bank&apos;s app to give via Zelle</p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-(--color-primary)">Areas of support</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Local action, strengthened by global support</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supportAreas.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-tertiary) text-(--color-primary)">
                  <Icon size={25} />
                </div>
                <h3 className="mt-5 text-lg font-black text-[#17356b]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbfd]">
        <div className="container py-14 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-(--color-primary)">Field impact in India</p>
                <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Philanthropy connected to grassroots impact</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-500">Connecting U.S.-based philanthropy with community-led water conservation in Gujarat.</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                { src: foundationImages.projectOne, alt: "Girganga Parivar Trust excavator carrying out water conservation work" },
                { src: foundationImages.projectTwo, alt: "Community members restoring a rural water conservation structure" },
              ].map((project) => (
                <div key={project.src} className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
                  <Image src={project.src} alt={project.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>

            <div className="mt-6 grid overflow-hidden rounded-2xl bg-white shadow-md sm:grid-cols-3">
              <div className="flex items-center gap-4 border-b border-slate-100 p-6 sm:border-b-0 sm:border-r">
                <Droplets className="shrink-0 text-(--color-primary)" size={38} />
                <div><p className="text-2xl font-black text-[#17356b]">19,500+</p><p className="text-xs text-slate-500">Water structures rejuvenated or created</p></div>
              </div>
              <div className="flex items-center gap-4 border-b border-slate-100 p-6 sm:border-b-0 sm:border-r">
                <Landmark className="shrink-0 text-(--color-primary)" size={38} />
                <div><p className="text-2xl font-black text-[#17356b]">₹45+ crore</p><p className="text-xs text-slate-500">Mobilized through CSR and partnerships</p></div>
              </div>
              <div className="flex items-center gap-4 p-6">
                <BadgeCheck className="shrink-0 text-(--color-primary)" size={38} />
                <div><p className="font-black text-[#17356b]">Water conservation</p><p className="text-xs text-slate-500">Groundwater recharge and rural development</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl bg-[#17356b] p-8 text-white shadow-xl sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#85d9ec]">Girganga Foundation Inc., USA</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black">A U.S -based philanthropic platform supporting grassroots impact in India.</h2>
          </div>
          <address className="space-y-3 not-italic text-sm text-white/80">
            <p className="flex gap-3"><MapPin className="shrink-0 text-[#85d9ec]" size={19} />8858 Deep Water Ln,<br />Laurel, MD 20723, United States</p>
            <a className="flex items-center gap-3 transition hover:text-white" href="mailto:usa@girgangaparivartrust.com"><Mail className="text-[#85d9ec]" size={19} />usa@girgangaparivartrust.com</a>
            <a className="flex items-center gap-3 transition hover:text-white" href="https://www.girgangaparivartrust.com" target="_blank" rel="noreferrer"><Globe2 className="text-[#85d9ec]" size={19} />www.girgangaparivartrust.com</a>
          </address>
        </div>
      </section>
      </main>
    </SmoothScroll>
  );
}
