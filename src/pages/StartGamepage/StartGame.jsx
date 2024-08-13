import { Link, useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputform/TextInputFormContainer";
import Button from "../../components/Button/Button";

// StartGame.js
function StartGame() {

    const navigate = useNavigate();

    function handleSubmit(value){
        
        navigate('/play',{state:{wordSelected : value}})
    }   

    return (
        <div className="flex flex-col items-center justify-center gap-5 p-12">

            <TextInputFormContainer onSubmit={handleSubmit}/>
        </div>
    );
}

export default StartGame;
