/**
 * Markdown rendering for the web component.
 *
 * Parses markdown with `marked`, shifts headings down one level
 * (matching the React component's doShiftHeadings), and sanitizes
 * the resulting HTML with DOMPurify to prevent XSS.
 */

import { marked } from 'marked';
import DOMPurify from 'dompurify';

/**
 * Shift all markdown headings down one level so that # becomes ##, etc.
 * This prevents an H1 inside a chat message from competing with the
 * page-level heading hierarchy.
 *
 * Mirrors search-messages.tsx `doShiftHeadings` (lines 9-11).
 */
function shiftHeadings(content: string): string {
  return content.replace(
    /^(#{1,5})\s/gm,
    (_match, hashes: string) => `${hashes}# `,
  );
}

/**
 * Render a markdown string to sanitized HTML.
 *
 * @param content  Raw markdown content
 * @returns        Sanitized HTML string safe for innerHTML
 */
export function renderMarkdown(content: string): string {
  const shifted = shiftHeadings(content);
  const html = marked.parse(shifted, { async: false }) as string;
  return DOMPurify.sanitize(html);
}
