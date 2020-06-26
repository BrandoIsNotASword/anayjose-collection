import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'

import logo from '../images/logo-collection.png'

const MIN_WIDTH = '768px'
const LANGS_NAME = {
  en: 'English',
  es: 'Español',
}

const Wrapper = styled.header`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  padding-bottom: 0;
  width: 100%;
  flex-direction: column;
`

const LinkLogo = styled.a`
  height: 55px;
`

const LangOptions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 15px;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`

const LinkLang = styled.a`
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => props.color};
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);

  &:hover {
    color: #3a5544;
  }
`

const Nav = styled.nav`
  display: flex;
  overflow-x: auto;
  width: 100%;
  margin-left: -15px;
  margin-right: -15px;

  @media (min-width: 1024px) {
    margin: 0;
    justify-content: center;
  }
`

const NavLink = styled.a`
  box-sizing: border-box;
  color: black;
  text-decoration: none;
  flex-shrink: 0;
  padding: 15px;
  opacity: 0.65;

  &:hover {
    opacity: 0.85;
  }
`

function Header() {
  return (
    <Wrapper>
      <LinkLogo href="https://anayjose.com/">
        <img style={{ height: '100%' }} src={logo} alt="Ana y José Tulum" />
      </LinkLogo>
      <LangOptions>
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            languages.map((language) => (
              <LinkLang
                key={language}
                color={currentLocale === language ? '#3a5544' : 'whitesmoke'}
                onClick={() => changeLocale(language)}
              >
                {LANGS_NAME[language]}
              </LinkLang>
            ))
          }
        </IntlContextConsumer>
      </LangOptions>
      <Nav>
        <NavLink href="#how">HOW IT WORKS?</NavLink>
        <NavLink href="#plans">MEMBERSHIP PLANS</NavLink>
        <NavLink href="#why">WHY STAY WITH US?</NavLink>
        <NavLink href="#collection">OUR COLLECTION</NavLink>
        <NavLink href="#benefits">MEMBERSHIP BENEFITS</NavLink>
      </Nav>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
