import React from 'react'
import Title from '../components/Title'
import Video from '../components/Video';
import TrustedBy from '../components/TrustedBy';
import { works } from '../assets/assets';
import Works from '../components/Works';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center px-3 md:px-6 lg:px-12">
        <Title
          title={"Testa. Creative Powerhouse."}
          word={"We Design Brands People Remember."}
          text={
            "Testa is a modern creative–strategy firm helping African institutions, brands, and programmes turn complexity into clarity. We design systems—brand systems, communication systems, digital systems—that move people and deliver measurable impact. "
          }
        />
        <Button text={"Start a Project"} />
      </div>
      <Video />
      <TrustedBy />
      <div className="grid md:grid-cols-1 lg:grid-cols-2">
        {works.map((work, index) => (
          <Works
            key={index}
            image={
              <img
                src={work.image}
                alt=""
                className="w-full h-240 object-cover"
              />
            }
            name={work.name}
            company={work.company}
          />
        ))}
      </div>
    </div>
  );
}

export default Home