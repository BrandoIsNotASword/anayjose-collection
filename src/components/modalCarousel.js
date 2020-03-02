import React from 'react'
import uuid from 'uuid'
import styled from 'styled-components'

import { FontIcon } from 'office-ui-fabric-react/lib/Icon'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const Wrapper = styled.div`
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  position: fixed;
  background-color: rgba(255, 255, 255, 0.85);
  width: 100%;
  height: 100%;
  padding: 5%;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Slide = styled.div`
  height: 500px;
  width: auto;
  background: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
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
  return (
    <Wrapper isOpen={isOpen}>
      <Carousel selectedItem={selectedImage} showThumbs={false} showStatus={false}>
        {gallery.map((image) => (
          <Slide key={uuid.v4()} src={image} />
        ))}
      </Carousel>
      <CloseModal onClick={() => onCloseModal()}>
        <FontIcon iconName="ChromeClose" />
      </CloseModal>
    </Wrapper>
  )
}

export default GalleryCarousel
