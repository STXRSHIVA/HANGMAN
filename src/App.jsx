import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextInputFormContainer from './components/TextInputform/TextInputFormContainer'
import { Route, Routes } from 'react-router-dom'
import PlayGame from './pages/PlayGamepage/PlayGame';
import StartGame from './pages/StartGamepage/StartGame';


function App() {
  

  return (
      // <div>
      //   <h1 className='font-semibold text-3xl'>Welcome to Hangamn! </h1>
      //   <TextInputFormContainer onSubmit={(value)=>{console.log("value coming from the hidden form is",value)}}/>

      // </div>
      <>
        <div>NavBar </div>
        <Routes>
          <Route path='/play' element={<PlayGame/>}/>
          <Route path='/start' element={<StartGame/>}/>
          <Route path='*' element={<div>page not found</div>}/>
        </Routes>
      </>
  )
}

export default App;
