import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from './assets/icons/gym.png'

function BodyParts({item, setBodyPart, bodyPart}) {
  return (
    <Stack 
        type="button"
        alignItems="center"
        justifyContent="center"
        className='bodPart-card' 
        sx={{
            borderTop: bodyPart === item ? "5px solid #ff2625": "none",
            backgroundColor:"#fff",
            borderBottomLeftRadius:"20px",
            width:"200px",
            height:"200px",
            cursor:"pointer",
            gap:"47px"
        }}
        onClick ={() => {
            setBodyPart(item);
            window.scrollTo({top: 1000, left: 100, behavior:"smooth"})
        }}
    >
        <img className="" src={Icon} alt='Dumbbell' style={{width:"40px", height:"40px"}}/>
        <Typography fontSize="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyParts