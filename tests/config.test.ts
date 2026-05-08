import { describe, it, expect } from 'vitest';
import { loadConfig } from '../src/lib/config';

const validRaw = {
  niche: 'spray foam insulation',
  niche_short: 'spray foam',
  city: 'Tulsa',
  state: 'Oklahoma',
  state_abbr: 'OK',
  business_name: 'Tulsa Spray Foam Pros',
  domain: 'tulsasprayfoampros.com',
  tracking_phone: '+1-918-555-0142',
  tracking_phone_display: '(918) 555-0142',
  form_email: 'leads@tulsasprayfoampros.com',
  service_radius_miles: 30,
  lat: 36.154,
  lng: -95.9928,
  established_year: 2018,
  services: ['Open-cell spray foam'],
  service_areas: ['Broken Arrow'],
  primary_color: '#1a4d2e',
  ga4_id: 'G-TEST',
  search_console_verification: 'abc',
  schema: { type: 'HomeAndConstructionBusiness' },
};

describe('loadConfig', () => {
  it('loads valid config and returns typed object', () => {
    const cfg = loadConfig(validRaw);
    expect(cfg.business_name).toBe('Tulsa Spray Foam Pros');
    expect(cfg.lat).toBeCloseTo(36.154);
  });

  it('throws on missing required field', () => {
    expect(() => loadConfig({ niche: 'spray foam' } as unknown)).toThrow(/required/);
  });

  it('throws on invalid established_year (future)', () => {
    const now = new Date().getFullYear();
    expect(() => loadConfig({ ...validRaw, established_year: now + 1 })).toThrow(
      /established_year/
    );
  });
});
