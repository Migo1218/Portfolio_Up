import Aos from "aos";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="fixed z-10 right-2 top-2 bg-transparent text-lg p-1 rounded-md"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
    </>
  );
}

export default App;
