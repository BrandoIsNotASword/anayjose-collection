import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Input from '../components/input'
import DatePicker from '../components/datePicker'
import Button from '../components/button'

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

const TermMessage = styled.span`
  font-size: 0.75em;
  text-align: center;
  margin-top: 5px;
`

const RowInputs = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;

  & > div,
  & > span {
    flex: 1;
  }

  & > div:not(:first-child),
  & > span:not(:first-child) {
    margin-left: 0px;
    margin-top: 10px;
  }

  @media (min-width: 640px) {
    flex-direction: row;

    & > div:not(:first-child),
    & > span:not(:first-child) {
      margin-left: 5px;
      margin-top: 0;
    }
  }
`

function IndexPage() {
  return (
    <Layout>
      <LogoPromo src={logoPromo} alt="Ana y José Wedding Promo" />
      <H1>GET MARRIED IN MAY, JUN, SEPT OR OCT AND GET A SPECIAL RATE!</H1>
      <SectionForm>
        <RowInputs>
          <Input label="Couple's name" />
          <Input label="Country" />
        </RowInputs>
        <RowInputs>
          <Input label="Phone number" />
          <Input label="Email" />
        </RowInputs>
        <RowInputs>
          <DatePicker label="Date" />
          <DatePicker
            label="Second date"
            description="Just in case the first date is not available."
          />
        </RowInputs>
        <RowInputs>
          <Input type="number" label="Number of guests" />
          <Input label="Type of ceremony" placeholder="Catholic, jewish, muslim, etc." />
        </RowInputs>
        <Button>Start planning</Button>
      </SectionForm>
      <TermMessage>Restrictions apply, rates subject to last minute changes.</TermMessage>
    </Layout>
  )
}

export default IndexPage
