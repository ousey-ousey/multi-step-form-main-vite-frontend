import React from "react";
import { Container, Typography } from "@mui/material";

function ThankYou() {
  return (
    <Container
      component="main"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <img
        style={{ margin: "2rem auto", marginBottom: "2rem" }}
        src="../../assets/images/icon-thank-you.svg"
      />
      <Typography component="h1" variant="h5" align="center">
        Thank You!
      </Typography>
      <Typography component="p" variant="body2" align="center" gutterBottom>
        Your subscription has been successfully processed.
      </Typography>
    </Container>
  );
}

export default ThankYou;
