import { describe, it, expect } from 'vitest';
import { slugify } from '../src/lib/slug';

describe('slugify', () => {
  it('lowercases and dasherizes', () => {
    expect(slugify('Open-Cell Spray Foam')).toBe('open-cell-spray-foam');
  });

  it('removes apostrophes', () => {
    expect(slugify("O'Connor's Auto Glass")).toBe('oconnors-auto-glass');
  });

  it('collapses whitespace', () => {
    expect(slugify('  hello   world  ')).toBe('hello-world');
  });

  it('handles ampersands', () => {
    expect(slugify('Heat & Cool')).toBe('heat-and-cool');
  });
});
