import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      {/* if you take it out of this order then it all stuffs up */}
      <NavBar />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
