const Hero: React.FC = () => {
    return (
        <section className="mx-auto my-6 p-5 md:p-8 lg:p-12 shadow-lg rounded-2xl  relative overflow-hidden">

            <div className="absolute inset-0 " />

            <div className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-12">

                {/* LEFT - TEXT */}
                <div className="flex-1 text-left animate-fadeIn font-montserrat">

                    <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 italic text-helloText font-playfair">
                        Witaj!
                    </h1>

                    <div className="text-base md:text-lg lg:text-xl text-generalText space-y-4">
                        <p>Szukasz profesjonalnej wizażystki, stylistki brwi lub linergistki?</p>
                        <p>Zapraszam Cię do skorzystania z moich usług w Pomlewie i Gdańsku Kokoszkach. Istnieje także możliwość dojazdu - po wcześniejszej konsultacji.</p>
                        <p>Jestem dyplomowaną wizażystką i stylistką brwi z wieloletnim doświadczeniem. Pracuję z pasją, precyzją i na wysokiej jakości kosmetykach.</p>
                    </div>
                </div>

                {/* RIGHT - IMAGE */}
                <div className="flex-1 flex justify-center">

                    <div className="relative w-full max-w-[300px] md:max-w-[400px] xl:max-w-[420px] h-auto object-contain mx-auto mb-10 animate-fadeIn">

                        <img
                            src="/karolina.png"
                            alt="Zdjęcie"
                            className="w-full h-full object-cover"
                        />

                        {/* overlay glow */}
                        <div className="absolute inset-0 " />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;



