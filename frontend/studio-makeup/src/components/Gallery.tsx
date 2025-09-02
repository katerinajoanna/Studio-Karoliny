const Gallery: React.FC = () => {
    return (
        <section className="flex items-center shadow-lg">
            <div id="gallery" className="max-w-7xl mx-auto p-3">
                <h1>Zdjęcia</h1>
                <div className="flex flex-col gap-3">
                    <div className="bg-yellow-600/5 w-[100px] h-[150px] rounded-lg shadow-lg"></div>
                    <div className="bg-yellow-600/5 w-[100px] h-[150px] rounded-lg shadow-lg"></div>
                    <div className="bg-yellow-600/5 w-[100px] h-[150px] rounded-lg shadow-lg"></div>
                    <div className="bg-yellow-600/5 w-[100px] h-[150px] rounded-lg shadow-lg"></div>
                    <div className="bg-yellow-600/5 w-[100px] h-[150px] rounded-lg shadow-lg"></div>

                    <div className="bg-yellow-600/5 w-[100px] h-[150px] rounded-lg shadow-lg"></div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;