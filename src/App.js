import s from "./style.module.css";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { BodyContainer } from "./pages/Products/components/Body-Container/BodyContainer";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />    
      <Outlet />
      <Footer/>
 
    </>
  );
}

export default App;
