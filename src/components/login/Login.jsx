import React, { useState } from 'react'
import './Login.css'
import { Box, Divider, Typography, styled } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


const Back = styled(Box)`
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

const LoginCard = styled(Box)`
  margin-top: -6%; 
  width: 40%;
  height: 80%;
  z-index: 888;
  box-shadow: 0px 2px 10px 0px black;
  background-color: white;
  border-radius: 10px;
`

const LowerPart = styled(Box)`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 60%;
  left: 0%;
  height: 40%;
  background-color: #121c30;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`

const Line = styled(Divider)`
  background-color: #121c30;
  width: 105%;
  transform: rotate(-5deg);
  height: 20%;
  position: absolute;
  top: 50%;
  left: 0%;
`

const SubText = styled(Typography)`
  font-size: 22px;
  font-weight: 500;
  line-height: 24px;
  font-family: "Bebes Neue";
  font-style: normal;
`

const SmallText = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  font-family: "Bebes Neue";
  font-style: normal;
  padding: 10px;
`

const Forgotpassword = styled(Typography)`
  font-size: 22px;
  color: #0170dc;
  padding: 10px;
`

const Terms = styled(Typography)`
  font-size: 13px;
  color: #bbb3bc;
  padding: 10px;

  & a{
    color: #bbb3bc;
  }
  & a:hover{
    color: #0170dc;
  }
`


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = (e) => {
    e.preventDefault()
    if (email === "") {
      toast.error("Enter your email!!")
    } else if (!email.includes("@")) {
      toast.error("Enter valid email !")
    } else if (password === '') {
      toast.error("Enter your password!!")
    } else if (password.length < 6) {
      toast.error("Enter correct password!!")
    } else {
      toast.success("Login successful!!!")
      navigate('/profile')
    }
  }

  return (
    <div>
      <Back>

        <LoginCard>
          <div className="imageLogo">
            <img src="images\VENQ_BOLD_small.png" alt="logo" />
          </div>

          <form className='form'>

            <div className="email">
              <label htmlFor="email">Email Address</label>
              <input type="email" name='email' placeholder='E.g: yourname@company.com' autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" name='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type='submit' onClick={handleLogin}>Login</button>
          </form>

          <div className="terms">
            <Forgotpassword>Forgot Password</Forgotpassword>
            <Terms>By clicking Log In you agree to VenQ's <Link to="/welcome">Terms & Conditions</Link>  and <Link to="/welcome">Key Risks</Link> </Terms>
          </div>

        </LoginCard>

        <div className="container">
          <Line />
          <LowerPart>
            <SubText>
              Don't have an account ? <Link to='/signup' className='subtext'>Join us today</Link>
            </SubText>
            <SmallText>
              Regulated by the DFSA
            </SmallText>
          </LowerPart>
        </div>

      </Back>
      <ToastContainer />
    </div>
  )
}

export default Login