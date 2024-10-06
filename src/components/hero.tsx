import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg1 from "../assets/heroImg1.webp";
import heroImg2 from "../assets/heroImg2.webp";
import Knee from "../assets/Knee.png";

interface IHeroProps {}

const Hero: FC<IHeroProps> = () => {
    const [currentImage, setCurrentImage] = useState(heroImg1);
    const images = [heroImg1, heroImg2, Knee]; // Array of images

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImage((prevImage) => {
                const currentIndex = images.indexOf(prevImage);
                const nextIndex = (currentIndex + 1) % images.length;
                return images[nextIndex];
            });
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(imageInterval); // Cleanup interval on unmount
    }, [images]);

    return (
        <div
            className="fixed w-full h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: `url("/heroBg.svg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <motion.div
                className="relative flex items-center justify-center"
                style={{
                    width: currentImage === Knee ? "90%" : "75%", // Make Knee image bigger
                    height: currentImage === Knee ? "90%" : "75%", // Make Knee image bigger
                }}
                initial={{ opacity: 0 }} // Start with opacity 0
                animate={{ opacity: 1 }} // Fade in to opacity 1
                transition={{ duration: 7 }} // Transition duration of 7 seconds
                key={currentImage} // Key to trigger re-render when image changes
            >
                <img
                    src={currentImage}
                    className="object-contain w-full h-full filter brightness-50"
                    alt="Hero Image"
                />
            </motion.div>
            <div className="flex items-center justify-center absolute font-merienda">
                <h1 className="mt-8 lg:-mt-10 text-zinc-200 text-3xl lg:text-5xl tracking-tighter">
                    Sphinx <span className="text-red-500">Muay</span> Thai
                    {/* <span className="text-red-500">.</span> */}
                </h1>
            </div>
        </div>
    );
};

export default Hero;
