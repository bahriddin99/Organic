import { aboutus } from "../../../data/about/about";
import { useParams } from "react-router-dom";


export const AboutusDetall = ()=>{
    const {id} = useParams();
    const data = aboutus.find((item)=> item.id ==id)
    return (
        <>
        
         <div>
          <img
            className=" object-cover w-[270px] h-[270px] rounded-2xl"
            src={data.img}
            alt=""
          />
        <h1 className="text-center pt-3 font-bold text-white">{data.name}</h1>
      </div>
      
        </>
    )
}