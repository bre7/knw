const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  // Redirects
  const { createRedirect } = boundActionCreators

  let redirectBatch1 = [
    { f: `/category/lifestyle`, t: `/lifestyle/` },
    { f: `/category/wedding`, t: '/wedding/' },
    { f: `/pricing`, t: '/investment/' },
    { f: `/pricing/lifestyle`, t: `/investment/` },
    { f: `/pricing/wedding`, t: `/investment/` },
  ]

  for (var { f, t } of redirectBatch1) {
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t,
    })
  }

  const { createPage } = boundActionCreators
  const loadGalleries = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulGallery {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulGallery.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadGalleries])
}
