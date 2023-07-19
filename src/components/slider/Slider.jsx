import { Typography, styled } from '@mui/material'
import React from 'react'
import LeftSide from './LeftSide'
import './Slider.css'

const Heading = styled(Typography)`
  font-family: Bebas Neue;
  font-size: 64px;
  font-weight: 400;
  line-height: 77px;
  letter-spacing: 0.05em;
  text-align: center;
`

const SubHeading = styled(Typography)`
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
`

const Slider = () => {
  return (
    <>
      <div>
        <div className="text">
          <Heading>HOW TO INVEST ?</Heading>
          <SubHeading >It is one of the most important asset classes to own and to build long term</SubHeading>
        </div>

        <div className="main-container">
          <div className="left-side">
            <LeftSide />
          </div>

          <div className="right-side">
            <div className="imagecontainer">
              <img src="images/Inner_Phone.png" alt="message" id='sliderimage1' />
              <img src="images/Phone_Border.png" alt="message" id='sliderimage2' />
              <img src="images/Site.png" alt="message" id='sliderimage3' />
              <img src="images/Details.png" alt="message" id='sliderimage4' />
              <img src="images/search_box.png" alt="message" id='sliderimage5' />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Slider