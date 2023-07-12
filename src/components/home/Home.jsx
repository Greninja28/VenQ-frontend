import { Button, Typography, styled } from '@mui/material'
import React from 'react'
import './Home.css'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Slider from '../slider/Slider'
import Teaching from '../sections/Teaching'
import Services from '../sections/Services'
import Faq from '../sections/Faq'

const Heading = styled(Typography)`
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 70px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 10px;
`

const SubHeading = styled(Typography)`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 30px;
  padding-right: 20%;
`

const MainButton = styled(Button)`
  border: 2px solid #0170dc;
  border-radius: 8px;
  background-color: #0170dc;
  color: white;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-transform: none;
  margin: 10px;
  padding: 13px 25px;
  cursor: pointer;
  margin-left: 0;

  :hover{
    background-color: #0170dc;
    color: white;
  }
`
const InvestButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-transform: none;
  margin: 10px;
  padding: 13px 25px;
  cursor: pointer;
  margin-left: 0;

  :hover{
    background-color: white;
    color: black;
  }
`
const SellButton = styled(Button)`
  border: 2px solid #0170dc;
  border-radius: 8px;
  background-color: #0170dc;
  color: white;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-transform: none;
  margin: 10px;
  padding: 13px 25px;
  cursor: pointer;
  margin-left: 0;

  :hover{
    background-color: #0170dc;
    color: white;
  }
`

const SubSection = styled(Typography)`
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: 0.05em;
`

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="main-section">
        <div className="text-container">
          <Heading>Join the revolution of the smart property investment.</Heading>
          <SubHeading>Build your portfolio of industry-leading Properties by investing only ₹10,000.
          </SubHeading>
          <MainButton>Get Started</MainButton>
        </div>

        <div className="image-container">
          <img src="images\venq.png" alt="mainImage" />
        </div>

      </div>

      <div className="sub-section">
        <div className="contents">
          <SubSection>Looking for opportunities in real estate?</SubSection>
          <div className="buttons">
            <InvestButton>Invest</InvestButton>
            <SellButton >Sell</SellButton>
          </div>
        </div>
      </div>
      <Slider />
      <Teaching />
      <Services />
      <Faq />
      <Footer />
    </>

  )
}

export default Home