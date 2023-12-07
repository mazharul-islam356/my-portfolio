import About from "./components/about/About";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import './index.css'

const App = () => {
  return (
    <div>
      <Header></Header>

      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
      </main>
      
    </div>
  );
};

export default App;