import Education from "../Pages/Education/Education";
import Home from "../Pages/Home/Home";
import Navbars from "../Pages/Navbar/Navbars";
import Contacts from "../Pages/contacts/Contacts";
import FunFacts from "../Pages/funFacts/FunFacts";
import HireMe from "../Pages/hireMe/HireMe";
import Projects from "../Pages/projects/Projects";
import Skills from "../Pages/skills/Skills";
import WhatIDo from "../Pages/whatIdo/WhatIDo";

const MainLayout = () => {
   
    

    return (
        <div className="pb-6">
            
            <Navbars></Navbars> 
             
           <Home></Home>
           
           <div className="w-11/12 mb-10 mx-auto font-sans">

           <Education></Education>
           <WhatIDo></WhatIDo>
           <Skills></Skills>
           <Projects></Projects>
           <FunFacts></FunFacts>
           <HireMe></HireMe>
           <Contacts></Contacts>



  

    
           </div>

        </div>
    );
};

export default MainLayout;