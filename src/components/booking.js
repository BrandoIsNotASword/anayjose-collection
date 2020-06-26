import React, { useEffect } from 'react'
import { IntlContextConsumer } from 'gatsby-plugin-intl'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Modal from './modal'

const StyledModal = styled(Modal)`
  z-index: 9999999999 !important;
`

const WrapperIframe = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1240px;
  position: relative;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

function Booking({ isOpen, checkIn, checkOut, promotion, onCloseModal }) {
  useEffect(() => {
    window.addEventListener('message', onMessage, false)
    return () => window.removeEventListener('message', onMessage, false)
  })

  const onMessage = (e) => {
    if (e.data.func === 'zbeCloseBooking') onCloseModal()
  }

  return (
    <StyledModal isOpen={isOpen}>
      <WrapperIframe>
        <IntlContextConsumer>
          {({ language: currentLocale }) => (
            <Iframe
              src={`https://rbe.zaviaerp.com/${promotion}?hotel=232&zbe_arrival=${checkIn}&zbe_departure=${checkOut}&lng=${currentLocale}`}
            />
          )}
        </IntlContextConsumer>
      </WrapperIframe>
    </StyledModal>
  )
}

Booking.propTypes = {
  checkIn: PropTypes.string.isRequired,
  checkOut: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onCloseModal: PropTypes.func,
}

Booking.defaultProps = {
  isOpen: false,
  promotion: '',
  onCloseModal: () => {},
}

export default Booking
