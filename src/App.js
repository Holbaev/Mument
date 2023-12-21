import React  from "react";
import { routes } from "./routes";
import { Route , Routes } from "react-router-dom";
function App() {

  return (
    <div>
        <Routes>
        {routes?.map((route) =>(
          <Route key={route.path} path={route.path} element={route.component}/>
        ))}
        </Routes>
      </div>
  );
}

export default App;
