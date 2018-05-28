import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 2em;
  p {
    line-height: 1.7;
  }
  a {
    text-decoration: underline;
  }
`

const Title = styled.h2`
  font-weight: bold;
  font-size: 2.5em;
  padding: 2rem;
  margin: 0 auto 1rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 3em;
  }
`

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <title>404 - KNW Photography</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Container>
        <Content>
          <Title>
            Sorry, that page can't be found.<span /> <span /> <span />
          </Title>
          <p>
            Please return <Link to="/">home</Link> or use the menu to navigate
            to a different page.
          </p>
        </Content>
      </Container>
    </div>
  </ThemeProvider>
)

export default NotFoundPage
