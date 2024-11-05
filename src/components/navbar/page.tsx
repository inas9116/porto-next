"use client";


const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="  bg-black flex justify-between items-center pl-4 mx-10 rounded-lg">
        <div>
          <img
            src="/NNlogo.avif"
            alt="img"
            className="w-[50px] h-[50px]"
          />
        </div>
        <div>
        <div className=" max-w-full container flex items-center justify-end gap-5 p-5 text-gray-50 max-md:">
          <button className="max-w-[600px] rounded-md border px-10 hover:bg-sky-700 ...">
            Home
          </button>
          <button className="max-w-[600px] rounded-md border px-10 hover:bg-sky-700 ...">
            Working
          </button>
          <button className="max-w-[600px] rounded-md border px-10 hover:bg-sky-700 ...">
            Project
          </button>
          <button className="max-w-[600px] rounded-md border px-10 hover:bg-sky-700 ...">
            Testimoni
          </button>
          <button className="max-w-[600px] rounded-md border px-10 hover:bg-sky-700 ...">
            Contact
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
