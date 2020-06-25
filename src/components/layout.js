import React, { useState } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import styled, { createGlobalStyle } from 'styled-components'
import { initializeIcons } from '@uifabric/icons'

import Header from './header'
import Button from './button'

import 'normalize.css'

import bg from '../images/main-banner.jpg'

initializeIcons()

const MIN_WIDTH = '768px'
const MIN_WIDTH_MD = '1024px'

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 14px;
    font-family: futura-pt, sans-serif;
    
    @media(min-width: ${MIN_WIDTH}) {
      font-size: 16px;
    }
  }

  p,
  span {
    max-height: 999999px;
    margin: 0;
  }

  .ms-DatePicker-day-button span {
    font-size: 14px;
  }

  .ms-DatePicker-day {
    border: 1px solid whitesmoke;
  }

  .ms-DatePicker-day--today {
    background-color: transparent;
  }
`

const MainWrapper = styled.div`
  margin: 0 auto;
`

/* background: url(${bg}); */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${MIN_WIDTH_MD}) {
    background-size: cover;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0) 100%);
  max-width: 1280px;
`

const Hero = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 150px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: ${MIN_WIDTH_MD}) {
    min-height: auto;
    height: 500px;
  }
`

const HeroButton = styled(Button)`
  max-width: 300px;
  margin: 0 auto;
  display: block;
`

const HeroTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 0px;

  @media (min-width: ${MIN_WIDTH}) {
    font-size: 1.75rem;
  }
`

const HeroSubtitle = styled.h2`
  color: white;
  text-align: center;
  font-size: 1.35rem;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 32px;
`

const Footer = styled.footer`
  padding: 15px;
  box-sizing: border-box;
  font-size: 0.75em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${MIN_WIDTH}) {
    flex-direction: row;
    padding: 25px 80px;
  }
`

const FooterColumn = styled.div`
  display: flex;

  a {
    color: initial;
    margin-left: 10px;
  }
`

const FloatButton = styled.a`
  height: 40px;
  width: 100%;
  background-color: #3a5544;
  border-color: #3a5544;
  position: fixed;
  left: 0;
  bottom: 0;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  display: ${(props) => (props.disabled ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media (min-width: ${MIN_WIDTH_MD}) {
    display: none;
  }
`

function Layout({ children }) {
  const intl = useIntl().formatMessage
  const [clicked, setClicked] = useState(false)

  return (
    <MainWrapper>
      <GlobalStyle />
      <Header />
      <Hero>
        <HeroTitle>{intl({ id: 'hero.title' })}</HeroTitle>
        <HeroSubtitle>{intl({ id: 'hero.subtitle' })}</HeroSubtitle>
        <HeroButton href="#form" onClick={() => setClicked(true)}>
          {intl({ id: 'hero.button' })}
        </HeroButton>
      </Hero>
      <Wrapper>
        <Main>{children}</Main>
      </Wrapper>
      <Footer>
        <p>© Hotel Ana y José. All Rights Reserved.</p>
        <FooterColumn>
          <a
            href="https://anayjose.com/reservation-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservation policy
          </a>
          <a href="https://anayjose.com/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy policy
          </a>
        </FooterColumn>
      </Footer>
    </MainWrapper>
  )
}

export default Layout
