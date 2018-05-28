import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;
  max-height: 750px;
  margin: 4rem 0 2rem;
`

const pageDivider = props => (
  <Wrapper>
    <Img
      sizes={props.image.sizes}
      alt={props.image.title}
      title={props.image.title}
      backgroundColor={'#f1f1f1'}
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

export default pageDivider
