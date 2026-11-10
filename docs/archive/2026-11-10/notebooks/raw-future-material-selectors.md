# Planned Materials selectors: ICE, EC3 and KBOB

> **Public reading edition · Historical development snapshot.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


Status: **documentation only — no source adapters, components, credentials or material records added**.

## Planned product placement

| Future component | Category | Proposed source-pack key | Current status |
| --- | --- | --- | --- |
| RAW Material Selector ICE | RAW LCA / Materials | `ice` | Planned; source data and applicable rights evidence required |
| RAW Material Selector EC3 | RAW LCA / Materials | `ec3` | Planned; source data and applicable rights evidence required |
| RAW Material Selector KBOB | RAW LCA / Materials | `kbob` | Planned; source data and applicable rights evidence required |

These are separate source browsers. Do not combine their catalogs with each other or with Danish/ÖKOBAUDAT data, deduplicate products across sources, average factors, or replace one source with another. The proposed keys are not registered adapters. Allocate separate stable component GUIDs at implementation; preserve all existing component GUIDs and ports. Do not expose a working palette entry until its source admission and adapter tests pass.

## Local evidence checked

Read-only inspection on 2026-10-13 of `internal implementation reference`:

```sql
SELECT pack, COUNT(*) FROM material_datasets GROUP BY pack;
SELECT pack, COUNT(*) FROM pack_sources GROUP BY pack;
```

Results: 441 `denmark_br18_table7` dataset revisions and 5,079 `okobaudat` revisions, with one registered source snapshot for each. Neither query returned ICE, EC3 or KBOB.

The filename search under `data/` for ICE, EC3, KBOB and license/rights/permission evidence returned no matches. This is evidence about the inspected local storage, not a claim that the providers have no available data or that no other file exists on the computer. `DataPackIngestion.Context` currently accepts only Danish and ÖKOBAUDAT source packs. Existing repository KBOB-like/openEPD-like examples are explicitly synthetic schema fixtures, not real source records, permission evidence or implemented provider adapters. Existing benchmark documents are research references, not permission to redistribute their referenced data.

Source redistribution is **not confirmed by this inspection**. No current provider terms were researched or interpreted in this planning task. Obtain and record the applicable terms for the exact release/acquisition route before implementation or distribution.

## Shared UI and output contract

Mirror the current Danish/German pattern:

- Material-family dropdown, **Select material…** button, selected product name and declared-unit footer.
- Dialog family filter and text search, with exactly five table columns: **Material / product**, **Declared quantity**, **GWP A1–A3**, **Density**, **Source modules / boundary**.
- Detailed source metadata below the table; no extra source-selection dropdown inside a source-specific selector.
- No geometry inputs. One existing generic **Material** output, using `MaterialDatasetGoo(ResolvedDatasetSelection, compactSummary)`. This is the existing RAW Material contract: an `EnvironmentalDataset` plus its complete supporting records, not a new incompatible provider object or a string-only summary.
- Same seven compact fields: Name, Material family, Declared quantity, GWP A1–A3, Density, Source, Required RAW workflow. Keep hashes and long revision IDs in details/RAW Dataset Info and the underlying object.
- Source line identifies the provider and, when available, a short release/version label. Source region, original boundary wording, full version and method context remain visible in details and preserved in the object.

Use the German selector's fast path: one source-filtered index query, then on-demand validation of visible/selected packages. Do not eagerly hydrate every record when placing the component. Use a per-library browser cache keyed by source dataset ID and revision; bind it to the opened library snapshot and invalidate on explicit reload/library change. Do not share cached values across source packs, libraries or snapshots. Persist the selected library, family, record ID and revision. A missing saved revision must not silently select the newest release or another source's product.

Before adding these selectors, extract a source-neutral browser/presenter from the tested German implementation. Provider definitions supply labels, source filters, family presentation and admission state; provider adapters retain the mapping logic. Do not copy the German or Danish provider ID into an ICE/EC3/KBOB record. Keep the existing selectors unchanged in behavior and run their regressions after any helper extraction.

## Preservation and compatibility

For every admitted record preserve:

| Information | Required treatment |
| --- | --- |
| Declared quantity | Exact numerical basis and original unit; retain original unit spelling and any explicit mapping provenance. Never assume a basis of one. |
| Impact values | Original value, unit, indicator identity, method/version, status and source module/boundary. Missing stays missing, explicit zero stays zero, negative stays negative. |
| Density and conversions | Only supplied, attributable evidence with its unit/context; no inferred density or implicit mass/area/volume conversion. Missing density displays **Not supplied**. |
| Boundary | Preserve original text and supplied module identities. Map to an EN module only with documented source evidence. An ambiguous production boundary must not be labelled A1–A3. |
| Region | Source geography and scope, including unknown/multiregion status. Do not infer geography from the provider name, product name or UI language. |
| Identity/version | Provider record ID, release/version, RAW revision, source snapshot, retrieval/import time and mapper version. No cross-source identity merging. |
| Metadata | Permitted original names, categories, manufacturer/product information, references, source locators, verification/context, scenario and technical qualifiers. Preserve unmapped fields where storage permission allows. |
| Rights | Separate access, canonical-storage, native-payload, project-sharing, export and redistribution decisions with evidence and review date. Unknown permission is not confirmed permission. |

Using a common RAW schema does not normalize source factors or establish comparability. Existing GWP readers currently recognize specific source indicator identities. Each new adapter therefore needs a reviewed indicator/module mapping and tests before its materials can be claimed to calculate in RAW Element GWP. Do not bypass compatibility checks, impersonate an accepted source, mark an unresolved LCIA method as known, or silently convert energy/other indicators into GWP. Preserve unsupported records as inspectable only where permitted, with an explicit unavailable diagnostic.

The GWP A1–A3 column shows only an unambiguous supported source value for that scope. If only a different/unclear boundary exists, display **Not supplied / scope not mapped** and explain the original boundary in details. Never relabel an arbitrary source total as A1–A3. Retain other source modules for later supported calculations without forcing every source into the same lifecycle coverage.

Workflow guidance follows the existing RAW quantity requirements: m² → Surface; m³ → Volume or surface/thickness workflow; kg/t → density plus volume (or thickness × area × density); item → Unit/count; unsupported/unclear → inspect RAW Dataset Info. Guidance explains what is needed; it does not fabricate missing inputs or certify dataset compatibility.

## Provider-specific adapter work

### ICE

Start with an explicitly supplied release and permitted local file. Inspect the actual headers, record hierarchy and source documentation before choosing an import format or mapping. Preserve material variants, numerical reference quantities, geography, release, original boundary descriptions, uncertainty/ranges and factor qualifiers wherever supplied. Determine which observations are GWP, their exact units and whether their scope supports A1–A3. Do not infer a density or product thickness from a family name, assume every factor is per kilogram, or treat another metric as carbon.

### EC3

Keep provider identity, exchange format and acquisition route separate. EC3 is the planned source identity; a possible openEPD exchange representation does not itself identify the provider or confer access/storage rights. Initially prefer explicit, permitted user-supplied exports. If a live connector is later approved, use user-controlled credentials and explicit fetch/import actions; never embed a shared key or request data on every Grasshopper solve.

Preserve product/manufacturer identifiers, declaration and revision/validity information, geography, module and indicator distinctions, declared unit and any source scenario/uncertainty qualifiers. Do not choose silently between multiple source statistics, GWP variants, declarations or scenarios. Make the mapping decision explicit and retain the alternatives as source metadata where permitted. A live refresh creates a new pinned revision rather than modifying a project selection.

### KBOB

Start with a specific permitted release and inspect its actual table structure and documentation. Preserve source row IDs, original classifications, release, region, reference units, source stage/boundary descriptions and indicator definitions. Review separate stage columns individually; never assume a source aggregate is equivalent to A1–A3 or whole-life GWP. If multiple environmental indicators are present, select only an evidenced GWP observation for the GWP display and retain other indicators without relabelling them. No blanket unit or density assumptions.

These are mapping requirements, not assertions about the current contents, schema or licensing of a particular provider release.

## Admission gates and empty/error states

1. Obtain the actual release/export and document its acquisition route and applicable rights evidence.
2. Inspect representative real records. Produce a field-mapping/loss report covering quantities, source identity, indicator/method, boundaries, region, revision and permissions.
3. Implement a source-specific adapter outside RAW.Core using existing canonical records and storage validation. Where rights require reference-only preservation, do not hide disallowed factor values in a cache or summary.
4. Verify downstream quantity and GWP compatibility against documented source evidence. Leave unsupported scopes unavailable.
5. Implement the shared UI definition and a new stable component GUID; only then admit it to `RawPalette` under Materials.

Until source data is present **and** the required permission review is complete, this work remains documentation/scaffold only. No bundled records or working selectors are created. Future review may distinguish permitted personal local use from redistribution, but this plan does not grant either.

Planned messages distinguish the causes:

- **No ICE / EC3 / KBOB records found in the current RAW material library.** Explain the expected supported import path, with no fallback to a different source.
- **Source access/storage permissions are not confirmed for this import.** No copied payload or material output.
- **Redistribution is not confirmed.** No bundled/exported provider records; do not claim that local access is automatically prohibited or authorized.
- **Saved source revision is unavailable.** Retain the saved display/identity; require explicit reselection.
- **Source boundary or indicator is not mapped for RAW GWP.** Preserve permitted metadata and explain the unresolved calculation requirement.

## Implementation order and acceptance tests

Implement the first provider for which a real sample and rights evidence are available; provider names alone do not determine priority. Complete one adapter end to end before adding the next.

Acceptance requires source-isolated filtering, the same Material output type, preserved supporting records and pinned save/reopen identity; original units/reference quantities/region/boundary/version; missing-density and missing-factor behavior; unchanged signed/zero factors; seven-field compact summaries without hashes; invalid/absent/restricted library behavior; source-mapping diagnostics and downstream compatibility; no record substitution or cross-source merging; fast index-only startup, selected-record validation and unchanged source-library hashes. Use explicitly labelled synthetic fixtures for adapter edge-case tests only, never as palette materials. Exercise licensed/permitted real samples locally under their allowed test/distribution scope.

Run the Release solution build/tests and a native Grasshopper placement, selection, downstream wiring and save/reopen check when implementing each selector. This planning change introduces no executable behavior and needs no new component GUID, schema migration or build deployment.