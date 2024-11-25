import React, { useState } from "react";
import { Box, Button, TextField, Typography, IconButton, InputAdornment, FormControl, FormControlLabel, Radio, RadioGroup, CircularProgress, Container, styled } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
  padding: theme.spacing(3)
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "400px",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)"
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main
    },
    "&.Mui-error fieldset": {
      borderColor: theme.palette.error.main
    }
  }
}));

const commonEmailDomains = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@outlook.com"];

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "male",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailSuggestions, setEmailSuggestions] = useState([]);

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email format";
      case "password":
        return value.length >= 8 ? "" : "Password must be at least 8 characters";
      case "phone":
        return /^\d{10}$/.test(value) ? "" : "Phone number must be 10 digits";
      default:
        return value ? "" : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (name === "email" && !value.includes("@")) {
      const suggestions = commonEmailDomains.map(domain => value + domain);
      setEmailSuggestions(suggestions);
    } else {
      setEmailSuggestions([]);
    }

    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Form submitted:", formData);
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <StyledContainer>
      <FormWrapper component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Sign Up
        </Typography>

        <StyledTextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          aria-label="Enter your name"
        />

        <StyledTextField
          fullWidth
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          aria-label="Enter your phone number"
        />

        <StyledTextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email || (emailSuggestions.length > 0 && "Suggestions available")}
          aria-label="Enter your email"
        />
        {emailSuggestions.length > 0 && (
          <Box mb={2}>
            {emailSuggestions.map((suggestion, index) => (
              <Button
                key={index}
                size="small"
                onClick={() => {
                  setFormData({ ...formData, email: suggestion });
                  setEmailSuggestions([]);
                }}
                sx={{ mr: 1, mb: 1 }}
              >
                {suggestion}
              </Button>
            ))}
          </Box>
        )}

        <FormControl component="fieldset" fullWidth sx={{ mb: 2 }}>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            aria-label="Select your gender"
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        
    
        <div>
            <p className="text-[#7e7e7e]">New User? <a href="" className="text-black hover:underline">Click here to Login in</a></p>
        </div>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={isLoading}
          sx={{
            mt: 2,
            height: 56,
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
          }}
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : "Create Account"}
        </Button>
        
      </FormWrapper>
    </StyledContainer>
  );
};

export default SignUpForm;