import { Team } from "../../../data/about/about"
import { useParams } from "react-router-dom"
import { InstagramIcon } from "../../../imgss/icons/instagram-icon"
import { FacebookIcon } from "../../../imgss/icons/facebook-icon"
import { TwiterIcon } from "../../../imgss/icons/twiter-icon"



export const TeamDetall =()=>{
  const {id} = useParams()
  const data = Team.find((item)=> item.id == id)

    return (
        <>
         <div className=" h-[460px] w-[300px] rounded-[20px]   shadow-2xl mt-10 bg-[#F9F8F8] hover:bg-zinc-100 ">
           <img  className=" object-cover w-[350px] rounded-t-lg"  src={data.img} alt="" />
           <div className="p-6">
            <h1 className="font-bold font-Roboto text-texts text-2xl">{data.name}</h1>
            <div className=" flex  items-center justify-between">
            <p className=" font-yellowtail text-natural text-xl">{data.text}</p> 
             <div className="flex gap-3">
                <InstagramIcon/>
                <FacebookIcon/>
                <TwiterIcon/>
             </div>
            </div>
           </div>
        </div>
        </>
    )
}