# Architectural Material Library — classification review V1

This is a separate research layer over all **5,520 pinned RAW records**. The original source categories, material contracts and factors remain unchanged. It is not a replacement for the complete Danish/German selectors.

## Evidence and review method

1. Read every record from the complete V1 audit, including original taxonomy, names/reference flows, declared quantity, source URLs and current RAW browsing label.
2. Apply ordered source-taxonomy rules. RAW's existing keyword-derived family is a comparison field, never classification evidence.
3. Retrieve linked official technical-purpose and technology descriptions for Danish records and the named difficult German examples. Keep URL, version, page hash and retrieval status. Failed lookups remain explicit. A linked classification belongs to the linked source, not retroactively to the Danish table.
4. Independently inspect a stratified sample and difficult cases. Record named decisions and evidence. These are **agent evidence reviews**, not human expert approval.
5. Keep every unsampled automatic assignment conditional or unresolved. Never claim that all 5,520 records were manually reviewed. General construction materials need a specified use, rather than exclusion merely for lacking a finished-product name.

The downloaded CSV does not carry full technical-purpose descriptions for every German product. Source taxonomy and reference flow support a proposal, not final approval. Fetching a web page automatically is not equivalent to reviewing its application. Short technical-purpose text is available privately for linked records; public review evidence uses bounded paraphrases and source links.

## Category houses


| House | Subcategories | Records |
| --- | --- | --- |
| Structure | Structural timber; Structural profiles; Reinforcement; Structural products — application needed | 202 |
| Walls and Partitions | Masonry units; Wall boards; Partition systems; Precast wall products | 160 |
| Floors | Structural floor products; Screeds and subfloors; Surface finishes; Floor systems | 421 |
| Facades and Cladding | Curtain wall systems; Facade assemblies; Cladding products; Facade coatings | 69 |
| Roofs | Roof coverings; Roof membranes and underlays; Roof systems; Roof accessories | 104 |
| Insulation | Board and mat insulation; Loose and formed insulation; Insulation systems; Thermal breaks | 305 |
| Doors, Windows and Glazing | Doors; Windows; Glazing and infill; Frames and profiles; Rooflights | 352 |
| Finishes | Wall and ceiling finishes; Paints and coatings; Primers and adhesives; Multi-application stone products | 138 |
| Connections and Accessories | Fixings and fittings; Seals and joints; Membranes and barriers; Shading and opening devices | 279 |
| Building Services / MEP | Lighting and electrical; Heating and hot water; Ventilation and cooling; Water and drainage; Conveyance; Fire protection | 1893 |
| General Building Materials | Concrete and mortar; Binders and additives; Aggregates and fill; Timber and boards; Metal stock; Unspecified building products | 1138 |
| Ceilings | Ceiling systems; Ceiling panels and acoustic products | 52 |
| Other Materials | Manufacturing feedstocks; Manufacturing intermediates; Energy and transport; Treatment and industrial processes; Application unresolved | 407 |


Retain the twelve proposed houses and add **Ceilings**, because actual ceiling panels/systems must not automatically be classified as structural floors. Keep floor structure, screeds/subfloors and floor finishes distinct. Keep General Building Materials for multi-use stock and mixes, not as a synonym for waste or industrial inputs. Do not split by composition at the top level: steel may be structure, a door, reinforcement, sheet stock or a manufacturing intermediate.

Insulation is a function house; a wall/facade system with insulation remains an assembly when the source scope includes multiple layers. The primary house is a navigation choice, not exclusivity. Secondary applications record evidenced alternatives without double-counting catalogue totals.

## Eligibility and role are independent

**Architectural — reviewed:** documented agent review supports building use and a defensible proposed house; user approval pending. It does not certify the product or its LCA.

**Architectural — conditional:** source evidence supports construction relevance but individual application/specification/reference quantity or record review is incomplete.

**Other / unresolved:** manufacturing feedstocks, intermediates and activities, or insufficient evidence. This is not a declaration that a record is useless for construction LCA. Process records remain valid candidates for future correctly bounded workflows.

Roles distinguish products, assemblies, general construction material, accessories, raw feedstocks, intermediates, energy/transport, other industrial activities and unresolved cases. A powder is not automatically a finished coating or clay brick. Conversely, cement, concrete, timber and sheet metal can remain conditional construction materials when their source context supports it.


| Source | Reviewed eligibility | Conditional | Other / unresolved | Total |
| --- | --- | --- | --- | --- |
| denmark_br18_table7 | 4 | 284 | 153 | 441 |
| okobaudat | 26 | 4799 | 254 | 5079 |


## Difficult cases and corrections to earlier hypotheses


| Review | Proposed house / role | Finding |
| --- | --- | --- |
| R01 | Building Services / MEP / Architectural accessory or component | Official purpose identifies office lighting; technology describes a channel with separately ordered parts. Treat as a lighting component, not a complete installed luminaire. |
| R02 | Other Materials / Intermediate manufacturing product | The source allows construction use broadly but identifies an aluminium cast part at the factory gate. No installed building application is specified; retain intermediate role. |
| R04 | Facades and Cladding / Building assembly | Official description includes standing-seam profiles and clips for roofs and facades. Retain facade as primary navigation and roof as a secondary use; do not split its factor into separate parts. |
| R05 | Other Materials / Unresolved | Technical purpose is erosion control, slopes and channels. Technical textile does not establish a building membrane. Consider a future landscape/civil works facet after scope agreement. |
| R06 | Finishes / Finished building product | Official purpose describes finished natural-stone cladding, floors, roofs and special pieces. Concrete aggregates is a misleading navigation parent here; use multi-application stone products rather than Concrete or raw aggregate. |
| R07 | Walls and Partitions / Building assembly | Technical purpose identifies a modular wall system for healthcare, laboratories and sanitary/sterile areas. Preserve the system boundary; the powder-coated steel composition does not make it generic metal stock. |
| R08 | Floors / Finished building product | Source taxonomy and technology identify tufted carpet. It is a representative worst-case construction rather than an identified purchasable product; a matching PRODIS product/use class is still needed. |
| R09 | Doors, Windows and Glazing / Architectural accessory or component | Technical purpose describes steel door frames with hinges/hardware and optional glazing fitted later. Correct the broad Doors leaf to frames; do not represent a complete door. |
| R12 | Doors, Windows and Glazing / Architectural accessory or component | Official application is supporting window/window-door installation in the insulation layer. EPS composition alone incorrectly suggests bulk insulation; this is a frame-system component. |
| R14 | Other Materials / Unresolved | The source provides only broad construction-use advice and an asphalt production description. A building-floor/roof application is not established; retain unresolved rather than infer one from asphalt. |
| R15 | Other Materials / Raw manufacturing feedstock | Source technology describes extracted, dried and milled clay powder at the factory gate. Broad construction-use advice does not define a finished brick, plaster or panel. A specified mix/application is required. |
| R16 | Other Materials / Other industrial dataset | Technical description identifies incineration with energy recovery. Generic construction-use advice must not override this process boundary or classify it as new timber. |
| R17 | Other Materials / Energy or transport activity | Source Use class, Electricity reference flow and MJ quantity identify an operational activity. This is not installed ventilation equipment. |
| R18 | Facades and Cladding / Intermediate manufacturing product | Official technical purpose explicitly names metal facades, while technology describes supplied coating powder. Conditional architectural coating intermediate; requires application/substrate specification and applied-quantity evidence. It is not steel. |
| R21 | General Building Materials / General construction material | Official purpose lists walls, stairs, floors and foundations. Keep generic placed concrete accessible as conditional construction material, requiring project mix/application and geographical representativeness. |
| R22 | Floors / Finished building product | Technical purpose describes dry screed on a load-bearing substrate, with floor covering added later. It is neither the load-bearing slab nor the final surface finish. |
| R23 | Structure / Finished building product | Official purpose identifies load-bearing steel profiles, with coating/exposure qualifications. Keep structural profile navigation while leaving engineering approval and exact section specification to the project. |
| R24 | Walls and Partitions / Finished building product | Official purpose identifies load-bearing, non-load-bearing and foundation walls; production describes moulded/pressed precast units. Correct the broad precast family to wall masonry, not a generic slab. |
| R25 | Facades and Cladding / Finished building product | Official purpose identifies a ventilated-facade cladding panel. Mineral-wool source composition does not make it bulk thermal insulation. |


The natural-stone example is a deliberate check against taxonomy-only mistakes: its source parent says Concrete aggregates, while its documented application describes finished natural-stone products. The review therefore supersedes both the old RAW Concrete label and the earlier aggregate-only suggestion. Secondary floor/roof/wall uses must remain visible.

The generic and branded powder-coating cases require a distinction between supplied coating material, an industrial coating process and an installed architectural finish. Metal substrate does not mean that the coating itself is steel. Clay powder remains a feedstock, even when a source says it can be used in construction; no finished brick/panel is inferred.

## Quality-control sample


| Review ID / source ID | House | Role | Review finding |
| --- | --- | --- | --- |
| R01 / 845d5186-c889-4ea1-a7e2-c0d2e749b65a | Building Services / MEP | Architectural accessory or component | Official purpose identifies office lighting; technology describes a channel with separately ordered parts. Treat as a lighting component, not a complete installed luminaire. |
| R02 / d9bfad25-c581-4fe3-b5e3-171ddb59c808 | Other Materials | Intermediate manufacturing product | The source allows construction use broadly but identifies an aluminium cast part at the factory gate. No installed building application is specified; retain intermediate role. |
| R03 / 7aba3603-0689-4da5-8d24-fd92ae398d07 | Structure | Finished building product | Official technical purpose identifies structural building and bridge components. Source flow and m3 quantity describe KVH timber; project grading/design checks remain separate. |
| R04 / d712008c-140f-4811-bee0-219cb6034244 | Facades and Cladding | Building assembly | Official description includes standing-seam profiles and clips for roofs and facades. Retain facade as primary navigation and roof as a secondary use; do not split its factor into separate parts. |
| R05 / 98775611-4588-49a7-b539-9beb7492fc4f | Other Materials | Unresolved | Technical purpose is erosion control, slopes and channels. Technical textile does not establish a building membrane. Consider a future landscape/civil works facet after scope agreement. |
| R06 / 11078fc0-f5b5-46d2-8d6d-e93b2cea577b | Finishes | Finished building product | Official purpose describes finished natural-stone cladding, floors, roofs and special pieces. Concrete aggregates is a misleading navigation parent here; use multi-application stone products rather than Concrete or raw aggregate. |
| R07 / 4e754af4-9517-4078-8a7c-75745e54846c | Walls and Partitions | Building assembly | Technical purpose identifies a modular wall system for healthcare, laboratories and sanitary/sterile areas. Preserve the system boundary; the powder-coated steel composition does not make it generic metal stock. |
| R08 / fe64ddf7-d556-4589-98cc-c97a0aad0c8e | Floors | Finished building product | Source taxonomy and technology identify tufted carpet. It is a representative worst-case construction rather than an identified purchasable product; a matching PRODIS product/use class is still needed. |
| R09 / 5a0c9f26-8f9e-4f77-a93c-7eac3f4a312e | Doors, Windows and Glazing | Architectural accessory or component | Technical purpose describes steel door frames with hinges/hardware and optional glazing fitted later. Correct the broad Doors leaf to frames; do not represent a complete door. |
| R10 / 9394795b-a620-4f54-b72c-c535bb0a02f0 | Ceilings | Finished building product | Official purpose identifies suspended-ceiling mineral tiles for cladding/acoustics. Do not infer a structural floor from the source ceiling-panel class. |
| R11 / a1027332-3580-4521-a8a1-34ee644a6f5c | Roofs | Finished building product | Official purpose identifies moisture protection under roofs and on walls. Roof is the primary navigation choice; wall application is retained separately. |
| R12 / 9d287136-525a-4d37-b698-b834d4cc59ae | Doors, Windows and Glazing | Architectural accessory or component | Official application is supporting window/window-door installation in the insulation layer. EPS composition alone incorrectly suggests bulk insulation; this is a frame-system component. |
| R13 / f86784a7-155b-462f-8e9a-ba20b7469024 | Finishes | Finished building product | Official purpose identifies a wetroom wall-covering panel installed over existing surfaces or plasterboard. It is a finish product, not an entire wall assembly. |
| R14 / d24a85e3-f395-4124-9874-c01f977a893f | Other Materials | Unresolved | The source provides only broad construction-use advice and an asphalt production description. A building-floor/roof application is not established; retain unresolved rather than infer one from asphalt. |
| R15 / a60489dc-32f2-4ff6-83d2-eb8f4f630ebd | Other Materials | Raw manufacturing feedstock | Source technology describes extracted, dried and milled clay powder at the factory gate. Broad construction-use advice does not define a finished brick, plaster or panel. A specified mix/application is required. |
| R16 / 53945e96-502a-4c3f-b487-f087b1fabcb7 | Other Materials | Other industrial dataset | Technical description identifies incineration with energy recovery. Generic construction-use advice must not override this process boundary or classify it as new timber. |
| R17 / b0230a76-0440-4c88-afb6-922c1ccdb815 | Other Materials | Energy or transport activity | Source Use class, Electricity reference flow and MJ quantity identify an operational activity. This is not installed ventilation equipment. |
| R18 / d9bbd813-2f53-4695-98c8-17d5b54b62e5 | Facades and Cladding | Intermediate manufacturing product | Official technical purpose explicitly names metal facades, while technology describes supplied coating powder. Conditional architectural coating intermediate; requires application/substrate specification and applied-quantity evidence. It is not steel. |
| R19 / 699e3d57-72b4-402d-a0ee-cebb06f3cdf1 | Insulation | Finished building product | Official purpose covers building and technical insulation, including multiple forms. Retain Insulation; matching density range, product form and application are still required. |
| R20 / dd902c86-84dd-47b8-a45a-bab0b054bc72 | Connections and Accessories | Architectural accessory or component | Technical description identifies a mortise lock for building doors, despite an opaque product name. Do not classify from the name alone. |
| R21 / cc9bd425-82d6-41c5-9d4d-72e0dfa6ba38 | General Building Materials | General construction material | Official purpose lists walls, stairs, floors and foundations. Keep generic placed concrete accessible as conditional construction material, requiring project mix/application and geographical representativeness. |
| R22 / be06a50c-9a4a-4af7-837d-abc46d0d3da9 | Floors | Finished building product | Technical purpose describes dry screed on a load-bearing substrate, with floor covering added later. It is neither the load-bearing slab nor the final surface finish. |
| R23 / 755a481d-a74b-4ba0-b417-cc26767b2d50 | Structure | Finished building product | Official purpose identifies load-bearing steel profiles, with coating/exposure qualifications. Keep structural profile navigation while leaving engineering approval and exact section specification to the project. |
| R24 / 436e6be4-1b00-4885-a984-f509330b02d6 | Walls and Partitions | Finished building product | Official purpose identifies load-bearing, non-load-bearing and foundation walls; production describes moulded/pressed precast units. Correct the broad precast family to wall masonry, not a generic slab. |
| R25 / 764c4ff5-33ec-45e9-b6ee-c7b0dec8b2fe | Facades and Cladding | Finished building product | Official purpose identifies a ventilated-facade cladding panel. Mineral-wool source composition does not make it bulk thermal insulation. |

The complete private sample includes 31 product-application decisions; 6 Danish decisions are withheld individually. These reviewed product scopes cover 48 pinned records including scenario variants; the variants' calculations were not separately reviewed. Source-page retrieval outcomes: {'available': 339}.


This is a purposive sample, not a random accuracy study. It covers every proposed house and every role, both sources, ambiguous names and negative cases. Automated checks ensure complete identity coverage, legal taxonomy values, evidence traces and unchanged datasets. They cannot establish classification correctness. No accuracy percentage is claimed.

Check false positives by keeping energy, transport, operational equipment use, treatment, raw pigment and manufacturing intermediates out of approved product navigation. Check false negatives by retaining generic construction mixes and multi-use stock as conditional rather than indiscriminately excluding them. Source-specific evidence can override broad rules through an explicit review decision; unreviewed records do not inherit a sample's approval.

## Review browser and decision exports

The browser joins the classification layer to the existing licensed catalogue. Search covers name, ID and source taxonomy; filters cover house/subcategory, role, eligibility, review state and confidence. House totals cover both packs; record views and exports include only the permitted German records. The original Material Explorer stays available.

JSON/CSV proposal exports and local session decisions are review artifacts only. Decisions require a note and can propose a house/subcategory correction. No backend, dataset writeback or component update exists. Download decisions before closing the tab; they are not persisted automatically. CSV cells are protected against spreadsheet formula interpretation.

## Publication and licensing

The [official ÖKOBAUDAT data-user terms](https://oekobaudat.de/en/guidance/data-users.html), checked 19 October 2026, permit free redistribution of unchanged data with source attribution. Existing original field excerpts remain attributed to ÖKOBAUDAT/BMWSB–BBSR and their record owners; category proposals are explicitly RAW research, not source revisions. Do not infer a licence for background databases or republish EPD documents/images.

The [Danish Table 7 page](https://www.bygningsreglementet.dk/Bilag/B2/Bilag_2/Tabel_7) supplies a generic building-assessment dataset but did not establish a bulk-republication grant in this audit. Retain the existing restriction: **441 individual Danish rows, classifications, source IDs and linked text stay private**. Public counts and methodological findings are aggregate only. No private paths, code, credentials or meeting notes are exported. Full private evidence and register remain in the private repository.

## Limits and next review

- Product applications absent from local fields require exact-version technical descriptions or an EPD/product declaration.
- Legacy links may be unavailable; missing evidence is not replaced by a name guess.
- A single generic family may contain industrial and architectural products; inspect purpose and supplied state.
- Source dates/revisions are pinned, not a claim of current EPD validity. Some sampled Danish EPDs have expired validity periods; classification evidence does not renew them.
- Apparent broad-family disagreements are review flags, not confirmed source errors.
- Unit conversion and structural/code/LCIA compatibility remain separate, unmodified checks.
- Approve the taxonomy and review decisions before implementing the two additional selectors.

## Reproduction and versioning

The private audit tooling reads the immutable V1 audit and caches official source descriptions; ordered rules plus explicit review decisions generate a versioned overlay keyed by stable ID and revision. The export contains no factors. The public projection is restricted to German records and two-pack aggregate counts. Source and output hashes, rules version and sample decisions support reproduction; online evidence is cached because websites can change.

Publication retains both repository histories and the original full catalogue. No source material records or production component code are changed by this task.
