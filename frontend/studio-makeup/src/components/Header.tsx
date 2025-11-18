// import Logo from '../assets/logo2-removebg-preview.png'

// const Header: React.FC = () => {
//     return (
//         <div className="w-full flex md:flex-row items-center md:w-5/6 md:mx-40 gap-16 md:gap-16 lg:gap-11 xl:gap-24 p-10 md:p-4">
//             <img
//                 className="size-28 md:size-40 lg:size-48 xl:size-56 2xl:size-60"
//                 src={Logo}
//                 alt="Logo"
//             />
//             <div className='flex flex-col text-center text-2xl md:text-center m-4 md:m-10 md:text-4xl lg:text-[2.7rem] xl:text-6xl'>
//                 <div className='font-semibold font-playfair tracking-wider md:tracking-widest lg:tracking-[1rem]'>
//                     <h1 className='bg-text-gradient bg-clip-text text-transparent'>BEAUTY</h1>
//                     <h1 className='bg-text-gradient bg-clip-text text-transparent'>MAKEUP & BROWS</h1>
//                 </div>

//                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl tracking-wider p-2 my-1 font-cherish bg-text-gradient bg-clip-text text-transparent">
//                     Karolina Gorlikowska
//                 </h2>

//             </div>
//         </div>
//     );
// };

// export default Header;


//------------------------------------------------------------------------------


import React from 'react';
import Logo from '../assets/logo2-removebg-preview.png';

const Header: React.FC = () => {
    return (

        // - justify-center: Utrzymujemy centrowanie CAŁEGO bloku (Logo + Tekst).
        // - Zwiększamy odstępy (gap) między elementami.
        // - Domyślnie gap-6 (24px) na mobile, lg:gap-12 (48px), xl:gap-20 (80px).
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 xl:gap-20 p-4 md:p-6 lg:p-8">

            {/* Logo */}
            <img
                className="size-28 md:size-40 lg:size-48 xl:size-56 shrink-0"
                src={Logo}
                alt="Logo"
            />

            {/* Kontener Tytułów - zawsze wyśrodkowany względem samego siebie (text-center) */}
            <div className='flex flex-col text-center'>

                {/* H1s - Nagłówki główne */}
                <div className='font-semibold font-playfair tracking-wider text-xl md:text-3xl lg:text-[2.5rem] xl:text-5xl'>
                    <h1 className='bg-text-gradient bg-clip-text text-transparent leading-none'>BEAUTY</h1>
                    <h1 className='bg-text-gradient bg-clip-text text-transparent leading-none'>MAKEUP & BROWS</h1>
                </div>

                {/* H2 - Imię i Nazwisko */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-wider p-2 my-1 font-cherish bg-text-gradient bg-clip-text text-transparent">
                    Karolina Gorlikowska
                </h2>
            </div>

        </div>
    );
};

export default Header;