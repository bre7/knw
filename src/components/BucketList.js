import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 500px;
  background: ${props => props.theme.colors.secondary};
  padding: 2em;
  margin: 0 0 1em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
  }
  h3 {
    font-weight: bold;
    text-align: center;
    font-size: 2em;
    margin: 0 0 1em 0;
    &:nth-child(2) {
      margin: -0.5em 0 1em 0;
    }
  }
  li {
    list-style: disc;
    list-style-position: inside;
    margin: 0 0 0.5em 0;
  }
`

const BucketList = props => (
  <Wrapper
    dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}
  />
)

export default BucketList
