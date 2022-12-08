import { useLayoutEffect } from 'react';

import Button from '../Button';
import SocialLinks from '../SocialLinks';

import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

import HeroImage from '../../assets/images/me.png';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Overview = () => {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // name animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#overview',
        start: 'top center',
        endTrigger: '#overview',
        toggleActions: 'play reverse play reset',
      }
    });
    tl.fromTo('.name', {
      x: -200,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      delay: 0.3,
      duration: 2,
    });

    // role animation
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#overview',
        start: 'top center',
        endTrigger: '#overview',
        toggleActions: 'play reverse play reset',
      }
    });
    tl2.fromTo('.role', {
      x: -200,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      delay: 0.6,
      duration: 2
    });

    // resume button animation
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#overview',
        start: 'top center',
        endTrigger: '#overview',
        toggleActions: 'play reverse play reset',
      }
    });
    tl3.fromTo('.download', {
      opacity: 0,
    }, {
      opacity: 1,
      delay: 1.8,
      duration: 1.8,
    });

    // hero animation
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: '#overview',
        start: 'top center',
        endTrigger: '#overview',
        toggleActions: 'play reverse play reset',
      }
    });
    tl4.fromTo('.hero', {
      x: 220,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      delay: 0.5,
      duration: 2.2
    });

    // find me animation
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: '#overview',
        start: 'top center',
        endTrigger: '#overview',
        toggleActions: 'play reverse play reset',
      }
    });
    tl5.fromTo('.find-me', {
      y: -20,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      delay: 0.5,
      duration: 2
    });
  }, [])

  return (
    <section id="overview" className='min-h-screen flex items-center'>
      <div className='max-w-screen-2xl mx-auto'>
        <div className='flex flex-col lg:flex-row-reverse justify-between items-center my-20 lg:my-0'>
          {/**
         * display photo
         */}
          <div className='lg:flex-1'>
            <div className='flex justify-center lg:mb-20'>
              <img src={HeroImage} alt="me" className="hero w-64 lg:w-80 xl:w-80 2xl:w-96 rounded-md" />
            </div>
          </div>

          {/**
         * display details
         */}
          <div className='flex lg:flex-1 p-8'>
            <div>
              <div className='tracking-wide mb-6 text-center lg:text-start'>
                <h1 className='name text-3xl 2xl:text-4xl font-bold mb-3'>
                  Norman Amaro
                </h1>
                <h3 className='role text-2xl 2xl:text-3xl text-red-800 font-bold'>
                  Web & Mobile Application Developer
                </h3>
              </div>

              <div className='flex justify-center lg:justify-start mb-6'>
                <a
                  className='download flex flex-row items-center border rounded-lg shadow-lg px-6 py-2 mb-10 hover:border-red-800'
                  target="_blank"
                  href="https://normanize.github.io/portfolio/src/assets/documents/Norman_Amaro_CV.pdf"
                  download>
                  <span className='text-lg 2xl:text-xl mr-2 font-semibold'>
                    Resume
                  </span>
                  <ArrowDownTrayIcon className='h-5 w-5' />
                </a>
              </div>

              <div className='text-center lg:text-left'>
                <h3 className='find-me text-xl font-bold mb-3'>Find me in</h3>
                <div className='flex justify-center lg:justify-start'>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;