import React from 'react'
import find from 'lodash.find'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Hero from '../components/Hero'
import ImageList from '../components/ImageList'
import PostDetails from '../components/PostDetails'
import PostPreview from '../components/PostPreview'
import PostScrollButton from '../components/PostScrollButton'

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const PostTemplate = ({ data }) => {
  const {
    title,
    id,
    category,
    location,
    slug,
    description,
    cover,
    images,
  } = data.contentfulGallery

  const postIndex = find(
    data.allContentfulGallery.edges,
    ({ node: post }) => post.id === id
  )

  return (
    <div>
      <Helmet>
        <title>{title} - KNW Photography</title>
        <meta name="description" content={description.internal.content} />
        <meta property="og:title" content={`${title} - KNW Photography`} />
        <meta property="og:image" content={cover.sizes.src} />
        <meta
          property="og:description"
          content={description.internal.content}
        />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:url" content={`https://www.knw.io/${slug}/`} />
      </Helmet>

      <Container>
        <Hero image={cover} />
        <PostDetails
          category={category}
          location={location}
          description={description}
          next={postIndex.next}
          previous={postIndex.previous}
        />
        <ImageList images={images} />
        {postIndex.next && (
          <PostPreview
            image={postIndex.next.cover}
            link={postIndex.next.slug}
          />
        )}
      </Container>
      <PostScrollButton />
    </div>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      title
      id
      slug
      category
      location
      description {
        internal {
          content
        }
        childMarkdownRemark {
          html
        }
      }
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
      images {
        title
        description
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
    }
    allContentfulGallery(limit: 1000, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
        }
        previous {
          slug
          title
        }
        next {
          slug
          title
          cover {
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default PostTemplate
