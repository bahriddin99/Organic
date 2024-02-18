import React from "react";
import footer from "../../imgss/home/footer.svg";
import { Button } from "../../components/button";
import Logo from "../../imgss/home/LOGO.svg";
import { InstagramIcon } from "../../imgss/icons/instagram-icon";
import { FacebookIcon } from "../../imgss/icons/facebook-icon";
import { TwiterIcon } from "../../imgss/icons/twiter-icon";
import { PrintrestIcon } from "../../imgss/icons/printrest-icon";

export const Footer = () => {
  return (
    <>
      <div className="container">
        <div>
          <img src={footer} alt="" />
          <form className=" relative">
            <div className="absolute flex mt-[-200px] items-center items-center  gap-52 justify-between pl-10">
              <h1 className="font-bold text-white text-5xl">
                Subscribe to <br /> our Newsletter
              </h1>
              <div className=" flex items-center gap-3">
                <input
                  className="bg-input_bg w-[349px] h-[80px] rounded-2xl outline-none pl-6  "
                  type="text"
                  placeholder="Your Email Address"
                />
                <Button
                  variant="primary"
                  className="w-[220px] h-[80px] bg-texts rounded-2xl font-bold text-white text-xl"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="pt-32 flex justify-center justify-between ">
          <div className=" flex flex-col  gap-5">
            <h1 className="font-bold text-texts text-3xl">Contact Us</h1>
            <div>
              <p className="font-bold text-texts">Email</p>
              <p>needhelp@Organia.com</p>
            </div>
            <div>
              <p className="font-bold text-texts">Phone</p>
              <p>666 888 888</p>
            </div>
            <div>
              <p className="font-bold text-texts">Address</p>
              <p>88 road, borklyn street, USA</p>
            </div>
          </div>

          <div className="text-center ">
            <div className="ml-[104px] text-center">
              <img src={Logo} alt="" />
            </div>
            <p className="pt-7 text-lorem">
              Simply dummy text of the printing and typesetting industry. <br />{" "}
              Lorem Ipsum simply dummy text of the printing
            </p>

            <div className=" flex items-center justify-center gap-5 pt-10">
              <div className="w-[60px] h-[60px] bg-input_bg rounded-full flex items-center justify-center">
                {" "}
                <InstagramIcon />
              </div>
              <div className="w-[60px] h-[60px] bg-input_bg rounded-full flex items-center justify-center">
                <FacebookIcon />
              </div>
              <div className="w-[60px] h-[60px] bg-input_bg rounded-full flex items-center justify-center">
                {" "}
                <TwiterIcon />
              </div>
              <div className="w-[60px] h-[60px] bg-input_bg rounded-full flex items-center justify-center">
                {" "}
                <PrintrestIcon />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-texts text-3xl ">Utility Pages</h1>
              <p>Style Guide</p>
              <p>404 Not Found</p>
              <p>Password Protected</p>
              <p>Licences</p>
              <p>Changelog</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-slate-600 mt-24">
        <h1 className="text-center pt-3 pb-3 text-lorem flex justify-center">
          Copyright © <p className="font-bold">Organick</p> | Designed by{" "}
          <p className="font-bold">VictorFlow</p> Templates - Powered by{" "}
          <p className="font-bold">Webflow</p>{" "}
        </h1>
      </div>
    </>
  );
};
