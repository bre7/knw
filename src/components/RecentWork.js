import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  background: white;
  padding: 1em;
  margin-bottom: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin-bottom: 0;
    padding: 1em 2em 4em 0;
    flex-flow: row;
  }
  a:hover {
    h3 {
      opacity: 1;
      visibility: visible;
    }
  }
`

const Newest = styled.div`
  width: 100%;
  margin-bottom: 1em;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: 66%;
    margin-bottom: 0;
    @supports (position: sticky) or (position: -webkit-sticky) {
      position: sticky;
      /* stylelint-disable */
      position: -webkit-sticky;
      /* stylelint-enable */
      height: 90vh;
      top: 5vh;
      div {
        height: 90vh;
      }
    }
  }
`

const Title = styled.h2`
  font-size: 2em;
  font-weight: bold;
  text-transform: capitalize;
  background: white;
  z-index: 1;
  position: absolute;
  top: -1.75em;
  text-align: center;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
    mix-blend-mode: hard-light;
    padding: 0.5em;
    top: 0.75em;
    left: 0.75em;
    border-radius: 2px;
  }
`

const View = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1em;
  font-weight: normal;
  text-transform: capitalize;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.base};
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  visibility: hidden;
  z-index: 1;
  transition: all 0.3s;
`

const List = styled.ul`
  width: 100%;
  z-index: 2;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: 32%;
  }
`

const Item = styled.li`
  position: relative;
  margin-bottom: 1em;
  width: 100%;
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6),
  &:nth-child(7) {
    display: none;
    @supports (position: sticky) or (position: -webkit-sticky) {
      display: block;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
`

const RecentWork = props => (
  <Wrapper>
    <Newest>
      <Title>Recent Work</Title>
      <Link to={`/${props.posts[0].node.slug}/`}>
        <Img
          sizes={props.posts[0].node.cover.sizes}
          alt={props.posts[0].node.cover.title}
          title={props.posts[0].node.cover.title}
          backgroundColor={'#f1f1f1'}
        />
        <View>View Gallery</View>
      </Link>
    </Newest>
    <List>
      {props.posts.slice(1).map(({ node: post }) => (
        <Item key={post.id}>
          <Link to={`/${post.slug}/`}>
            <Img
              sizes={post.cover.sizes}
              alt={post.cover.title}
              title={post.cover.title}
              backgroundColor={'#f1f1f1'}
            />
            <View>View Gallery</View>
          </Link>
        </Item>
      ))}
    </List>
  </Wrapper>
)

export default RecentWork
