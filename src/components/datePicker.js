import React from 'react'
import styled from 'styled-components'

import { DatePicker } from 'antd'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

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

  .ant-input-group-description {
    font-size: 0.75em;
    color: rgba(0, 0, 0, 0.5);
    text-align: right;
    align-self: flex-end;
    margin-top: 2px;
  }

  .ant-input {
    border-radius: 3px !important;
  }
`

function Datepicker({ className, label, description }) {
  return (
    <Wrapper className={className}>
      <span className="ant-input-group-addon">{label}</span>
      <DatePicker size="large" label="Second date" />
      <span className="ant-input-group-addon ant-input-group-description">{description}</span>
    </Wrapper>
  )
}

export default Datepicker
