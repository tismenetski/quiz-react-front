import {Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import {useGlobalContext} from "./context";
import Home from "./pages/Home";

function App() {

    const {isAuthenticated} = useGlobalContext();

  return (
      <>
          <Navbar/>
          <Routes>
              {isAuthenticated && <Route path="/" element={ <Navigate replace to="/dashboard" />}  />  }
              {isAuthenticated && <Route path="/dashboard" element={<Dashboard/>}></Route>}
              {!isAuthenticated && <Route path="/dashboard" element={ <Navigate replace to="/login" />}  />   }
              <Route path="/" element={<Home/>} />
              {isAuthenticated && <Route path="/register" element={ <Navigate replace to="/dashboard" />} />}
              {isAuthenticated && <Route path="/login" element={ <Navigate replace to="/dashboard" />} />}
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
      </>


  );
}

export default App;
