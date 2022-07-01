import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Login from "./Auth/Login";
import AppNavigation from "./Routes/AppNavigation";
import {Provider} from 'react-redux'
import store from "./redux/store";
// import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
      <Provider store={store}>
    <div className="">
      <AppNavigation />
      {/* <LandingPage />{" "} */}
    </div>
      </Provider>
  );
}

export default App;
