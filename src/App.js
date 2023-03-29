import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";


const getThemeFromStorage = () => {
  return localStorage.getItem("theme") ?? "light-mode";

}


function App() {

  const [theme, setTheme] = useState(getThemeFromStorage());

  const switchTheme = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode")
    } else {
      setTheme("light-mode")
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);

  }, [theme])


  return (
    <section className="section-center">
      <div className="container">
        <h2>DARK MODE APP</h2>

        <button className="btn" onClick={switchTheme}>
          Switch Theme
        </button>

        <section className="article-section">
          {data.map(el => <Articolo key={el.id} {...el} />)}

        </section>

      </div>
    </section>
  );
}

export default App;
