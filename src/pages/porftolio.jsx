import React from 'react'
import { works } from '../assets/assets'
import Works from '../components/Works'

const Protfolio = () => {
  return (
    <div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2">
        {works.map((work, index) => (
          <Works
            key={index}
            image={
              <img
                src={work.image}
                alt=""
                className="w-full h-240 object-cover"
                draggable="false"
              />
            }
            name={work.name}
            company={work.company}
          />
        ))}
      </div>
    </div>
  )
}

export default Protfolio