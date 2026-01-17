import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Search,
  Bookmark,
  Bell,
  User,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import logo from "../../assets/images/logo.png";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `pb-1 border-b-2 transition-colors whitespace-nowrap ${
      isActive
        ? "border-blue-400 text-blue-400"
        : "border-transparent hover:text-gray-300"
    }`;

  return (
    <div className="bg-[#1F2945] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-[1170px] w-[90%] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="">
            <img src={logo} alt="" />
          </div>

          <div className="hidden md:block leading-tight text-xs md:text-sm font-semibold">
            Qurilishda texnik me'yorlash <br />
            va standartlashtirish instituti
          </div>

          <div className="md:hidden font-bold text-sm">Qurilish Vazirligi</div>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <Search className="w-5 h-5 cursor-pointer opacity-80" />

          <div className="relative hidden sm:block">
            <Bookmark className="w-5 h-5 cursor-pointer opacity-80" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-[10px] px-1 rounded-full">
              3
            </span>
          </div>

          <div className="relative">
            <Bell className="w-5 h-5 cursor-pointer opacity-80" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-[10px] px-1 rounded-full">
              4
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer opacity-80">
            <User className="w-5 h-5" />
            <div className="hidden lg:block text-xs text-right">
              <div>Kirish</div>
              <div>Ro'yxatdan o'tish</div>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded cursor-pointer">
            <span className="text-xs md:text-sm">uz</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>
      </div>

      <div className="bg-[#2D3B5E] border-t border-white/10">
        <div className="max-w-[1170px] w-[90%] mx-auto px-4">
          <nav className="flex items-center gap-6 md:gap-8 overflow-x-auto text-sm py-3 scrollbar-hide">
            <NavLink to="/" end className={linkClass}>
              Materiallar va buyumlar
            </NavLink>
            <NavLink to="/list" className={linkClass}>
              Klassifikator (List)
            </NavLink>
            <NavLink to="/machines" className={linkClass}>
              Mashina mexanizmlar
            </NavLink>
            <button className={linkClass + " opacity-70"}>
              Qurilish ishlari
            </button>
            <button className={linkClass + " opacity-70"}>
              Uskuna va qurilmalar
            </button>
            <button className={linkClass + " opacity-70"}>Korxonalar</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
