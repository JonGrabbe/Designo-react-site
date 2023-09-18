import { useState, useEffect } from 'react';
import BackgroundImg from './background-img/BackgroundImg';

import passionateImg from '../../assets/home/desktop/illustration-passionate.svg';
import friendly from '../../assets/home/desktop/illustration-friendly.svg'
import resourceful from '../../assets/home/desktop/illustration-resourceful.svg';

export default function BorderlessCard(props) {
    const [img, setImg] = useState()
    useEffect(() => {
        let imgType = props.imgType;
        if(imgType === 'friendly') {
            setImg(friendly)
            return
        }
    }, [])
    return (
        <div className="borderless-card" /* style={{backgroundImage: `url(${process.env.PUBLIC_URL+'../../assets/home/desktop/illustration-friendly.svg'})`}} */ >
            {/* <img src={friendly} alt="" className='img' /> */}
            <BackgroundImg imgType={props.imgType} />
        </div>
    )
}