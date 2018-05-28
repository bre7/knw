import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const List = styled.ul`
  margin: 0 auto;
  padding: 1em;
  max-width: 900px;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 2em;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row-reverse;
  }
`

const Item = styled.li`
  list-style: none;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
  }
  .gatsby-image-outer-wrapper {
    margin: 0 0 1rem 0;
  }
`

const Title = styled.h2`
  font-size: 3em;
  font-weight: bold;
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 3.75em;
  }
`

const PhotoGrid = props => (
  <List>
    <Item>
      <Title>{props.title}</Title>
      <Img sizes={props.images[0].sizes} backgroundColor={'#f1f1f1'} />
    </Item>
    <Item>
      <Img sizes={props.images[1].sizes} backgroundColor={'#f1f1f1'} />
      <Img sizes={props.images[2].sizes} backgroundColor={'#f1f1f1'} />
    </Item>
  </List>
)

export default PhotoGrid
