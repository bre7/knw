import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 2em 0 0;
    position: relative;
    z-index: 99;
  }
`

const StyledImg = styled(Img)`
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  margin: 0 auto;
  max-height: 750px;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: 60%;
    margin: 0 auto;
  }
`

const Title = styled.h2`
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 3em;
  position: relative;
  padding: 2rem 0 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 3.75em;
    margin: -10rem auto 0;
    padding: 12rem 0 0;
  }
`

const PageIntro = props => (
  <Wrapper>
    <StyledImg
      sizes={props.image.sizes}
      alt={props.image.title}
      title={props.image.title}
      backgroundColor={'#f1f1f1'}
    />
    {props.title && <Title>{props.title}</Title>}
  </Wrapper>
)

export default PageIntro
