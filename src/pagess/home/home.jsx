import React from "react";
import { Button } from "../../components/button";
import img from "../../imgss/home/Banner.jpg";
import { VektorIcon } from "../../imgss/icons/vektor-icon";
import { Get } from "../../data/home/home";
import { GetProducts } from "../../components/card/home/get-products";
import about from "../../imgss/home/about-us.svg";
import about1 from "../../imgss/home/get/Iconn.svg";
import about2 from "../../imgss/home/get/Iconns.svg";
import { categories } from "../../data/home/home";
import { CategoriesProduct } from "../../components/card/home/Categories-product";
import imgss from "../../imgss/home/tstimonial.jpg";
import { testimonial } from "../../data/home/home";
import { TestimonialProduct } from "../../components/card/home/testimonial-product";
import { offers } from "../../data/home/home";
import { OfferProducts } from "../../components/card/home/offers-products";
import eco from "../../imgss/home/Eco.svg";
import { organic } from "../../data/home/home";
import { OrganicProducts } from "../../components/card/home/organic-products";
import { News } from "../../data/home/home";
import { NewProducts } from "../../components/card/home/new-products";
import { Contact } from "../../imgss/icons/contact-icon";

import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Home = () => {
  return (
    <>
      <section className="pt-8 w-full ">
        <div className="">
          <div className="relative">
            <img src={img} alt="" />
          </div>
          <div className="  absolute top-0 pt-[280px] pl-14">
            <h2 className="text-natural font-yellowtail text-2xl">
              100% Natural Food
            </h2>
            <h1 className="text-6xl font-bold text-texts pt-5 pb-5">
              Choose the best <br /> healthier way <br /> of life
            </h1>
            <Button
              variant="secondary"
              className="font-bold  w-[180px] h-[59px] rounded-lg text-xl  relative text-texts flex items-center pl-3 justify-center justify-between"
            >
              Explore Now <VektorIcon />
            </Button>
          </div>
        </div>
      </section>

      <section className="Get pt-36 pb-36 container ">
        <div className=" flex gap-6 ">
          {Get.map((item) => (
            <GetProducts {...item}/>
          ))}
        </div>
      </section>

      <section className="About Us bg-about_us">
        <div className="grid grid-cols-2">
          <img src={about} alt="" className=" " />
          <div className="pt-28 mb-16">
            <p className="text-natural font-yellowtail text-xl">About Us</p>
            <h1 className="font-bold text-texts text-5xl pt-5">
              We Believe in Working <br />
              Accredited Farmers
            </h1>
            <h2 className="text-lorem pt-5">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to <br /> been the industry's standard dummy text ever
              since the 1500s, when an unknown <br /> printer took a galley.
            </h2>
            <div className="flex items-center gap-5 pt-5">
              <img src={about1} alt="" className="w-[80px] h-[80px]" />
              <div>
                <h1 className="font-bold text-texts pb-3 text-xl">
                  Organic Foods Only
                </h1>
                <p>
                  Simply dummy text of the printing and typesetting <br />{" "}
                  industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 pt-5">
              <img src={about2} alt="" className="w-[80px] h-[80px]" />
              <div>
                <h1 className="font-bold text-texts pb-3 text-xl">
                  Quality Standards
                </h1>
                <p>
                  Simply dummy text of the printing and typesetting <br />{" "}
                  industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="felx items-center ">
              <Button
                variant="primary"
                className=" relative  text-white w-[160px] h-[60px] rounded-xl pr-7  mt-4"
              >
                Shop Now{" "}
              </Button>
              <div className="absolute mt-[-38px]">
                <VektorIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Our Products pt-40 pb-40">
        <div className="container ">
          <p className="text-natural font-yellowtail text-3xl text-center">
            Categories{" "}
          </p>
          <h1 className="font-bold text-texts text-5xl text-center">
            Our Products
          </h1>
          <div className="grid grid-cols-4 gap-10 pt-28">
            {categories.map((item) => (
              <CategoriesProduct
               {...item}
              />
            ))}
          </div>

          <div className="text-center mt-28 relative">
            <Button
              variant="primary"
              className="text-white font-bold py-3 px-9 pl-4 rounded-xl "
            >
              {" "}
              Load More
            </Button>
            <div className="pl-[503px] absolute mt-[-31px]">
              <VektorIcon />
            </div>
          </div>
        </div>
      </section>

      <section className="Testimonial relative">
        <div className=" relative">
          <img src={imgss} alt="" className="" />
        </div>
        <div className="text-center absolute mt-[-800px] ml-[460px]">
          <h2 className="text-natural font-yellowtail text-xl">Testimonial</h2>
          <h1 className="text-texts font-bold text-4xl">
            What Our Customer Saying?
          </h1>
        </div>
        <div className="absolute text-center top-0 left-0 right-0 mt-[250px] ml-[70px]">
          <Slider {...settings}>
            {testimonial.map((item) => (
              <TestimonialProduct
              {...item}
              />
            ))}
          </Slider>
        </div>
        <div className="flex gap-11 absolute mt-[-250px] ml-[270px]">
          <div className="w-[170px] h-[170px] border-4 border-border  rounded-full flex items-center justify-center ">
            <div className="w-[148px] h-[148px] rounded-full bg-[#F1F1F1]">
              <h1 className="font-bold text-texts text-5xl flex item center justify-center mt-9">
                100%
              </h1>
              <p className="text-center font-bold text-texts ">Organic</p>
            </div>
          </div>
          <div className="w-[170px] h-[170px] border-4 border-border  rounded-full flex items-center justify-center ">
            <div className="w-[148px] h-[148px] rounded-full bg-[#F1F1F1]">
              <h1 className="font-bold text-texts text-5xl flex item center justify-center mt-9">
                285
              </h1>
              <p className="text-center font-bold text-texts ">
                Active Product
              </p>
            </div>
          </div>
          <div className="w-[170px] h-[170px] border-4 border-border  rounded-full flex items-center justify-center ">
            <div className="w-[148px] h-[148px] rounded-full bg-[#F1F1F1]">
              <h1 className="font-bold text-texts text-5xl flex item center justify-center mt-9">
                350+
              </h1>
              <p className="text-center font-bold text-texts ">
                Organic Orchads
              </p>
            </div>
          </div>
          <div className="w-[170px] h-[170px] border-4 border-border  rounded-full flex items-center justify-center ">
            <div className="w-[148px] h-[148px] rounded-full bg-[#F1F1F1]">
              <h1 className="font-bold text-texts text-5xl flex item center justify-center mt-9">
                25+
              </h1>
              <p className="text-center font-bold text-texts ">
                Years of Farming
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="Offer bg-texts pb-28">
        <div className="container">
          <p className="text-natural text-xl font-yellowtail pt-28">Offer</p>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-3xl text-white">
              We Offer Organic For You
            </h1>
            <div className=" relative ">
              <Button className="py-5 px-14 rounded-xl font-bold text-texts pl-4">
                View All Product{" "}
              </Button>
              <div className="top-0 absolute ml-6 mt-6">
                <VektorIcon />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-5">
            {offers.map((item) => (
              <OfferProducts
              {...item}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="Eco Friendly">
        <div className="flex">
          <img
            src={eco}
            alt=""
            className=" w-[593px] top-0 left-0 pt-[-100px] "
          />
          <div className="w-[450px] h-[390px] bg-white shadow-xl rounded-xl mt-[100px] ml-[-90px] shodo">
            <div className="p-9">
              <p className="font-yellowtail text-natural">Eco Friendly</p>
              <h1 className="font-bold  text-4xl text-texts">
                Econis is a Friendly <br />
                Organic Store
              </h1>
              <h2 className="font-bold  text-texts pt-2">
                Start with Our Company First
              </h2>
              <p className="text-lorem text-[12px] pt-1">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
              </p>

              <h2 className="font-bold  text-texts pt-2">
                Learn How to Grow Yourself
              </h2>
              <p className="text-lorem text-[12px] pt-1">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
              </p>

              <h2 className="font-bold  text-texts pt-2">
                Farming Strategies of Today
              </h2>
              <p className="text-lorem text-[12px] pt-1 ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="Organic bg-[#F1F8F4]">
        <div className="grid grid-cols-3 gap-7 rounded-md relative pt-28 pb-28">
          {organic.map((item) => (
            <OrganicProducts
              key={item.id}
              id={item.id}
              img={item.img}
              btn={item.btn}
            />
          ))}
        </div>
      </section>

      <section className="News pt-24 pb-52">
        <div className="container">
          <p className="text-natural font-yellowtail text-xl">News</p>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-texts text-4xl">
              Discover weekly content about <br /> organic food, & more
            </h1>
            <div className=" relative ">
              <Button className="py-5 px-14 rounded-xl font-bold text-texts pl-5 bg-white border-2 border-texts">
                More News{" "}
              </Button>
              <div className="top-0 absolute  mt-[25px]">
                <VektorIcon />
              </div>
            </div>
          </div>

          <div className="flex gap-28 pt-14 relative">
            {News.map((item) => (
              <NewProducts
                key={item.id}
                id={item.id}
                img={item.img}
                nov={item.nov}
              />
            ))}
          </div>
          <div>
            <div className="w-[470px] h-[260px] bg-white rounded-xl ml-9  absolute mt-[-200px] shadow-xl ">
              <div className="ml-7 mt-8">
                <div className="flex items-center gap-2">
                  <Contact />
                  <p> By Rachi Card</p>
                </div>
                <h1 className="font-bold text-xl text-texts pt-2">
                  The Benefits of Vitamin D & How to Get It
                </h1>
                <p className="text-lorem pt-2">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
                <div className=" relative  mt-4">
              <Button className="py-5 px-14 rounded-xl font-bold text-texts pl-8">
              Read More{" "}
              </Button>
              <div className="top-0 absolute  mt-6">
                <VektorIcon />
              </div>
            </div>
              </div>
            </div>


            <div className="w-[470px] h-[260px] bg-white rounded-xl ml-[690px]  absolute mt-[-200px] shadow-xl ">
              <div className="ml-7 mt-8">
                <div className="flex items-center gap-2">
                  <Contact />
                  <p> By Rachi Card</p>
                </div>
                <h1 className="font-bold text-xl text-texts pt-2">
                Our Favourite Summertime Tommeto
                </h1>
                <p className="text-lorem pt-2">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
                <div className=" relative  mt-4">
              <Button className="py-5 px-14 rounded-xl font-bold text-texts pl-8">
              Read More{" "}
              </Button>
              <div className="top-0 absolute  mt-6">
                <VektorIcon />
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
