import React from 'react'
import Helmet from 'react-helmet'
import CategoryNav from '../components/CategoryNav'
import GalleryList from '../components/GalleryList'

const Lifestyle = ({ data }) => {
  const posts = data.allContentfulGallery.edges

  return (
    <div>
      <Helmet>
        <title>Lifestyle Galleries - KNW Photography</title>
        <meta
          name="description"
          content="View lifestyle galleries by KNW Photography"
        />
        <meta
          property="og:title"
          content="Lifestyle Galleries - KNW Photography"
        />
        <meta
          property="og:description"
          content="View lifestyle galleries by KNW Photography"
        />
        <meta property="og:image" content={posts[0].node.cover.sizes.src} />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:url" content="https://www.knw.io/lifestyle/" />
      </Helmet>

      <CategoryNav />
      <GalleryList posts={posts} />
    </div>
  )
}

export const query = graphql`
  query LifestyleQuery {
    allContentfulGallery(
      limit: 1000
      filter: { category: { eq: "lifestyle" } }
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          date
          category
          cover {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default Lifestyle
