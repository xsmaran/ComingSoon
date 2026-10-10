# Nookaa

Nookaa’s grab-and-go beverage website, built with Next.js 16 App Router, React, Tailwind CSS, Motion and Three.js.

## Run locally

Use Node.js 24 (also configured for Netlify in `.nvmrc` and `netlify.toml`).

```bash
npm ci
npm run dev
```

The development site runs at http://localhost:3000.

```bash
npm run typecheck
npm run build
npm start
```

The build uses Webpack, including the dynamically loaded Three.js scene.

## Deploy to Netlify

1. Push this project to a Git repository, including `package-lock.json`, `netlify.toml`, `src/` and `public/`.
2. In Netlify, select **Add new project → Import an existing project** and connect the repository.
3. Select the directory containing `package.json` as the base directory. The configuration supplies:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node.js version: `24`
4. Deploy the site. Netlify automatically applies its current OpenNext adapter for Next.js routing, image optimization and server features. No manually pinned adapter plugin is needed.
5. Connect `nookaa.in` in Netlify’s domain settings when ready to use the production domain.

This is a Next.js deployment through Netlify’s build pipeline. The `.next` folder is the adapter’s input, rather than a standalone collection of files for a manual static upload. Keep Next.js output in its default mode so optimized images and sharing-image routes work.

The configuration enables Netlify’s deployment skew protection, helping visitors continue using matching assets during a new release. Do not add a catch-all SPA rewrite to `index.html`; the adapter manages routes, including blog articles, enquiry pages, redirects and 404 responses.

Official setup: [Next.js on Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/).

### Optional public environment variables

Add these in Netlify’s environment-variable settings before building if their values are available:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_NOOKAA_APP_STORE_URL` | Published Nookaa App Store listing |
| `NEXT_PUBLIC_NOOKAA_PLAY_STORE_URL` | Published Nookaa Google Play listing |
| `NEXT_PUBLIC_LOCAL_ASSETS` | Set to `1` only after downloading the optional legacy CDN assets into `public/framer/` |

The site builds without these variables. App download badges currently link to the contact page when store listings are unset. Fonts, brand artwork, mascot graphics and storefront references are bundled locally. Next.js image optimization remains enabled and is handled by Netlify’s Image CDN.

Canonical URLs, the sitemap and structured data use `https://nookaa.in`. Netlify preview URLs can be used to test the site; canonical URLs intentionally identify the production domain.

## Pages and content

| Route | Page |
| --- | --- |
| `/` | Home, interactive 3D storefront, beverage menu, app section and FAQ |
| `/about-us` | Brand story, values and founder’s note |
| `/menu` | Full beverage menu, add-ons and prices |
| `/blog` | Brewlog and category filters |
| `/blog/articles/[slug]` | Statically generated article pages |
| `/contact-us` | Contact details, directions and email contact form |
| `/jobs` | Job enquiry |
| `/franchise-inquiry` | Six-step operator application |
| `/feedback` | Feedback enquiry |
| `/brand-collaborations` | Brand and creator enquiry |
| `/stalls-and-catering` | Beverage event enquiry |
| `/privacy-policy`, `/terms` | Legal pages |
| `/robots.txt`, `/sitemap.xml`, `/opengraph-image` | Search and sharing assets |

Edit content in `src/lib/content.ts`, `pages.ts`, `blog.ts`, `enquiries.ts` and `beverage-menu.json`. Prices are transcribed from the supplied Nookaa menu. All foodservice messaging is beverages-only and grab-and-go, with limited temporary seating.

Contact and enquiry forms use email drafts addressed to `hello@nookaa.in`; visitors review and send them in their email app. They do not submit data to a backend or Netlify Forms. No email-service credentials are needed for hosting the current form flow.

The hero uses actual Three.js geometry with storefront and counter views. It loads after the preloader, pauses offscreen and falls back to bundled reference artwork when WebGL is unavailable. Motion effects respect reduced-motion preferences.

## Build artifacts

`node_modules/`, `.next/` and `.netlify/` are generated locally and excluded from version control. Netlify installs locked dependencies and builds its own deployment output from the repository.
