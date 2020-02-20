import React from 'react'
import styled from 'styled-components'

import { Button } from 'antd'

const Wrapper = styled.div`
  width: 100%;

  .ant-btn {
    background-color: #3a5544;
    border-color: #3a5544;
    font-weight: 500;
  }
`

function StyledButton({ children }) {
  return (
    <Wrapper>
      <Button type="primary" size="large" shape="round" block>
        {children}
      </Button>
    </Wrapper>
  )
}

export default StyledButton
