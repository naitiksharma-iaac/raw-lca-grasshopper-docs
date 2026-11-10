# RAW end-of-life and reuse scenarios

> **Public reading edition · Historical development snapshot.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


Implemented: **RAW Physical Properties**, **RAW End-of-Life Scenario** and **RAW Reuse / Recovery Scenario**, under **RAW LCA / Impact**. RAW Element GWP keeps its single Elements input and existing six outputs. No source dataset or library factors are changed.

## Why C and D first

The local audit found Danish BR18 records already contain A1–A3, C3, C4 and D, but no A4, A5, B, C1 or C2. German coverage varies by record. C/D assignments therefore address an existing gap while retaining supplied source modules. Transport, construction and replacement need separate scenario models and remain deferred.

These components accept **evidenced factors**, not waste-route calculations or inferred recovery credits. They do not establish a verified whole-life assessment. Complete arithmetic is distinct from scientific verification.

## Ports

| Component | Inputs in order | Output | Stable GUID |
| --- | --- | --- | --- |
| RAW Physical Properties | Elements; Density; Measured Mass; Source Note; Override Existing | Elements | `637ec905-a9d6-4c91-a432-d518048f150a` (unchanged) |
| RAW End-of-Life Scenario | Elements; C1 Factor; C2 Factor; C3 Factor; C4 Factor; C Factor Unit / Basis; Waste Route; Source Note; Override Existing | Elements | `41d928ae-9e8b-4405-8ba7-21cad3981f01` |
| RAW Reuse / Recovery Scenario | Elements; D Factor; D Factor Unit / Basis; Reuse Rate; Recycling Rate; Recovery Rate; Credit Method; Source Note; Override Existing | Elements | `5d19d720-1946-4c39-9a51-f2136ee5a36e` |

All additions are optional; Override Existing defaults to false. Factor inputs accept finite signed numbers, including explicitly supplied zero. Missing is never zero. All three components retain paths, empty branches and invalid item positions. Optional input trees accept one global value, one per matching branch or one value per element; mismatched branches receive diagnostics and no new assignments. They are not flattened. Invalid numeric GH items are rejected rather than converted to zero.

## Factor basis and context contract

- Factors are in **kg CO₂-eq per the exact original declared quantity**. A blank basis selects that quantity; `1 m²`, `1 kg` or `1000 kg` make it explicit. Bare `kg` means 1 kg and is rejected for a source declared as 1000 kg.
- Supported bases: kg, t, m², m³ and item. Other units, different declared/reference quantities, and different factor bases are rejected. This first version does not convert scenario factors between units or infer quantities.
- A kg factor still needs mass. Use RAW Physical Properties for evidenced density + volume or measured mass. Surface geometry may also need thickness. An m² factor is scaled by area, not thickness.
- **Source Note is mandatory for explicit C/D factors.** It identifies evidence and the user's declaration that factor method, indicator, standard, module vocabulary and quantity basis match the selected material. Waste Route and Credit Method retain descriptive evidence only.
- The selected material's method ID, version and characterisation basis must be resolved, with a supported unambiguous GWP indicator and module vocabulary. Context is pinned to the source dataset revision and standards. The note is not parsed to invent method metadata and does not establish compatibility by itself.
- With unresolved context, a valid explicit factor is stored as **pending enrichment**, with `ContextResolved = false`. Any selected scope needing it is unavailable. Original source-only arithmetic keeps its existing unresolved-method warning and behavior.
- Consequently, adding user C1/C2 to an unresolved Danish record **does not yet unlock combined C**. The source context must first be resolved through an evidenced context workflow. Danish source D alone remains usable as supplied-factor arithmetic, with its warning.
- Adding factors on known context is a user declaration, not independent verification. Source evidence remains the user's responsibility. No cross-source reconciliation is performed.

## Source preservation and override rules

`EnvironmentalElement.ScenarioFactors` stores effective per-module assignments. `ScenarioHistory` retains accepted assignments, including replaced user values and evidence. `ScenarioDiagnostics` holds current stage status; recomputing C status removes stale C diagnostics but retains D diagnostics and assignment history.

Each assignment stores the module, signed factor, declared quantity and unit, pinned dataset reference, method/indicator/standards/vocabulary, Source Note, context status, whether it replaced an existing value, and route or recovery metadata. It is never inserted into `EnvironmentalDataset.Impacts`, source observations or the material library. Results retain the enriched original element, so provenance remains accessible. Source quantity references continue to refer only to actual source observations.

Existing numeric source factors and prior element assignments are protected unless Override Existing is true. Overriding replaces only their use on that element, not the source record. Missing source observations can be filled. Source C aggregates retain existing aggregate precedence: this first version rejects leaf assignments against an aggregate, even with Override Existing, because aggregate decomposition would require a separate contract. Aggregates and leaves are never added twice.

Only single-material elements accept new factors. Multi-material assemblies need explicit per-material allocation; a single factor is not spread across layers. Apply appropriate data at the material contribution level when a supported assembly enrichment contract becomes available. Reconnect the pre-enrichment element to discard all scenario assignments.

## C1–C4 and partial C

`RAW Element → RAW End-of-Life Scenario → RAW Element GWP (C)`

Complete C requires compatible C1, C2, C3 and C4, or an existing valid complete C aggregate. Existing C3/C4 can be combined with evidenced C1/C2 on a resolved matching context. C1/C2 are not derived from a waste route. A partial set remains inspectable on the element and in Result module availability, but the combined C GWP is **null**, never a partial number presented as complete C. No partial-C numeric output is added.

## D and beyond-boundary reporting

`RAW Element → RAW Reuse / Recovery Scenario → RAW Element GWP (D)`

D is an explicit **net benefit/load factor**, can be negative, and is never clamped. The optional rates are fractions from 0 to 1; their sum must not exceed 1. Invalid rates reject the proposed assignment. Rates and Credit Method are stored alongside an accepted factor but are **not multipliers** and do not generate a D credit. With no factor, rates alone do nothing and produce a diagnostic; they are not represented as a calculated scenario.

The element marks D as beyond the system boundary. D and A1–D Result diagnostics retain: **“D is beyond the system boundary and should also be reported separately.”** Run a separate D scope branch when reporting A1–D. No new calculator outputs are added.

## Whole-life integration

`RAW Element → RAW Physical Properties (if needed) → RAW End-of-Life Scenario → RAW Reuse / Recovery Scenario → RAW Element GWP`

- A1–A3 follows the existing arithmetic and factor precedence unchanged.
- C/D scopes combine source and effective element assignments only when quantities and context permit.
- A1–C additionally requires complete A1–A3, A4, A5 and B1–B7. C enrichment alone does not complete it.
- A1–D requires the same plus D, and keeps its beyond-boundary notice.
- Missing, ambiguous, unsupported or incompatible stages withhold the selected GWP. Quantities remain available independently.
- Existing strict cross-dataset compatibility checks remain active. Unresolved method warnings are retained.

## Physical Properties review

`RAW Element → RAW Physical Properties → RAW Element GWP`

The kg-based Clay powder case uses volume 0.00756 m³ but lacks source density. Before enrichment its mass and kg-based GWP are unavailable. With evidenced density ρ, mass is `0.00756 × ρ`; with measured mass M, mass is M and needs no density. GWP uses the original declared mass quantity and source factor.

Measured mass takes precedence; source density is preserved and effective density replacement requires Override Existing. Zero, negative or nonfinite overrides are rejected independently. Source Note remains provenance only and its absence is warning-only for physical properties. Source density continues to show “Not supplied” in the material summary. Quantity summaries now also withhold overflowed mass rather than returning infinity. See RAW Physical Properties (supporting internal reference retained privately).

## Structured diagnostics

| Area | Codes |
| --- | --- |
| Physical | `physical.density_override_added`, `physical.mass_override_added`, `physical.override_blocked_existing_density`, `physical.measured_mass_precedence`, `physical.source_note_missing`, `physical.invalid_density`, `physical.invalid_measured_mass`; existing no-override, allocation and alignment notices remain |
| C | `scenario.c_added`, `scenario.c_partial`, `scenario.c_missing_modules`, `scenario.c_override_blocked`, `scenario.c_source_note_missing`, `scenario.c_unit_unsupported`, `scenario.c_context_unresolved` |
| D | `scenario.d_added`, `scenario.d_negative_value`, `scenario.d_missing`, `scenario.d_beyond_boundary`, `scenario.d_override_blocked`, `scenario.d_source_note_missing`, `scenario.d_context_unresolved` |
| Defensive validation | `scenario.c_invalid_factor`, `scenario.d_invalid_factor`, `scenario.d_invalid_rates`, `scenario.d_unit_unsupported`, `scenario.d_factor_required`, `scenario.c_allocation_required`, `scenario.d_allocation_required`, `scenario.input_alignment` |

Result carries diagnostics and element provenance for future RAW Inspector. Guidance distinguishes missing quantity, missing module, unsupported basis, protected factor and unresolved context. No Inspector or report component is added or unhidden.

## Deferred

Transport, Construction, Replacement, Module Factor Override, Inspector, graphs and new selectors are not implemented. Also deferred: automatic waste routes, recovery-credit calculations, differing factor bases, multi-material allocation, partial-C numeric reporting and source-aggregate replacement.
