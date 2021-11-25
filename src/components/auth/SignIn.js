import * as React from "react";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Assets
import loginBackgroundImg from "../../assets/img/login.jpg";

function Copyright(props) {
  return (
    <Typography
      variant="body1"
      fontSize="20px"
      color="#FFFFFFBF"
      align="center"
      {...props}
    >
      {"¿Todavía no tienes una cuenta?"}{" "}
      <Link
        to="/signup"
        style={{ color: "#FFFFFF", fontSize: "20px", textDecoration: "none"}}
      >
        Crea una ahora
      </Link>
      {` `}
    </Typography>
  );
}

const theme = createTheme({
  components: {
    typography: {
      button: {
        fontSize: "1rem", // 16px
      },
    },
    // Name of the component
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "#290025",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: "#FFFFFF",
        },
      },
    },
  },
});

export default function SignInSide() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${loginBackgroundImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* <img src={loginBackgroundImg} target='loginBackgroundImg' />> */}
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          paddingX="24px"
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h3">
              BIENVENIDO
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                placeholder="Ingresa tu email:"
                autoComplete="email"
                autoFocus
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputProps={{
                  style: {
                    backgroundColor: "#c29abe",
                  },
                }}
                style={{ marginTop: "15px" }}
              />
              <FormControl
                sx={{ marginTop: "16px", width: "100%" }}
                variant="outlined"
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  style={{
                    color: "white",
                  }}
                >
                  Contraseña
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  placeholder="Ingresa tu contraseña:"
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  style={{ backgroundColor: "#c29abe" }}
                />
              </FormControl>
              <Grid container alignItems="end">
                <Grid item xs>
                  <Link
                    to="/recovery"
                    style={{
                      color: "#FFFFFF",
                      fontSize: "20px",
                      textDecoration: "none",
                    }}
                  >
                    ¿Has olvidado tu contraseña?
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                size="medium"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar sesión
              </Button>

              <Typography
                variant="body1"
                fontSize="20px"
                color="#FFFFFFBF"
                align="center"
              >
                {"O inicia sesión con: "}
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >

                <Grid item xs>
                  <Button
                    type="submit"
                    size="small"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Google
                  </Button>
                  <Button
                    type="submit"
                    size="small"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Facebook
                  </Button>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
