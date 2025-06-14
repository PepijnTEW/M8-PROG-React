import { Navigation } from "./Nav.jsx";
import { AboutMe } from "./AboutMe.jsx";
import { Top10 } from "./Top10.jsx";
import { CookieClicker } from "./Cookie.jsx";
import { Pokemon } from "./Pokemon.jsx";
import { Question } from "./Faq.jsx";
import "./App.css";

function App() {
  return (
    <main className="text-[#E0E1DD] bg-[#00072D] flex flex-col items-center font-[ubuntu]">
      <Navigation />
      <AboutMe />
      <Top10 />
      <CookieClicker />
      <Pokemon />
      <Question />
    </main>
  );
}

export default App;
