# HAWConnect Website

<img src="public/hawconnect-icon.svg" alt="HAWConnect logo" width="88" />

[![CI](https://github.com/hawconnect/hawconnect-docs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/hawconnect/hawconnect-docs/actions/workflows/ci.yml)
[![Version](https://img.shields.io/github/package-json/v/hawconnect/hawconnect-docs/main?label=version)](package.json)
[![License: AGPL-3.0](https://img.shields.io/badge/license-AGPL--3.0-blue.svg)](LICENSE)
[![Languages](https://img.shields.io/badge/languages-English%20%7C%20Deutsch-40296C.svg)](#getting-started)

**The website for HAWConnect, the campus app for students of HAW Hamburg — built by students, for students.** It hosts the landing page, the user and contributor documentation and the legal pages at [hawconnect.de](https://hawconnect.de).

> HAWConnect is an independent, student-maintained project. It is not an official service of HAW Hamburg.

## Contents

- [Features](#features)
- [How the project is organised](#how-the-project-is-organised)
- [Getting started](#getting-started)
- [Everyday commands](#everyday-commands)
- [Testing](#testing)
- [Editing content](#editing-content)
- [Builds and deployment](#builds-and-deployment)
- [Getting help](#getting-help)
- [Contributing and maintainers](#contributing-and-maintainers)
- [Contributors](#contributors)
- [License](#license)

## Features

| Area | What you get |
| --- | --- |
| **Landing page** | What HAWConnect offers, with download links for the app stores and the web app. |
| **User docs** | Getting started, food, calendar, map, accounts and privacy, FAQ, feedback and troubleshooting. |
| **Contributor docs** | Architecture, how to contribute, and setting up the app, backend and console. |
| **Legal pages** | Privacy policy, imprint and terms — the single source every HAWConnect app and site links to. |
| **Search** | Full-text search across the docs with Pagefind. |
| **Languages** | English and German, chosen from the browser language, with a switcher; light and dark themes. |

## How the project is organised

HAWConnect is split into four repositories. This one is the website.

| Repository | Folder | What it is |
| --- | --- | --- |
| [hawconnect/hawconnect-app](https://github.com/hawconnect/hawconnect-app) | `hawconnect` | Expo app for iOS, Android and web |
| [hawconnect/hawconnect-backend](https://github.com/hawconnect/hawconnect-backend) | `hawconnect-backend` | GraphQL/REST API, accounts and sign-in site, PostgreSQL, public-source ingestion |
| [hawconnect/hawconnect-console](https://github.com/hawconnect/hawconnect-console) | `hawconnect-console` | Admin console for staff and organisers |
| [hawconnect/hawconnect-docs](https://github.com/hawconnect/hawconnect-docs) | `hawconnect-website` | **This repository** — landing page, documentation and legal pages ([hawconnect.de](https://hawconnect.de)) |

**Tech stack:** [Next.js](https://nextjs.org) 16 and React 19, [Nextra](https://nextra.site) 4 (MDX docs), Pagefind, Tailwind CSS, [Bun](https://bun.sh), Biome.

```text
src/
├── app/            # Next.js routes: landing page, docs, legal pages, sitemap
├── content/        # Documentation in MDX (en, de)
├── legal/          # Privacy policy, imprint and terms (en, de)
├── components/     # Landing page and shared UI
├── localization/   # Landing page text (en, de)
├── lib/            # Site constants and helpers (with tests)
└── proxy.ts        # Sends addresses without a language to /en or /de
```

## Getting started

### Prerequisites

- [Bun](https://bun.sh)
- Nothing else: the site needs no backend or database

### 1. Clone and install

```bash
git clone https://github.com/hawconnect/hawconnect-docs.git hawconnect-website
cd hawconnect-website
bun install --frozen-lockfile
```

### 2. Configure (optional)

Store links are optional. To show them, create `.env.local`:

```dotenv
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/…
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/…
```

`NEXT_PUBLIC_*` values are built into the site, so set them before building, not at runtime.

### 3. Run

```bash
bun dev           # http://localhost:3000
```

## Everyday commands

| Command | What it does |
| --- | --- |
| `bun dev` | Start the development server |
| `bun run build` | Production build, then the Pagefind search index |
| `bun start` | Serve the production build |
| `bun run lint` | Biome (formatting and lint) |
| `bun run fmt` | Format with Biome |
| `bun test` | Unit tests |

## Testing

Unit tests live next to the code in `src/lib` (`*.test.ts`) and run with `bun test`; they cover language detection, download links and site settings. Check content changes in the browser in both languages before merging.

## Editing content

| What | Where |
| --- | --- |
| Documentation | `src/content/en` and `src/content/de` — keep both languages in step |
| Landing page text | `src/localization/en.json` and `de.json` |
| Legal pages | `src/legal/{privacy,imprint,terms}.{en,de}.mdx` |

The legal pages are published at `/{en,de}/legal/{privacy,imprint,terms}` and every HAWConnect surface links to them (website, web app, iOS and Android apps, sign-in site and console), so keep those URLs stable. Merge changes into `main`; the next deployment publishes them.

## Builds and deployment

The `Build and publish image` workflow builds `ghcr.io/hawconnect/hawconnect-docs` on every push to `main`, tagged `build-<run number>` and `latest`. The optional `NEXT_PUBLIC_APP_STORE_URL` and `NEXT_PUBLIC_GOOGLE_PLAY_URL` repository variables are passed to the build.

To build the image yourself:

```bash
docker build --build-arg COMMIT_HASH=$(git rev-parse HEAD) -t hawconnect-docs .
docker run -p 3000:3000 hawconnect-docs
```

The image uses Next.js standalone output, runs as a non-root user and listens on port 3000; `COMMIT_HASH` is shown in the footer. In Coolify, deploy `ghcr.io/hawconnect/hawconnect-docs:latest` as a Docker image application on port `3000` with the domain `https://hawconnect.de`.

## Getting help

- **Using the app:** the documentation on [hawconnect.de](https://hawconnect.de/en/docs).
- **Bugs and ideas:** open an issue in [GitHub Issues](https://github.com/hawconnect/hawconnect-docs/issues).
- **Security problems:** please report privately as described in the app's [security policy](https://github.com/hawconnect/hawconnect-app/blob/main/.github/SECURITY.md).
- **Contact:** contact@hawconnect.de

## Contributing and maintainers

HAWConnect is maintained by students at HAW Hamburg, and contributions are welcome — documentation, translations, bug reports and ideas.

1. Read [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md) and the project conventions in [AGENTS.md](AGENTS.md).
2. Branch from `dev` (`feature/…`, `fix/…`), use [Conventional Commits](https://www.conventionalcommits.org/), and open a pull request into `dev`.
3. Please follow the [Code of Conduct](.github/CODE_OF_CONDUCT.md).

## Contributors

HAWConnect is built by many contributors. GitHub keeps the current list for each repository:

- [App](https://github.com/hawconnect/hawconnect-app/graphs/contributors)
- [Backend](https://github.com/hawconnect/hawconnect-backend/graphs/contributors)
- [Console](https://github.com/hawconnect/hawconnect-console/graphs/contributors)
- [Docs](https://github.com/hawconnect/hawconnect-docs/graphs/contributors)

Want to join? See [Contribute](https://hawconnect.de/en/docs/contribute/contribute).

## License

HAWConnect is free software under the [GNU Affero General Public License v3.0](LICENSE).

### Source attribution

The HAWConnect website contains code adapted from the neuland.app-docs site (https://github.com/neuland-ingolstadt/neuland.app-docs, commit 1fbf8fa12069cf9bfce650dcd0ce87af4671715e) and related upstream components, maintained by Neuland Ingolstadt e.V. Original copyright and licence notices in the incorporated source remain applicable (see `LICENSE`, AGPL-3.0). HAWConnect is independently maintained and does not claim upstream endorsement.
