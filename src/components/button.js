import React from 'react'
import styled from 'styled-components'

import { PrimaryButton } from 'office-ui-fabric-react'

const Wrapper = styled.div`
  width: 100%;

  .ms-Button--primary {
    height: 40px;
    width: 100%;
    border-radius: 100px;
    background-color: #3a5544;
    border-color: #3a5544;
  }

  .ms-Button.is-disabled {
    background-color: rgb(243, 242, 241);
    border-color: rgb(243, 242, 241);
  }
`

function StyledButton(props) {
  return (
    <Wrapper>
      <PrimaryButton {...props}>{props.children}</PrimaryButton>
    </Wrapper>
  )
}

export default StyledButton
