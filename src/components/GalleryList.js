import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const List = styled.ul`
  max-width: ${props => props.theme.sizes.maxWidth};
  background: white;
  width: 100%;
  margin: 0 auto;
  padding: 2em 1em 4em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 2em 2em 4em;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    &::after {
      content: '';
      flex: 0 0 32%;
    }
    @supports (display: grid) {
      display: grid;
      grid-gap: 1em;
      grid-template-columns: 1fr 1fr 1fr;
      &::after {
        display: none;
      }
    }
  }
`

const Item = styled.li`
  position: relative;
  margin: 0 0 1em 0;
  div {
    height: 100%;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 32.5%;
    margin: 0.5vw 0;
    @supports (display: grid) {
      margin: 0;
      grid-column: span 1;
      &:nth-child(6n + 1) {
        grid-column: span 2;
        grid-row: span 2;
      }
      &:nth-child(6n + 5) {
        grid-column: span 2;
        grid-row: span 2;
      }
      @-moz-document url-prefix() {
        min-height: 200px;
      }
    }
  }
  &:hover {
    h3 {
      opacity: 1;
      visibility: visible;
    }
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

const GalleryList = props => (
  <List>
    {props.posts.map(({ node: post, index }) => (
      <Item key={post.id}>
        <Link to={`/${post.slug}/`}>
          <Img
            sizes={post.cover.sizes}
            alt={post.cover.title}
            title={post.cover.title}
            backgroundColor={'#f1f1f1'}
          />
          <View>view gallery</View>
        </Link>
      </Item>
    ))}
  </List>
)

export default GalleryList
