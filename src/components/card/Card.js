import {useState, useEffect} from 'react';
import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import { breakpoints } from '../../data/breakpoints';
import { Link } from 'react-router-dom';

export default function Card(props) {
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth)
    const [img, setImg] = useState()

    function updateImg() {
        if(browserWidth >= breakpoints.desktop) {
            setImg(props.imgPath.desktop)
            return
        }
        if(browserWidth >= breakpoints.tablet) {
            setImg(props.imgPath.tablet)
            return
        }
        if(browserWidth < breakpoints.tablet) {
            setImg(props.imgPath.mobile)
            return
        }
    }

    function update() {
        setBrowserWidth(window.innerWidth)
        updateImg()
    }

    useEffect(() => {
        update()
    }, [])

    window.addEventListener('resize', update)
    return (
        <Link to={props.href} >
            <div className={"card-container"+' '+props.className} style={{backgroundImage: `url(${process.env.PUBLIC_URL+'/'+img})`}}>
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
        </Link>
    )
}