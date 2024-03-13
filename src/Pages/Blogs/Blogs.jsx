import './blog.css'


const Blogs = () => {
    return (
        <div>
              <h1 className="text-2xl font-semibold text-center">Blogs</h1>
            <a href="https://check.so" className="btn-shine">Get early access</a>
            
            <div className='body '>
            <div className='containers'>
            <div className='cards shadow-2xl'>
            <div className='imgBx'>
            <img src="https://i.ibb.co/NxL2rNL/1709994928514.jpg" alt="" />
            </div>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, doloremque?
            </p>
            <h2 className='font-semibold text-xl'>Card 01</h2>
            </div>
            </div>
            
            </div>

        </div>
    );
};

export default Blogs;
