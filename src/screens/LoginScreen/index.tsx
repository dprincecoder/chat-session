import {
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginType } from "../../configs";
import backgroundImage from "./img/bg.png";
import visibleOff from "./img/visibleOff.svg";
import visibleOn from "./img/visibleOn.svg";
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
  },
};
const LoginScreen: React.FC = () => {
  const [inputFields, setInputFields] = useState<loginType>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<loginType>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const validateForm = () => {
    let temp = { ...errors };
    temp.email =
      inputFields.email.trim() === "" ? "This field is required" : "";
    temp.password =
      inputFields.password.trim() === ""
        ? "This field is required"
        : inputFields.password.length < 8
        ? "Password must be at least 8 characters long"
        : !/(?=.*[A-Z])/.test(inputFields.password)
        ? "Password must contain at least one uppercase letter"
        : "";

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
    validateForm();
  };

  const isFormValid = () => {
    return Object.values(errors).every((x) => x === "");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    navigate("/main");
  };
  const inputProps = {
    endAdornment: (
      <IconButton onClick={togglePasswordVisibility}>
        <img
          src={showPassword ? visibleOff : visibleOn}
          alt="Toggle visibility"
          onClick={togglePasswordVisibility}
        />
      </IconButton>
    ),
  };
  return (
    <Container
      sx={{
        ...styles.container,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography variant="h3" mt={4} align="center" gutterBottom={true}>
        Welcome to ChatMate
      </Typography>
      {/* <hr /> */}
      <CssBaseline />
      <Card
        sx={{
          maxWidth: 600,
          height: 450,
          padding: "5px",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={inputFields.email}
              onChange={handleChange}
              fullWidth
              autoComplete="off"
              required
              margin="normal"
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={inputFields.password}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              autoComplete="off"
              InputProps={inputProps}
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem 0",
              }}
            >
              <div>
                <input
                  type="checkbox"
                  id="checkbox"
                  style={{ marginRight: "5px" }}
                />
                <label htmlFor="checkbox">Remember me</label>
              </div>
              <Typography
                variant="body2"
                color="primary"
                sx={{ cursor: "pointer" }}
              >
                Forgot password?
              </Typography>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={!isFormValid()}
              sx={{ borderRadius: "10px" }}
            >
              Login
            </Button>
            <Button
              style={{ marginTop: "1rem", marginRight: "1rem" }}
              variant="contained"
              disabled
              fullWidth
              sx={{ borderRadius: "10px" }}
            >
              LOGIN WITH SINGLE SIGN ON
            </Button>
            <Typography sx={{ marginTop: "3rem" }} align="center">
              No account yet? Create one
            </Typography>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginScreen;
