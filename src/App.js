import s from "./style.module.css";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserList } from "./store/user-slice/user-slice";
import { useEffect} from "react";
import { Footer } from "./components/Footer/Footer";
import { BusinessUserAPI } from "./api";





// BusinessAPI.fetchPopulars()
function App() {
  const dispatch = useDispatch()
  const userList = useSelector((store)=>store.USER.userList)

  async function fetchAllUser(){
    const userList = await BusinessUserAPI.fetchAll()
    dispatch(setUserList(userList))
    console.log(userList)

  }




  useEffect(() => {
    fetchAllUser()
  }, [dispatch]);



  return (
    <>
      <Header info={userList[0]} />    
      <Outlet />
      <Footer/>
 
    </>
  );
}

export default App;
