import "./App.css";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import logo from "../public/vite.svg";
import repic from "./assets/react.svg";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="hero">
      <NavBar name="first app" img={logo} />
      <div className="cardss">
        <Cards
          heading="vite"
          description="create using vite"
          imageUrl={logo}
          color={{ backgroundColor: "#ce8c8c" }}
        />
        <Cards
          heading="react"
          description="create using react"
          imageUrl={repic}
          color={{ backgroundColor: "#bdd64a" }}
        />
        <Cards
          heading="vite"
          description="create using vite"
          imageUrl={logo}
          color={{ backgroundColor: "#ce8c8c" }}
        />
        <Cards
          heading="vite"
          description="create using vite"
          imageUrl={logo}
          color={{ backgroundColor: "#bdd64a" }}
        />
        <Cards
          heading="vite"
          description="create using vite"
          imageUrl={logo}
          color={{ backgroundColor: "#ce8c8c" }}
        />
      </div>
      <Footer yr="2024"/>
    </div>
  );
}

export default App;
