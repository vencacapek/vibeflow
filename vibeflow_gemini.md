# VIBEFLOW.CZ — GEMINI.md

## Projekt
- Název: vibeflow.cz
- Autor: Václav Čapek (Venca), vibecoder, Jižní Čechy
- Cíl: Osobní web — portfolio, blog, ceník služeb
- Cílová skupina: Malí živnostníci a podnikatelé v ČR
- Jazyk webu: čeština
- Kontakt: [TODO: doplnit info@vibeflow.cz až bude aktivní]

---

## Tech stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Blog: Markdown soubory (.md) ve složce /content/blog
- Formulář: Firebase Functions (kontaktní formulář)
- Hosting: Firebase Hosting
- Analytika: Google Analytics 4
- Nástroj: Google Antigravity (Firebase Studio)

---

## Design systém

### Font
- General Sans (Fontshare)
- Import: https://api.fontshare.com/v2/css?f[]=general-sans@500,400&display=swap
- font-weight: 400 (text), 500 (nadpisy, logo)

### Barvy
```css
--color-accent:     #2563eb;  /* tlačítka, logo "flow", odkazy */
--color-bg-dark:    #111827;  /* tmavé sekce */
--color-text-muted: #6b7280;  /* popisky, metadata */
--color-bg-light:   #f1f5f9;  /* světlé sekce, karty */
--color-bg-white:   #ffffff;  /* hlavní pozadí */
```

### Logo
- Soubor: /public/logo/vibeflow-logo.svg
- "vibe" = #111827, "flow" = #2563eb
- Nikdy neměnit barvy ani proporce loga

---

## Stránky

### / (Úvod — Landing page)
Sekce v pořadí:
1. Hero: headline + podtitulek + CTA tlačítko "Napište mi"
2. Proces: 3 kroky jak spolupráce funguje
3. Projekty: 3 nejnovější karty z /projekty
4. O mně: krátký text + foto [TODO: foto dodat]
5. Blog preview: 2 nejnovější články
6. Kontakt: formulář (jméno, email, zpráva)

### /projekty
- polozpolys.cz — web pro živnostníka [TODO: screenshot]
- Fotbalový kvíz — webová hra [TODO: screenshot + odkaz]
- Podpisová aplikace — podepisování dokumentů razítkem [TODO: video]
- Cosmic Fog — landing page pivovaru [TODO: screenshot + odkaz]

### /blog
- Zdroj: Markdown soubory v /content/blog/
- Formát názvu souboru: YYYY-MM-DD-nazev-clanku.md
- Frontmatter povinný: title, date, description, slug
- První článek: připravený text o cestě k vibecodingu [TODO: dokončit + uložit jako 2026-03-14-jak-jsem-zacal.md]

### /cenik
- Landing page: cena na dotaz
- Firemní web: cena na dotaz
- Webová aplikace: cena na dotaz
- CTA: kontaktní formulář
<!-- Ceny doplnit po prvních 3 projektech -->

---

## Pracovní pravidla pro AI
- Odpovídej vždy česky
- Nikdy neprovádět git commit ani deploy bez mého souhlasu
- Před větší změnou vždy popsat co chystáš udělat
- Preferuj jednoduchá řešení před komplexními
- Komentáře v kódu piš česky
- Pokud něčemu nerozumím, vysvětli mi to jednoduše

---

## Tón webu
- Lidský, přímý, bez korporátní mluvy
- Tykání všude
- Krátké věty, žádný bullshit
- Příběh řemeslníka který kóduje s AI

---

## Struktura složek
```
/public
  /logo
    vibeflow-logo.svg
  /images
    [TODO: screenshoty projektů]
    [TODO: foto autora]
/content
  /blog
    [TODO: 2026-03-14-jak-jsem-zacal.md]
/src
  /app
    page.tsx              ← úvod
    /projekty
      page.tsx
    /blog
      page.tsx
      /[slug]
        page.tsx
    /cenik
      page.tsx
  /components
  /styles
    globals.css           ← CSS proměnné + font import
```

---

## TODO seznam
- [ ] Aktivovat info@vibeflow.cz
- [ ] Dokončit první blogový článek
- [ ] Screenshoty: polozpolys.cz, fotbalový kvíz, Cosmic Fog
- [ ] Video: podpisová aplikace
- [ ] Foto autora
- [ ] Doplnit ceny po prvních 3 projektech
- [ ] Napojit Google Analytics 4
- [ ] Nastavit Firebase Functions pro formulář