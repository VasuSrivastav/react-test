import "./App.css";
import CardA from "./assets/components/CardA";
import Theme from "./assets/components/Theme";
import { useState, createContext } from "react";
import ThemeUsecontext from "./assets/components/ThemeUsecontext";

const userContext = createContext();

function App() {
  const [name, setName] = useState("vasu");
  const [theme, setTheme] = useState("light");
  const [check, setCheck] = useState("true");
  function handleclick() {
    setName("srivastav");
    setCheck(false);
  }
  return (
    <userContext.Provider value={{ name, setName, check, setCheck ,theme, setTheme}}>
      <div className="flex">
        <div>
          <button onClick={handleclick} className={check ? "" : "hidden"}>
            change Name
          </button>
          {/*way2best <button onClick={handleclick} className={check?"":"hidden"}>change Name</button> */}
          hello world
          <CardA />
        </div>
        <div>
          <h1>theme changer</h1>
        </div>
        {/* way1 */}
        {/* <Theme themi={theme} changecolor={setTheme}/> */}

        {/* way2 */}
        <ThemeUsecontext /> 

      </div>
    </userContext.Provider>
  );
}

export default App;
export { userContext };
