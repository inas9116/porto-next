"use client";

const contact = () => {
  return (
    <div className="max-md:justify-self-center">
      <div className=" mx-20 py-20 ">
        <div>
          <h1 className="text-4xl text-center">Contact</h1>
          <p className="text-xl py-10 text-center px-80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            odio, debitis doloribus consequatur nostrum porro voluptatum vel
            aspernatur dolores dolor sapiente optio esse voluptas, nesciunt
            dicta labore nihil, alias minus?
          </p>
        </div>
      </div>
      <div>
        <div className="flex max-w-xl mp-16 flex-col justify-self-center border border-black rounded-lg w-full mt-10 text-white">
          <div className="mb-4">
            <h2 className="pt-4">Email</h2>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-1 px-3 text-base leading-8 border text-black"
            />
          </div>
          <div className="mb-4">
            <h2 className="pt-4">Phone</h2>
            <input
              type="number"
              placeholder="Your phone number"
              className="w-full py-1 text-base leading-8 border text-black"
            />
          </div>
          <div className="mb-4">
            <h2 className="pt-4">Message</h2>
            <textarea
              className="h-32 w-full resize-none rounded-lg py-1 px-3 text-base leading-6 border text-black"
              placeholder="sayy suuuu"
            />
            <div className=" flex justify-end pt-4"></div>
            <button className="w-full py-3 px-6 border bg-lime-400 rounded-lg hover:bg-green-500">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
