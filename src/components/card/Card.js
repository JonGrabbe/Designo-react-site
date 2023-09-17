import {useState, useEffect} from 'react';
import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import { breakpoints } from '../../data/breakpoints';



const styles = {
    
}

export default function Card(props) {
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth)
    const [img, setImg] = useState()
    function updateImg() {
        if(browserWidth < breakpoints.tablet) {
            setImg(props.imgPath.mobile)
        }
        if(browserWidth >= breakpoints.tablet) {
            setImg(props.imgPath.tablet)
        }
    }
    function update() {
        setBrowserWidth(window.innerWidth)
        updateImg()
    }
    useEffect(() => {
        update()
    }, [])
    // useEffect(() => {
    //     // if(browserWidth !== window.innerWidth) {
    //     //     setBrowserWidth(window.innerWidth)
    //     // }
    //     window.addEventListener('resize', update)
    // }, [])
    window.addEventListener('resize', update)
    return (
        <div className="card-container" style={{backgroundImage: `url(${process.env.PUBLIC_URL+'/'+img})`}}>
            <div className="blur-container">
            </div>
            <div className="content-inner-wrapper">
                <h3 className="h3 heading">
                    {props.text}
                </h3>
                <div className="link-container">
                    <span className="text">
                        view projects
                    </span>
                    <img src={rightArrow} alt="" className="arrow-img" />
                </div>
            </div>
        </div>
    )
}