
// const Hero: React.FC = () => {
//     return (
//         <section className="relative flex flex-col md:flex-row items-center justify-evenly font-malayalam p-6 md:p-12 overflow-hidden shadow-lg">
//             <div className="text-generalText mt-10 md:mt-0 md:ml-12 max-w-xl animate-fadeIn p-5 md:p-7 lg:p-8 xl:p-9">
//                 <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl p-2 md:p-3">Witaj!</h1>
//                 <div className="font-medium text-textPrimary text-base sm:text-lg md:text-xl space-y-3">
//                     <p>Szukasz profesjonalnej wizażystki, stylistki brwi lub linergistki?</p>
//                     <p>Zapraszam Cię do skorzystania z moich usług w Pomlewie i Gdańsku Kokoszkach. Istnieje także możliwość dojazdu - po wcześniejszej konsultacji.</p>
//                     <p>Jestem dyplomowaną wizażystką i stylistką brwi z wieloletnim doświadczeniem. Pracuję z pasją, precyzją i na wysokiej jakości kosmetykach.</p>
//                 </div>
//             </div>

//             <img
//                 className="w-full max-w-[300px] md:max-w-[350px] h-auto object-contain mt-6 md:mt-0 animate-fadeIn"
//                 src="/karolina.png"
//                 alt="Zdjęcie"
//             />
//         </section>



//     );
// };

// export default Hero;



const Hero: React.FC = () => {
    return (
        <section className="mx-auto my-10 md:my-20 lg:my-30  p-5 shadow-lg">
            <div className=" text-left animate-fadeIn p-5 md:p-7 lg:p-8 xl:p-9 items-center font-malayalam font-medium">
                <h1 className=" text-helloText text-3xl sm:text-4xl md:text-5xl p-2 md:p-3 mb-2 italic">Witaj!</h1>
                <div className=" text-generalText text-base sm:text-lg md:text-2xl xl:text-3xl p-3 space-y-3 ">
                    <p>Szukasz profesjonalnej wizażystki, stylistki brwi lub linergistki?</p>
                    <p>Zapraszam Cię do skorzystania z moich usług w Pomlewie i Gdańsku Kokoszkach. Istnieje także możliwość dojazdu - po wcześniejszej konsultacji.</p>
                    <p>Jestem dyplomowaną wizażystką i stylistką brwi z wieloletnim doświadczeniem. Pracuję z pasją, precyzją i na wysokiej jakości kosmetykach.</p>
                </div>


                {/* <img
                className="w-full max-w-[300px] md:max-w-[350px] h-auto object-contain mt-6 md:mt-0 animate-fadeIn"
                src="/karolina.png"
                alt="Zdjęcie"
            /> */}


            </div>
        </section>
    );
};

export default Hero;