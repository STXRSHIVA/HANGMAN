import { Link, useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputform/TextInputFormContainer";

// StartGame.js
function StartGame() {

    const navigate = useNavigate();

    function handleSubmit(){
        navigate('/play')
    }   

    return (
        <div>
            <h1>Start Game</h1>
            <TextInputFormContainer onSubmit={handleSubmit}/>
            <Link to='/play'>Play Game</Link>
        </div>
    );
}

export default StartGame;
