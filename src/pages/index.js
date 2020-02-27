import React, { useState } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'

import SEO from '../components/seo'
import FormWedding from '../components/formWedding'
import Layout from '../components/layout'

import logoPromo from '../images/logo-wedding-paradise.png'

const MIN_WIDTH = '768px'

const LogoPromo = styled.img`
  height: auto;
  width: 100%;
`

const SectionForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #dbc4ab;
`

const H1 = styled.h1`
  font-weight: bold;
  font-size: 1.2em;
  text-align: center;
  color: #646464;
  margin: -25px 15px 0 15px;
  line-height: 1.25em;

  @media (min-width: ${MIN_WIDTH}) {
    margin-left: 45px;
    margin-right: 45px;
  }
`

function IndexPage() {
  const intl = useIntl().formatMessage

  return (
    <Layout>
      <SEO title={intl({ id: 'title' })} description={intl({ id: 'description' })} />
      <LogoPromo src={logoPromo} alt={intl({ id: 'logoAlt' })} />
      <H1>{intl({ id: 'h1' })}</H1>
      <SectionForm>
        <FormWedding hideOnSuccess />
      </SectionForm>
    </Layout>
  )
}

export default IndexPage
