import { useDispatch, useSelector } from 'react-redux';
import s from './style.module.css'
import { useNavigate } from "react-router-dom"
import { BusinessUserAPI } from '../../../../api';
import { addUser, setUserList } from '../../../../store/user-slice/user-slice';




export function BodyContainer({}){



    const navigate = useNavigate()

    async function sendUser(user) {

    try {
              const checkUser = await BusinessUserAPI.identifyUser(user);
        console.log('Works Fine !', checkUser);
        navigate("/dashboard");

    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }

    }

    const submit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const user = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
      sendUser(user)
    };
  

    // const dispatch = useDispatch()

    // const loginUser = async (user) => {
    //   try {
    //     const userData = await BusinessUserAPI.identifyUser(user);

    //     // Dispatch l'action pour mettre à jour le store
    //     dispatch(setUserList(userData)); // Mise à jour de l'ensemble des utilisateurs
    //     dispatch(addUser(userData)); // Ajout de l'utilisateur actuel au store
    //     // ... Autres traitements si nécessaire
    //   } catch (error) {
    //     console.error("Erreur lors de la connexion :", error);
    //     // Gérer les erreurs si nécessaire
    //   }
    // }
    // const submit = async (e) => {
    //   e.preventDefault();
    //   const formData = new FormData(e.currentTarget);
    //   const user = {
    //     email: formData.get("email"),
    //     password: formData.get("password"),
    //   };
    //   console.log('Works Fine !', user);
    //   await loginUser(user);
    // };


    return(
        <div className={`${s.container}`}>
        <form className={`${s.form}`  } onSubmit={submit} >
          <p className={`${s.title}`}>Login </p>


  
          <label>
            <input
              required=""
              placeholder=""
              type="email"
              className={`${s.input}`}
              name="email"
            />
            <span>Email</span>
          </label>
  
          <label>
            <input
              required=""
              placeholder=""
              type="password"
              className={`${s.input}`}
              name="password"
            />
            <span>Password</span>
          </label>
          <button className={`${s.submit}`} type="submit" >
            Login
          </button>
          <div className={`${s.signin}`}>
            You don't have an account ? <div onClick={()=>navigate("/register")}>Register</div>
          </div>
        </form>
      </div>
        )}