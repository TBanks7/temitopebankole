import Badge from '../Badge';
import { TECH_STACK } from '../../../constants/constants';
import Image from 'next/image';

const Tools = () => {
  return (
    <div className='flex flex-col space-y-1 pt-6'>
      <div className='flex flex-col gap-y-4'>
        <span className='text-Snow text-xs font-bold'>Tools</span>
        <div className='flex flex-wrap gap-4'>
          {TECH_STACK.map((item, index) => (
            <Image 
              key={index} 
              src={`/tools/${item.toLowerCase()}.png`} 
              alt={item} 
              width={40} 
              height={40} 
            />
            // <Badge key={index} title={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
