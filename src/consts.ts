export const SITE_TITLE = 'LeadTruffle Demo Lab'
export const SITE_DESCRIPTION =
  'A lightweight Astro demo site for LeadTruffle widgets, lead-response automations, and interview PR experiments.'

export const BASE_PATH = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`

export function withBase(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path
  }

  return `${BASE_PATH}${path.replace(/^\//, '')}`
}

export const REAL_SITE_URL = 'https://www.leadtruffle.co/'
export const PRIVACY_POLICY_URL = 'https://www.leadtruffle.co/privacy-policy'
export const TERMS_OF_SERVICE_URL = 'https://www.leadtruffle.co/terms-of-service'
export const SITEMAP_URL = withBase('/sitemap-index.xml')
export const RSS_FEED_URL = withBase('/rss.xml')

export const NAV_LINKS = [
  { href: withBase('/'), label: 'Home' },
  { href: withBase('/widgets/'), label: 'Widgets' },
  { href: withBase('/playground/'), label: 'Playground' },
  { href: withBase('/features/'), label: 'Features' },
]

export const FEATURE_LINKS = [
  {
    href: withBase('/features/yelp/'),
    label: 'Yelp',
    summary: 'Reply to Yelp leads quickly with brand-safe, conversion-focused follow-up.',
  },
  {
    href: withBase('/features/thumbtack/'),
    label: 'Thumbtack',
    summary:
      'Speed-to-lead flows for paid leads where seconds matter and follow-up quality changes close rates.',
  },
  {
    href: withBase('/features/google-lsa/'),
    label: 'Google LSA',
    summary:
      'Instant first response for Local Services Ads leads with routing, qualification, and clean handoff.',
  },
]
