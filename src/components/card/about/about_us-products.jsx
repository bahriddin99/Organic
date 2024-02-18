import React from "react";
import { Link } from "react-router-dom";

export const About_usProducts = ({ id, img, name }) => {
  return (
    <>
      <div>
        <Link to={`aboutus/${id}`}>
          <img
            className=" object-cover w-[270px] h-[270px] rounded-2xl"
            src={img}
            alt=""
          />
        </Link>
        <h1 className="text-center pt-3 font-bold text-white">{name}</h1>
      </div>
    </>
  );
};
