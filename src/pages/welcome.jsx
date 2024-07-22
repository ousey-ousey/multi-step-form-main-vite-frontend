import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Welcome = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/step1");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Form
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please follow the steps to complete the form.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleStart}>
        Start
      </Button>
    </Box>
  );
};

export default Welcome;
