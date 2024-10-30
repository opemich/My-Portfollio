export default function Section2() {
  return (
    <div className="mt-10">
        <h4 className="ml-[20.9%] text-[19px] font-semibold">Featured works</h4>
      <div className="flex justify-center space-x-3 gap-2 mt-4">
          <div>
            <img src="/public/images/dashboard.png" alt="dashboard" className="w-72 h-48"/>
          </div>
          <div>
            <h3 className="text-[30px] font-bold">Designing Dashboards</h3>
            <p className="mt-4 text-opacity-0"><span className="bg-blue-950 py-[1px] px-3 rounded-3xl text-white mr-5">2022</span>    Dashboard</p>
            <p className="mt-4 text-[17px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit <br />
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br />
              nostrud amet
            </p>
          </div>
      </div>
      <hr className="my-4"/>
      
      
      <div className="flex justify-center space-x-3 gap-2 mt-6">
          <div>
            <img src="/public/images/illustration.png" alt="illustration" className="w-72 h-48"/>
          </div>
          <div>
            <h3 className="text-[30px] font-bold">Vibrant Portraits of 2020</h3>
            <p className="mt-4 text-opacity-0"><span className="bg-blue-950 py-[1px] px-3 rounded-3xl text-white mr-5">2023</span>    Illustration</p>
            <p className="mt-4 text-[17px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit <br />
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br />
              nostrud amet
            </p>
          </div>
      </div>
      <hr className="my-4"/>

      <div className="flex justify-center space-x-3 gap-2 mt-6">
          <div>
            <img src="/public/images/typography.png" alt="typography" className="w-72 h-48"/>
          </div>
          <div>
            <h3 className="text-[30px] font-bold">36 Days of Malayalam type</h3>
            <p className="mt-4 text-opacity-0"><span className="bg-blue-950 py-[1px] px-3 rounded-3xl text-white mr-5">2024</span>    Typography</p>
            <p className="mt-4 text-[17px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit <br />
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br />
              nostrud amet
            </p>
          </div>
      </div>
      <hr className="my-4"/>
    </div>
  )
}
