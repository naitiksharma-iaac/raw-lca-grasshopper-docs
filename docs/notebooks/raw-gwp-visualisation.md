# RAW GWP visualisation

> **Public reading edition · Historical development snapshot.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


Visualisation communicates an existing result. It does not run an LCA, repair missing data, change source units, or alter RAW Element GWP values. Totals remain a separate operation (for example Grasshopper Mass Addition), subject to the Result's completeness and compatibility diagnostics.

Two working components are visible under **RAW LCA / Visualisation**:

| Component | Stable GUID |
| --- | --- |
| RAW GWP Colour Preview | `3621875f-bd4a-4437-aa80-34fe7760d3e0` |
| RAW GWP Legend | `9b683246-89bd-48c5-a059-1085d578ea79` |

Existing components, ports and GUIDs are unchanged. No graph, report, inspector or standalone gradient component is exposed.

## Colour preview

Inputs, in order:

1. **Result** — RAW Element GWP Result, one per branch.
2. **Geometry** — optional in the contract; required with today's Results, which contain quantities but no Rhino geometry. Connect RAW Element's Geometry output.
3. **Values** — optional manual GWP values in kg CO₂-eq, overriding Result values. A warning makes the override explicit. RAW cannot verify the unit or scope of manual numbers.
4. **Low Bound** — optional global lower display bound, in the selected colour mode's units.
5. **High Bound** — optional global upper display bound.
6. **Colour Mode** — optional text, default `Absolute GWP`.
7. **Reverse Gradient** — optional boolean, default false.

Outputs, in order: **Preview Geometry, Preview Colours, Legend Values, Legend Labels, Colour Mode, Warnings**.

Connect Preview Geometry and Preview Colours to Grasshopper **Custom Preview**. Disable overlapping ordinary geometry previews when presenting the colours. This component does not bake geometry or change object/material colours in Rhino.

Geometry, Result elements and manual values match by exact branch path and item position. They are never flattened or broadcast. A mismatch retains the maximum number of slots, including null geometry or values; the affected branch receives grey unavailable colours until corrected. Missing geometry items are grey individually. This intentionally prevents a shorter list being silently paired with the wrong elements. Grouped Unit/count elements can represent several geometry objects: supply an explicit one-to-one geometry representation, or separate the elements upstream. Automatic group expansion is deferred.

One shared finite-value scale is used across all branches. Bounds default to the minimum and maximum available display values. Manual bounds clip **colours only**, with a warning if values lie outside the range; Legend Values remain the original display values. Invalid bounds produce grey colours. Equal values (within 1e-12 relative numeric precision) produce a stable neutral colour and an explicit message; geometry round-off must not become a full colour range. Reverse Gradient changes colours only.

### Modes and units

| Colour Mode | Display value | Required result quantity | Display unit |
| --- | --- | --- | --- |
| Absolute GWP | Element GWP | none | kg CO₂-eq |
| GWP per m² | Element GWP / area | positive finite reference area | kg CO₂-eq/m² |
| GWP per m³ | Element GWP / volume | positive finite volume | kg CO₂-eq/m³ |
| GWP per kg | Element GWP / mass | positive finite mass | kg CO₂-eq/kg |
| Module scope value | Element GWP for the Result's already-selected scope | none | kg CO₂-eq |

ASCII `m2` and `m3` in mode text are accepted. The preview does not switch the calculator's lifecycle scope: change that on RAW Element GWP. A mixed-scope preview warns that the values are not a like-for-like lifecycle comparison. Unknown mode text warns and uses Absolute GWP.

Normalised modes use quantities retained in the matching Result row, including mass resolved by RAW Physical Properties. They do not measure optional geometry or infer density/thickness. Missing, zero, negative or non-finite denominators produce null display values, grey colours and path/item diagnostics. Area is reference area, not a solid's total face area. Manual values can be normalised only when the Result supplies an equally sized, correctly ordered quantity list.

### Internal gradient presets

- **Sequential low-to-high:** pale teal → teal → dark plum for nonnegative values.
- **Diverging negative-to-positive:** blue → neutral at zero → terracotta. Negative-only data uses the negative side. Zero remains the centre even for asymmetric ranges.
- **Module D benefit/load:** teal benefits → neutral → terracotta loads when the supplied Result scope is D.

Negative values are never clamped to zero. Manual bounds can visually clip either side, with a warning. Reversing a gradient reverses its endpoint colours; it never reverses signs. Equal-value neutral is distinct from the grey unavailable colour.

### Missing values and diagnostics

Unavailable GWP remains null, never zero. Unavailable/misaligned items are grey. All finite input values and positions are retained, even when no geometry can be coloured. No unmatched geometry or values are silently dropped. The Warnings output contains complete diagnostics with paths/indices; the runtime balloon shows at most the first twelve messages plus a count to avoid overwhelming the canvas.

Result diagnostics, including unresolved LCIA context and unavailable modules, are forwarded. Displaying a colour does not establish scientific comparability or a verified whole-life result.

## Legend

Connect **Legend Values → Legend Values**, **Legend Labels → Legend Labels**, and **Preview Colours → Preview Colours** directly from RAW GWP Colour Preview.

Inputs, in order: **Legend Values, Legend Labels, Preview Colours, Base Point, Width, Height, Title, Unit**.

Outputs, in order: **Legend Geometry, Legend Text, Legend Points, Legend Colours**.

The legend uses the exact observed preview colours, so manual bounds, negative values, equal-value neutral and reversal remain consistent. It sorts and deduplicates observed entries rather than inventing a new numerical ramp. Above seven finite entries it samples observed values, keeping extrema and values either side of zero; an unavailable entry is retained separately. A runtime message identifies sampling. The result is a discrete observed-value legend, not a histogram or continuous interpolated scale.

Generated Legend Labels are readable text with the form `value unit | colour mode | module scope`. Keep them connected unchanged to infer the legend title and unit. With custom labels lacking that context, the fallback is `GWP` and `kg CO₂-eq`; provide Title and Unit when needed. User labels are retained. Unit changes the label only, never converts numbers. Mismatched legend input counts produce a warning and no misleading swatches.

Swatches are meshes in world XY. Base Point defaults to the origin; Width defaults to 10 and Height to 50, both in Rhino model units. Multiple branches create separate legends arranged horizontally (12 × Width spacing). Change dimensions for your model scale. The component does not bake anything.

- Connect **Legend Geometry + Legend Colours** to another **Custom Preview**.
- Connect **Legend Text + Legend Points** to **Text Tag** or **Text Tag 3D**.
- Text and points include one title followed by the entry labels. Geometry and colours include only swatches. Those two pairs align independently.

Automatic text sizing and presentation layout beyond the supplied placement/dimensions are deferred; standard GH text components control text size. Mode/scope are carried in normal text wires, so they persist with a saved definition without special serialization.

## Example workflow

```text
RAW Material Selector Danish
  → RAW Element
  → RAW Element GWP
  → RAW GWP Colour Preview
  → RAW GWP Legend
```

Also connect RAW Element **Geometry** directly to the preview's **Geometry** input. Add the two Custom Preview connections and text tags described above. For missing mass, enrich the Element upstream using verified physical properties; the visualisation cannot fill missing LCA or quantity data.
