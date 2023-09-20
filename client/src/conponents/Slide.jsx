import React, { useState } from 'react'


const Slide = () => {
    const sliders = [
        {url:'./images/01.jpg'},
        {url:'./images/02.jpg'},
        {url:'./images/03.jpg'}
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlider = () => {
        const isFirstSlide = sliders.length -1:currentIndex
        const newIndex = isFirstSlide ? sliders.length -1:currentIndex
        setCurrentIndex(newIndex);
    }
    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1;
        const newIndex =isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const moveSlider = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
  return (
    <div className="max-2-[1540px] h-[500px] w-full m-auto py-4 px-4 relative group">
        <div className="w-full h-full rounded-2xl bg-center bg-cover duration-300">
            style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
        </div>   
    </div>
  )
}

export default Slide