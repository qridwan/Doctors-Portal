import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Appointment from "./Components/Appointment/Appointment";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NavigationBar from "./Components/Sheared/Navbar/Navbar";

export const UserContext = createContext();
function App() {
  const [userInfo, setUserInfo] = useState({
    isSigned: false,
    name: "",
    email: "",
    photo: ""
  });


  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
    <Router>
      <Switch>
        <Route path="/login">
        <NavigationBar/>
          <Login />
        </Route>
        <Route path="/Appointment">
        <NavigationBar/>
          <Appointment />
        </Route>
        <PrivateRoute path="/dashboard">
        <NavigationBar/>
          <Dashboard />
        </PrivateRoute>
        <Route exact path="/">
        <NavigationBar/>
          <Home />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
