import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding: 2em 1em 1px 1em;
  margin: 0 auto;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 2em 2em 1px 2em;
  }
`

const Title = styled.h2`
  text-transform: capitalize;
  font-size: 3em;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 3.75em;
  }
`

const List = styled.ul`
  margin: 2em 0 1em;
  display: flex;
  flex-flow: row wrap;
  a {
    margin: 0 1em 0.5em 0;
    text-decoration: none !important;
    font-size: 1em;
    padding: 0.85em 1em;
    cursor: pointer;
    border: solid 1px ${props => props.theme.colors.base};
    border-radius: 2px;
  }
`

const activeLinkStyle = {
  color: 'white',
  background: '#3e3e3e',
}

const CategoryNav = () => (
  <Wrapper>
    <Title>Galleries</Title>
    <List>
      <li>
        <Link to="/galleries/" activeStyle={activeLinkStyle}>
          All
        </Link>
      </li>
      <li>
        <Link to="/lifestyle/" activeStyle={activeLinkStyle}>
          Lifestyle
        </Link>
      </li>
      <li>
        <Link to="/wedding/" activeStyle={activeLinkStyle}>
          Wedding
        </Link>
      </li>
    </List>
  </Wrapper>
)

export default CategoryNav
