# Current RAW visible components: function-to-icon audit

> **Public reading edition · Historical development snapshot.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


18 October 2026. Authoritative palette: `internal implementation reference`; current visible list contains 17 components. Full port and source-hash evidence is in component-contracts.json (supporting internal reference retained privately). Hidden legacy components are not counted.

## RAW Material Selector Danish

- Category: RAW LCA / Materials
- Source (supporting internal reference retained privately)
- Inputs: None; family and selection dialogue in body
- Outputs: Material
- Function: Selects one pinned Danish BR18/Table 7 material with unchanged units and metadata.
- Important limit: Selecting is not creating or validating a dataset.
- Recommended graphical meaning: Two open custom letters use strong stems, rounded D counter and decisive K junction. Country cue identifies the Danish selector; no border.

## RAW Material Selector German / ÖKOBAUDAT

- Category: RAW LCA / Materials
- Source (supporting internal reference retained privately)
- Inputs: None; family and selection dialogue in body
- Outputs: Material
- Function: Selects one pinned German/ÖKOBAUDAT material from the current library.
- Important limit: Country/source lettering is identification, not certification.
- Recommended graphical meaning: Open rounded Ö and two-bowl B; large separated umlaut dots are retained as essential source lettering.

## RAW Custom Material

- Category: RAW LCA / Materials
- Source (supporting internal reference retained privately)
- Inputs: Name; Declared Unit; A1-A3 GWP; Density; Material family; Region; Source / boundary note; Context Type; Method ID; Method Version; Characterisation Basis; Indicator ID; Indicator Version; Indicator Definition; Method Citation
- Outputs: Dataset; Name; Declared Unit; Source; Context Summary
- Function: Creates a self-declared material and its explicit context.
- Important limit: No database write or inferred method; custom is not source-verified.
- Recommended graphical meaning: Authored specification

## RAW Material Info

- Category: RAW LCA / Materials
- Source (supporting internal reference retained privately)
- Inputs: Material
- Outputs: Name; Source; Declared Quantity; Region; Lifecycle Modules; A1-A3 GWP; Density; Evidence / Type; Method Summary; Indicator Summary; Context Summary
- Function: Inspects original, custom or derived material metadata.
- Important limit: Read-only; not the element physical inspector.
- Recommended graphical meaning: Specimen + readings

## RAW Update Material

- Category: RAW LCA / Materials
- Source (supporting internal reference retained privately)
- Inputs: Material; New Name; Density; Source Note; Override Existing
- Outputs: Material
- Function: Creates a user-derived material overlay with name/density evidence; source stays unchanged.
- Important limit: Does not edit source factors or scientifically verify an override.
- Recommended graphical meaning: Parent → derived specimen

## RAW Construct Element

- Category: RAW LCA / Elements
- Source (supporting internal reference retained privately)
- Inputs: Linear: Curve; Material; Cross-section. Surface: Surface; Material; Thickness. Volume: Solid geometry; Material.
- Outputs: Element; Geometry; Quantity; Quantity Unit; Mass; Volume
- Function: Combines geometry and material with optional dimensional data into an analytical element and known quantities.
- Important limit: Not a Windows window; no GWP calculated here. Unit/count remains legacy-only.
- Recommended graphical meaning: Three distinct input tokens converge toward a single volumetric analytical object: material, geometry and dimensional information. Tokens are schema cues, not a claim that every mode has three mandatory inputs.

## RAW Construct Section

- Category: RAW LCA / Elements
- Source (supporting internal reference retained privately)
- Inputs: Right-click shape: Rectangular, I-Section, Trapezoidal, Triangular, Polygonal, Circular; corresponding dimensions/profile and Section Name
- Outputs: Section; Area; Width; Depth
- Function: Constructs geometric section data in SI from document-unit dimensions or a profile.
- Important limit: No structural strength calculation; section is an input to Linear elements.
- Recommended graphical meaning: Cut profile

## RAW Wall Assembly

- Category: RAW LCA / Elements
- Source (supporting internal reference retained privately)
- Inputs: Geometry; Material/Layer Materials/Panel Material; Thickness/Layer Thicknesses/Panel Thickness; Wall Name; Wall Class; Alignment; Flip Direction; Generate Preview; mode-specific cavity/frame/support/grid data
- Outputs: Wall Elements; Preview Geometry; Net Area; Volume; Summary; Warnings; Layer Meshes; Layer Colours; Layer Names; Layer Volumes
- Function: Constructs measured wall elements and material-part previews. Seven modes: Solid Layer, Layered, Cavity, Framed, Rainscreen, Sandwich Panel, Curtain Wall.
- Important limit: Assembly, not three generic bars; does not perform independent LCA arithmetic.
- Recommended graphical meaning: Continuous layered corner

## RAW Physical Properties

- Category: RAW LCA / Elements
- Source (supporting internal reference retained privately)
- Inputs: Elements
- Outputs: Geometry; Length; Area; Volume; Mass; Density; Material Name; Physical Data Summary
- Function: Reads constructed elements and exposes available physical quantities and their provenance.
- Important limit: Read-only. No density editing, no invented average density for layered elements, no GWP.
- Recommended graphical meaning: One intact block branches into a dimension, a plane and a mass-like filled mark. These represent available geometry/quantity/mass outputs, not actual pieces of the material.

## RAW Element GWP

- Category: RAW LCA / Impact
- Source (supporting internal reference retained privately)
- Inputs: Elements
- Outputs: Result; Element GWP; Element Mass; Element Volume; GWP Unit; Module Scope
- Function: Calculates GWP for the selected scope using quantities, material factors and eligible enrichment.
- Important limit: GWP identity is constant in all eight modes. Missing modules/context are not repaired by an icon.
- Recommended graphical meaning: One continuous horizontal abbreviation, custom open G and P counters with a simplified flowing W. GWP stays fixed across module scopes.

## RAW Construct Machine Process

- Category: RAW LCA / Impact
- Source (supporting internal reference retained privately)
- Inputs: Process Name; Power (kW); Material Processed (kg); Output Rate (kg/h); Processing Time (h); Measured Energy (kWh); Electricity Emissions Factor; Factor Source / Location; Source Note; specialist inputs by mode
- Outputs: Process; Processing Time (h); Energy (kWh); Process GWP (kg CO2-eq); Energy Intensity (kWh/kg); Impact Data; Status
- Function: Constructs and evaluates one stable fabrication event from entered parameters and one authoritative energy route.
- Important limit: Energy/electricity GWP only; not a machine simulator. Constructing data and identifying a machine mode are related but different.
- Recommended graphical meaning: Different input tokens converge into a rounded process-event record with an energy trace. It constructs evaluated energy/process data, not a CNC tool or robot. Direction matches Construct Element; the record and energy stroke distinguish the output.

## RAW Assign Process Impact

- Category: RAW LCA / Impact
- Source (supporting internal reference retained privately)
- Inputs: Elements; Process; Lifecycle Module; EPD Coverage; Allocation Method; Allocation Values / Shares; Evidence / Source Note
- Outputs: Elements
- Function: Allocates evaluated events into element ledgers with duplicate, overlap, boundary and context checks.
- Important limit: Assignment is not automatic approval; uncertain contributions remain pending.
- Recommended graphical meaning: Allocated connection

## RAW Process Impact Breakdown

- Category: RAW LCA / Impact
- Source (supporting internal reference retained privately)
- Inputs: RAW Impact Result
- Outputs: Material GWP; Process GWP; Eligible Combined GWP; Pending / Excluded Contributions; Module Scope; Status / Diagnostics
- Function: Reads and separates material/process contributions from an existing result.
- Important limit: No independent recalculation; unavailable values remain unavailable.
- Recommended graphical meaning: Separated contribution ledger

## RAW End-of-Life Scenario

- Category: RAW LCA / Impact
- Source (supporting internal reference retained privately)
- Inputs: Elements; C1 Factor; C2 Factor; C3 Factor; C4 Factor; C Factor Unit / Basis; Waste Route; Source Note; Override Existing
- Outputs: Elements
- Function: Assigns evidenced C1–C4 factors to elements, protecting source values by default.
- Important limit: Waste route is descriptive evidence, not a simulated routing network. Complete C requires all four modules; partial remains flagged.
- Recommended graphical meaning: Element reaches a terminal bar; four separated endpoints indicate C1–C4 factor slots. The fan-out expresses scenario coverage after current use, not simulated mass routes.

## RAW Reuse / Recovery Scenario

- Category: RAW LCA / Impact
- Source (supporting internal reference retained privately)
- Inputs: Elements; D Factor; D Factor Unit / Basis; Reuse Rate; Recycling Rate; Recovery Rate; Credit Method; Source Note; Override Existing
- Outputs: Elements
- Function: Assigns an evidenced net D factor with provenance and rate metadata beyond the current system boundary.
- Important limit: Rates do not calculate credits. D can be positive or negative; no automatic benefit or guaranteed reuse.
- Recommended graphical meaning: A material piece leaves one support, crosses a broken system boundary and appears on a second support. It suggests an evidenced continuation beyond current use.

## RAW GWP Colour Preview

- Category: RAW LCA / Visualisation
- Source (supporting internal reference retained privately)
- Inputs: Result; Geometry; Values; Low Bound; High Bound; Colour Mode; Reverse Gradient
- Outputs: Preview Geometry; Preview Colours; Legend Values; Legend Labels; Colour Mode; Warnings
- Function: Maps existing GWP values to geometry colours, with explicit supported normalisation and unavailable handling.
- Important limit: Visualisation only; no environmental recalculation.
- Recommended graphical meaning: Mapped facade

## RAW GWP Legend

- Category: RAW LCA / Visualisation
- Source (supporting internal reference retained privately)
- Inputs: Legend Values; Legend Labels; Preview Colours; Base Point; Width; Height; Title; Unit
- Outputs: Legend Geometry; Legend Text; Legend Points; Legend Colours
- Function: Creates reference swatches, labels and placement points from preview output.
- Important limit: No LCA calculation or baking.
- Recommended graphical meaning: Calibrated swatches

## Mode and identity distinctions

The visible Physical Properties component is read-only and belongs to Elements. It is not the hidden historical override component. Construct Element combines supplied geometry and material; Element GWP calculates only GWP. End-of-Life assigns C1–C4 factors, with Waste Route as evidence; it does not simulate waste flows. Reuse / Recovery assigns an explicit signed D factor; rates are metadata and do not independently generate credits. Construct Machine Process constructs and evaluates a stable event, while General Machine is one of its six modes.

Machine common inputs are preserved across modes; specialist inputs add finished/removed stock and toolpath metadata for CNC, identity/auxiliary energy for robot, product/support/curing for printing, binder/curing for winding, finished/offcut mass for timber. These physical silhouettes are mode cues, not claims of automatic fabrication modelling.