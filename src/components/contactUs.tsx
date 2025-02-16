import { FC, useEffect, useState } from "react";
import { Mail, Phone, Map, Heart } from "lucide-react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import MarkerIcon from "../assets/marker.svg";
import { Button } from "./ui/button";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

interface IContactUsProps {}

const ContactUs: FC<IContactUsProps> = ({}) => {
    const [map, setMap] = useState<any>(null);
    const myIcon = new L.Icon({
        iconUrl: MarkerIcon,
        iconRetinaUrl: MarkerIcon,
        popupAnchor: [-0, -0],
        iconSize: [32, 45],
    });

    useEffect(() => {
        if (map)
            L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                className: "map-tiles",
            }).addTo(map);
    }, [map]);

    return (
        <section id="contact-us" className="bg-zinc-800 scroll-mt-[6.25rem] lg:scroll-mt-28">
            <div className="flex flex-col gap-12 items-center pt-5 pb-7 lg:pt-10 lg:pb-20 px-6 lg:px-8 mx-auto max-w-7xl lg:flex-row w-full">
                <div>
                    <div className="mb-3">
                        <h2 className="text-xl lg:text-2xl text-zinc-500 font-merienda">
                            Contact Us
                        </h2>
                    </div>

                    <div className="w-full flex flex-col gap-6">
                        <div className="flex gap-6">
                            <span className="h-fit p-3 text-red-700 border border-red-700 rounded-full bg-zinc-700">
                                <Mail className="w-6 h-6" />
                            </span>
                            <div>
                                <h2 className="mb-1 text-xl font-light text-zinc-200">Email</h2>
                                <a
                                    href="mailto:samehahmedali167@gmail.com"
                                    className="text-red-100 text-lg font-semibold"
                                >
                                    samehahmedali167@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <span className="h-fit p-3 text-red-700 border border-red-700 rounded-full bg-zinc-700">
                                <Phone className="w-6 h-6" />
                            </span>
                            <div>
                                <h2 className="mb-1 text-xl font-light text-zinc-200">
                                    Phone / WhatsApp
                                </h2>
                                <a
                                    href="tel:+201006809882"
                                    className="text-red-100 font-semibold text-lg"
                                >
                                    +20 100 680 9882
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <span className="h-fit p-3 text-red-700 border border-red-700 rounded-full bg-zinc-700">
                                <Map className="w-6 h-6" />
                            </span>
                            <div>
                                <h2 className="mb-1 text-xl font-light text-zinc-200">Location</h2>

                                <a
                                    href="https://www.google.com/maps/place/Sphinx+Muay+Thai+team/@30.0366754,31.2084484,17z/data=!3m1!4b1!4m6!3m5!1s0x14584727c8f6bf65:0xc8beabbc9618c9b3!8m2!3d30.0366708!4d31.2110233!16s%2Fg%2F11hdt49n2c?entry=ttu"
                                    className=" text-red-100 text-lg font-semibold"
                                >
                                    Amer, Dokki, Giza, بجوار -البان، 6 ش محمد مخلوف-ميدان
                                    Governorate 12512
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <span className="h-fit p-3 text-red-700 border border-red-700 rounded-full bg-zinc-700">
                                <Heart className="w-6 h-6" />
                            </span>
                            <div>
                                <h2 className="text-xl font-light text-zinc-200 mb-3">Socials</h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <Button
                                        className="w-52 lg:w-40 text-zinc-300"
                                        variant="outline"
                                        size="lg"
                                        onClick={() => {
                                            window.location.href =
                                                "https://www.youtube.com/@sphinxmuaythaiteam";
                                        }}
                                    >
                                        <img src={youtube} className="w-6 h-6 mr-2" /> Youtube
                                    </Button>
                                    <Button
                                        className="w-52 lg:w-40 text-zinc-300"
                                        variant="outline"
                                        size="lg"
                                        onClick={() => {
                                            window.location.href =
                                                "https://www.facebook.com/SphnxMuaythi/";
                                        }}
                                    >
                                        <img src={facebook} className="w-6 h-6 mr-1" /> Facebook
                                    </Button>
                                    <Button
                                        className="w-52 lg:w-40 text-zinc-300"
                                        variant="outline"
                                        size="lg"
                                        onClick={() => {
                                            window.location.href =
                                                "https://www.instagram.com/sphinx_muay_thai_team/";
                                        }}
                                    >
                                        <img src={instagram} className="w-6 h-6 mr-2" /> Instagram
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex justify-end">
                    <MapContainer
                        center={[30.03667063230524, 31.211023633087557]}
                        zoom={15}
                        scrollWheelZoom={false}
                        className="h-[25rem] lg:h-[35rem] w-full"
                        ref={setMap}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker icon={myIcon} position={[30.03667063230524, 31.211023633087557]}>
                            <Popup>Sphinx Muay Thai</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
