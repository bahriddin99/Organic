import React from "react";
import banner from "../../imgss/about/banner.png";
import about from "../../imgss/about/abouts.svg";
import { Button } from "../../components/button";
import about_us1 from "../../imgss/about/1.svg";
import about_us2 from "../../imgss/about/2.svg";
import { VektorIcon } from "../../imgss/icons/vektor-icon";
import choose from "../../imgss/about/choose.svg";
import { policy } from "../../data/about/about";
import { AboutPolicy } from "../../components/card/about/about-policy";
import { Team } from "../../data/about/about";
import { TeamProducts } from "../../components/card/about/team-products";
import { aboutus } from "../../data/about/about";
import { About_usProducts } from "../../components/card/about/about_us-products";

export const About = () => {
  return (
    <>
      <div className="pt-11 relative">
        <img src={banner} alt="" />
        <h1 className="font-bold text-texts text-5xl absolute top-0 pt-[200px] pl-[570px]">
          About Us
        </h1>
      </div>

      <section className="About Us">
        <div className="container">
          <div className="flex gap-3">
            <img
              src={about}
              alt=""
              className="object-cover h-[660px] pl-[-140px]"
            />

            <div className="pt-28 mb-16">
              <p className="text-natural font-yellowtail text-xl">About Us</p>
              <h1 className="font-bold text-texts text-4xl pt-5">
                We do Creative <br />
                Things for Success
              </h1>
              <h2 className="text-lorem pt-5">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to <br /> been the industry's standard dummy
                text ever since the 1500s, when an unknown <br /> printer took a
                galley.
              </h2>

              <div className="flex items-center">
                <div className="flex items-center gap-5 pt-5">
                  <img src={about_us1} alt="" className="w-[50px] h-[50px]" />
                  <h1 className="font-bold text-texts pb-3 text-[]">
                    Modern Agriculture Equipment
                  </h1>
                  <div></div>
                </div>

                <div className="flex items-center gap-5 pt-5">
                  <img src={about_us2} alt="" className="w-[50px] h-[50px]" />
                  <div>
                    <h1 className="font-bold text-texts pb-3 text-[18px]">
                      No growth hormones are used
                    </h1>
                  </div>
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
        </div>
      </section>

      <section className="Why Choose us? bg-about_us">
        <div className="container  pt-32 ">
          <div className="flex gap-7">
            <div>
              <p className=" text-natural font-yellowtail text-xl">
                Why Choose us?
              </p>
              <h1 className=" font-bold text-texts text-5xl font-Roboto pt-3">
                We do not buy from the <br /> open market & traders.
              </h1>
              <p className="text-lorem pt-3">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased <br /> to been the industry's standard the
                1500s, when an unknown
              </p>
              <div className="w-[300px] h-[80px] bg-[#ECECEC] mt-4 rounded-full flex items-center pl-5 gap-3">
                <div className="w-[18px] h-[18px] rounded-full border-2 border-natural"></div>
                <h2 className="font-bold text-texts font-Roboto">
                  100% Natural Product
                </h2>
              </div>
              <p className="text-lorem  pl-16 pt-3">
                Simply dummy text of the printing and typesetting <br />{" "}
                industry Lorem Ipsum
              </p>

              <div className="w-[300px] h-[80px] bg-[#ECECEC] mt-4 rounded-full flex items-center pl-5 gap-3">
                <div className="w-[18px] h-[18px] rounded-full border-2 border-natural"></div>
                <h2 className="font-bold text-texts font-Roboto">
                  {" "}
                  Increases resistance
                </h2>
              </div>
              <p className="text-lorem  pl-16 pt-3">
                Filling, and temptingly healthy, our Biona Organic <br />
                Granola with Wild Berries is just the thing
              </p>
            </div>
            <img
              className=" object-cover w-[570px] h-[500px]"
              src={choose}
              alt=""
            />
          </div>

          <div className="grid grid-cols-4 gap-4 ">
            {policy.map((item) => (
              <AboutPolicy
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="Team">
        <div className="container pt-36 pb-36">
          <div className="text-center">
            <p className="text-natural font-yellowtail text-xl">Team</p>
            <h1 className="text-texts font-bold font-Roboto text-4xl">
              Our Organic Experts
            </h1>
            <p className="text-lorem  pt-3 font-Roboto">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's <br /> standard dummy text ever
              since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="grid grid-cols-3">
            {Team.map((item) => (
              <TeamProducts
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="About Us bg-texts">
        <div className="container pb-28">
          <div className="text-center pt-32 ">
            <p className="text-natural font-yellowtail text-xl"> About Us</p>
            <h1 className="font-bold font-Roboto text-4xl text-white">What We Offer for You</h1>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-10 ">
            {aboutus.map((item)=>(
              <About_usProducts key={item.id} id={item.id} img={item.img} name={item.name}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
