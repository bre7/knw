import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 600px;
  padding: 0 1em;
  margin: 1em auto 2em;
  p {
    line-height: 1.7;
    margin: 0 0 2em 0;
  }
`

const BodyText = props => (
  <Wrapper
    dangerouslySetInnerHTML={{ __html: props.text.childMarkdownRemark.html }}
  />
)

export default BodyText
