import './App.css';
import Login from './components/login/Login';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './components/signup/Signup';
import Verification from './components/signup/Verification';
import Dashboard from './components/dashboard/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import Properties from './components/dashboard/property/Properties';
import Portfolio from './components/dashboard/contents/Portfolio';
import Rewards from './components/dashboard/rewards/Rewards';
import Cart from './components/dashboard/cart/Cart';
import Profile from './components/dashboard/account/Profile';
import Referrals from './components/dashboard/rewards/Referrals';
import Tier from './components/dashboard/rewards/Tier';
import Wallet from './components/dashboard/contents/Wallet';
import Bookmarks from './components/dashboard/account/Bookmarks';
import PropertyItem from './components/dashboard/property/PropertyItem';
import Photos from './components/dashboard/property/Photos';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='verify' element={<Verification />} />

        <Route path="dashboard/*" element={<Dashboard />}>
          <Route path="properties" element={<Properties />} />
          <Route path="properties/view/101" element={<PropertyItem />} />
          <Route path="properties/view/101/photos" element={<Photos />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="rewards/tier" element={<Tier />} />
          <Route path="rewards/referrals" element={<Referrals />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
