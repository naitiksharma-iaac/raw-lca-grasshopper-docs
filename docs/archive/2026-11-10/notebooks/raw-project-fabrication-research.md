# RAW project and fabrication research

> **Public reading edition · 13 October 2026.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


Research snapshot: **13 October 2026**. Documentation only. Findings describe inspected source code and records, not a newly validated LCA. No production code, material records or frozen Vertikal files were changed. The companion next development plan (supporting internal reference retained privately) separates recommendations from unanswered meeting questions.

## Evidence and scope

| ID | Evidence inspected | What it establishes |
|---|---|---|
| T1 | [Tanya research repository, pinned revision](https://github.com/TanyaTsui/lca_circular_biobased/tree/8d4499481696dad80c948dbc5050be7f837ec41c) | Research model and repository browser implementation |
| T2 | [01_dataPrep.ipynb](https://github.com/TanyaTsui/lca_circular_biobased/blob/8d4499481696dad80c948dbc5050be7f837ec41c/notebooks/260813_lcaModel/01_dataPrep.ipynb), [02_model.ipynb](https://github.com/TanyaTsui/lca_circular_biobased/blob/8d4499481696dad80c948dbc5050be7f837ec41c/notebooks/260813_lcaModel/02_model.ipynb) | Data preparation, inventory arithmetic and research assumptions |
| T3 | [Public explorer](https://tanyatsui.github.io/raw_impact_explorer/), [deployed source revision](https://github.com/TanyaTsui/tanyatsui.github.io/tree/263437bd773f87b7a70ebc37d9e3a5058101ee5f/raw_impact_explorer) | Current browser model, controls, presets and bundled catalogue |
| R1 | [Official RAW project description, Stuttgart](https://www.intcdc.uni-stuttgart.de/research/associated-projects/ap-43/), [CORDIS project 101161441](https://cordis.europa.eu/project/id/101161441) | RAW is the resource-aware architecture research project focused on waste-sourced and fast-growing biobased resources; variable material properties and adaptive fabrication are central |
| R2 | [RAW–CITA Timber Workshop](https://adk.elsevierpure.com/en/activities/the-raw-cita-timber-workshop-2/) | Documented reclaimed-timber work: CT characterisation, registration/grading, Grasshopper allocation/joints and robotic milling |
| L1 | Existing source-model audit (supporting internal reference retained privately), questions for Tanya (supporting internal reference retained privately), discussion notes (supporting internal reference retained privately) | Earlier source comparisons and open questions; notes do not contain confirmed answers |
| L2 | [Dataset audit](raw-data-enrichment-audit-and-roadmap.md), machine-readable evidence (supporting internal reference retained privately) | Local source coverage and quantity gaps |
| L3 | Frozen Vertikal validation summary (supporting internal reference retained privately), component audit (supporting internal reference retained privately) | Local technical test of building-element workflows, with explicit modelling assumptions |

The live `index.html`, `calc.js`, `app.js` and `presets.js` matched the pinned T3 files byte-for-byte. Inspection was read-only; the online research-log submission was not invoked. Notebooks were parsed, not executed: Brightway databases, upstream processed inputs and the separate binder inventory are not all reproducibly supplied here. Numerical parity with the browser is therefore **not claimed**. The main `rawproject.eu` page was inaccessible through the web reader; R1/R2 supply the public project evidence instead.

Local inspection covered `docs/`, `examples/grasshopper/Workflow-1_Beam`, synthetic examples, the current palette, quantity/impact/scenario code and related test source. Synthetic examples are test fixtures, not material evidence. Frozen Rhino/GH files were not opened for editing or resaved.

## Tanya calculator model summary

### Input structure

The notebook describes a mass-based product recipe rather than a Rhino geometry adapter. Its example is a 1 kg biopolymer product using pea-protein binder, sawdust and seagrass; repair can also use hemp fibre. The browser exposes four editable cases: biopolymer printing/baking, reclaimed hardwood scanning/CNC, knitted hemp, and hemp/epoxy coreless winding. These are **model presets**, not evidence that every process was measured or fabricated.

The deployed catalogue contains 16 BOM material names: bark chips, cellulose reject fibres, cement, cotton fibre, epoxy fibre glue, hardwood, hemp dust, hemp fibre, lime, mechanical fasteners, pea-protein binder, peas, sawdust, seagrass, softwood and wood glue. Material acquisition choices include virgin, co-product, recycled and wild-harvested, subject to availability for each material. Additional factor roles cover electricity, machine wear, transport, waste treatment and avoided burdens. These are separate from the Danish/ÖKOBAUDAT material library.

| Input group | Fields / controls | RAW implication |
|---|---|---|
| Product / BOM | Target kg; material; source type; mass percentage | Preserve composition and acquisition provenance; geometry-derived mass can eventually feed a BOM model |
| Ordered production chain | Process name; machine mass; power; batch material and duration; machine lifetime; retained percentage; machine source | Model process events separately from purchased material factors |
| Electricity | Location; baseline or prospective background | Require geography, year, method and electricity-factor identity |
| Repair / life | Enable repair; product fraction repaired; repair count; expected life; extension per repair; separate repair BOM and chain | Repair is not an automatic replacement schedule |
| End of life | Composting, open/closed recycling, incineration, landfill shares | Route shares need explicit inventories and allocation rules |
| Exploration | Today/Future foreground cases, master and individual levers; independent background interpolation | Label sensitivity estimates distinctly from source observations |

The browser also supports process reordering, JSON input import/export and expandable contribution breakdowns. Background choices are baseline, `image_SSP2-L_2050` and `image_SSP2-M_2050`. The independent background slider interpolates factor scores; it is not a time-resolved emissions trajectory. Export reproducibility needs review because endpoint inputs and background do not necessarily capture every intermediate foreground slider state. No logging/integration with the external research sheet is proposed.

### Calculation structure

1. Data preparation uses Brightway, ecoinvent 3.12 cut-off and EF v3.1 mappings, with external mapping/constant sheets and a separate biopolymer-binder database. The browser uses compiled factor arrays, not a live Brightway solver.
2. Work backwards through process retention to determine feed mass. For each process, duration = required input mass / throughput; electricity = power × duration; allocated machine mass = machine mass × duration / lifetime hours.
3. Multiply BOM fractions of incoming mass by the selected material/source burden. Recycled acquisition uses an allocation/quality-ratio combination rather than assuming reclaimed material has zero burden.
4. Calculate repair material/process burdens for explicit repair events. Storage duration uses lifetime and extensions. Repair and original material can have different storage periods.
5. Calculate end-of-life treatment burdens and separate avoided-burden credits using route fractions and product-level constants.
6. Calculate experimental biogenic growth/storage and delayed-emission benefits. Virgin inputs use a GWPbio lookup; non-virgin inputs use a dynamic characterisation expression. These research benefits must not be silently added to EPD GWP or renamed module D.

This structure has **material, production, repair, treatment and benefit contributions**. It does not provide an approved mapping of all contributions onto EN 15804 A1–A3/A4/A5/B/C/D. Manufacturing electricity may belong in A3, site installation in A5 and waste processing in C3, depending on the assessed boundary; a process name alone cannot choose the module.

### Output structure

Notebook outputs include category series, climate totals, biogenic/avoided benefits and normalised research plots. The deployed model retains 25 EF category entries, including parent categories and subdivisions; these must not be added together as independent impacts. The UI presents burden/benefit/net results and material, production, repair and EOL drill-downs. RAW Grasshopper should remain **GWP-only** for this phase; future multi-indicator work needs separate contracts.

### Hardcoded assumptions and review points

| Finding | Evidence location | Decision for RAW |
|---|---|---|
| Generic 50 km collection appears in alternative-material preparation | T2 data-prep cell `36502511` and lookup branches | Do not adopt as a transport default or count it again in A4 |
| Machine power, throughput, lifetime, yields, repair schedules and routes are supplied by examples | T2 example cells; T3 `presets.js` | Treat as example assumptions, not equipment specifications |
| Heat/electric recovery efficiencies and primary quality ratio are constants | T3 `calc.js` constants and `computeEolBenefits` | Require reviewed methods and units before reuse |
| One `RAW product` set of EOL constants represents the mixture | T2/T3 EOL logic | Establish composition-specific applicability; no automatic composite recycling credit |
| `absSeries` removes factor signs in EOL treatment | T3 `computeEolBurdens` | Do not copy; preserve signed observations and investigate intended semantics |
| Missing burden lookup starts from zeros; duplicate categories overwrite | T3 `getUnitBurdenAt` | RAW must return unavailable/ambiguous, not zero or last-row-wins |
| Retention scales the whole mixture | T2/T3 process chain | Separate evaporation, dry solids, scrap and recovered offcuts before production use |
| Carbon applied to initial incoming masses, including process losses | T2 sequestration cells; T3 carbon functions | Review losses, disposal timing, carbon basis and horizon; retain as research only |
| LHV/dry-mass basis and energy-credit conversion require review | T2/T3 incineration formulas | Check factor units explicitly; do not infer MJ/kWh compatibility from a label |
| Source licence/redistribution and factor authority remain dependencies | T2 imports, compiled T3 data | Public JavaScript availability does not grant reuse rights for underlying databases |

### Notebook versus current explorer

| Aspect | Notebook / research reference | Current deployed explorer |
|---|---|---|
| Cases | One main printed-product worked model | Four presets and editable blank workflow |
| Throughput entry | Rate in kg/hour | Batch mass / batch duration, with legacy rate fallback |
| Background | Baseline preparation in inspected notebooks | Compiled baseline + two prospective backgrounds; prospective build provenance needs its generating notebook |
| EOL in burden total | `total_burdens` cell `0c2f2c55` adds material, production and repair | `calc.js` `totalBurdens` also adds EOL treatment |
| Missing benefit parameters | Notebook can raise an error | Browser can skip the contribution |
| Empty process chain | Not the main worked path | Browser explicitly uses target product mass as input mass |
| Presentation | EF tables and plots | Interactive comparisons and contribution drill-downs |

These differences mean the source comment claiming a one-to-one port is not enough to certify parity. The research repository browser and the separately deployed browser must also remain separately versioned. Tanya should select the authoritative calculation specification before any port.

**Suitable for Grasshopper now:** explicit quantities, separate material/process contributions, evidence-bearing inputs, source identity, aligned elements and actionable diagnostics. **Research/reference only:** carbon-delay credits, prospective blending, quality-allocation formula choices, machine-wear allocation and unreviewed EF-to-EPD/module mapping.

## RAW project and fabrication workflow map

Evidence levels: **documented activity** (R2), **calculator case** (T3), **local validation** (L3), **candidate** (not established as a RAW project). Proposed modules below are conditional on the assessed production/site/use/EOL boundary.

| Workflow / evidence | Geometry and likely LCA unit | Quantities and physical evidence | Process evidence | Modules potentially affected | RAW path / requirement |
|---|---|---|---|---|---|
| Reclaimed timber grading, allocation and milling — documented activity | Irregular stock item, solid or variable linear member; kg, m³, m, item | Stock and used volume, measured mass, moisture-qualified density; defects and recovery partitions | Cut/trim/plane/mill time, power or metered energy; stock origin and grading record | Acquisition/production; A4 if applicable; C/D only with route rules | Element + Physical Properties now; stock/preparation and offcut contracts next research |
| Hardwood CNC — calculator case | Scanned solid/member; kg or m³ | Input/output mass, section variation, offcuts | Scan/mill event energy, yield and batch allocation | Production or site stage explicitly assigned | Shared Machine Energy plus CNC adapter, not preset power defaults |
| Robotic milling / adaptive fabrication — documented activity | Toolpath plus stock/finished geometry | Stock and removed volume/mass; auxiliary materials | Robot, spindle, extraction/compressor energy, setup/idle/process time | A3/A5/C conditional | Robotic Process as event wrapper over common energy/waste model |
| Robotic assembly — candidate extension | Assembly, fastener count, movement path | Component inventory/count and joining consumables | End-effector, robot/auxiliary time/energy | A3 or A5 conditional | Evidence collection first; milling evidence does not prove assembly performance |
| Biopolymer extrusion and baking — calculator case and notebook | Deposited path/solid; kg; binder/fibre BOM | Wet feed versus dry product, supports, waste, density if deriving mass | Printer and oven energy, batch mass, duration, failures, curing | Production; repair if separately defined | Printing Process + Machine Energy later; keep water and solids separate |
| Knitted hemp — calculator case | Textile surface or formed item; kg or m² | Dry fibre mass, areal mass and yarn losses | Carding/spinning/knitting energy and yield | Production; repair and C/D conditional | Fibre/textile category; generic process chain before specialist palette |
| Hemp/epoxy winding — calculator case | Paths plus composite member; kg, m, item | Fibre and resin masses; linear mass; cured mass | Winding and curing energy, tension record, losses | Production; C/D depend on actual composite route | Multi-material BOM + process events later; do not treat composite as fully recyclable fibre |
| Timber/cladding, glazing, slabs, wall layers, balconies — local validation | Surface, solid, linear, assembly; m²/m³/kg/item | Net area, thickness, section, volume, count; matching product specification | Only additional fabrication not already inside factor | Existing A1–A3 path; source C/D where available | Element / Rectangular Section / Wall Assembly → GWP |
| Clay powder — current software/data example | Surface + thickness or solid; kg | Volume exists but density/mass may not | No actual clay fabrication measured here | Source modules only | Physical Properties resolves mass; does not establish clay-printing research |
| Mycelium and other composites — candidate | Solid/panel; kg/m³/m² | Composition, moisture, density, growing substrate | Growth/drying/sterilisation inventories | Undetermined | Documentation only until RAW evidence and factors exist |

The Vertikal test has 1,401 references across 16 systems. It is a locally prepared technical workflow example, not proof of an as-built inventory or a RAW-funded fabrication project. Timber net/gross area, repeated balcony instances, schematic sheet thickness, assumed concrete dimensions and incomplete structure matter. A PV array plane is not a manufactured-panel count. Do not turn the synthetic-context test total into a project assessment. See L3 for the recorded limitations.

## Machine/process parameter requirements

**R** required for the chosen calculation route; **O** optional refinement; **P** diagnostic/provenance only; **F** future research. Required fields are conditional: metered kWh replaces power × duration; an evidenced measured mass replaces density-based inference. No numeric machine defaults are proposed.

| Process | R — calculation inputs | O — refinements | P — traceability / interpretation | F — calibration or research |
|---|---|---|---|---|
| Reclaimed timber preparation | Original/final stock quantities; offcut/waste quantities for yield; metered energy **or** effective power + time; matching energy factor; explicit allocation if batched | Cuts and cutting length when estimating time; collection distance when modelling transport separately; recoverable-offcut fraction | Stock ID/origin; reuse evidence; machine type; moisture condition (R if needed to match density/mass basis); grade/defects | Predict time from cut geometry; structural reuse grading; causal link between defects and yield |
| CNC milling/cutting | Stock/sheet dimensions or measured input; used/nested area or final mass; removed mass/area; measured time/energy route; factor | Cut length/depth, passes, feed and tool diameter for validated time estimate; reusable-offcut fraction; extraction energy | Machine/tool ID, CAM revision, dust collection route; power specification versus measured draw | Reliable toolpath-to-time/energy and nesting-to-reuse models |
| Robotics | Robot/process time and measured energy or effective power; material feed/outputs; separately used consumables | End-effector energy, path length/feed rate, idle/setup, rejected parts | Cell configuration; end-effector type; operation and batch IDs | Kinematic simulation as cycle-time predictor, motion-dependent power, failure allowance from repeated trials |
| 3D printing | Actual deposited/feed mass; support mass if present; measured energy or printer power + time; energy factor; material factors | Infill, layer height, extrusion length and bead section for validated estimates; observed failure rate; post-processing energy | Slicer version/profile, material batch, wet/dry state, reused supports | Predicted energy from slicing; material-specific drying shrinkage; probabilistic scrap without measured history |
| Winding / fibre placement | Fibre and binder masses; process and curing energy route; material/energy factors | Winding length with verified linear mass, measured waste fraction, reusable tooling allocation | Tension, speed, cure schedule, fibre/resin identity and ratio | Strength equivalence, process settings → energy; composite recovery model |

For all rows, Source Note and factor identity are required provenance for accepted process estimates even though their text does not multiply a value. Nameplate power alone is insufficient to certify consumed energy. Recovery percentages describe a material flow; they do not create an avoided-burden credit. If a parameter drives an empirical estimate, record its calibration source and uncertainty.

## Material/fabrication implications

- Keep one general Element adapter and shared quantity/evidence services; specialist fabrication wrappers should reuse them.
- Separate material composition, product form, acquisition history and process type. A reclaimed timber member can also be a panel or a linear product; “reclaimed” must not set an impact factor to zero.
- Preserve input/output mass balance, offcut identity and method boundaries before estimating savings.
- Keep process contributions independently reportable. Adding fabrication energy to an EPD that already includes it can double count production.
- See [category roadmap](raw-material-category-roadmap.md), [resolver roadmap](raw-quantity-resolver-and-enrichment-roadmap.md) and [fabrication contracts](raw-fabrication-component-roadmap.md) for the proposed implementation boundaries.