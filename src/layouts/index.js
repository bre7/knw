import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import '../styles/global'
import theme from '../styles/theme'
import favicon from '../images/favicon.ico'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const TemplateWrapper = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <title>KNW Photography - SF Bay Area Wedding Photographer</title>
        <link rel="icon" href={favicon} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="KNW Photography helps clients capture special moments in lifestyle and wedding photography in the San Francisco Bay Area"
        />
        <meta
          property="og:title"
          content="KNW Photography - SF Bay Area Wedding Photographer"
        />
        <meta
          property="og:description"
          content="KNW Photography helps clients capture special moments in lifestyle and wedding photography in the San Francisco Bay Area"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KNW Photography" />
        <meta property="og:url" content="https://www.knw.io" />
      </Helmet>
      <Menu />
      <div className="siteContent">
        {children()}
      </div>
      <Footer />
    </div>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
