import { Box, Stack,Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from "./HorizontalScrollbar"
import Loader from './Loader'

function SimilarExercise({targetMuscleExercises, equipmenExercises}) {
  return (
    <Box sx={{mt:{lg:"100px", xs:"0"}}}>
    <Typography variant='h4' mb={5} p={5}>
        Exercise that target the same muscle group
    </Typography>
    <Stack direction="row" sx={{
        position:"relative",
        p:"5"
    }}>
        {
            targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> 
            :<Loader/>

        }
    </Stack>
        <Typography variant='h4' mb={5} mt={5} p={5}>
            Exercise that use the same equipment 
        </Typography>
        <Stack direction="row" sx={{
            position:"relative",
            p:"5"
        }}>
            {
                equipmenExercises.length ? <HorizontalScrollbar data={equipmenExercises}/> 
                :<Loader/>

            }
        </Stack>
    </Box>
  )
}

export default SimilarExercise