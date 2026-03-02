import React, { useEffect, useState } from 'react'
import { works } from '../assets/assets'
import Works from '../components/Works'
import Video from '../components/Video'
import TrustedBy from '../components/TrustedBy'
import Test from '../components/Test'
import { useParams } from 'react-router-dom'

const Protfolio = () => {
  const { id } = useParams()
  const [selectedWork, setSelectedWork] = useState(null)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = (work) => {
    setSelectedWork(work)
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setSelectedWork(null)
    setIsOpenModal(false)
  }

  useEffect(() => {
    const selectedWork = works.find(work => work.id === id)
    selectedWork && setSelectedWork(selectedWork)
  }, [])


  return (
    <div className="flex flex-col flex-1 lg:pt-40 pt-10 relative">
      <div className="text-center items-center flex flex-col">
        <p className="text-2xl lg:text-4xl text-center py-5 uppercase">
          Our Work
        </p>
        <h1 className="text-4xl lg:text-7xl lg:pb-20">Creative that works</h1>
      </div>

      <div className="">
        <Video />
      </div>

      <Test />

      <div>
        <TrustedBy />
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 lg:px-12 px-3">
        {works.map((work, index) => (
          <Works
            key={index}
            image={
              <img
                src={work.image}
                alt=""
                className="w-full lg:h-200 object-cover rounded-2xl"
                draggable="false"
                onClick={() => openModal(work)}
              />
            }
            name={work.name}
            company={work.company}
          />
        ))}
      </div>

      {isOpenModal && selectedWork && (
        <div className="flex lg:flex-col flex-row items-center justify-center lg:my-30 my-5 fixed inset-0 bg-black/50 lg:max-w-7xl z-50 mx-auto w-full">
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-black font-bold hover:text-gray-800 z-100 bg-white rounded-full w-6 h-6"
          >
            ✕
          </button>
          <div className="lg:flex group grow transition-all duration-500 hover:w-full p-3 gap-2">
            {selectedWork?.projectImage.map((work, index) => (
              <div className="grid w-full hover:w-full duration-500 grop grow transition-all" key={index}>
                <img
                  src={work}
                  alt=""
                  className="w-full h-56 object-cover gap-2 object-center rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Protfolio