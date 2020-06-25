import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { AiFillCheckCircle } from 'react-icons/ai'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Feature from '../components/feature'
import Plan from '../components/plan'
import CollectionItem from '../components/collectionItem'
import Benefit from '../components/benefit'
import Button from '../components/button'

import results from '../images/benefit-results.png'
import work from '../images/benefit-work.png'
import luxury from '../images/benefit-luxury.png'
import explore from '../images/benefit-explore.png'
import plan from '../images/benefit-plan.png'
import enjoy from '../images/benefit-enjoy.png'
import marketplace from '../images/benefit-marketplace.png'
import car from '../images/benefit-rental-car.png'
import flight from '../images/benefit-flight.png'

import planLuxury from '../images/plan-luxury.jpg'
import planGarden from '../images/plan-garden.jpg'
import planResidence from '../images/plan-residence.jpg'
import planCoba from '../images/plan-coba.jpg'

import collectionBonus from '../images/collection-bonus.jpg'
import collectionCruises from '../images/collection-cruises.jpg'
import collectionHotels from '../images/collection-hotels.jpg'
import collectionResidences from '../images/collection-residences.jpg'
import collectionTours from '../images/collection-tours.jpg'
import collectionWeekly from '../images/collection-weekly.jpg'

const MIN_WIDTH = '768px'
const MIN_WIDTH_MD = '1024px'

const Title = styled.p`
  font-size: 1.65em;
  text-align: center;
  color: #3a5544;
  line-height: 1.25em;
  margin: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: ${MIN_WIDTH_MD}) {
    font-size: 2rem;
  }

  span {
    color: initial;
    opacity: 0.75;
    line-height: initial;
    font-size: 1.15rem;
    margin-top: 5px;
  }
`

const P = styled.p`
  font-size: 1.25rem;
  opacity: 0.75;
  margin-top: 0;
  max-width: 980px;

  @media (min-width: ${MIN_WIDTH_MD}) {
    font-size: 1.5rem;
  }
`

const SectionPresentation = styled.section`
  background-color: ${(props) => props.backgroundColor};
  max-width: ${MIN_WIDTH_MD};
  padding: 50px 25px;
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
`

const Separator = styled.div`
  width: 100%;
  height: 1px;
  display: block;
  background-color: #646464;
  margin: 25px auto;
`

const Features = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: auto;
`

const Plans = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: auto;
`

const Ul = styled.ul`
  padding-left: 0;
  margin-top: 0;
  list-style: none;
  margin-top: 15px;
`

const Li = styled.li`
  margin-top: 10px;
  display: flex;
`

function IndexPage() {
  const intl = useIntl().formatMessage

  return (
    <Layout>
      <SEO title={intl({ id: 'title' })} description={intl({ id: 'description' })} />
      <SectionPresentation>
        <Title>WHY STAY WITH US?</Title>
        <Separator />
        <Features>
          <Feature
            src={results}
            title="GUARANTEED RESULTS"
            description="Our unique structure combines the highest quality guests with guaranteed revenue for our property partners."
          />
          <Feature
            src={work}
            title="WE DO ALL THE WORK"
            description="From marketing and booking to customer service, housekeeping, and maintenance never worry abour your home again."
          />
          <Feature
            src={luxury}
            title="A LUXURY BRAND"
            description="We focus exclusively on luxury vacation homes, elevating them to meet our comprehensive brand standards."
          />
        </Features>
      </SectionPresentation>
      <SectionPresentation backgroundColor="#f2f2f2">
        <Title>
          HOW IT WORKS? <span>Your membership gives you a full private club experience.</span>
        </Title>
        <Separator />
        <Features>
          <Feature
            src={explore}
            title="JOY & EXPLORE"
            description="Pay a One-Time fee to become a member and begin exploring our global collection of luxury vacation options."
          />
          <Feature
            src={plan}
            title="PLAN & VACATION"
            description="Our travel designers will help you choose and plan the perfect first trip. Pay only for the nights you use."
          />
          <Feature
            src={enjoy}
            title="ENJOY"
            description="Enjoy with your love ones and add beneficiaries."
          />
        </Features>
      </SectionPresentation>
      <SectionPresentation>
        <Title>MEMBERSHIP PLANS</Title>
        <Separator />
        <Plans>
          <Plan
            backgroundColor="#bfa487"
            image={planGarden}
            name="GARDEN PLAN"
            content="100 NIGHTS PROGRAM / GARDEN VIEW SUITE / *3 NIGHTS STAY MINIMUM"
          />
          <Plan
            backgroundColor="#bc8350"
            image={planResidence}
            name="RESIDENCE PLAN"
            content="200 NIGHTS PROGRAM / 2 BEDROOM SUITE / *3 NIGHTS STAY MINIMUM"
          />
          <Plan
            backgroundColor="#814e20"
            image={planCoba}
            name="COBA PLAN"
            content="200 NIGHTS PROGRAM / VILLA COBA / *3 NIGHTS STAY MINIMUM"
          />
          <Plan
            backgroundColor="#385745"
            image={planLuxury}
            name="LUXURY PLAN"
            content="UNLIMITED NIGHTS PROGRAM / CASA DE AGUA / *3 NIGHTS STAY MINIMUM"
          />
        </Plans>
      </SectionPresentation>
      <SectionPresentation backgroundColor="#f2f2f2">
        <Title>OUR COLLECTION</Title>
        <Separator />
        <Features>
          <CollectionItem
            background={collectionResidences}
            content="THE RESIDENCES LUXURY VACATION HOMES"
          />
          <CollectionItem background={collectionWeekly} content="WEEKLY STAYS" />
          <CollectionItem
            background={collectionBonus}
            content="BONUS WEEK"
            description="Limited offer"
          />
          <CollectionItem
            background={collectionHotels}
            content="HOTELS & RESORTS (PRICE GUARANTEED)"
            description="More than 400,000 hotels all over the world"
          />
          <CollectionItem background={collectionTours} content="WORLDWIDE TOURS & TRAVELS" />
          <CollectionItem background={collectionCruises} content="EXCLUSIVE CRUISES" />
        </Features>
      </SectionPresentation>
      <SectionPresentation>
        <Title>
          HOW IT WORKS? <span>Your membership gives you a full private club experience.</span>
        </Title>
        <Separator />
        <Features>
          <Benefit
            icon={marketplace}
            content={
              <div>
                <P>
                  <b>MARKETPLACE: </b>A private platform for members to rent and bid on vacations
                  weeks. If you are a timeshare owner, have members bid on your week and allow the
                  best offer to win.
                </P>
                <Ul>
                  <Li>
                    <AiFillCheckCircle
                      size="1.35rem"
                      color="#3a5544"
                      style={{ flexShrink: 0, marginRight: '5px' }}
                    />
                    <P>Search hundreds of weeks worldwide.</P>
                  </Li>
                  <Li>
                    <AiFillCheckCircle
                      size="1.35rem"
                      color="#3a5544"
                      style={{ flexShrink: 0, marginRight: '5px' }}
                    />
                    <P>Rent right away or make an offer.</P>
                  </Li>
                  <Li>
                    <AiFillCheckCircle
                      size="1.35rem"
                      color="#3a5544"
                      style={{ flexShrink: 0, marginRight: '5px' }}
                    />
                    <P>Negotiate to pay the price you want.</P>
                  </Li>
                  <Li>
                    <AiFillCheckCircle
                      size="1.35rem"
                      color="#3a5544"
                      style={{ flexShrink: 0, marginRight: '5px' }}
                    />
                    <P>Get a week below market value.</P>
                  </Li>
                  <Li>
                    <AiFillCheckCircle
                      size="1.35rem"
                      color="#3a5544"
                      style={{ flexShrink: 0, marginRight: '5px' }}
                    />
                    <P>Place your week for rent.</P>
                  </Li>
                </Ul>
              </div>
            }
          />
          <Benefit
            icon={car}
            content={
              <P>
                <b>RENTAL CARS: </b> You can rent a car for a fraction of the retail price with your
                membership. Book the same day or in advance with pickup and drop-off locations
                available throughout the United States, Mexico, Canada, Europe, and anywhere you are
                traveling. Renting a car has never been so affordable and easy.
              </P>
            }
          />
          <Benefit
            icon={flight}
            content={
              <P>
                <b>FLIGHTS: </b> Your membership offers you the ability to book flights in both
                money and reward credits. Booking flights through your membership helps you earn
                double or triple rewards each time you fly. You earn reward credits with every
                flight you book. Additionally, you may receive frequent flyer miles and earn rewards
                back from your credit card.
              </P>
            }
          />
        </Features>
        <Button
          href="https://anayjose.com/friends-and-family"
          style={{ marginTop: '32px' }}
          target="_blank"
        >
          Get a membership
        </Button>
      </SectionPresentation>
    </Layout>
  )
}

export default IndexPage
