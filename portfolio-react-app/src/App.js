import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      {/* if you take it out of this order then it all stuffs up */}
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
