import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

function Homepage(){

    const navigate = useNavigate();

    function handler(){
        navigate('/start');
    }

    return (


            <div className="flex flex-col items-center justify-center mt-12 gap-5">
                <h1 className="text-3xl">Welcome to HangMan</h1>
                <Button text="Start game" onClickHandler={handler}/>
            </div>
        


    )


}

export default Homepage;