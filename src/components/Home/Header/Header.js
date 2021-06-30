import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <section className="headerSection">
            <div className="headerCover flex justify-center items-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">Web Guru</h1>
                    <p className="text-large text-gray-200 mt-5 mb-8">A Full Time Professional Web Developer</p>
                    <a className="bg-green-500 rounded-lg px-5 py-3" href="">Contact</a>
                </div>
            </div>
        </section>
    );
};

export default Header;