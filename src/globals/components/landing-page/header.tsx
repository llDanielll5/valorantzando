import React from "react";
import { Box, Typography } from "@mui/material";

// import { Container } from './styles';

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="transparent"
      p={2}
    >
      <Typography variant="h6">Logo</Typography>
    </Box>
  );
};

export default Header;
