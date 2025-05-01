import React from "react";
import Facebook from "../../assets/icons/facebook";
import Linkedin from "../../assets/icons/linkedin";
import Youtube from "../../assets/icons/youtube";
import Chaicodefooter from "../../assets/icons/chaicodefooter";
import { X } from "lucide-react";
import ChaicodeWhite from "../../assets/icons/chaicode-white";
import { FaArrowCircleUp } from "react-icons/fa";


const Footer = () => {
    return (
        <div className=" h-[80vh]  w-full bg-[#0C111D]  lg:h-[100vh] xl:h-[75vh] 1xl:h-[68vh] 2xl:h-[65vh]">
            <div className="relative z-[10] w-full  p-[30px] lg:justify-between lg:flex font-mona md:p-[36px] lg:gap-4 lg:px-[40px] lg:pb-0 lg:pt-[40px] xl:px-[80px] 2xl:px-[80px] 2xl:pt-[64px]">
                <div className="mb-6 flex flex-col lg:w-full gap-4 lg:justify-between">
                    <div className="flex flex-col text-white">
                        <div className="text-[24px] font-medium text-white font-expanded">
                            <ChaicodeWhite />
                        </div>
                        <div>
                            Home for programmers
                        </div>
                    </div>
                    <div className="flex lg:flex-row lg:gap-10 flex-col gap-3 text-white xl:w-1/2">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[9px] text-[12px] font-normal lg:text-[16px]">
                            <Facebook /> Facebook
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[9px] text-[12px] font-normal lg:text-[16px]">
                            <X /> X
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[9px] text-[12px] font-normal lg:text-[16px]">
                            <Linkedin /> LinkedIn
                        </a>
                        <a href="https://www.youtube.com/@talentcogent" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[9px] text-[12px] font-normal lg:text-[16px]">
                            <Youtube /> Youtube
                        </a>
                    </div>
                </div>
                <div className="flex w-full xl:justify-between xl:gap-[64px]">
                    {/* Products Links Sections */}
                    <div className="flex flex-col gap-3 text-white ">
                        <div className="text-[24px] font-medium font-expanded text-[#EF6820]">Products</div>
                        <div className="flex flex-col gap-3">
                            <a href="/" className="text-[12px] font-normal lg:text-[16px]  hover:text-[#EF6820]">Courses</a>
                            <a href="/training" className="text-[12px] font-normal lg:text-[16px]  hover:text-[#EF6820]">Cohort</a>
                            <a href="/services/it-services" className="text-[12px] font-normal lg:text-[16px]  hover:text-[#EF6820]">Coding Hero</a>
                            <a href="/services/recruitment-services" className="text-[12px] font-normal lg:text-[16px]  hover:text-[#EF6820]">Free APIs</a>
                            <a href="/contact" className="text-[12px] font-normal lg:text-[16px]  hover:text-[#EF6820]">Masterji</a>
                        </div>
                    </div>

                    {/* Recource Link  Section */}
                    <div className="flex w-full flex-col gap-3 text-white ">
                        <div className="text-[24px] font-medium font-expanded text-[#EF6820]">Resources</div>
                        <div className="flex flex-col gap-3">
                            <a href="/" className="text-[12px] font-normal lg:text-[16px] hover:text-[#EF6820]">Docs</a>
                            <a href="/training" className="text-[12px] font-normal lg:text-[16px] hover:text-[#EF6820]">Privacy Policy</a>
                            <a href="/services/it-services" className="text-[12px] font-normal lg:text-[16px] hover:text-[#EF6820]">Pricing Policy</a>
                            <a href="/services/recruitment-services" className="text-[12px] font-normal lg:text-[16px] hover:text-[#EF6820]">Refund Policy</a>
                            <a href="/contact" className="text-[12px] font-normal lg:text-[16px] hover:text-[#EF6820]">Terms of Services</a>
                        </div>
                    </div>

                </div>
            </div>
            {/* Footer Bottom SVG */}
            <div className="mt-20 lg:flex flex items-center justify-center  md:flex">
                <div className="w-[360px] md:w-[700px] lg:w-[1200px] h-full">
                    <Chaicodefooter />
                </div>
            </div>
           
        </div>
    );
};

export default Footer;
