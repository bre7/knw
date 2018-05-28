import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import logo from '../images/logo.svg'

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  @media (min-width: ${props => props.theme.responsive.small}) {
    position: ${props => (props.fixed ? 'fixed' : 'relative')};
  }
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    display: ${props => (props.overlay ? 'block' : 'none')};
  }
`

const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: auto;
  max-height: 750px;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: 75vh;
  }
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`

const Title = styled.h2`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 3em;
  font-weight: bold;
  z-index: 2;
  color: white;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 3.75em;
  }
`

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8em;
  z-index: 2;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: 10em;
  }
`

const Hero = props =>
  props.image && (
    <Wrapper overlay={props.overlay} fixed={props.fixed}>
      {props.logo && (
        <h1>
          <Logo src={logo} />
        </h1>
      )}
      {props.title && <Title>{props.title}</Title>}
      <BgImg
        sizes={props.image.sizes}
        alt={props.image.title}
        title={props.image.title}
        backgroundColor={'#f1f1f1'}
      />
    </Wrapper>
  )

export default Hero
