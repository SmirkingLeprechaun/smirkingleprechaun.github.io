// Filename - App.js

import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Tutorials from "./pages/Tutorials";
import Jobs from "./pages/Jobs";
import Students from "./pages/Students";



function App() {
  let component
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Home />
  //     break
  //   case "/courses":
  //     component = <Courses />
  //     break
  //   case "/tutorials":
  //     component = <Tutorials />
  //     break
  //   case "/jobs":
  //     component = <Jobs />
  //     break
  //   case "/student":
  //     component = <Students />
  //     break
  // }
  return (
    <>
      <Layout />
      <div className="container">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/tutorials' element={<Tutorials />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/student' element={<Students />} />
        </Routes>
      </div>



      {/* {component} */}
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       {/* <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} /> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

  );
}

export default App;
