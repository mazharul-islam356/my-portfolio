import Education from "../Pages/Education/Education";
import Home from "../Pages/Home/Home";
import Navbars from "../Pages/Navbar/Navbars";

const MainLayout = () => {
    return (
        <div>
           <div className="w-11/12 mb-10 mx-auto font-sans">

           <Navbars></Navbars> 
           <Home></Home>
           <Education></Education>

           </div>

        </div>
    );
};

export default MainLayout;