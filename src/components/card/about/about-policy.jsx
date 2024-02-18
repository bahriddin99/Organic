import { Link } from "react-router-dom";

export const AboutPolicy = ({ id, img, name, text }) => {
  return (
    <>
      <Link>
        <div className="w-[257px] h-[300px] bg-white items-center flex flex-col mt-14 rounded-2xl pt-10 mb-36 shodow-xl">
          <img src={img} alt="" />
          <h1 className=" font-Roboto font-bold pt-4 text-xl text-texts">
            {name}
          </h1>
          <p className="text-center pt-5 text-lorem">{text}</p>
        </div>
      </Link>
    </>
  );
};
