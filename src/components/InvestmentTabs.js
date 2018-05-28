import React from 'react'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import styled from 'styled-components'

const StyledTabs = styled(Tabs)`
  background: ${props => props.theme.colors.secondary};
  position: relative;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  &::before {
    content: '';
    height: 15em;
    width: 100%;
    background: ${props => props.theme.colors.secondary};
    position: absolute;
    top: -15em;
    left: 0;
    z-index: -1;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      height: 15em;
      top: -15em;
    }
  }
`

const StyledTabList = styled(TabList)`
  display: inline-flex;
  flex-flow: row;
  justify-content: center;
  z-index: 99;
  margin: 2em auto 3em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin: 2em auto 4em;
  }
`

const StyledTab = styled(Tab)`
  font-size: 1em;
  padding: 1em;
  margin: 0 0.5em;
  cursor: pointer;
  border: solid 1px ${props => props.theme.colors.base};
  border-radius: 2px;
  &.tab--selected {
    background: ${props => props.theme.colors.base};
    color: white;
    &:focus {
      outline: none;
    }
  }
`

const StyledTabPanel = styled(TabPanel)`
  background: ${props => props.theme.colors.secondary};
`

const InvestmentInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1em 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 2em 3em;
  }
`
const Sidebar = styled.div`
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 47.5%;
  }
`
const Cover = styled(Img)`
  margin: 0 0 2em 0;
`
const Main = styled.div`
  width: 100%;
  text-align: left;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 47.5%;
  }
  p {
    line-height: 1.7;
    margin: 0 0 2em 0;
    &:last-child {
      margin: 0;
    }
  }
`
const Pricing = styled.blockquote`
  padding: 2em;
  margin: 2em 0;
  background: #e4e4e4;
  h1,
  h2,
  h3 {
    font-weight: bold;
    margin: 0 0 2em 0;
    line-height: 1.2;
  }
  ul li {
    text-align: left;
    list-style: disc;
    list-style-position: inside;
    line-height: 1.5;
  }
`

const InvestmentSlider = styled.div`
  background: white;
  margin: 0 auto 4em;
  position: relative;
  h3 {
    text-align: center;
    font-size: 2em;
    padding: 1.5em 0;
    font-weight: bold;
  }
  .slick-slide {
    padding: 0.25em;
  }
  .slick-list {
    position: relative;
    left: 0;
    right: 0;
  }
`

const sliderSettings = {
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  swipeToSlide: true,
  draggable: false,
  centerMode: true,
  arrows: true,
  touchMove: true,
  responsive: [
    {
      breakpoint: 640,
      settings: { slidesToShow: 1, draggable: true, arrows: false },
    },
  ],
}

const InvestmentTabs = props => (
  <StyledTabs selectedTabClassName="tab--selected">
    <StyledTabList>
      {props.tabs.map(({ node: tab }) => (
        <StyledTab key={tab.id}>{tab.title}</StyledTab>
      ))}
    </StyledTabList>

    {props.tabs.map(({ node: tab }) => (
      <StyledTabPanel key={tab.id}>
        <InvestmentInfo>
          <Sidebar>
            {tab.cover && (
              <Cover sizes={tab.cover.sizes} backgroundColor={'#e4e4e4'} />
            )}
            {tab.pricing && (
              <Pricing
                dangerouslySetInnerHTML={{
                  __html: tab.pricing.childMarkdownRemark.html,
                }}
              />
            )}
          </Sidebar>
          {tab.description && (
            <Main
              dangerouslySetInnerHTML={{
                __html: tab.description.childMarkdownRemark.html,
              }}
            />
          )}
        </InvestmentInfo>

        {tab.slider && (
          <InvestmentSlider>
            <h3>Selected {tab.title} Photos</h3>
            <Slider {...sliderSettings}>
              {tab.slider.map((slider, index) => (
                <div key={index}>
                  <Img sizes={slider.sizes} backgroundColor={'#e4e4e4'} />
                </div>
              ))}
            </Slider>
          </InvestmentSlider>
        )}
      </StyledTabPanel>
    ))}
  </StyledTabs>
)

export default InvestmentTabs
