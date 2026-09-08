# Roadmap

This roadmap is exploratory, not a delivery commitment. No finished plugin is released yet.

## Phase 1 — Scope and validation

- Define a minimum scientifically valid workflow.
- Document system boundaries, units, assumptions, provenance, and validation cases.
- Confirm software and data licensing independently.

## Phase 2 — Local-first V1 prototype

- Extract quantities from Rhino/Grasshopper geometry.
- Use a local, user-managed material library and manual EPD records.
- Compare basic scenarios and export traceable results.
- Require no server and bundle no environmental dataset.

## Phase 3 — Component documentation

- Document inputs, outputs, units, assumptions, warnings, and limitations.
- Develop examples only with synthetic, openly licensed, or explicitly permitted data.

## Phase 4 — Interoperability research

- Explore LCAx, ILCD+EPD, and openEPD import/export adapters.
- Document mappings, supported versions, validation requirements, and information loss.

## Phase 5 — Optional connectors

- Explore API connectors only where provider terms permit.
- Use user-supplied credentials and source-compliant local caching.
- Never ship shared secret keys or imply redistribution rights.

## Phase 6 — Conditional hosted platform

- Consider hosting, synchronization, or team libraries only if funding and licensing allow.
- Keep local-first use independent of any hosted service.

## Release gate

- Validate scientific behavior and reference cases.
- Select a software license and confirm attribution.
- Review all examples and data permissions.
- Audit files and Git history for secrets, restricted data, and private material.

