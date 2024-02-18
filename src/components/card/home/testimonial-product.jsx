export const TestimonialProduct = ({ id, img, star, title, name, lorem }) => {
  return (
    <>
      <div className="text-center w-[780px] ml-auto mr-auto ">
        <div className="item center ml-[340px]">
          <img src={img} alt="" />
          <img className=" ml-[15px]" src={star} alt="" /> 
        </div>
        <p className="text-lorem">{title}</p>
        <h2 className="font-bold text-texts text-2xl">{name}</h2>
        <p className="text-lorem">{lorem}</p>
      </div>
    </>
  );
};
