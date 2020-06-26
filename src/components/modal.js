import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  z-index: 11;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Modal({ className, children, isOpen }) {
  if (!isOpen) return null
  return <Wrapper className={className}>{children}</Wrapper>
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}

Modal.defaultProps = {
  isOpen: false,
  className: '',
  children: null,
}

export default Modal
