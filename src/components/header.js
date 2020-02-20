import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'gatsby'

import logo from '../images/logo.svg'

const MIN_WIDTH = '768px'

const Wrapper = styled.header`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  padding: 0 15px;

  @media (min-width: ${MIN_WIDTH}) {
    padding: 25px 80px;
    justify-content: flex-start;
  }
`

const LinkLogo = styled.a`
  height: 80px;
`

const LangOptions = styled.div`
  display: flex;
  align-items: center;
`

const LinkLang = styled(Link)`
  font-size: bold;
  text-decoration: none;
  color: inherit;
  margin-left: 15px;
`

function Header() {
  return (
    <Wrapper>
      <LinkLogo href="https://anayjose.com/">
        <img style={{ height: '100%' }} src={logo} alt="Ana y José Tulum" />
      </LinkLogo>
      <LangOptions>
        <LinkLang>English</LinkLang>
        <LinkLang>Español</LinkLang>
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
