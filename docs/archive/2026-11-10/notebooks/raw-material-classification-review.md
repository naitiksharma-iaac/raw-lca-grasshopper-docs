# Material classification — review before reassignment

Material Catalogue V1 / 18 October 2026. All current categories remain unchanged.

## Three separate concepts

**Source taxonomy** describes the provider's classifications. **Current RAW family** is the selector's first-matching keyword label. **Proposed category** is a non-authoritative review suggestion. The catalogue never writes one into another.

Danish storage does not assert a source material taxonomy; translated names feed a richer Danish family function. German records have a hierarchical original-language category and an English category, while the browser uses a smaller shared keyword function. RAW has no additional persistent subcategory for these selector families. Source hierarchy must not be presented as a RAW subcategory.


| Current RAW family | Danish | German |
| --- | --- | --- |
| Adhesive / Sealant | 16 | 0 |
| Aluminium | 4 | 45 |
| Asphalt / Bitumen | 6 | 0 |
| Board / Panel | 18 | 96 |
| Brick / Ceramic | 11 | 327 |
| Cement / Mortar | 15 | 0 |
| Clay | 7 | 0 |
| Concrete | 32 | 730 |
| Door / Window | 25 | 571 |
| Flooring | 18 | 360 |
| Glass | 10 | 8 |
| Gypsum / Plaster | 19 | 23 |
| Insulation | 19 | 318 |
| Membrane / Roofing | 23 | 126 |
| Other | 3 | 279 |
| Paint / Coating | 26 | 0 |
| Plastic / Rubber | 13 | 0 |
| Services / MEP | 112 | 1851 |
| Steel / Metal | 16 | 264 |
| Stone / Aggregate | 26 | 0 |
| Timber / Wood | 22 | 81 |



| Source | Review candidates |
| --- | --- |
| Danish BR18 | 3 |
| ÖKOBAUDAT | 1044 |



## Issues requiring judgment

| Review rule | Why it is flagged | Suggested approach, not a reassignment |
|---|---|---|
| Other fallback | No recognised family keyword; unrelated materials may accumulate | Inspect the source before adding a new material family |
| Energy / transport units | MJ and kgkm describe activities, not ordinary products | Separate process energy and logistics facets |
| End-of-life source categories | Waste-treatment rows can inherit material keywords | Separate product/process role from material composition |
| Wood routed to application families | A wood product may be labelled flooring, board or insulation | Keep composition and application as two independent facets |
| Plastics routed to application families | Doors, pipes or membranes may all be polymers | Preserve source composition plus usage, rather than choosing one “correct” label |
| Coverings labelled Flooring | The source branch may include more than floors | Verify product use before a flooring-specific classification |
| Cement / mortar within Concrete | Keywords currently group binders and concrete products | Review a separate binder/mortar distinction |
| Aggregates under a Concrete parent | “Magmatic rocks” inherits Concrete from the parent source path | Review Stone / aggregate; the source leaf is Natural stone |
| Coatings for metal substrates | “Varnish systems for metals” triggers Steel / Metal | Review Paint / coating; substrate is not the supplied material |
| Clay leaf routed to Other | The German family matcher has no clay branch | Review Clay / earth without changing original source taxonomy |

Flags are conservative lexical review candidates, **not confirmed errors**. Some application-based labels are appropriate. A record without a flag has not been validated by a human. The explorer exposes every published source→RAW pair and a complete aggregate crosswalk for both packs.


| Original German-pack record | Source ID | RAW family | Proposal | Reason |
| --- | --- | --- | --- | --- |
| ACEMat? | 98775611-4588-49a7-b539-9beb7492fc4f | Other | Review source taxonomy | No recognised keyword; Other is a fallback, not a material type. |
| magmatic rocks | 11078fc0-f5b5-46d2-8d6d-e93b2cea577b | Concrete | Stone / aggregate | Parent category contains Concrete but the source describes an aggregate, not necessarily concrete. |
| Tufted wall-to-wall carpet with 100% recycled PA6 pile material and textile backing, LC1 - Tufted wall-to-wall carpet | fe64ddf7-d556-4589-98cc-c97a0aad0c8e | Flooring | Polymer products + separate application tag | Source composition and RAW application are different classification axes; not automatically an error. |
| Clay powder | a60489dc-32f2-4ff6-83d2-eb8f4f630ebd | Other | Clay / earth | The source leaf explicitly names Clay, but the current German family function has no clay branch. |
| High density fibreboard (German average) | f9f40b59-268d-4a0b-8c80-d978ac97608f | Board / Panel | Wood products + separate application tag | Wood source category is routed to an application family by keyword precedence. |
| Coating powder IGP-DURA®sky 9503 - Powder coating | d9bbd813-2f53-4695-98c8-17d5b54b62e5 | Steel / Metal | Paint / coating | Metal is the substrate in the source category; the supplied product is a coating. |
| Usage - ventilation (1kWh electricity consumption) | b0230a76-0440-4c88-afb6-922c1ccdb815 | Services / MEP | Process energy | Activity unit should be distinguished from physical product families. |
| Blast-furnace cement CEM III/A - Hydraulic cement | 202fc149-0a84-40c8-a5d3-fbb5cdcb55a8 | Concrete | Cement / mortar / binders | Binder or mortar keywords currently share Concrete; review the actual product. |
| Wood-based products incineration in municipal solid waste plant | 53945e96-502a-4c3f-b487-f087b1fabcb7 | Timber / Wood | End-of-life processes | A treatment process can inherit the material name but is not the primary product. |
| Carpet Tile Sticker - Self-Adhesive Floor Sticker | 0b13c34f-1b15-498d-9133-091535333231 | Flooring | Finishes / coverings | Source coverings can include wall or ceiling uses; verify the product before labelling it flooring. |



## Possible V2 taxonomy

Retain source taxonomy and add independent reviewable facets: composition (wood, mineral, metal, polymer, fibre, binder), product form (sheet, layer, member, unit), application (facade, floor, roofing, services), dataset role (product, energy, transport, treatment), and supply/reuse status. Do not infer reclamation or circularity from a material name. Preserve composite products and assemblies as such rather than forcing every record to one pure substance.

Potential new distinctions include cement/mortar versus concrete; polymers versus service installations; coatings/adhesives versus coverings; engineered wood versus generic panels; and processes versus products. Review “Other” first, then high-count families and keyword precedence. Public example rows below are German only; Danish row-level review remains private pending redistribution clearance.

No category migration or production unit resolver is included. V2 should introduce evidence-backed mapping decisions with a version, reviewer and rationale, while leaving the original category intact.

[Material Explorer and complete category crosswalk](../materials/index.html) · [Dataset audit](raw-material-catalogue-audit.html)
