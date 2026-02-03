/**
 * Simple, deterministic string hash.
 * Good for React keys and lightweight identity.
 * NOT cryptographically secure.
 */
export function hash(str: string): string {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  // Return as string so it's always safe for React keys
  return hash.toString();
}
