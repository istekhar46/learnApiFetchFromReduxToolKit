import { useFetchDataMutation } from "../slice/weatherApiSlice";
import { Box, Paper, Stack, Button, Container, Typography } from "@mui/material";
import { setData } from "../slice/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Hero = () => {
  const [fetch, { isLoading }] = useFetchDataMutation();
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const {weatherData} = useSelector((state)=> state.weatherData)

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("delhi").unwrap();
      dispatch(setData({ ...res }));
      console.log(res)
      console.log(weatherData);
    } catch (error) {
      console.log(error?.data?.message || error.message);
    }
  };

  return (
    <>
   {/* {weatherData.map((element, index) => (
        <div key={index}>
          <p>Latitude: {element.coord?.lat}</p>
          <p>Longitude: {element.coord?.lon}</p>
        </div>
      ))} */}

    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained" onClick={fetchData}>Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>

    </>
  );
};

export default Hero;
