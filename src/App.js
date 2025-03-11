import './App.css';
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Box>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
      </Box>
    </Router>
  );
}

export default App;
