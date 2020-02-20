import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Input } from 'antd'

const Wrapper = styled.span`
  .ant-input-wrapper {
    display: flex;
    flex-direction: column;
  }

  .ant-input-group-addon {
    background-color: transparent;
    border: 0;
    padding: 0;
    margin-bottom: 3px;
    width: fit-content;
  }

  .ant-input {
    border-radius: 3px !important;
  }
`

function StyledInput({ className, label, placeholder }) {
  return (
    <Wrapper className={className}>
      <Input size="large" addonBefore={label} placeholder={placeholder} />
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
