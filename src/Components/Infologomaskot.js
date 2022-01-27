import React from 'react';
import "./Infologomaskot.css";
import '../App.css';
import { motion } from 'framer-motion';

/*function non(){
    return(
        <div className='wrapper'>
            <h1>Hello</h1>
        </div>
    )
}
*/


function infologomaskot(props){
    return(
        <div className='card'>
            <div className='card__body'>
                <img src={props.img} class="card__image"/>
                <h2 className='card__title'>
                    {props.title}
                </h2>
            </div>
            <button className='card__btn'>View more</button>
        </div>
    )
}

export default infologomaskot;