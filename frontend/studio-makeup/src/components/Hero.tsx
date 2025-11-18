const Hero: React.FC = () => {
    return (
        <section className="mx-auto my-4 p-5 shadow-lg">
            <div className="text-left animate-fadeIn p-5 md:p-7 lg:p-10 font-malayalam font-medium">

                <h1 className="text-3xl md:text-4xl lg:text-5xl p-2 mb-2 italic text-helloText">
                    Witaj!
                </h1>

                <div className="text-base md:text-lg lg:text-xl text-generalText space-y-4 p-2">
                    <p>Szukasz profesjonalnej wizażystki, stylistki brwi lub linergistki?</p>
                    <p>Zapraszam Cię do skorzystania z moich usług w Pomlewie i Gdańsku Kokoszkach. Istnieje także możliwość dojazdu - po wcześniejszej konsultacji.</p>
                    <p>Jestem dyplomowaną wizażystką i stylistką brwi z wieloletnim doświadczeniem. Pracuję z pasją, precyzją i na wysokiej jakości kosmetykach.</p>
                </div>

            </div>
        </section>
    );
};

export default Hero;
