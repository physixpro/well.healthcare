import logo from "./logo.svg";
import Landing from "./components/Landing.js";
import NavBar from "./components/Navbar";
import Herbbackground from "./components/Herbbackground";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Herbbackground />
      <About />
    </div>
  );
}

export default App;
