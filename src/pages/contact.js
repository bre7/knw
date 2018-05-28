import React from 'react'
import Helmet from 'react-helmet'
import Hero from '../components/Hero'
import Form from '../components/Form'

const Contact = ({ data }) => {
  const page = data.contentfulPage

  return (
    <div>
      <Helmet>
        <title>Contact - KNW Photography</title>
        <meta
          name="description"
          content="Get in touch with KNW Photography to book your photography session"
        />
        <meta property="og:title" content="Contact - KNW Photography" />
        <meta
          property="og:description"
          content="Get in touch with KNW Photography to book your photography session"
        />
        <meta property="og:image" content={page.cover.sizes.src} />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:url" content="https://www.knw.io/contact/" />
      </Helmet>

      <Hero image={page.cover} title={page.title} overlay />
      <Form />
    </div>
  )
}

export const query = graphql`
  query ContactQuery {
    contentfulPage(slug: { eq: "contact" }) {
      title
      slug
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
    }
  }
`

export default Contact
