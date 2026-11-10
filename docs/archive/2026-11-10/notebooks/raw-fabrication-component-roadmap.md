# RAW fabrication component roadmap

> **Public reading edition · 13 October 2026.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


**13 October 2026 — research contracts, no new components implemented or exposed.** Evidence and limitations are in [project/fabrication research](raw-project-fabrication-research.md); quantity and lifecycle priorities are in the [resolver roadmap](raw-quantity-resolver-and-enrichment-roadmap.md).

## Product boundary

Prioritise reclaimed stock preparation and measured process energy. RAW has documented reclaimed-timber computational fabrication activity; Tanya's calculator also supplies editable printing, CNC, knitting and winding cases. A calculator preset establishes an intended modelling case, not measured factory performance. Robotics/printing/CNC wrappers should share one event, energy and material-flow model rather than independently recomputing LCA.

The workflow remains:

```text
Material → Element → physical / lifecycle / process enrichment → Element GWP → Visualisation
                               │
                     evidence + quantity/contribution ledger
```

The ledger is **proposed**, not a current API. Element GWP remains one-input and GWP-only. It should consume validated enriched data, not acquire a collection of machine sliders.

## Common process-event contract, required before implementation

Each proposed event carries an event ID, element/part references and tree positions; activity and location/date; machine/tool IDs; material input/output quantities; consumed energy and carrier; allocated share and denominator; factor reference/version/unit/context; intended module and boundary; provenance and uncertainty; diagnostics and links to original observations. It also records whether the value is measured, calculated from measured inputs, estimated or a test fixture.

Keep four independently reportable contributions: purchased-material impact, additional fabrication process, construction/use/EOL scenario and D beyond-boundary value. A factory process is not automatically A5. Before addition, record whether the product EPD already includes that process. “Additional” must identify a boundary not already counted. If this cannot be established, retain the event as pending with `process.boundary_overlap` or `process.boundary_unresolved`, not a combined GWP.

Shared rules:

- Measured energy takes precedence over an estimated power/time route; do not add both. Effective power must specify operating/idle/auxiliary coverage; rated power alone is an estimate requiring an explicit assumption.
- Exact unit scaling is permitted only within the same typed quantity: kWh↔MJ is energy scaling, not proof that heat and electricity factors are interchangeable.
- GWP contribution = compatible activity quantity / factor declared amount × factor. No factor means no contribution value; it does not mean zero.
- Batch energy requires an evidenced allocation basis (mass, units, occupied time or another reviewed driver). Allocation fractions must reconcile to the event total. Do not broadcast the full batch burden to every element.
- Stock balance distinguishes retained product, reusable offcut, chips/dust, reject and moisture/evaporation. Do not apply a whole-mixture retention percentage as though all loss were dry material waste.
- Recovered mass is a flow, not a credit. D requires a reviewed substitution/allocation method and counterfactual; never award an automatic negative factor.
- Preserve source datasets and factor history. Require explicit overwrite and compatible method/context for additions; a source-note string cannot resolve unknown LCIA metadata.
- Every output keeps input element alignment. Unmatched or rejected events remain visible as unavailable/pending, not dropped.

Proposed diagnostics below are design names, not claims of existing code. Freeze names only after contract review.

## Component contracts

### RAW Machine Energy

**Category:** RAW LCA / Impact. **Priority:** next fabrication phase, after quantity/context work and a measured pilot. **Purpose:** attach a transparent energy event without inventing consumption.

**Inputs:** Elements; Measured Energy (optional kWh); Effective Power (optional kW); Duration (optional hours); Energy Carrier; Energy Factor and declared basis/context; Location/period; Module/boundary; Batch Allocation if applicable; Source Note. Prefer a compact event object rather than exposing every advanced field as a permanent port.

**Outputs:** enriched Elements. Energy and contribution breakdown remain in the event ledger for future visualisation/reporting.

**Logic / use:** use measured kWh, otherwise valid effective kW × hours. Apply a compatible electricity/heat factor with explicit quantity conversion if required. Store energy even when GWP factor is missing. Do not infer runtime from geometry or select a country grid silently.

**Cannot fix:** missing material GWP, material density, source method context or unestablished module boundary.

**Diagnostics:** `process.energy_missing`, `process.power_time_invalid`, `process.measured_energy_precedence`, `process.factor_missing`, `process.carrier_mismatch`, `process.allocation_required`, `process.boundary_overlap`, `process.context_unresolved`, `process.evidence_missing`.

**Evidence:** meter log or operating measurement; machine/auxiliary coverage; matching grid/year and factor rights. No power value from Tanya's presets becomes a default.

**Example:** `Element → Machine Energy [metered milling event, reviewed production boundary] → Element GWP`.

### RAW Reclaimed Timber Preparation

**Category:** Impact, with stock quantity services shared with Elements. **Priority:** first specialist pilot after Machine Energy. **Purpose:** retain stock identity and account for preparation of variable reclaimed timber.

**Inputs:** Elements; Stock IDs and original stock quantities; Final Used Quantities; Measured Mass or qualified density/condition; Offcut/Reject records; Cutting/planing/milling events; Recovery route; Origin/grade/provenance. Optional cut count/length and collection event.

**Outputs:** enriched Elements with linked stock ledger; future offcut stock objects only after ownership/identity contracts are defined.

**Logic / use:** reconcile original to finished stock and loss streams, allocate actual process events, retain reusable remnants as inventory. Variable lengths/sections come from measurements; a nominal rectangular section is not silently imposed. Sorting, scanning, grading, trimming, planing, milling and joining are separate events where actually used. Structural grade remains provenance, not an LCA inference.

**Cannot fix:** absent reuse-grade evidence, unknown prior-life allocation, mechanical capacity, unspecified transport or speculative D credit.

**Diagnostics:** `stock.identity_missing`, `stock.condition_mismatch`, `stock.quantity_inconsistent`, `stock.allocation_required`, `stock.offcut_unassigned`, `process.mass_balance`, plus shared process codes.

**Evidence:** scanned/measured stock, material state/moisture, source history, accepted grading record, actual operation log and offcut destination. Distinguish prior-life source allocation from preparation burdens.

**Example:** `Stock geometry → Element → Physical Properties → Timber Preparation → Element GWP`.

### RAW CNC Process

**Category:** Impact. **Priority:** next after shared services, ideally using the same timber pilot. **Purpose:** account for a CAM/stock event and its additional consumption, not calculate machine instructions.

**Inputs:** Elements; Stock/sheet quantity; Finished/nested quantity; Toolpath metadata; Measured Time/Energy or calibrated estimate; Cut depth/passes/feed/tool diameter if estimating; Dust/chips/offcut partitions; Factor/boundary/evidence.

**Outputs:** enriched Elements with process and waste ledger.

**Logic / use:** measure stock-minus-product consistently, account for shared stock only once, use actual energy/time route. Toolpath length alone does not provide cycle time: tool changes, traverses, acceleration, setup and extraction matter. Nesting utilisation is not the same as recovered material fraction.

**Cannot fix:** missing CAM calibration, ambiguous overlap between stock allocations, missing waste route or factor context.

**Diagnostics:** `cnc.stock_missing`, `cnc.nesting_overlap`, `cnc.time_unverified`, `process.mass_balance`, `process.boundary_overlap`, `process.allocation_required`.

**Evidence:** machine and CAM version; input stock and output measurements; cycle/energy logs; destination of dust versus reusable offcuts. Toolpath fields are optional metadata when consumption is metered, required only by a validated estimation model.

**Example:** `Element → CNC Process [measured event] → Element GWP`; share Machine Energy internally instead of adding the same electricity twice.

### RAW Robotic Process

**Category:** Impact. **Priority:** later, after a recorded RAW robotic milling event. **Purpose:** describe robot and end-effector consumption as an identifiable process event.

**Inputs:** Elements; Process/robot ID; End-effector; Process/setup/idle time; Metered Energy or calibrated power states; Path/feed information; Material/auxiliary consumption; Rejects; Allocation; Factor/context/boundary; Source Note.

**Outputs:** enriched Elements.

**Logic / use:** separately account for robot, spindle/tool, vacuum/compressed air and curing equipment where applicable. Reuse CNC or winding services for material transformations. A shared event ID prevents counting a robotic milling event in both CNC and Robotics wrappers.

**Cannot fix:** unavailable cycle-time calibration or automatically assign environmental benefit to robotic rather than manual fabrication.

**Diagnostics:** `robot.end_effector_missing`, `robot.auxiliary_scope_unknown`, `process.event_duplicate`, `process.time_unverified`, shared energy/context codes.

**Evidence:** controller cycle logs, cell configuration and meter coverage. A toolpath or robot model is not a measured kWh record. Robotic assembly stays a candidate until a RAW case and consumable inventory are available.

**Example:** `Element → Robotic Process [recorded milling cycle] → Element GWP`.

### RAW 3D Printing Process

**Category:** Impact. **Priority:** later, second evidence pilot. **Purpose:** account for feed, supports, actual consumption and post-processing of a printed product.

**Inputs:** Elements; Feed/product/support masses; Composition and wet/dry state; Infill/layer height/path/extrusion metadata; Print time/energy; Observed failures or an explicit evidenced failure scenario; Post-processing/curing events; Factors/boundary; Source Note.

**Outputs:** enriched Elements with material balance and separate process contributions.

**Logic / use:** prefer measured/slicer-validated mass, not outer-envelope solid volume for an infilled print. Treat supports and failed pieces separately. Record failure-rate denominator and observation period before estimating expected consumption. Do not apply failed-print rates to a batch that already includes failed consumption. Oven energy needs batch allocation; evaporation is not automatically solid scrap.

**Cannot fix:** missing binder composition, unknown cured density, unlicensed factor data, or unreviewed biogenic storage assumptions.

**Diagnostics:** `print.mass_basis_unknown`, `print.supports_missing`, `print.failure_basis_ambiguous`, `print.moisture_balance`, `process.allocation_required`, `process.boundary_overlap`.

**Evidence:** weighed feed/product/supports, slicer/profile version, run/oven logs and composition data. Infill and layer height are diagnostic/refinement fields unless a validated model explicitly uses them. Clay printing is not established by the current Clay powder example.

**Example:** `Printed geometry → Element → measured mass → Printing Process → Element GWP`.

### RAW Cutting / Milling Waste

**Category:** Impact. **Priority:** shared service next to Timber Preparation; standalone UI only if repeated use justifies it. **Purpose:** prevent untraceable loss multipliers and retain reusable stock.

**Inputs:** Elements; Input/output mass or consistent volumes with physical evidence; Waste/offcut partitions; Measurement basis; Route/provenance; Explicit allocation policy if required.

**Outputs:** enriched Elements with mass-flow ledger; no automatic impact credit.

**Logic / use:** reconcile loss once. If `w` means loss/input, input = retained / (1−w); if `w` means extra procurement/retained, input = retained × (1+w). These definitions are different and must not share an unlabeled percentage input. Upstream material factors must not be increased twice if their boundary already includes yield losses.

**Diagnostics:** `waste.rate_basis_missing`, `waste.invalid_balance`, `waste.route_missing`, `waste.already_included`, `stock.offcut_unassigned`.

**Evidence:** measured stock/remnant/waste ledger, wet/dry basis and known factor boundary. Sawdust can be a by-product, recoverable stock or waste depending on evidence; it is not automatically all three.

**Example:** `Timber/CNC event → waste ledger → evidenced treatment/recovery scenario → Element GWP`.

### RAW Offcut / Recovery Scenario

**Category:** Impact. **Priority:** later, after stock identity and C/D contracts. **Purpose:** connect real offcut destinations to treatment or reuse scenarios without double counting.

**Inputs:** Elements; Offcut IDs/quantities; Destination/use; Recovery fraction and evidence; Treatment/transport factors if applicable; Substitution/credit method; Source Note.

**Outputs:** enriched Elements retaining recoverable inventory and separately identified C/D assignments where justified.

**Logic / use:** distinguish “available for reuse” from verified subsequent use. A single remnant cannot be both allocated to another product and credited as avoided virgin material under an inconsistent method. Reuse of a stock item is different from an assumed future recycling rate.

**Diagnostics:** `recovery.destination_unknown`, `recovery.credit_method_missing`, `recovery.double_allocation`, `recovery.quantity_exceeds_stock`, `scenario.d_beyond_boundary`.

**Evidence:** transaction/use record or clearly labelled prospective scenario, applicable allocation rules, matching factors. Negative D is supported only as an evidenced signed contribution, not inferred from reuse percentage.

**Example:** `Timber Preparation → Offcut / Recovery → GWP [C or D separately]`.

### Fibre placement / coreless winding and textile process

**Category:** Impact if later justified. **Priority:** documentation/research only for dedicated components. **Purpose:** support the explorer's hemp/epoxy and knitted-hemp cases through common BOM/process services before creating another palette family.

**Inputs:** Elements/product target; Fibre, binder and auxiliary masses; Areal/linear mass if deriving quantity; Winding/yarn length; Energy/time; Waste; Curing; Source evidence. Tension, fibre orientation and machine settings are recorded for interpretation or a validated process model.

**Outputs:** enriched Elements, composition and process contributions.

**Logic:** separate fibres and resin, measured wet/dry/cured mass, losses and curing energy. Knitting can be an ordered carding/spinning/knitting chain. Do not scale impacts by structural performance or assume resin separation at EOL without evidence.

**Diagnostics:** `composite.composition_missing`, `composite.mass_basis_unknown`, `fibre.linear_mass_missing`, `process.curing_missing`, `recovery.route_unverified`.

**Evidence:** project-specific BOM, yarn/resin properties, actual consumption, cure logs and validated recovery route. Tanya's preset is a useful test shape, not a measured bill of fabrication.

## Evidence collection before development

| Pilot | Minimum evidence package | Acceptance gate |
|---|---|---|
| One reclaimed-timber preparation batch | Stock IDs, measured stock/final/offcut quantities, density or mass condition, machine and auxiliary meter logs, cut/operation record, source/grade evidence | Quantities reconcile; allocation reproduces measured batch consumption; no double material/process burden |
| One printing/biopolymer batch | Feed composition and water/solids, support/reject/product masses, print/oven energy and allocation, factor rights/context | Mass and energy routes documented; drying distinguished from material loss; repeated event not double counted |
| One source C/D case | Original modules, exact declared basis, context/indicator evidence, route/credit documentation | Additions remain pending when context unknown; missing modules remain unavailable; D separately reported |

No fabricated observations should be created to fill this checklist. Obtain records from the researchers/operators; the next implementation instruction should choose the pilot explicitly.

## Deferred scientific assumptions

- Do not copy machine power/time/lifetime numbers or “net-negative” conclusions from explorer presets.
- Machine manufacture/wear allocation by machine mass and lifetime is a research model requiring an appropriate equipment inventory, allocation and boundary review.
- Dynamic carbon storage, carbon-delay credit, prospective factor interpolation and EF normalisation remain separate research outputs until validated. They do not silently augment EPD A1–A3 or D.
- Transport collection may already be included in Tanya's alternative-material factors. Adding a second generic collection event would risk double counting.
- Repeated A1–A3 production is not a complete B stage; replacement/removal/transport/repair require explicit event and time rules.
- A process wrapper does not repair an unresolved LCIA method. Source standards/indicator units must remain compatible for aggregation.

## Proposed implementation gates

1. Finish quantity/category/provenance work first.
2. Approve event and material-flow contracts using real pilot data.
3. Implement measured Machine Energy and shared loss/allocation services; keep events separately reportable.
4. Add Timber Preparation/CNC wrapper using the same service, then evaluate whether Robotics needs a separate component.
5. Add printing and fibre wrappers only after their evidence exists. Keep calibrated estimates visibly distinct from measurements.
6. Add process graphs and Inspector recommendations after stable diagnostics. No graph, Inspector or scenario component is implemented by this plan.