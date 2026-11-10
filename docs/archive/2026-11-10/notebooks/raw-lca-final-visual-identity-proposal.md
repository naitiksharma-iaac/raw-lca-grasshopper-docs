# RAW LCA — final visual identity proposal

> **Public reading edition · Historical development snapshot.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


> **Historical, unapproved recommendation:** the user rejected Measured Tectonics as identity and did not approve BR18 / ÖKO. The current corrective review keeps RAW LCA, uses the inspected original RAW logo, and recommends open RAW-derived DK / ÖB. See [the corrective review](../reviews/component-family/index.html) and feedback audit (supporting internal reference retained privately). The earlier study below is preserved as evidence, not current approval.

> **Selector recommendation updated after user feedback:** use refined **BR18 / ÖKO with minimal baselines (B)**. See [selector refinement](raw-selector-icon-refinement.md) and its [focused visual review](../reviews/history/index.html). The earlier enclosing DK/ÖB register drawings, scoring and source-selector sheets below are retained as historical comparison, not the current recommendation. S2 identifiers and S3 table/facade directions remain valid; the user rejected the enclosing boundary, not architectural notation.

**Recommendation for approval, not production implementation.** 18 October 2026 · `feat/core-plugin-foundation`.

Adopt **Measured Tectonics** as the drawing language, **Section Gate** as the RAW LCA brand mark, and the neutral 17-component family in this package, with the two selectors revised by the linked refinement. Keep a general machine-process icon in the palette and prepare six operation-specific instance icons for a later cache-aware implementation. Use **BR18 / ÖKO with minimal baselines** for the two source-selector symbols, with the full library identity retained in the component name and metadata.

The public name remains **RAW LCA**. Measured Tectonics and Section Gate are internal design descriptions, not new product names. This recommendation supersedes the earlier proposal's request to choose among entire styles. It does not imply approval, deployment, scientific verification or a completed native Grasshopper test.

## 1. Identity statement

RAW LCA makes the relationship between a particular material, a constructed quantity, a fabrication operation and an environmental boundary inspectable. The identity should look like a piece of architectural reasoning: cut sections, interfaces, measured gaps and a receiving condition. It should not promise that every resource loops back, every calculation is complete, or every recovered material produces an environmental benefit.

The main mark has a strong sectional silhouette for recognition. Components use lighter open linework to explain operations. They share cut angles, negative-space discipline and neutral ink, rather than carrying the same miniature brand badge. No animal, leaf, globe, recycling ring, gear, calculator or approval tick is used as the overall identity.

## 2. Research synthesis and source boundaries

The six requested documents were read alongside both previous review packages, their reference manifests, visual boards, original concepts and small-size tests. Current component contracts were then checked against source. The older product-structure document describes an earlier palette; `RawPalette.cs` is authoritative for the **current 17 visible components**.

Evidence reused rather than unnecessarily downloaded again:

- **Documented RAW programme:** CITA / Royal Danish Academy's RAW resource model and material montage (R01), and the RAW-CITA Timber Workshop account (R02). These support the sequence characterise → match → fabricate and the importance of variable material stock. They do not establish measured machine energy factors.
- **Related CITA precedent, not automatically a current RAW project:** RawLam (R03). Wane-edged stock, CT characterisation, computational allocation, structural simulation and joint-location images support a particular-material identity. They do not justify a CT-scanner icon for the read-only Physical Properties component.
- **Architectural assembly:** BAMB reversible-building connection guidance (R06), Rockwool's wall cutaway (R21), and the WoodWorks partition section (R26). They support interfaces and cut profiles instead of generic layer bars. R21 is a cutaway, not an exploded assembly; R03 structural simulation is not a joint photograph.
- **Fabrication operations:** ICD/ITKE 2016–17 coreless winding (R04, related research rather than a RAW project), Sandvik milling definitions (R28), and NIST additive-manufacturing bead/layer diagrams (R27). Their physical mechanisms inform the mode icons. No source drawings were traced into the icons.
- **Environmental accounting:** LCA.no's module overview (R07) and an actual Mapei/EPD Norway system-boundary diagram (R22). C-stage treatment/termination and D-stage transfer must remain different. These are visual/semantic references; no EPD factors were imported and the LCA.no explainer is not the normative standard.
- **Material information:** BAMB/EPEA passports (R05) support recorded provenance. Source portals R14/R15 support source-specific labels, not borrowed official marks or inferred certification.
- **Computational-tool identity:** original Grasshopper icons (R09), Galapagos (R10), Kangaroo (R25), Robots (R23) and Ladybug (R13). Their strengths are recognisable silhouettes and domain-specific mechanisms. RAW borrows that principle, not their artwork. Tanya's repository/explorer (R17/R16) contextualise separate impact contributions; their visuals are not proof of RAW plugin output parity.

New inspection was targeted at **implementation feasibility**: the current custom selector attributes, machine attributes, `MachineProcessIcons`, `RawModeUi`, all 17 visible component roles, and the installed Rhino 8 Grasshopper XML API. The official McNeel icon guide was re-opened. A web request for `DestroyIconCache` returned a cache miss; the installed SDK XML explicitly documents it, so no web result was invented.

The attributed reference library is separate from `masters/` and `png/`. It preserves original URLs, creators, source relationship, local-image hashes and access limitations. References are research reproductions, not assets licensed for product redistribution. Do not ship the reference folder with the plugin. Text-only or inaccessible evidence remains labelled as such.

## 3. Critical comparison of the identity narratives

Tectonic Notation is the strongest grammar at 24 px: profiles and connections remain readable. Its weakness is repetitive orthogonality. Material Signatures adds RAW-specific character but can overpromise scanning or collapse into grain noise. Lifecycle Traces explains boundaries well but is too abstract as a universal drawing language.

**Measured Tectonics** is a constrained synthesis: use tectonic geometry as the common grammar; permit one material irregularity where it carries meaning; reserve boundary traces for assessment scope and next-system transfer. Do not apply all three motifs to every icon. This keeps a single visual language while improving on the prior alternatives.

The ten requested narrative tests are covered explicitly: RAW/research relationship and environmental relevance by Research; architectural relevance by Architecture; originality, distinctiveness and character by Distinctiveness; recognisability by Meaning and Small-size; consistency by Family; future extensibility by Versatility; Grasshopper suitability by Native feasibility. Scores below are judgements grounded in source relevance and raster inspection, not scientific observations or recognition-test percentages.

## 4. Evaluation method

Use a 1–5 ordinal rating: 1 poor, 2 weak, 3 adequate, 4 strong, 5 exceptional for this brief. Weighted total = Σ(weight × rating / 5). Score competing candidates with the same weights. A high feasibility score means the art can be rasterised into the documented native slot, **not that it passed native execution**. Originality means independently drawn here; no trademark-clearance claim is made.

Meaning and legibility carry 38% because an attractive but misleading or illegible component fails its task. Research and architecture carry 27% to prevent a generic software library. Distinctiveness receives 12%; consistency and versatility together 18% balance family identity against future extension. Feasibility is a 5% gate because all finalists already use simple transparent bitmap-compatible geometry.

Evidence classes: **F** = source/API fact; **V** = direct visual/raster inspection; **J** = design judgement. Research relationships and component roles are F. Open gaps, alpha channels and raster dimensions are V or automated checks. Meaning, memorability, semantic resemblance and scores are J, informed by F/V. No claim of statistically measured recognisability is made.

| Criterion | Weight | What is assessed |
|---|---:|---|
| Research relevance | 15% | Documented material/fabrication/LCA relationship, without capability inflation |
| Architectural character | 12% | Section, connection and construction character |
| Distinctiveness | 12% | Own silhouette; no borrowed branding or interchangeable UI badge |
| Meaning | 18% | Matches the exact source contract and avoids misleading action cues |
| Small-size legibility | 20% | Main mechanism and whitespace survive actual-size raster review |
| Family consistency | 8% | Common geometry without identical silhouette |
| Versatility | 10% | Works across materials, contexts, monochrome and future families |
| Native feasibility | 5% | Transparent 24 × 24 contract; cache and attribute constraints understood |

| Narrative | Ratings in criterion order | Total / 100 |
|---|---|---:|
| Tectonic Notation | 4, 5, 4, 4, 5, 5, 4, 5 | 89.0 |
| Material Signatures | 5, 4, 5, 4, 3, 4, 4, 5 | 82.4 |
| Lifecycle Traces | 5, 3, 4, 3, 3, 5, 5, 5 | 77.6 |
| Measured Tectonics — proposed synthesis | 5, 5, 4, 4, 5, 5, 5, 5 | 94.0 |

The synthesis scores 94; Tectonic Notation 89. This is a recommendation from design evidence, not an objective declaration that synthesis is universally better. Its advantage depends on disciplined use of material/boundary cues. If everything acquires a dashed boundary or wane edge, that advantage disappears.

## 5. Main logo development and selection

Five geometrically distinct concepts were developed: Section Gate, Registered Span, Resource Weave, Measured Field and Open Ledger. The two leading structures were refined as silhouettes. The finalist sheet contrasts an outline/hatching study with reduced forms; this is design development, not a historical native screenshot.

| Concept | Ratings | Total | Strongest argument | Limitation |
|---|---|---:|---|---|
| Section Gate | 5, 5, 4, 4, 5, 5, 5, 5 | 94.0 | Two separated cut sections frame one open counterform. A measurable gap remains visible. | Can suggest an abstract letter R; it is not an environmental certification mark. |
| Registered Span | 5, 5, 4, 4, 4, 5, 4, 5 | 88.0 | Stock keeps a particular edge across two supports. Strong connection to reclaimed members. | More timber-specific; support/beam details compete at 16 px. |
| Resource Weave | 4, 4, 3, 3, 5, 4, 4, 5 | 79.0 | An interlock gives an assembly logic and compact silhouette. | Too close to familiar chain/link and construction monograms. |
| Measured Field | 5, 3, 4, 3, 3, 4, 3, 5 | 72.0 | Variable stock and measurement bracket directly link to characterisation. | Frame dominates at small size; looks like an inspection component rather than a brand. |
| Open Ledger | 4, 3, 2, 4, 5, 3, 4, 5 | 76.2 | Accounting separates material and impact contributions. | Too close to a dashboard or generic list; weak architectural identity. |

**Recommend Section Gate (94), ahead of Registered Span (88).** Two cut masses form an open architectural counterform: a long section and a detached receiving return. A clipped upper corner and an offset internal opening make the silhouette recognisable. The open gap matters more than a literal letter; some viewers may read an abstract R, but the wordmark establishes RAW LCA explicitly. There is no closed circular arrow claiming successful reuse. The logo is not an enlarged component: it is a compact spatial relationship from which the finer family grammar is derived.

Registered Span has a direct connection to reclaimed timber and its irregular edge. It loses because the support/datum structure is more fragile at small size and suggests a timber-specific scope. Resource Weave is too close to link/interlock monograms; Measured Field reads as an inspector; Open Ledger reads as a software dashboard. Their strengths are retained in suitable component roles, not mixed into the brand.

The six-point lead over Registered Span comes from small-size and versatility ratings. Reducing small-size weight by ten points and assigning those points to equal-rated research reduces the lead to four; the direction still leads under that sensitivity check. The result is not independent of judgement: if a future recognition test finds the counterform ambiguous, the ranking should be revisited.

Deliverables include symbol, custom path wordmark, horizontal lockup, stacked symbol/wordmark, compact square lockup, neutral, black, warm, reversed and optional slate-accent symbols. All have transparent SVG/PNG assets. Wordmark letters are original path geometry; no font files or converted commercial font outlines are included. Small PNG lockup exports are provided for completeness, **not recommended usage**; use the symbol alone at 24 px.

## 6. Graphic system specification

| Property | Recommendation |
|---|---|
| Component grid | 24 × 24; approximately 2 px clear edge, typical active area x/y 3–21. No background tile. |
| Main stroke | 1.30 px nominal. Machine, Physical Properties and Recovery use 1.40 for sparse mechanisms; mode family 1.35. |
| Caps / joins | Square caps, miter joins. No glossy rounding; diagonal corners are authored deliberately. |
| Detail hierarchy | One primary contour; secondary mechanism; optional tertiary marks only when they remain useful. |
| Negative space | Aim for at least 2 px open gaps at 24 px; protect interfaces before retaining hatching. |
| Small-size masters | 18/16 variants remove tagged tertiary marks and hold main stroke near 1.02 output px. Do not simply downscale all geometry without review. |
| Source letters | Original path glyphs; DK/ÖB enlarged relative to longer alternatives. Umlaut is retained. |
| Fill | Most components unfilled. Limited neutral tonal fill for mapped geometry and legend swatches; brand uses purposeful solid cut sections. |
| Core ink | Charcoal `#303638`, recommended. Warm `#534A43` is a presentation alternative. |
| Optional brand accent | Slate `#536F77`, only the receiving return. No scientific/status semantics. |
| Display tones | `#8B938B` and `#B4B9AE`, bounded by charcoal. They represent visual mapping, not favourable impact. |
| Brand grid | 48 units; mark occupies approximately 5–43. Preserve open counterform and detached return. |
| Wordmark | Original angular monoline paths, restrained spacing, no decorative stencil breaks. |
| Clear space | Brand: at least the 6-unit inter-section gap around the complete mark; more space in presentations. |
| Minimum use | Component/toolbar 24 px; 18/16 supplied for optical review. Symbol-only for small brand use; wordmarks at presentation scale. |
| Shadow / gradient | None baked into resources. Grasshopper owns body/state styling. |

## 7. Every visible component: function, alternatives and decision

The palette audit checks exact names/categories against current `RawPalette.cs`, including renamed Material Info and the read-only Physical Properties. Nothing hidden is proposed for un-hiding. Each entry below records the selected original metaphor, two rejected alternatives and criterion ratings in the order defined above. Component labels remain essential; icons are recognition aids, not a replacement for contracts or diagnostics.

### RAW Material Selector Danish — Materials

**Contract / workflow:** Library families and selection → pinned source Material. No input ports. Source: DanishMaterialSelectorComponent.cs (supporting internal reference retained privately).

**Evidence:** R15 / R08; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Dataset register / DK. DK is legible at 16–24 px; full component name supplies BR18 / Table 7. BR18 is more specific but congests the aperture. Grid alone cannot name the source.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Dataset register / DK | 4, 3, 4, 5, 5, 5, 4, 5 | 87.8 | Selected |
| BR18 identifier | 5, 3, 4, 5, 2, 5, 3, 5 | 76.8 | Rejected; reason above |
| Table grid | 4, 5, 3, 2, 5, 5, 4, 5 | 79.4 | Rejected; reason above |

### RAW Material Selector German / ÖKOBAUDAT — Materials

**Contract / workflow:** German catalogue selection → pinned source Material. No input ports. Source: GermanMaterialSelectorComponent.cs (supporting internal reference retained privately).

**Evidence:** R14 / R08; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Dataset register / ÖB. ÖB retains the umlaut and is legible; RAW shorthand, not an official source mark. ÖKO is longer; facade grid could mean an element.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Dataset register / ÖB | 4, 3, 4, 5, 5, 5, 4, 5 | 87.8 | Selected |
| ÖKO identifier | 5, 3, 4, 5, 2, 5, 3, 5 | 76.8 | Rejected; reason above |
| Facade grid | 4, 5, 3, 2, 5, 5, 4, 5 | 79.4 | Rejected; reason above |

### RAW Custom Material — Materials

**Contract / workflow:** Name, unit, GWP, density, family and declared method context → self-declared Dataset and metadata. Source: AdvancedDecisionComponents.cs (supporting internal reference retained privately).

**Evidence:** R05 / R17; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Authored specification. A folded specification with unequal entries communicates a declared dataset. Pencil is generic editing; blank register is too close to selectors. This is deliberately the most conventional mark: it prioritises an authored declaration over a false fabrication metaphor, with lower architecture/distinctiveness scores.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Authored specification | 4, 2, 2, 5, 5, 5, 4, 5 | 80.6 | Selected |
| Specimen + pencil | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 | Rejected; reason above |
| Blank register | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

### RAW Material Info — Materials

**Contract / workflow:** Material → original/derived metadata, units, factors and method summaries; no calculation. Source: StudioInspectionComponents.cs (supporting internal reference retained privately).

**Evidence:** R05 / R15; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Specimen + readings. Detached readings describe the record without altering it. Magnifier resembles Physical Properties; letter i is generic software shorthand.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Specimen + readings | 5, 4, 4, 5, 5, 5, 4, 5 | 93.2 | Selected |
| Magnifier over cube | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 | Rejected; reason above |
| Information letter | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

### RAW Update Material — Materials

**Contract / workflow:** Material, optional name/density and evidence → derived Material; source and factors preserved. Source: UpdateMaterialComponent.cs (supporting internal reference retained privately).

**Evidence:** R05 / R01; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Parent → derived specimen. Two separated specimens keep the parent visible. Pencil implies editing the original; replacement arrow contradicts immutable source records.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Parent → derived specimen | 5, 4, 4, 5, 5, 5, 4, 5 | 93.2 | Selected |
| Pencil over specimen | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 | Rejected; reason above |
| Replace arrow | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

### RAW Construct Element — Elements

**Contract / workflow:** Geometry + Material + section/thickness by mode → Element, Geometry, Quantity, Unit, Mass, Volume. Source: SolidSurfaceElementComponent.cs (supporting internal reference retained privately).

**Evidence:** R03 / R26; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Profile raised into geometry. A cut face extends into an architectural piece. This is the only volume-like construct icon; plus is generic; three tiny badges lose hierarchy.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Profile raised into geometry | 5, 4, 4, 5, 5, 5, 4, 5 | 93.2 | Selected |
| Cube + plus | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 | Rejected; reason above |
| Three geometry badges | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

### RAW Construct Section — Elements

**Contract / workflow:** Mode-specific dimensions/profile → Section, Area, Width, Depth. Six section shapes. Source: ConstructSectionComponent.cs (supporting internal reference retained privately).

**Evidence:** R26 / R03; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Cut profile. One I-shaped cut is a recognisable cross-section exemplar, not a mode promise. Caliper conflicts with inspection; six profiles become noise.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Cut profile | 5, 4, 4, 5, 5, 5, 4, 5 | 93.2 | Selected |
| Caliper | 4, 4, 3, 2, 5, 5, 4, 5 | 77.0 | Rejected; reason above |
| Six tiny profiles | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

### RAW Wall Assembly — Elements

**Contract / workflow:** Reference geometry, materials and mode build-up inputs → wall Elements, quantities and display meshes. Source: WallAssemblyComponent.cs (supporting internal reference retained privately).

**Evidence:** R21 / R26; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Continuous layered corner. Corner and continuous skins communicate construction. Reveal loses gaps at 16 px; plain bars could be a chart. Corner does not imply automatic junction modelling.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Continuous layered corner | 5, 5, 4, 5, 4, 5, 4, 5 | 91.6 | Selected |
| Exploded reveal | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 | Rejected; reason above |
| Three layer bars | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

### RAW Physical Properties — Elements

**Contract / workflow:** Elements → Geometry, Length, Area, Volume, Mass, Density, Material Name, Summary. Read-only. Source: PhysicalPropertiesInspectorComponent.cs (supporting internal reference retained privately).

**Evidence:** R02 / R03 / R29; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Opposed probes. Probes observe an existing specimen. CT implies absent scanning capability; balance overemphasises mass and resembles legal scales. No edit cue.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Opposed probes | 5, 5, 4, 5, 4, 5, 4, 5 | 91.6 | Selected |
| CT section slices | 5, 4, 5, 2, 3, 4, 3, 5 | 73.2 | Rejected; reason above |
| Mass balance | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

### RAW Element GWP — Impact

**Contract / workflow:** Elements → Result, Element GWP/Mass/Volume, GWP Unit, Module Scope. Source: ElementGwpComponent.cs (supporting internal reference retained privately).

**Evidence:** R07 / R22; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Bounded characterisation. Quantity × factor inside scope brackets states bounded arithmetic. Cloud hides lifecycle scope; chart conflicts with visualisation. Label is still necessary to identify GWP.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Bounded characterisation | 5, 4, 4, 4, 4, 5, 4, 5 | 85.6 | Selected |
| Emissions cloud | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 | Rejected; reason above |
| Impact chart | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

### RAW Construct Machine Process — Impact

**Contract / workflow:** Measured energy or power/time/throughput plus factor → evaluated Process, time, energy, GWP, intensity, Impact Data, Status. Source: ConstructMachineProcessComponent.cs (supporting internal reference retained privately).

**Evidence:** R01 / R03 / R28; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Working gap. Two tool edges distinguish an operation from an accounting boundary. Specific cuts bias the general icon; swept paths could imply energy derived from paths.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Working gap | 5, 4, 4, 5, 5, 5, 4, 5 | 93.2 | Selected |
| Contact cut | 5, 5, 4, 4, 5, 5, 2, 5 | 88.0 | Rejected; reason above |
| Swept toolpath | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

### RAW Assign Process Impact — Impact

**Contract / workflow:** Elements + evaluated Process + module/EPD coverage/allocation/evidence → enriched Elements. Source: AssignProcessImpactComponent.cs (supporting internal reference retained privately).

**Evidence:** R05 / R22; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Allocated connection. One event branches to unequal element allocations. No check mark or arithmetic plus: attachment may remain pending and shares are controlled.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Allocated connection | 5, 4, 4, 4, 4, 5, 4, 5 | 85.6 | Selected |
| Plus on element | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 | Rejected; reason above |
| Check mark | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

### RAW Process Impact Breakdown — Impact

**Contract / workflow:** RAW Impact Result → material/process/eligible combined GWP, pending/excluded records, scope, diagnostics. Source: ProcessImpactBreakdownComponent.cs (supporting internal reference retained privately).

**Evidence:** R16 / R22; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Separated contribution ledger. A recorded strip separates into contributions. No axes or pie proportions imply a new evaluation. Different from assignment: source is a ledger, not an event.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Separated contribution ledger | 5, 4, 4, 4, 4, 5, 4, 5 | 85.6 | Selected |
| Bar chart | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 | Rejected; reason above |
| Pie chart | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

### RAW End-of-Life Scenario — Impact

**Contract / workflow:** Elements + C1–C4 factors, exact basis, waste route and evidence → scenario-enriched Elements. Source: LifecycleScenarioComponents.cs (supporting internal reference retained privately).

**Evidence:** R07 / R22 / R06; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Separated treatment fractions. Separated pieces enter a bounded receiving bed. Treatment is distinct from onward transfer and promises no recycling benefit. Released joint only suggests C1; strata only C4.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Separated treatment fractions | 5, 4, 4, 5, 5, 5, 4, 5 | 93.2 | Selected |
| Released joint | 5, 5, 4, 3, 4, 5, 2, 5 | 80.4 | Rejected; reason above |
| Disposal strata | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

### RAW Reuse / Recovery Scenario — Impact

**Contract / workflow:** Elements + net D factor/basis, rates, credit method and evidence → enriched Elements; no inferred credit. Source: LifecycleScenarioComponents.cs (supporting internal reference retained privately).

**Evidence:** R01 / R06 / R07; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Second-system span. Retained member crosses an explicit boundary toward a receiving system. No green or minus sign: D may be burden or benefit. Reuse exemplar cannot depict every recovery route.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Second-system span | 5, 5, 4, 5, 4, 5, 4, 5 | 91.6 | Selected |
| Recycling loop | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 | Rejected; reason above |
| Counterfactual pair | 5, 4, 4, 4, 3, 5, 4, 5 | 81.6 | Rejected; reason above |

### RAW GWP Colour Preview — Visualisation

**Contract / workflow:** Result + aligned Geometry; optional Values/bounds/mode → display geometry/colours, labels and warnings. Source: GwpColourPreviewComponent.cs (supporting internal reference retained privately).

**Evidence:** R13 / R16; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Mapped facade. Tones occupy actual geometric faces. Paint bucket implies editing; flat grid resembles a source selector. Neutral tones signify mapping, not low impact.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Mapped facade | 5, 4, 4, 5, 5, 5, 4, 5 | 93.2 | Selected |
| Paint bucket | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 | Rejected; reason above |
| Heatmap grid | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

### RAW GWP Legend — Visualisation

**Contract / workflow:** Legend Values/Labels/Colours and layout → swatch geometry, text, points, colours. Source: GwpLegendComponent.cs (supporting internal reference retained privately).

**Evidence:** R13 / R16; exact component role is F, semantic interpretation and scores J, small-size inspection V.

**Selected:** Calibrated swatches. Three swatches and reading ticks form a reference scale. Gradient alone lacks labels; ruler suggests dimensional measurement.

| Candidate | Ratings | Total | Decision |
|---|---|---:|---|
| Calibrated swatches | 5, 4, 4, 5, 5, 5, 4, 5 | 93.2 | Selected |
| Gradient rectangle | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 | Rejected; reason above |
| Ruler | 3, 3, 2, 3, 4, 3, 3, 5 | 63.6 | Rejected; reason above |

The two most abstract selections are Element GWP (bounded factor arithmetic) and Assign Process Impact (allocation). Their meaning/legibility ratings are lower than simple geometric profiles. An environmental cloud or check mark would look more familiar but would convey less accurate scope or false approval. Familiarity alone is not sufficient.

Material Info and Physical Properties are both readers, but read different things: specimen-plus-record lines versus opposing measurement probes. Update Material keeps two specimens to preserve parent/derived distinction. Construct Element is a raised architectural piece; Colour Preview was revised to a planar mapped facade so they no longer share a cube-like silhouette. Assignment uses a connected event and receiving elements; Breakdown uses a detached ledger and contribution slots. End-of-Life was revised away from a branching node graph to collected fractions; D retains a material crossing into a second system.

## 8. Machine-process family

The shared visual rules do not force a generic machine silhouette onto every mode. Each icon depicts an observable physical mechanism. The current calculations remain measured energy or the existing power/time/throughput evaluator; the icons do not claim energy from toolpaths, fibre routes or infill. Specialist material-flow and auxiliary requirements remain data/model questions.

### General Machine

Working gap: irregular input and regular output meet opposed tools. Evidence: R01 / R03 / R28. A spindle describes only subtraction; a factory/gear describes an object rather than a material event.

| Candidate | Ratings | Total |
|---|---|---:|
| Working gap | 5, 5, 4, 4, 4, 5, 4, 5 | 88.0 |
| Milling spindle | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 |
| Factory / gear | 3, 3, 3, 3, 3, 3, 3, 5 | 62.0 |
### CNC / Milling

Cutting tool meets a stepped workpiece; separated chip direction. Evidence: R28 / R03. Cutting engagement is physical. Path-only marks imply an energy estimator; enclosure detail disappears at 24 px.

| Candidate | Ratings | Total |
|---|---|---:|
| Cutting tool meets a stepped workpiece | 5, 5, 4, 4, 4, 5, 4, 5 | 88.0 |
| Toolpath loop | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 |
| CNC enclosure | 3, 3, 3, 3, 3, 3, 3, 5 | 62.0 |
### Robotic Process

Articulated links connect a base to a tool and workpiece. Evidence: R04 / R23. A tool interaction is more relevant than humanoid identity; reach envelopes obscure the material operation.

| Candidate | Ratings | Total |
|---|---|---:|
| Articulated links connect a base to a tool and workpiece. | 5, 5, 4, 4, 4, 5, 4, 5 | 88.0 |
| Robot face | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 |
| Reach hemisphere | 3, 3, 3, 3, 3, 3, 3, 5 | 62.0 |
### 3D Printing

A nozzle deposits connected horizontal layers. Evidence: R27. The deposited trace is the operation; printer boxes are generic and infill grids lose legibility.

| Candidate | Ratings | Total |
|---|---|---:|
| A nozzle deposits connected horizontal layers. | 5, 5, 4, 4, 4, 5, 4, 5 | 88.0 |
| Printer box | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 |
| Infill mesh | 3, 3, 3, 3, 3, 3, 3, 5 | 62.0 |
### Coreless Winding / Fibre Placement

A few strands span open anchor lines; no solid core. Evidence: R04. Spool implies supply rather than placement; dense crossing lines collapse. This is not a particular pavilion topology.

| Candidate | Ratings | Total |
|---|---|---:|
| A few strands span open anchor lines | 5, 5, 4, 4, 4, 5, 4, 5 | 88.0 |
| Fibre spool | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 |
| Dense woven mesh | 3, 3, 3, 3, 3, 3, 3, 5 | 62.0 |
### Reclaimed Timber Preparation

A plane meets a wane-edged member; a separated lower strip signals offcut. Evidence: R02 / R03. A tree implies forestry; a regular plank loses reclaimed-stock character. No embodied benefit is promised.

| Candidate | Ratings | Total |
|---|---|---:|
| A plane meets a wane-edged member | 5, 5, 4, 4, 4, 5, 4, 5 | 88.0 |
| Tree / saw | 4, 3, 3, 3, 3, 4, 3, 5 | 66.6 |
| Regular plank | 3, 3, 3, 3, 3, 3, 3, 5 | 62.0 |

**Implementation recommendation:** palette proxy uses General Machine consistently; the placed instance should update to its active mode. This helps identify mixed fabrication chains without inspecting every footer. Keep the footer as the authoritative text. Do not add a second header icon or tiny mode badge. Implement only after approval using cached 24 px mode bitmaps and explicit GH icon-cache invalidation after a safe mode change/read restoration. Do not alter parameter migration, undo or calculation paths just to refresh artwork.

## 9. Earlier dataset-selector decision — superseded by focused refinement

Recommend **DK / ÖB**. The paired open register and enlarged two-character path lettering survive small raster sizes better than BR18 / ÖKO. The full source name remains visible elsewhere. DK is country-level, not a unique database ID; ÖB is proposed RAW shorthand, not an official abbreviation. Those are explicit trade-offs, not claims of official affiliation.

BR18 / ÖKO is more source-specific but loses letter spacing at 24 and especially 16 px. Table/facade graphics have architectural appeal but cannot identify the source reliably without labels. Neither flags nor official ministry marks are appropriate for these small functional symbols. ÖKOBAUDAT's long wordmark and the Danish authority's page identity are studied, not copied.

ICE, EC3 and KBOB are **future candidates only**. The study provides family-compatible initials, with KBOB split across two rows. They are neither implemented selectors nor approved source marks. Their data access, naming and source rights require separate confirmation. Do not pretend a generic regional symbol uniquely identifies every future pack.

## 10. Iteration and small-size quality review

The package contains concept alternatives, refined vectors, raster comparisons and actual-pixel samples. Visible refinements include:

1. Brand outline/hatching studies → two reduced sectional silhouettes. The recommended mark drops texture and strengthens the counterform rather than becoming a large component badge.
2. Source lettering enlarged for DK / ÖB; longer source names remain comparison options.
3. Colour Preview changed from a volume-like object to a mapped facade, separating it from Construct Element.
4. End-of-Life changed from a branching graph to separated fractions in a receiving bed, separating it from allocation.
5. 18/16 px exports remove tertiary section/grain marks and raise optical stroke width; the 24 px assets retain architectural detail only where space permits.

Actual-size review covers 17 icons on orange, neutral grey, a selection approximation and an error approximation at 24/18/16. HTML samples specify pixel dimensions independent of sheet scaling. Browser/OS zoom still affects physical viewing size. Additional 64/32 assets support inspection and future high-DPI resource discussion. High-DPI bitmap selection is not automatically handled by supplying these PNG files.

Known limits: the layered wall has tightly spaced nested contours at 16 px; robot joints and winding crossings remain denser than the general machine mark. GWP arithmetic requires the component label to establish the indicator. Source letters require familiarity. No unaided user-recognition trial was conducted. A recognition test could change these choices; the recommendation is ready for review, not a claim that every design ambiguity is solved.

## 11. Native Grasshopper implementation feasibility

Facts were checked in installed `C:/Program Files/Rhino 8/Plug-ins/Grasshopper/Grasshopper.xml` and current RAW source:

- `GH_DocumentObject.Icon` supplies a cached **24 × 24** bitmap. `DestroyIconCache` must be called when the display icon changes. `Icon_24x24_Locked` provides the greyscale representation. The web icon guide agrees on 24 px and describes an approximately 2 px border. Shadows are optional design convention; this proposal does not bake them in.
- `RawComponent.Icon` returns null. Most visible components need a future provider/override. `MachineProcessIcons` already caches one transparent 24 px bitmap, and `ForMode` currently returns it for every mode. Extend that provider instead of drawing bitmaps during every canvas render.
- Current machine attributes preserve the standard centre icon, socket layout and native body rendering while drawing headers/dashboard. A new bitmap does not require recreating this UI.
- Current Danish/German selectors override Icon as null and call `RenderComponentCapsule(... true, false, false, true, true, false)`. The second boolean suppresses the nickname/icon region. Adding palette icons is straightforward; **displaying them in those custom selector bodies requires an explicit future layout change**. No such change is included or implied by the mockup.
- Native state styling remains outside the art: selected, locked/greyscale, warning/error capsule, runtime balloons and profiler. Neutral ink avoids relying on hue for meaning. The state colours on sheets are approximations, not sampled guarantees of the host theme.
- Proposed mode switching should select cached bitmaps, invalidate the display cache, and redraw after the already-safe mode transition. Restore the mode before resolving the icon during file load. Palette proxies should remain general. No current mode-switching source was modified.
- At Windows 100/150/200% scaling, check native canvas at representative zooms, icon and name display modes, selected/unselected/locked and warning/error states. Check save/reopen, undo/redo and switching every mode. 16/18 optical assets are design references; zooming a native 24 px bitmap does not automatically use them. Native scaling artefacts must be assessed after approval.

The proposed marks need no independent UI framework. Core bitmap rendering is native; optional selector-body placement and automatic mode-cache refresh need small, separately reviewed source changes. The brand lockups are presentation assets, not centre icons.

**Native Rhino/Grasshopper tests were not run.** Canvas/palette sheets are explicitly labelled design mockups. They must not be cited as proof of rendering, saved-definition compatibility or crash-free mode switching. No Release build or calculation tests were run because this task changes only design/research artifacts and one proposal document. Existing workspace changes were preserved; source/test hashes are compared against a task-start baseline.

## 12. Rejected alternatives and remaining limitations

Reject a universal cube-with-action-badge system because it hides distinct contracts. Reject the CT metaphor for the visible reader, the pencil for source-preserving Update Material, the check mark for process assignment, the recycling loop for C/D, and a universal gear for fabrication. Retain exact material and lifecycle labels in UI and documentation; icon art must not carry compatibility status, completeness, sign of D, or verification by itself.

Original artwork was authored in this package and not traced from third-party icons. This is not a legal clearance search against all existing trademarks. Before broad public release, perform brand-name/mark clearance and review reference reproduction permissions. The copied reference images are local research context, not production deliverables.

## 13. Exact decision proposed for approval

Approve the package as a **single design recommendation**: Measured Tectonics; Section Gate with neutral primary treatment and original RAW LCA wordmark; 17 component icons with the **revised BR18/ÖKO baseline source pair from the focused selector review**; six machine-mode silhouettes with a stable general palette icon. Keep the optional slate brand return limited to presentation use, with neutral components.

Approval should authorise a separate implementation task to wire cached resources and run native verification. It does not authorise replacing source-selector layouts, changing component behaviour, adding future selectors, or altering environmental status. Remaining implementation gates are native state/high-DPI/cache tests and a brief label-free recognition check with users. No production icon changes, commits or pushes are part of this task.

## 14. Review package

[Open the navigable review](../reviews/history/index.html). Machine-readable decisions: component matrix (supporting internal reference retained privately), brand/narrative matrix (supporting internal reference retained privately), mode matrix (supporting internal reference retained privately).

- 01 research-synthesis (supporting internal reference retained privately)
- 02 main-logo-exploration (supporting internal reference retained privately)
- 03 main-logo-finalists (supporting internal reference retained privately)
- 04 recommended-brand-system (supporting internal reference retained privately)
- [05 component-icons-materials](../reviews/history/raw-lca-final-identity/05_component-icons-materials.png)
- [06 component-icons-elements](../reviews/history/raw-lca-final-identity/06_component-icons-elements.png)
- [07 component-icons-impact](../reviews/history/raw-lca-final-identity/07_component-icons-impact.png)
- [08 component-icons-visualisation](../reviews/history/raw-lca-final-identity/08_component-icons-visualisation.png)
- [09 machine-process-modes](../reviews/history/raw-lca-final-identity/09_machine-process-modes.png)
- [10 selector-source-identities](../reviews/history/raw-lca-final-identity/10_selector-source-identities.png)
- [11 complete-icon-family](../reviews/history/raw-lca-final-identity/11_complete-icon-family.png)
- [12 actual-size-readability](../reviews/history/raw-lca-final-identity/12_actual-size-readability.png)
- 13 grasshopper-canvas-mockups (supporting internal reference retained privately)
- 14 toolbar-and-palette-preview (supporting internal reference retained privately)
- 15 decision-matrix (supporting internal reference retained privately)

Editable masters: `../artifacts/design-review/raw-lca-final-identity/masters/`; transparent PNGs: `../artifacts/design-review/raw-lca-final-identity/png/`; references: manifest (supporting internal reference retained privately); audit: palette (supporting internal reference retained privately); verification: results (supporting internal reference retained privately).

## 15. Source catalogue

- **R01 — RAW research programme**, CITA / Royal Danish Academy. [Documented RAW programme](https://royaldanishacademy.com/en/case/raw). Material variability, characterisation and transformation precede assembly; recoverability returns resources to another use. Limit: Individual image artists are not named on the project page.
- **R02 — RAW-CITA Timber Workshop**, CITA / Royal Danish Academy. [Documented RAW activity](https://adk.elsevierpure.com/en/activities/the-raw-cita-timber-workshop-2/). Measurement and fabrication are linked by the identity of actual stock. Limit: Text reference only; no workshop photograph was collected.
- **R03 — RawLam**, CITA / Royal Danish Academy; Martin Tamke, Tom Svilans, Mette Ramsgaard Thomsen, Sebastian Gatz. [Related CITA precedent; not asserted to be the current RAW grant project](https://royaldanishacademy.com/en/case/rawlam). Preserve a material signature through sensing, matching and joining. Limit: Project-team attribution; individual image authors are not separately identified. File names joint/layers are legacy download names, not depictions.
- **R04 — ICD/ITKE Research Pavilion 2016–17**, ICD/ITKE, University of Stuttgart. [Related research example; not RAW](https://www.icd.uni-stuttgart.de/projects/icditke-research-pavilion-2016-17/). Use contact, span and trajectory as fabrication cues; avoid a generic factory. Limit: Page fetch had a TLS failure in the script. The browser loaded the official page; two credited original images were downloaded there.
- **R05 — BAMB Material Passports**, BAMB / EPEA. [External circular-construction reference](https://www.bamb2020.eu/topics/materials-passports/). Provenance belongs to a material and an actor; it is not an approval badge. Limit: The image bears EPEA copyright; studied only, not licensed for RAW production artwork.
- **R06 — Reversible Building Design**, BAMB; Elma Durmisevic / University of Twente. [External construction/disassembly reference](https://www.bamb2020.eu/topics/reversible-building-design/). A connection can retain or destroy recoverability. A deliberate gap can distinguish assembly from release. Limit: Selected guideline PDF page 18 studied, not a full engineering review of the guide.
- **R07 — LCA stages and assessment phases**, LCA.no. [Technical explanatory reference](https://lca.no/en/kunnskapsbank/topics/what-is-lca/). Separate C operations from D beyond the boundary; distinguish lifecycle modules from assessment phases. Limit: This is an explanatory illustration, not the normative standard itself.
- **R08 — Grasshopper icon design guide**, David Rutten / McNeel. [Native host design guidance](https://developer.rhino3d.com/guides/grasshopper/grasshopper-icons/). Small-scale clarity needs optical judgement, not uniform reduction of a large drawing. Limit: Text guide studied; no independent illustrative image collected from this page.
- **R09 — Original Grasshopper icon collection**, Original artwork David Rutten / McNeel; recovery collection Aidan Newsome. [Existing host artwork, not RAW concepts](https://github.com/aidannewsome/grasshopper-icons). Distinct geometric events can remain identifiable with economical colour accents. Limit: Only three examples collected. Recovery repository is not a blanket licence to reuse the artwork.
- **R10 — Galapagos creator/community page**, David Rutten. [Distinctive Grasshopper research-tool identity](https://www.grasshopper3d.com/group/galapagos). An unusual paired silhouette is memorable without spelling out each command. Limit: Study only. Do not trace the contours, colour relationship or brand mark.
- **R13 — Ladybug Tools**, Ladybug Tools; Mostapha Sadeghipour Roudsari and Chris Mackey. [Environmental-analysis plugin reference](https://www.ladybug.tools/ladybug.html). A distinctive family emblem and domain-specific diagrams can coexist. Limit: Do not reuse the ladybird, palette or sun-path artwork as RAW icons.
- **R14 — ÖKOBAUDAT official portal**, German Federal Ministry for Housing, Urban Development and Building / ÖKOBAUDAT. [Official material-source identity](https://www.oekobaudat.de/en.html). Source identity may come from concise naming and architectural data context, not a flag. Limit: The downloaded header GIF is the ministry mark, not the ÖKOBAUDAT logo. No official artwork is proposed for production.
- **R15 — Danish BR18 / Table 7**, Social- og Boligstyrelsen / Bygningsreglementet. [Official material-source terminology](https://www.bygningsreglementet.dk/Bilag/B2/Bilag_2?Layout=ShowAll). A table/register is a source cue. BR18 is more specific than the country abbreviation DK. Limit: Captured current page is the identity reference. The separately downloaded PDF is not asserted to be the current data version.
- **R16 — RAW Impact Explorer**, Tanya Tsui. [RAW research interface](https://tanyatsui.github.io/raw_impact_explorer/). Study data hierarchy and burden distinctions; avoid giving operational metrics carbon-storage meanings. Limit: Captured 18 Oct 2026; page displayed a 16 Oct 2026 sheet snapshot. This differs from older local audit descriptions. No calculation parity or factor validation is claimed.
- **R17 — LCA circular biobased repository**, Tanya Tsui. [RAW research code reference](https://github.com/TanyaTsui/lca_circular_biobased). Material, process and scenario assumptions need distinct meanings. Limit: Text/code context only in this study; no new audit of notebook numerical correctness.
- **R21 — Midrise wood construction guide**, ROCKWOOL Group. [External architectural construction reference](https://www.rockwool.com/siteassets/o2-rockwool/documentation/technical-guides/commercial/midrise_wood_construction_comfortboard_builders_guide_technicalguide.pdf). Assembly is a relationship between distinct roles and interfaces. Limit: PDF page 4 (printed page 2) inspected. This is a cutaway, not an exploded assembly.
- **R22 — DS environmental product declaration**, Mapei; EPD-Global programme. [Actual EPD boundary reference](https://cdnmedia.mapei.com/docs/librariesprovider56/products-documents/7_epd-ds_8c38470a92e04e72b6c77e4ca04f9835.pdf?sfvrsn=b775f65b_0). Boundary and availability are explicit; C3 treatment and C4 disposal are separate routes. Limit: NEPD-9049-9049-1, issued 26 Feb 2026. The document illustrates boundary notation; factors are neither imported nor verified for RAW.
- **R23 — Robots repository and mark**, Vicente Soler / Robots contributors. [Architectural fabrication plugin](https://github.com/visose/Robots). A strong silhouette expresses a specialised tool; RAW Machine Process needs broader scope than a robot alone. Limit: Original SVG plus a raster preview retained as reference only.
- **R25 — Kangaroo creator/community page**, Daniel Piker. [Distinctive Grasshopper plugin identity](https://www.grasshopper3d.com/group/kangaroo). Posture and negative space carry recognition before text. Limit: Do not copy the animal, silhouette or colour treatment.
- **R26 — 1-hour interior partition detail**, WoodWorks / Wood Products Council. [Architectural technical-drawing reference](https://www.woodworks.org/cad-revit-details/light-frame/1-hour-interior-partition/). Borrow the logic of section/interface, not the literal detail. Limit: Technical diagram is a visual reference, not RAW design guidance or a tested assembly specification.
- **R27 — Additive manufacturing and polymer testing**, NIST; Aaron M. Forster, NIST IR 8059. [Scientific process/material testing reference](https://www.nist.gov/additive-manufacturing/research-areas/technologies). A deposited trace or a sectional observation is more domain-specific than a gear. Limit: PDF page 25 / printed page 16 inspected. No precise machine energy or material properties inferred.
- **R28 — Milling formulas and definitions**, Sandvik Coromant. [Primary industrial technical reference](https://www.sandvik.coromant.com/en-gb/knowledge/machining-formulas-definitions/milling-formulas-definitions?newsarchivetagfilter=Turning). The point of tool/material interaction can stand for an operation. Limit: Page text studied; dynamic diagram images were not accessible to the collection script.
- **R29 — CT lab / CT Wood**, Luleå University of Technology. [Related wood-characterisation research](https://www.ltu.se/en/research/research-subjects/wood-science-and-engineering/ct-lab). Internal character and measured sections are valid research cues. Limit: Search/web text studied; local page/image fetch unavailable. R03 provides actual CT imagery; no claim that RAW performs CT scans.

New API check: [McNeel icon guide](https://developer.rhino3d.com/guides/grasshopper/grasshopper-icons/); installed Rhino 8 XML members `GH_DocumentObject.Icon`, `DestroyIconCache`, `Icon_24x24_Locked`, and `GH_ComponentAttributes.RenderComponentCapsule`.

Additional optical evidence: stroke/colour comparison (supporting internal reference retained privately). This compares 1.0/1.3/1.6 logical strokes in charcoal, warm neutral and slate at actual 24 px on orange. Final 1.40 variants are individual optical corrections between those comparison weights.