import { Button } from "../../../components/button";
import { shops } from "../../../data/shop/shop";
import { useParams } from "react-router-dom";
import React from "react";


export const ShopsDeteall = ()=>{
    const {id} = useParams()

    const data = shops.find((item)=> item.id==id )
    
    
  
    return(
        <>
        <div className=" w-[300px] h-[450px] bg-about_us  pl-4 rounded-2xl gap-5 mt-5 ml-10 mb-28">
          <div className="">
            <Button
              className="mt-4 text-white py-2 px-[20px] rounded-lg"
              variant="primary"
            >
              {data.btn}
            </Button>
          </div>
          <img className=" " src={data.img} alt="" />
          <h1 className="font-bold text-texts text-xl pt-5">{data.title}</h1>
          <div className="flex gap-10 pt-6">
            <div className="flex gap-5 ">
              <p>{data.sav}</p>
              <p className="font-bold text-texts">{data.price}</p>
            </div>
            <img src={data.star} alt="" />
          </div>
        </div>
        </>
    )
}