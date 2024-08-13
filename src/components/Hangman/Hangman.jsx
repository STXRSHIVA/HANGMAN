import level1 from '../../assets/images/level-1.svg';
import level2 from '../../assets/images/level-2.svg';
import level3 from '../../assets/images/level-3.svg';
import level4 from '../../assets/images/level-4.svg';
import level5 from '../../assets/images/level-5.svg';
import level6 from '../../assets/images/level-6.svg';
import level7 from '../../assets/images/level-7.svg';
import level8 from '../../assets/images/level-8.svg';


function Hangman({step}){

    const images = [ level1, level2, level3, level4, level5, level6, level7, level8];
    return(
        <div className='w-[300px] h-[300px] flex justify-center items-center'>
            <img className='h-96 w-96' src={step >= images.length ? images[images.length - 1] : images[step]}/>
        </div>
    )

}

export default Hangman;