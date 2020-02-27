import React from 'react'
import styled from 'styled-components'

import { DatePicker, DayOfWeek } from 'office-ui-fabric-react'

const DAY_PICKER_STRINGS = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',
  isRequiredErrorMessage: 'Field is required.',
  invalidInputErrorMessage: 'Invalid date format.',
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .ms-TextField-fieldGroup {
    height: 40px;
    border-radius: 3px;
    border-color: darkgray;
    display: flex;
    align-items: center;
  }

  .ms-TextField-field {
    height: 100%;
  }

  .ms-TextField-description {
    font-size: 12px;
    height: 17px;
    margin-top: 5px;
  }

  .ms-TextField-errorMessage span {
    font-size: 12px;
  }
`

const StyledInput = styled.input`
  height: 40px;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  margin-top: ${(props) => (props.hasLabel ? '26px' : '0')};
  pointer-events: none;
  opacity: 0;
`

function Datepicker(props) {
  const { className, description, onChange, ...restProps } = props

  return (
    <Wrapper className={className}>
      <StyledInput
        required={restProps.isRequired}
        type="text"
        value={restProps.value}
        hasLabel={restProps.label}
        onChange={() => {}}
      />
      <DatePicker
        minDate={new Date()}
        showGoToToday={false}
        firstDayOfWeek={DayOfWeek.Monday}
        strings={DAY_PICKER_STRINGS}
        ariaLabel={restProps.label}
        showMonthPickerAsOverlay
        onSelectDate={onChange}
        {...restProps}
      />
      {description && <span className="ms-TextField-description">{description}</span>}
    </Wrapper>
  )
}

export default Datepicker
