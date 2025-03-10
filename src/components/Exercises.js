import {useState, useEffect} from 'react'
import { Stack, Typography, Box } from '@mui/material'
import Pagination from '@mui/material/Pagination'

import { exerciseOptions,FetchData } from './utils/FetchData'
import ExerciseCard from './ExerciseCard'

function Exercises({setExercises, exercises, bodyPart}) {

  const [currentPage, setCurrentPage] = useState(1)
  const exercisePerPage = 6

  const indexOfLastExercise = currentPage * exercisePerPage;
  
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;

  const currentExercises = Array.isArray(exercises) ?
   exercises.slice( indexOfFirstExercise, indexOfLastExercise ) : [];

  // const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)

  const paginate = (e, value) =>{
    setCurrentPage(value);
    window.scrollTo({top:1800, behavior:"smooth"})
  }

  useEffect(() => {
    const FetchExercisesData = async () =>{
      
      let exerciseData =[];
      
      if(bodyPart === "All"){
        exerciseData =await FetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions)
      }else{
        exerciseData =await FetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions)
      }
      
      setExercises(exerciseData)
    }

    FetchExercisesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyPart])
  
  return (
    <Box 
      id="exercise"
      sx={{mt:{lg:"110px"}}}
      mt="50px"
      p="20px"
    >
      <Typography variant='h4' mb="46px">
        Showing Result
      </Typography>
      <Stack 
        direction="row" 
        sx={{
          gap:{lg:"110px", xs:"50px"}
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) =>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisePerPage &&(
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length)/exercisePerPage}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises