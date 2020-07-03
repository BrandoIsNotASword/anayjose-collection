import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { v4 } from 'uuid'

import Button from '../components/button'

const Wrapper = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }
`

const Img = styled.div`
  background: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 50%;
  position: relative;
`

const Name = styled.p`
  display: block;
  position: absolute;
  bottom: 0;
  padding: 15px;
  box-sizing: border-box;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(255, 255, 255, 0) 100%);
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
`

const Content = styled.div`
  padding: 25px;
  box-sizing: border-box;
  flex: 1;

  & > p:not(:last-child) {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }
`

const P = styled.p`
  color: white;
  text-align: center;
  font-size: 1.15rem;
`

function Plan({ backgroundColor, image, name, content, onClick }) {
  const intl = useIntl().formatMessage

  const renderConent = (content) => {
    return content.split(' / ').map((text) => <P key={v4()}>{text}</P>)
  }

  return (
    <Wrapper backgroundColor={backgroundColor} onClick={onClick}>
      <Img src={image}>
        <Name>{name}</Name>
      </Img>
      <Content>{renderConent(content)}</Content>
      <Button backgroundColor="rgba(0, 0, 0, 0.2)" borderRadius="0px">
        {intl({ id: 'plans.button' })}
      </Button>
    </Wrapper>
  )
}

export default Plan
