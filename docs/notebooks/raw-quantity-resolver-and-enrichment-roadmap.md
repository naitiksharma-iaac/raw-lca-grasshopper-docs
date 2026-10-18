# RAW quantity resolver and enrichment roadmap

> **Public reading edition · 13 October 2026.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


**13 October 2026. Planning only; no implementation in this task.** Read alongside the [project research](raw-project-fabrication-research.md), [category proposal](raw-material-category-roadmap.md) and [fabrication contracts](raw-fabrication-component-roadmap.md).

## Current implementation, not a blank slate

The palette allowlist (supporting internal reference retained privately) currently exposes Materials, Elements, Impact and Visualisation. Materials contains the Danish/German selectors, Custom Material and Dataset Info. Elements contains RAW Element, Wall Assembly and Rectangular Section. Impact contains Element GWP, Physical Properties, End-of-Life Scenario and Reuse / Recovery Scenario. Colour Preview and Legend are visible under Visualisation. Inspector, transport, construction, replacement and process-specific components are not implemented in the visible palette.

The quantity calculator (supporting internal reference retained privately) accepts kg/t, m², m³ and item under explicit conditions. RAW Element (supporting internal reference retained privately) already derives volume from surfaces with thickness and curves with cross-sections. **Linear geometry support is not direct support for a factor per metre**: the impact path currently accepts Area/Volume/Mass/Count bases, not a direct Length basis. Do not advertise the latter as implemented.

Physical Properties (supporting internal reference retained privately) already keeps source data immutable, prefers measured mass, validates positive finite numbers and protects existing density unless explicitly overridden. It rejects ambiguous multi-material allocation. C/D scenarios (supporting internal reference retained privately) already accept evidenced factors on the exact source basis, retain history and protect existing observations. They are factor assignments, **not waste-route or recycling-credit simulators**. Unresolved context leaves new factors pending; descriptive Source Note alone does not make them calculable. D rates are metadata and cannot generate a credit.

Existing test source covers these behaviours in PhysicalPropertiesTests (supporting internal reference retained privately), LifecycleScenarioTests (supporting internal reference retained privately), SolidSurfaceElementTests (supporting internal reference retained privately) and ElementGwpTests (supporting internal reference retained privately). Tests were inspected, not rerun during this documentation task.

## Dataset constraints that determine priority

Counts below reuse the 13 October audit evidence (supporting internal reference retained privately). The database hash and record/unit counts were independently checked read-only for this research; the full calculator probe was not repeated.

- Danish: 441 records; A1–A3, C3, C4 and D are present, but A4/A5/B/C1/C2 are absent.
- German: 5,079 records with broader but uneven coverage. Numeric A4 exists on 2,904 and A5 on 2,963 records; any B on 2,539; complete B1–B7 on 1,556. Complete C1–C4 exists on 3,118; D on 4,337.
- 251 records have usable A1–A3 factors but need density or measured mass for the audit's quantity route. This does not mean every missing density blocks every unit basis.
- 179 records have unsupported direct units: 121 m, 49 MJ and 9 kg·km. Only 115 of those also had usable A1–A3 factors in the original probe. These are different denominators.
- 1,496 German records support complete-scope A1–C and A1–D arithmetic with matching quantities in that probe. All 5,520 local source records retain unresolved LCIA method metadata. Arithmetic completeness is not verified whole-life assessment or permission to aggregate incompatible records.

This favours a safe metre route and physical evidence ahead of many new scenario inputs. Energy and freight records should feed future process/scenario services, not an automatic geometry conversion.

## Quantity resolver rules

### Resolution sequence

1. Read the immutable dataset's declared **amount, unit, quantity kind and reference basis**, selected GWP indicator and scope. Preserve raw units; explicitly approved unit aliases may be canonicalised internally without rewriting the record.
2. Inspect element quantities and their origin: measured, geometry-derived, source density or user physical override. Preserve tree path, index, geometry identity and material-part identity.
3. Resolve a compatible quantity path. Never infer a product section, count, density, thickness, moisture condition or energy carrier from family/name alone.
4. Divide the resolved quantity by the declared amount. For example a factor per 1,000 kg uses `mass / 1000`, not `mass × factor` without the denominator. Explicit kg↔t conversion is an exact unit scale, not a guessed physical property.
5. Check factor availability and module/context compatibility separately. A valid mass does not repair missing GWP. Select a valid aggregate or its complete leaves without adding both.
6. Return an available value or null with structured reasons. Keep known geometry/quantities even when GWP is unavailable. Never repair missing values using zero, absolute value or last-item broadcasting.

| Factor basis | Allowed path | Enrichment needed | Block conditions / safeguards | State |
|---|---|---|---|---|
| kg or t | Measured mass; otherwise established mass; otherwise V × evidenced ρ | Physical Properties for density or measured mass; thickness/section if V absent | Nonfinite/nonpositive physical override, unknown condition, ambiguous assembly allocation; measured mass wins | Existing basic routes; strengthen evidence/diagnostics |
| m³ | Closed solid volume; one reference area × explicit thickness; length × verified section area | Element Surface Thickness or Linear Cross-section | Open solid, missing thickness/section, invalid scale; no automatic inversion from mass/density | Existing |
| m² | Matching reference/product area | Select correct reference surface or layered system | Entire solid skin is not product area; no rescaling 4 mm product GWP by a 40 mm slider; product mismatch remains visible | Existing |
| m | Product/centreline length matching declared profile and specification | Linear quantity path; profile evidence when needed | Do not scale factor with section area unless source explicitly permits it; no area-to-length guess | **Proposed next** |
| item | Explicit count with a defined item identity | Unit/count mode and product specification | Geometry list is only an item count when one object represents one product; PV array plane is not one PV module | Existing basic count route |
| kWh / MJ energy service | Metered energy, or effective kW × hours; exact 1 kWh = 3.6 MJ when carrier/basis match | Future Machine Energy with source factor and boundary | Electricity cannot be substituted for heat; no nameplate-only measured claim; process factor cannot scale a solid directly | Proposed process route, not current Element GWP |
| kg·km / t·km transport | Carried mass × distance with explicit factor denominator and mode | Future Transport Scenario | Missing distance/mass/mode, wrong payload unit, boundary overlap; kg·km is not kg | Proposed scenario route |
| Other / unclear | None by default | Dataset Info; obtain documented conversion or choose compatible dataset | Missing/ambiguous unit, unequal declared/reference basis without verified mapping, unsupported service unit | Unavailable, actionable diagnostic |

Surface example: Clay powder at `A = 1.89 m²`, `t = 0.004 m` gives `V = 0.00756 m³`. Its kg factor still needs evidenced density `ρ`, giving `m = 0.00756ρ`, or measured mass directly. No numerical density is proposed. Glass declared per m² instead uses `A / declared area`; thickness can change reported volume without changing this product factor.

Solid example: closed volume `V` plus source or evidenced density supports a kg factor; missing density does not block a matching m³ factor. Solid surface-area sum cannot substitute for a glazing reference area.

Linear example: `L × section area` gives volume and, with density, mass. Variable stock needs measured volume or an explicitly validated varying-section integration, not one nominal rectangle. A future per-metre factor needs only the matching product length for arithmetic, with profile compatibility checked independently.

### Evidence and precedence contract

Keep separate origins: **source dataset**, **user physical override**, **lifecycle scenario assignment**, **machine/process estimate**, and **synthetic/future placeholder**. Placeholder data must never be an available production result. Provenance should include evidence reference, author/date, unit and state, affected element/part, method/context identity, version and uncertainty/status.

Measured mass is per element, not per branch. User density does not replace source observations. For assemblies, enrich material parts before aggregation; do not distribute a measured total mass among layers without an explicit allocation basis. Invalid newly supplied overrides should fail visibly without destroying valid existing quantities. A source note is evidence text, not scientific verification.

No new standalone resolver component is recommended initially. Implement a shared internal service used by RAW Element/GWP/guidance, preserving stable public ports. A later inspector can expose its resolution trace.

## Diagnostics and future Inspector contract

Preserve existing codes; extend with structured context rather than renaming them casually. Each issue needs code, severity, element/part/path/index, dataset reference, scope/module, missing input, observed/required unit, evidence origin, blocking/advisory status and recommended component/action. Separate **quantity-ready**, **factor-ready**, **context-compatible**, **scope-complete** and **inventory-complete** states.

| Existing / proposed code family | Meaning and action |
|---|---|
| Existing `element.density`, `element.thickness`, `element.volume_basis` | Supply physical evidence or the required geometry quantity. Missing density is advisory for valid m²/m³ arithmetic, blocking for a missing mass route |
| Existing `element.unit`, `element.declared_basis`, `element.reference_basis`, `element.quantity_basis` | Unsupported/missing basis; inspect source. Do not rename the unit to bypass it |
| Existing `physical.*` | Added density/mass, blocked override, precedence, missing note, invalid value, no override, assembly allocation required |
| Existing `element.gwp_missing`, `element.gwp_scope`, `element.gwp_indicator`, `element.method`, `element.gwp_context` | Distinguish no factor, incomplete module, wrong indicator and unresolved/conflicting context |
| Existing `scenario.c_*`, `scenario.d_*`, `element.module_d` | Missing/partial C, evidence/basis/context rejection, override protection, D beyond boundary |
| Proposed `quantity.length_required`, `quantity.profile_mismatch`, `quantity.condition_mismatch` | Direct m route or condition-specific density/profile cannot yet be justified |
| Proposed `quantity.count_basis_ambiguous`, `quantity.area_basis_ambiguous` | Explain count/reference-face ambiguity without choosing for the user |
| Proposed `process.energy_missing`, `process.factor_missing`, `process.boundary_overlap`, `process.mass_balance`, `process.allocation_required` | Keep fabrication estimates unavailable until evidence and boundaries match |
| Proposed `evidence.pending`, `evidence.licence_unknown` | Missing confirmation is explicit; no factor release or scientific approval implied |

Current `ElementGuidance` still recommends hidden Coverage Check and sometimes old Layer/Assembly workflows. Updating those messages to visible Element/Physical Properties/Dataset Info paths is a near-term documentation/UI-guidance task; do not unhide old reporting or build Inspector as a workaround. Retain deep Result diagnostics for later use.

## Lifecycle loops and enrichment contracts

All enrichment components take and return **Elements**, preserve tree/list alignment and keep the source material immutable. RAW Element GWP keeps one Elements input. Typed diagnostics travel with the enriched object and Result; warnings do not become extra calculator ports.

| Scope | Current path / missing-data behaviour | Enrichment dependency |
|---|---|---|
| A1–A3 | Matching quantity × source A1–A3 or compatible A1/A2/A3; unresolved-source warning remains | Physical Properties if mass missing; Element thickness/section for volume |
| A4 | Source A4 works where usable; absent stays null | Future Transport with compatible factor, payload, distance and boundary |
| A5 | Source A5 where usable; absent stays null | Future Construction with explicit site process and waste allocation |
| B | Current B scope requires complete B1–B7 or valid aggregate; B4 alone is not full B | Replacement can address B4 only; other B modules need source/scenario evidence or a reviewed scope design |
| C | Complete compatible C1–C4/valid aggregate required; partial C remains identified but combined C withheld | Existing End-of-Life accepts evidenced missing leaves, pending resolved context |
| D | Preserve signed source/assigned value; warn beyond boundary; missing null | Existing Reuse / Recovery requires explicit factor, not rates alone |
| A1–C | All required A/B/C groups; do not infer unreported stages are zero | Physical, C and later A4/A5/B where needed |
| A1–D | A1–C plus D; retain separate D and beyond-boundary diagnostic | Above plus D evidence |

User-declared zero is allowed only as an evidenced numeric observation on a valid basis/context; missing is never zero. A genuinely not-applicable stage needs a future explicit justified status contract, not an empty value silently promoted to zero.

### Component contracts and priorities

| Component / category / priority | Purpose and when used | Inputs → outputs | Logic, limitations and diagnostics | Evidence dependency |
|---|---|---|---|---|
| Material organisation / Materials / **Now**, extend selectors | Find relevant stock/product and supported source factor | Existing selector filters + proposed facets/search → same RAW Material | Overlay categories only; no merging factors; flag mapping ambiguity and role mismatch | Curated source/category rules and preserved identity |
| Shared quantity resolver / internal / **Now** | Explain and choose evidenced quantity path | Element quantities + material basis → resolution trace/status used by existing components | Rules above; no extra palette component initially; `quantity.*` plus existing codes | Typed units, profile/condition metadata |
| RAW Physical Properties / Impact / **Now**, strengthen existing | Mass absent for kg/t; actual measured mass available | Elements, Density kg/m³?, Measured Mass kg/element?, Source Note?, Override Existing=false → Elements | Measured mass first; protect source density; reject invalid/ambiguous assembly overrides; `physical.*` | Positive finite value plus evidence/condition; missing note warning does not certify evidence |
| Thickness / Layer guidance / Elements / **Now**, reuse existing | Surface needs volume/mass | Existing Element Thickness or Wall Assembly layers; proposed validation receives Elements + thickness/evidence only if needed → Elements | Do not duplicate visible components before a real gap; conflict with assembly thickness must be explicit; `element.thickness`, proposed condition/conflict codes | Actual product/layer thickness; no m² factor rescaling |
| Section guidance / Elements / **Now**, reuse Section | Curve needs volume/mass | Existing Rectangular Section dimensions or verified section → RAW Element Linear | Derive cross-section area; variable stock needs appropriate volume route; no nominal-size guesses | Section geometry/units, member specification |
| RAW End-of-Life Scenario / Impact / **Next**, review existing | Missing source C leaves and evidenced additions | Elements, C1?, C2?, C3?, C4?, Factor Basis?, Waste Route?, Source Note?, Override Existing=false → Elements | Assign source-basis factors; partial C withheld; source preserved; `scenario.c_added/partial/missing_modules/override_blocked/source_note_missing/unit_unsupported/context_unresolved` | Source Note required, matching resolved method/indicator; route label alone supplies no factor |
| RAW Reuse / Recovery Scenario / Impact / **Next**, review existing | Explicit net D source/scenario factor | Elements, D Factor?, Basis?, Reuse/Recycling/Recovery Rates?, Credit Method?, Source Note?, Override Existing=false → Elements | Signed D; no automatic multiplication by rates; missing null; `scenario.d_*`, beyond-boundary warning | Evidenced net-credit method and matching context; no double credit with material recycled content |
| RAW Transport Scenario / Impact / **Later** | No applicable source A4; separately defined transport event | Elements, Distance, Mode, Factor + basis/context, Load Factor?, Source Note → Elements | Payload × distance × compatible factor; no repeated load-factor correction already embedded in factor; proposed `transport.mass_missing/distance_missing/factor_missing/boundary_overlap` | Route, mode, evidence, factor units and included return/occupancy |
| RAW Construction Scenario / Impact / **Later** | Additional site installation/waste | Elements, Installation Factor?, Waste Rate?, Site Process?, Source Note → Elements | Explicit measured/site burdens; waste convention defined before scaling procurement; proposed `construction.waste_basis/factor_missing/double_count` | Site boundary and denominator; never automatically multiply all A1–A3 by an unspecified loss percentage |
| RAW Replacement Scenario / Impact / **Later** | B4 replacements or separately defined repair event | Elements, Service Life, Study Period, Count or reviewed policy, Source Note; explicit event factors if needed → Elements | No inferred cycles; repair differs from replacement; B4 does not complete all B; proposed `replacement.policy_missing/service_life_missing/scope_partial` | Timing, functional equivalence, included removal/transport/production and terminal-event rule |
| RAW Module Factor Override / Impact / **Later, advanced** | Expert missing factor with independently traceable evidence | Elements, module, factor, declared basis, full context, provenance, explicit override → Elements | Never default workflow; validate compatible indicator/method, history and source protection; proposed `override.context_conflict/evidence_missing/basis_mismatch` | Provenance mandatory, approved scope and data licence; cannot “resolve” unknown source by text alone |
| Colour Preview / Legend / Visualisation / **Now**, existing | Communicate selected Result | Current Result/geometry/values/bounds/mode → preview, colours and legend | Preserve missing-data neutral state; valid denominators only; keep scope labels | Result quantities/context; no calculation edits |
| Material/category/process graphs / Visualisation / **Later** | Compare compatible contributions | Results + group key → graph geometry, labels, values | Explicit unavailable bucket, compatibility/completeness and contribution-type separation | Stable process ledger and aggregation rules |
| RAW Inspector / Impact or Visualisation / **Later** | Explain any RAW object's structured issues | Data → Status, Issues, Recommended Actions | Rule-based first; optional LLM paraphrases facts only; no invented density/factors | Stable diagnostic schemas and tested recommendations |

Example chains:

```text
Selector → Element Surface + Thickness → Physical Properties → Element GWP
Selector → Element Linear + Section → Element GWP
Element → End-of-Life Scenario → Element GWP [C]
Element → Reuse / Recovery Scenario → Element GWP [D; report separately]
Element → future Machine Energy/process event → compatible module contribution → Element GWP
```

The last chain is planned; current Elements cannot be assumed to accept arbitrary process-energy ledgers. See the [fabrication roadmap](raw-fabrication-component-roadmap.md) for the proposed typed contract.

## Practical implementation order

### Next 1–2 weeks, subject to development approval

1. Review category overlay examples and factor-role separation; keep selector UI and canonical records stable. Resolve misleading energy/MEP classification and preserve multilingual search.
2. Write the shared quantity-resolution specification and regression matrix. Add direct m only after profile/length and declared/reference-basis rules are reviewed. Do not introduce MJ or kg·km geometry fallbacks.
3. Strengthen Physical Properties evidence/condition messages, alignment and multi-part guidance; reuse existing Thickness and Section. Remove recommendations that require hidden legacy UI.
4. Verify real Clay powder, m² glass, m³ blocks, a per-metre product, item count and unsupported MJ/transport cases. Compare A1–A3 outputs unchanged where already valid.

### Next development phase

Review C/D assignments with resolved evidence fixtures and unresolved real-source cases. Document why pending factors remain unavailable; review aggregate precedence, provenance history and no-double-credit rules. Obtain source method metadata rather than relaxing compatibility. Then specify A4 and A5; define repair versus B4 and full-B semantics before Replacement. Keep quantities/material/process contributions distinct.

### Longer term: fabrication-aware research

Collect measured stock/process events from one reclaimed timber operation and one printed/biobased operation. Implement shared Machine Energy and mass-balance services first; specialise only where measurements justify it. Add graphs after stable contributions, advanced overrides after evidence review, and Inspector after codes stabilise. Dynamic carbon, prospective backgrounds and machine-wear allocation remain separate research features pending Tanya's methodological approval.
