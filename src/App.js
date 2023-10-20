import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";

export function App() {
  let text = "React";
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
