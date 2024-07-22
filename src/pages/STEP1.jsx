import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStepperContext } from "./context/StepperContext";

function STEP1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { stepData, setStepData } = useStepperContext();

  const onSubmit = (data) => {
    setStepData({ ...stepData, personalInfo: data });
    navigate("/step2");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5" align="center">
        Personal info
      </Typography>
      <Typography component="p" variant="body2" align="center" gutterBottom>
        Please provide your name, email address, and phone number.
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          placeholder="e.g. Stephen King"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ""}
        />
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          placeholder="e.g. stephenking@lorem.com"
          {...register("email", {
            required: "Email Address is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />
        <TextField
          margin="normal"
          fullWidth
          id="phone"
          label="Phone Number"
          name="phone"
          autoComplete="tel"
          placeholder="e.g. +1 234 567 890"
          {...register("phone", {
            required: "Phone Number is required",
            pattern: {
              value: /^[0-9+ ]+$/,
              message: "Invalid phone number",
            },
          })}
          error={!!errors.phone}
          helperText={errors.phone ? errors.phone.message : ""}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Next Step
        </Button>
      </Box>
    </Container>
  );
}

export default STEP1;
