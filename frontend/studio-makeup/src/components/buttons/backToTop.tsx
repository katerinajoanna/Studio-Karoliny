import React, { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 100);
        };

        window.addEventListener("scroll", toggleVisibility);

        // od razu sprawdzamy scroll
        toggleVisibility();

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        console.log("scrollY:", window.scrollY, "visible:", visible);

    };

    return (
        <>
            <button
                onClick={scrollToTop}
                className={`fixed bottom-5 right-5 z-50 rounded-full bg-gray-800 p-3 text-white shadow-md hover:bg-red-700 hover:shadow-lg transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-50 pointer-events-none"
                    }`}
                aria-label="Back to top"
            >
                ↑
            </button>
        </>
    );
};

export default BackToTop;
