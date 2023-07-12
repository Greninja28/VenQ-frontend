import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';

const Property = styled(Card)`
  background-color: white;
  border-radius: 10px;
  &:hover{
   transform: translateY(-10px) 
  }
`
const Subheader = styled(Box)`
  display: flex;
  & div{
    border: 1px solid lightgray;
    padding: 4px 10px;
    margin-right: 10px; 
    border-radius: 6px;
  }
`
const PriceBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 10px 0;
  align-items: center;
`
const ReturnsBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background-color: #f6f7f9;
  font-family: 'Inter'; 
  color: grey;
  > div{
    display: flex;
    justify-content: space-between;
    padding: 5px;
    font-size: 15px;
  }
`
const Options = styled(Box)`
  margin: 20px 10px 40px 0px;
  background-color: white;
  padding: 0 5x;
  width: 50%;
  border-radius: 10px;
  display: flex;
`
const OptionName = styled(Button)`
  border: none;
  padding: 5px 20px;
  margin: 10px;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? '#0170dc !important' : 'white')};
  color: ${(props) => (props.active ? 'white !important' : 'black')};
  &:hover{
    background-color: #0170dc;
    color: white;
    border: none;
  }
  &:focus{
    background-color: #0170dc;
    color: white;
  }
`
const Category = styled(Typography)`
  position: absolute;
  width: 100%;
  text-align: center;
  background-color: #0170dc;
  color: white;
  z-index: 2;
  padding: 5px;
  font-family: 'Inter'
`
const Header = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Inter';
  margin: 10px 0;
`

const Properties = () => {
  const [activeButton, setActiveButton] = useState('available');
  const handleButtonClick = (value) => {
    setActiveButton(value);
  };


  return (
    <div>
      <Box style={{ padding: '30px' }}>
        <Typography variant='h4' style={{ fontFamily: 'Inter', padding: '0 10px 10px 0px', fontWeight: 600 }}>Properties</Typography>

        <Options>

          <OptionName onClick={() => handleButtonClick('available')} active={activeButton === 'available'}>
            Available
          </OptionName>

          <OptionName onClick={() => handleButtonClick('funded')} active={activeButton === 'funded'}>
            Funded
          </OptionName>

          <OptionName onClick={() => handleButtonClick('exited')} active={activeButton === 'exited'}>
            Exited
          </OptionName>
        </Options>

        {activeButton === 'available' &&
          <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

              <Grid item xs={2} sm={4} md={4}  >
                <Link to='/dashboard/properties/view/101' style={{ textDecoration: 'none ' }}>

                  <Property sx={{ maxWidth: 345 }}>

                    <CardActionArea>

                      <CardMedia>
                        <Category >New Listing</Category>
                        <Carousel showThumbs={false}>
                          <div>
                            <img src="/images/signup_page.jpg" alt="first" />
                          </div>
                          <div>
                            <img src="/images/signup_page.jpg" alt="second" />
                          </div>
                          <div>
                            <img src="/images/signup_page.jpg" alt="third" />
                          </div>
                        </Carousel>
                      </CardMedia>

                      <CardContent>

                        <Subheader>
                          <Box>India</Box>
                          <Box>Rented</Box>
                        </Subheader>

                        <Header gutterBottom variant="h5" component="div">
                          1 Bed in Blakely Tower, Dubai Marina
                        </Header>

                        <PriceBox>
                          <Box style={{ color: '#0170dc', fontSize: '18px', fontWeight: 600, fontFamily: 'Inter' }}>Rup 1,239,000</Box>
                          <Box>85% Funded</Box>
                        </PriceBox>
                        <progress style={{ width: '100%', margin: '5px 0 10px 0', height: '20px' }} max={1500000} value={1239000} />

                        <ReturnsBox>
                          <Box>
                            <Box>Annualised Return</Box>
                            <Box style={{ color: 'black', fontWeight: 'bold' }}>9.72%</Box>
                          </Box>

                          <Box>
                            <Box>Annual Appreciation</Box>
                            <Box style={{ color: 'black', fontWeight: 'bold' }}>9%</Box>
                          </Box>

                          <Box>
                            <Box>Projected gross yield</Box>
                            <Box style={{ color: 'black', fontWeight: 'bold' }}>5.7%</Box>
                          </Box>

                          <Box>
                            <Box>Projected net yield</Box>
                            <Box style={{ color: 'black', fontWeight: 'bold' }}>6.7%</Box>
                          </Box>
                        </ReturnsBox>

                      </CardContent>

                    </CardActionArea>

                  </Property>
                </Link>
              </Grid>

              <Grid item xs={2} sm={4} md={4}  >
                <Property sx={{ maxWidth: 345 }}>

                  <CardActionArea>

                    <CardMedia>
                      <Category >New Listing</Category>
                      <Carousel showThumbs={false}>
                        <div>
                          <img src="/images/signup_page.jpg" alt="first" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="second" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="third" />
                        </div>
                      </Carousel>
                    </CardMedia>

                    <CardContent>

                      <Subheader>
                        <Box>India</Box>
                        <Box>Rented</Box>
                      </Subheader>

                      <Header gutterBottom variant="h5" component="div">
                        1 Bed in Blakely Tower, Dubai Marina
                      </Header>

                      <PriceBox>
                        <Box style={{ color: '#0170dc', fontSize: '18px', fontWeight: 600, fontFamily: 'Inter' }}>Rup 1,239,000</Box>
                        <Box>85% Funded</Box>
                      </PriceBox>
                      <progress style={{ width: '100%', margin: '5px 0 10px 0', height: '20px' }} max={1500000} value={1239000} />

                      <ReturnsBox>
                        <Box>
                          <Box>Annualised Return</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>9.72%</Box>
                        </Box>

                        <Box>
                          <Box>Annual Appreciation</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>9%</Box>
                        </Box>

                        <Box>
                          <Box>Projected gross yield</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>5.7%</Box>
                        </Box>

                        <Box>
                          <Box>Projected net yield</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>6.7%</Box>
                        </Box>
                      </ReturnsBox>

                    </CardContent>

                  </CardActionArea>

                </Property>
              </Grid>

              <Grid item xs={2} sm={4} md={4}  >
                <Property sx={{ maxWidth: 345 }}>

                  <CardActionArea>

                    <CardMedia>
                      <Category >New Listing</Category>
                      <Carousel showThumbs={false}>
                        <div>
                          <img src="/images/signup_page.jpg" alt="first" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="second" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="third" />
                        </div>
                      </Carousel>
                    </CardMedia>

                    <CardContent>

                      <Subheader>
                        <Box>India</Box>
                        <Box>Rented</Box>
                      </Subheader>

                      <Header gutterBottom variant="h5" component="div">
                        1 Bed in Blakely Tower, Dubai Marina
                      </Header>

                      <PriceBox>
                        <Box style={{ color: '#0170dc', fontSize: '18px', fontWeight: 600, fontFamily: 'Inter' }}>Rup 1,239,000</Box>
                        <Box>85% Funded</Box>
                      </PriceBox>
                      <progress style={{ width: '100%', margin: '5px 0 10px 0', height: '20px' }} max={1500000} value={1239000} />

                      <ReturnsBox>
                        <Box>
                          <Box>Annualised Return</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>9.72%</Box>
                        </Box>

                        <Box>
                          <Box>Annual Appreciation</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>9%</Box>
                        </Box>

                        <Box>
                          <Box>Projected gross yield</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>5.7%</Box>
                        </Box>

                        <Box>
                          <Box>Projected net yield</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>6.7%</Box>
                        </Box>
                      </ReturnsBox>

                    </CardContent>

                  </CardActionArea>

                </Property>
              </Grid>

            </Grid>
          </Box>
        }

        {activeButton === 'funded' &&
          <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

              <Grid item xs={2} sm={4} md={4}  >
                <Property sx={{ maxWidth: 345 }}>

                  <CardActionArea>

                    <CardMedia>
                      <Category >Luxury Property</Category>
                      <Carousel showThumbs={false}>
                        <div>
                          <img src="/images/signup_page.jpg" alt="first" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="second" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="third" />
                        </div>
                      </Carousel>
                    </CardMedia>

                    <CardContent>

                      <Subheader>
                        <Box>India</Box>
                        <Box>Rented</Box>
                      </Subheader>

                      <Header gutterBottom variant="h5" component="div">
                        1 Bed in Blakely Tower, Dubai Marina
                      </Header>

                      <PriceBox>
                        <Box style={{ color: '#0170dc', fontSize: '18px', fontWeight: 600, fontFamily: 'Inter' }}>Rup 1,239,000</Box>
                        <Box>523 Investors</Box>
                      </PriceBox>

                      <ReturnsBox>
                        <Box>
                          <Box>Annualised Return</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>9.72%</Box>
                        </Box>

                        <Box>
                          <Box>Funded Date</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>23 May 2023</Box>
                        </Box>

                        <Box>
                          <Box>Current Valuation</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>Rup 1,745,000</Box>
                        </Box>

                      </ReturnsBox>

                    </CardContent>

                  </CardActionArea>

                </Property>
              </Grid>

              <Grid item xs={2} sm={4} md={4}  >
                <Property sx={{ maxWidth: 345 }}>

                  <CardActionArea>

                    <CardMedia>
                      <Category >Luxury Property</Category>
                      <Carousel showThumbs={false}>
                        <div>
                          <img src="/images/signup_page.jpg" alt="first" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="second" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="third" />
                        </div>
                      </Carousel>
                    </CardMedia>

                    <CardContent>

                      <Subheader>
                        <Box>India</Box>
                        <Box>Rented</Box>
                      </Subheader>

                      <Header gutterBottom variant="h5" component="div">
                        1 Bed in Blakely Tower, Dubai Marina
                      </Header>

                      <PriceBox>
                        <Box style={{ color: '#0170dc', fontSize: '18px', fontWeight: 600, fontFamily: 'Inter' }}>Rup 1,239,000</Box>
                        <Box>523 Investors</Box>
                      </PriceBox>

                      <ReturnsBox>
                        <Box>
                          <Box>Annualised Return</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>9.72%</Box>
                        </Box>

                        <Box>
                          <Box>Funded Date</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>23 May 2023</Box>
                        </Box>

                        <Box>
                          <Box>Current Valuation</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>Rup 1,745,000</Box>
                        </Box>

                      </ReturnsBox>

                    </CardContent>

                  </CardActionArea>

                </Property>
              </Grid>

              <Grid item xs={2} sm={4} md={4}  >
                <Property sx={{ maxWidth: 345 }}>

                  <CardActionArea>

                    <CardMedia>
                      <Category >Luxury Property</Category>
                      <Carousel showThumbs={false}>
                        <div>
                          <img src="/images/signup_page.jpg" alt="first" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="second" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="third" />
                        </div>
                      </Carousel>
                    </CardMedia>

                    <CardContent>

                      <Subheader>
                        <Box>India</Box>
                        <Box>Rented</Box>
                      </Subheader>

                      <Header gutterBottom variant="h5" component="div">
                        1 Bed in Blakely Tower, Dubai Marina
                      </Header>

                      <PriceBox>
                        <Box style={{ color: '#0170dc', fontSize: '18px', fontWeight: 600, fontFamily: 'Inter' }}>Rup 1,239,000</Box>
                        <Box>523 Investors</Box>
                      </PriceBox>

                      <ReturnsBox>
                        <Box>
                          <Box>Annualised Return</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>9.72%</Box>
                        </Box>

                        <Box>
                          <Box>Funded Date</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>23 May 2023</Box>
                        </Box>

                        <Box>
                          <Box>Current Valuation</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>Rup 1,745,000</Box>
                        </Box>

                      </ReturnsBox>

                    </CardContent>

                  </CardActionArea>

                </Property>
              </Grid>

              <Grid item xs={2} sm={4} md={4}  >
                <Property sx={{ maxWidth: 345 }}>

                  <CardActionArea>

                    <CardMedia>
                      <Category >Luxury Property</Category>
                      <Carousel showThumbs={false}>
                        <div>
                          <img src="/images/signup_page.jpg" alt="first" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="second" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="third" />
                        </div>
                      </Carousel>
                    </CardMedia>

                    <CardContent>

                      <Subheader>
                        <Box>India</Box>
                        <Box>Rented</Box>
                      </Subheader>

                      <Header gutterBottom variant="h5" component="div">
                        1 Bed in Blakely Tower, Dubai Marina
                      </Header>

                      <PriceBox>
                        <Box style={{ color: '#0170dc', fontSize: '18px', fontWeight: 600, fontFamily: 'Inter' }}>Rup 1,239,000</Box>
                        <Box>523 Investors</Box>
                      </PriceBox>

                      <ReturnsBox>
                        <Box>
                          <Box>Annualised Return</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>9.72%</Box>
                        </Box>

                        <Box>
                          <Box>Funded Date</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>23 May 2023</Box>
                        </Box>

                        <Box>
                          <Box>Current Valuation</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>Rup 1,745,000</Box>
                        </Box>

                      </ReturnsBox>

                    </CardContent>

                  </CardActionArea>

                </Property>
              </Grid>

              <Grid item xs={2} sm={4} md={4}  >
                <Property sx={{ maxWidth: 345 }}>

                  <CardActionArea>

                    <CardMedia>
                      <Category >Luxury Property</Category>
                      <Carousel showThumbs={false}>
                        <div>
                          <img src="/images/signup_page.jpg" alt="first" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="second" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="third" />
                        </div>
                      </Carousel>
                    </CardMedia>

                    <CardContent>

                      <Subheader>
                        <Box>India</Box>
                        <Box>Rented</Box>
                      </Subheader>

                      <Header gutterBottom variant="h5" component="div">
                        1 Bed in Blakely Tower, Dubai Marina
                      </Header>

                      <PriceBox>
                        <Box style={{ color: '#0170dc', fontSize: '18px', fontWeight: 600, fontFamily: 'Inter' }}>Rup 1,239,000</Box>
                        <Box>523 Investors</Box>
                      </PriceBox>

                      <ReturnsBox>
                        <Box>
                          <Box>Annualised Return</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>9.72%</Box>
                        </Box>

                        <Box>
                          <Box>Funded Date</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>23 May 2023</Box>
                        </Box>

                        <Box>
                          <Box>Current Valuation</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>Rup 1,745,000</Box>
                        </Box>

                      </ReturnsBox>

                    </CardContent>

                  </CardActionArea>

                </Property>
              </Grid>

              <Grid item xs={2} sm={4} md={4}  >
                <Property sx={{ maxWidth: 345 }}>

                  <CardActionArea>

                    <CardMedia>
                      <Category >Luxury Property</Category>
                      <Carousel showThumbs={false}>
                        <div>
                          <img src="/images/signup_page.jpg" alt="first" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="second" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="third" />
                        </div>
                      </Carousel>
                    </CardMedia>

                    <CardContent>

                      <Subheader>
                        <Box>India</Box>
                        <Box>Rented</Box>
                      </Subheader>

                      <Header gutterBottom variant="h5" component="div">
                        1 Bed in Blakely Tower, Dubai Marina
                      </Header>

                      <PriceBox>
                        <Box style={{ color: '#0170dc', fontSize: '18px', fontWeight: 600, fontFamily: 'Inter' }}>Rup 1,239,000</Box>
                        <Box>523 Investors</Box>
                      </PriceBox>

                      <ReturnsBox>
                        <Box>
                          <Box>Annualised Return</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>9.72%</Box>
                        </Box>

                        <Box>
                          <Box>Funded Date</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>23 May 2023</Box>
                        </Box>

                        <Box>
                          <Box>Current Valuation</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>Rup 1,745,000</Box>
                        </Box>

                      </ReturnsBox>

                    </CardContent>

                  </CardActionArea>

                </Property>
              </Grid>

              <Grid item xs={2} sm={4} md={4}  >
                <Property sx={{ maxWidth: 345 }}>

                  <CardActionArea>

                    <CardMedia>
                      <Category >Luxury Property</Category>
                      <Carousel showThumbs={false}>
                        <div>
                          <img src="/images/signup_page.jpg" alt="first" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="second" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="third" />
                        </div>
                      </Carousel>
                    </CardMedia>

                    <CardContent>

                      <Subheader>
                        <Box>India</Box>
                        <Box>Rented</Box>
                      </Subheader>

                      <Header gutterBottom variant="h5" component="div">
                        1 Bed in Blakely Tower, Dubai Marina
                      </Header>

                      <PriceBox>
                        <Box style={{ color: '#0170dc', fontSize: '18px', fontWeight: 600, fontFamily: 'Inter' }}>Rup 1,239,000</Box>
                        <Box>523 Investors</Box>
                      </PriceBox>

                      <ReturnsBox>
                        <Box>
                          <Box>Annualised Return</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>9.72%</Box>
                        </Box>

                        <Box>
                          <Box>Funded Date</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>23 May 2023</Box>
                        </Box>

                        <Box>
                          <Box>Current Valuation</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>Rup 1,745,000</Box>
                        </Box>

                      </ReturnsBox>

                    </CardContent>

                  </CardActionArea>

                </Property>
              </Grid>

            </Grid>
          </Box>
        }

        {activeButton === 'exited' &&
          <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

              <Grid item xs={2} sm={4} md={4}  >
                <Property sx={{ maxWidth: 345 }}>

                  <CardActionArea>

                    <CardMedia>
                      <Category>Sold</Category>
                      <Carousel showThumbs={false}>
                        <div>
                          <img src="/images/signup_page.jpg" alt="first" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="second" />
                        </div>
                        <div>
                          <img src="/images/signup_page.jpg" alt="third" />
                        </div>
                      </Carousel>
                    </CardMedia>

                    <CardContent>

                      <Subheader>
                        <Box>India</Box>
                        <Box>Sold</Box>
                      </Subheader>

                      <Header gutterBottom variant="h5" component="div">
                        1 Bed in Blakely Tower, Dubai Marina
                      </Header>

                      <PriceBox>
                        <Box style={{ color: '#0170dc', fontSize: '18px', fontWeight: 600, fontFamily: 'Inter' }}>Rup 1,239,000</Box>
                        <Box style={{ color: 'grey', display: 'flex', alignItems: 'center' }}> <EventIcon style={{ marginRight: '5px' }} />Sold in Aug 2022</Box>
                      </PriceBox>

                      <ReturnsBox>
                        <Box>
                          <Box>Funded Date</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>20 May 2023</Box>
                        </Box>

                        <Box>
                          <Box>Purchase Price</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>Rup 700,000</Box>
                        </Box>

                        <Box>
                          <Box>Total Rental Income</Box>
                          <Box style={{ color: 'black', fontWeight: 'bold' }}>Rup 80,000</Box>
                        </Box>

                      </ReturnsBox>

                    </CardContent>

                  </CardActionArea>

                </Property>
              </Grid>

            </Grid>
          </Box>
        }



      </Box>
    </div>
  )
}

export default Properties