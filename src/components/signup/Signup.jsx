import React, { useEffect, useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/actions/user';
import { Box, Typography, styled } from '@mui/material';
import Verification from './Verification';

const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
`

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { userDetails, error, userToken } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      toast.error('Enter your Name');
    } else if (email === '') {
      toast.error('Enter your Email');
    } else if (!email.includes('@')) {
      toast.error('Enter a valid Email');
    } else if (password === '') {
      toast.error('Enter your Password');
    } else if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
    } else {
      dispatch(signup(name, email, password));
    }
  };


  useEffect(() => {
    if (error) {
      toast.error('User already exists in the database');
      setName('');
      setEmail('');
      setPassword('');
      setTimeout(() => {
        navigate('/signup')
      }, 5000)
    } else if (userDetails) {
      toast.success('Verification code sent to the email entered!!!');
      localStorage.setItem('details', userToken);
      setTimeout(() => {
        setStep(2)
      }, 5000)
    }
  }, [error, userDetails, navigate, userToken]);

  return (
    <div>
      <div className="signup-container">

        {step === 1 &&
          <>
            <div className="signup-form">
              <div className="signup-form-container">
                <Typography variant='h4'>Join VENQ</Typography>

                <form onSubmit={handleSubmit}>
                  <FormBox>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder='Enter your name' autoComplete="off" value={name} name='name' onChange={(e) => setName(e.target.value)} />
                  </FormBox>

                  <FormBox>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter your email' autoComplete="off" value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
                  </FormBox>

                  <FormBox>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter your password' autoComplete="off" value={password} name='password' onChange={(e) => setPassword(e.target.value)} />
                  </FormBox>

                  <button type='submit'>Sign Up</button>

                </form>

                <Typography variant='h6'>
                  Already a member? <Link to='/login'>Sign In</Link>
                </Typography>

                <div className='progressBar'>
                  <progress value={step} max={2} />
                  <Typography variant='h6'>Step <p>{step}</p> of <p>2</p></Typography>
                </div>

              </div>
            </div>

            <div className="signup-image">
              <img src="images/VENQ_BOLD_Big.png" alt="logo" />
              <div className="text">
                <Typography variant='h2'>Say hello</Typography>
                <Typography variant='h2'>to passive income</Typography>
              </div>
            </div>
          </>
        }




        <ToastContainer />
        {step === 2 && <Verification step={step} />}
      </div>


    </div>
  );
};


export default Signup
