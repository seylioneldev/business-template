import s from "./style.module.css";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNoteList } from "./store/note-slice/note-slice";
import { useEffect, useState } from "react";
import { BodyContainer } from "./pages/Products/components/Body-Container/BodyContainer";
import { Footer } from "./components/Footer/Footer";
import { BusinessUserAPI } from "./api";



// BusinessAPI.fetchPopulars()
function App() {


  const [users, setUsers] = useState([]);
  console.log('Works Fine !', users[0].email);


  useEffect(() => {
    BusinessUserAPI.fetchAll()
      .then(data => {
        setUsers(data);
        console.log(data); // Affiche les données dans la console
      })
      .catch(error => console.error("Erreur lors de la récupération des données:", error));
  }, []);



  return (
    <>
      <Header user={users} />    
      <Outlet />
      <Footer/>
 
    </>
  );
}

export default App;
