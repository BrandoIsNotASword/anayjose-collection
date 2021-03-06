import React from 'react'
import styled from 'styled-components'

const MIN_WIDTH_MD = '1280px'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media (min-width: ${MIN_WIDTH_MD}) {
    flex-direction: row;
  }
`

const Icon = styled.img`
  height: 80px;
  width: 80px;
  flex-shrink: 0;
  margin-bottom: 15px;
  margin-right: 32px;
`

const Content = styled.div`
  font-size: 1.25rem;
`

function Benefit({ icon, content }) {
  return (
    <Wrapper>
      <Icon src={icon} />
      <Content>{content}</Content>
    </Wrapper>
  )
}

export default Benefit
