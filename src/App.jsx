import About from "./components/about/About";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Services from "./components/services/Services";
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
        <Services></Services>
        <Qualification></Qualification>
      </main>
      
    </div>
  );
};

export default App;