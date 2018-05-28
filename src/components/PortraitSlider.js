import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Slider from 'react-slick'

const Wrapper = styled.div`
  margin: 0 0 2em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
  }
  .slick-slide {
    height: 500px;
    padding: 0;
    width: 101%;
    div {
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
`

const sliderSettings = {
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  swipeToSlide: true,
  draggable: false,
  centerMode: true,
  centerPadding: '0px',
  arrows: true,
  touchMove: true,
  dots: true,
  responsive: [
    { breakpoint: 640, settings: { draggable: true, arrows: false } },
  ],
}

const PortraitSlider = props => (
  <Wrapper>
    <Slider {...sliderSettings}>
      {props.slides.map((slide, index) => (
        <div key={index}>
          <Img sizes={slide.sizes} backgroundColor={'#f1f1f1'} />
        </div>
      ))}
    </Slider>
  </Wrapper>
)

export default PortraitSlider
