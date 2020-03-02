import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import { initializeIcons } from '@uifabric/icons'

import Header from './header'
import ModalCarousel from './modalCarousel'
import 'normalize.css'

import bg from '../images/bg-wedding1.jpg'
import gallery1 from '../images/1gallery.jpg'
import gallery2 from '../images/2gallery.jpg'
import gallery3 from '../images/3gallery.jpg'
import gallery4 from '../images/4gallery.jpg'
import gallery5 from '../images/5gallery.jpg'
import gallery6 from '../images/6gallery.jpg'

initializeIcons()

const MIN_WIDTH = '768px'
const MIN_WIDTH_MD = '1024px'

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 14px;
    font-family: futura-pt, sans-serif;
    
    @media(min-width: ${MIN_WIDTH}) {
      font-size: 16px;
    }
  }

  .ms-DatePicker-day-button span {
    font-size: 14px;
  }

  .ms-DatePicker-day {
    border: 1px solid whitesmoke;
  }

  .ms-DatePicker-day--today {
    background-color: transparent;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url(${bg});
  background-size: 150%;
  background-position: center top;
  background-repeat: no-repeat;

  @media (min-width: ${MIN_WIDTH}) {
    background-size: cover;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: 60px 25px 25px 25px;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%);

  @media (min-width: ${MIN_WIDTH}) {
    padding: 15% 15% 32px 15%;
  }

  @media (min-width: ${MIN_WIDTH_MD}) {
    padding: 0;
    padding-bottom: 25px;
    width: 500px;
    margin-left: 80px;
    margin-top: 30px;
    background: transparent;
  }
`

const Gallery = styled.div`
  box-sizing: border-box;
  max-width: 1024px;
  margin: 32px auto;
`

const RowImages = styled.div`
  margin-bottom: 8px;
`

const Image = styled.div`
  padding-bottom: 33%;
  display: inline-block;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 33.33%;
  border-left: 5px solid white;
  border-right: 5px solid white;
  box-sizing: border-box;
  cursor: pointer;

  @media (min-width: ${MIN_WIDTH}) {
    width: ${(props) => (props.featured ? '50%' : '25%')};
  }

  &:hover {
    opacity: 0.85;
  }
`

const Layout = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const onOpenModal = (selectedImage) => {
    setOpenModal(true)
    setSelectedImage(selectedImage)
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Main>{children}</Main>
      </Wrapper>
      <Gallery>
        <RowImages>
          <Image featured background={gallery3} onClick={() => onOpenModal(2)} />
          <Image background={gallery2} onClick={() => onOpenModal(1)} />
          <Image background={gallery1} onClick={() => onOpenModal(0)} />
        </RowImages>
        <RowImages>
          <Image background={gallery6} onClick={() => onOpenModal(5)} />
          <Image background={gallery5} onClick={() => onOpenModal(4)} />
          <Image featured background={gallery4} onClick={() => onOpenModal(3)} />
        </RowImages>
      </Gallery>
      <ModalCarousel
        isOpen={openModal}
        selectedImage={selectedImage}
        gallery={[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]}
        onCloseModal={() => setOpenModal(false)}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
