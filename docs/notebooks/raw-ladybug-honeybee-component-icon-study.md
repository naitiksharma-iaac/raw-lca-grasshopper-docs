# Ladybug/Honeybee component icon study for RAW LCA

> **Public reading edition · Historical development snapshot.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


18 October 2026. Research only; no production icon changes.

[Visual review](../reviews/component-family/index.html). Twelve genuine 24px component icons are paired with source code and JSON at pinned commits. Each `ghenv.Component.Name` was checked. The manifest records exact URLs and SHA-256 hashes. No relationship is inferred from an arbitrary internet image.

## Findings

The sample does not use one template. Lettering names a precise data format or operation; familiar geometry identifies constructed objects; shared objects establish families; changed relationships and gaps indicate extraction or adjacency; a small picture of the output can explain a legend. Thick outlines and saturated fills help these particular icons, but RAW need not copy those colours or artwork. Small changes such as the Room roof colour establish family similarity more clearly than they disclose exact input contracts. Labels remain necessary.

## LB Import EPW

[Actual icon — original source](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/icon/LB%20Import%20EPW.png)

- **Function from code:** Reads an EPW weather file into a Location and weather data collections.
- **Observed graphic:** Red file-like rectangle with large black EPW lettering and a small upper-corner mark.
- **Metaphor:** Abbreviation / file
- **Interpretation for RAW:** The familiar file-format name is more specific than a general weather symbol. RAW can use GWP or source initials when the text is the object of interest.
- **Attribution:** Ladybug Tools contributors; individual icon artist not established. [Icon](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/icon/LB%20Import%20EPW.png) · [paired component implementation](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/src/LB%20Import%20EPW.py); commit `4dde2331e8cb9b38c492ccbb99df4a52eb505529`.

## LB Construct Location

[Actual icon — original source](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/icon/LB%20Construct%20Location.png)

- **Function from code:** Creates a Location from name, latitude, longitude, time zone and elevation.
- **Observed graphic:** Black I / NY lettering with a red heart, referencing the familiar I-love-NY composition.
- **Metaphor:** Lettering / cultural location metaphor
- **Interpretation for RAW:** Location is suggested by a place-name reference. The icon alone does not disclose the input schema; tooltip and paired deconstructor complete its meaning.
- **Attribution:** Ladybug Tools contributors; individual icon artist not established. [Icon](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/icon/LB%20Construct%20Location.png) · [paired component implementation](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/src/LB%20Construct%20Location.py); commit `4dde2331e8cb9b38c492ccbb99df4a52eb505529`.

## LB Deconstruct Location

[Actual icon — original source](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/icon/LB%20Deconstruct%20Location.png)

- **Function from code:** Extracts name, latitude, longitude, time zone and elevation from a Location.
- **Observed graphic:** Same I / NY arrangement, with a red X replacing the heart.
- **Metaphor:** Paired lettering / operation change
- **Interpretation for RAW:** A small shared-motif change distinguishes opposing operations. X can also imply error/deletion: RAW should make decomposition direction clearer rather than copy it.
- **Attribution:** Ladybug Tools contributors; individual icon artist not established. [Icon](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/icon/LB%20Deconstruct%20Location.png) · [paired component implementation](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/src/LB%20Deconstruct%20Location.py); commit `4dde2331e8cb9b38c492ccbb99df4a52eb505529`.

## LB SunPath

[Actual icon — original source](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/icon/LB%20SunPath.png)

- **Function from code:** Produces sun-path geometry and sun vectors for location and times.
- **Observed graphic:** Yellow circular disc, cross-like divisions and a red curved trace.
- **Metaphor:** Environmental phenomenon / diagram
- **Interpretation for RAW:** The icon resembles the kind of solar diagram produced. It need not reproduce every analemma to cue the output.
- **Attribution:** Ladybug Tools contributors; individual icon artist not established. [Icon](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/icon/LB%20SunPath.png) · [paired component implementation](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/src/LB%20SunPath.py); commit `4dde2331e8cb9b38c492ccbb99df4a52eb505529`.

## LB Create Legend

[Actual icon — original source](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/icon/LB%20Create%20Legend.png)

- **Function from code:** Creates colour swatches, label objects/text and colours for values/range.
- **Observed graphic:** Vertical red-to-blue swatches with black marks/numerals alongside.
- **Metaphor:** Output miniature
- **Interpretation for RAW:** A compact image of the output is directly meaningful. Colour here encodes a scale, not a claim that every low value is good.
- **Attribution:** Ladybug Tools contributors; individual icon artist not established. [Icon](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/icon/LB%20Create%20Legend.png) · [paired component implementation](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/src/LB%20Create%20Legend.py); commit `4dde2331e8cb9b38c492ccbb99df4a52eb505529`.

## LB Area Normalize

[Actual icon — original source](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/icon/LB%20Area%20Normalize.png)

- **Function from code:** Divides a compatible data collection by an area and changes the data type/unit; invalid types or zero area fail.
- **Observed graphic:** Two-tone red/pink rectangle with a horizontal divide and white m² below.
- **Metaphor:** Unit / mathematical operation
- **Interpretation for RAW:** The denominator names the operation. RAW Physical Properties should not imply normalisation simply because it exposes area.
- **Attribution:** Ladybug Tools contributors; individual icon artist not established. [Icon](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/icon/LB%20Area%20Normalize.png) · [paired component implementation](https://raw.githubusercontent.com/ladybug-tools/ladybug-grasshopper/4dde2331e8cb9b38c492ccbb99df4a52eb505529/ladybug_grasshopper/src/LB%20Area%20Normalize.py); commit `4dde2331e8cb9b38c492ccbb99df4a52eb505529`.

## HB Room

[Actual icon — original source](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/icon/HB%20Room.png)

- **Function from code:** Combines Honeybee Faces into a Room with optional construction/modifier/program settings.
- **Observed graphic:** Yellow/orange isometric enclosed room with cyan window faces and dark outlines.
- **Metaphor:** Constructed object
- **Interpretation for RAW:** Recognisable room is the shared object family. The source function is construction even without an assembly arrow in the icon.
- **Attribution:** Ladybug Tools contributors; individual icon artist not established. [Icon](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/icon/HB%20Room.png) · [paired component implementation](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/src/HB%20Room.py); commit `b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b`.

## HB Room from Solid

[Actual icon — original source](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/icon/HB%20Room%20from%20Solid.png)

- **Function from code:** Converts closed Rhino solids/meshes into Honeybee Rooms, with optional model properties.
- **Observed graphic:** Same room silhouette, but its top is grey instead of yellow.
- **Metaphor:** Shared object / input distinction
- **Interpretation for RAW:** The subtle top change distinguishes a related constructor. It is legible as a family, but exact grey-top semantics require labels; RAW should not over-rely on tiny changes.
- **Attribution:** Ladybug Tools contributors; individual icon artist not established. [Icon](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/icon/HB%20Room%20from%20Solid.png) · [paired component implementation](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/src/HB%20Room%20from%20Solid.py); commit `b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b`.

## HB Deconstruct Object

[Actual icon — original source](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/icon/HB%20Deconstruct%20Object.png)

- **Function from code:** Returns constituent Faces, Apertures, Doors and Shades from Honeybee geometry objects.
- **Observed graphic:** Room faces are separated around pink/red junction lines and larger gaps.
- **Metaphor:** Decomposition
- **Interpretation for RAW:** Separated pieces visually reinforce extracting child objects. RAW must extract properties, not copy an exploded room or suggest it physically disassembles material.
- **Attribution:** Ladybug Tools contributors; individual icon artist not established. [Icon](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/icon/HB%20Deconstruct%20Object.png) · [paired component implementation](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/src/HB%20Deconstruct%20Object.py); commit `b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b`.

## HB Solve Adjacency

[Actual icon — original source](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/icon/HB%20Solve%20Adjacency.png)

- **Function from code:** Finds matching faces between Rooms and assigns boundary relationships, with explicit options.
- **Observed graphic:** Two yellow/orange cells, a central grey division and black inward-facing marks.
- **Metaphor:** Relationship / boundary process
- **Interpretation for RAW:** The interface between objects carries the meaning. It is not merely a building picture; RAW assignment needs equally explicit joining/ledger logic without a verification tick.
- **Attribution:** Ladybug Tools contributors; individual icon artist not established. [Icon](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/icon/HB%20Solve%20Adjacency.png) · [paired component implementation](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/src/HB%20Solve%20Adjacency.py); commit `b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b`.

## HB Model

[Actual icon — original source](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/icon/HB%20Model.png)

- **Function from code:** Collects Rooms and permitted orphaned geometry into a simulation Model.
- **Observed graphic:** Multi-storey building-like stack with cyan bands, yellow facade and grey top.
- **Metaphor:** Aggregate object
- **Interpretation for RAW:** More complex aggregate distinguishes Model from a single Room. RAW should reserve assembly complexity for an actual composite rather than decorate every icon.
- **Attribution:** Ladybug Tools contributors; individual icon artist not established. [Icon](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/icon/HB%20Model.png) · [paired component implementation](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/src/HB%20Model.py); commit `b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b`.

## HB Geometry Properties

[Actual icon — original source](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/icon/HB%20Geometry%20Properties.png)

- **Function from code:** Reads wall/window area, volume and floor-area measures from Rooms or Model.
- **Observed graphic:** Room silhouette with dimension-like lines extending along its right and lower sides.
- **Metaphor:** Object / measurement
- **Interpretation for RAW:** Dimension marks distinguish reading quantities from constructing the room. RAW can use a block with distinct attribute outputs instead of an editor metaphor.
- **Attribution:** Ladybug Tools contributors; individual icon artist not established. [Icon](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/icon/HB%20Geometry%20Properties.png) · [paired component implementation](https://raw.githubusercontent.com/ladybug-tools/honeybee-grasshopper-core/b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b/honeybee_grasshopper_core/src/HB%20Geometry%20Properties.py); commit `b8c12677ceeb57e1ce9c8185fdc0ecbd03df986b`.

## Method and rights

Observations describe the actual pixels; interpretations are design judgements, not author interviews. This is a purposive sample of related constructors, inspectors and environmental visualisation tools, not a statistical claim about the entire plugin. Official repository source headers identify AGPL-3.0; repository licence files are retained with references. Third-party images are research evidence only and must not be included in RAW implementation resources. Original RAW proposals were drawn as new paths, not traced from these icons.