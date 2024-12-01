import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-center font-extrabold bg-white text-black  ">
        {" "}
        GRID LAYOUT USING TAILWIND CSS DESIGNED BY KHAZRA SHAIKH
      </h1>
      <div className="min-h-screen bg-orange-200 grid grid-cols-10 grid-rows-10 gap-6 p-16">
        <div className=" bg-teal-300 md:row-span-10 md:col-span-2 col-span-10 row-span-2 p-6 rounded-lg text-center text-black font-bold">
          AG1 <br></br> 2 of 10
        </div>

        <div className=" bg-yellow-100 md:row-span-10 md:col-span-6 col-span-10 row-span-6 p-6 rounded-lg pl-0 pr-0 pt-2 text-center text-black font-bold">
          AG2 <br></br> 6 of 10
          <div className=" grid grid-cols-6 grid-rows-10 gap-6">
            <div className=" bg-pink-500 col-span-3 row-span-6 p-4 rounded-lg text-center text-black font-bold">
              AG4 <br></br> 3 of 6{" "}
            </div>
            <div className=" bg-pink-500 col-span-3 row-span-6 p-6 rounded-lg text-center text-black font-bold">
              AG5 <br></br> 3 of 6{" "}
            </div>
            <div className=" bg-orange-300 row-span-10 h-[293px] col-span-2 p-6 -my-6 rounded-lg text-center text-black font-bold">
              AG6 <br></br> 2 of 6{" "}
            </div>
            <div className=" bg-yellow-200 row-span-10 h-[292px] col-span-4 p-6 -my-6  rounded-lg text-center pl-0 pr-0 pt-2 text-black font-bold">
              AG7 <br></br> 4 of 6
              <div className=" grid grid-cols-4 grid-rows-6 gap-6">
                <div className=" bg-pink-500 col-span-2 row-span-4 p-4 h-36  rounded-lg text-center text-black font-bold">
                  AG8 <br></br> 2 of 4{" "}
                </div>
                <div className=" bg-pink-500 col-span-2 row-span-4 p-4 h-36 rounded-lg text-center text-black font-bold">
                  AG9 <br></br> 2 of 4{" "}
                </div>

                <div className=" bg-purple-300 col-span-4 row-span-4 h-24 -my-6 p-4  rounded-lg text-center text-black font-bold">
                  AG10 <br></br> auto{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
       

        <div className=" bg-teal-300 md:row-span-10 md:col-span-2 row-span-2 col-span-10 p-6 rounded-lg text-center text-black font-bold">
          AG3 <br></br> 2 of 10
        </div>
      </div>
    </div>
  );
}
