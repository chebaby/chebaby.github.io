# chebaby.github.io

Source of the current portfolio of Nour-Eddine Ech-Chebaby, live at **<https://echebaby.com/>**.

This repository contains the present, Astro-based implementation. An earlier portfolio is preserved on the
[`legacy-archive`](https://github.com/chebaby/chebaby.github.io/tree/legacy-archive) branch. It is superseded and is
not the version deployed at the address above, so please treat the live site as the source of truth for current work.

The blog at <https://echebaby.com/blog/> is a separate site with its own repository,
[`chebaby/blog`](https://github.com/chebaby/blog).

## Stack

- [Astro](https://astro.build/), static output, no client framework
- Fonts downloaded at build time and served from the same origin
- GitHub Actions deploying to GitHub Pages on every push to `master`
  ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))

## Develop

Requires Node.js 22 or newer (see `engines` in `package.json`).

```sh
npm install
npm run dev       # local dev server
npm run build     # static build into dist/
npm run preview   # serve the production build locally
npm run check     # type and Astro diagnostics
```

## Layout

| Path                | Contents                                                              |
| ------------------- | --------------------------------------------------------------------- |
| `src/pages`         | The landing page                                                      |
| `src/components`    | Page sections and project cards                                       |
| `src/data`          | Content as data, including the project case studies (`projects.ts`)   |
| `src/config/site.ts`| Site-wide name, description, contact and social links                 |
| `src/assets`        | Project artwork (conceptual, not application screenshots)             |
| `public`            | Static files served as-is: `robots.txt`, icons, manifest, `CNAME`     |

Two optional build-time variables are read in `src/config/site.ts`: `PUBLIC_CONTACT_EMAIL` and
`PUBLIC_FORM_ENDPOINT`. Without them the site uses its built-in defaults.

## License

MIT, see [`LICENSE`](LICENSE).
