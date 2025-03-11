import { Stack, Box, Typography } from '@mui/material';
import React from 'react';

function ExerciseVideos({exerciseVideos, name}) {
  if (!exerciseVideos.length) return "Loading"
  return (
    <Box sx={{marginTop:{lg:"200px", xs:"20px"}, padding:{lg:6, md:6}}} >
      <Typography variant='h4' mb="33px" sx={{ padding:{xs:5}}}>
        Watch <span style={{color:"#ff2625", textTransform:"capitalize"}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{flexDirection:{lg:"row",md:"row", xs:"column"},
          gap:{lg:"50px", xs:"40px"}
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) =>(
          <a 
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className='exercise-video'
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{width:"100%"}}/>
            <Box>
            <Typography variant='h5' color="#000">
              {item.video.title}
            </Typography>
            <Typography variant='h6' color="#000">
              {item.video.channelName}
            </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos