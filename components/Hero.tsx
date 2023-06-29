"use client";

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({ top: 450, behavior: 'smooth' })
  }


  return (
<div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
        Avtomobili tapmaq, sifariş etmək və icarəyə götürmək – sürətli və çox asandır!
        </h1>

        <p className="hero__subtitle">
        Avtomobil icarəsi təcrübənizi sürətləndirin və çətin olmayan sifariş prosesimizlə rahatlığa qovuşun.
        </p>

        <CustomButton
          title="Axtarışa başla"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero
