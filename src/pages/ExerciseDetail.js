import { Box } from '@mui/material';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import {exerciseOptions, FetchData, youtubeOptions } from '../components/utils/FetchData';
import Detail from "../components/Detail"
import ExerciseVideos from "../components/ExerciseVideos"
import SimilarExercise from "../components/SimilarExercise"


function ExerciseDetail() {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmenExercises, setEquipmenExercises] = useState([])
  const {id} = useParams();
  

  useEffect(() => {
    const FetchExercisesData = async()=>{
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =  "https://youtube-search-and-download.p.rapidapi.com"

      const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await FetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleExerciseData = await FetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExerciseData)

      const equipmenExerciseData = await FetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmenExercises(equipmenExerciseData)
    }

    FetchExercisesData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name ={exerciseDetail.name}/>
      <SimilarExercise targetMuscleExercises={targetMuscleExercises} equipmenExercises={equipmenExercises}/>
    </Box>
  )
}

export default ExerciseDetail