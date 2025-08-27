import { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [activeTheme, setActiveTheme] = useState("dark3");
  const changeTheme = (newTheme) => {
    setActiveTheme(newTheme);
    document.querySelector("#root").setAttribute("data-theme", newTheme);
  }
  const themes = [
    { name: "light", color: "#F8FAFC" },
    { name: "dark", color: "#1E293B" },
    { name: "dark2", color: "#121212" },
    { name: "dark3", color: "#212529" }
  ];

  return (
    <>
      <NavBar title="TextUtils" changeTheme={changeTheme} themes={themes} activeTheme={activeTheme} />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<TextForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
