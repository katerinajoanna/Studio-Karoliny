import img1 from '../assets/gallery/zdjecie1.webp';
import img2 from '../assets/gallery/zdjecie2.jpg';
import img3 from '../assets/gallery/zdjecie3.jpg';
import img4 from '../assets/gallery/zdjecie4.jpg';
import img5 from '../assets/gallery/zdjecie5.jpg';

const Gallery: React.FC = () => {
    const images = [img1, img2, img3, img4, img5];

    return (
        <section id="gallery" className="flex items-center shadow-lg">
            <div className="w-full mx-auto p-5">
                <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-malayalam text-center bg-text-gradient bg-clip-text text-transparent p-2 my-12 italic">
                    Zdjęcia
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6 lg:gap-8 mb-8">
                    {images.map((src, i) => (
                        <div key={i} className="overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1">
                            <img
                                src={src}
                                alt={`gallery-${i}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
};

export default Gallery;
