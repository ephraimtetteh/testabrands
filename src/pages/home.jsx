import React from 'react'
import Title from '../components/Title'
import Video from '../components/Video';
import TrustedBy from '../components/TrustedBy';
import { works } from '../assets/assets';
import Works from '../components/Works';
import Button from '../components/Button';
import Flex from '../components/Flex';
import ServiceSlide from '../components/ServiceSlide';
import BrandUse from '../components/BrandUse';
import Process from '../components/Process';
import Test from '../components/Test';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center justify-center px-3 lg:px-12">
        <div className='flex items-center justify-center text-center'>
          <Title
            title={"Testa. Creative Powerhouse."}
            word={"We Design Brands People Remember."}
            text={
              "Testa is a modern creative–strategy firm helping African institutions, brands, and programmes turn complexity into clarity. We design systems—brand systems, communication systems, digital systems—that move people and deliver measurable impact. "
              
            }
            className={'font-medium'}
          />
        </div>
        <Button text={"Start a Project"} />
      </div>
      <Video />
      <Test />
      <TrustedBy />
      <div className="grid md:grid-cols-1 lg:grid-cols-2">
        {works.map((work, index) => (
          <Works
            key={index}
            image={
              <img
                src={work.image}
                alt=""
                className="w-full lg:h-200 object-cover"
                draggable="false"
              />
            }
            name={work.name}
            company={work.company}
          />
        ))}
      </div>
      <Flex />
      <ServiceSlide />
      <BrandUse />
      <Process />
    </div>
  );
}

export default Home