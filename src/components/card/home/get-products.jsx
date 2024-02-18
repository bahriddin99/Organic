

export const GetProducts = ({id,img, h1, h2, titles, title})=>{
    return <div className=" relative">
    <img className=" rounded-3xl"  src={img} alt="" />
    <div className=" absolute top-0 pt-24 pl-9">
    <h1 className=" font-yellowtail text-white text-2xl">{h1}</h1>
    <p className="font-bold text-[40px] text-white w-[280px]">{title}</p>
    <h2 className=" font-yellowtail text-2xl text-natural">{h2}</h2>
    <p className="font-bold text-[40px] w-[280px] text-texts">{titles}</p>
    </div>

    </div>
}