import { getAllCharacters } from "./MaskedTextUtility";

/**
 * 
 * @param {text} the word to be guessed 
 * @param {usedLetters} The letters that have been guesses so far 
 * @returns 
 */
function MaskedText({text,usedLetters}){

    const letters = getAllCharacters(text,usedLetters).split('');

    return(
        <div className="text-5xl mt-5">
            {letters.map((letters,index) =>{
                return(
                    <span key={`letter-${index}`} className=" mx-1">{letters}</span>
                )
            })}
        </div>
    )

}



export default MaskedText;