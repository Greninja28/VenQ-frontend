import { Box, Button, Divider, Typography, styled } from '@mui/material'
import React from 'react'
import './Sections.css'

const MainContainer = styled(Box)`
  display: flex;
  margin-top: 10%;
  height: 70vh;
`

const TextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  padding: 4%;
  flex: 5;
`

const FaqSection = styled(Box)`
  padding: 20px;
  flex: 6;
`

const Question = styled(Box)`
  position: relative;
  height: 40vh;
  background-color: #F6F7F9;
  margin-top: 10%;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const Heading = styled(Typography)`
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 77px;
  letter-spacing: 0.05em;
`

const SimpleQuestion = styled(Typography)`
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 77px;
  letter-spacing: 0.05em;
`

const SubHeading = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
`

const Invest = styled(Button)`
  border: 1px solid #30475E;
  border-radius: 8px;
  color: black;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  padding: 10px 20px;
  width: 20%;
  margin-right: 5%;
  :hover{
    background-color: transparent;
    color: black;
  }
`

const Sell = styled(Button)`
  background: #0170DC;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  padding: 10px 20px;
  width: 20%;
  color: #FFFFFF;
  :hover{
    background-color: #0170DC;
    color: white;
  }
`

const Faq = () => {
  return (
    <div>
      <MainContainer>

        <TextContainer>
          <Heading>Still have Questions?</Heading>
          <SubHeading>We have the answers.</SubHeading>
        </TextContainer>

        <FaqSection>
          <img src="images\Faq.png" alt="Questions" className='questions' />
          {/* add manually the questions after some time */}
        </FaqSection>

      </MainContainer>

      <Question>
        <div className="rightRotate"></div>
        <SimpleQuestion>So, What are you waiting for?</SimpleQuestion>
        <div className="buttons">
          <Invest>Invest</Invest>
          <Sell>Sell</Sell>
        </div>
      </Question>
      <Divider className='line' />
    </div>
  )
}

export default Faq