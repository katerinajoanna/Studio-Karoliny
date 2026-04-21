import React from 'react';
import Logo from '../assets/logo2-removebg-preview.png';

const Header: React.FC = () => {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 xl:gap-20 p-4 md:p-6 lg:p-8 relative overflow-hidden bg-gradient-to-r from-[#827e69]/65 via-[#d2cc94]/65 to-[#78714d]/65">

            {/* Logo */}
            <img
                className="size-28 md:size-40 lg:size-48 xl:size-56 shrink-0"
                src={Logo}
                alt="Logo"
            />

            {/* Kontener Tytułów - zawsze wyśrodkowany względem samego siebie (text-center) */}
            <div className='flex flex-col text-center'>

                <div className='font-semibold font-playfair tracking-wider text-xl md:text-3xl lg:text-[2.5rem] xl:text-5xl'>
                    <h1 className='bg-text-gradient bg-clip-text text-transparent leading-none'>BEAUTY</h1>
                    <h1 className='bg-text-gradient bg-clip-text text-transparent leading-none'>MAKEUP & BROWS</h1>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-wider p-2 my-1 font-cherish bg-text-gradient bg-clip-text text-transparent">
                    Karolina Gorlikowska
                </h2>
            </div>

        </div>
    );
};

export default Header;