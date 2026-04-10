/**
 * Markdown rendering for the web component.
 *
 * Parses markdown with `marked`, shifts headings down one level
 * (matching the React component's doShiftHeadings), and sanitizes
 * the resulting HTML with DOMPurify to prevent XSS.
 */
/**
 * Render a markdown string to sanitized HTML.
 *
 * @param content  Raw markdown content
 * @returns        Sanitized HTML string safe for innerHTML
 */
export declare function renderMarkdown(content: string): string;
