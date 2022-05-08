import React from "react";

function Banner(){

    const scrollToProfile = ()=>{
        document.getElementsByClassName('wrapperProfile')[0].scrollIntoView();
    }
    return(
        <div className="wrapperBanner">
            <div className="left">

            </div>
            <div className="right">
                <div className="animate__animated animate__rubberBand hello">
                    <h2>Hello!</h2>
                </div>
                <h3>I'm Chien, a student of VKU.</h3>
                <button className="btn_readmore" onClick={scrollToProfile}>
                    <span>READ MORE</span>
                </button>
            </div>
        </div>
    )
}

export default Banner;