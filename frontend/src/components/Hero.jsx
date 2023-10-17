import { toast } from "react-toastify";
import { useFetchDataMutation } from "../slice/weatherApiSlice";
import { styled, alpha } from "@mui/material/styles";
import {
  CssBaseline,
  Box,
  Paper,
  Stack,
  Button,
  Container,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
} from "@mui/material";
import { setData } from "../slice/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Hero = () => {
  const [fetch, { isLoading }] = useFetchDataMutation();
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const { weatherData } = useSelector((state) => state.weatherData);
  // const weather = weatherData ? weatherData : [];
  

  const fetchData = async (e) => {
    e.preventDefault();
    if (city === "") {
      toast.error("please Enter city");
      console.log("enter city");
    } else {
      try {
        const res = await fetch({city: city}).unwrap();
         dispatch(setData({...res}));
         console.log(res);
         setCity("");
        

      } catch (error) {
        console.log(error?.data?.message || error.message);
      }
    }
  };

  return (
    <>
      {  weatherData !== null  ? (
        <>
          <div className="weather">
            <h1>{weatherData.name}</h1>
            <p>Latitude: {weatherData.coord?.lat}</p>
            <p>Longitude: {weatherData.coord?.lon}</p>
            <p>Weather: {weatherData.weather?.main}</p>
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Feels Like: {weatherData.main.feels_like}</p>
            <p>Humidity: {weatherData.main.humidity}</p>
            <p>
              Wind:- Speed: {weatherData.wind?.speed} Degree:{" "}
              {weatherData.wind?.deg}
            </p>
            <p>
              Description: {weatherData.weather[0].description}
            </p>
            {/* <p>
              Sunrise:{" "}
              {new Date(weather.sys.sunrise * 1000)
                .getHours()
                .toString()
                .padStart(2, "0")}
              :
              {new Date(weather.sys.sunrise * 1000)
                .getMinutes()
                .toString()
                .padStart(2, "0")}
              am
            </p> */}
          </div>
        </>
      ) : (
        <>
          <p>No data available</p>
        </>
      )}

      <CssBaseline />
      <Container style={{ width: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                MUI
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search City"
                  inputProps={{ "aria-label": "search" }}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Box>

        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            style={{ marginTop: "1rem" }}
            onClick={fetchData}
          >
            search
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Hero;
