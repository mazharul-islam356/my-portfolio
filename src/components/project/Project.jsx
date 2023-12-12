import "./project.css"
import 'swiper/css';
const Project = () => {
    return (
        <div>
            <h1 className="headline">Project</h1>

           <div className="cards">


            {/* project01 */}

            <a href="https://assingment-12-d89cd.web.app/">
  <div className="card">
    <div className="card-header">
      <img src="https://i.ibb.co/6tSkbd0/flat-lay-charts-organic-food-lunch-boxes.jpg" alt="" />
    </div>
    <div className="card-body">
      <h2 className="projectH">Eat and Execls</h2>
    </div>
  </div>
</a>


 {/* project02 */}


<a href="https://assingmnet-11.web.app/">
  <div className="card">
    <div className="card-header">
      <img src="https://i.ibb.co/2nsqZ1d/job-searching.jpg" alt="" />
    </div>
    <div className="card-body">
      <h2 className="projectH">CareerFinder</h2>
    </div>
  </div>
</a>


            {/* project03 */}

            <a href="https://assingment-10-3f93f.web.app/">
  <div className="card">
    <div className="card-header">
      <img src="https://i.ibb.co/7bmJpK1/modern-stationary-collection-arrangement.jpg" alt="" />
    </div>
    <div className="card-body">
      <h2 className="projectH">TechTopia</h2>
    </div>
  </div>
</a>



            </div>

           
           </div>

    );
};

export default Project;