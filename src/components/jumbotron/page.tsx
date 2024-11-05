const Jumbotron = () => {
    return (
      <div className="bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-1">
            <div className="flex flex-col justify-center text-white">
              <h1 className="text-4xl font-bold text-center"> Who i Am </h1>
              <p className="p-20 text-center text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                repellat amet animi ex. Porro officiis possimus adipisci ex
                nesciunt, laudantium harum molestias assumenda, nostrum provident
                corrupti voluptatem asperiores impedit inventore?
              </p>
              <div className="flex justify-center mx-auto py-10 ">
                <button className="max-w-[500px] border border-black bg-teal-500 p-4 text-white px-20 rounded-lg">
                  Hiring me
                </button>
              </div>
            </div>
            <div className="flax justify-center mx-auto py-10">
              <img
                src="https://i.pinimg.com/736x/4a/c7/25/4ac7259fc42080aa70159de3568e2c25.jpg"
                alt=""
                className="h-[500px] w-[500px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    ); 
  };
  
  export default Jumbotron;
  