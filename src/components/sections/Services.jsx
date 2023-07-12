import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import './Sections.css'

const MainContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F6F7F9;
  padding: 5%;
  position: relative;
  margin-bottom: 0%;
`
const ImageContainer = styled(Box)`
`
const TextContainer = styled(Box)`
`
const Heading = styled(Typography)`
  font-family: Bebas Neue;
  font-size: 60px;
  font-weight: 400;
  line-height: 77px;
  letter-spacing: 0.05em;
  text-align: right;
`

const SubHeading = styled(Typography)`
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: right;

`

const Services = () => {
  return (
    <div>
      <MainContainer>
        <ImageContainer>
          <img src="images\Four_Boxes.png" alt="" />
        </ImageContainer>

        <TextContainer>
          <Heading>What you get?</Heading>
          <SubHeading>It is one of the most important asset classes to own and to build long term </SubHeading>
        </TextContainer>
        <div className='rotatedLine'></div>
      </MainContainer>

    </div>

  )
}

export default Services