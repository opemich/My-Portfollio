export default function Section1() {
  return (
    <div className="bg-indigo-50 justify-center mt-20 p-5 border-b-4 shadow-md">
      <div className="flex justify-around space-x-36">
        <h4 className="font-semibold drop-shadow-lg">Recent posts</h4>
        <a href="#"className=" text-indigo-600 hover:underline underline-offset-2 decoration-indigo-400">view all</a>
      </div>
      <div className="flex justify-center space-x-5 mt-4">
        <div className="bg-white p-6 rounded w-[29.6%]">
        <h3 className="font-bold text-2xl">
            Making a design system from <br /> scratch
        </h3>
        <p className="mt-5 font-semibold">28 OCT 2024  |  Design pattern</p>
        <p className="mt-4">
          Amet minim mollit non deserunt ullamco est sit <br />
          aliqua dolor do amet sint. Velit officia consequat <br />
          duis enim velit mollit. Exercitation veniam <br />
          consequat sunt nostrud amet.
        </p>
        </div>

        <div className="bg-white p-6 rounded w-[29.6%]">
        <h3 className="font-bold text-2xl">
          Creating pixel perfect icons in  <br /> Figma
        </h3>
        <p className="mt-5 font-semibold">28 OCT 2024  |  Design pattern</p>
        <p className="mt-4">
          Amet minim mollit non deserunt ullamco est sit <br />
          aliqua dolor do amet sint. Velit officia consequat <br />
          duis enim velit mollit. Exercitation veniam <br />
          consequat sunt nostrud amet.
        </p>
        </div>
      </div>
    </div>
  )
}
