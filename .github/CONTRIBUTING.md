# Contributing to the project

Thank you for your interest in the HAWConnect website and documentation.

All contributions are welcome, whether it's fixing bugs, improving the documentation or anything else that helps the project.

## How to contribute

The contribution guidelines are part of the documentation site. Please read the [contribution guide](https://hawconnect.de/en/docs/contribute/contribute) for details.

## Branches and releases

Branches and workflow are shared across the HAWConnect repositories (see `docs/development.md` in the app repository):

- `main` is production, `dev` is staging. Never push to them directly or force-push them.
- Branch from `dev`: `feature/*`, `fix/*`, `refactor/*`; urgent production fixes use `hotfix/*` from `main` and are merged back into `dev`.
- Use Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `feat!:` for breaking changes). Releases are created from `main` by Release Please.
- Open pull requests into `dev`; CI must pass before merging.
