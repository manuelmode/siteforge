import siteData from '../../site.config.json' with { type: 'json' };

export interface SiteConfig {
  niche: string;
  niche_short: string;
  city: string;
  state: string;
  state_abbr: string;
  business_name: string;
  domain: string;
  tracking_phone: string;
  tracking_phone_display: string;
  form_email: string;
  service_radius_miles: number;
  lat: number;
  lng: number;
  established_year: number;
  services: string[];
  service_areas: string[];
  primary_color: string;
  ga4_id: string;
  search_console_verification: string;
  og_image_path?: string;
  hero_image_url?: string;
  hero_image_alt?: string;
  turnstile_site_key?: string;
  form_action_url?: string;
  schema: { type: string };
}

const REQUIRED_FIELDS: (keyof SiteConfig)[] = [
  'niche',
  'niche_short',
  'city',
  'state',
  'state_abbr',
  'business_name',
  'domain',
  'tracking_phone',
  'tracking_phone_display',
  'form_email',
  'service_radius_miles',
  'lat',
  'lng',
  'established_year',
  'services',
  'service_areas',
  'schema',
];

export function loadConfig(raw: unknown): SiteConfig {
  if (typeof raw !== 'object' || raw === null) {
    throw new Error('Config must be an object');
  }
  const obj = raw as Record<string, unknown>;
  for (const key of REQUIRED_FIELDS) {
    if (!(key in obj)) {
      throw new Error(`Config field "${key}" is required`);
    }
  }
  const year = obj.established_year as number;
  if (year > new Date().getFullYear()) {
    throw new Error(`established_year cannot be in the future`);
  }
  return obj as unknown as SiteConfig;
}

export const config: SiteConfig = loadConfig(siteData);
