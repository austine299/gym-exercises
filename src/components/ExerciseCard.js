import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function ExerciseCard({exercise, Horizontalstyle}) {
  return (
    <Stack>
        <Link className={!Horizontalstyle ? "exercise-card": "horizontal-card"} to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
            <Stack direction="row">
                <Button sx={{
                    ml:"21px",
                    color:"#fff",
                    backgroundColor:"#ffa9a9",
                    fontSize:"14px",
                    borderRadius:"20px",
                    textTransform:"capitalize"
                }}>
                    {exercise.bodyPart}

                </Button>
                <Button sx={{
                    ml:"21px",
                    color:"#fff",
                    backgroundColor:"#fcc757",
                    fontSize:"14px",
                    borderRadius:"20px",
                    textTransform:"capitalize"
                }}>
                    {exercise.target}

                </Button>
            </Stack>
            <Typography ml="2px" fontSize="16px" color="#000" mt="11px" fontWeight="bold" pb="10px" textTransform="capitalize">
                {exercise.name}
            </Typography>
        </Link>
    </Stack>
  )
}

export default ExerciseCard