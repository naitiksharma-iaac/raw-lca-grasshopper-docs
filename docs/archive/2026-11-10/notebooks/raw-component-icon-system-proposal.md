# RAW component icon system — design proposal

> **Public reading edition · Historical development snapshot.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


**Status: review only; no production icon changes.** Audit date: 18 October 2026. Repository: `raw-lca-grasshopper`, branch `feat/core-plugin-foundation`.

The source contains **56 concrete registered-component classes: 17 visible and 39 hidden**. Only RAW Construct Machine Process supplies a custom component bitmap today. This proposal introduces seven functional families and three alternative drawing languages. Direction C is recommended for discussion, not selected or approved for implementation.

## Review the visual proposals

Start with the [visual review page](../reviews/history/index.html). It includes actual 24-pixel assets as well as the four sheets. View at 100% browser zoom; operating-system scaling still affects physical display size.

| Sheet | Content |
|---|---|
| [01 — Family directions](../reviews/history/raw-icon-system/01-family-directions.png) | Seven functional families in geometric linework, solid technical and hybrid styles; large and 24 px on RAW orange. |
| [02 — Visible components](../reviews/history/raw-icon-system/02-visible-components.png) | All 17 visible components, direction C as a review candidate; large, actual 24 px, neutral and selection-colour backgrounds. |
| [03 — Machine modes](../reviews/history/raw-icon-system/03-machine-modes.png) | General Machine and five specialist concepts; full icon replacement versus constant icon with small badge. |
| [04 — Small-size readability](../reviews/history/raw-icon-system/04-small-size-readability.png) | All visible components in A/B/C at 24, 18 and 16 px; neutral-background comparison. |

These are original design drawings, **not screenshots of implemented Grasshopper icons**. Orange, neutral and selection colours are simulations for contrast checks. SVG masters and transparent PNGs are held only in the review folder, outside production resources.

## 1. Audit scope and current behaviour

The audit inspected component classes, constructor metadata, exposure overrides, the palette allowlist, custom attributes, production resource files, existing design/workflow documents and the Python research prototype. Partial class files were consolidated; test harness classes were excluded. The machine-readable inventory (supporting internal reference retained privately) includes source paths and class names to disambiguate repeated display names.

Source authority:

- RawPalette.cs (supporting internal reference retained privately) defines the current 17 visible names: Materials 5, Elements 4, Impact 6, Visualisation 2.
- RawComponent.cs (supporting internal reference retained privately) supplies the standard category/exposure rules and a null icon. Most hidden descendants now resolve to `RAW LCA / Elements` through the fallback, despite older Alpha/Advanced constructor labels. Hidden means absent from the normal palette, not removed or unloadable.
- The direct legacy RAW Material selector (supporting internal reference retained privately) retains `RAW LCA / Studio` metadata and is hidden. This does not mean Studio is an intended visible tab.
- Visible-product documentation (supporting internal reference retained privately) still lists an earlier 14-component snapshot. The inventory here follows current source, including the three machine-process workflow components.
- UX reorganisation (supporting internal reference retained privately) and mode-switching guidance (supporting internal reference retained privately) explain the present naming and menu conventions.

**Important role correction:** the visible RAW Physical Properties is now a **read-only inspector**, implemented by `PhysicalPropertiesInspectorComponent`. The old same-named editor is hidden and preserves legacy compatibility. RAW Update Material creates a derived material with physical-property overrides before element construction. The icons must communicate those different actions.

### Current visible components and proposed metaphors

“None supplied” means the `Icon` override returns null; it does not promise a particular Grasshopper fallback drawing. The selectors also use a custom canvas layout that suppresses the standard nickname/icon region.

| Component Name | Grasshopper Category | Purpose | Current Icon | Icon Source/File | Current Visibility | Proposed Icon Family | Recommended Visual Metaphor |
|---|---|---|---|---|---|---|---|
| RAW Material Selector Danish (supporting internal reference retained privately) | RAW LCA / Materials | Choose a Danish material by family. One pinned material output connects to RAW element components. Local BR18 library; no geometry conversion. | None supplied (GH fallback) | DanishMaterialSelectorComponent.cs (supporting internal reference retained privately) | Visible | Select | Layered sample stack + selection pointer; source identified by component name. |
| RAW Material Selector German / ÖKOBAUDAT (supporting internal reference retained privately) | RAW LCA / Materials | Choose an ÖKOBAUDAT material by family. One pinned material output connects to RAW element components. Local ÖKOBAUDAT library; no geometry conversion. | None supplied (GH fallback) | GermanMaterialSelectorComponent.cs (supporting internal reference retained privately) | Visible | Select | Same source-browser mark; no flag or invented certification symbol. |
| RAW Custom Material (supporting internal reference retained privately) | RAW LCA / Materials | Author a self-declared EnvironmentalDataset. A1-A3 supplied factor per declared unit; no database writes or inferred method. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Construct | Material sample + explicit addition cross. |
| RAW Material Info (supporting internal reference retained privately) | RAW LCA / Materials | Inspect a material's source, declared quantity, density and environmental metadata. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Inspect | Material sample + inspection lens. |
| RAW Update Material (supporting internal reference retained privately) | RAW LCA / Materials | Create a derived material with user-supplied physical properties. Original source material is preserved. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Modify / enrich | Material sample + edit nib; a derived object, not source-data approval. |
| RAW Construct Element (supporting internal reference retained privately) | RAW LCA / Elements | Construct a RAW element from linear, surface, or solid geometry. Quantities use SI units. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Construct | Line, face and solid arranged as one geometry vocabulary. |
| RAW Construct Section (supporting internal reference retained privately) | RAW LCA / Elements | Construct a section profile for linear RAW elements. Dimensions follow Rhino document units; outputs are SI. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Construct | Bold cross-sectional I profile; represents the tool, not its current mode. |
| RAW Wall Assembly (supporting internal reference retained privately) | RAW LCA / Elements | Construct layered walls with preserved openings and quantity/preview output. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Construct | Three ordered wall layers with a readable middle layer. |
| RAW Physical Properties (supporting internal reference retained privately) (PhysicalPropertiesInspectorComponent) | RAW LCA / Elements | Inspect the physical properties of constructed RAW elements. Read-only; update material density with RAW Update Material. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Inspect | Element cube + measurement frame; no edit or addition cue. |
| RAW Element GWP (supporting internal reference retained privately) | RAW LCA / Impact | Calculates element-level Global Warming Potential for the selected lifecycle module scope. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Calculate | Element + calculation register; no leaf or verified-result check. |
| RAW Construct Machine Process (supporting internal reference retained privately) | RAW LCA / Impact | Evaluate one fabrication event/batch from measured energy, power × time, or power × mass / throughput. Electricity only; no invented measurements or factor defaults. | General machine head / feed | MachineProcessIcons.cs (supporting internal reference retained privately) | Visible | Construct / calculate | Machine cell, operation head and material-feed arrow. |
| RAW Assign Process Impact (supporting internal reference retained privately) | RAW LCA / Impact | Allocate evaluated process events to elements with explicit EPD overlap, leaf module, evidence and context checks. Unknown or incompatible contributions remain pending. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Assign | Process-event hexagon linked to an element; attachment does not imply eligibility. |
| RAW Process Impact Breakdown (supporting internal reference retained privately) | RAW LCA / Impact | Separates evaluated material, eligible process, pending/excluded and D contributions. No environmental recalculation. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Inspect | Separate contribution channels; do not suggest another calculation. |
| RAW End-of-Life Scenario (supporting internal reference retained privately) | RAW LCA / Impact | Attach evidenced C1-C4 factors without overwriting source records. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Modify / enrich | Treatment pathway branching into explicit routes. |
| RAW Reuse / Recovery Scenario (supporting internal reference retained privately) | RAW LCA / Impact | Attach evidenced D factors and recovery assumptions; retain beyond-boundary status. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Modify / enrich | Recovery route crossing a marked system boundary; no guaranteed benefit. |
| RAW GWP Colour Preview (supporting internal reference retained privately) | RAW LCA / Visualisation | Colour existing GWP results on aligned geometry; normalisation, missing-data handling. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Visualise | Coloured geometry faces, distinct from the calculation register. |
| RAW GWP Legend (supporting internal reference retained privately) | RAW LCA / Visualisation | Generate legend geometry, text, points and colours from preview data. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Visible | Visualise | Stepped colour scale with reference ticks. |

### Hidden and legacy inventory

These receive a functional classification and a suggested metaphor only. No dedicated legacy artwork or palette changes are proposed. Display-name duplicates are deliberately identified by implementation class.

| Component Name | Grasshopper Category | Purpose | Current Icon | Icon Source/File | Current Visibility | Proposed Icon Family | Recommended Visual Metaphor |
|---|---|---|---|---|---|---|---|
| RAW Material (supporting internal reference retained privately) | RAW LCA / Studio | Select a pinned environmental dataset. Expand Select dataset to browse inside the component. | None supplied (GH fallback) | MaterialSelectorComponent.cs (supporting internal reference retained privately) | Hidden | Select | Legacy sample-browser mark; defer artwork. |
| Geometry to Quantity (supporting internal reference retained privately) | RAW LCA / Elements | Measure one valid Brep or mesh as volume, area or count. No environmental calculation. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect | Geometry + measuring frame. |
| RAW Assembly (supporting internal reference retained privately) | RAW LCA / Elements | Combine an ordered list of layers into one build-up per branch. No geometry or impact calculation. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Construct | Ordered layer stack. |
| RAW Assembly Item (supporting internal reference retained privately) | RAW LCA / Elements | Assign by explicit ID or zero-based index; one shared selector or one per element. Processes are explicitly applied to EVERY element. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Assign | Recipe/process link to keyed item. |
| RAW Assembly Scenario (supporting internal reference retained privately) | RAW LCA / Elements | Explicit function and lifecycle scope for a complete keyed assembly. D remains separate. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Construct | Assembly inside explicit scope boundary. |
| RAW Breakdown (supporting internal reference retained privately) | RAW LCA / Elements | Group existing element/layer results without recalculating environmental factors. Incomplete totals stay unavailable. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect | Separated result branches. |
| RAW Calculate (supporting internal reference retained privately) | RAW LCA / Elements | Scale supplied manual/synthetic impacts. Missing required data blocks totals; D remains separate. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Calculate | Calculation register + supplied values. |
| RAW Calculate Assembly (supporting internal reference retained privately) | RAW LCA / Elements | Calculate complete supplied-impact assembly; missing required data gives no physical total. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Calculate | Assembly + calculation register. |
| RAW Candidate Logger (supporting internal reference retained privately) | RAW LCA / Elements | Record bounded session snapshots on false-to-true Record edges. No optimizer, objective or automatic file writing. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect / record | Snapshot stack; explicit recording cue. |
| RAW Color Panels (supporting internal reference retained privately) | RAW LCA / Elements | Join geometry, element IDs and selected results with fingerprint checks. Grey means missing/invalid; D excluded. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Visualise | Coloured panel array. |
| RAW Compare (supporting internal reference retained privately) | RAW LCA / Elements | Compare common Element Impact Results as design options. Supplied A1-A3 differences only; no ranking or fitness score. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect | Two aligned result columns. |
| RAW Compare (Legacy) (supporting internal reference retained privately) | RAW LCA / Elements | Legacy scenario comparison. Use RAW Compare for Studio Element Impact Results. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect | Paired scenario columns. |
| RAW Compare Scenarios (supporting internal reference retained privately) | RAW LCA / Elements | Compare a scenario list per branch against a zero-based baseline. Any incompatibility blocks numeric lists; D stays separate. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect | Baseline + scenario columns. |
| RAW Coverage Check (supporting internal reference retained privately) | RAW LCA / Elements | Check quantities and the selected GWP scope from Result. Direct Elements use A1-A3. Accept Elements or one common Result per branch. Does not certify comparability. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect | Coverage grid with open cells, not certification tick. |
| RAW Element Impact (supporting internal reference retained privately) | RAW LCA / Elements | Common impact calculation for measured element quantities. Supplied GWP A1-A3 only; missing values stay unavailable. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Calculate | Legacy element + calculation register. |
| RAW Export (supporting internal reference retained privately) | RAW LCA / Elements | Export small RAW result tables to CSV/JSON on an explicit false-to-true Write edge. No provider-native or database export. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect / export | Result table with outward file arrow. |
| RAW Export (Legacy) (supporting internal reference retained privately) | RAW LCA / Elements | Legacy no-write placeholder. Place the new RAW Export for explicit Studio table export. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect / export | Deferred export outline; implementation is a placeholder. |
| RAW Export Alpha (supporting internal reference retained privately) | RAW LCA / Elements | Explicit local CSV/JSON from one selected snapshot. Toggle Write false then true; no silent writes or overwrites. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect / export | Snapshot table with outward file arrow. |
| RAW Geometry Quantity Audit (supporting internal reference retained privately) | RAW LCA / Elements | Show what RAW is about to count: native quantities, selection issues and display-only previews. No repairs or impact calculation. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect | Geometry + measurement/selection frame. |
| RAW Layer (supporting internal reference retained privately) | RAW LCA / Elements | Assign a material dataset to one layer with positive thickness in metres. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Construct | Single material layer + thickness marks. |
| RAW Linear Element (supporting internal reference retained privately) | RAW LCA / Elements | Prepare a volume quantity and, for straight inputs, a rectangular display mesh. Quantity remains curve length x section area. No impact calculation. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Construct | Member with section profile. |
| RAW Material Record (supporting internal reference retained privately) | RAW LCA / Elements | Select a validated manual/synthetic record from a local JSON library. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Select | Material record stack + pointer. |
| RAW Material V2 (supporting internal reference retained privately) | RAW LCA / Elements | Experimental source-audited metadata adapter. Connect RAW Material; only pinned evidence is applied. Never rewrites library data or forces totals. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Modify / enrich | Material record + metadata attachment. |
| RAW Optimisation Logger (supporting internal reference retained privately) | RAW LCA / Elements | In-memory completed-evaluation log. Explicit Record/Reset; bounded capacity; no automatic disk writes or generation numbers. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect / record | Bounded snapshot stack. |
| RAW Panel Quantity (supporting internal reference retained privately) | RAW LCA / Elements | Measure keyed panel solids or explicit reference surfaces; output m3 or m2 using Rhino document units. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect | Panel + area/volume measuring marks. |
| RAW Panel System (supporting internal reference retained privately) | RAW LCA / Elements | Final/as-built panel systems. Exact tree paths or one shared recipe branch; one recipe broadcasts, otherwise one per panel. Composite stacks: area x thickness in mm. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Construct | Panel and layered recipe stack. |
| RAW Physical Properties (supporting internal reference retained privately) (PhysicalPropertiesComponent) | RAW LCA / Elements | Legacy editor: density/measured-mass element overrides with provenance. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Modify / enrich | Legacy element + physical override attachment; differs from visible inspector. |
| RAW Process Contribution (supporting internal reference retained privately) | RAW LCA / Elements | Supplied characterised process burden with explicit driver and exclusion from embedded factors. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Assign | Supplied process burden attached to a driver. |
| RAW Process Factor (supporting internal reference retained privately) | RAW LCA / Elements | Supplied kg CO2-eq per panel. Assumed excluded from recipe factor; added once per geometry item. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Construct | Process factor record; no invented machine symbol. |
| RAW Recipe Create (supporting internal reference retained privately) | RAW LCA / Elements | Create a supplied-impact recipe; constituent/output evidence remains explicit. No ingredient impact derivation. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Construct | Material constituents joining a recipe record. |
| RAW Recipe Factor (supporting internal reference retained privately) | RAW LCA / Elements | Supplied A1A3 factor per kg and final/as-built density. Synthetic/manual Alpha value, not an EPD or ingredient-derived recipe. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Construct | Supplied recipe factor record. |
| RAW Recipe Library (supporting internal reference retained privately) | RAW LCA / Elements | Freeze supplied local record revisions for a run; content hash changes when inputs change. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Select | Pinned recipe record stack. |
| RAW Rectangular Section (supporting internal reference retained privately) | RAW LCA / Elements | Define a constant rectangular section. Width and depth are always in metres. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Construct | Rectangular profile with dimensions. |
| RAW Result Table (supporting internal reference retained privately) (AlphaResultTableComponent) | RAW LCA / Elements | Project selected evaluation rows. Contribution rows and summary rows must never be summed together. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect | Evaluation rows separated from totals. |
| RAW Result Table (supporting internal reference retained privately) (ResultTableComponent) | RAW LCA / Elements | Readable element rows and totals, plus CSV text. N/A denotes unavailable quantities or GWP; no files are written. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Inspect | Element result rows. |
| RAW Scenario (supporting internal reference retained privately) | RAW LCA / Elements | Build a single-material scenario from typed quantities. Explicit selected modules and function. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Construct | Material and quantities inside scope frame. |
| RAW Surface Element (supporting internal reference retained privately) | RAW LCA / Elements | Measure panel area and assign a dataset or layer assembly. Input geometry is the assessed quantity; no opening detection or thickening. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Construct | Reference surface face. |
| RAW Unit Element (supporting internal reference retained privately) | RAW LCA / Elements | Legacy explicit unit/count quantity adapter. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Construct | Counted object group. |
| RAW Volume Element (supporting internal reference retained privately) | RAW LCA / Elements | Legacy closed-solid quantity adapter. | None supplied (GH fallback) | RawComponent.cs (supporting internal reference retained privately) | Hidden | Construct | Closed solid cube. |

### Research prototypes and non-palette tools

The Python v0.1 prototype (supporting internal reference retained privately) explicitly states that it has no compiled GHA or polished component UI/icons. Its 11 numbered Grasshopper scripts and quick-test script are experimental host-script workflows, not extra registered components. Support modules, data synchronisation tools and tests are not component-icon targets.

| Component/script | GH category | Purpose | Current icon | Icon source | Visibility | Proposed family | Metaphor if revived |
|---|---|---|---|---|---|---|---|
| 00 RAW Sync Data | Python script; no RAW registration | Explicit reference-data synchronisation | Host script icon | No custom resource | Experimental/manual placement | Select | Source record + inward arrow |
| 01 RAW Product Mass | Python script | Geometry/physical inputs to product mass | Host script icon | No custom resource | Experimental | Inspect / calculate quantity | Measured solid |
| 02 RAW BOM Item | Python script | Production material item | Host script icon | No custom resource | Experimental | Construct | Sample + item record |
| 03 RAW Process Step | Python script | Reference-model process definition | Host script icon | No custom resource | Experimental | Construct | Process event |
| 04 RAW Repair | Python script | Repair assumptions | Host script icon | No custom resource | Experimental | Modify / enrich | Repair pathway |
| 05 RAW End Of Life | Python script | End-of-life assumptions | Host script icon | No custom resource | Experimental | Modify / enrich | Treatment route |
| 06 RAW Scenario | Python script | Assemble reference-model scenario | Host script icon | No custom resource | Experimental | Construct | Scope frame |
| 07 RAW Reference Scenario | Python script | Reference input scenario | Host script icon | No custom resource | Experimental | Select / construct | Pinned scenario |
| 08 RAW Calculate | Python script | Run reference-model calculation | Host script icon | No custom resource | Experimental | Calculate | Calculation register |
| 09 RAW Results | Python script | Present reference-model outputs | Host script icon | No custom resource | Experimental | Inspect | Result channels |
| 10 RAW Library Info | Python script | Inspect reference library | Host script icon | No custom resource | Experimental | Inspect | Record + lens |
| QUICK TEST RAW Reference | Python script | Reference harness, not product component | Host script icon | No custom resource | Experimental/test | No product family needed | No new icon |

### Planned components, separate from the inventory

| Planned work | Functional family / future metaphor | Status and boundary |
|---|---|---|
| ICE, EC3, KBOB selectors | Select / same source-browser grammar | Documentation only; data availability and redistribution must be resolved. No fake installed icons. |
| Save Material / Export Material Library | Record / sample with explicit file arrow | Planned persistence/export; do not imply these exist today. |
| Construct Product / explicit count workflow | Construct / counted object group | Planned UX; legacy Unit Element remains hidden. |
| Roof Assembly / Floor Assembly | Construct / oriented layer stacks | Planned; reuse the assembly grammar. Earlier Cross Section concept is now covered by Construct Section. |
| Transport / Construction / Replacement scenarios | Enrich / route, site process, replacement cycle | Planned; do not confuse them with implemented C/D enrichment. |
| Module Factor Override | Enrich / factor record with explicit edit cue | Advanced and evidence-required; no approval/checkmark symbolism. |
| GWP Graph / process contribution graphs | Visualise / aligned bars | Planned; existing Breakdown inspects data rather than providing these graphs. |
| Impact Gradient | Visualise / standalone colour ramp | Planned as separate component; internal gradients already serve Preview/Legend. |
| GWP Report | Inspect / report sheet | Planned; no new Reports tab implied. |
| RAW Inspector | Inspect / object with diagnostic lens | Future rule-based diagnostic assistant; an icon must not imply automatic scientific validation. |
| AP, EP, ODP, POCP, ADP calculation components | Calculate / same register family, distinct labels | Future metrics, not currently available through Element GWP. |
| Material-flow, cutting waste and offcut recovery tools | Enrich / split stock and retained offcut | Research roadmap. Current six machine modes exist; older proposed standalone Machine Energy/CNC components should not be mistaken for additional implemented components. |

References: [future selectors](raw-future-material-selectors.md), [fabrication roadmap](raw-fabrication-component-roadmap.md), product structure (supporting internal reference retained privately).

## 2. Workflow and functional families

The icons communicate the **operation**, while the tab and component name identify domain/source. Do not allocate a different bright colour to every tab or use “green” to mean verified or environmentally beneficial.

```text
Selector → optional Update Material → Construct Element → Element GWP → Colour Preview → Legend
    └→ Material Info (inspection)        ↑      └→ Physical Properties (inspection)
                                  Construct Section

Construct Element ───────────────→ Assign Process Impact → Element GWP → Process Impact Breakdown
Construct Machine Process ──────→         ↑
                                 coverage / allocation / evidence
```

Material Info and Physical Properties are inspection branches, not mandatory enrichment steps. Wall Assembly is another element-construction path. C/D scenarios enrich element data before Element GWP. Assignment retains pending/excluded contributions when eligibility is not established; its arrow means attachment, never unconditional addition.

| Functional family | Shape/action grammar | Visible examples | Guardrail |
|---|---|---|---|
| Select / retrieve | Sample stack + pointer | Danish, German selectors | Same action may share icon; source remains explicit in text. |
| Inspect | Existing object + lens, measurement frame or separated channels | Material Info, Physical Properties, Process Impact Breakdown | No edit nib, plus sign or implied recalculation. |
| Modify / enrich | Existing object + edit or evidenced route | Update Material, C and D scenarios | No “verified” check; user data is not original source data. |
| Construct | Geometric object, profile, layers or new record | Custom Material, Construct Element/Section, Wall Assembly | Concrete structure rather than a generic gear on everything. |
| Calculate | Object + small calculation register | Element GWP; Machine Process also evaluates | Not a leaf, savings badge or approval symbol. |
| Assign | Process-event mark attached to an element | Assign Process Impact | Eligibility remains a data/diagnostic property. |
| Visualise | Coloured geometry or scale | Colour Preview, Legend | Colour communicates display, not new impact calculation. |

Machine Process straddles construction and calculation: it creates an evaluated process event. The machine-cell silhouette is its primary identifier; the shared hexagonal process mark carries through to assignment. An eighth export/logging family is unnecessary for the visible palette; hidden recording/export tools receive only deferred variants.

## 3. Three alternative design directions

All directions use an authored 24 × 24 grid, nominal 2 px margins, restrained geometry and no emojis, letters, flags, photorealism or shadows. The exact raster edge treatment still needs production pixel-tuning after approval.

| Direction | Visual principles and family relationship | Advantages | Readability and limitations | Recommended use |
|---|---|---|---|---|
| A — Geometric linework | Open objects; repeated sample/element structures; approximately 1.55 px outline | Closest to drawing and geometry conventions; clear profiles and layers | Internal detail weakens at 16 px; adjacent open edges can blend. Colour Preview needs more than an unfilled cube to convey colouring. | Strong option for a restrained technical palette if we simplify secondary details. |
| B — Solid technical glyphs | Approximately 2.5 px structural weight; filled masses and negative-space cuts | Strong silhouettes and toolbar contrast; section and machine shapes remain prominent | Material selection/edit cues can merge into the sample; dense mechanisms become blobs. Pure monochrome loses the preview/legend colour cue. | Strong option where recognition at very low zoom takes priority. |
| C — Hybrid technical | Approximately 1.8 px outlines, filled structural anchors and light interior spaces; restrained colour only where meaningful | Best balance in this review of object identity and action cues; differentiated inspect/update/select; coloured geometry reads as visualisation | Requires optical tuning per icon; do not add more detail just because both fill and linework are available. Winding and small edit marks still weaken at 16 px. | Recommended candidate for review, subject to user choice and native tests. |

The review uses dark maroon `#41211E`, warm light `#F9EBDC` and RAW-like orange `#FF9D21`. Teal and warm muted colours distinguish visualisation facets/scales; they are not material/environmental values or a replacement for the application's real gradient semantics. Transparent icon assets have no orange tile baked into them.

### Individual-concept decisions

- Danish/German share the same selector icon deliberately. Their action is identical; flags or tiny country letters would consume space and misrepresent source identity as a physical material property. Keep the source in the component title and tooltip. Future selectors can reuse this convention.
- Custom Material uses an addition cross, Material Info a lens and Update Material an edit nib. These distinctions must survive monochrome and 24 px viewing.
- Construct Element includes a line, surface and solid. Its icon need not change per mode; the footer already states the mode. Construct Section uses a neutral recognisable cross-section as a tool metaphor, not a claim that all outputs are I-sections.
- Wall Assembly uses separated layers. Physical Properties uses a measuring frame around an element; this visible component must not receive the old editor metaphor.
- Element GWP uses a small calculation register beside an element. The register distinguishes it from Preview's coloured cube. Scope belongs in the existing footer/menu, not eight tiny scope labels inside the icon.
- Process Breakdown has separated channels rather than a calculator. C uses treatment branching; D uses a route beyond a boundary. Neither symbol promises completeness, recycling or a negative credit.

### Readability review

All four rendered sheets were visually inspected. Names, large concepts and scale probes fit their review panels. At authored 24 px the profile, wall layers, measurement frame, calculator and machine silhouettes remain distinct. The selector action cues are more fragile at 16 px, and the winding pattern is relatively dense. The small-badge machine option is less readable than full-mode silhouettes. These are qualitative design observations, not a recognition study or native Grasshopper acceptance test.

Before production, tune the two most complex marks (Construct Element and Element GWP), reduce winding crossings if necessary, and inspect select/inspect/update side by side on the actual canvas. Do not rely on icon recognition alone where the exact source, module or mode matters.

## 4. Machine-process family

The current installed `MachineProcessIcons` general mark is preserved. The review proposes an alternate family built around a machine bed, an operation silhouette and a material/feed cue. A hexagonal operation head is intentionally less CNC-specific than the existing spindle mark and is reused as the process-event symbol in Assign Process Impact.

| Mode | Proposed silhouette | Shared structure | Limit |
|---|---|---|---|
| General Machine | Open machine cell, abstract operation head, feed and workpiece | Bed, maroon structural weight, minimal feed cue | General transformation, not a machine-energy measurement claim. |
| CNC / Milling | Downward spindle over stepped workpiece | Cell/bed and same weight | No depiction of a validated toolpath model. |
| Robotic Process | Two-segment arm and tool above bed | Bed and joint rhythm | Does not imply a specific robot or end-effector. |
| 3D Printing | Nozzle over separated deposited layers | Gantry/bed | Distinguish additive layering from CNC subtraction. |
| Coreless Winding / Fibre Placement | Two support points and crossed fibre paths | Bed and controlled linework | Simplify crossings before use at small scale. |
| Reclaimed Timber Preparation | Stock beam, preparation head and feed | Bed/feed language | Do not encode an automatic reuse credit or timber grade. |

**Option A: replace the instance center icon by mode.** All 24 pixels remain available for a clear silhouette. Cache six bitmaps and invalidate only the changed component's icon cache on an actual mode change. Keep the palette's general-machine icon stable. This is the stronger future option if variants are approved.

**Option B: constant general icon plus small mode badge.** It preserves the base identity, but a badge takes scarce space and loses tool detail at 8 px. Drawing it outside the standard bitmap also introduces avoidable custom-attribute concerns; composing it inside 24 px makes the base smaller. The existing dark footer already identifies the process. This option is shown for comparison, not recommended as an additional mode control.

**Suggested staged decision:** approve one general machine mark first. Retain the footer as the mode identifier. If future variants are approved, prefer A with the native cache mechanism. Neither option is implemented by this proposal.

## 5. Existing infrastructure and implementation feasibility

### What exists now

- MachineProcessIcons.cs (supporting internal reference retained privately) creates one cached transparent 24 × 24 `System.Drawing.Bitmap` using vector-like GDI primitives. `ForMode(MachineProcessType _)` currently returns the same general bitmap for every mode. ConstructMachineProcessComponent.cs (supporting internal reference retained privately) overrides `Icon` to use it.
- RawComponent.cs (supporting internal reference retained privately) returns null by default. The direct Danish, German and legacy selectors also return null. RawLcaAssemblyInfo.cs (supporting internal reference retained privately) has no assembly icon. No production icon `.resx`, `.ico`, `.svg` or `.png` resource family or category-icon registration was found.
- RawModeUi.cs (supporting internal reference retained privately) and MachineProcessAttributes.cs (supporting internal reference retained privately) already retain native component rendering around custom instructions/dashboard. Dashboard metric marks are separate decorative drawings; do not repurpose them as the component icon system or add more header symbols.
- Danish selector attributes (supporting internal reference retained privately) and German selector attributes (supporting internal reference retained privately) call `RenderComponentCapsule(..., true, false, false, true, true, false)`. The installed API identifies the second boolean as `drawComponentNameBox`, controlling the nickname/icon region. It is false. Thus a new `Icon` override can supply a palette icon, but does **not** by itself put a center icon inside these custom selector canvases.

### Native API evidence

McNeel specifies a **24 × 24 bitmap** for `GH_DocumentObject.Icon`, with caching for repeated drawing. Its methods include `DestroyIconCache()` for icon changes. The icon guide recommends a 24-pixel design and generally a two-pixel margin. The proposal follows these dimensions, without copying stock McNeel artwork. [Icon property](https://developer.rhino3d.com/api/grasshopper/html/P_Grasshopper_Kernel_GH_DocumentObject_Icon.htm), [document-object methods](https://developer.rhino3d.com/api/grasshopper/html/Methods_T_Grasshopper_Kernel_GH_DocumentObject.htm), [Grasshopper icon design guide](https://developer.rhino3d.com/guides/grasshopper/grasshopper-icons/).

The online API can describe a newer Rhino version; these behaviours were cross-checked in the installed Rhino 8 `C:/Program Files/Rhino 8/Plug-ins/Grasshopper/Grasshopper.xml`, including `Icon`, `Icon_24x24`, locked greyscale caching, `DestroyIconCache` and `RenderComponentCapsule` flags. Native attributes remain the proper integration point for custom body layout; see [custom attributes](https://developer.rhino3d.com/guides/grasshopper/custom-attributes/).

### Smallest maintainable future implementation

1. After design approval, extend the existing icon approach into a small `RawComponentIcons` catalogue keyed by semantic icon ID. Reuse `MachineProcessIcons` through it rather than introducing a second renderer, component family or UI framework.
2. Store approved 24 px transparent bitmaps as embedded resources, or produce them once with the established GDI helper. Choose one production resource path. Keep editable vector masters separately. SVG is a design source here; the audited native property requires a bitmap, not an SVG file.
3. Return cached bitmaps from normal component `Icon` overrides, including direct selector subclasses. Keep files/keys explicit rather than deriving them from translated component names. Do not regenerate bitmaps during `SolveInstance` or each paint, and do not dispose a shared cached bitmap from an individual component.
4. For any later mode-dependent icon, reuse the existing safe mode-change callback. Only after an actual mode change, invalidate the icon cache and canvas. Restore the mode through existing serialization; ensure the correct icon is resolved after read. Do not alter ports, GUIDs or event identity for an icon change.
5. Preserve GH's normal selection, error/warning, locked and icon/name display behaviour. Keep the default palette icon general; verify palette proxy caching independently from instance rendering.
6. Leave selector bodies unchanged initially. If an in-body selector icon is requested, approve a small reserved title-area location separately; do not blindly enable native center rendering and overlap the dropdown/button. This design task does not implement that layout.

### Zoom, DPI and performance gates

Twenty-four pixels is the native authored bitmap contract, not a promise of pixel-perfect rendering at every OS scale. SVG masters make future export/tuning possible; they do not automatically enable native vector icons. The 18/16 px review probes simulate reduced size rather than actual GH zoom policies.

After implementation approval, verify Rhino 8 at common canvas zooms and Windows 100%, 150% and 200% scaling; normal, selected, locked and warning/error states; icon versus name display; all six machine modes; mode save/reopen; palette/default versus instance icon; selectors' custom title region; dashboard/profiler and runtime-balloon separation. Measure redraw behaviour before claiming performance improvement. Cache invalidation should occur on a mode change, not continuously.

## 6. Approval decisions and verification status

Decisions needed before production work:

1. Choose **A linework, B solid, or C hybrid**. Recommendation: C, then optical refinement of the densest marks. The full visible sheet uses C only to make review concrete.
2. Approve or revise the functional metaphors, particularly shared Danish/German selection, Section's generic profile, and D's boundary pathway.
3. Keep the current machine mark or refine the proposed general mark into the approved family. For future modes, choose full icon replacement or constant icon; the small badge is the less readable option.
4. Confirm initial scope: standard palette/native center icons, with custom selector bodies retained. Adding a selector-body icon should be an explicit subsequent layout decision.

This audit generated and visually checked four concept sheets, transparent 24 px PNGs and SVG masters in all three directions. Asset parsing, dimensions, inventory counts, links and the source/test baseline are checked separately in the review evidence. **No build or automated calculation tests were run** because no production code or resources changed. **No new native Grasshopper or high-DPI host test was run.** The sheets are not proof of native rendering.

No component icons were registered or replaced. No calculation, dataset, GUID, port, mode, source compatibility or legacy exposure was changed. No commit or push was made. Implementation awaits explicit approval.