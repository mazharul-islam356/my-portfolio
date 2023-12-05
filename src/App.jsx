import Header from "./components/header/header";
import Home from "./components/home/Home";
import './index.css'

const App = () => {
  return (
    <div>
      <Header></Header>

      <main className="main">
        <Home></Home>
      </main>
      
    </div>
  );
};

export default App;