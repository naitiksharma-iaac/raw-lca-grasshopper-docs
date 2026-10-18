# RAW LCA — dataset selector refinement

> **Public reading edition · Historical development snapshot.** This is an archived research/design notebook, not current API documentation or a validated assessment. Source-code links, private local paths and bundled third-party reference files are omitted. Later implementation may supersede recommendations: see the [current component guide](../components.html) and [native icon checkpoint](../reviews/native-icons/index.html). Original private research is preserved.


> **Historical, unapproved recommendation:** the user rejected Measured Tectonics as identity and did not approve BR18 / ÖKO. The current corrective review keeps RAW LCA, uses the inspected original RAW logo, and recommends open RAW-derived DK / ÖB. See [the corrective review](../reviews/component-family/index.html) and feedback audit (supporting internal reference retained privately). The earlier study below is preserved as evidence, not current approval.

18 October 2026. **Recommendation for review; no production implementation.**

## Decision

Recommend **B: BR18 / ÖKO with minimal architectural baselines**. This replaces the earlier DK/ÖB enclosing-register recommendation for these two icons only. Other brand and component decisions remain unchanged.

- Danish: `BR18`, with an open baseline and one origin tick referencing the datum of a table/register.
- German: `ÖKO`, including the umlaut, with a plain open baseline. No matching enclosure is imposed.
- Full dataset names remain in component names and tooltips. BR18 identifies the regulatory source, not uniquely Table 7; ÖKO is a shortened identifier, not an official logo or certification mark.

[Open the focused review](../reviews/history/index.html).

## Feedback correctly preserved

The user likes original S2 (BR18/ÖKO baseline identifiers) and S3 (Danish table-register / German oblique facade-grid). The criticism concerned the latest DK/ÖB **enclosing three-line boundary**, not all architectural notation. The original [06-selector-identities.png](../reviews/history/raw-identity-research/06-selector-identities.png) was visually reviewed, along with its editable S2/S3 construction in `build_review.py`.

The new review preserves both earlier directions. No flags, authority seals or official wordmark artwork were copied.

## Alternatives evaluated

| Direction | Original work developed | Strength | Limitation / decision |
|---|---|---|---|
| A | Custom open DK / ÖB lettering, curved counters and no boundary | Largest letters; strongest small-size letter separation | DK is country-level; ÖB is proposed RAW shorthand. Retain as alternate, not preferred. |
| B | Refined BR18 / ÖKO with minimal baseline | Most direct source recognition while preserving architectural notation | BR18 is compact at 24 px and weaker at 16 px. Preferred for the native 24 px target. |
| C | Optically balanced table-register and oblique facade grid | Strong text-free silhouettes; directly preserves S3 | Shapes alone cannot uniquely name the sources; requires learned association. Retain as full alternate. |
| H | Source lettering above miniature register/facade cells | Explicit hybrid test combines S2 and S3 | Competing counters, cells and umlaut crowd the small tile. Not selected. |
| Mixed B/C | Danish BR18 datum paired with German facade | Tests different constructions fairly rather than enforcing identical treatment | Source naming becomes asymmetric. Lower than B because German identity is less immediate, not because different constructions are forbidden. |

The recommended baseline is itself a restrained architectural hybrid. Adding more literal geometry is not automatically an improvement.

## Evaluation method

Scores are **design judgements**, informed by source semantics and direct raster review. They are not user-recognition measurements. Unlike the broad brand matrix, this focused matrix weights source identification most highly because the task is to distinguish datasets.

Weights: source specificity 30%; actual 24 px legibility 25%; architectural relevance 15%; pair differentiation 15%; family fit 5%; future extensibility 5%; native feasibility 5%. Each criterion uses the same ordinal 1–5 scale; total = sum(weight × rating / 5).

| Candidate | Specificity | 24 px | Architecture | Differentiate | Family | Extend | Feasible | Total / 100 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| A | 3 | 5 | 3 | 4 | 4 | 4 | 5 | 77 |
| B | 5 | 4 | 4 | 4 | 5 | 4 | 5 | 88 |
| C | 3 | 5 | 5 | 4 | 4 | 3 | 5 | 82 |
| H | 4 | 2 | 5 | 4 | 4 | 3 | 5 | 73 |
| Mixed B/C | 4 | 4 | 5 | 5 | 3 | 3 | 5 | 85 |

The machine-readable decision.json (supporting internal reference retained privately) records the same ratings. Native feasibility means suitability for a transparent 24 × 24 bitmap slot, not successful execution in Grasshopper.

## Visual and source evidence

- Reused source reference R15: [Danish Building Regulations, Table 7](https://www.bygningsreglementet.dk/bilag/b2/bilag_2/tabel_7/), and the existing actual page capture. This supports BR18/table terminology; it is not a new material-data audit.
- Reused R14: [ÖKOBAUDAT portal](https://www.oekobaudat.de/en.html), with its existing facade/header capture. This supports the ÖKO identifier and architectural facade cue. No claim that the facade icon is an official source identity.
- Original S2/S3 sheet and vectors were reused as design evidence, not discarded or silently replaced.
- A real historical screenshot supplied by the user was preserved byte-for-byte in `evidence/grasshopper-original.png`. `context.json` records its original filename, SHA-256 and exact toolbar crop.
- A/B/C/H were compared at **24 source pixels** within that real toolbar crop. Only the first two historical placeholder slots were overlaid. These are prominently labelled **design composites**, never passed off as installed icons. The obsolete Advanced/Alpha/Elements/Studio labels are retained to avoid fabricating a current palette.
- Additional 24 px swatches test neutral palette, orange, selection-colour approximation and canvas grey. They are design background tests, not native state tests.
- The HTML displays independent 64/32/24/18/16 px PNGs with explicit CSS dimensions. Sheet previews may be scaled to fit the browser; they are not substitutes for the independent pixel samples. Browser zoom and Windows display scaling affect physical size.

The earlier statement that BR18 is simply too crowded at 24 px was too categorical. Refined letter spacing and open baseline make it a viable, more source-specific option. The weaker 16 px result is retained as a limitation rather than concealed by showing only enlarged art.

## Graphic specification and editable assets

Eight original concepts (A/B/C/H × Danish/German), each with a transparent 24-unit SVG master and optical 18/16-unit export masters; forty PNGs at 64, 32, 24, 18 and 16 px. Letterforms use editable paths, not linked text or distributed font files.

- Neutral ink: `#303638`.
- Geometry stroke: 1.3 px at 24 px.
- Lettering: approximately 1.05–1.35 px, with curved counters and open diagonals.
- Square datum ends; rounded path joins.
- Sub-24 exports strengthen hairlines and omit the Danish baseline origin tick. They do not change the source letters.
- No orange background is baked into any icon asset.
- Current custom selector attributes suppress the normal centre-icon region. Palette-icon implementation would not automatically add an icon to the component body; that remains a separately scoped UI decision.
