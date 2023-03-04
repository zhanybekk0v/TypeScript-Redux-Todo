import React from "react";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import TodoPage from "./components/pages/TodoPage";
import Navbar from "./Navbar/Navbar";
import './index.css';
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <>
    <Provider store={store}>
      <Navbar />
        <div className="container">
      <Routes>
          <Route element={<TodoPage/>} path="/"  />
          <Route element={<AboutPage/>} path="/about" />
      </Routes>
        </div>
    </Provider>
    </>
  );
};

export default App;
