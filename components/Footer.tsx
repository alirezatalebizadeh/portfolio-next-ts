import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton"
import Image from "next/image";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            {/*//! background grid */}
            <div className="w-full absolute left-0  min-h-96">
                <Image
                    loading="lazy"
                    width={500}
                    height={500}
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    میخوای با هم {" "}<span className="text-purple">ارتباط بیشتری</span> {" "}داشته باشیم؟
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    کلیک کن و با من در ارتباط باش.
                </p>

                <MagicButton
                    title="شماره تماس من"
                    icon={<FaPhone className="rotate-90 cursor-pointer" />}
                    position="right"
                    href="https://alirezatalebizadeh.ir/"
                />
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    تقدیم به نگاه گرمتون {new Date().getFullYear()}. علیرضا طالبی زاده ❤🔥
                </p>

                <div className="flex items-center my-4 md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <div
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <img src={info.img} alt="icons" width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
