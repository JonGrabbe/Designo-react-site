import { useState, useEffect } from 'react';
import BackgroundImg from './background-img/BackgroundImg';

export default function BorderlessCard(props) {
    return (
        <div className="borderless-card" >
            <BackgroundImg imgType={props.imgType} />
            <h2 className="h2 heading">{props.headingText}</h2>
            <p className="text p">
                {props.text}
            </p>
        </div>
    )
}