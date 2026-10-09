/**
 * The request body fields that identify a search: a site's alias, or an
 * aggregated search's slug.
 *
 * `lib/shared/` invariants: no React imports; no module-top-level window/DOM
 * access — importable by both entry points.
 */
export const configFields = (config: string, aggregated?: boolean) =>
  aggregated ? { searchConfig: config } : { config };
