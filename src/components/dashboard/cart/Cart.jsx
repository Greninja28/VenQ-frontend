import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartItem from './CartItem';

const AddMoreLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid lightgrey;
  padding: 10px;
  border-radius: 10px;
  width: 13%;
  text-decoration: none;
  &:hover{
    border: 2px solid #0170dc;
    background-color: #0170dc;
    color: white;
  }
`
const EmptyCart = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
`
const PropertyButton = styled(Button)`
  color: white;
  background-color: #0170dc;
  text-transform: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 20px;
  margin: 10px;
  &:hover{
    background-color: #0170dc;
  }
`
const Items = styled(Box)`
  margin: 20px 0; 
`

const cartItems = ["hello"]

const Cart = ({ handleBuyProperties }) => {
  return (
    <div>
      <Box style={{ padding: '30px' }}>

        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <Typography variant='h4' style={{ fontFamily: 'Inter', padding: '0 10px 10px 0px', fontWeight: 600 }}>Cart {cartItems?.length === 0 ? '' : `(${cartItems.length})`}</Typography>

          {cartItems.length === 0 ?
            <Box></Box>
            :
            <AddMoreLink to='/dashboard/properties' onClick={handleBuyProperties}>
              <AddIcon />
              <Typography style={{ fontFamily: 'Inter', fontWeight: 600 }}>Add more</Typography>
            </AddMoreLink>
          }

        </Box>

        {
          cartItems?.length === 0 ?

            <EmptyCart>
              <Box style={{ border: '4px solid #cbe5ffb9', padding: '20px', borderRadius: '50%', margin: '20px' }}>
                <ShoppingCartOutlinedIcon style={{ fontSize: '48px', color: '#0170dc' }} />
              </Box>
              <Typography variant='h4' style={{ fontWeight: '600', fontFamily: 'Inter', margin: '0 0 10px 0' }}>Your cart is empty</Typography>
              <Typography style={{ fontFamily: 'Inter', fontSize: '20px', margin: '10px' }}>Looks like you haven't added any properties in your cart</Typography>
              <PropertyButton onClick={handleBuyProperties}>View properties</PropertyButton>
            </EmptyCart>

            :

            <Items>
              <CartItem />
            </Items>

        }


      </Box>
    </div>
  )
}

export default Cart