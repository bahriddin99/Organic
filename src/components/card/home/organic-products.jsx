import { Link } from "react-router-dom"
import { Button } from "../../button"

export const OrganicProducts = ({id,img,btn})=>{
    return (
        <>
        <Link to={`organic/${id}`}>
        <div>
            <img src={img} alt="" className="object-cover" />
            <Button className="bg-white py-4 px-7 font-bold text-texts rounded-xl top-0 mt-[270px] ml-[140px] absolute">{btn}</Button>
        </div>
        </Link>
        </>
    )
}