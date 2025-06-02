import { AboutMe } from "./AboutMe.jsx";
import { Top10 } from "./Top10.jsx";
import "./App.css";
import background from "./assets/img/background.png";

function App() {
  return (
    <main
      style={{ backgroundImage: `url(${background})` }}
      className="text-[#E0E1DD] flex flex-col items-center font-[VT323]"
    >
      <AboutMe />
      <Top10 />
    </main>
  );
}

export default App;
