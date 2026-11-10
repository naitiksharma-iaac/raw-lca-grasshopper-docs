# RAW material category roadmap

> **Public reading edition · 13 October 2026.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


**13 October 2026 — proposal only.** No records, source categories, factors, units or selector state were changed. [Research evidence](raw-project-fabrication-research.md) establishes the project context; the [dataset audit](raw-data-enrichment-audit-and-roadmap.md) supplies coverage counts.

## Current library and classification

Read-only SQLite queries against `internal implementation reference` confirmed 441 Danish and 5,079 ÖKOBAUDAT records. Its SHA-256 remains `659078480a6ce4a4a7669114b60f2abc5f3aabc3916188fdff84b8340b2b1e00`, matching the audit evidence (supporting internal reference retained privately). No ICE, EC3 or KBOB pack is in this database. Tanya's browser catalogue is a separate research source, not an imported pack or permission to redistribute its factors.

Queries used:

```sql
SELECT source_key, COUNT(*) FROM material_datasets GROUP BY source_key;
SELECT source_key, unit, COUNT(*) FROM material_datasets GROUP BY source_key, unit;
SELECT name, category, unit FROM material_datasets
WHERE source_key LIKE 'okobaudat:%' AND unit IN ('m','MJ','kgkm');
```

The source key includes a pack fingerprint/version, so exact equality to `okobaudat` would incorrectly return no records. Payloads and cache content were not rewritten.

| Declared unit | Danish | ÖKOBAUDAT | Meaning for organisation |
|---|---:|---:|---|
| kg | 132 | 915 | Physical mass route; do not assume supplied density |
| t | 27 | 0 | Explicit mass scale; retain declared amount |
| m² | 124 | 1,478 | Product/reference area, often specification-dependent |
| m³ | 74 | 692 | Volume route |
| item | 65 | 1,834 | Count does not equal arbitrary geometry-object count |
| m | 19 | 102 | Linear product; current direct metre-factor calculation unsupported |
| MJ | 0 | 49 | Energy-service records, not material solids |
| kg·km | 0 | 9 | Transport service, not mass-only material |

The existing audit records 21 Danish browse families and 14 German browse families. Danish source categories are absent in inspected records and explicitly stored as unclassified; English display-name rules provide the browse family. German records retain 266 source leaf categories, but the common family function collapses many of them by first-match name/category keywords. It is not a scientific material ontology.

Code inspected: DanishMaterialCatalog (supporting internal reference retained privately), GermanMaterialCatalog (supporting internal reference retained privately), MaterialSelectorUx (supporting internal reference retained privately). Broad `electric...` matching can classify electricity-service records as Services / MEP. Form words such as board, panel or roof can also hide composition. The same material can therefore appear differently between source selectors.

## Recommended material category structure

Use **browse categories plus independent facets**, not one category that controls all calculations. Keep the Danish and German selector source boundaries. A mapping is a versioned RAW presentation overlay, not a rewrite of the source record.

Common required metadata: source/provider, dataset ID and revision, original name/category, region and validity/version, declared quantity **amount and unit**, reference quantity, GWP indicator/unit/method/context, module availability/boundary, provenance and permission status. Missing metadata stays unknown. Density additionally needs units, condition and evidence. Category confidence and mapping rule version belong to the overlay.

| Proposed browse category | Intended types | Likely units / geometry | Common gaps and additional metadata | Components using it |
|---|---|---|---|---|
| Timber and wood products | Sawn wood, glulam, plywood, wood products | kg, m³, m, m²; solid/linear/panel | Species, moisture, density, profile, adhesive/binder content, biogenic boundary | Element, Section, Wall Assembly, Physical Properties |
| Reclaimed timber — saved facet view | Reused stock, recovered members, reused panels | kg, m³, m, item; stock/linear/solid | Source stock ID, prior use, condition/grade, defects, measured dimensions, allocation method | Physical Properties; future Timber Preparation |
| Boards and panels | Acoustic, sandwich, sheathing, composite panels | m²/m³/kg; surface or layered assembly | Declared thickness, areal mass, layers/coatings, product-specific scaling permission | Element Surface, Wall Assembly |
| Mineral materials | Stone, aggregates, mineral fill | kg/t/m³; solid or bulk | Bulk versus true density, moisture, voids, compacted condition | Element Volume, Physical Properties |
| Clay / earth / ceramics | Clay powder, earth products, fired ceramics | kg/m³/m²/item | Loose versus finished state, moisture, firing included or excluded | Element, Physical Properties; process evidence later |
| Concrete / cementitious | Concrete, mortar, cement, grout | kg/t/m³/m² | Reinforcement included?, mix specification, density, curing boundary | Element Volume, Wall Assembly |
| Metals | Steel, aluminium, other metals, profiles, sheet | kg/t/m³/m²/m/item | Alloy, section, recycled content, finish, forming/cutting boundary | Element, Section; future CNC/waste |
| Glass | Sheet glass, glazing units, blocks | m²/m³/kg/item | Product thickness, coating, glazing build-up, density | Element Surface/Volume, Wall Assembly |
| Insulation | Mineral, polymer, cellulose and biobased insulation | m²/m³/kg | Declared thickness/performance, installed versus loose density | Wall Assembly, Physical Properties |
| Membranes / foils | Roofing, vapour barriers, polymer/metal foils | m²/kg | Layer specification, areal mass, overlaps, coating | Element Surface, Wall Assembly |
| Plastics / polymers | Resin products, profiles, polymer feedstock | kg/m³/m/item | Grade, fillers, density, feed versus finished product | Element; future Printing Process |
| Bio-based composites | Fibre/binder mixtures, biopolymer products | kg/m³/m²/item | Explicit composition, wet/dry basis, binder identity, curing, allocation | Custom Material/context, Wall Assembly where appropriate; future BOM/process |
| Fibres / textiles | Hemp, cotton, cellulose, glass fibre, yarn/fabric | kg/m²/m | Areal/linear mass, dry basis, sizing/binder, textile structure | Surface/Linear quantity routes; future textile/winding process |
| Binders / coatings / adhesives | Pea binder, epoxy, wood glue, paint, sealant | kg/m² | Solids content, mixing ratio, application yield, cure/drying included? | Assembly layers, future process consumables |
| Building products / services | Windows, doors, equipment, PV and MEP assemblies | item/m²/m/kg | Product capacity/specification, included subparts, lifetime and installed count | Unit/count or Surface; later replacement |
| Process energy / fabrication — factor role | Electricity, heat, machining service | kWh/MJ/process unit | Carrier, grid/geography, year, equipment/service boundary, allocation | Future Machine Energy/process adapter; not ordinary solid conversion |
| Transport / logistics — factor role | Road/freight transport services | kg·km/t·km/service unit | Mode, load basis, distance, empty return included?, geography | Future Transport Scenario |
| Custom / user-defined — origin facet | Evidenced manually authored materials | Any explicitly supported basis | Complete method/context and evidence; distinguish TEST ONLY fixtures | Custom Material, Dataset Info |

“Reclaimed” and “custom” are useful discoverable views but are acquisition/origin facets, not competing chemical families. Process energy and transport are factor roles and should be filtered into the relevant future enrichment picker. Building services remain searchable because current packs contain many equipment records; their presence does not make MEP a first fabrication priority.

Independent facets: composition; product form; application; acquisition (virgin/reused/recycled/co-product/unknown); factor role; declared unit; module coverage; source region/version; quantity readiness; context status. Product category can **suggest** a workflow; only typed quantity and factor metadata can permit arithmetic.

## Concrete mapping review examples

These are observed library names plus proposed overlay mappings. No record has been reclassified.

| Record / observation | Current browse-rule issue | Proposed mapping |
|---|---|---|
| `Ler pulver` / Clay powder, kg | Clay family is useful, but cannot convey missing density | Clay/earth; powder/bulk form; mass route; explicit density-needed status |
| `Glas 4 mm`, m² | Glass label hides product-specific thickness | Glass + sheet + 4 mm product specification; Surface; never rescale its factor by a thickness slider |
| `Aluminiumsplade`, kg | Aluminium alone does not show sheet form | Metals/aluminium + sheet; Surface + thickness + density or measured mass |
| `Akustikpanel, ålegræs`, m² | Acoustic-panel rule wins over biological composition | Boards/panels + acoustic + seagrass fibre; composition/binder only where source supports it |
| `Akustikpanel, strå`, m³ | Same family as m² panels but different quantity path | Boards/panels + straw; retain m³ and required volume |
| `Akustikpanel, glasuld, tekstil, 20 mm`, m² | Mixed glass-wool/textile product cannot be one pure material | Boards/panels + acoustic + insulation/textile facets; do not split factor into invented constituents |
| `Electricity grid mix 2023`, MJ | `electric...` family rule implies MEP despite energy-carrier source category | Process energy/electricity; retain MJ, geographic/time metadata and method context |
| `District heating mix Germany`, MJ | May fall under Other rather than an energy-service role | Process energy/heat; never reuse as electricity factor |
| `Mechanical fastener (screws, nails, brackets)` in Tanya catalogue | Research catalogue is not the local product pack | Candidate metals/fastener mapping only if a licensed source is later imported; do not fabricate an item mass |

The first two energy classifications can be inferred directly from current rules and source category/name; this review did not execute a native selector UI. Source leaf categories should generally outrank ambiguous English-name substrings. Danish records need a curated overlay because original categories are missing.

## Mapping and migration strategy

1. Freeze record identity and raw fields; create a separate mapping specification keyed by dataset reference/revision. Preserve original categories verbatim in Dataset Info.
2. Define stable category IDs independent of translated labels. Add curated mappings, source-category mappings, then cautious keyword fallback with confidence; conflicting candidates remain multi-tagged or require review.
3. Use explicit factor-role detection before ordinary material-family rules. Verify quantity kind and source category; an `MJ` unit alone does not establish an electricity carrier.
4. Keep mixed products as products. Neither family nor name parsing creates constituent quantities, densities, renewable content or thickness-scaling permission.
5. Provide filters for “matching quantity available”, “physical enrichment needed”, “unsupported direct unit” and “context unresolved”. Readiness depends on an element and selected scope, not just a global material badge.
6. Reuse the current source index for fast search. Avoid decoding every full material record on opening the selector. Index overlay facets and load full evidence on selection.
7. Test mapping examples in both languages; test that canonical object IDs, factors, density, declared quantities and source module lists remain unchanged. Preserve saved family filters with aliases/migration only after approval.

## Acceptance criteria for the next phase

- Review a small set covering timber stock, glazing, clay, acoustic panels, textile composites, energy and transport before bulk mapping.
- Account for every record, including Other/unknown; report conflicts and confidence instead of forcing a category.
- Keep all source versions separate, and make unknown region/method explicit.
- Demonstrate category changes do not change GWP, quantity compatibility or module availability.
- ICE/EC3/KBOB and Tanya factors remain documentation-only unless data access and reuse permissions are established.