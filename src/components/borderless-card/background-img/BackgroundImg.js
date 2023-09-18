import { useState, useEffect } from 'react';

import passionateImg from '../../../assets/home/desktop/illustration-passionate.svg';
import friendly from '../../../assets/home/desktop/illustration-friendly.svg'
import resourceful from '../../../assets/home/desktop/illustration-resourceful.svg';
import circleImg from '../../../assets/home/desktop/bg-pattern-hero-home.svg';

const imgData = {
    'friendly': {
        'path': '../../../assets/home/desktop/illustration-friendly.svg',
        imgFile: friendly,
        rotateDegree: 0
    },
    'passionate': {
        rotateDegree: -97   
    },
    'resourceful': {
        rotateDegree: 180
    }
}


export default function BackgroundImg(props) {
    const [img, setImg] = useState()
    useEffect(() => {
        let imgType = props.imgType
        if(imgType === 'friendly') {
            setImg(friendly)
            return
        }
        if(imgType === 'passionate') {
            setImg(passionateImg)
            return
        }
        if(imgType === 'resourceful') {
            setImg(resourceful)
            return
        }
    }, [props.imgType])

    return (
        <div className="borderless-card-background-img">
            <img src={img} alt="" className='main' />
            <img src={circleImg} alt="" className={'circle'} style={{rotate: imgData[props.imgType].rotateDegree+'deg'}} />
        </div>
    )
}