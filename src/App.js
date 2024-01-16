import s from "./style.module.css";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { BodyContainer } from "./pages/Products/components/Body-Container/BodyContainer";

function HomePage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default HomePage;
