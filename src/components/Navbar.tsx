import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {
            name: "How to Play",
            link: "#how-to-play",
        },
        {
            name: "Game Mode",
            link: "#game-mode",
        },
        {
            name: "FAQs",
            link: "#faqs",
        },
        {
            name: "About Us",
            link: "#about",
        },
    ];

    return (
        <nav className="bg-[#033330] relative ">
            <div className=" px-5 md:px-10 py-5 w-full">
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        className="shrink-0 flex items-center gap-3 cursor-pointer"
                    >
                        <img
                            src="/logo.svg"
                            alt="LogiQuest"
                            className="h-16 w-auto object-contain"
                        />
                        <span className="font-prompt font-bold text-[#CFFDED] text-[31px]">
                            <span className="">Logi</span>
                            <span className="">Quest</span>
                        </span>
                    </Link>

                    <div className="hidden xl:flex items-center ">
                        <div className="flex justify-center text-base items-center gap-4">
                            {navLinks.map((item, index) => {
                                if (
                                    item.link?.startsWith("#") &&
                                    item.link.length > 1
                                ) {
                                    return (
                                        <ScrollLink
                                            key={index}
                                            to={item.link.substring(1)}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            activeClass="text-white"
                                            className="cursor-pointer hover:text-[#F9BC07] hover:transition-colors text-white] p-2.5"
                                        >
                                            {item.name}
                                        </ScrollLink>
                                    );
                                }
                            })}
                        </div>
                    </div>

                    <div className="xl:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="xl:hidden bg-[#323336] w-full px-10 pb-10 flex flex-col gap-6 absolute top-full left-0 z-50 border-t border-gray-800 shadow-2xl">
                    <div className="flex flex-col text-base text-[#F9BC07] gap-6 pt-5">
                        {navLinks.map((item, index) => {
                            if (
                                item.link?.startsWith("#") &&
                                item.link.length > 1
                            ) {
                                return (
                                    <ScrollLink
                                        onClick={() => setIsOpen(false)}
                                        key={index}
                                        to={item.link.substring(1)}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        activeClass="text-white"
                                        className="cursor-pointer hover:text-[#F9BC07] hover:transition-colors text-white"
                                    >
                                        {item.name}
                                    </ScrollLink>
                                );
                            }
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
