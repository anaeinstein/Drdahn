# drdahn.ch – Astro-Neubau (Demo)

Statischer Nachbau der bisherigen WordPress/Elementor-Seite. Kein CMS, keine Datenbank, kein PHP.

## Befehle
- `npm install` – einmalig
- `npm run dev` – lokale Vorschau auf http://localhost:4321
- `npm run build` – fertige Seite nach `dist/` (diesen Ordner zu Cloudflare Pages hochladen)

## Aufbau
- `src/data/pages/*.json` – Inhalt jeder Seite (Texte wortgleich aus dem Original übernommen) samt Layout
- `src/data/menu.json`, `videos.json`, `popup.json` – Menü, YouTube-Playlist, Startseiten-Popup
- `src/assets/media/` – Original-Bilder (Pfade wie in wp-content/uploads); Astro erzeugt daraus AVIF/WebP
- `src/components/` – Header, Footer, Karten, Video-Playlist, Popup, Node (rendert die Bausteine)
- `src/styles/global.css` – CI-Farben (#8BC34A, #54595F, #7A7A7A), Schrift Nunito (selbst gehostet)

## Vor dem Livegang
- `noindex` in `src/layouts/Base.astro` entfernen
- MP3-Downloads zeigen noch auf den alten Server (drdahn.ch/wp-content/uploads/…) → z. B. nach Cloudflare R2 umziehen
- YouTube-Vorschaubilder lokal ablegen (aktuell von i.ytimg.com)
- Weiterleitungen (`public/_redirects`) für die alten Kategorie-Seiten /category/… anlegen
