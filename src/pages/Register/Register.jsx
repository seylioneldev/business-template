import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { addUser, setUserList } from "../../store/user-slice/user-slice";
import { BusinessUserAPI } from "../../api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


export function Register({}) {
  const dispatch = useDispatch();
  const userList = useSelector((store) => store.USER.userList);
  const navigate = useNavigate()



  async function createUser(user) {

    const newUser = await BusinessUserAPI.create(user);
    
  }



  function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
    //   passwordConfirm: formData.get("passwordConfirm") // Si nécessaire
    };

    dispatch(addUser(user))
    createUser(user); // Appelle createUser avec les données du formulaire

  }



  // const dispatch = useDispatch()
  // const userList = useSelector((store)=>store.USER.userList)

  // async function fetchAllUser(){
  //   const userList = await BusinessUserAPI.create()
  //   dispatch(setUserList(userList))
  //   console.log(userList)

  // }

  // useEffect(() => {
  //   fetchAllUser()
  // }, [dispatch]);

  return (
    <div className={`${s.container}`}>
      <form className={`${s.form}` } onSubmit={submit}>
        <p className={`${s.title}`}>Register </p>
        <p className={`${s.message}`}>
          Signup now and get full access to our app.{" "}
        </p>
        <div className={`${s.flex}`}>
          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className={`${s.input}`}
              name="firstname"
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className={`${s.input}`}
              name="lastname"
            />
            <span>Lastname</span>
          </label>
        </div>

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
        <label>
          <input
            required=""
            placeholder=""
            type="password"
            className={`${s.input}`}
            name="passwordConfirm"
          />
          <span>Confirm password</span>
        </label>
        <button className={`${s.submit}`} type="submit">
          Submit
        </button>
        <div className={`${s.signin}`}>
          Already have an acount ? <div onClick={()=>navigate("/login")}>Signin</div>
        </div>
      </form>
    </div>
  );
}
