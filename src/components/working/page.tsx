'use client'

const Profile = () => {
    return (
      <div>
        <div className="grid">
          <div className=" items-center pt-10 px-20">
            <div>
              <h1 className="text-4xl font-bold flex justify-center pt-4">
                Working For
              </h1>
            </div>
            <div className="flex text-center px-80">
              <p className=" p-10 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto aliquid, aut totam ducimus minima beatae temporibus,
                fugiat maiores illo, reiciendis voluptas facilis minus accusantium
                mollitia.
              </p>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-1 mx-40 mb-20 mt-10 max-md:grid-flow-row">
          <div className="p-10">
          <div className="flex border bg-orange-300 text-orange-500 w-20 h-5 rounded-lg justify-center">FinTech</div>
            <h1 className="font-bold flex justify-start text-3xl">PT Gudang Garam Jaya</h1>
            <p className="pt-5 text-xl">
              As a FrontEnd developer
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              veritatis nemo saepe possimus nihil voluptates commodi eos
              excepturi, ipsum nostrum asperiores numquam, obcaecati temporibus
              labore?
            </p>
            <div className="flex justify-start mx-auto py-10 ">
                <button className="max-w-[500px] bg-orange-500 p-3 text-white px-10 rounded-lg">
                  Read more . . .
                </button>
              </div>
          </div>
          <div>
            <img
              src="https://media.licdn.com/dms/image/v2/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721174916441?e=2147483647&v=beta&t=IqnGNJxS4J-yaL4rgLBlx-cbNAbFwpEMCRvkkLXsR48"
              alt="jpg"
              className="h-[400px] w-[400px] object-cover rounded-2xl flex justify-start max-md:w-1/2"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 mx-40 mb-20 max-md:grid-cols-none">
          <div>
              <img src="https://media.licdn.com/dms/image/v2/D4D12AQFnxb2cyB4ExQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1669297731190?e=2147483647&v=beta&t=sRnBowDzBe2IKcdXjmCd8R94qJ4SlAJgst-0QiUIEEA"
              alt="jpg"
              className="h-[400px] w-[400px] object-cover rounded-2xl flex justify-self-end max-md:w-1/2" />
          </div>
          <div className="p-10">
          <div className="flex border bg-blue-300 text-blue-500 w-20 h-5 rounded-lg justify-center">FinTech</div>
            <h1 className="font-bold flex justify-start text-3xl ">
              PT Gudang Tembakau Jaya
            </h1>
            <p className="pt-5 text-xl">
              as a backEnd developer
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              ipsum aperiam sit excepturi nostrum nisi, magnam laborum, illum
              consequuntur cupiditate iure maiores architecto minima aspernatur!
            </p>
            <div className="flex justify-start mx-auto py-10 ">
                <button className="max-w-[500px] bg-blue-500 p-3 text-white px-10 rounded-lg">
                  Read more . . .
                </button>
              </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 mx-40 mb-20 max-md:grid-cols-none-reverse">
          <div className="p-10">
          <div className="flex border bg-green-300 text-green-500 w-20 h-5 rounded-lg justify-center">FinTech</div>
            <h1 className="text-3xl font-bold flex justify-start">
              PT Jaya Jaya Jaya
              </h1>
            <p className="pt-5 text-xl">
              As a Fullstack developer
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              veritatis nemo saepe possimus nihil voluptates commodi eos
              excepturi, ipsum nostrum asperiores numquam, obcaecati temporibus
              labore?
            </p>
            <div className="flex justify-start mx-auto py-10 ">
                <button className="max-w-[500px] bg-green-500 p-3 text-white px-10 rounded-lg">
                  Read more . . .
                </button>
              </div>
          </div>
          <div>
            <img
              src="https://www.schoolofit.co.za/wp-content/uploads/2023/03/What-is-full-stack-web-development.png"
              alt="jpg"
              className="h-[400px] w-[400px] object-cover rounded-2xl flex justify-start max-md:w-1/2"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;
  