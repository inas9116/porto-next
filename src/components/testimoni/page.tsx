'use client'


const Testimoni = () => {
  return (
    <div>
      <div className="bg-black mx-20">
        <div className=" text-center text-white text-4xl py-10 mt-20 max-md:text-lg">
          Testimonial
        </div>
        <div>
          <div className="flex mx-80 text-center text-white max-md:mx-5 text-sm ">
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              vel iusto aspernatur rem voluptatem sapiente, quia consequatur non
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates dicta ad assumenda. Omnis, quas aspernatur doloremque
              voluptatum nulla, dolore reiciendis inventore odio consequuntur
              nihil aliquam dolorum?
            </p>
          </div>
          <div className="grid gap-4 grid-cols-2 py-10 mx-20 max-md:grid-cols-none justify-self-center">
            <div className="border border-white rounded-xl">
              <div className="text-center text-white p-5">
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates dicta ad assumenda. Omnis, quas aspernatur doloremque
                voluptatum nulla, dolore alias obcaecati expedita incidunt earum
                laboriosam? Voluptatum laudantium tempora explicabo in.""
              </div>
              <div className="flex flex-row gap-5 mb-5 ml-10">
                <div>
                  <img
                    src="customer.jpg" alt="img"
                    className="h-[50px] w-[50px] rounded-full object-cover"
                  />
                </div>
                <div className="text-xl text-center text-white py-4 px-4">
                  Customer's name
                </div>
              </div>
            </div>
            <div className="border border-white rounded-xl">
              <div className="text-center text-white p-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas minus odio placeat, nesciunt sequi rerum iusto eum
                aliquid reprehenderit pariatur ipsa, accusantium laudantium quae
                dolore debitis sint tenetur repellat assumenda.
              </div>
              <div className="flex flex-row gap-5 mb-5 ml-10">
                <div>
                  <img
                    src="customer.jpg" alt="img"
                    className="h-[50px] w-[50px] rounded-full object-cover"
                  />
                </div>
                <div className="text-xl text-white text-center py-4 px-4">
                  Customer's name
                </div>
              </div>
            </div>

            <div className="border border-white rounded-xl">
              <div className="text-center text-white p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                veritatis velit perspiciatis. Praesentium veniam, pariatur ad
                omnis debitis impedit animi alias assumenda voluptatibus ut!
                Earum rem voluptatum eos voluptate unde.
              </div>
              <div className="flex flex-row gap-5 mb-5 ml-10">
                <div>
                  <img
                    src="customer.jpg" alt="img"
                    className="h-[50px] w-[50px] rounded-full object-cover"
                  />
                </div>
                <div className="text-xl text-white text-center py-4 px-4">
                  Customer's name
                </div>
              </div>
            </div>

            <div className="border border-white rounded-xl">
              <div className="text-center text-white p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem eveniet facere rem doloribus dolor quod ipsa
                aspernatur, nesciunt nemo nostrum tempora illo sint animi sequi
                consequatur neque asperiores placeat magni?
              </div>
              <div className="flex flex-row gap-5 mb-5 ml-10">
                <div>
                  <img
                    src="/customer.jpg" alt="img"
                    className="h-[50px] w-[50px] rounded-full object-cover"
                  />
                </div>
                <div className=" text-xl text-white text-center py-4 px-4">
                  Customer's name
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;

