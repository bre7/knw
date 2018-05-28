import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Overlay = styled.div`
  background: ${props => props.theme.colors.base};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: 0.5s all;
  transition-timing-function: cubic-bezier(0.84, 0, 0.22, 1);
  opacity: ${props => (props.open ? '.8' : '0')};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
`

const Toggle = styled.button`
  cursor: pointer;
  position: fixed;
  z-index: 999;
  top: 1rem;
  right: 1rem;
  padding: 0;
  margin: 0;
  background: white;
  border-radius: 2px;
  transition: all 0.3s;
  border: 1px solid
    ${props => (props.open ? 'white' : props.theme.colors.secondary)};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    top: 2rem;
    right: 2rem;
  }
  &:hover {
    em {
      max-width: ${props => (props.open ? '0' : '70px')};
      padding: 0 0 0 ${props => (props.open ? '0' : '1rem')};
      opacity: ${props => (props.open ? '0' : '1')};
    }
  }
  span:first-child {
    transform: rotate(${props => (props.open ? '45deg' : '0')});
    top: ${props => (props.open ? '29px' : '23px')};
  }
  span:nth-child(2n) {
    transform: rotate(${props => (props.open ? '-45deg' : '0')});
    bottom: ${props => (props.open ? '25px' : '23px')};
  }
`

const Label = styled.em`
  float: left;
  font-weight: bold;
  text-transform: capitalize;
  line-height: 3.5rem;
  height: 100%;
  color: ${props => props.theme.colors.base};
  max-width: 0;
  padding: 0;
  opacity: 0;
  display: none;
  transition: all 0.4s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: block;
  }
  @media (hover: none) {
    display: none;
  }
`

const Icon = styled.div`
  position: relative;
  float: right;
  width: 3.5rem;
  height: 3.5rem;
  span {
    transition: all 0.3s;
    position: absolute;
    display: block;
    background: ${props => props.theme.colors.base};
    width: 40%;
    height: 2px;
    left: 30%;
  }
`

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  height: 100%;
  width: 100%;
  z-index: 100;
  overflow-y: scroll;
  transition: transform 0.5s;
  transition-timing-function: cubic-bezier(0.84, 0, 0.22, 1);
  transform: translate3d(${props => (props.open ? '0' : '100%')}, 0, 0);
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: 50%;
  }
  ul {
    padding: 7em 4em 0 1em;
    text-align: right;
  }
  li {
    margin-bottom: 1.5em;
  }
  a {
    display: inline-flex;
    font-size: 2.5em;
    font-weight: bold;
    text-transform: capitalize;
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    transition: color 0.3s;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 3em;
    }
    &:hover {
      color: gray;
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.base};
    }
  }
  svg {
    transition: 0.3s fill;
    fill: ${props => props.theme.colors.base};
    display: inline-block;
    height: 2rem;
    width: 2rem;
    margin: 0 0 0 0.25em;
    &:hover {
      fill: gray;
    }
    @media (hover: none) {
      fill: ${props => props.theme.colors.base} !important;
    }
  }
`

const Instagram = styled.svg`
  margin-right: -0.25rem !important;
`
const Facebook = styled.svg`
  margin-right: -0.5rem !important;
`

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
    }
  }

  toggleMenu = () => {
    this.setState(function(prevState, props) {
      return { showMenu: !prevState.showMenu }
    })
  }

  closeMenu = () => {
    this.setState({ showMenu: false })
  }

  render() {
    return (
      <header>
        <Overlay onClick={this.closeMenu} open={this.state.showMenu} />
        <Toggle onClick={this.toggleMenu} open={this.state.showMenu}>
          <Label>Menu</Label>
          <Icon>
            <span />
            <span />
          </Icon>
        </Toggle>
        <Nav open={this.state.showMenu}>
          <ul>
            <li>
              <Link to="/" onClick={this.closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about/" onClick={this.closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/galleries/" onClick={this.closeMenu}>
                Galleries
              </Link>
            </li>
            <li>
              <Link to="/investment/" onClick={this.closeMenu}>
                Investment
              </Link>
            </li>
            <li>
              <Link to="/contact/" onClick={this.closeMenu}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://www.facebook.com/knwphoto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook viewBox="0 0 512 512">
                  <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
                </Facebook>
              </a>
              <a
                href="https://www.instagram.com/kirstennoellew/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram viewBox="0 0 512 512">
                  <g>
                    <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
                    <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
                    <circle cx="351.5" cy="160.5" r="21.5" />
                  </g>
                </Instagram>
              </a>
            </li>
          </ul>
        </Nav>
      </header>
    )
  }
}

export default Menu

Menu.propTypes = {
  toggleMenu: PropTypes.func,
  closeMenu: PropTypes.func,
}
