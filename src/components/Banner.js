import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import BannerImage from '../images/banner.png'; 


const Banner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        
      }}
      paddingX={2}
      position="relative"
      fontWeight="600"
      fontSize="26px"
    >
      <Typography
        sx={{ color: "#FF2625", fontWeight: "600", fontSize: "26px" }}
      >
        Fitness Club
      </Typography>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: { lg: "44px", xs: "40px" },
        }}
      >
        Sweat, smile <br /> and Repeat
      </Typography>
      <Typography mb={3} fontSize="22px" lineHeight="35px">
        Check out the most effective exercises
      </Typography>

      <Button sx={{padding: '10px'}} color="error" variant="contained">Explore Exercises</Button>
    <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
            opacity: 0.1,
            display: {lg: 'block', xs: 'none'}
        }}
        fontSize="200px"
    >Exercise</Typography>
      <img src={BannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default Banner;
