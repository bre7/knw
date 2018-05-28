import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: calc(100% - 2em);
  max-width: 1000px;
  padding: 2em;
  margin: -50px 1em 0;
  background: white;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 3em 2em;
    margin: -10vh 2em 0;
    width: calc(100% - 4em);
  }
  a {
    text-decoration: underline;
    transition: color 0.3s;
    &:hover {
      color: gray;
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.base} !important;
    }
  }
`

const Left = styled.div`
  margin: 0 0 1em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin: 0;
    flex: 0 1 33%;
  }
`

const Right = styled.div`
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 65%;
  }
`

const Title = styled.h4`
  font-size: 2em;
  font-weight: bold;
  line-height: 1.1;
  margin: 0 0 0.5em 0;
  position: relative;
  z-index: 2;
  text-transform: capitalize;
`

const Category = styled(Link)`
  display: inline-block;
  text-transform: capitalize;
  margin: 0 0 1em 0;
  text-decoration: underline;
`

const Location = styled.h3`
  margin: 0 0 1em 0;
`

const PostLinks = styled.div`
  a {
    margin: 0 1em 1em 0;
  }
`

const Description = styled.div`
  line-height: 1.7;
`

const PostDetails = props => (
  <Wrapper>
    <Left>
      <Title>Details</Title>
      {props.category && (
        <Category to={`/${props.category}/`}>{props.category}</Category>
      )}
      {props.location && <Location>{props.location}</Location>}
      <PostLinks>
        {props.previous && (
          <Link to={`/${props.previous.slug}/`}>Previous</Link>
        )}
        {props.next && <Link to={`/${props.next.slug}/`}>Next</Link>}
      </PostLinks>
    </Left>
    <Right>
      {props.description && (
        <Description
          dangerouslySetInnerHTML={{
            __html: props.description.childMarkdownRemark.html,
          }}
        />
      )}
    </Right>
  </Wrapper>
)

export default PostDetails
