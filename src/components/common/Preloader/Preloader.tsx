import React from "react";
import preloader from "../../../assets/images/preloader.svg";



let Preloader = () => {
    return (
        <div>
            <img src={preloader} style={ {backgroundColor: 'transparent'} } />
        </div>
    );
};

export default Preloader;