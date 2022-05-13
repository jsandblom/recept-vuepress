import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { containerPlugin } from '@vuepress/plugin-container'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import pluginFullTextSearch from 'vuepress2-plugin-full-text-search'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Johan Sandbloms receptsamling',
  description: 'Samlade recept, vissa värda att spara',
  theme: defaultTheme({
    sidebar: {
      '/recept/': [
        {
          text: 'Recept',
          collapsible: true,
          children: ['kött.md', 'fisk.md']
        }]
    }
  }),
  plugins: [
    [pluginFullTextSearch],
    containerPlugin({
      type: 'tip'
    }),
    backToTopPlugin(),
    externalLinkIconPlugin({})
  ]
})