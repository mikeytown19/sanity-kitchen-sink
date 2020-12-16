export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fda798427727f0dfdf385f8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-y3mbto9v',
                  apiId: '1fad51dd-4d60-4d24-b575-09dfa09e2e03'
                },
                {
                  buildHookId: '5fda79844fef8c0bb5c46f18',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mada7e2p',
                  apiId: '07ac74a0-5ce0-4237-8c08-1dec8075dea4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikeytown19/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mada7e2p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
