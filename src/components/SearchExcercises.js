import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData } from "../utils/fetchData";
import { excerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExcercises = ({setExercises, bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState("");
 
  const [bodyParts, setBodyParts] = useState([]);
  console.log(bodyParts);

  const handleSearch = async () => {
    if (search) {
      const url = "https://exercisedb.p.rapidapi.com/exercises";
      const exerciseData = await fetchData(url, excerciseOptions);
      console.log(exerciseData);

      const filteredExercise = exerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(filteredExercise);
    }
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
      const bodyPartsData = await fetchData(url, excerciseOptions);

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExerciseData();
  }, []);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        mb="50px"
        sx={{
          fontSize: { lg: "44px", xs: "30px" },

          textAlign: "center",
        }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise"
          type="text"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />

        <Button
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{postion: 'relative', width: '100%', p: '20px'}}
      >
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExcercises;
