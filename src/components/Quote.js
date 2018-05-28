import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background: white;
  padding: 4em 2em 6em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 6em 2em;
  }
  h1,
  h2,
  h3 {
    line-height: 1.3;
    font-size: 2em;
    width: 100%;
    margin-bottom: 1em;
    text-align: center;
    text-transform: capitalize;
  }
  p {
    margin: 0 auto;
    max-width: 700px;
    line-height: 1.7;
    text-align: center;
  }
`

const Quote = props => (
  <Wrapper
    dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}
  />
)

export default Quote
