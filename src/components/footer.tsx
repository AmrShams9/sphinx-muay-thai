import { FC } from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
///amr

interface IFooterProps {}

const Footer: FC<IFooterProps> = ({}) => {
    return (
        <footer className="bg-zinc-800 md:pt-6 sm:pt-4 border-t border-zinc-200">
            <div className="w-full max-w-7xl mx-auto p-7 pt-12 md:pt-8 px-6 lg:px-8">
                <div className="flex items-end justify-between">
                    <div className="flex flex-col items-start sm:justify-between">
                        <a
                            href="#"
                            className="flex items-center mb-5 sm:mb-0 space-x-3 rtl:space-x-reverse"
                        >
                            <div className="flex gap-4">
                                <img className="h-16 lg:h-20" src={logo} alt="office content 1" />
                            </div>
                        </a>
                        <ul className="flex flex-wrap items-center lg:mt-6 text-sm font-medium text-zinc-200 sm:mb-0 ">
                            <li>
                                <span
                                    className="hover:underline me-4 md:me-6 scroll-smooth cursor-pointer"
                                    onClick={() => {
                                        const contactUsElement =
                                            document.getElementById("contact-us");
                                        if (contactUsElement) {
                                            contactUsElement.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        }
                                    }}
                                >
                                    Contact Us
                                </span>
                            </li>
                            <li>
                                <a
                                    onClick={() => {
                                        const aboutElement = document.getElementById("about");
                                        if (aboutElement) {
                                            aboutElement.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        }
                                    }}
                                    className="hover:underline scroll-smooth cursor-pointer"
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-col gap-2">
                        <a href="https://www.youtube.com/@sphinxmuaythaiteam">
                            <img src={youtube} />
                        </a>
                        <a href="https://www.facebook.com/SphnxMuaythi/">
                            <img src={facebook} />
                        </a>
                        <a href="https://www.instagram.com/sphinx_muay_thai_team/">
                            <img src={instagram} />
                        </a>
                    </ul>
                </div>
                <hr className="my-6 border-zinc-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-zinc-200 sm:text-center ">
                    © 2024 Sphinx Muay Thai™. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
