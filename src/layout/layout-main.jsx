import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Outlet } from "react-router-dom";

export const LayoutMain = () => {
  return (
    <div className="flex justify-center justify-between flex-col">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
