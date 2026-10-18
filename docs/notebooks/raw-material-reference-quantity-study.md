# Reference quantities — geometry is not a declared product

Material Catalogue V1 / 18 October 2026. Research only: no conversion code, source factors or Grasshopper behaviour changed.

## Two questions, kept separate

1. Can an element supply the declared product quantity with appropriate evidence?
2. Is the selected factor/module/method applicable and available?

A successful quantity match answers only the first. The usual arithmetic is **impact = factor × matching quantity / declared reference quantity**. An original factor per 1,000 units must not silently become a factor per one unit.

## Conditional resolution classes

| Class | Meaning | Example | Gate |
|---|---|---|---|
| A | Direct matching quantity | Product reference area; actual volume; measured mass; explicit product count | Same product, capacity, state, geometry convention and reference basis |
| B | Mathematical path with source information | Volume × explicitly supplied density; potential volume/reference-thickness relation | Evidence must apply to the exact record; metadata presence alone is not conversion approval |
| C | Additional project evidence required | Missing density; project thickness/section; explicit count absent | User must supply justified quantity/provenance; do not infer from a name |
| D | Unresolved for the current workflow | Metre-only factors, energy/transport activity, treatment processes | A suitable product/activity adapter and boundary contract are needed |

An individual record can have several paths. For example, kg can have A with measured mass and C with volume when density is missing. To avoid double-counting, the **geometry-route chart** uses one stated starting condition: matching product area/volume for m²/m³, volume for kg/t, and count still to be supplied for item. Activity/treatment records are D even if their unit is kg. The direct-matching count includes measured mass and explicit count, so it is a different statistic.


| Starting geometry-route class | Danish | German | Total |
| --- | --- | --- | --- |
| A | 198 | 2170 | 2368 |
| B | 74 | 724 | 798 |
| C | 150 | 2008 | 2158 |
| D | 19 | 177 | 196 |


A: matching product area/volume. B: volume with source density. C: volume needing density or explicit count still needed. D: unsupported unit or treatment/activity role. These are conditional paths, not automatic conversion permissions.


## Geometry paths

| Declared basis | Quantity path | Current RAW limitation |
|---|---|---|
| kg / t | Measured mass; or V × ρ; or A × t × ρ; or L × section area × ρ | Evidence for density, moisture/state, thickness and section as needed. Tonnes require the existing explicit 1,000 kg scale. |
| m³ | Matching solid V; or A × t; or L × section area | Voids, layers and product boundary must be consistent. |
| m² | Declared reference A | Product thickness does not automatically rescale an area factor. All external faces of a solid are not its reference area. |
| m | Matching product L | Length is measurable, but current direct factor resolution does not support m. Do not relabel as m³. |
| item | Explicit count of the declared product | Existing saved Unit/count workflows exist; the current visible Construct Element offers Linear, Surface, Volume. Do not infer count from arbitrary Breps. |
| MJ / kgkm | Matching energy or transport activity | These are not product geometry quantities; need an activity/boundary resolver. No conversion implemented in this task. |

The current visible **RAW Physical Properties is read-only**. It does not repair missing density. A future or explicitly supported user-derived material workflow must retain provenance; do not follow historical notebook instructions that describe an older override component as the current visible inspector.

## Four different areas/volumes

<figure class="diagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 210" role="img" aria-label="One reference surface, solid volume and total boundary area are different quantities"><g fill="none" stroke="#415448" stroke-width="2"><path d="M35 45H195V145H35Z"/><path d="M310 60H470V160H310ZM310 60l25-25h160v100l-25 25M470 60l25-25"/><path d="M595 45H755V145H595ZM595 45l25-25h160v100l-25 25M755 45l25-25" stroke="#ad693f"/></g><g fill="#28392f" font-family="sans-serif" font-size="16"><text x="35" y="185">Reference surface · A</text><text x="310" y="185">Matching solid · V</text><text x="590" y="185">All faces · S ≠ A</text></g></svg><figcaption>Conceptual quantity diagram, not project geometry. The product's declared convention determines which area is applicable.</figcaption></figure>

For a simple rectangular solid without openings, volume is `L × H × t`, one planar face is `L × H`, while total external area is `2(LH + Lt + Ht)`. They are different quantities. Even equal volumes can have different reference areas when thickness differs. Without the applicable thickness and product convention, volume alone is insufficient.

## Danish concrete wall-panel case

The local workbook row 17 / **#B1393** is the 20 cm wall panel with 16–25 kg reinforcement and 11% openings. Its pinned A1–A3 value is **73.2 kg CO₂-eq per 1 m²**. The source supplies **433.9 kg/m²**, not density in kg/m³; the RAW density field is therefore absent. Typed LCIA method remains unknown.

The linked **MD-20015-DA_rev1** EPD confirms these product dimensions, openings and area mass (pages 2 and 4), and identifies EN 15804+A1. Its stated validity ended 20 July 2025; this historical source is not a current product approval. No EPD metadata is imported or silently substituted here. [Original EPD](https://www.epddanmark.dk/media/oq0dzm1j/md-20015-da_rev1-betonelement-foreningen.pdf).

### Proposed strategies — not implemented

- Prefer a separately identified declared reference surface for the matching panel.
- For a matching homogeneous prism, `A = V / t` is mathematical, but an opening/void convention must be established first.
- If `V` excludes openings and the verified declared area includes them, a candidate relation is `A_reference = V / [t × (1 − opening_fraction)]`. This is a conditional model, not a general automatic rule.
- Product-specific area mass could support `A_reference = matching mass / area mass`, provided the reference product and reinforcement match.
- Do not use total Brep surface area, assume density, scale a fixed-area factor by arbitrary thickness, or automatically apply an opening percentage to another panel.

The detailed original row and source checks are retained privately. Only this bounded cited example is published; no Danish record bulk export is included.

## Evidence needed in V2

Recover explicit reference geometry, net/gross conventions, applicable thickness, area/length/item mass and product state. Distinguish source evidence from user-derived assumptions. Validate multi-module metadata consistency. Develop adapters separately from category display work. Unsupported quantity paths and incomplete methods must remain visible rather than becoming zero-valued results.

[Material Explorer](../materials/index.html) · [Dataset audit](raw-material-catalogue-audit.html)
