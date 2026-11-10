# Material Catalogue V1 — dataset audit

Audit snapshot: **18 October 2026**. This is a read-only research catalogue of the current local library, not an updated import or an environmental assessment.

## What was inspected

The two visible selectors resolve a user-selected or discovered compact SQLite library. They do not embed an entire environmental database in the plugin. This audit reads the current development library and the exact source/staging files registered in it. Test fixtures, old caches and custom user-created materials are not additional selector packs. The Danish English-name resource supplies display translations, not environmental factors.

The audit uses the actual Danish family function and German browser family function from the current source. It checks the source XLSX/CSV cells against their staging records, then checks every stored GWP observation and declared quantity against the mapped source evidence. Read-only connections and before/after hashes protect the originals. The full audit stays private; the public catalogue is an explicit projection.


| Source | Records | Density supplied | Missing density | Explicit thickness |
| --- | --- | --- | --- | --- |
| Danish BR18 | 441 | 155 | 286 | 0 |
| ÖKOBAUDAT | 5079 | 1934 | 3145 | 1639 |



Counts are pinned dataset revisions/scenarios, not necessarily distinct manufactured products. Source pack release metadata is null; the download sidecars identify Danish Table 7 2025 and a German 2024-II download. Individual German records have their own versions, reference years and validity dates. Neither label means “latest available”.

## Original units versus RAW aliases


| Source | Original unit | RAW code | Count |
| --- | --- | --- | --- |
| Danish BR18 | kg | kg | 132 |
| Danish BR18 | m | m | 19 |
| Danish BR18 | m² | m2 | 124 |
| Danish BR18 | m³ | m3 | 74 |
| Danish BR18 | stk | item | 65 |
| Danish BR18 | ton | t | 27 |
| ÖKOBAUDAT | MJ | MJ | 49 |
| ÖKOBAUDAT | kg | kg | 915 |
| ÖKOBAUDAT | kgkm | kgkm | 9 |
| ÖKOBAUDAT | m | m | 102 |
| ÖKOBAUDAT | m3 | m3 | 692 |
| ÖKOBAUDAT | pcs. | item | 1834 |
| ÖKOBAUDAT | qm | m2 | 1478 |



The original strings are preserved. RAW already maps aliases such as `qm` to `m2`, `pcs.`/`stk` to `item` and `ton` to `t`. The catalogue does not introduce or alter these mappings. All factors retain their original declared/reference amount, including non-unit quantities and floating-point values in the pinned representation. Exact raw numerical cell text is also available in each German record's traceability section.

## Module and metadata availability


| Module | Danish numeric | German numeric |
| --- | --- | --- |
| A1 | 0 | 466 |
| A1-A3 | 441 | 3811 |
| A2 | 0 | 466 |
| A3 | 0 | 466 |
| A4 | 0 | 2904 |
| A5 | 0 | 2963 |
| B1 | 0 | 2153 |
| B2 | 0 | 1992 |
| B3 | 0 | 1724 |
| B4 | 0 | 1675 |
| B5 | 0 | 1679 |
| B6 | 0 | 2018 |
| B7 | 0 | 1800 |
| C1 | 0 | 3579 |
| C2 | 0 | 4021 |
| C3 | 441 | 4143 |
| C4 | 441 | 3819 |
| D | 441 | 4337 |



“Available” here means a finite stored GWP observation, including explicit source zero. Missing is never converted into zero. A1–A3 aggregate and A1/A2/A3 leaves are not additive. The explorer shows the source aggregate when present and lists leaves separately; it does not calculate a new product-stage factor.

All 5,520 current records have unresolved typed LCIA method metadata. A source `Konformitaet` statement is retained but is not promoted to a resolved compatibility contract. Numeric coverage does not establish scenario applicability, matching methodology or a verified whole-life result. Some source EPDs contain more information than the imported Table 7 subset.

Structured thickness is available in some German native metadata but is not a universal reference-area conversion. Names, reference-flow descriptions and source scenario differences must also be reviewed. Danish mass-per-area fields are not volumetric density; their existence does not justify populating density with an invented number.

<a id="publication"></a>
## Publication and exclusions

**ÖKOBAUDAT:** its official data-user terms permit free distribution of unmodified data with attribution. V1 publishes original field excerpts and original GWP observations from the pinned download, attributes ÖKOBAUDAT/BMWSB–BBSR and record owners, and retains source URLs/versions. RAW category labels and review hypotheses are clearly separate analysis, not altered source values. No new open-data licence is asserted. No original EPD PDFs, background LCI databases, logos or unrelated third-party files are redistributed. [Official terms](https://oekobaudat.de/en/guidance/data-users.html).

**Danish BR18:** the official Table 7 page provides the workbook, but this review did not confirm blanket bulk-republication permission, including material derived from third-party EPDs. Accordingly **all 441 individual Danish records are excluded from public JSON**. The public site contains RAW's aggregate audit statistics and a limited cited case study, with links to the original sources. This is an unresolved permission question, not a declaration that all use is prohibited. [Official Table 7](https://www.bygningsreglementet.dk/Bilag/B2/Bilag_2/Tabel_7). General online availability alone does not establish permission: [Danish Ministry of Culture guidance](https://kum.dk/kulturomraader/ophavsret/ophavsret-paa-internettet).

The complete record audit remains in the private repository. Internal paths, private annotations, raw source packages, source code and credentials are excluded from public JSON. The website does not offer editing or writeback.

## Export contract

`schema_version = 1.0.0`. A record is identified by **(id, revision)**. `source` holds original identity, category, native unit/quantity text, source metadata, version, URLs and source row references. `raw` holds the pinned RAW name, browsing family, existing unit alias, density and exact stored module observations. `analysis` holds conditional quantity paths, review suggestions and warnings. No field under `analysis` is an approved data change.

For future SQLite/Supabase storage, retain the composite record key and separate observation rows `(record, revision, module, indicator, evidence row)`; do not overwrite source with derived annotations. Preserve numeric null/status, raw cell strings and factor/reference units. The V1 static JSON is generated, never manually edited. It has no backend, authentication or Grasshopper dependency at runtime.

[Explore records](../materials/index.html) · [JSON schema](../materials/data/schema-v1.json) · [Snapshot provenance](../materials/data/provenance-v1.json) · [Reference-quantity study](raw-material-reference-quantity-study.html) · [Classification review](raw-material-classification-review.html)
