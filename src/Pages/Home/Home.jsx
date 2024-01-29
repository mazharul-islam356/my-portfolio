
const Home = () => {
    return (
        <div>
            
            <div className="flex h-screen w-full justify-evenly space-y-3 gap-8 items-center">
                <div>
                    <h3 className="text-3xl">Hello</h3>
                    <h2 className="text-2xl">I am <span className="font-semibold">Mazharul Islam</span></h2>
                    <h3 className="text-xl">Frontend developer</h3>
                    <p className="w-96 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, neque!Lorem</p>
                    <button className="btn btn-outline mt-2">Download CV</button>
                </div>
                <div>
                    <img className="rounded-full w-80" src="https://i.ibb.co/FKgWFH2/mngr.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;