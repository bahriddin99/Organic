import { useParams } from "react-router-dom";
import { Button } from "../../../components/button";
import { organic } from "../../../data/home/home";
import { categories } from "../../../data/home/home";
import { CategoriesProduct } from "../../../components/card/home/Categories-product";
import star from "../../../imgss/home/Our Products/start.svg";

export const OrganicDetall = () => {
  const { id } = useParams();
  const data = organic.find((item) => item.id == id);

  return (
    <>
      <div className="flex gap-14">
        <div className="mt-16 mb-16">
          <img
            src={data.img}
            alt=""
            className="object-cover w-[400px] h-[380px] ml-10"
          />
          <Button className="bg-white py-4 px-7 font-bold text-texts rounded-xl top-0 mt-[300px] ml-[140px] absolute">
            {data.btn}
          </Button>
        </div>
        <div className="pt-24">
          <h1 className="text-3xl font-Roboto text-texts font-bold pb-2">
            Health Pistachios
          </h1>
          <img src={star} alt="" className="pb-3" />
          <div className="flex gap-3">
            <p>$20.00</p>
            <p className="font-bold text-texts">$13.00</p>
          </div>
          <p className="pt-3 pb-3">
            Simply dummy text of the printing and typesetting industry. Lorem
            had <br /> ceased to been the industry's standard dummy text ever
            since the 1500s, <br /> when an unknown printer took a galley.
          </p>
          <div className="flex gap-4 items-center">
            <h1 className="font-bold text-texts">Quantity :</h1>
            <Button className=" px-7 py-3 rounded-xl border-2 border-texts bg-white">
              1
            </Button>
            <Button
              variant="primary"
              className="text-white font-bold py-3 px-5 rounded-xl"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-5 text-center items-center justify-center">
          <Button
            variant="primary"
            className="font-bold text-white px-4 py-3 rounded-xl"
          >
            Product Description
          </Button>
          <Button className="font-bold  bg-slate-200 px-4 py-3 rounded-xl">
            Additional Info
          </Button>
        </div>
        <p className="text-center pt-3 text-lorem">
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, <br />{" "}
          ecology, and care. We aim to give our customers a healthy
          chemical-free meal for perfect nutrition. It offers about 8–10% carbs.
          Simple <br /> sugars — such as glucose and fructose — make up 70% and
          80% of the carbs in raw.
        </p>
      </div>

      <div className="container">
        <h1 className="font-bold text-4xl text-texts text-center pt-7">
          Related Products
        </h1>
        <div className="flex gap-6 pt-9 pb-20">
          {categories.slice(0, 4).map((item) => (
            <CategoriesProduct key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
