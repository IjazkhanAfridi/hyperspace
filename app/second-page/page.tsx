import StarsCanvas from '@/canvas/Stars';
import Earth from '@/components/Earth';

const page = () => {
  return (
    <div className='relative z-[0] bg-black min-h-[calc(100vh-[60px]]) w-full'>
      <Earth />
      <div className="absolute top-0 z-[-1] w-full h-full">
      <StarsCanvas />
      </div>
    </div>
  );
};

export default page;
