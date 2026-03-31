import type { APIRoute } from 'astro'
import { withBase } from '../consts'

const items = [
  {
    title: 'LeadTruffle Demo Lab',
    description:
      'A lightweight Astro demo site for LeadTruffle widgets, lead-response automations, and interview PR experiments.',
    path: '/',
  },
  {
    title: 'Widgets',
    description: 'An overview of the widget surfaces this demo site is set up to showcase.',
    path: '/widgets/',
  },
  {
    title: 'Playground',
    description: 'A sandbox page with pre-built targets for LeadTruffle widget snippets.',
    path: '/playground/',
  },
  {
    title: 'Features',
    description: 'A compact set of LeadTruffle feature pages focused on demo-ready lead sources.',
    path: '/features/',
  },
]

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://leadtruffle.github.io/')
  const buildDate = new Date().toUTCString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>LeadTruffle Demo Lab</title>
    <description>A lightweight Astro demo site for LeadTruffle widgets and demo experiments.</description>
    <link>${base.toString()}</link>
    <lastBuildDate>${buildDate}</lastBuildDate>
    ${items
      .map((item) => {
        const url = new URL(withBase(item.path), base).toString()
        return `<item>
      <title>${escapeXml(item.title)}</title>
      <description>${escapeXml(item.description)}</description>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${buildDate}</pubDate>
    </item>`
      })
      .join('\n    ')}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
