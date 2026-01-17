import React from "react";
import { Facebook, Twitter, Instagram, Send } from "lucide-react";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#1F2945] text-white pt-8 md:pt-12 pb-6 mt-auto">
      <div className="contaner w-[95%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="">
              <img src={logo} alt="" />
            </div>
            <div className="text-[16px] font-bold leading-tight text-left">
              Qurilishda texnik me'yorlash <br /> ilmiy-tadqiqot instituti
            </div>
          </div>
          <p className="text-xs text-white mb-4">
            Qurilish materiallari, mashina va mexanizmlari, ish turlari elektron
            portali
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Facebook className="w-5 h-5 text-blue-500 cursor-pointer" />
            <Send className="w-5 h-5 text-blue-400 cursor-pointer" />
            <Twitter className="w-5 h-5 text-sky-400 cursor-pointer" />
            <Instagram className="w-5 h-5 text-pink-500 cursor-pointer" />
          </div>
          <h1 className="font-normal text-xs mt-3 text-right text-white">
            All rights reserved © 2022
          </h1>
        </div>

        <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col sm:flex-row justify-around">
          <div className="mb-6 sm:mb-0">
            <h3 className="font-bold text-[20px] mb-4">Menu</h3>
            <ul className="space-y-2 text-sm text-white">
              <li className="hover:text-[#1890ff] transition-colors cursor-pointer">
                Qurilish materiallari
              </li>
              <li className="hover:text-[#1890ff] transition-colors cursor-pointer">
                Mashina mexanizmlar
              </li>
              <li className="hover:text-[#1890ff] transition-colors cursor-pointer">
                Qurilish ishlari
              </li>
              <li className="hover:text-[#1890ff] transition-colors cursor-pointer">
                Korxonalar
              </li>
              <li className="hover:text-[#1890ff] transition-colors cursor-pointer">
                Klassifikator
              </li>
              <li className="hover:text-[#1890ff] transition-colors cursor-pointer">
                Yangiliklar
              </li>
              <li className="hover:text-[#1890ff] transition-colors cursor-pointer">
                Aloqa
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-center mb-2">Yangiliklarga obuna</h3>
          <p className="text-xs text-white text-center mb-4">
            Emailingizni qoldiring
          </p>
          <div className="flex flex-col gap-2">
            <button className="w-full cursor-pointer bg-white text-[rgba(40,54,109,0.8)] py-2 rounded transition-colors hover:bg-[#1890ff] hover:text-white">
              Email kiriting
            </button>

            <button className="w-full cursor-pointer bg-[#0085FF] hover:bg-blue-600 py-2 rounded transition-colors">
              Obuna bo'lish
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
