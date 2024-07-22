import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Switch,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStepperContext } from "./context/StepperContext";

function STEP2() {
  const navigate = useNavigate();
  const { stepData, setStepData } = useStepperContext();
  const { billingCycle, plan } = stepData;

  const handleBillingCycleChange = (event) => {
    setStepData({
      ...stepData,
      billingCycle: event.target.checked ? "yearly" : "monthly",
    });
  };

  const handlePlanSelect = (name, price) => {
    setStepData({
      ...stepData,
      plan: { name, price },
    });
  };

  const handleNextStep = () => {
    navigate("/step3");
  };

  const handleGoBack = () => {
    navigate("/step1");
  };

  useEffect(() => {
    const yearlyPricing = {
      Arcade: 90,
      Advanced: 120,
      Pro: 150,
    };

    if (billingCycle === "yearly") {
      setStepData((prevState) => ({
        ...prevState,
        plan: {
          ...prevState.plan,
          price: yearlyPricing[prevState.plan.name],
        },
      }));
    } else {
      const monthlyPricing = {
        Arcade: 9,
        Advanced: 12,
        Pro: 15,
      };

      setStepData((prevState) => ({
        ...prevState,
        plan: {
          ...prevState.plan,
          price: monthlyPricing[prevState.plan.name],
        },
      }));
    }
  }, [billingCycle]);

  return (
    <Container component="main">
      <Typography component="h1" variant="h5" align="center">
        Select your plan
      </Typography>
      <Typography component="p" variant="body2" align="center" gutterBottom>
        You have the option of monthly or yearly billing.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={4}>
            <Paper
              elevation={plan.name === "Arcade" ? 5 : 1}
              onClick={() => handlePlanSelect("Arcade", 9)}
              sx={{
                padding: "3rem",
                textAlign: "center",
                border: plan.name === "Arcade" ? "1px solid teal" : "none",
                cursor: "pointer",
                minHeight: "200px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flexStart",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {billingCycle === "yearly" && (
                  <Typography
                    style={{
                      opacity: ".8",
                      position: "absolute",
                      fontSize: "10px",
                      width: "150px",
                      top: "-45px",
                    }}
                    variant="body2"
                    color="error"
                  >
                    2 months free
                  </Typography>
                )}
                <img
                  style={{ marginBottom: "20px" }}
                  src="https://res.cloudinary.com/dfkn5xnul/image/upload/v1721670617/icon-arcade_yscf8r.svg"
                  alt="Arcade"
                />
                <div>
                  <Typography variant="body1">Arcade</Typography>
                  <Typography variant="body2">
                    {billingCycle === "monthly" ? "$9/mo" : "$90/yr"}
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={plan.name === "Advanced" ? 5 : 1}
              onClick={() => handlePlanSelect("Advanced", 12)}
              sx={{
                padding: "3rem",
                textAlign: "center",
                border: plan.name === "Advanced" ? "1px solid teal" : "none",
                cursor: "pointer",
                minHeight: "200px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flexStart",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {billingCycle === "yearly" && (
                  <Typography
                    style={{
                      opacity: ".8",
                      position: "absolute",
                      fontSize: "10px",
                      width: "150px",
                      top: "-45px",
                    }}
                    variant="body2"
                    color="error"
                  >
                    2 months free
                  </Typography>
                )}
                <img
                  style={{ marginBottom: "20px" }}
                  src="https://res.cloudinary.com/dfkn5xnul/image/upload/v1721670619/icon-advanced_a3dlok.svg"
                  alt="Advanced"
                />
                <div>
                  <Typography variant="body1">Advanced</Typography>
                  <Typography variant="body2">
                    {billingCycle === "monthly" ? "$12/mo" : "$120/yr"}
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={plan.name === "Pro" ? 5 : 1}
              onClick={() => handlePlanSelect("Pro", 15)}
              sx={{
                padding: "3rem",
                textAlign: "center",
                border: plan.name === "Pro" ? "1px solid teal" : "none",
                cursor: "pointer",
                minHeight: "200px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flexStart",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {billingCycle === "yearly" && (
                  <Typography
                    style={{
                      opacity: ".8",
                      position: "absolute",
                      fontSize: "10px",
                      width: "150px",
                      top: "-45px",
                    }}
                    variant="body2"
                    color="error"
                  >
                    2 months free
                  </Typography>
                )}
                <img
                  style={{ marginBottom: "20px" }}
                  src="https://res.cloudinary.com/dfkn5xnul/image/upload/v1721670617/icon-pro_teyutg.svg"
                  alt="Pro"
                />
                <div>
                  <Typography variant="body1">Pro</Typography>
                  <Typography variant="body2">
                    {billingCycle === "monthly" ? "$15/mo" : "$150/yr"}
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Typography component="p" variant="body2">
            Monthly
          </Typography>
          <Switch
            checked={billingCycle === "yearly"}
            onChange={handleBillingCycleChange}
            name="billingCycle"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <Typography component="p" variant="body2">
            Yearly
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" onClick={handleGoBack}>
            Go Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNextStep}>
            Next Step
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default STEP2;
