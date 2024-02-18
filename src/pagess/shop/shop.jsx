import React from "react";
import bannershop from "../../imgss/shops/bannershop.png";
import { shops } from "../../data/shop/shop";
import { ShopsProducts } from "../../components/card/shop/shops-products";

export const Shop = () => {
  return (
    <div className=" relative">
      <img className="pt-11" src={bannershop} alt="" />
      <h1 className="text-texts font-bold font-Roboto text-6xl absolute top-0 pl-[610px] pt-[130px]">
        Shop
      </h1>
      <div className="grid grid-cols-4 container pt-24 gap-7 pb-36">
        {shops.map((item) => (
          <ShopsProducts
            key={item.id}
            id={item.id}
            img={item.img}
            btn={item.btn}
            title={item.title}
            sav={item.sav}
            price={item.price}
            star={item.star}
          />
        ))}
      </div>
    </div>
  );
};
