import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isGithubPagesBuild =
  process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true'
const isUserOrOrgPagesRepo = repositoryName.endsWith('.github.io')

const site = process.env.SITE_URL ?? 'https://leadtruffle.github.io'
const base =
  process.env.BASE_PATH ??
  (isGithubPagesBuild
    ? isUserOrOrgPagesRepo || !repositoryName
      ? '/'
      : `/${repositoryName}`
    : '/')

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [sitemap()],
})
