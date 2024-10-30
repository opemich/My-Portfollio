export default function Herosection() {
  return (
    <div className='flex justify-center gap-10 mt-20'>
      <div>
        <h1 className='text-[40px] font-bold'>
            Hi, I am Excellent, <br />
            Creative Technologist
        </h1>

        <p className='mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. quod enim perferendis, amet <br />
          quasi molestiae hic nam praesentium corporis nisi. Lorem ipsum  amet <br />
          elit. L iure incidunt repudiandae ayxhtbct <br />
        </p>

        <button className='bg-red-500 py-2 px-4 mt-3 text-white hover:bg-red-600 text-sm'>
            Download Resume
        </button>
      </div>
      <div>
        <img src="/public/images/download.png" alt="priest" className='w-60 h-50 rounded-full'/>
      </div>
    </div>
  )
}
