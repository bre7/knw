import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import 'whatwg-fetch'
import arrows from '../images/arrows.svg'
import calendar from '../images/calendar.svg'
import Recaptcha from 'react-google-recaptcha'

const Wrapper = styled.div`
  z-index: 2;
  width: 100%;
  margin: -50px auto 2em;
  max-width: ${props => props.theme.sizes.maxWidth};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin: -10vh auto 2em;
  }
`

const Overlay = styled.div`
  background: ${props => props.theme.colors.base};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: 0.5s all;
  transition-timing-function: cubic-bezier(0.84, 0, 0.22, 1);
  opacity: ${props => (props.open ? '.8' : '0')};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
`

const Container = styled.div`
  background: white;
  margin: 0 1em;
  display: block;
  position: relative;
  z-index: 2;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin: 0 2em;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const ContactForm = styled.form`
  background: white;
  display: block;
  position: relative;
  width: 100%;
  padding: 2em 1em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 2em;
    flex: 0 0 66%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
  input[name='name'],
  input[name='email'],
  input[name='location'],
  select {
    width: 100%;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.base};
    padding: 1em;
    font-size: 1em;
    margin: 0 0 1em 0;
    border-radius: 2px;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      flex: 0 0 49%;
    }
  }
  label {
    font-size: 1em;
    color: gray;
  }

  input:-webkit-autofill {
    /* stylelint-disable */
    -webkit-box-shadow: 0 0 0 1000px ${props => props.theme.colors.secondary}
      inset;
    -webkit-text-fill-color: ${props => props.theme.colors.base};
    /* stylelint-enable */
  }
`

const Optional = styled.div`
  width: 100%;
  display: ${props => (props.visible ? 'block' : 'none')};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: ${props => (props.visible ? 'flex' : 'none')};
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const EventDate = styled.div`
  width: 100%;
  margin: 0 0 1em 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
  }
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    width: 100%;
  }
  input {
    width: 100%;
    padding: 1em;
    cursor: pointer;
    background: ${props => props.theme.colors.secondary} url(${calendar})
      no-repeat 97% 0 !important;
  }
`

const Select = styled.select`
  background: ${props => props.theme.colors.secondary} url(${arrows}) no-repeat
    97% 0 !important;
  cursor: pointer;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
  }
`

const Range = styled.div`
  margin: 0 0 1em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
  }
  span {
    font-weight: bold;
    float: right;
  }
`

const Message = styled.textarea`
  width: 100%;
  background: ${props => props.theme.colors.secondary};
  border-radius: 2px;
  height: 300px;
  line-height: 1.5;
  padding: 1em;
  margin: 0 0 1em 0;
`

const Submit = styled.input`
  cursor: pointer;
  border-radius: 2px;
  padding: 1em 2em;
  background: ${props => props.theme.colors.base} !important;
  color: white !important;
  &:disabled {
    background: gray !important;
    cursor: not-allowed;
  }
`

const StyledRecaptcha = styled(Recaptcha)`
  padding: 0 0 1em 0;
  width: 100%;
`

const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 1000;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.7;
    margin: 0 0 2em 0;
  }
`
const Button = styled.button`
  background: ${props => props.theme.colors.base};
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
`

const Social = styled.div`
  background: white;
  width: 100%;
  padding: 0 1em 1em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 33%;
    padding: 2em 0 0 0;
  }
  h3 {
    font-size: 2em;
    font-weight: bold;
    margin: 0 0 1rem 0;
  }
  ul {
    margin: 0 0 2em 0;
  }
  li {
    display: inline-block;
    margin: 0 1em 0 -0.5em;
    &:first-child {
      svg {
        margin: 0 -0.1em 0 0;
      }
    }
  }
  svg {
    fill: ${props => props.theme.colors.base};
    display: inline-block;
    height: 1.75rem;
    width: 1.75rem;
    margin: 0 0.25em 0 0;
    position: relative;
    top: 0.5em;
    transition: 0.3s fill;
  }
  a {
    text-decoration: underline;
    transition: 0.3s color;
    &:hover {
      color: gray;
      svg {
        fill: gray;
      }
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.base} !important;
      svg {
        fill: ${props => props.theme.colors.base} !important;
      }
    }
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      reason: '',
      source: '',
      eventDate: null,
      location: '',
      guests: '0',
      budget: '0',
      message: '',
      optionalQuestions: false,
      showModal: false,
      disabledSubmit: true,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleRecaptcha = value => {
    this.setState({
      'g-recaptcha-response': value,
      disabledSubmit: false,
    })
  }

  handleDateChange = date => {
    this.setState({
      eventDate: date,
    })
  }

  handleResasonChange = event => {
    const target = event.target
    const value = target.value
    if (value === 'Book A Wedding Package') {
      this.setState({
        reason: value,
        optionalQuestions: true,
      })
    } else {
      this.setState({
        reason: value,
        eventDate: null,
        location: '',
        guests: '0',
        budget: '0',
        optionalQuestions: false,
      })
    }
  }

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    // eslint-disable-next-line
    grecaptcha.reset()
    this.setState({
      name: '',
      email: '',
      reason: '',
      source: '',
      eventDate: null,
      location: '',
      guests: '0',
      budget: '0',
      message: '',
      optionalQuestions: false,
      showModal: true,
      disabledSubmit: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    const RECAPTCHA_KEY =
      process.env.SITE_RECAPTCHA_KEY ||
      '6Ld9wVsUAAAAACwhHGVK7W9KyQoWMehnUdi0XfpM'
    return (
      <Wrapper overlay={this.state.showModal}>
        <Overlay open={this.state.showModal} onClick={this.closeModal} />
        <Container>
          <ContactForm
            name="contact"
            onSubmit={this.handleSubmit}
            data-netlify="true"
            data-netlify-recaptcha="true"
            data-netlify-honeypot="bot"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
            <Select
              name="reason"
              value={this.state.reason}
              onChange={this.handleResasonChange}
              required
            >
              <option value="">Reason For Contacting</option>
              <option value="Book A Wedding Package">
                Book A Wedding Package
              </option>
              <option value="Book A Lifestyle Package">
                Book A Lifestyle Package
              </option>
              <option value="General Inquiry / Question">
                General Inquiry / Question
              </option>
            </Select>
            <Select
              name="source"
              value={this.state.source}
              onChange={this.handleInputChange}
              required
            >
              <option value="">How Did You Hear About Me?</option>
              <option value="Referral">I Was Referred By Someone I Know</option>
              <option value="Social Media">I Found You On Social Media</option>
              <option value="Google Search">Google Search Result</option>
              <option value="Other">Other</option>
            </Select>

            <Optional visible={this.state.optionalQuestions}>
              <EventDate>
                <DatePicker
                  name="eventDate"
                  selected={this.state.eventDate}
                  onChange={this.handleDateChange}
                  minDate={moment()}
                  onFocus={this.addReadOnly}
                  onBlur={this.removeReadOnly}
                  placeholderText="Event Date"
                />
              </EventDate>
              <input
                name="location"
                type="text"
                value={this.state.location}
                onChange={this.handleInputChange}
                placeholder="Location / Venue"
              />
              <Range>
                <label htmlFor="guests">Number Of Guests?</label>{' '}
                <span>{this.state.guests} Guests</span>
                <input
                  name="guests"
                  type="range"
                  value={this.state.guests}
                  onChange={this.handleInputChange}
                  min="0"
                  max="400"
                  step="5"
                />
              </Range>
              <Range>
                <label htmlFor="budget">Photography Budget?</label>{' '}
                <span>${this.state.budget}</span>
                <input
                  name="budget"
                  type="range"
                  value={this.state.budget}
                  onChange={this.handleInputChange}
                  min="0"
                  max="10000"
                  step="250"
                />
              </Range>
            </Optional>
            <Message
              name="message"
              type="text"
              placeholder="Message"
              value={this.state.message}
              onChange={this.handleInputChange}
              required
            />
            <input
              hidden
              name="bot"
              onChange={this.handleInputChange}
              autoComplete="nope"
            />
            <StyledRecaptcha
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
            />
            <Submit
              disabled={this.state.disabledSubmit}
              name="submit"
              type="submit"
              value="Send"
            />
          </ContactForm>
          <Social>
            <h3>Follow Along</h3>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/knwphoto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 512 512">
                    <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
                  </svg>Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kirstennoellew/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 512 512">
                    <g>
                      <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
                      <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
                      <circle cx="351.5" cy="160.5" r="21.5" />
                    </g>
                  </svg>Instagram
                </a>
              </li>
            </ul>
          </Social>
        </Container>
        <Modal visible={this.state.showModal}>
          <p>
            Thanks for reaching out. I will get back to you as soon as possible!
          </p>
          <Button onClick={this.closeModal}>Okay</Button>
        </Modal>
      </Wrapper>
    )
  }
}

export default Form
