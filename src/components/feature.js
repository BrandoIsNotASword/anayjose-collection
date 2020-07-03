import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Img = styled.img`
  height: auto;
  width: 100px;
  margin: 0 auto;
`

const Title = styled.p`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #3a5544;
  font-size: 1.25rem;
`

const Description = styled.p`
  opacity: 0.75;
  text-align: center;
  font-size: 1.25rem;
`

function Feature({ src, title, description }) {
  return (
    <Wrapper>
      <Img src={src} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  )
}

export default Feature
