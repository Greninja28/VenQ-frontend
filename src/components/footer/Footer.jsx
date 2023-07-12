import React from 'react'
import './Footer.css'
import { Box, Grid, Typography, styled } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MainContainer = styled(Box)`
  // border: 2px solid black;
  background-color: #F6F7F9;
  display: flex;
  height: 100vh;
`

const LeftContainer = styled(Box)`
  // border: 2px solid red;
  padding: 9%;
  display: flex;
  flex-direction: column;
`

const RightContainer = styled(Box)`
  // border: 2px solid green;
  color: black;
  padding: 9% 40px;
  
`

const Investors = styled(Box)`
  // border: 2px solid yellow;
  color: black;
`

const Startup = styled(Box)`
  // border: 2px solid orange;
  color: black;
`

const Company = styled(Box)`
  // border: 2px solid red;
  color: black;
`

const GridContainer = styled(Grid)`
  // border: 2px solid black;
  justify-content: end;
`

const Rights = styled(Typography)`
  font-family: 'Saira';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.05em;
  padding: 10px;
  
`

const Heading = styled(Typography)`
  font-family: 'Saira Condensed';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  display: flex;
  text-align: center;
  color: #5E5757;
  padding-bottom: 20px;
`

const SubHeading = styled(Typography)`
  font-family: 'Saira';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 26px;
  text-align: left;
  letter-spacing: 0.05em;
  color: #000000;
  padding-bottom: 10px;
`

const Extra = styled(Typography)`
  font-family: 'Saira';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 26px;
  text-align: left;
  letter-spacing: 0.05em;
  color: #000000;
  padding-top: 30%;
`

const Footer = () => {
  return (
    <div>
      <MainContainer>

        <LeftContainer>
          <img src="images\VENQ_BOLD_Big.png" alt="logo" className='footerLogo' />
          <div className="socialIcons">
            <InstagramIcon />
            <LinkedInIcon />
            <CallIcon />
            <EmailIcon />
          </div>
          <Rights>2022 All Rights Reserved.</Rights>
        </LeftContainer>

        <RightContainer sx={{ flexGrow: 1 }}>
          <GridContainer container spacing={3}>

            <Grid item xs>
              <Investors>
                <Heading>FOR INVESTORS</Heading>
                <SubHeading>Why Invest?</SubHeading>
                <SubHeading>How It Works?</SubHeading>
                <SubHeading>Risks Involved</SubHeading>
              </Investors>
            </Grid>

            <Grid item xs>
              <Startup>
                <Heading>FOR STARTUPS</Heading>
                <SubHeading>Why Raise?</SubHeading>
                <SubHeading>Learn</SubHeading>
                <SubHeading>Instruments</SubHeading>
              </Startup>
            </Grid>

            <Grid item xs>
              <Company>
                <Heading>COMPANY</Heading>
                <SubHeading>About</SubHeading>
                <SubHeading>Blog</SubHeading>
                <SubHeading>Contact Us</SubHeading>
                <Extra>We’re Hiring</Extra>
              </Company>
            </Grid>

          </GridContainer>
        </RightContainer>

      </MainContainer>
    </div>
  )
}

export default Footer