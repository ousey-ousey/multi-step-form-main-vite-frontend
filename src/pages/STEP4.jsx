// pages/STEP4.jsx
import React from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStepperContext } from "./context/StepperContext";

function STEP4() {
  const navigate = useNavigate();
  const { stepData } = useStepperContext();

  const getPrice = () => {
    const { plan, billingCycle, addons } = stepData;
    const planPrice = billingCycle === "monthly" ? plan.price : plan.price * 1;
    const addonsPrice = Object.keys(addons).reduce((acc, addon) => {
      if (addons[addon]) {
        if (addon === "onlineService")
          return acc + 1 * (billingCycle === "monthly" ? 1 : 10);
        if (addon === "largerStorage")
          return acc + 2 * (billingCycle === "monthly" ? 1 : 10);
        if (addon === "customizableProfile")
          return acc + 2 * (billingCycle === "monthly" ? 1 : 10);
      }
      return acc;
    }, 0);
    return planPrice + addonsPrice;
  };

  const handleConfirm = () => {
    const { plan, billingCycle, addons } = stepData;
    const summary = {
      plan,
      billingCycle,
      addons,
      total: getPrice(),
    };
    console.log(summary);
    navigate("/thankyou");
  };

  const handleGoBack = () => {
    navigate("/step3");
  };

  const { plan, billingCycle, addons } = stepData;

  return (
    <Container component="main">
      <Typography component="h1" variant="h5" align="center">
        Finishing up
      </Typography>
      <Typography component="p" variant="body2" align="center" gutterBottom>
        Double-check everything looks OK before confirming.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="body1">
            {plan.name} ({billingCycle === "monthly" ? "Monthly" : "Yearly"})
          </Typography>
          <Typography variant="body2">
            ${billingCycle === "monthly" ? plan.price : plan.price * 10}/
            {billingCycle === "monthly" ? "mo" : "yr"}
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/step2")}
          >
            Change
          </Typography>
          <Box sx={{ mt: 2 }}>
            {addons.onlineService && (
              <Typography variant="body2">
                Online service +${billingCycle === "monthly" ? 1 : 10}/
                {billingCycle === "monthly" ? "mo" : "yr"}
              </Typography>
            )}
            {addons.largerStorage && (
              <Typography variant="body2">
                Larger storage +${billingCycle === "monthly" ? 2 : 20}/
                {billingCycle === "monthly" ? "mo" : "yr"}
              </Typography>
            )}
            {addons.customizableProfile && (
              <Typography variant="body2">
                Customizable profile +${billingCycle === "monthly" ? 2 : 20}/
                {billingCycle === "monthly" ? "mo" : "yr"}
              </Typography>
            )}
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Total (per {billingCycle === "monthly" ? "month" : "year"}):
            <Typography variant="body1" color="primary">
              ${getPrice()}/{billingCycle === "monthly" ? "mo" : "yr"}
            </Typography>
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="text" onClick={handleGoBack}>
          Go Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Box>
    </Container>
  );
}

export default STEP4;
