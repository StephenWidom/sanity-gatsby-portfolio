export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5e610a5056eec08a1a1560ac',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-oabsogke',
                  apiId: 'd49b140d-4e28-4bd7-b33b-ab227764e085'
                },
                {
                  buildHookId: '5e610a5093dd2364f9057451',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hkf1cwad',
                  apiId: 'b3bdb7de-de9b-454c-8018-99519bd978a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StephenWidom/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hkf1cwad.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
