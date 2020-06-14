import SimpleImageSlider from "react-simple-image-slider";
import React, { Component }  from 'react';


class Imageslider extends React.Component {
    render() {
        const images = [
            { url: "./images/paris.jpg" },
            { url: "./images/moskow.jpg" },
            { url: "./images/singapore.jpg" },
            { url: "./images/amesterdam.jpg" },
            { url: "./images/prage.jpg" },
        ];

        return (
            <div>
                <SimpleImageSlider
                    width={1366}
                    height={504}
                    images={images}
                    slideDuration={0.5}
                />
            </div>
        );
    }
}
export default Imageslider;
