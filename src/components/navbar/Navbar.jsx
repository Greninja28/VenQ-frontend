import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const NavbarComponent = styled(AppBar)`
  color: black;
  background-color: white;
  box-shadow: none;
  padding: 15px;
`

const Container = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

const Text = styled(Typography)`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
`

const Navbar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavbarComponent position="static">
        <Container>
          <div className="imageContainer">
            <img src="images/VENQ_BOLD_small.png" alt="logo" />
          </div>
          <div className="LinkContainer">
            <Text>Invest</Text>
            <Text>Sell Property</Text>
            <Text>Learn</Text>
          </div>
          <div className="buttonContainer">
            <button className='loginButton'><Link to='/login'>Login</Link></button>
            <button className='SignupButton'><Link to='/signup'>Signup</Link></button>
          </div>
        </Container>
      </NavbarComponent>
    </Box>
  )
}

export default Navbar