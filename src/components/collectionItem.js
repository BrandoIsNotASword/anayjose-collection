import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  padding-bottom: 100%;
  position: relative;
`

const Content = styled.div`
  color: white;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 1px;
  line-height: initial;
  flex-direction: column;

  span {
    opacity: 0.65;
    margin-top: 10px;
  }
`

function CollectionItem({ background, content, description }) {
  return (
    <Wrapper background={background}>
      <Content>
        {content}
        {description && <span>{description}</span>}
      </Content>
    </Wrapper>
  )
}

export default CollectionItem
