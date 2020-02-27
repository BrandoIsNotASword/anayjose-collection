import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TextField } from 'office-ui-fabric-react/lib/TextField'

const Wrapper = styled.span`
  .ms-TextField-field {
    padding-right: 30px;
  }

  .ms-TextField-fieldGroup {
    height: 40px;
    border-radius: 3px;
    border-color: darkgray;

    i {
      bottom: 10px;
    }
  }

  .ms-TextField-errorMessage span {
    font-size: 12px;
  }
`

function StyledInput(props) {
  return (
    <Wrapper className={props.className}>
      <TextField {...props} />
    </Wrapper>
  )
}

StyledInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
}

StyledInput.defaultProps = {
  className: '',
  label: '',
}

export default StyledInput
