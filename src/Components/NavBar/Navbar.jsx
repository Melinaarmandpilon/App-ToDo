import React, { useState } from "react";
// import AddTodo from "../AddTodo/AddTodo";
// import lightBackground from "../../images/bg-desktop-light.jpg"
// import darkBackground from "../../images/bg-desktop-dark.jpg"
import moon from "../../images/icon-moon.svg"
import sun from "../../images/icon-sun.svg";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../Theme/globalStyles";
import { lightTheme, darkTheme } from "../Theme/Theme";

export default function Navbar() {
  // const [theme, setTheme] = useState(false);

  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   const container = document.querySelector(".themeContainer");//imagen
  //   if (theme) {
  //     body.classList.remove("light-theme"); //clase que tiene mi body
  //     body.classList.add("dark-theme");
  //     container.style.backgroundImage = `url(${darkBackground})`;
  //   } else {
  //     body.classList.remove("dark-theme");
  //     body.classList.add("light-theme");
  //     container.style.backgroundImage = `url(${lightBackground})`;
  //   }
  // });

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // const handleClick=()=>{
  //   setTheme(!theme)
  // }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <nav className="nav">
          <div className="nav_title">
            <h1>todo list</h1>
          </div>
          <div>
            <button  className="nav_switch" onClick={themeToggler}>{theme? (
            <img src={sun} alt="not found" />
            ):(
            <img src={moon} alt="not found" />
            )}</button>
            {/* <button 
          className="nav_switch" 
          onClick={handleClick} 
          >
            {theme? (
            <img src={sun} alt="not found" />
            ):(
            <img src={moon} alt="not found" />
            )}
          </button> */}
          </div>
        </nav>
      </>
    </ThemeProvider>
  );
}
