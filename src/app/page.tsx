import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      {/* 1. Hero sekce */}
      <section 
        className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-cover bg-[center_top]"
        style={{ backgroundImage: 'url("/images/hero-bg.webp")' }}
      >
        {/* Tmavý overlay */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none" 
          style={{ background: 'linear-gradient(to bottom, rgba(17, 24, 39, 0.55), rgba(17, 24, 39, 0.75))' }}
        ></div>

        {/* Glow efekty na pozadí */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center pt-16 relative z-10">
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-gray-800/40 border border-gray-700/50 px-4 py-1.5 text-sm font-medium text-gray-300 backdrop-blur-md">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Otevřeno novým projektům
            </span>
          </div>
          <h1 className="text-5xl font-medium tracking-tight text-white sm:text-7xl mb-8 leading-tight drop-shadow-sm">
            Tvorba v rytmu nápadu
          </h1>
          <p className="mt-8 text-xl sm:text-2xl leading-8 text-gray-200 font-medium max-w-4xl mx-auto drop-shadow-md">
            Weby a aplikace postavené s AI. Rychle, čistě, bez zbytečností.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#kontakt"
              className="w-full sm:w-auto rounded-full bg-[#2563eb] px-8 py-3.5 text-sm sm:text-base font-medium text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105 hover:bg-blue-700 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
            >
              Napište mi
            </Link>
            <Link 
              href="#projekty" 
              className="w-full sm:w-auto rounded-full px-8 py-3.5 text-sm sm:text-base font-medium text-white hover:text-gray-300 transition-all flex items-center justify-center gap-2 group border border-transparent hover:border-gray-700 hover:bg-gray-800/50"
            >
              Prohlédnout práci
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Proces */}
      <section className="py-24 sm:py-32 border-t border-gray-800 relative z-10 bg-bg-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">Jak funguje spolupráce</h2>
            <p className="mt-4 text-text-muted text-lg">Tři jednoduché kroky k novému webu</p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                num: "1",
                title: "Vize a zadání",
                desc: "Řekneš mi, co potřebuješ. Pobavíme se o tvých cílech a tom, jak by měl web vypadat."
              },
              {
                num: "2",
                title: "Návrh a AI kódování",
                desc: "S využitím umělé inteligence postavím první verzi. Rychle, efektivně a přesně podle dohody."
              },
              {
                num: "3",
                title: "Spuštění",
                desc: "Vyladíme detaily a web vypustíme do světa. Nasadím analytiku a předám ti klíče."
              }
            ].map((step) => (
              <div key={step.title} className="bg-white/5 p-8 rounded-2xl border border-[#2563eb]/30 relative top-0 hover:-top-1 hover:border-[#2563eb]/60 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2563eb] text-white font-bold text-sm shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-medium text-white">{step.title}</h3>
                </div>
                <p className="mt-4 text-text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Projekty Preview */}
      <section id="projekty" className="py-24 sm:py-32 border-t border-gray-800 relative z-10 bg-bg-dark scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">Vybrané projekty</h2>
              <p className="mt-4 text-text-muted text-lg">Ukázky toho, co jsem nedávno postavil.</p>
            </div>
            <Link href="/projekty" className="hidden sm:block text-accent font-medium hover:underline">
              Zobrazit vše →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Položpolys.cz",
                desc: "Web pro živnostníka — izolace podlah",
                image: "/images/polozpolys-screen.webp",
                link: "https://polozpolys.cz",
                tags: ["Web"],
                concept: false
              },
              {
                title: "Football Professor — Fotbalový kvíz",
                desc: "Interaktivní webová hra se 100 otázkami a žebříčkem",
                image: "/images/football-professor.webp",
                link: "https://fotbalovy-iq-venca.netlify.app",
                tags: ["Webová hra"],
                concept: false
              },
              {
                title: "Cosmic Fog",
                desc: "Landing page pro fiktivní pivovar",
                image: "/images/cosmic-fog-screen.webp",
                link: null,
                tags: ["Landing page", "Koncept"],
                concept: true
              },
              {
                title: "Potvrzování dokumentů",
                desc: "Webová aplikace usnadňující proces schvalování a digitální evidence.",
                image: "/images/potvrzovani-dokumentu-screen.webp",
                link: null,
                tags: ["Next.js", "Aplikace"],
                concept: false
              }
            ].map((p, idx) => {
              const CardContent = (
                <>
                  <div className="aspect-video bg-gray-800 flex items-center justify-center relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 z-10"></div>
                    {p.concept && (
                      <span className="absolute top-4 right-4 bg-gray-900/80 text-xs px-2 py-1 z-20 rounded text-gray-300 border border-gray-700 backdrop-blur-sm">Koncept</span>
                    )}
                  </div>
                  <div className="p-6 relative z-20">
                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#2563eb] transition-colors flex items-center gap-2">
                      {p.title}
                      {p.link && <span className="text-[#2563eb] text-sm opacity-0 group-hover:opacity-100 transition-opacity">↗</span>}
                    </h3>
                    <p className="text-text-muted text-sm mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                      {p.tags.map(tag => (
                        <span key={tag} className="bg-gray-800 px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </>
              );

              return p.link ? (
                <a key={idx} href={p.link} target="_blank" rel="noopener noreferrer" className="bg-gray-900/40 rounded-2xl border border-gray-800 overflow-hidden hover:border-[#2563eb]/40 transition-all duration-300 group block">
                  {CardContent}
                </a>
              ) : (
                <div key={idx} className="bg-gray-900/40 rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300 group">
                  {CardContent}
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link href="/projekty" className="text-accent font-medium hover:underline">
              Zobrazit všechny projekty →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. O mně */}
      <section className="py-24 sm:py-32 border-t border-gray-800 relative z-10 bg-bg-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">Kdo jsem?</h2>
            <div className="mt-6 space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Jsem technologický nadšenec, kterého vždycky obrovsky bavilo tvořit a zkoušet nové věci. 
                S nástupem umělé inteligence jsem naplno propadl kouzlu "vibecodingu" – schopnosti 
                vytvářet weby a aplikace plynule, rychle a v těsné součinnosti s AI parťákem. Neusínám 
                na vavřínech a neustále se pomocí AI učím nové technologie a postupy.
              </p>
              <p>
                Nejsem typický korporátní vývojář a na nic si nehraju. Rád ti pomůžu zhmotnit tvůj nápad 
                od první myšlenky přes čistou landing page až po funkční webovou aplikaci.
              </p>
            </div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl aspect-[4/5] flex items-center justify-center text-gray-600 max-w-md mx-auto w-full overflow-hidden group shadow-lg shadow-black/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/foto-venca.webp" 
              alt="Václav Čapek" 
              className="w-full h-full object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
            />
          </div>
        </div>
      </section>

      {/* 6. Kontakt */}
      <section id="kontakt" className="py-24 sm:py-32 border-t border-gray-800 relative z-10 bg-bg-dark scroll-mt-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">Jdeme na to?</h2>
          <p className="mt-4 text-text-muted text-lg mb-12">
            Napiš mi a zkusme společně vymyslet, jak posunout tvůj byznys na webu.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 text-left max-w-xl mx-auto">
            <div className="flex items-center gap-4 group">
              <div className="text-[#2563eb] shrink-0 transition-transform group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <div>
                <span className="block text-sm text-gray-500">Jméno</span>
                <span className="block text-white font-medium">Václav Čapek</span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="text-[#2563eb] shrink-0 transition-transform group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <span className="block text-sm text-gray-500">Lokalita</span>
                <span className="block text-white font-medium">České Budějovice</span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="text-[#2563eb] shrink-0 transition-transform group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <span className="block text-sm text-gray-500">E-mail</span>
                <a href="mailto:info@vibeflow.cz" className="block text-white font-medium hover:text-[#2563eb] transition-colors">info@vibeflow.cz</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="text-[#2563eb] shrink-0 transition-transform group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <span className="block text-sm text-gray-500">Telefon</span>
                <a href="tel:+420776132208" className="block text-white font-medium hover:text-[#2563eb] transition-colors">776 132 208</a>
              </div>
            </div>
          </div>
          
          <form 
            action="https://formspree.io/f/maqllodg" 
            method="POST" 
            className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 text-left space-y-6 shadow-sm"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Jméno</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-bg-dark rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="Tvé jméno" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-bg-dark rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="tomas@priklad.cz" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Zpráva</label>
              <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 bg-bg-dark rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="Co máš v plánu?"></textarea>
            </div>
            <button type="submit" className="w-full bg-accent text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Odeslat zprávu
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
