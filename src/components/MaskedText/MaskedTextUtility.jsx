export function getAllCharacters(text,usedLetters){ /*This function will return a string with all the characters of the words 
    that have been guessed so far */

    const usedletters = usedLetters.map(letter => letter.toUpperCase());//['b','e'] => ['B','E']
    const guessedLetters = new Set(usedletters);
    const characters = text.toUpperCase().split('').map(char =>{
        if(guessedLetters.has(char)){
            return char;
        }
            return '_'; // __,__,__,B,__,E
    })
    return characters.join('');// ___B_E
}