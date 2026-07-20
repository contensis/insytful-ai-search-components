import { describe, expect, it } from 'vitest';
import { dialogTransition, renderDialog } from '../dialog-renderer';

describe('dialogTransition', () => {
  it('applies visibility immediately on open', () => {
    expect(dialogTransition(true)).toContain('visibility 0s linear 0s');
  });

  it('delays visibility until the opacity fade-out completes on close', () => {
    expect(dialogTransition(false)).toContain(
      'visibility 0s linear var(--insytful-search-transition-duration, 200ms)'
    );
  });
});

describe('renderDialog initial (closed) state', () => {
  it('hides the dialog with visibility, inert and opacity', () => {
    const { dialogOuter } = renderDialog('title-id', 'desc-id');

    expect(dialogOuter.style.visibility).toBe('hidden');
    expect(dialogOuter.style.opacity).toBe('0');
    expect(dialogOuter.style.pointerEvents).toBe('none');
    expect(dialogOuter.hasAttribute('inert')).toBe(true);
    expect(dialogOuter.style.transition).toBe(dialogTransition(false));
  });
});
