import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled(Link)`
  height: 40vh;
  min-height: 200px;
  max-height: 375px;
  position: relative;
  width: 100%;
  text-align: center;
  text-decoration: none !important;
  &::after {
    transition: background-color 0.5s;
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:hover {
    &::after {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`

const Title = styled.h4`
  font-size: 2em;
  font-weight: bold;
  text-transform: capitalize;
  display: inline-block;
  color: ${props => props.theme.colors.base};
  background: white;
  padding: 0.5em;
  border-radius: 2px;
  margin: 0 auto;
  mix-blend-mode: screen;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

const PostPreview = props => (
  <Wrapper to={`/${props.link}/`}>
    <Title>Next</Title>
    <Img
      sizes={props.image.sizes}
      alt={props.image.title}
      title={props.image.title}
      backgroundColor={'#ffffff'}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
    />
  </Wrapper>
)

export default PostPreview
