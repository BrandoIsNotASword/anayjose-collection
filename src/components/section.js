import React from 'react'
import styled from 'styled-components'

const MIN_WIDTH = '768px'
const MIN_WIDTH_MD = '1280px'

const Wrapper = styled.section`
  background-color: ${(props) => props.backgroundColor};
  padding: 50px 25px;
  box-sizing: border-box;

  & > div {
    width: 100%;
    margin: 0 auto;
    max-width: ${MIN_WIDTH_MD};
  }

  @media (min-width: ${MIN_WIDTH_MD}) {
    padding-top: 150px;
    padding-bottom: 150px;
  }
`

function Section({ id, children, backgroundColor }) {
  return (
    <Wrapper id={id} backgroundColor={backgroundColor}>
      <div>{children}</div>
    </Wrapper>
  )
}

export default Section
