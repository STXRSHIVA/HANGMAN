import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";
import Hangamn from "../../components/Hangman/Hangman";

// PlayGame.js
function PlayGame() {

    const location = useLocation();
    const wordSelected = location.state?.wordSelected;

    const [step,setstep] = useState(0)

    const [usedLetters, setusedLetters] = useState([])

    const HandleLetterClick = function(letter){
        if(wordSelected.toUpperCase().includes(letter)){
            console.log('correct')
        }else{
            console.log("incorrect");
            setstep(step + 1 );
        }
        setusedLetters([...usedLetters,letter])
    }

    return (
        <div className=" text-center mt-5">
            <h1>Play Game</h1>
            <MaskedText text={wordSelected} usedLetters={usedLetters}/>
            <hr />

            <div className="flex justify-between items-center px-6">
                <div className="basis-2/4">
                <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={HandleLetterClick}/>
                </div>
                <div className="basis-2/4 flex justify-center items-center">
                <Hangamn step={step}/>
                </div>
            </div>


            <hr />
        </div>
    );
}

export default PlayGame;
