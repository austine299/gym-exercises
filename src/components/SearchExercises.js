import {useState, useEffect} from 'react'
import { Stack, Box, Typography, TextField,Button } from '@mui/material'

import { exerciseOptions, FetchData } from './utils/FetchData'
import HorizontalScrollbar from "./HorizontalScrollbar"

function SearchExercises({setExercises, bodyPart, setBodyPart}) {
  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExerciseData = async () =>{
      const bodyPartsData = await FetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", 
        exerciseOptions);
      setBodyParts(['All', ...bodyPartsData])
    }
    fetchExerciseData();
  }, [])

  const handleSearch = async() =>{
    if (search) {
      const exerciseData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const SearchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(SearchedExercises);
      
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography 
        fontWeight={700} 
        sx={{fontSize:{lg:"44px", xs:"30px"}}}
        mb="50px" textAlign="center"
      >
        Awesome Exercises You <br/> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input:{
              fontWeight:"700",
              border:"none", 
              borderRadius:"4px"
            },
            width:{
              lg:"800px",
              xs:"100%"
            }
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search exercises'
          type='text'
        />
        <Button className='search-btn' 
          sx={{
            bgcolor:"#ff2625",
            color:"#fff",
            textTransform:"none",
            width:{lg:"175px", xs:"80px"},
            fontSize:{lg:"20px", xs:"14px"},
            height:"56px",
            position:"absolute",
            right:"0"
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{position:"relative", width:"100%", p:"20px"}}>
          <HorizontalScrollbar 
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyParts
          />
      </Box>
    </Stack>
  )
}

export default SearchExercises