// pages/STEP3.jsx
import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStepperContext } from "./context/StepperContext";

function STEP3() {
  const navigate = useNavigate();
  const { stepData, setStepData } = useStepperContext();
  const { addons } = stepData;

  const handleAddonChange = (event) => {
    setStepData({
      ...stepData,
      addons: {
        ...addons,
        [event.target.name]: event.target.checked,
      },
    });
  };

  const handleNextStep = () => {
    navigate("/step4");
  };

  const handleGoBack = () => {
    navigate("/step2");
  };

  return (
    <Container component="main">
      <Typography component="h1" variant="h5" align="center">
        Pick add-ons
      </Typography>
      <Typography component="p" variant="body2" align="center" gutterBottom>
        Add-ons help enhance your gaming experience.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Paper
              elevation={1}
              sx={{
                padding: "2rem",
                textAlign: "left",
                border: addons.onlineService ? "1px solid teal" : "none",
                cursor: "pointer",
              }}
              onClick={() =>
                handleAddonChange({
                  target: {
                    name: "onlineService",
                    checked: !addons.onlineService,
                  },
                })
              }
            >
              <Grid container alignItems="center">
                <Grid item xs={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={addons.onlineService}
                        onChange={handleAddonChange}
                        name="onlineService"
                        color="primary"
                      />
                    }
                    label=""
                  />
                </Grid>
                <Grid item xs={11}>
                  <Typography variant="body1"> Online service</Typography>
                  <Typography variant="body2">
                    Access to multiplayer games
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              elevation={1}
              sx={{
                padding: "2rem",
                textAlign: "left",
                border: addons.largerStorage ? "1px solid teal" : "none",
                cursor: "pointer",
              }}
              onClick={() =>
                handleAddonChange({
                  target: {
                    name: "largerStorage",
                    checked: !addons.largerStorage,
                  },
                })
              }
            >
              <Grid container alignItems="center">
                <Grid item xs={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={addons.largerStorage}
                        onChange={handleAddonChange}
                        name="largerStorage"
                        color="primary"
                      />
                    }
                    label=""
                  />
                </Grid>
                <Grid item xs={11}>
                  <Typography variant="body1">Larger storage</Typography>
                  <Typography variant="body2">
                    Extra 1TB of cloud save
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              elevation={1}
              sx={{
                padding: "2rem",
                textAlign: "left",
                border: addons.customizableProfile ? "1px solid teal" : "none",
                cursor: "pointer",
              }}
              onClick={() =>
                handleAddonChange({
                  target: {
                    name: "customizableProfile",
                    checked: !addons.customizableProfile,
                  },
                })
              }
            >
              <Grid container alignItems="center">
                <Grid item xs={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={addons.customizableProfile}
                        onChange={handleAddonChange}
                        name="customizableProfile"
                        color="primary"
                      />
                    }
                    label=""
                  />
                </Grid>
                <Grid item xs={11}>
                  <Typography variant="body1">Customizable profile</Typography>
                  <Typography variant="body2">
                    Custom theme on your profile
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="text" onClick={handleGoBack}>
          Go Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNextStep}>
          Next Step
        </Button>
      </Box>
    </Container>
  );
}

export default STEP3;
