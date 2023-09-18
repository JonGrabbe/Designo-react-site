import { useState, useEffect } from 'react';

import passionateImg from '../../assets/home/desktop/illustration-passionate.svg';
import friendly from '../../assets/home/desktop/illustration-friendly.svg'
import resourceful from '../../assets/home/desktop/illustration-resourceful.svg';

export default function BorderlessCard(props) {
    const [img, setImg] = useState()
    useEffect(() => {
        
    }, [props.imgType])
    return (
        <div className="borderless-card">
        
        </div>
    )
}