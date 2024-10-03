import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
<>
      <main className='min-h-screen relative flex justify-center items-center text-black'>
        {/* Overlayed Text Section */}
        <div className='absolute top-20 left-0 p-6 space-y-6 md:max-w-lg'>
          <h1 className='text-5xl md:text-5xl font-bold text-white'>
            Welcome to My website
          </h1>
          <p className='text-lg md:text-xl text-gray-800'>
            Discover the beauty of 3D graphics and interactive experiences powered by Spline.
          </p>
          <button className='mt-4 px-6 py-3 bg-slate-900 rounded-md text-white font-semibold hover:bg-blue-700 transition duration-300'>
            Get Started
          </button>
        </div>

        {/* Fullscreen Spline Component */}
        <div className='w-full h-screen'>
          <Spline scene='https://prod.spline.design/AwRhQnz5aOIrlbYO/scene.splinecode' className='w-full h-full' />
        </div>
      </main>
    </>
  );
}
