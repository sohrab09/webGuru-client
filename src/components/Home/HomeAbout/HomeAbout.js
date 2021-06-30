import React from 'react';
import './HomeAbout.css'
import aboutProfile from '../../../images/Home/aboutProfile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faMinus } from '@fortawesome/free-solid-svg-icons';

const HomeAbout = () => {
    return (
        <section className="mt-10 bg-gray-200 flex justify-center">
            <div className="w-11/12 grid md:grid-cols-3 mt-10">
                <div className="hidden sm:block aboutMe md:col-start-1 md:col-end-3 h-72 2xl:h-96 rounded-lg md:rounded-none">

                </div>
                <div className="mb-10 sm:mt-5 md:mt-0 bg-white md:ml-3 rounded-lg  h-72 2xl:h-96">
                    <div className="px-5 md:px-0 py-5 text-gray-500 md:ml-4 flex flex-col items-center text-center md:items-start md:text-left h-72 2xl:h-96 justify-around">
                        <div className="md:flex items-center">
                            <img className="rounded-full w-20" src={aboutProfile} alt="" />
                            <p className="mt-3 md:mt-0 md:ml-4 text-lg font-medium text-red-400">Sohrab Hossain</p>
                        </div>
                        <p className="md:pr-10">Love yourself for who you are, and trust me, if you are happy from within, you are the most beautiful person, and your smile is your best asset.</p>
                        <a className="font-bold text-blue-900" href="/">More <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;