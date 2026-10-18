# RAW architectural visual identity — research and original concepts

> **Public reading edition · Historical development snapshot.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


**Review only · 18 October 2026 · `feat/core-plugin-foundation`. No design is approved for production.**

Start with the [HTML review](../reviews/history/index.html). It combines actual source images, three identity narratives, twenty original component concepts, source-selector alternatives and pixel-scale comparisons. The reference manifest (supporting internal reference retained privately) records URLs, organisations, relationships to RAW, depictions, interpretations, limitations, individual file URLs and SHA-256 hashes. Concept metadata (supporting internal reference retained privately) links every drawing to its source studies.

## 1. Decisions carried forward

The [previous proposal](raw-component-icon-system-proposal.md) and its four review sheets were reviewed. Its recommendation of a hybrid style and identical selector marks is historical; it is not an approval and does not govern this study.

The user's current decisions are:

1. Geometric Linework is the preferred starting language.
2. Neutral is the preferred colour treatment.
3. Existing designs are **not approved**.
4. No orange square is baked into an icon. Orange appears only as a simulated component background in review sheets.
5. Avoid generic software metaphors, excessive weight and detail that disappears at 24 px.
6. Keep Danish BR18 and German ÖKOBAUDAT identities distinguishable if a legible solution emerges.
7. Machine Process, Wall Assembly, Physical Properties, End-of-Life and Reuse / Recovery require new metaphors, not thinner versions of the previous drawings.

The current visible **RAW Physical Properties is read-only**. Its role is inspection of constructed elements, not modification of a source material. The old editor is a separate hidden compatibility component. No proposed inspection mark contains an edit pen or an addition badge.

## 2. Research method and provenance

Three stages remain separate:

| Stage | Evidence in this package | Constraint |
|---|---|---|
| Source reference | Official project pages, technical drawings, original plugin artwork, source PDFs and actual browser captures | Credited; not represented as RAW artwork |
| Design interpretation | A stated relationship such as contact, material character, junction, measurement or system boundary | An interpretation, not a claim of implementation or scientific validation |
| Original RAW concept | Newly authored SVG geometry on a 24-unit grid, with transparent PNG studies | Not traced from a source icon; not registered in Grasshopper |

The library contains **29 source records**, including access failures and reserve material so the research trail is explicit. There are **37 local source/derivative files**: original images/SVG, browser captures, PDFs and rendered PDF pages/previews. These are not 37 independent projects or 37 independently reviewed documents. R20 is a downloaded reserve report and was not used to derive a concept.

No image generation was used to invent references. Original concept geometry was drawn in review-only SVG/Python tooling. Source pages are retained as research data; none is executed by the offline review page. Full-resolution originals remain separate from board crops.

Food4Rhino distribution pages for Kangaroo and Robots were blocked; creator/community pages and repositories were used instead. Some university script requests had TLS/access failures, recorded in the manifest; the official ICD page and credited images were accessible through the browser. Sandvik and LTU provide text evidence, but no local diagram image was collected from those pages. No insecure TLS bypass was used.

Third-party imagery is reproduced in this attributed local research package only. Copyright and trademarks remain with their owners; redistribution permission has not been established. It must not be packaged into the plugin or passed off as original RAW art.

## 3. RAW identity: what is documented and what is illustrative

The [Royal Danish Academy RAW programme page](https://royaldanishacademy.com/en/case/raw) (R01) and [IntCDC AP-43](https://www.intcdc.uni-stuttgart.de/research/associated-projects/ap-43/) (R18) establish a material-led context: heterogeneous reclaimed and biobased resources, characterisation, resource-sensitive design and adaptive fabrication. The actual RAW resource-flow diagram is collected. The [RAW-CITA timber workshop](https://adk.elsevierpure.com/en/activities/the-raw-cita-timber-workshop-2/) (R02) makes timber characterisation, matching and fabrication particularly relevant.

[RawLam](https://royaldanishacademy.com/en/case/rawlam) (R03) is a **related CITA precedent**, not asserted to be part of the current RAW programme. Its stock, CT, simulation, joint-location and cutting/allocation images show how particular material can persist through multiple operations. The [ICD/ITKE 2016–17 pavilion](https://www.icd.uni-stuttgart.de/projects/icditke-research-pavilion-2016-17/) (R04) is another related example: robotic reach and fibre placement provide fabrication schematics, not proof that every such process exists in RAW.

BAMB reversible construction (R06), WoodWorks sections (R26), ROCKWOOL wall build-ups (R21), NIST additive-material testing (R27), and LTU wood CT research (R29) are external technical references. They help derive architectural and scientific notation. They do not establish supported RAW calculations or project-specific measured values.

### Short visual-identity narrative

**RAW follows a particular resource through observation, transformation, assembly and consequence.** Its visual personality can come from an irregular stock edge, a measured section, a deliberate joint or a boundary crossing. These are more specific to its research than generic file, gear, magnifier and calculator badges. A coherent family should retain material character while distinguishing what each operation does.

Themes are not equally important:

| Priority | Theme | Evidence and design implication |
|---|---|---|
| Primary | Material character and variability | R01–R03: a material is not an interchangeable anonymous cube |
| Primary | Characterisation before transformation | R02/R03: inspection must read as observation, not editing |
| Primary | Tool/material interaction | R02/R04/R28: operation at a workpiece is more useful than a factory silhouette |
| Primary | Tectonic interfaces | R03/R06/R21/R26: connection and section communicate architectural assembly |
| Primary | Lifecycle boundaries and consequence | R07/R22: C treatment and D transfer/accounting must remain distinct |
| Supporting | Input/output flows | R01/R05: useful where they describe material or evidence, not generic IT routing |
| Supporting | Biobased systems | R01/R04: relevant context, but a leaf would reduce RAW to an unsupported “green” promise |
| Avoid as default | Automatic circular benefit | Recovery may create burdens as well as credits; no universal green loop/check mark |

Tanya's [repository](https://github.com/TanyaTsui/lca_circular_biobased) (R17) and [current explorer](https://tanyatsui.github.io/raw_impact_explorer/) (R16) provide research context and interface hierarchy. The live explorer captured here shows a newer LCI-check interface than older local audit descriptions. It is studied visually; its displayed values are not plugin validation evidence.

## 4. Actual graphical reference coverage

| Requested domain | Actual evidence studied | Use in this review |
|---|---|---|
| Construction drawings | WoodWorks partition section; ROCKWOOL wall cutaway | Section, cavity, framing and continuous skins |
| Structural / tectonic diagrams | RawLam structural simulation and joint locations | Material identity carried into assembly |
| Timber fabrication / joinery | RawLam cutting allocation; BAMB product-edge diagrams | Tool contact, keyed interfaces and release |
| CNC / robotic fabrication | ICD/ITKE robot reach and winding schematics; Sandvik technical definitions | Controlled motion and workpiece interaction; no toolpath-energy inference |
| Material passports / flows | BAMB/EPEA passport illustration; RAW resource model | Attach information to a resource; distinguish flow from certification |
| LCA stages | LCA.no module illustration | D separated from the product lifecycle boundary |
| EPD boundaries | Mapei DS EPD page 5, actual matrix and flow | Availability and boundary are explicit, not assumed |
| Circular construction | BAMB edge/disassembly diagrams | Recoverability depends on connections, not an all-purpose recycling arrow |
| Industrial process schematics | ICD process diagrams; NIST material-extrusion figure | Transform, place or treat material |
| Scientific material measurement | RawLam CT image; NIST bead/interface and testing context | Specimen, section, envelope and physical observation |
| Grasshopper systems | Original native icons, Galapagos, Kangaroo, Robots, Ladybug | Readable silhouette and family personality without copying branding |
| Research-tool identity | RAW explorer and creator-maintained plugin references | Distinctiveness may come from a coherent metaphor rather than more decoration |

The first two reference boards (supporting internal reference retained privately) (fabrication/lifecycle board (supporting internal reference retained privately)) contain actual images and short interpretations. The HTML library exposes every collected file and its credit. PDF crops are labelled with their source page; originals remain available.

## 5. Five component domains and twenty new concepts

### RAW Construct Machine Process

The domain contains subtraction, placement, motion, feed and stock preparation. A single robot arm excludes many supported processes; a gear does not explain what happens to material. Coreless winding suggests tensioned placement between anchors, while CNC suggests an edge acting on stock. Neither alone is a universal identity. The concepts therefore explore operation, transformation, sweep and deposition separately.

| ID | Concept | Interpretation | Reference | Main limitation |
|---|---|---|---|---|
| M1 | Contact cut | Tool edge, notch and separated chip | R03/R28 | Subtractive bias |
| M2 | Working plane | Irregular stock acquires a regular profile across a working plane | R01/R03 | Abstract on first encounter |
| M3 | Swept operation | Tool position, path and workpiece | R04/R28 | May resemble rotation/navigation |
| M4 | Deposited trace | A feed tip leaves a continuous material trace | R04/R27 | Additive/winding bias |

None depicts energy or environmental benefit. The icon does not claim that a schematic path can calculate machine consumption.

### RAW Wall Assembly

Architectural assembly is not merely three bars. Sections reveal skins, cavity, framing, opening and junction behaviour. An exploded arrangement is useful only when the relation between parts remains visible. These concepts use a corner, a reveal, frame/infill and a joint.

| ID | Concept | Interpretation | Reference | Main limitation |
|---|---|---|---|---|
| W1 | Corner continuity | Multiple interfaces turn through one architectural junction | R21/R26 | Corner-specific impression |
| W2 | Opening + reveal | Offset envelope planes frame an opening | R21/R26 | Most detailed small-scale mark |
| W3 | Frame + infill | Skins, stud and separate infill have different roles | R21/R26 | Timber-frame bias |
| W4 | Keyed interface | Complementary profiles define an assembly connection | R06/R03 | Could represent general joinery |

### RAW Physical Properties — read-only

The visible component inspects element quantities. Material measurement, envelope dimensions, mass and internal character provide read-only metaphors. CT and testing references are inspiration, not a claim that the component performs scans or laboratory tests.

| ID | Concept | Interpretation | Reference | Main limitation |
|---|---|---|---|---|
| P1 | Opposed probes | Observe a specimen through extents/contact readings | R02/R03/R29 | Dimensions may dominate mass/density meaning |
| P2 | Section readings | Slices expose internal character | R03/R29 | Could suggest scanning capability |
| P3 | Mass / envelope | Physical observations relate mass and bounded volume | R27/R03 | Balance may suggest a nontechnical metaphor |
| P4 | Material field | Section and observation points show differing character | R03/R27 | Dots are metaphor, not calculated density distribution |

### RAW End-of-Life Scenario

C-stage work includes deconstruction, transport, processing and disposal. It does not automatically deliver recycling or a credit. A terminal route is as legitimate as a recovery route. **E1–E4 below are concept IDs, not C1–C4 module labels**; for example, sorting is not being redefined as C2 transport.

| ID | Concept | Interpretation | Reference | Main limitation |
|---|---|---|---|---|
| E1 | Release the joint | Pin withdrawal and separated assembly edges | R06/R07 | Emphasises deconstruction |
| E2 | Separated fractions | Treatment separates distinct material streams | R05/R07/R22 | Small compartments become dense |
| E3 | Treatment nip | Processing changes the incoming material condition | R07/R22 | May resemble a machine mode |
| E4 | Terminal strata | A receiving bed terminates a route | R07/R22 | Emphasises disposal |

### RAW Reuse / Recovery Scenario

D concerns potential burdens/benefits beyond the boundary, with evidence and accounting rules. Reuse can retain an intact member; remanufacturing changes its role; recycling can supply feedstock; recovery does not automatically imply a negative result. The concepts show a second system or comparison, rather than recycling C-stage material back into the same undifferentiated loop.

| ID | Concept | Interpretation | Reference | Main limitation |
|---|---|---|---|---|
| D1 | Second span | A retained member serves another bay across a boundary | R01/R06/R07 | Intact-reuse bias |
| D2 | Recovered feedstock | Fragments supply a profile in another system | R01/R07/R22 | Transformation alone cannot establish a credit |
| D3 | Counterfactual pair | Supplied output compared with an interrupted reference | R07/R22 | Abstract; requires its label |
| D4 | Re-seated member | A retained keyed member fits another connection | R03/R06 | Near the assembly/joinery vocabulary |

[Machine/wall sheet](../reviews/history/raw-identity-research/03-machine-wall-concepts.png) · [Properties/lifecycle sheet](../reviews/history/raw-identity-research/04-properties-lifecycle-concepts.png).

## 6. Three original identity narratives

These are differences in visual meaning, not renamed line/solid/hybrid styles. All start with neutral geometric linework.

| Direction | Visual story and vocabulary | Stroke/fill rules | Cross-family examples | Strength / weakness at 24 px |
|---|---|---|---|---|
| A — Tectonic Notation | Cut faces, orthogonal profiles, joints, probes, receiving sockets; RAW reads how parts meet | Nominal 1.15–1.35 on a 24-grid; open cavities; a short section edge where useful; no cube badge | M1 operation; W1 construction; P1 inspection; E1 disassembly; D4 second use | Clear junctions and gaps; orthogonal bias and similar interlocks risk repetition |
| B — Material Signatures | An asymmetric stock edge and internal character survive transformation; recognition comes from a particular material | Nominal 1.2–1.45 contours; few tertiary marks; no decorative grain texture or leaf | M2 transformation; W4 interface; P2 observation; E2 fractions; D1 retained resource | A recognisable RAW personality without a mascot; texture/scanning cues can overpromise capability |
| C — Lifecycle Traces | Open, interrupted and terminated paths; a boundary and a receiving condition express consequence | Nominal 1.15–1.35; sufficiently long dash segments; no closed recycling loop or automatic green benefit | M4 placement; W2 interface; P4 observation; E4 termination; D2 next system | Good C/D distinction; most abstract and sensitive to crowded boundary detail |

The [narrative sheet](../reviews/history/raw-identity-research/05-identity-directions.png) gives the full story, rules, vocabulary and limitations. This is not yet a full component-family rollout. Source selectors are studied separately because source identity is a different semantic problem from an operation. Future GWP/reporting marks can use boundary/accounting notation once a family is approved, without adding a generic calculator badge now.

## 7. Source-selector identity study

The [official Danish regulation page](https://www.bygningsreglementet.dk/Bilag/B2/Bilag_2?Layout=ShowAll) (R15) names **Tabel 7, Generisk datagrundlag**. BR18 identifies the regulatory context; DK identifies a country. Neither is a certification statement.

The [official ÖKOBAUDAT portal](https://www.oekobaudat.de/en.html) (R14) uses a long wordmark and an architectural facade image. Its ministry header is not an ÖKOBAUDAT component symbol. Full logos and flags would add detail and imply affiliation; neither is adopted.

| Option | Danish / German | 24 px finding | Open decision |
|---|---|---|---|
| S1 | DK / ÖB | Short and readable; material register line relates the pair | ÖB is proposed RAW shorthand, not official terminology; DK is not library-specific |
| S2 | BR18 / ÖKO | More source-specific, but BR18 needs a smaller four-character label | Whether specificity is worth the denser lettering; ÖKO remains abbreviated |
| S3 | Table register / facade bay | Clear graphic difference without microtext | Source identity is weak without the component name |

All options have transparent SVG/PNG studies and 24 px samples in the [selector sheet](../reviews/history/raw-identity-research/06-selector-identities.png). No source-specific option is approved. Current selector custom attributes suppress the standard centre-icon area; any future decision to show an icon there is a separate UI task, not part of this research.

## 8. Grasshopper identity study

The [McNeel guide](https://developer.rhino3d.com/guides/grasshopper/grasshopper-icons/) (R08) anchors the small-scale design constraints. Three actual native icons from the [recovered original collection](https://github.com/aidannewsome/grasshopper-icons) (R09) show that the geometric event, silhouette and limited accent can do more than a generic action badge.

[Galapagos](https://www.grasshopper3d.com/group/galapagos) (R10) has a memorable paired organic mark; [Kangaroo](https://www.grasshopper3d.com/group/kangaroo) (R25) has an immediately recognisable animal posture. Their strength is family personality, not literal depiction of every solver operation. RAW should learn that principle without adopting either creature or contour.

[Robots](https://github.com/visose/Robots) (R23) uses an articulated silhouette appropriate to a specialised fabrication plugin. It would be too narrow as RAW's general machine-process identity. [Ladybug Tools](https://www.ladybug.tools/ladybug.html) (R13) combines a distinct family identity with domain-specific analytical symbols. RAW can similarly establish coherence without repeating the same emblem on every action.

The HTML displays these actual third-party artworks under a clearly labelled reference heading. None is part of the original RAW concept folder.

## 9. Stroke, colour and optical findings

The study compares **1.00, 1.25 and 1.50** nominal stroke widths on the 24-unit grid, at **64, 32, 24, 18 and 16 px**. It tests charcoal `#303638`, warm neutral `#534A43`, and an optional muted interface accent `#536F77` against simulated orange, grey, selected and white palette backgrounds.

- 1.00 remains open but becomes delicate after uniform reduction, particularly on orange at 16 px.
- 1.50 gives stronger silhouettes but closes dense details first: infill, nested slices and small sorting compartments.
- 1.25 is the **comparison baseline**, not an approved production specification.
- The 18/16 px optical pass retains a one-output-pixel minimum main stroke and removes tertiary grain/ticks. Different marks still need individual refinement; one mathematical weight does not solve every symbol.
- W2, W3, P2, P4 and E2 have higher detail risk. Simple profiles and wide interface gaps tolerate reduction better.
- Neutral linework separates icon meaning from visualisation colours. An optional accent marks an interface only; it does not mean verified, complete, low-impact or beneficial.
- C/D distinction must survive monochrome. A green recycle loop would defeat that requirement.

The [stroke/colour sheet](../reviews/history/raw-identity-research/07-stroke-colour.png) and [actual 24 px sheet](../reviews/history/raw-identity-research/08-actual-24px.png) are raster comparisons. The HTML also places each 24×24 file at exactly 24 CSS pixels. Browser zoom and OS display scaling affect physical viewing size. These are **not native Grasshopper screenshots or a completed user-recognition test**.

## 10. Review package and verification

Eight review sheets keep the study organised: two reference boards, two concept boards, one narrative sheet, one selector sheet, one optical/colour sheet and one actual-size sheet. All twenty concepts and six selector alternatives have SVG masters and transparent PNGs at the five requested sizes. Review-only generators make the sheets reproducible; they do not write to production folders.

Verification covers source attribution, source/concept separation, local links, image dimensions and alpha channels, raster sheet inspection, browser layout and comparison against the recorded production-file hashes. Final verification results are recorded in verification.json (supporting internal reference retained privately).

No production icon registration, component bitmap replacement, attribute edit, port/GUID change, calculation change or dataset change was made. Release build, automated calculation tests and native Rhino tests were **not run** because this task changes research/documentation artifacts only. Native palette/canvas testing belongs to a later, separately approved implementation task. The working tree already contained unrelated changes; they were preserved.

## 11. Decisions for joint review

1. Which narrative should guide refinement: Tectonic Notation, Material Signatures or Lifecycle Traces? A deliberate combination remains possible.
2. Which metaphor for each component: M1–M4, W1–W4, P1–P4, E1–E4 and D1–D4? Decide meaning before final pixel polish.
3. Should selectors prioritise short initials, source identifiers or text-free source cues?
4. Should the final family remain strictly monochrome, or allow one purposeful accent? Confirm neutral temperature and per-symbol weight after examining the 24 px samples.
5. Which scope-specific biases are acceptable for a general component symbol—for example, subtraction for Machine Process or disposal for End-of-Life?

**No winner has been selected. Approval of a direction is not production implementation approval. Stop here for review; no commit or push.**