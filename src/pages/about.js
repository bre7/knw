import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PhotoGrid from '../components/PhotoGrid'
import BodyText from '../components/BodyText'
import PageDivider from '../components/PageDivider'
import BucketList from '../components/BucketList'
import PortraitSlider from '../components/PortraitSlider'

const Container = styled.div`
  display: block;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 1em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 2em;
  }
`

const About = ({ data }) => {
  const {
    title,
    coverImages,
    bio,
    pageDivider,
    bucketList,
    slider,
  } = data.contentfulAbout

  return (
    <div>
      <Helmet>
        <title>About - KNW Photography</title>
        <meta
          name="description"
          content="Learn about San Francisco Bay Area photographer Kirsten Noelle Wiemer"
        />
        <meta property="og:title" content="About - KNW Photography" />
        <meta
          property="og:description"
          content="Learn about San Francisco Bay Area photographer Kirsten Noelle Wiemer"
        />
        <meta property="og:image" content={coverImages[0].sizes.src} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:url" content="https://www.knw.io/about/" />
      </Helmet>

      <PhotoGrid images={coverImages} title={title} />
      <BodyText text={bio} />
      <PageDivider image={pageDivider} />
      <Container>
        <BucketList text={bucketList} />
        <PortraitSlider slides={slider} />
      </Container>
    </div>
  )
}

export const query = graphql`
  query AboutQuery {
    contentfulAbout {
      title
      coverImages {
        title
        sizes(maxWidth: 1000) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
      bio {
        childMarkdownRemark {
          html
        }
      }
      pageDivider {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
      bucketList {
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
`

export default About
