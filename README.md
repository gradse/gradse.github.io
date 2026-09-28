# Personal Website

A static academic/professional homepage. There's no build step: just HTML, CSS and JS.

## Folder structure

```
Personal_Web/
├── index.html              home page
├── cv.html                 CV page (embeds the PDF set in data.js → links.cv)
├── data.js                 ALL your content (the only file you normally edit)
├── data-features.js        feature catalogs behind a project's "Features" button (STAT-MiniBank)
├── README.md
└── assets/
    ├── css/styles.css      styling
    ├── js/main.js          renders data.js into the home page
    ├── js/cv.js            renders the CV page
    ├── img/
    │   ├── headshot.jpg    web headshot (800×800, square crop)
    │   ├── originals/      full-size source photos
    │   └── projects/       optional project thumbnails (16:9 works best)
    └── docs/               CV and other PDFs (e.g. cv.pdf)
```

To replace the headshot, save a square JPEG as `assets/img/headshot.jpg`. About 800×800 pixels and under 200 KB is ideal. If the file is missing, your initials are shown instead.

Any field left empty (`""` or `[]`) is hidden. For example, the Publications section only shows up once you add a paper.

## Preview locally

```bash
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Deploy for free with GitHub Pages

1. Create a GitHub repo named `<your-username>.github.io`.
2. Push these files to the `main` branch.
3. Go to repo **Settings → Pages**, and set Source to "Deploy from a branch", `main`, `/ (root)`.
4. The site goes live at `https://<your-username>.github.io`.

## Use your name as the domain (e.g. yufeiwang.com)

1. **Buy the domain.** Try Cloudflare Registrar, Porkbun or Namecheap (about $10–15/yr for `.com`). Good options: `yufeiwang.com`, `yufeiwang.dev`, `yufei-wang.com`, `yufeiwang.me`.
2. **Add the domain in GitHub.** Go to **Settings → Pages → Custom domain**, enter `yufeiwang.com` and save. This creates a `CNAME` file in the repo.
3. **Set DNS records at your registrar:**

   | Type | Name | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | `<your-username>.github.io` |

4. Wait for DNS to update (minutes to a few hours). Then tick **Enforce HTTPS** in the Pages settings.

Netlify and Vercel also work: drag-and-drop the folder, then add the domain in their dashboard.
