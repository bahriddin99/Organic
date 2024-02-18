import { Route, Routes } from "react-router-dom";
// import { Button } from "./components/button";
import { main_pages } from "./route/main-router";
import { LayoutMain } from "./layout/layout-main";
import { nanoid } from "nanoid";
import { CateroriesDetall } from "./pagess/deteall/caterodira-detall/caterories-detall";
import { OfferDetall } from "./pagess/deteall/caterodira-detall/offers-detall";
import { OrganicDetall } from "./pagess/deteall/caterodira-detall/organic-detall";
import { TeamDetall } from "./pagess/deteall/caterodira-detall/team-detall";
import { AboutusDetall } from "./pagess/deteall/caterodira-detall/aboutus-detall";
import { ShopsDeteall } from "./pagess/deteall/caterodira-detall/shops-deteall";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          {main_pages.map((route) => (
            <Route
              index={route.path ? false : true}
              key={nanoid()}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route path="/book/:id" element={<CateroriesDetall/>}></Route>
          <Route path="/offer/:id" element={<OfferDetall/>}></Route>
          <Route path="/organic/:id" element={<OrganicDetall/>}></Route>
          <Route path="/team/:id" element={<TeamDetall/>}></Route>
          <Route path="/aboutus/:id" element={<AboutusDetall/>}></Route>
          <Route path="/shops/:id" element={<ShopsDeteall/>}></Route>
          <Route />
        </Route>
      </Routes>
         
    </>
  );
}

export default App;

