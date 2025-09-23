
import React, { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);

        // sprawdzenie od razu
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-10 right-10 z-[9999] p-4 text-yellow-700 text-2xl lg:text-3xl xl:text-4xl font-bold shadow-lg hover:text-yellow-500 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            aria-label="Back to top"
        >
            ↑
        </button>
    );
};

export default BackToTop;
