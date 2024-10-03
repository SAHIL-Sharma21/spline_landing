import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <>
      <main className='min-h-screen flex flex-col md:flex-row items-center bg-black text-white'>
        <div className='flex-1 flex flex-col justify-center items-start p-6 space-y-6'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            Welcome to my website
          </h1>
          <p className='text-lg md:text-xl text-gray-400'>
            Discover the beauty of 3D graphics and interactive experiences powered by Spline.
          </p>
          <button className='mt-4 px-6 py-3 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700 transition duration-300'>
            Get Started
          </button>
        </div>

        {/* Right Column - Spline Component */}
        <div className='flex-1 w-full h-full p-6'>
          <Spline scene='https://prod.spline.design/AwRhQnz5aOIrlbYO/scene.splinecode' className='w-full h-full rounded' />
        </div>
      </main>
    </>
  );
}
