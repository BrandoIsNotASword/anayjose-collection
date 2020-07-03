import React, { useState } from 'react'
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
import Section from '../components/section'
import Booking from '../components/booking'

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
const MIN_WIDTH_MD = '1280px'

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
`

const Separator = styled.div`
  width: 100%;
  height: 1px;
  display: block;
  background-color: #646464;
  margin: 25px auto;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: auto;

  @media (min-width: ${MIN_WIDTH_MD}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Plans = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: auto;

  @media (min-width: ${MIN_WIDTH}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${MIN_WIDTH_MD}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const Collections = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: auto;

  @media (min-width: ${MIN_WIDTH}) {
    grid-template-columns: auto auto;
  }

  @media (min-width: ${MIN_WIDTH_MD}) {
    grid-template-columns: auto auto auto;
  }
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
  align-items: center;
`

function IndexPage() {
  const intl = useIntl().formatMessage
  const [isOpen, setIsOpen] = useState(false)
  const [promotion, setPromotion] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')

  const onClickPlan = (promotion) => {
    const checkIn = new Date()
    const checkOut = new Date()

    checkOut.setDate(checkOut.getDate() + 3)

    setPromotion(promotion)
    setCheckIn(checkIn.toISOString().split('T')[0])
    setCheckOut(checkOut.toISOString().split('T')[0])

    setIsOpen(true)
  }

  return (
    <Layout>
      <SEO title={intl({ id: 'title' })} description={intl({ id: 'description' })} />
      <Section id="how" backgroundColor="#f2f2f2">
        <Title>
          {intl({ id: 'how.title' })} <span>{intl({ id: 'how.description' })}</span>
        </Title>
        <Separator />
        <Grid>
          <Feature
            src={explore}
            title={intl({ id: 'how.features.explore.title' })}
            description={intl({ id: 'how.features.explore.description' })}
          />
          <Feature
            src={plan}
            title={intl({ id: 'how.features.plan.title' })}
            description={intl({ id: 'how.features.plan.description' })}
          />
          <Feature
            src={enjoy}
            title={intl({ id: 'how.features.enjoy.title' })}
            description={intl({ id: 'how.features.enjoy.description' })}
          />
        </Grid>
      </Section>
      <Section id="plans">
        <Title>
          {intl({ id: 'plans.title' })}
          <span>{intl({ id: 'plans.description' })}</span>
        </Title>
        <Separator />
        <Plans>
          <Plan
            backgroundColor="#bfa487"
            image={planGarden}
            name={intl({ id: 'plans.features.garden.title' })}
            content={intl({ id: 'plans.features.garden.content' })}
            onClick={() => onClickPlan('promotion/CLUBGARDEN/')}
          />
          <Plan
            backgroundColor="#bc8350"
            image={planResidence}
            name={intl({ id: 'plans.features.residence.title' })}
            content={intl({ id: 'plans.features.residence.content' })}
            onClick={() => onClickPlan('promotion/CLUBRESIDENCIAS/')}
          />
          <Plan
            backgroundColor="#814e20"
            image={planCoba}
            name={intl({ id: 'plans.features.coba.title' })}
            content={intl({ id: 'plans.features.coba.content' })}
            onClick={() => onClickPlan('promotion/COBÁCLUB/')}
          />
          <Plan
            backgroundColor="#385745"
            image={planLuxury}
            name={intl({ id: 'plans.features.luxury.title' })}
            content={intl({ id: 'plans.features.luxury.content' })}
            onClick={() => (window.location.href = 'https://www.anayjose.com/casa-de-agua.html')}
          />
        </Plans>
      </Section>
      <Section id="why" backgroundColor="#f2f2f2">
        <Title>{intl({ id: 'why.title' })}</Title>
        <Separator />
        <Grid>
          <Feature
            src={results}
            title={intl({ id: 'why.features.results.title' })}
            description={intl({ id: 'why.features.results.description' })}
          />
          <Feature
            src={work}
            title={intl({ id: 'why.features.work.title' })}
            description={intl({ id: 'why.features.work.description' })}
          />
          <Feature
            src={luxury}
            title={intl({ id: 'why.features.luxury.title' })}
            description={intl({ id: 'why.features.luxury.description' })}
          />
        </Grid>
      </Section>
      <Section id="collection">
        <Title>
          {intl({ id: 'collection.title' })} <span>{intl({ id: 'collection.description' })}</span>
        </Title>
        <Separator />
        <Collections>
          <CollectionItem
            background={collectionResidences}
            content={intl({ id: 'collection.features.residences' })}
          />
          <CollectionItem
            background={collectionWeekly}
            content={intl({ id: 'collection.features.stays' })}
          />
          <CollectionItem
            background={collectionBonus}
            content={intl({ id: 'collection.features.bonus.title' })}
            description={intl({ id: 'collection.features.bonus.description' })}
          />
          <CollectionItem
            background={collectionHotels}
            content={intl({ id: 'collection.features.hotels.title' })}
            description={intl({ id: 'collection.features.hotels.description' })}
          />
          <CollectionItem
            background={collectionTours}
            content={intl({ id: 'collection.features.tours' })}
          />
          <CollectionItem
            background={collectionCruises}
            content={intl({ id: 'collection.features.cruises' })}
          />
        </Collections>
      </Section>
      <Section id="benefits" backgroundColor="#f2f2f2">
        <Title>
          {intl({ id: 'benefits.title' })} <span>{intl({ id: 'benefits.description' })}</span>
        </Title>
        <Separator />
        <Benefit
          icon={marketplace}
          content={
            <div>
              <P>
                <b>{intl({ id: 'benefits.features.marketplace.title' })} </b>
                {intl({ id: 'benefits.features.marketplace.description' })}
              </P>
              <Ul>
                <Li>
                  <AiFillCheckCircle
                    size="1.25rem"
                    color="#3a5544"
                    style={{ flexShrink: 0, marginRight: '5px' }}
                  />
                  <P>{intl({ id: 'benefits.features.marketplace.list.1' })}</P>
                </Li>
                <Li>
                  <AiFillCheckCircle
                    size="1.25rem"
                    color="#3a5544"
                    style={{ flexShrink: 0, marginRight: '5px' }}
                  />
                  <P>{intl({ id: 'benefits.features.marketplace.list.2' })}</P>
                </Li>
                <Li>
                  <AiFillCheckCircle
                    size="1.25rem"
                    color="#3a5544"
                    style={{ flexShrink: 0, marginRight: '5px' }}
                  />
                  <P>{intl({ id: 'benefits.features.marketplace.list.3' })}</P>
                </Li>
                <Li>
                  <AiFillCheckCircle
                    size="1.25rem"
                    color="#3a5544"
                    style={{ flexShrink: 0, marginRight: '5px' }}
                  />
                  <P>{intl({ id: 'benefits.features.marketplace.list.4' })}</P>
                </Li>
                <Li>
                  <AiFillCheckCircle
                    size="1.25rem"
                    color="#3a5544"
                    style={{ flexShrink: 0, marginRight: '5px' }}
                  />
                  <P>{intl({ id: 'benefits.features.marketplace.list.5' })}</P>
                </Li>
              </Ul>
            </div>
          }
        />
        <Benefit
          icon={car}
          content={
            <P>
              <b>{intl({ id: 'benefits.features.car.title' })} </b>{' '}
              {intl({ id: 'benefits.features.car.description' })}
            </P>
          }
        />
        <Benefit
          icon={flight}
          content={
            <P>
              <b>{intl({ id: 'benefits.features.flights.title' })} </b>{' '}
              {intl({ id: 'benefits.features.flights.description' })}
            </P>
          }
        />
        <Button
          href="https://anayjose.com/friends-and-family"
          style={{ marginTop: '32px', maxWidth: '320px', display: 'inline-block' }}
          target="_blank"
        >
          {intl({ id: 'benefits.button' })}
        </Button>
      </Section>
      <Booking
        isOpen={isOpen}
        promotion={promotion}
        checkIn={checkIn}
        checkOut={checkOut}
        onCloseModal={() => setIsOpen(false)}
      />
    </Layout>
  )
}

export default IndexPage
