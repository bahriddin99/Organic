import React from "react";
import { links } from "./data";
import { Link } from "react-router-dom";
import Logo from "../../imgss/home/LOGO.svg";
import { SearchIcon } from "../../imgss/icons/search-icon";
import { CardIcon } from "../../imgss/icons/card-icon";

export const Header = () => {
  return (
    <div className=" container flex  justify-center  justify-between items-center pt-10 font-bold text-texts">
      <div>
        <img src={Logo} alt="" />

      </div>
      {links.map((item) => (
        <Link key={item.path} to={item.path}>
          {item.name}
        </Link>
      ))}
      <div className="flex gap-3">
        <form className="relative">
          <input
            className="bg-input_bg w-[366px] h-[56px] rounded-full placeholder: text-texts pl-4 outline-none"
            type="text"
          />
          <div className="bg-search_bg w-[50px] h-[50px] rounded-full flex items-center justify-center absolute ml-[310px] mt-[-53px] ">
            <SearchIcon />
          </div>
        </form>
        <div className="w-[159px] h-[56px] rounded-full border-2 border-borders items-center flex ">
          <div className="bg-texts w-[48px] h-[48px] rounded-full flex items-center justify-center absolute ml-1 ">
           <CardIcon /> 
          </div>
          <h1 className="pl-16 font-bold text-texts">Cart (0)</h1>
        </div>
      </div>
    </div>
  );
};
