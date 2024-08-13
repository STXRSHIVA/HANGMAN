import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextInputFormContainer from './components/TextInputform/TextInputFormContainer'
import { Route, Routes } from 'react-router-dom'
import PlayGame from './pages/PlayGamepage/PlayGame';
import StartGame from './pages/StartGamepage/StartGame';
import Homepage from './pages/Homepage/Homepage'


function App() {

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <Homepage />
      </div>
      <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
      </Routes>
    </>
  );
}

export default App;
