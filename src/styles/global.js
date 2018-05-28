import { injectGlobal } from 'styled-components'

injectGlobal`
  /* stylelint-disable */
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    min-height: 0;
    min-width: 0;
	  box-sizing: border-box;
  }

  /* Site Specific Globals */
  body {
    background: white;
    color: #3E3E3E;
    line-height: 1;
    font-variant-ligatures: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  a {
    text-decoration: none;
    color: #3e3e3e;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 0;
    resize: none;
    &:focus {
      outline: none;
    }
    &:invalid {
      box-shadow: none;
    }
  }

  ::-webkit-input-placeholder {
    color: gray;
  }

  ::-moz-placeholder {
    color: gray; opacity: 1;
  }

  :-ms-input-placeholder {
    color: gray;
  }

  :-moz-placeholder {
    color: gray; opacity: 1;
  }

  select:invalid, select option[value=''] {
    color: gray !important;
  }

  input[type='range'] {
    border-radius: 2px;
    width: 100%;
    height: 10px;
    background: #F1F1F1;
    margin: 1em 0;
  }

  input[type='range']::-moz-range-track {
    background-color: #F1F1F1;
  }

  input[type='range']::-moz-focus-outer {
    border: 0;
  }

  input[type='range']::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #3E3E3E;
    cursor: move;
    cursor: grab;
    cursor: -webkit-grab;
      &:active {
        cursor: grabbing;
        cursor: -webkit-grabbing;
      }
  }

  input[type='range']::-moz-range-thumb {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: none;
    background: #3E3E3E;
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
      &:active {
        cursor: grabbing;
        cursor: -moz-grabbing;
      }
  }

  input[type='range']::-ms-thumb {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #3E3E3E;
    cursor: move;
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
  }

  .nprogress-busy {
    cursor: wait;
  }

  #nprogress .peg {
    display: none !important;
  }

  #nprogress .bar {
    height: 4px !important;
  }

  /* Slick */
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
    left: -1px;
    right: -1px;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-track::before,
  .slick-track::after {
    display: table;
    content: '';
  }

  .slick-track::after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
    img {
      display: block;
      -webkit-user-drag: none;
    }
    &:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-prev, .slick-next {
    position: absolute;
    top: 50%;
    display: block;
    font-size: 0;
    color: transparent;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    z-index: 2;
    width: 50%;
    height: 100%;
  }

  .slick-prev {
    left: 0;
    cursor: w-resize;
  }

  .slick-next {
    right: 0;
    cursor: e-resize;
  }

  .slick-dots {
    position: absolute;
    bottom: 1em;
    left: 0;
    right: 0;
    z-index: 99;
    text-align: center;
    li {
      display: inline-block;
      border: 1px solid white;
      margin: 0 .5rem;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      button {
        cursor: pointer;
        color: transparent;
      }
    }
    .slick-active {
      background: white;
    }
  }

  /* Headroom */
  .headroom {
    cursor: pointer;
    z-index: 2;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(0);
    transition: transform 0.2s ease-in-out;
  }

  .headroom-wrapper {
    float: right;
  }

  .headroom--unfixed {
    position: fixed;
    transform: translateY(100%);
  }

  .headroom--unpinned {
    position: fixed;
    transform: translateY(100%);
  }

  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
  }
`
