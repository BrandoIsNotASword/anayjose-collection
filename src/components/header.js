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
  position: absolute;
  width: 100%;
  flex-direction: column;

  @media (min-width: ${MIN_WIDTH}) {
    height: 110px;
    padding: 25px 80px;
  }
`

const LinkLogo = styled.a`
  height: 55px;
`

const LangOptions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
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
    color: #dbc4ab;
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
                color={currentLocale === language ? '#dbc4ab' : '#ffffff'}
                onClick={() => changeLocale(language)}
              >
                {LANGS_NAME[language]}
              </LinkLang>
            ))
          }
        </IntlContextConsumer>
      </LangOptions>
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
