import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmail } from '../../redux/actions/user';
import { Typography } from '@mui/material';


const Verification = ({ step }) => {
  const [otp, setOtp] = useState('')
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { message, error } = useSelector(state => state.auth)
  const token = localStorage.getItem('details');
  const decodedToken = jwtDecode(token);
  const email = decodedToken.UserInfo.email;

  const countdown = () => {
    if (seconds === 0) {
      if (minutes === 0) {
        return;
      } else {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    } else {
      setSeconds(seconds - 1);
    }
  };

  const handleCode = (e) => {
    e.preventDefault()
    if (otp === '') {
      toast.error('Enter the OTP!!!');
    } else if (!/[^a-zA-Z]/.test(otp)) {
      toast.error('Enter valid OTP!!');
    } else if (otp.length < 6) {
      toast.error('OTP length is 6 digits!!');
    } else {
      if (token) {
        dispatch(verifyEmail(email, otp))
      } else {
        toast.error('Failed to access the email address');
      }
    }
  };

  const formattedTime = () => {
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    const secondsStr = seconds < 10 ? `0${seconds}` : seconds;
    return `OTP will expire in ${minutesStr}:${secondsStr}`;
  };

  useEffect(() => {
    const cleanupToast = () => {
      toast.dismiss(); // Clear all toasts when component unmounts
    };

    if (error) {
      toast.error(error);
      setOtp('')
      setTimeout(() => {
        navigate('/verify')
      }, 5000)
      return cleanupToast; // Cleanup function
    } else if (message) {
      toast.success("User registered successfully!!");
      setOtp('')
      setTimeout(() => {
        navigate('/dashboard/properties');
      }, 5000)
      return cleanupToast; // Cleanup function
    }

  }, [error, message, navigate]);

  useEffect(() => {
    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  });




  return (
    <div>
      <div className="verification-container">

        <div className="otp-container">

          <div className="items-container">

            <Typography variant='h4'>VERIFY EMAIL ADDRESS</Typography>
            <Typography>Please Enter the one-time-password(OTP) sent to {email}</Typography>
            <Typography>{formattedTime()}</Typography>

            <form onSubmit={handleCode}>

              <div className="formItems">
                <input type="text" placeholder='Enter the code' autoComplete='off' name='code' value={otp} onChange={(e) => setOtp(e.target.value)} />
              </div>

              <button type='submit'>Verify</button>

            </form>

            <div className='progressBar'>
              <progress value={step} max={2} />
              <Typography variant='h6'>Step <p>{step}</p> of <p>2</p></Typography>
            </div>

          </div>
        </div>

        <div className="verify-image">
          <img src="images/VENQ_BOLD_Big.png" alt="logo" />
          <div className="text">
            <Typography variant='h2'>Say hello</Typography>
            <Typography variant='h2'>to passive income</Typography>
          </div>
        </div>

        <ToastContainer />

      </div>

    </div>
  )
}

export default Verification