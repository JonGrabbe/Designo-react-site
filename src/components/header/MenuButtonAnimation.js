import { useState } from "react";

function MenuButtonAnimation(props) {
    const [cn, setCn] = useState(false)
    return (
        <div id="hamburger-5" onClick={() => setCn(!cn)} className={`hamburger ${cn ? 'is-active' : ''}`}>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
    );
}

export default MenuButtonAnimation;