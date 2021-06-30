import React from 'react';
import './SideBanner.css'

const SideBanner = () => {
    return (
        <div className="px-3 mt-10">
            <div className="sideBanner flex justify-center items-center flex-col">
                <h1 className="text-5xl font-bold sideBannerFont">Web Guru</h1>
                <p className="mt-4 font-bold sideBannerFont">Thanks for visit</p>
            </div>
        </div>
    );
};

export default SideBanner;