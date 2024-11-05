'use client'



const Project = () => {
  return (
    <div>
      <div className="grid grid-cols-1 text-center text-4xl mt-10 font-bold">
        <h1>My Projects</h1>
      </div>
      <div className=" flex flex-row gap-8 rounded-lg mx-20 max-md:flex-col">
        <div className="rounded-lg mt-10 ">
          <img
            src="/project1.png" alt="img"
            className="rounded-lg h-[400px] w-[600px] justify-self-center max-md:h-1/2"
          />
          <h1 className="text-center pt-8 text-2xl font-bold">Project Satu</h1>
          <p className="text-center pt-4 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            quisquam tempore nesciunt voluptatum, quis perspiciatis repellat qui
            ipsum aliquid quos adipisci nulla error possimus provident dolor?
            Veniam ratione inventore aperiam.
          </p>
          <button className="max-w-[500px] bg-green-500 p-3 px-10 rounded-lg mt-5">
                Know more . . .
              </button>
        </div>
        <div className="rounded-lg mt-10">
          <img
            src="/project1.png" alt="img"
            className="rounded-lg h-[400px] w-[600px] justify-self-center max-md:h-1/2"
          />
          <h1 className="text-center pt-8 text-2xl font-bold">Project Dua</h1>
          <p className="text-center pt-4 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            quisquam tempore nesciunt voluptatum, quis perspiciatis repellat qui
            ipsum aliquid quos adipisci nulla error possimus provident dolor?
            Veniam ratione inventore aperiam.
          </p>
          <button className="max-w-[500px] bg-green-500 p-3 px-10 rounded-lg mt-5">
                Know more . . .
              </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
