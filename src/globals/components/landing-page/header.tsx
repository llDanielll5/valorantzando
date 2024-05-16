import React from "react";
import { Box, Button, Typography } from "@mui/material";

// import { Container } from './styles';

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="transparent"
      pt={"5rem"}
      px={"5rem"}
      pb={"2rem"}
    >
      <Typography variant="h4">ValorantZando</Typography>

      <Box
        alignSelf="flex-end"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        columnGap="3rem"
      >
        <a href="/">Home</a>
        <Button variant="contained" sx={{ borderRadius: "2px" }}>
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
