import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";


import { excerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Excercises = ({exercises, setExercises}) => {
  return (
    <Box id="exercise" mt="50px" p="20px" sx={{ mt: { lg: "110px" } }}>
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap: {lg:'110px', xs: '50px'}}} flexWrap="wrap" justifyContent="center">
        {exercises.map((exercise, index) => (
          <ExerciseCard />
        ))}
      </Stack>
    </Box>
  );
};

export default Excercises;
