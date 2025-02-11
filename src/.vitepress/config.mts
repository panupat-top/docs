import { defineConfig } from 'vitepress'

export default defineConfig({
  // If you plan to deploy your site to https://foo.github.io/bar/, then you should set base to '/bar/'.
  base: '/docs/',

  lang: 'en-US',
  title: 'panupat-docs',
  description: 'A VitePress Site',
  themeConfig: {
    siteTitle: 'Panupat Docs',

    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        link: '/guide',
        activeMatch: '^/guide/',
      },
      {
        text: 'Tutorials',
        link: '/blog',
        activeMatch: '^/blog/',
      },
    ],

    sidebar: {
      'guide/': [
        {
          text: 'Getting Started',
          items: [
            {
              text: 'Next.js',
              base: '/guide/nextjs',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/intro' },
                { text: 'Creating a New Project', link: '/setup' },
                { text: 'Project Structure', link: '/structure' },
                // { text: 'Testing', link: '/testing' },
                // { text: 'Deployment', link: '/deployment' },
              ],
            },
          ],
        },
      ],
      'blog/': [],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/panupat-top' }],
  },
})
