
const Alphabets = new Array(26).fill('').map((element,index)=>String.fromCharCode(65+index))

function LetterButtons({usedLetters,onLetterClick}){

    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''))

    const buttonStyle = function(letter){
        if(selectedLetters.has(letter)){
            return ' bg-red-500 border-red-700 hover:bg-red-700'
        }else{
            return ' bg-blue-500 border-blue-700 hover:bg-blue-700 ' 

        }
    }

    const handleClick= function(event){
        const character = event.target.value;
        onLetterClick?.(character);
    }

    const buttons = Alphabets.map(letter => {
        return (
            <button 
                value={letter}
                disabled={selectedLetters.has(letter)}
                onClick={handleClick}
                className={`h-12 w-12 m-1 rounded-md border-2 text-white focus:outline-none ${buttonStyle(letter)}`}
                key={`button-${letter}`}>{letter}</button>
        )
    })
    return(
        <>
            {buttons}
        </>
    )
}

export default LetterButtons