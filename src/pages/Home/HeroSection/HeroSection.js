import React from 'react';
import background from '../../../images/hero.jpg';

const HeroSection = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${background})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content max-w-full text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl font-bold uppercase">
              photography is my hobby, it's always great!
            </h1>
            <p className="mb-5">
              Photography was a way for me to freeze time and to capture the
              moments that were happy and healthy. I saw a photo as a way to go
              back to a memory if I ever needed to.
            </p>
            <button className="btn btn-success px-8">Hire Me</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;