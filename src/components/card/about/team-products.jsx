import {InstagramIcon} from "../../../imgss/icons/instagram-icon"
import {FacebookIcon} from "../../../imgss/icons/facebook-icon"
import {TwiterIcon} from "../../../imgss/icons/twiter-icon"
import { Link } from "react-router-dom"

export const TeamProducts = ({id,img,name,text})=>{
    return (
        <>
       <Link to={`team/${id}`}>
       <div className=" h-[460px] w-[300px] rounded-[20px]   shadow-2xl mt-10 bg-[#F9F8F8] hover:bg-zinc-100 ">
           <img  className=" object-cover w-[350px] rounded-t-lg"  src={img} alt="" />
           <div className="p-6">
            <h1 className="font-bold font-Roboto text-texts text-2xl">{name}</h1>
            <div className=" flex  items-center justify-between">
            <p className=" font-yellowtail text-natural text-xl">{text}</p> 
             <div className="flex gap-3">
                <InstagramIcon/>
                <FacebookIcon/>
                <TwiterIcon/>
             </div>
            </div>
           </div>
        </div>
       </Link>
        </>
    )
}