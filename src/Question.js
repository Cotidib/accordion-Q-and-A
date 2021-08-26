import React, {useState} from "react";
import { TiPlus, TiMinus } from 'react-icons/ti';

function Question(props) {
    const [toggleAns, setToggleAns] = useState(false);
    
    return (
        <section className={!toggleAns? 'q-container' : 'pop'}>
            <div className='q-header'>
                <h3 className='q-title'>{props.title}</h3>
                <button className='toggle-btn' onClick={() => setToggleAns(!toggleAns)}>{!toggleAns ? <TiPlus/> : <TiMinus/>}</button>
            </div>
            <div className='answer'>
                {
                    toggleAns ? props.info : ''
                }
            </div>
            
        </section>
    )
}

export default Question
