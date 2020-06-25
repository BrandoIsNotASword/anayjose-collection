import React from 'react'
import styled from 'styled-components'

import { PrimaryButton } from 'office-ui-fabric-react'

const Wrapper = styled.div`
  width: 100%;

  .ms-Button--primary {
    height: 40px;
    width: 100%;
    border-radius: ${(props) => props.borderRadius};
    background-color: ${(props) => props.backgroundColor};
    border-color: transparent;
  }

  .ms-Button.is-disabled {
    background-color: rgb(243, 242, 241);
    border-color: rgb(243, 242, 241);
  }
`

function StyledButton({ children, backgroundColor, borderRadius, ...restProps }) {
  return (
    <Wrapper backgroundColor={backgroundColor} borderRadius={borderRadius}>
      <PrimaryButton {...restProps}>{children}</PrimaryButton>
    </Wrapper>
  )
}

StyledButton.defaultProps = {
  backgroundColor: '#3a5544',
  borderRadius: '100px',
}

export default StyledButton
