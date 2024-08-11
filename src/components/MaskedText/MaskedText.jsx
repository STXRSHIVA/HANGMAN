import { getAllCharacters } from "./MaskedTextUtility";

/**
 * 
 * @param {text} the word to be guessed 
 * @param {usedLetters} The letters that have been guesses so far 
 * @returns 
 */
function MaskedText({text,usedLetters}){

    const letters = getAllCharacterslCharacters(text,usedLetters).split('');

    return(
        <>
            {letters.map((letters,index) =>{
                return(
                    <span key={`letter-${index}`} className=" mx-1">{letters}</span>
                )
            })}
        </>
    )

}



export default MaskedText;