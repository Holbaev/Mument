import React  from "react";
import { routes } from "../routes";
import { Route , Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { ToastContainer , toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
function App() {
  
  return (
    <div>
        <Routes>
        {routes?.map((route) =>(
          <Route key={route.path} path={route.path} element={route.component}/>
        ))}
        </Routes>
        <ToastContainer 
        toastClassName={styles.toast}
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        />
      </div>
  );
}

export default App;
