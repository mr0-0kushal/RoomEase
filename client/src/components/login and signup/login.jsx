import React, { useState } from "react";
import { Box, Button, TextField, Typography, IconButton, InputAdornment, CircularProgress, Container, styled } from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


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

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email format";
      case "password":
        return value.length >= 8 ? "" : "Password must be at least 8 characters";
      default:
        return value ? "" : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Login
        </Typography>

        <StyledTextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          aria-label="Enter your email"
        />

  

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
          {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>

        <Box sx={{ mt: 2, textAlign: "center" }}>
         
            New user?
            <Link
              to='/signup'
              underline="hover"
              sx={{
                cursor: "pointer",
                color: "#FE6B8B",
                "&:hover": {
                  color: "#FF8E53"
                }
              }}
            >
              Click here to sign up
            </Link>
        </Box>
      </FormWrapper>
    </StyledContainer>
  );
};

export default LoginForm;