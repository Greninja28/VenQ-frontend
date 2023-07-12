import React, { useState } from 'react';
import Properties from './property/Properties';
import Portfolio from './contents/Portfolio';
import './Dashboard.css'
import Profile from './account/Profile';
import Bookmarks from './account/Bookmarks';
import Rewards from './rewards/Rewards';
import Tier from './rewards/Tier';
import Referrals from './rewards/Referrals';
import Cart from './cart/Cart';
import Wallet from './contents/Wallet';

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import InsightsIcon from '@mui/icons-material/Insights';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Box, Divider, List, Toolbar, Typography } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import PropertyItem from './property/PropertyItem';
import Photos from './property/Photos';

const drawerWidth = 280;
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const Options = styled(Link)`
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  border-radius: 10px;
  margin-bottom: 10px; 
  text-decoration: none;
  background-color: ${({ selected }) => (selected ? '#cbe5ffb9' : 'transparent')};
  color: ${({ selected }) => (selected ? 'black' : 'rgb(112,111,111)')};
  &:hover {
    background-color: ${({ selected }) => (selected ? '#cbe5ffb9' : '#cbe5ffb9')};
    color: black;
  }
`
const UpperItems = styled(Box)`
  padding: 5px 10px 10px 10px;
`
const LowerItems = styled(Box)`
  padding: 5px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 38vh;
`
const PropertyIcon = styled(HomeOutlinedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#0170dc' : '')};
`
const WalletIcon = styled(AccountBalanceWalletOutlinedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#0170dc' : '')};
`
const PortfolioIcon = styled(InsightsIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#0170dc' : '')};
`
const RewardIcon = styled(StarOutlineRoundedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#0170dc' : '')};
`
const CartIcon = styled(ShoppingCartOutlinedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#0170dc' : '')};
`
const HelpIcon = styled(ChatBubbleOutlineRoundedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#0170dc' : '')};
`
const UserIcon = styled(PersonOutlineOutlinedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#0170dc' : '')};
`
const BookmarkIcon = styled(BookmarkBorderOutlinedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#0170dc' : '')};
`
const LogoutIcon = styled(LogoutOutlinedIcon)`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#0170dc' : '')};
`
const Heading = styled(Typography)`
  text-decoration: none;
  font-family: Inter;
  font-size: 18px;
`
const SubHeading = styled(Typography)`
font-family: Inter;
font-size: 18px;
`
const NestedListContainer = styled(Box)`
  position: absolute;
  left: ${drawerWidth}px;
  top: 60vh;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 250px;
  box-shadow: 0 1px 2px 1px black;
  z-index: 9;
`
const NestedList = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
`
const NestedLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  padding: 4px 10px;
  display: flex;
  color: black;
  &:hover{
    background-color: lightgrey;
  }
`
const Logout = styled(Link)`
  width: 100%;
  text-decoration: none;
  padding: 4px 10px;
  display: flex;
  color: red;
  &:hover{
    background-color: red;
    color: white;
  }
`

const Dashboard = () => {
  const [open] = useState(true);
  const [step, setStep] = useState(1)
  const [clicked, setClicked] = useState(false)
  const [nestedListVisible, setNestedListVisible] = useState(false);
  const navigate = useNavigate()

  const handleAccountClick = () => {
    setNestedListVisible(!nestedListVisible);
  };

  const handleStepChange = (newStep) => {
    setStep(newStep)
    setNestedListVisible(false)
  }

  const handleBuyProperties = () => {
    setStep(1); // Set the step to 1 when "Buy Properties" is clicked
    setNestedListVisible(false);
    navigate('/dashboard/properties'); // Navigate to the Properties component
  };

  const handleBalance = () => {
    setStep(2); // Set the step to 1 when "Buy Properties" is clicked
    setNestedListVisible(false);
    navigate('/dashboard/wallet'); // Navigate to the Properties component
  };

  const handleCart = () => {
    setStep(5); // Set the step to 1 when "Buy Properties" is clicked
    setNestedListVisible(false);
    navigate('/dashboard/cart'); // Navigate to the Properties component
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            px: [1],
          }}
        >
          <Link to="/">
            <img src="/images/VENQ_BOLD_small.png" alt="logo" style={{ padding: '10px', cursor: 'pointer' }} />
          </Link>
        </Toolbar>

        <Divider />

        <List component="nav">

          <UpperItems>

            <Options to="/dashboard/properties" selected={step === 1} onClick={() => handleStepChange(1)}>
              <PropertyIcon selected={step === 1} />
              <Heading selected={step === 1}>Properties</Heading>
            </Options>

            <Options to="/dashboard/wallet" selected={step === 2} onClick={() => handleStepChange(2)}>
              <WalletIcon selected={step === 2} />
              <Heading selected={step === 2}> Wallet</Heading>
            </Options>

            <Options to="/dashboard/portfolio" selected={step === 3} onClick={() => handleStepChange(3)}>
              <PortfolioIcon selected={step === 3} />
              <Heading selected={step === 3}>Portfolio</Heading>
            </Options>

            <Options to="/dashboard/rewards" selected={step === 4} onClick={() => handleStepChange(4)}>
              <RewardIcon selected={step === 4} />
              <Heading selected={step === 4}>Rewards</Heading>
            </Options>

            <Options to="/dashboard/cart" style={{ marginBottom: '0px' }} selected={step === 5} onClick={() => handleStepChange(5)}>
              <CartIcon selected={step === 5} />
              <Heading selected={step === 5}>Cart</Heading>
            </Options>

          </UpperItems>

          <Divider sx={{ my: 1 }} />

          <LowerItems>

            <Options onClick={handleAccountClick} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="account-container">
                <div className="circle">SA</div>
                <Heading style={{ fontSize: '16px' }}>Account</Heading>
              </div>
              <ChevronRightIcon />
            </Options>



            <Options style={{ marginBottom: '0px' }}>
              <HelpIcon />
              <Heading >Help and Support</Heading>
            </Options>

          </LowerItems>
        </List>

      </Drawer>
      {nestedListVisible && (
        <NestedListContainer>
          <NestedList>

            <NestedLink to="/dashboard/profile" selected={step === 6} onClick={() => handleStepChange(6)}>
              <UserIcon selected={step === 6} />
              <SubHeading selected={step === 6}>My Profile</SubHeading>
            </NestedLink>

            <NestedLink to="/dashboard/bookmarks" selected={step === 7} onClick={() => handleStepChange(7)}>
              <BookmarkIcon selected={step === 7} />
              <SubHeading selected={step === 7}>Bookmarks</SubHeading>
            </NestedLink>

            <Divider sx={{ my: 1 }} style={{ height: '2px', width: '100%' }} />

            <Logout>
              <LogoutIcon />
              <SubHeading>Logout</SubHeading>
            </Logout>

          </NestedList>
        </NestedListContainer>
      )}

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
        onClick={() => { setNestedListVisible(false) }}
      >

        <Routes>
          <Route path="properties" element={<Properties />} />
          <Route path="properties/view/101" element={<PropertyItem handleCart={handleCart} clicked={clicked} setClicked={setClicked} />} />
          <Route path="properties/view/101/photos" element={<Photos clicked={clicked} setClicked={setClicked} />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="portfolio" element={<Portfolio handleBuyProperties={handleBuyProperties} />} />
          <Route path="rewards" element={<Rewards handleBalance={handleBalance} />} />
          <Route path="cart" element={<Cart handleBuyProperties={handleBuyProperties} />} />
          <Route path="profile" element={<Profile />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="rewards/tier" element={<Tier />} />
          <Route path="rewards/referrals" element={<Referrals />} />
        </Routes>

      </Box>


    </Box>
  );
}

export default Dashboard