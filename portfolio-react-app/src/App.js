import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      {/* if you take it out of this order then it all stuffs up */}
      <NavBar />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
