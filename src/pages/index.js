import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Quote from '../components/Quote'
import RecentWork from '../components/RecentWork'

const Wrapper = styled.div`
  z-index: 2;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    position: relative;
    &::before {
      content: '';
      display: block;
      z-index: -2;
      width: 0;
      height: 75vh;
      max-height: 750px;
      background: transparent;
    }
  }
`

const IndexPage = ({ data }) => {
  const posts = data.allContentfulGallery.edges
  const page = data.contentfulHome

  return (
    <div>
      <Helmet>
        <meta property="og:image" content={page.cover.sizes.src} />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1200" />
      </Helmet>

      <Hero image={page.cover} overlay logo fixed />

      <Wrapper>
        <Quote text={page.quote} />
        <RecentWork posts={posts} />
      </Wrapper>
    </div>
  )
}

export const query = graphql`
  query HomeQuery {
    allContentfulGallery(limit: 8, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          id
          slug
          date(formatString: "M.DD.YYYY")
          cover {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
        }
      }
    }
    contentfulHome {
      title
      slug
      id
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
      quote {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default IndexPage
