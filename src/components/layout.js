import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { initializeIcons } from '@uifabric/icons'

import Header from './header'
import Gallery from './gallery'

import 'normalize.css'

import bg from '../images/bg-wedding1.jpg'

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
  max-width: 1440px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url(${bg});
  background-size: 150%;
  background-position: center top;
  background-repeat: no-repeat;

  @media (min-width: ${MIN_WIDTH}) {
    background-size: cover;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: 60px 25px 25px 25px;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%);

  @media (min-width: ${MIN_WIDTH}) {
    padding: 15% 15% 32px 15%;
  }

  @media (min-width: ${MIN_WIDTH_MD}) {
    padding: 0;
    padding-bottom: 25px;
    width: 500px;
    margin-left: 80px;
    margin-top: 30px;
    background: transparent;
  }
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

const Layout = ({ children }) => {
  return (
    <MainWrapper>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Main>{children}</Main>
      </Wrapper>
      <Gallery />
      <Footer>
        <p>© Hotel Ana y José. All Rights Reserved.</p>
        <FooterColumn>
          <a
            href="https://anayjose.com/reservation-policy"
            target="_blank"
            rel="noopener noreferrer"
            class="layout__FooterLink-ii2kc2-6 hjydDq"
          >
            Reservation policy
          </a>
          <a
            href="https://anayjose.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            class="layout__FooterLink-ii2kc2-6 hjydDq"
          >
            Privacy policy
          </a>
        </FooterColumn>
      </Footer>
    </MainWrapper>
  )
}

export default Layout
