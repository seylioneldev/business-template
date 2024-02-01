import { Logo } from "./components/Logo/Logo";
import s from "./style.module.css";
import { useNavigate } from "react-router-dom"




export function Header({info}) {
  const navigate = useNavigate()



    return (
      <div className={`${s.container}`}>
        <div className={`${s.colonne1}`}>
          <div className={`${s.container1}`}>
            <Logo onClick={()=>navigate("/homepage")}  title="LOGO" ></Logo> 
          </div>
        </div>
        <div className={`${s.colonne2}`}>
          <div className={`${s.container2}`}>Search Bar</div>
        </div>
        <div className={`${s.colonne3}`}>
          <div onClick={()=>navigate("/products")} className={`${s.container3}`}>Products</div>
          <div onClick={()=>navigate("/about-us")} className={`${s.container3}`}>About us</div>
          <div onClick={()=>navigate("/contact-us")} className={`${s.container3}`}>Contact us </div>
        </div>
        <div className={`${s.colonne4}`}>
          <div  onClick={()=>navigate("/cart")} className={`${s.container4}`}>Cart</div>
          <div onClick={()=>navigate("/login")} className={`${s.container4}`}>Login</div>
          <div onClick={()=>navigate("/register")} className={`${s.container4}`}>Register</div>
        </div>
      </div>
    );
  }

