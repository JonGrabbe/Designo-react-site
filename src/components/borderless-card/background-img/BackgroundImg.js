import { useState, useEffect } from 'react';

import passionateImg from '../../../assets/home/desktop/illustration-passionate.svg';
import friendly from '../../../assets/home/desktop/illustration-friendly.svg'
import resourceful from '../../../assets/home/desktop/illustration-resourceful.svg';
import circleImg from '../../../assets/home/desktop/bg-pattern-hero-home.svg';
import canada from '../../../assets/shared/desktop/illustration-canada.svg'
import australia from '../../../assets/shared/desktop/illustration-australia.svg'
import uk from '../../../assets/shared/desktop/illustration-united-kingdom.svg'

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
        if(imgType === 'canada') {
            setImg(canada)
            return
        }
        if(imgType === 'australia') {
            setImg(australia)
            return
        }
        if(imgType === 'uk') {
            setImg(uk)
            return
        }
    }, [props.imgType])

    let styles = {};
    // if(!(imgData[props.imgType]) || imgData[props.imgType].rotateDegree === 0) {
        
    // }
    let imgObj = imgData[props.imgType];
    if(imgObj) {
        styles = {rotate: imgData[props.imgType].rotateDegree+'deg'}
    }

    return (
        <div className="borderless-card-background-img">
            <img src={img} alt="" className='main' />
            <img src={circleImg} alt="" className={'circle'} style={styles} />
        </div>
    )
}