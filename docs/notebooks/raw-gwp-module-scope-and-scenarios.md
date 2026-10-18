# RAW Element GWP and scenario enrichment

> **Public reading edition · Historical development snapshot.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


## Responsibilities and migration

Quantity adapters (RAW Element, the legacy Surface/Volume adapters, RAW Linear Element and RAW Wall Assembly) measure geometry and produce environmental Elements. They do not calculate impacts. Planned scenario components enrich those Elements upstream. RAW Element GWP consumes just **Elements** and uses the existing common ImpactCalculator. Coverage Check and Result Table explain the result.

RAW Element GWP is a new RAW LCA / Elements component, nickname **Element GWP**, GUID `b26a5c40-423b-4c9f-9de2-5e82bd94cd90`. Its description is “Calculates element-level Global Warming Potential for the selected lifecycle module scope.” The old RAW Element Impact keeps GUID `a9e547a8-b99e-40e1-9d46-28022d8acbc8`, its ports, and its default A1–A3 calculation. It is hidden from the palette but continues to load saved definitions. No automatic wire migration: place the new component and reconnect by name. This avoids assigning an old totals wire to a new per-element output.

## Stable component schema

Input: **Elements** (tree).

Outputs, always in this order:

1. **Result** — one ElementImpactResult per branch, including scope and diagnostics.
2. **Element GWP** — one value or null per input element, kg CO₂-eq.
3. **Element Mass** — one value or null per input element, kg.
4. **Element Volume** — one value or null per input element, m³.
5. **GWP Unit** — `kg CO₂-eq`, once per branch.
6. **Module Scope** — selected full scope label, once per branch.

Paths and order are retained. Invalid input items invalidate that branch and give aligned null numeric outputs plus an input diagnostic in Result; they are never silently dropped to obtain a partial total. Known mass and volume remain available when only the selected GWP modules are missing. Scope changes do not alter the number/order of ports. They update the footer, tooltips, Module Scope and Result. Selection is saved as `GwpModuleScope`; absent/invalid saved selection defaults to Product.

Totals are deliberately absent from the calculator's ports. Grasshopper Mass Addition can sum compatible, complete lists, but **does not check RAW context compatibility and may ignore nulls**. Check Result with RAW Coverage Check before treating such a sum as a complete total. Result retains the strict total for Result Table; individual source factors do not establish comparability across unresolved datasets.

## Scope requirements

| Menu mode | Required source coverage |
| --- | --- |
| A1–A3 Product stage (default) | One valid A1–A3 aggregate, otherwise all A1, A2, A3 |
| A4 Transport | A4 |
| A5 Construction / installation | A5 |
| B Use / replacement stage | B1–B7, or a B aggregate explicitly covering those leaves |
| C End-of-life stage | C1–C4, or a C aggregate explicitly covering those leaves |
| D Beyond system boundary | D; negative and explicit zero values retained |
| A1–C Whole life excluding D | Complete product stage, A4, A5, B and C |
| A1–D Whole life including D | Complete A1–C plus D |

All eight modes are implemented for existing source factors. No scenario assumptions or new factors are synthesized. Availability depends on each dataset. A dataset containing only C3/C4 cannot yield a complete C total: Result identifies C1/C2 as unavailable. There is no automatic “not applicable = zero” policy. B does not infer reference service life, replacements, energy or water use. D produces a warning-only diagnostic requesting separate reporting even when included in A1–D.

Only resolved EN15804 module records are used. B/C aggregates must explicitly list the correct leaf membership with consistent vocabulary. Supported aggregates take precedence over leaves; missing/ambiguous aggregates do not silently fall back. Other aggregate codes and partial aggregates are not decomposed by guesswork. Distinct GWP definitions, units or module vocabularies cannot be summed within a scope. Existing declared-unit conversion, density and method/context checks still apply. A1–A3 numerical behavior is unchanged. GWP is the only indicator; no AP/EP/ODP/POCP/ADP.

Missing observations remain null, explicit zero remains zero, and original datasets/units/IDs/modules are unchanged. Source LCIA method warnings remain visible. The result carries SelectedIndicator=`GWP`, SelectedScope, ModuleScope, per-part Available/Unavailable module lists, pinned quantity references, context diagnostics and original Elements. Unavailable includes invalid/ambiguous coverage, not only absent observations. Coverage and table headings follow the selected scope.

RAW Dataset Info continues inspecting source A1–A3 data; it is not a selected-scope report. Advanced Breakdown/Compare/Candidate Logger currently assume A1–A3: they explicitly reject other scopes rather than mislabel values. Extending those tables and JSON export scope metadata is a separate follow-up.

## Planned scenario components — documentation only

No scenario component or placeholder calculation is shipped in this change. Contracts are intentionally not frozen until factor provenance, basis and conflict rules are implemented and tested.

| Planned component | Inputs | Output | Required implementation decisions |
| --- | --- | --- | --- |
| RAW Transport Scenario | Elements; Distance; Transport mode; optional transport/fuel factor | Elements | Distance unit, mass basis, load/return assumptions, factor unit such as kg CO₂-eq/(t·km), pinned source and compatible method |
| RAW Construction Scenario | Elements; Waste rate; optional installation factor | Elements | Rate definition, installed/purchased quantity distinction, loss attribution, avoid counting production and disposal twice |
| RAW Replacement Scenario | Elements; Reference service life; Building study period; Replacement count/policy | Elements | Explicit policy and end-point convention; distinguish B4 from other B modules; never infer the whole B stage from replacements alone |
| RAW End-of-Life Scenario | Elements; Waste route; Demolition factor; Processing/disposal scenario | Elements | Separate C1–C4 accounting, route allocation, transport basis, evidence and boundary consistency |
| RAW Reuse / Recovery Scenario | Elements; Reuse rate; Recycling rate; Recovery credit method | Elements | Mutually consistent allocations, processing burdens, substitution quality and explicit D credit method; no automatic negative credits |

One input on RAW Element GWP keeps quantity preparation, scenario authoring and GWP calculation independently testable. It also lets users chain only the assumptions they actually have.

### Proposed contract and rollout

1. Add an immutable enriched-element envelope containing the unchanged EnvironmentalElement and an ordered set of versioned scenario assignments. Preserve element identity, tree path and original dataset references; plain existing Elements remain valid input.
2. Each assignment records target leaf modules, parameter values and units, factor/dataset references, evidence, method/indicator identity, declared basis, study period where relevant, and explicit source-vs-scenario precedence. Proposed contribution records include availability and calculation lineage. An absent contribution must never be represented as numeric zero.
3. Add one explicit resolver in the common engine. Conflicting source and scenario contributions to the same module are blocked unless an evidenced replacement policy is selected. Do not add both. Split/aggregate coverage must be disjoint; different scenario chains may not overwrite each other silently.
4. Implement Transport first with a documented factor basis and dimensional tests. The scenario enriches Elements; the common engine evaluates the supported contribution with pinned provenance. Validate source A4 conflicts, missing density/mass, units and round-trip serialization before exposing a component.
5. Implement construction, replacement, C routes and D only after their policies and module attribution have regression fixtures. Replacement never marks all B complete; end-of-life never implies D. Freeze each contract after a native host save/reopen test.
6. Extend Coverage, Result Table and later decision/report tools to show source versus scenario contributions, scenario assumptions, completeness and D separately. Test repeated enrichment, immutable inputs, tree broadcasting, invalid entries, mixed contexts and undo/save/reopen at each stage.

Future example (scenario components below are **planned**, not available now):

`RAW Volume Element → RAW Transport Scenario → RAW End-of-Life Scenario → RAW Element GWP`

Current executable example:

`RAW Element (Solid/Surface/Linear) → RAW Element GWP → RAW Coverage Check / RAW Result Table`

Adding transport and end-of-life alone does not make A1–C complete if A5 or B are still missing.
