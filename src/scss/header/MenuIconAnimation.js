import { useState } from "react";

function MenuIconAnimation(props) {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={`menu-icon-animation ${isActive ? 'is-active' : ''}`} onClick={() => setIsActive(!isActive)}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
        </div>
    );
}

export default MenuIconAnimation;