import { Box, Button, ImageList, ImageListItem, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';



const arrow = ">"
const PropertyLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 10px;
  font-weight: 600;
  &:hover{
    text-decoration: underline;
  }
`
const Bookmark = styled(Button)`
  text-transform: none;
  color: black;
  border: 2px solid black;
  background-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover{
    color: white;
    background-color: #0170dc;
    border: 2px solid #0170dc;
  }
  &:hover path{
    color: white;
  }
`
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  }
];
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Photos = ({ clicked, setClicked }) => {

  return (
    <div>
      <Box style={{ padding: '30px' }}>

        <Box >

          <Box style={{ display: 'flex' }}>

            <PropertyLink to='/dashboard/properties'>
              <Typography style={{ fontFamily: 'Inter', fontSize: '15px', fontWeight: '600' }}>Properties</Typography>
            </PropertyLink>


            {arrow}
            <PropertyLink to='/dashboard/properties/view/101'>
              <Typography style={{ fontFamily: 'Inter', fontSize: '15px', fontWeight: '600', paddingLeft: '10px' }}>1 Bed in Blakely Tower, Dubai Marina</Typography>
            </PropertyLink>


            {arrow}
            <Typography style={{ color: '#a3abba', marginLeft: '10px', fontFamily: 'Inter', fontSize: '15px' }}>Photos</Typography>
          </Box>

        </Box>

        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>

          <Typography style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '30px' }}>8 photos</Typography>

          <Box>
            <Bookmark onClick={() => setClicked(!clicked)}>
              {clicked === true ?
                <BookmarkIcon style={{ color: '#0170dc' }} />
                :
                <BookmarkBorderIcon />
              }
              <Typography style={{ paddingLeft: '10px', fontFamily: 'Inter', fontSize: '18px' }}>Bookmark</Typography>
            </Bookmark>
          </Box>
        </Box>

        <ImageList
          sx={{ width: '100%', height: '100%' }}
          variant="quilted"
          cols={4}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: '10px' }}
              />
            </ImageListItem>
          ))}
        </ImageList>

      </Box>
    </div>
  )
}

export default Photos