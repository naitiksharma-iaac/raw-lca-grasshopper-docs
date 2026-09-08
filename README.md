# RAW LCA for Grasshopper

RAW LCA for Grasshopper is an early-stage roadmap for a geometry-linked EPD/LCA workflow for Rhino and Grasshopper, focused on circular and biobased construction materials.

## Project status

This repository publishes documentation and a proposed direction only. **No finished plugin is released yet**, no calculation tool is provided, and no environmental dataset is bundled.

The proposed workflow connects geometry and quantities with traceable material and Environmental Product Declaration (EPD) records, environmental calculations, scenario comparison, and exportable results. Any future implementation will require scientific validation and clear provenance for every environmental value.

## Principles

- V1 is local-first and no-server.
- Users would manage their own permitted material and EPD records locally.
- No environmental dataset is bundled, including ecoinvent-derived data.
- Software licensing and data licensing are separate.
- Future LCAx, ILCD+EPD, openEPD, and API connectors may be explored.
- A future hosted platform would be considered only if funding and licensing allow; it is not a V1 dependency.

## Documentation

Open [docs/index.html](docs/index.html) locally or publish the `docs/` directory with GitHub Pages. The site is plain HTML and CSS with no build step or external assets.

- [Architecture](docs/architecture.html)
- [Data strategy](docs/data-strategy.html)
- [Licensing](docs/licensing.html)
- [Roadmap](docs/roadmap.html)
- [Proposed components](docs/components.html)

See [ROADMAP.md](ROADMAP.md), [LICENSE.md](LICENSE.md), and [NOTICE.md](NOTICE.md) for repository-level details.

