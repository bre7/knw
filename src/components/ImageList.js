import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const List = styled.ul`
  width: 100%;
  max-width: 1000px;
  padding: 0 1em;
  margin: 0 auto 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 2em;
  }
`

const Item = styled.li`
  clear: right;
  .left {
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      float: left;
      width: 50%;
      border-right: 0.5em solid white;
    }
  }
  .right {
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      float: right;
      width: 50%;
      border-left: 0.5em solid white;
    }
  }
  .gatsby-image-outer-wrapper {
    margin: 0 0 1em 0;
  }
`

const ImageList = props =>
  props.images && (
    <List>
      {props.images.map((image, index) => (
        <Item key={index}>
          <Img
            sizes={image.sizes}
            alt={image.title}
            title={image.title}
            outerWrapperClassName={image.description}
            backgroundColor={'#f1f1f1'}
          />
        </Item>
      ))}
    </List>
  )

export default ImageList
