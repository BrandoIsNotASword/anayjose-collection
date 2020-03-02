import React, { useEffect } from 'react'
import uuid from 'uuid'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'

import { FontIcon } from 'office-ui-fabric-react/lib/Icon'

const Wrapper = styled.div`
  position: fixed;
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 15px 5%;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Slide = styled.div`
  height: 100vh;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`

const CloseModal = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`

function GalleryCarousel({ isOpen, selectedImage, gallery, onCloseModal }) {
  useEffect(() => {
    document.addEventListener('keydown', keyPressHandler)
    return () => {
      document.removeEventListener('keydown', keyPressHandler)
    }
  })

  if (!isOpen) return null

  const keyPressHandler = (e) => {
    if (e.keyCode === 27) onCloseModal()
  }

  return (
    <Wrapper>
      <Carousel enableKeyboardControls autoGenerateStyleTag={false} slideIndex={selectedImage}>
        {gallery.map((image) => (
          <Slide key={uuid.v4()}>
            <Image src={image} />
          </Slide>
        ))}
      </Carousel>
      <CloseModal onClick={() => onCloseModal()}>
        <FontIcon iconName="ChromeClose" />
      </CloseModal>
    </Wrapper>
  )
}

export default GalleryCarousel
