

export const NewProducts = ({id, img, nov})=>{
    return (
        <>
        <div className="relative">
            <img src={img} alt="" />
            <h1 className="w-[82px] h-[82px] rounded-full text-texts flex items-center justify-center font-bold text-2xl pl-5 absolute top-0 ml-11 mt-11 bg-white">{nov}</h1>
        </div>
        
        </>
    )
}