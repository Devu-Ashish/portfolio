import About from "./Components/Skills";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Social from "./Components/Social";
import Portfolio from "./Components/Portfolio";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Social />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
