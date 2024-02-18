import { Link } from "react-router-dom";
import { Button } from "../../button";

export const ShopsProducts = ({ id, img, btn, title, sav, price, star }) => {
  return (
    <>
      <Link to={`shops/${id}`}>
        <div className=" h-[380px] w-[265px] bg-about_us  pl-4 rounded-2xl gap-5 shadow-md">
          <div className="">
            <Button
              className="mt-4 text-white py-2 px-[20px] rounded-lg"
              variant="primary"
            >
              {btn}
            </Button>
          </div>
          <img
            className=" w-[200px] h-[200px] mx-auto object-cover "
            src={img}
            alt=""
          />
          <h1 className="font-bold text-texts text-xl pt-5">{title}</h1>
          <div className="flex gap-10 pt-6">
            <div className="flex gap-5 ">
              <p>{sav}</p>
              <p className="font-bold text-texts">{price}</p>
            </div>
            <img src={star} alt="" />
          </div>
        </div>
      </Link>
    </>
  );
};
