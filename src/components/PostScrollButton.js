import React from 'react'
import Headroom from 'react-headroom'
import ScrollProgress from 'scrollprogress'
import styled from 'styled-components'
if (typeof window !== `undefined`) {
  require('smoothscroll-polyfill').polyfill()
  window.__forceSmoothScrollPolyfill__ = true
}

const scrollUp = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

class PostScrollButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: 0,
    }
  }

  componentDidMount() {
    this.progressObserver = new ScrollProgress((x, y) => {
      this.setState({
        progress: y * 100,
      })
    })
  }

  componentWillUnmount() {
    this.progressObserver.destroy()
  }

  render() {
    const Progress = styled.div`
      width: ${this.state.progress}%;
      background: ${props => props.theme.colors.base};
      height: 4px;
      top: 0;
      z-index: 99999;
      position: absolute;
      margin-top: -4px;
    `

    const Text = styled.p`
      font-size: 1em;
      font-weight: bold;
      background: white;
      border-top: 1px solid ${props => props.theme.colors.secondary};
      padding: 1em;
      text-align: center;
      position: relative;
      z-index: 99;
    `

    return (
      <Headroom disableInlineStyles pinStart={300} onClick={scrollUp}>
        <Progress />
        <Text>Back To Top</Text>
      </Headroom>
    )
  }
}

export default PostScrollButton
