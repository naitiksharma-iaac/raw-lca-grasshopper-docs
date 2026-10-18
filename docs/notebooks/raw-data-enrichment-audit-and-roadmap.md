# RAW data-enrichment audit and roadmap

> **Public reading edition · 13 October 2026.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


Audit date: 13 October 2026. Scope: the current local library and current checkout, not the latest online databases or a regulatory building assessment. Status: audit and design only; no new components, factors, material edits or palette changes.

## 1. Findings and audit method

RAW already has the right separation: Materials → Elements → Impact → Visualisation. Keep **RAW Element GWP** as a one-input calculator (`Elements`). Physical properties and future scenarios belong on the elements upstream. A missing factor, a missing quantity and an unresolved method are different problems and require different remedies.

The current library contains **441 Danish BR18 / Table 7 records and 5,079 ÖKOBAUDAT records**. Danish records all supply A1–A3, C3, C4 and D; none supply A4, A5, B, C1 or C2. ÖKOBAUDAT contains factors across all requested stages, but coverage differs substantially by record. A module name appearing in metadata is not evidence of a usable numeric factor.

**RAW Physical Properties is already implemented.** It repairs the demonstrated missing-density/mass gap without changing the material. Thickness is already an input to RAW Element in Surface mode. There is no need to introduce a duplicate thickness component merely to support that workflow. Lifecycle scenario enrichment is not yet implemented in the current element contract.

### Evidence and reproducibility

The audit opened `internal implementation reference` read-only and examined all 5,520 pinned dataset revisions. The database is 76,484,608 bytes. Its SHA-256 and the complete region/category/family counts are in the audit evidence (supporting internal reference retained privately). Counts are dataset revisions, not unique manufacturers or scientifically interchangeable products.

Inventory queries used:

```sql
SELECT * FROM pack_sources;
SELECT pack, COUNT(*) FROM material_datasets GROUP BY pack;
SELECT summary FROM material_datasets;
```

The JSON summaries were counted by source pack, declared unit, source category, region, density flag and numeric module availability. A separate temporary audit executable hydrated every manifest through `CompactMaterialLibrary.ReadManifest` and `StorageCodec.Hydrate`, then called the existing `ImpactCalculator.Calculate` for every scope. It did not write to the library. For dimensional readiness it supplied one reference m² for m² records, one count for item records, or one m³ for the remaining records. These are calculation probes, **not source data or assumed project geometry**. No density or factor was supplied by the probe.

The engine audit distinguishes:

- **Factor-ready:** the current reader accepts complete factors for the requested scope, independently of quantity conversion.
- **Direct arithmetic:** a compatible element quantity, existing density where necessary, and those factors produce a finite per-element GWP. This does not establish methodological verification or suitability for a particular building.
- **Context-resolved:** source-backed LCIA identity sufficient for compatibility checks. This is a separate test; all stored records currently have unresolved typed method metadata.

Source material inspected: `data/sources/denmark/denmark-br18.xlsx`, the duplicate `tabel-7-2025.xlsx`, `data/sources/okobaudat/okobaudat.csv`, their download sidecars, and the current compact library/source-index/manifest access layer. The legacy-v0 SQLite and older staging exports are earlier representations, not additional source packs; they were not added to counts. Test fixtures, custom test factors and frozen Vertikal artifacts were excluded.

No ICE, EC3 or KBOB source pack was registered or found under the local source directories. They remain documentation-only proposals. This audit does not establish redistribution rights: local records state redistribution is unknown.

### Source inventory

| Source | Local version evidence | Regions | Records | Density supplied / missing | Typed LCIA method unresolved |
|---|---|---|---:|---:|---:|
| Danish BR18 / Table 7 | Download sidecar: `tabel-7-2025.xlsx`, retrieved 2026-09-14 | DK: 441; pack geography is not necessarily manufacturing origin | 441 | 155 / 286 | 441 |
| ÖKOBAUDAT | Download sidecar label: `2024-II`, retrieved 2026-09-14 | Multiple geographies; DE 1,737, EU 1,339, RER 990, GLO 200, AT 138, EU-27 110, GB 88; complete inventory in evidence | 5,079 | 1,934 / 3,145 | 5,079 |

Both pack metadata records have `SourceRelease = null`, despite the download labels above. Preserve that distinction. The export label is not a claim that this is the newest online release, nor that every record has the same publication date/version.

| Original declared unit | Danish | ÖKOBAUDAT | Current direct quantity route |
|---|---:|---:|---|
| kg | 132 | 915 | Mass, or volume × supplied density; measured mass can enrich |
| t | 27 | 0 | Mass in kg with explicit tonne conversion during arithmetic |
| m² | 124 | 1,478 | Reference surface area |
| m³ | 74 | 692 | Closed-solid volume, surface × thickness, or length × section area |
| item | 65 | 1,834 | Explicit count; do not substitute area or volume |
| m | 19 | 102 | Unsupported direct factor basis in the current calculator |
| kgkm | 0 | 9 | Transport activity, not a directly supported product geometry basis |
| MJ | 0 | 49 | Energy activity, not a directly supported product geometry basis |

There are **179 unsupported direct records**: 19 Danish and 160 ÖKOBAUDAT. Their units are explicit, not blank; “unsupported” does not mean the source unit is invalid. RAW Linear currently measures length but calculates from length × section area as a volume basis. It does **not** make a per-metre factor usable. A future verified length-basis adapter is a separate quantity-engine enhancement, not a density override or unit relabelling.

The source categories and browser families are different concepts. Danish records have no supplied source category (all 441 are explicitly unclassified in storage); the browser uses derived family labels. ÖKOBAUDAT source category roots are Building service engineering (1,742), Mineral building products (1,067), Plastics (598), Components for windows and curtain walls (567), Metals (343), Insulation materials (287), Wood (235), Coverings (101), Composites (64), Others (58), and End of Life (17). These include service/activity datasets, not only product EPDs. All source leaf categories and derived browser family counts are retained in the evidence file.

### Current engine readiness (all records tested)

| Scope | Danish factor-ready | Danish direct arithmetic | German factor-ready | German direct arithmetic |
|---|---:|---:|---:|---:|
| A1–A3 | 441 | 337 | 4,196 | 3,934 |
| A4 | 0 | 0 | 2,904 | 2,812 |
| A5 | 0 | 0 | 2,963 | 2,867 |
| B | 0 | 0 | 1,556 | 1,506 |
| C | 0 | 0 | 3,118 | 3,007 |
| D | 441 | 337 | 4,337 | 4,123 |
| A1–C | 0 | 0 | 1,546 | 1,496 |
| A1–D | 0 | 0 | 1,537 | 1,496 |

Product aggregates and leaf modules overlap; do not add their raw counts. The engine accepts 4,196 German product stages (3,811 aggregates plus 385 additional complete leaf sets). These counts retain original declared amounts: not every factor is per one unit. German declared quantities include 1,000, 3.6 and other source amounts; Danish values include small source floating-point deviations around one. All declared/reference references matched; no blank/unresolved unit codes were found. No quantity was rewritten.

The A1–A3 population partitions without double counting as follows:

| Readiness | Danish | German | Total |
|---|---:|---:|---:|
| Direct with matching quantity and current density | 337 | 3,934 | 4,271 |
| Product factors ready; kg/t density missing | 85 | 166 | 251 |
| Product factors ready; direct unit unsupported | 19 | 96 | 115 |
| Product factor set unavailable to current reader | 0 | 883 | 883 |
| All records | 441 | 5,079 | 5,520 |

Across all kg/t records, **85 Danish and 188 German** lack density. Of these, 251 already have usable product factors and can potentially be enabled by evidenced density plus volume or measured mass. The other 22 German mass-based records also lack a usable product factor set. Missing density on an m²/m³/item record need not block its matching-basis GWP; it still limits mass reporting/normalisation. Even a “direct” record needs the correct geometry/count and project applicability: these counts do not imply any record works with any Brep.

A1–C/A1–D are therefore **not universally unavailable**: 1,546/1,537 German records respectively have complete accepted factor sets, and 1,496 have a ready quantity route for each scope without enrichment. None of the Danish records has complete whole-life factors. The German numbers prove selected-scope arithmetic availability, **not** resolved methodology, building-level compatibility or applicability of the source scenarios.

Browser families available (derived labels, not a replacement for source taxonomy):

- **Danish:** Adhesive / Sealant (16), Aluminium (4), Asphalt / Bitumen (6), Board / Panel (18), Brick / Ceramic (11), Cement / Mortar (15), Clay (7), Concrete (32), Door / Window (25), Flooring (18), Glass (10), Gypsum / Plaster (19), Insulation (19), Membrane / Roofing (23), Other (3), Paint / Coating (26), Plastic / Rubber (13), Services / MEP (112), Steel / Metal (16), Stone / Aggregate (26), Timber / Wood (22).
- **German:** Aluminium (45), Board / Panel (96), Brick / Ceramic (327), Concrete (730), Door / Window (571), Flooring (360), Glass (8), Gypsum / Plaster (23), Insulation (318), Membrane / Roofing (126), Other (279), Services / MEP (1,851), Steel / Metal (264), Timber / Wood (81). There are 266 source leaf categories and 48 geographic labels; the evidence file preserves every label/count.


## 2. Module availability and what “complete” means

Counts below are records with a finite numeric GWP observation, including an explicit source zero. A dash means zero records. For ÖKOBAUDAT, the parenthesised count is records that list the module at all; it can exceed numeric coverage. Neither a listed module nor an empty cell is zero.

| Module | Danish numeric | ÖKOBAUDAT numeric (listed) |
|---|---:|---:|
| A1–A3 aggregate | 441 | 3,811 (3,811) |
| A1 separately | — | 466 (503) |
| A2 separately | — | 466 (503) |
| A3 separately | — | 466 (503) |
| A4 | — | 2,904 (2,947) |
| A5 | — | 2,963 (3,010) |
| B1 | — | 2,153 (2,247) |
| B2 | — | 1,992 (2,043) |
| B3 | — | 1,724 (1,779) |
| B4 | — | 1,675 (1,738) |
| B5 | — | 1,679 (1,738) |
| B6 | — | 2,018 (2,069) |
| B7 | — | 1,800 (1,852) |
| C1 | — | 3,579 (3,592) |
| C2 | — | 4,021 (4,028) |
| C3 | 441 | 4,143 (4,152) |
| C4 | 441 | 3,819 (3,844) |
| D | 441 | 4,337 (4,353) |

German records with any numeric B: **2,539**; all B1–B7: **1,556**. Any numeric C: **4,567**; all C1–C4: **3,118**. Danish records have partial C coverage only. D signs: Danish **371 negative / 61 zero / 9 positive**; ÖKOBAUDAT **3,991 negative / 258 zero / 88 positive**, plus 742 without numeric D. Preserve negative values.

Current calculator rules, verified in `GwpModuleScope.cs` and `DatasetObservationReader.Modules.cs`:

1. A1–A3 uses a valid supplied aggregate first, otherwise complete A1+A2+A3. An ambiguous/invalid aggregate is not bypassed by silently selecting leaves.
2. B requires B1–B7; C requires C1–C4. An explicit aggregate must identify the complete leaf membership. The current B mode is broader than replacement alone.
3. A1–C requires product + A4 + A5 + B1–B7 + C1–C4. A1–D additionally requires D.
4. Any missing, ambiguous or invalid required module withholds the selected element GWP. Known physical quantities survive. The core output does not provide a partial total disguised as complete.
5. Selected observations must have consistent indicator identity, impact unit and module vocabulary. An explicit zero may be used; an absent/not-declared/not-applicable-looking field must not be converted to zero without an evidenced policy.
6. D remains signed and produces a beyond-boundary diagnostic. Result currently stores scope, availability, references and selected-scope contributions, but not a numeric contribution ledger for every module. Calculate D in a separate RAW Element GWP instance alongside A1–D to show its amount today. A future module ledger should make this direct without adding calculator inputs.

### Method/context limitation

All **5,520 original stored records** have `KnowledgeStatus.Unknown` for LCIA method. The importer preserves source citations but does not automatically resolve them into method ID/version/characterisation basis. This is an ingestion/metadata-resolution gap, not evidence that every original EPD omitted its method.

An individual pinned dataset can still produce supplied-factor arithmetic with `element.method`. Strict comparison rejects distinct unresolved datasets for a combined total; layered elements can also lose their combined GWP when their parts are incompatible. Per-element values may remain available while Result's combined total is withheld. Grasshopper Mass Addition does not check that compatibility and must not be presented as permission to aggregate incompatible values.

There is existing, hidden `MaterialContextV2` code with a small, revision-pinned evidence catalogue. It can create a separate source-declared context overlay for specific reviewed records; it is **not** applied by the visible selectors and does not resolve the whole library. Reuse its evidence checks when planning metadata recovery, without unhiding legacy components or reassigning every record the same method.

Do not infer equivalence from a country, source name, indicator label or common unit. ÖKOBAUDAT explicitly separates EN 15804+A1/A2 data and warns against joint comparison: [official database guidance](https://oekobaudat.de/datenbank/suche.html). Its [developer guidance](https://www.oekobaudat.de/anleitungen/softwareentwickler.html) provides source compliance filters useful for a future evidence-led import review. This roadmap proposes recovering exact provider references; it does not change compatibility rules.

## 3. Calculation-gap taxonomy

| Gap type | Observed gap | Correct remedy | What does not repair it |
|---|---|---|---|
| Physical quantity | kg/t factor, volume known, density missing | Existing RAW Physical Properties: cited density or measured mass | Typical-density guesses; replacing missing with zero |
| Physical quantity | Surface has area but a mass/volume factor needs volume | Existing Surface Thickness input in metres; then density if mass-based | Changing material unit; counting all solid faces as product area |
| Physical quantity | item material without count; linear/energy/activity unit mismatch | Unit/count mode; later genuine length/activity adapters | Treating geometry volume as count or relabelling m as m³ |
| Module scope | Missing A4/A5/B; partial C; absent D | Source factor recovery or a valid, explicit scenario for each missing module | Density, thickness, changing a scope label, implicit zero |
| Scenario assumption | Factors are present but source transport, lifetime or waste assumptions do not match the project | Review source scenario, preserve it, then explicitly replace with documented project scenario if supported | Assuming factor presence establishes project applicability |
| Compatibility/context | Unresolved method; differing indicator/method/standard/version | Pinned source evidence and explicit compatible context | Source Note alone; averaging factors across packs |
| Visualisation/reporting | No geometry in core Result; no mass/volume/area for normalisation; no per-module numeric ledger | Connect aligned geometry; repair relevant quantities; retain unavailable status and structured issues | Grey-to-zero substitution; silently dropping unmatched items |
| Workflow guidance | Some guidance still names hidden Coverage Check/legacy components; summaries can overlook product-stage leaf sums | Future message/display cleanup and Inspector consuming real diagnostics | Exposing fake helper components or suppressing warnings |

GWP Colour Preview and GWP Legend already exist. Preview accepts separate geometry because the core element/result contract does not carry Rhino geometry. Exact tree paths/order and counts must align. Normalised colours require a positive denominator even when absolute GWP is calculable. Result's scope/availability/context are available to the preview; some presentation warnings are strings rather than durable structured element diagnostics. That is future Inspector integration work, not missing GWP arithmetic.

## 4. Complete calculation loops

In the chains below, **planned** means no usable component exists yet. Every scope also requires a valid declared/reference basis and compatible GWP factor identity. Existing source scenario factors may be used only as the selected source scenario, not represented as verified project assumptions.

### A. A1–A3 product stage

- Dataset supplies product aggregate or valid A1+A2+A3, declared quantity, optional density and method evidence. RAW Element supplies area, volume, length-derived volume, or count according to mode; Surface needs thickness to derive volume.
- Current chain: Material Selector → RAW Element → RAW Element GWP. Insert existing RAW Physical Properties when kg/t needs mass. For area-only geometry, supply Surface Thickness first; measured mass can support kg/t without volume.
- Matching m²/m³/item quantities need no density for GWP. Missing density can leave mass unavailable while GWP still works. For the Clay powder case, volume is 0.00756 m³ and the source factor is 0.34765871 kg CO₂-eq/kg: with user-evidenced density ρ, mass = 0.00756ρ kg and GWP = 0.00756ρ × 0.34765871. No value of ρ is assumed here. A measured mass M instead gives GWP = M × 0.34765871.
- A thickness slider changes derived volume; it does not scale a fixed “Glass, 4 mm” per-m² product factor. Select data for the actual product or obtain a justified conversion; do not infer linear scaling by thickness.
- Elements alone suffice after quantities and material are present. On failure retain null and `element.density`, `element.thickness`, `element.volume_basis`, `element.quantity_basis`, `element.declared_basis`, `element.reference_basis`, `element.gwp_scope`/`element.gwp_missing`, or `element.gwp_indicator`, as applicable. Method warnings persist after physical enrichment.

### B. A4 transport

- Source A4 exists for some German records; none Danish. With compatible physical quantity, the current calculator can use an existing A4 factor directly from the element's material. No project distance input is necessary to reproduce that source scenario.
- Otherwise chain: RAW Element → RAW Physical Properties if mass needed → **planned RAW Transport Scenario** → RAW Element GWP (A4). Inputs must establish distance, mode, factor, factor's activity unit/declared amount, source and route/context. Load utilisation is optional only when the chosen factor's documented basis supports it; never apply it twice.
- Mass is required for kg·km or t·km factors; volume-based or per-trip factors need their own evidenced activity conversion. Missing mass calls for physical enrichment. The nine kgkm records in storage are potential activity-source candidates, not automatically project A4 factors: an activity dataset's production factor needs an explicit building-module assignment policy.
- Proposed diagnostics: `scenario.a4.distance_missing`, `.mode_missing`, `.factor_missing`, `.quantity_missing`, `.activity_unit_mismatch`, plus shared provenance/context/conflict codes. Withhold missing A4; do not invent a default mode, distance or factor.

### C. A5 construction / installation

- Existing German A5 may be usable directly. Otherwise RAW Element → **planned RAW Construction Scenario** → RAW Element GWP (A5), with physical enrichment as its activity basis requires.
- Require documented installation/site-process factors and explicit waste definition, route and allocation policy. Activity may be kg, m³, m² or count. A waste percentage alone is not a GWP factor.
- Do not universally multiply A1–A3 by waste rate. If waste is defined as a fraction of purchased quantity, purchased quantity is installed/(1−w); an installed-quantity markup has a different meaning. Decide the applicable assessment/PCR allocation of added production, transport and waste treatment before implementation, and prevent double counting source A5. This is a design gate, not an implemented formula.
- Proposed diagnostics: `scenario.a5.factor_missing`, `.waste_basis_missing`, `.allocation_unresolved`, `.quantity_missing`, `.double_count_risk`; retain absent A5 as unavailable. The calculator must consume a resolved module contribution on Elements, not guess these policies.

### D. B use / replacement

- Some German records supply complete B1–B7, others only selected B modules. RAW Element provides installed quantities, not study period, service life, occupancy, energy or water demand.
- **Planned RAW Replacement Scenario should initially target B4**, not claim to complete all of B. Require explicit replacement count or a disclosed service-life/study-period policy, boundary treatment at the end of the study period, and evidenced burdens for the replacement event. Do not infer cycles from material names.
- Repeating A1–A3 alone is not a complete universal B4 model. Replacement can require manufacture, delivery, installation and removal burdens under the applicable method. The [JRC Level(s) indicator 1.2 manual](https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2021-01/UM3_Indicator_1.2_v1.1_37pp.pdf) distinguishes maintenance/repair/refurbishment and illustrates the wider replacement event. Use it as methodological context, not a default lifetime/factor source.
- Chain where B is incomplete: RAW Element → **planned Replacement/B4** plus evidenced missing B1, B2/B3, B5, B6/B7 assignments → RAW Element GWP (B). Future maintenance/repair and operational-energy/water contracts are also needed unless source factors already cover those modules. Replacement alone cannot finish B or whole life.
- Proposed diagnostics: `scenario.b4.service_life_missing`, `.study_period_missing`, `.count_policy_missing`, `.event_scope_incomplete`, `scenario.b.modules_uncovered`. Missing B modules withhold B GWP; availability remains visible in Result. Defer broad B automation until the module ledger and policies exist.

### E. C end of life

- All Danish records provide C3/C4; 3,118 German records have numeric C1–C4. RAW Element supplies installed quantities, not demolition methods or waste destinations.
- Where C is complete and quantities match, current Elements → GWP (C) works as source-scenario arithmetic. Otherwise chain: RAW Element → Physical Properties if needed → **planned RAW End-of-Life Scenario** → RAW Element GWP (C).
- Require separate module assignments: C1 demolition, C2 transport to processing/disposal, C3 processing, C4 disposal. Waste-route shares and activity/factor bases must be explicit. Mass is common but not universal; respect each supplied factor's unit. Preserve existing C3/C4 rather than recalculating them accidentally.
- Current combined C is withheld when any required module is absent. A future report may expose named partial C3+C4 contributions, clearly labelled partial; do not change the meaning of C mode. Proposed diagnostics: `scenario.c.route_missing`, `.route_balance_invalid`, `.factor_missing` with affected module, `.quantity_missing`, `.existing_module_conflict`; existing `element.gwp_missing` names missing C1/C2/etc.

### F. D beyond system boundary

- Source D is widespread and often negative. Existing D with matching quantity can calculate now, independently of whether C is complete. RAW Element does not supply substitution, recovery yields or credit policy.
- For missing/project-specific D: RAW Element → Physical Properties if needed → **planned RAW Reuse / Recovery Scenario** → RAW Element GWP (D). Require reuse/recycling/recovery fractions, route balance, documented net load/credit factors and credit/allocation method. Percentages alone cannot determine a credit. Do not compute “negative A1–A3 × recycling rate” as a default.
- Define quality/substitution assumptions, additional processing loads and links to C flows; check mutually exclusive routes and avoid duplicated source D. A selected method must establish treatment of secondary inputs and outputs.
- Keep signed D and `element.module_d`; proposed `scenario.d.credit_method_missing`, `.factor_missing`, `.route_balance_invalid`, `.c_flow_inconsistent`, `.existing_module_conflict`. Missing D is null, not zero. D included in A1–D must also be reported separately.

### G. A1–C whole life excluding D

- A material may already contain the required numeric modules; geometry alone never establishes missing lifecycle assumptions. Current complete single-dataset arithmetic is distinguished from a verified project assessment in the readiness table.
- Chain as needed: RAW Element → Physical Properties → planned Transport → Construction → Replacement and other missing B assignments → End-of-Life → RAW Element GWP (A1–C). Do not replace valid source modules merely because an enrichment component is connected.
- Require all product/A4/A5/B1–B7/C1–C4 factors, quantities, scenario applicability, method compatibility and common study-period/context where relevant. Existing strict scope withholds incomplete total. Partial reporting can be added later under an explicitly different label, with a module coverage ledger.
- Store `element.gwp_missing`, `element.gwp_context`, per-module reasons and proposed `scenario.study_period_mismatch`, `scenario.module_conflict`, `scope.incomplete`. Source zero and an evidenced not-applicable determination must remain distinguishable; silence is neither.

### H. A1–D whole life including D

- Same chain and requirements as A1–C plus planned Reuse / Recovery where source D is absent or an explicit project scenario replaces it. Missing D withholds A1–D even if A1–C works.
- D is not a missing-stage balancing item. Never derive it to make a desired total. A partial D scenario also remains unavailable unless all its declared routes/contributions are resolved.
- Retain the warning: **“D is beyond the system boundary and should also be reported separately.”** Keep D's signed contribution, provenance, scope and status separately in the proposed ledger; today use a second calculator set to D. Store `element.module_d`, `element.gwp_missing` and proposed `scenario.d.incomplete` alongside context diagnostics.

## 5. Calculation-loop table

“Dataset only” means complete supplied factors for some records, still needing a quantity. “RAW Element only” means the element carries such a dataset and compatible quantities. **Partial** is population readiness, not permission to output an incomplete selected-scope sum. Exact source/engine counts appear above/in evidence.

| Module scope | Current dataset only? | RAW Element only? | Required enrichment if missing | Required user inputs | Required source factors | Failure cases | Recommended diagnostics | Priority |
|---|---|---|---|---|---|---|---|---|
| A1–A3 | Yes DK; Partial German | Partial | Existing Physical Properties; existing Surface Thickness | Valid quantity; density or measured mass if needed; thickness for area→volume | Product aggregate or A1+A2+A3 | Missing factor, mass, volume/count, unsupported unit, incompatible parts | `element.density`, `.quantity_basis`, `.gwp_missing`, `.gwp_context`; `physical.*` | 1: existing workflow hardening |
| A4 | No DK; Partial German | Partial | Transport; Physical Properties if mass-based | Distance, mode, activity quantity, source; load policy if applicable | Compatible transport activity factor or supplied A4 | Missing distance/factor/activity; conflicting source A4 | `scenario.a4.*`, `scenario.provenance_missing` | 3 |
| A5 | No DK; Partial German | Partial | Construction; physical inputs as needed | Installation activity, waste definition/rate, allocation, source | Installation/process and waste-route burdens | Undefined waste basis, missing factors, double counting | `scenario.a5.*` | 3 |
| B | No DK; Partial German | Partial | Replacement/B4; additional B assignments as needed | Study period, service life/count policy, maintenance/use assumptions | Compatible event and other B-stage factors | B4 mistaken for all B; missing event modules/operational data | `scenario.b4.*`, `scenario.b.modules_uncovered` | 3, after A4/A5; broader B later |
| C | Partial DK (C3/C4); Partial German | Partial (no complete DK C) | End-of-Life; Physical Properties if required | C1 activity, C2 route, C3/C4 processing/disposal shares, source | Each missing C1/C2/C3/C4 factor | Partial C; missing route/mass; conflicting source module | `element.gwp_missing`, `scenario.c.*` | 2 |
| D | Yes DK; Partial German | Partial | Reuse / Recovery; Physical Properties if needed | Recovery fractions, credit method, sources, C-flow links | Net load/credit factors with allocation context | Missing/partial D, route conflicts, unsupported credit method | `element.module_d`, `scenario.d.*` | 2; source D first |
| A1–C | No DK; Partial German | Partial | All missing-stage enrichments including B beyond replacement | Union of above, aligned study period | Complete required module set | Any missing/incompatible module; unresolved cross-dataset context | `scope.incomplete`, `element.gwp_context`, per-stage codes | Integrate after required stages |
| A1–D | No DK; Partial German | Partial | A1–C chain plus Reuse / Recovery | Above plus evidenced D policy | A1–C and D, separately traceable | Missing D; D concealed inside total; incompatible context | Above plus `element.module_d`, `scenario.d.incomplete` | Integrate last; retain separate D |

## 6. Shared enrichment architecture (proposed, not implemented)

Keep one primary output `Elements` for enrichment and one primary input `Elements` for RAW Element GWP. Preserve tree paths, element order, identity and failed slots. Components must return immutable enriched copies, not change source materials or silently flatten data.

Before scenario components, introduce a reviewed **element-level module contribution contract**, conceptually containing:

- Element/part identity and scope leaf (A4, C2, etc.); source module assignments remain intact.
- Quantity/activity value, unit and declared amount; original factor value/unit/record revision; conversion formula and evidence.
- Origin (`SourceScenario`, `UserScenario`, `VerifiedManualFactor`), scenario ID/version, source note/citation, evidence status, study period where relevant.
- Exact indicator/method/version/standard/boundary context and module membership; a factor in an activity dataset retains its original source module even when assigned to a building scenario module.
- Completeness/status, missing inputs, structured diagnostics and derivation dependencies (including physical overrides).
- Explicit conflict policy. Default: preserve existing source assignment and reject overlaps. Intentional replacement creates an auditable superseding assignment; it must never add both complete source A4 and full calculated A4, or aggregate plus leaves.

RAW Element GWP should resolve these assignments under strict compatibility, scale verified activities and select the requested scope. It must not infer distances, lifetimes, routes or factors. Enrichers must recompute when upstream quantity/provenance changes; serialisation must retain both original and superseding records. Context recovery is a separate evidence-led metadata task; scenario calculations must not mark an unknown source method “known” without evidence.

Each phase needs tests for missing versus explicit zero, signed factors, exact tree alignment, save/reopen, physical override precedence, no source mutation, aggregate/leaf overlap, mixed contexts, scenario replacement, and independent per-module reconciliation. No contracts or components were implemented in this audit.

## 7. Component contracts

### Component: RAW Physical Properties

**Category:** RAW LCA / Impact. **Status / implementation priority: Now — already implemented; verify and harden existing workflow.**

**Purpose:** Add element-level density or measured mass with provenance.

**Inputs:** Elements; optional Density (kg/m³); optional Measured Mass (kg/element); Source Note; Override Existing (false). **Outputs:** Elements.

**Fixes:** Missing mass for kg/t factors when volume+density or measured mass is available. **Cannot fix:** Missing volume without thickness, module factors, unsupported declared units, incompatible context or whole-life assumptions.

**Data/provenance:** Source dataset stays unchanged. A source density is protected unless Override Existing is true; measured mass takes precedence over density. A source note documents evidence but is not independently verified by RAW. Current blank-source-note behaviour is a warning, not a fabricated citation.

**Failures:** Nonfinite/zero/negative density or mass; misaligned input trees; multi-material assembly without allocation. Existing implementation restricts overrides to single-material elements.

**Diagnostics:** `physical.density_override_added`, `physical.mass_override_added`, `physical.override_blocked_existing_density`, `physical.measured_mass_precedence`, `physical.source_note_missing`, `physical.invalid_density`, `physical.invalid_measured_mass`, `physical.no_override`, `physical.assembly_allocation_required`, `physical.input_alignment`.

**Example workflow:** Clay powder → RAW Element (Surface + Thickness) → RAW Physical Properties (evidenced density) → RAW Element GWP (A1–A3). Preserve “Not supplied” on the original material summary.

### Component: RAW Thickness / Layer Helper

**Category:** RAW LCA / Elements. **Status / implementation priority: Documentation only; existing Surface Thickness and Wall Assembly already cover creation-time quantities.**

**Purpose:** If later justified, attach/validate thickness for an already-created single-material surface element without rebuilding the graph.

**Inputs:** Elements; Thickness (metres); Source Note; explicit replace policy if prior thickness exists. **Outputs:** Elements.

**Fixes:** Area→volume, and area→mass when density is also available. **Cannot fix:** Per-m² product-factor rescaling, missing density/factors/context, missing reference area, or a layered assembly needing per-layer allocation.

**Data/provenance:** Record supplied thickness, original/reference geometry quantity and evidence. Do not overwrite measured closed-solid volume or source product thickness. Store derived volume, not a rewritten material unit.

**Failures:** Nonpositive/nonfinite thickness; wrong basis; existing-volume conflict; undefined assembly allocation. **Proposed diagnostics:** `quantity.thickness_added`, `.invalid_thickness`, `.reference_area_missing`, `.volume_conflict`, `.assembly_allocation_required`, `.source_note_missing`.

**Example workflow:** RAW Element (Surface) → optional planned Thickness Helper → Physical Properties → GWP. Preferred today: connect Thickness directly to RAW Element.

### Component: RAW Transport Scenario

**Category:** RAW LCA / Impact. **Status / implementation priority: Next after C/D foundations — priority 3.**

**Purpose:** Supply a documented A4 activity/scenario assignment.

**Inputs:** Elements; Distance (km); Transport mode; Transport factor with unit/declared amount and context; optional Load factor under a declared policy; Source Note. **Outputs:** Elements.

**Fixes:** Missing/project-specific A4. **Cannot fix:** Missing mass for mass-distance factors, missing factors or method mismatch; cannot infer transport mode from a product name.

**Data/provenance:** Require factor citation/revision, mode, route, factor activity basis, method context and evidence. Block a scenario contribution without provenance; retain input elements and diagnostic. Do not silently replace source A4.

**Failures / diagnostics:** Missing/nonfinite/negative distance, absent mode/factor, unsupported activity conversion, missing mass/volume, duplicated A4; `scenario.a4.distance_missing`, `.distance_invalid`, `.mode_missing`, `.factor_missing`, `.quantity_missing`, `.activity_unit_mismatch`, and shared scenario codes.

**Example workflow:** RAW Element → Physical Properties → Transport Scenario → GWP (A4). Explicit zero distance is only valid as an evidenced scenario choice, never a default for missing distance.

### Component: RAW Construction Scenario

**Category:** RAW LCA / Impact. **Status / implementation priority: Next, priority 3, after module ledger and allocation design.**

**Purpose:** Assign evidenced A5 installation/site/waste contributions.

**Inputs:** Elements; Installation factor; Waste rate plus its basis; Site process factor/activity; Source Note; documented allocation policy (typed contract or later UI design). **Outputs:** Elements.

**Fixes:** Missing A5 where installation/loss data exist. **Cannot fix:** Missing production/process/waste-route factors, undefined boundaries, or incomplete other stages.

**Data/provenance:** State installed versus purchased quantity, waste destination, attribution to modules, factor activity unit, context and citation. Keep original element installed quantity and source factors intact; extra material demand is a traced scenario flow.

**Failures / diagnostics:** Invalid rates, missing waste basis or factors, ambiguous allocation, source A5 overlap; `scenario.a5.waste_basis_missing`, `.waste_rate_invalid`, `.allocation_unresolved`, `.factor_missing`, `.quantity_missing`, `.double_count_risk` and shared codes.

**Example workflow:** RAW Element → Construction Scenario → GWP (A5); A1–C only after all other stages are complete.

### Component: RAW Replacement Scenario

**Category:** RAW LCA / Impact. **Status / implementation priority: Later within priority 3; begin with explicit B4 only.**

**Purpose:** Describe replacement events under a declared study-period policy.

**Inputs:** Elements; Reference service life; Building study period; explicit Replacement count or automatic policy; Source Note; references to complete replacement-event factors/assignments. **Outputs:** Elements.

**Fixes:** B4 when an evidenced event inventory exists. **Cannot fix:** All B1–B7 by itself, use-stage energy/water, maintenance/repair, missing event factors, unsupported lifetime policy or incompatible contexts.

**Data/provenance:** Count must be nonnegative whole number; automatic policy must specify end-period treatment and evidence. A manually evidenced zero replacements is a real scenario decision, not missing-as-zero. Preserve original and replacement component lifetimes, study period, factor versions and attribution of removed products. Explicit count and automatic mode must not compete silently.

**Failures / diagnostics:** Missing lifetime/period when automatic policy is selected; invalid count; incomplete event inventory; conflicting policies; `scenario.b4.service_life_missing`, `.study_period_missing`, `.count_policy_missing`, `.event_scope_incomplete`, `.policy_conflict`, `scenario.b.modules_uncovered`.

**Example workflow:** RAW Element → Replacement Scenario → other required B assignments → GWP (B). A future report can expose B4 independently without pretending it is complete B.

### Component: RAW End-of-Life Scenario

**Category:** RAW LCA / Impact. **Status / implementation priority: Next — priority 2.**

**Purpose:** Fill specific missing C modules or deliberately supersede source scenarios.

**Inputs:** Elements; Demolition factor/activity; Waste route including transport legs; Processing route; Disposal route; route fractions and their factor references; Source Note. **Outputs:** Elements.

**Fixes:** Missing C1/C2/C3/C4 with real factors; particularly Danish C1/C2. **Cannot fix:** Absent route factors, mass when required, method mismatch, or recovery-credit D without its own model.

**Data/provenance:** Every assignment identifies C1/C2/C3/C4, activity unit, route/fraction, method, source/version. Require balanced material flow and context compatibility with retained C3/C4. Fraction totals below one leave an unresolved remainder unless an evidenced route covers it.

**Failures / diagnostics:** Missing route/activity/factor, invalid fractions, overlapping source modules; `scenario.c.route_missing`, `.route_balance_invalid`, `.factor_missing`, `.quantity_missing`, `.existing_module_conflict`, with module-specific details and shared codes.

**Example workflow:** Danish material → RAW Element → Physical Properties if needed → End-of-Life Scenario (evidenced C1/C2; retain C3/C4) → GWP (C). This needs the new assignment resolver; the present calculator cannot consume these planned assignments yet.

### Component: RAW Reuse / Recovery Scenario

**Category:** RAW LCA / Impact. **Status / implementation priority: Next design, staged after explicit C-flow contracts — priority 2.**

**Purpose:** Supply evidenced D net load/benefit scenarios, preserving sign and boundary.

**Inputs:** Elements; Reuse rate; Recycling rate; Recovery rate; Credit method with factor references; Source Note; linked C-flow scenario. **Outputs:** Elements.

**Fixes:** Missing/project-specific D where a defensible method and inventory exist. **Cannot fix:** Missing credit/substitution factors, allocation method, unbalanced flows, or missing C/other stages by inventing benefits.

**Data/provenance:** Require stated recovery quality/substitution, net flows, burdens/credits, source versions, method and relationship to C. Record D separately and explicitly supersede, never add to, an already complete source D.

**Failures / diagnostics:** Invalid/overlapping rates, inconsistent C quantities, missing method/factor, incomplete net inventory; `scenario.d.credit_method_missing`, `.factor_missing`, `.route_balance_invalid`, `.c_flow_inconsistent`, `.incomplete`, `.existing_module_conflict`, and `element.module_d`.

**Example workflow:** RAW Element → End-of-Life Scenario → Reuse / Recovery Scenario → GWP (D); a separate calculator may request A1–D when all stages are complete.

### Component: RAW Module Factor Override

**Category:** RAW LCA / Impact. **Status / implementation priority: Later — priority 4, advanced/manual only.**

**Purpose:** Attach a verified missing-module GWP factor as an element-level assignment, not impersonate source EPD data.

**Inputs:** Elements; exact Module; GWP factor; Declared quantity/unit; indicator/method/standard/boundary context; provenance citation/version/evidence; explicit replacement policy if applicable. A numeric factor plus a free-text note alone is insufficient. **Outputs:** Elements.

**Fixes:** A specific missing module when reliable compatible evidence exists. **Cannot fix:** Missing quantities, undocumented conversions, method mismatch or unevidenced zero/not-applicable stages; cannot certify data.

**Data/provenance:** Mandatory traceable source and typed context; preserve original record, user identity/evidence status, assignment origin and replaced value. Negative D is allowed; any signed factor must remain source-backed. Require correct aggregate membership and block aggregate/leaf overlap.

**Failures / diagnostics:** Absent provenance, invalid factor/basis, ambiguous module, conflicts, incompatible context; `override.provenance_required`, `.factor_invalid`, `.declared_basis_invalid`, `.module_ambiguous`, `.source_conflict`, `.context_incompatible`.

**Example workflow:** RAW Element → Module Factor Override (reviewed missing C1 factor) → GWP (C), only if C2–C4 and quantities are also complete. Never use this to silence missing-data warnings without evidence.

## 8. Implementation order and decision gates

1. **Priority 1 — current A1–A3 reliability, not a new Physical Properties component.** Use and verify existing density/measured-mass enrichment, Surface Thickness, Unit/count and source-preserving guidance. Improve alignment/provenance feedback and distinguish absent product aggregate from valid A1/A2/A3 leaves in summaries. Review unsupported per-metre handling as a separate quantity-basis change; kgkm/MJ remain activity inputs. No conversion by relabelling.
2. **Foundation alongside priority 1:** evidence-led LCIA metadata resolution, source scenario applicability and the module-assignment/diagnostic contracts. Existing unknown method identities mean new scenario factors cannot safely combine with arbitrary library records. Reuse reviewed, pinned context logic; do not blanket-promote the packs. Design a numeric per-module ledger so D and partial coverage remain inspectable. These are prerequisites, not new palette widgets in this audit.
3. **Priority 2 — C and D.** First make existing source D and complete German C understandable; then implement explicit C1/C2 completion and route contracts preserving source C3/C4. A narrow transport-activity calculation service may be needed for C2 before a public A4 component. Design Reuse/Recovery next; automatic credit models wait for allocation evidence. Since source D is already common, missing C1/C2 is the stronger immediate Danish gap.
4. **Priority 3 — Transport/A4, then Construction/A5.** Reuse the audited transport activity service; settle waste-basis/allocation and overlap policies before A5. Missing physical properties must be resolved upstream.
5. **Priority 3, later — Replacement/B4, then remaining B requirements.** B needs more than service life. Define event inventories, periods and replacement-endpoint rules; plan maintenance/repair and operational B6/B7 coverage separately. A Replacement component cannot by itself unlock whole-life output.
6. **Priority 4 — advanced Module Factor Override.** Implement only after the same typed provenance, context and conflict rules are enforced. It is an expert fallback, not the default way to “complete” an EPD.
7. **RAW Inspector later**, after the above contracts stabilise. Do not add Inspector, reporting, graph or fake scenario palette entries now. Existing visualisation can consume available results and mark unavailable items honestly.

Complete whole-life **arithmetic** for eligible single source records is possible now; complete **project** whole-life assessment still requires applicability checks and context. For missing-stage records, installing all five proposed scenario components alone will not guarantee completion: real factors and the uncovered B modules are still required.

## 9. Diagnostics for future RAW Inspector

Start with a deterministic rule table, not an LLM deciding scientific validity. Proposed future interface: `Data` → `Status`, `Issues`, `Recommended Actions`. Optional LLM wording may explain established facts later; it must not invent factors, replace provenance or override calculation status.

Preserve existing diagnostic code, severity, owner/reference and scope; enrich them with:

- Stable element/part identity and GH tree path/item index, source dataset ID/revision and affected module(s).
- Required versus available quantity/factor, expected unit, actual unit, missing/invalid/ambiguous reason, and whether the issue blocks the selected GWP or only mass/normalised visualisation.
- Source versus user scenario/physical override origin; evidence/citation and validation status; active/superseded assignment, precedence decision and dependency chain.
- Recommended real component, mode and exact input, with availability state (`implemented`/`planned`), so users are not told to connect an unavailable component.
- Status dimensions separately: numeric completeness, quantity readiness, context compatibility and evidence quality. An available individual factor calculation may still have unresolved method context.
- Per-module availability and numeric contributions, explicit-zero status, omitted/not-applicable evidence, missing stages, study period and D boundary notice. “Partial” describes coverage; it must not be printed as a complete A1–C/A1–D total.

Shared proposed scenario codes: `scenario.provenance_missing`, `scenario.context_unresolved`, `scenario.context_incompatible`, `scenario.module_conflict`, `scenario.input_alignment`, `scenario.study_period_mismatch`, `scenario.quantity_changed`, `scope.incomplete`. Codes proposed in this document do not currently exist unless explicitly identified as existing.

Example rule: `element.density` + kg + known volume → recommend existing RAW Physical Properties / Density or Measured Mass, request evidence; do not recommend thickness when volume is already known. For m² GWP with missing density → explain “mass unavailable; area-based GWP can still calculate.” Missing C1/C2 → identify retained C3/C4 and the planned End-of-Life remedy, while explicitly saying it is not available yet. Incompatible methods → request source-context review, never a physical override.

## 10. Risks and boundaries

- Missing is not zero. Preserve explicit zero separately from absent, invalid, not-declared or unresolved applicability.
- Never invent density or infer it from a material family. A user source note is provenance, not independent verification.
- Keep source units, factor quantities, boundaries, geography, version and original records. Distinguish scenario assumptions from source EPD observations.
- Do not mix incompatible methods/standards/indicators or bypass unresolved cross-dataset checks with a numeric sum. Do not normalise different source factors into supposed equivalence.
- Do not conceal partial C or missing B/D inside A1–C/A1–D. Keep D separately reportable even when included.
- Never apply both source aggregate and constituent modules, source and replacement scenario, or the same waste/recovery burden twice.
- A measured mass does not invent volume/area for normalised colour previews. Geometry/order mismatches must stay visible.
- This audit measures current local availability, not scientific verification, dataset suitability, current online release status or redistribution permission.

## 11. Verification and change scope

Deliverable changes are documentation only:

- `docs/raw-data-enrichment-audit-and-roadmap.md` — this audit, eight calculation loops, component contracts and implementation plan.
- `docs/raw-data-enrichment-audit-evidence.json` — full aggregate source inventory, categories/regions/families, module counts, engine readiness and verification evidence.

Verification performed:

- Read-only inspection and hydration of all **5,520** dataset revisions; **44,160** existing-calculator scope evaluations. Count partitions and family/unit totals reconcile.
- Material-library SHA-256 unchanged before/after the audit.
- `dotnet build RawLca.sln --configuration Release`: standard output build failed at the GHA copy step because Rhino 8 (PID 29816) held the plugin file open (MSB3027/MSB3021). The session was not closed or interrupted. The first sandbox attempt also exited without compiler diagnostics; verification was rerun with the installed runtime.
- Safe isolated-output verification: `dotnet build RawLca.sln --configuration Release -p:BaseOutputPath=[local development path omitted]` — **passed, zero warnings/errors**.
- `dotnet test RawLca.sln --configuration Release` — **1,021 passed, 0 failed, 0 skipped**.
- No native Grasshopper smoke test was run for this planning task. No new components were installed.


No component, production source, original material, palette registration or frozen validation file was modified for this audit. The temporary read-only probe remains under ignored `internal implementation reference`; it is an audit instrument, not a new calculation component. No commit or push.