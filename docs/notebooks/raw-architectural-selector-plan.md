# RAW Architectural Materials and RAW Other Materials — implementation plan

**Planning only. No new component, GUID, palette entry, material edit or conversion is implemented.** Existing Danish and German selectors remain complete and unchanged.

## One library, two additional discovery views

```text
Original pinned material library ── identity + revision ── classification overlay
            │                                               │
            ├── Danish selector (complete original pack)      │
            ├── German selector (complete original pack)     │
            ├── Architectural Materials ◀── approved eligibility/category filter
            └── Other Materials ◀────────── remaining/unresolved records
                         │
              unchanged RAW Material selection
                         │
              Construct Element → Element GWP
```

The overlay contains proposed navigation metadata, not a second set of factors. Join on **stable RAW ID + pinned revision**, never name, provider UUID alone, or translated labels. Provider UUID may represent several scenario records. A new source revision requires reassessment; never inherit approval silently.

## Existing implementation inspected

`GermanMaterialBrowser` already opens a lightweight source index through `RawDatasetSearchService.BrowseSourceIndex`. It resolves full packages only when selected, caches lazy tasks by `(RawId, Revision)` and bounds concurrent readers. Reuse this pattern rather than eagerly decoding every record. `MaterialSelectorSession` provides document-scoped cached discovery/resolution, library stamps and immutable payload handling; it is another existing reuse point, not a reason for a second database.

`ResolvedDatasetSelection` carries the exact dataset, supporting records, source and declared quantity. `MaterialDatasetGoo` wraps that selection and exposes `EnvironmentalDataset` without changing it. Both new selectors should emit the same single **Material** output. Existing downstream adapters and GWP services must see the identical selection as if it came from the original selector.

`MaterialSelectorState` persists identity/revision and filters. Extend discovery state only in the future implementation, with versioned overlay filter fields; do not reinterpret the existing `MaterialFamily` field or change how the current selectors browse. `DanishMaterialRow` and `GermanMaterialRow` remain the source-specific presentation paths. Do not replace their provenance or declared-unit guidance with architectural eligibility.

## Proposed component contract

| Component | Category | Discovery controls | Output | Meaning |
|---|---|---|---|---|
| RAW Architectural Materials | RAW LCA / Materials | Source, house, subcategory, search, include conditional records | Material | Architecturally relevant records; conditional items visibly require specification/evidence |
| RAW Other Materials | RAW LCA / Materials | Source, role, unresolved reason, search | Material | Remaining feedstocks, intermediates, activities and unresolved records |

No mandatory data input is needed for a selector. Reuse native family-menu and material-dialog patterns. The dialog should show source, original declared quantity, proposed house/role, eligibility, review status and unresolved warnings. Provide a direct route to source metadata. Do not imply Other means invalid: a manufacturing input can be valid in a properly defined process workflow.

Recommend two eligibility scopes in Architectural Materials: evidence-reviewed by default, with an explicit **Include conditional materials** toggle. Other Materials is the complement of the approved Architectural eligibility partition, not the complement of the currently displayed filter. Conditional items must not disappear from both views. Until a user approves the classification layer, the research statuses here must not become production approval.

## Overlay and review contract

Each proposal records `id`, `revision`, `taxonomy_version`, primary house/subcategory, secondary applications, role, eligibility, confidence, review status, rule/review ID, evidence and required further evidence. Original source category and current RAW category remain separately readable. Confidence describes classification evidence, not environmental data quality.

Review decisions are separate append-only records containing identity/revision, proposed correction, reason, reviewer identity (future authenticated or signed workflow), timestamp and taxonomy version. The current website exports unsigned user proposals only. Future import must validate IDs, revision freshness, enumerations and provenance, and present a diff for approval. Never accept browser exports as automatic authority.

Missing classification → Other / unresolved with a diagnostic, not an exception or name-based guess. Conflicting classifications → review queue. Missing selected dataset revision → existing unavailable-selection behaviour, not nearest-name replacement. Missing overlay → retain existing original selectors; new curated selectors report unavailable classification.

## Suggested implementation sequence after approval

1. Agree taxonomy and resolve high-impact false positives: natural stone, coatings, generic stock, precast systems and MEP activities.
2. Approve a versioned overlay and its review governance. Resolve Danish metadata publication separately; private plugin may use its licensed underlying library without exposing it on Pages.
3. Add a shared read-only classification index over the existing source index, with bounded lazy package resolution and source filters.
4. Add the two selectors, reusing native selection/state/output contracts. Choose GUIDs only during implementation.
5. Verify byte/identity parity with selections from Danish/German components, save/reopen, all sources, stale revisions, conditional warnings, pagination, empty and unavailable overlays.
6. Run existing element/GWP regressions and genuine Rhino/Grasshopper tests. Unit conversion is a separate approved task.

## Acceptance gates

- Original selector counts and complete source access unchanged.
- No factor/density/unit/module/source-category edits or duplicated factor resources.
- One primary category; secondary applications do not duplicate records in totals.
- Architectural versus Other partition covers every record without multiplying scenario variants.
- Item, length and activity units retain existing compatibility warnings. Classification never authorizes a quantity conversion.
- No eager full-library loading regression; test cold and warm selection performance against the existing browser.
- Conditional eligibility, unresolved LCIA context and reference-quantity requirements remain visible independently.
