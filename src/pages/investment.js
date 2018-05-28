import React from 'react'
import Helmet from 'react-helmet'
import PageIntro from '../components/PageIntro'
import InvestmentTabs from '../components/InvestmentTabs'

const Investment = ({ data }) => {
  const tabs = data.allContentfulInvestment.edges
  const page = data.contentfulPage

  return (
    <div>
      <Helmet>
        <title>Investment - KNW Photography</title>
        <meta
          name="description"
          content="View pricing and information for lifestyle and wedding photography packages"
        />
        <meta property="og:title" content="Investment - KNW Photography" />
        <meta
          property="og:description"
          content="View pricing and information for lifestyle and wedding photography packages"
        />
        <meta property="og:image" content={page.cover.sizes.src} />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:url" content="https://www.knw.io/investment/" />
      </Helmet>

      <PageIntro image={page.cover} title={page.title} />
      <InvestmentTabs tabs={tabs} />
    </div>
  )
}

export const query = graphql`
  query InvestmentQuery {
    allContentfulInvestment(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          id
          cover {
            title
            sizes(maxWidth: 1000) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          pricing {
            childMarkdownRemark {
              html
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          slider {
            title
            sizes(maxWidth: 1000) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
        }
      }
    }
    contentfulPage(slug: { eq: "investment" }) {
      title
      slug
      id
      cover {
        title
        sizes(maxWidth: 1000) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
    }
  }
`

export default Investment
