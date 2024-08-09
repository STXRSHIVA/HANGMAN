import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextInputFormContainer from './components/TextInputform/TextInputFormContainer'


function App() {
  

  return (
      <div>
        <h1 className='font-semibold text-3xl'>Welcome to Hangamn! </h1>
        <TextInputFormContainer onSubmit={(value)=>{console.log("value coming from the hidden form is",value)}}/>

      </div>
  )
}

export default App;
