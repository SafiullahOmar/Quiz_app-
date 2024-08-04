import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
          <Routes>
            <Route path="/setting" element={<Settings />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/screen" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  </div>
  );
}

export default App;
