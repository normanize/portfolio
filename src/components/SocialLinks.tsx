import { useLayoutEffect } from 'react';

import Button from './Button';

import GithubIcon from '../assets/icons/GithubIcon';
import LinkedinIcon from '../assets/icons/LinkedinIcon';
import GmailIcon from '../assets/icons/GmailIcon';
import SkypIcon from '../assets/icons/SkypeIcon';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SocialLinks = () => {

    useLayoutEffect(() => {
        // github icon animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#overview',
                start: 'top center',
                endTrigger: '#overview',
                toggleActions: 'play reverse play reverse',
            }
        })
        tl.fromTo('.github', {
            y: 150,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            delay: 0.1,
            duration: 2
        });

        // linkedin icon animation
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#overview',
                start: 'top center',
                endTrigger: '#overview',
                toggleActions: 'play reverse play reverse',
            }
        })
        tl2.fromTo('.linkedin', {
            y: 150,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            delay: 0.3,
            duration: 2
        });

        // gmail icon animation
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '#overview',
                start: 'top center',
                endTrigger: '#overview',
                toggleActions: 'play reverse play reverse',
            }
        })
        tl3.fromTo('.gmail', {
            y: 150,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            delay: 0.4,
            duration: 2
        });

        // skype icon animation
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '#overview',
                start: 'top center',
                endTrigger: '#overview',
                toggleActions: 'play reverse play reverse',
            }
        })
        tl4.fromTo('.skype', {
            y: 150,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            delay: 0.5,
            duration: 2
        });
    }, [])

    const onRedirect = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <div className='flex flex-row items-baseline space-x-8 2xl:space-x-10'>
            <Button className='github' onClick={() => onRedirect('http://bitly.ws/xxZP')}>
                <GithubIcon className='w-10 h-10 2xl:w-18 2xl:h-18 bg-blend' />
            </Button>

            <Button className="linkedin" onClick={() => onRedirect('http://bitly.ws/xxZS')}>
                <LinkedinIcon className='w-8 h-8 2xl:w-10 2xl:h-10' />
            </Button>

            <Button className="gmail" onClick={() => onRedirect('http://bitly.ws/xxZV')}>
                <GmailIcon className='w-8 h-8 2xl:w-10 2xl:h-10' />
            </Button>

            <Button className="skype" onClick={() => onRedirect('skype:normanamaro.work?chat')}>
                <SkypIcon className='w-8 h-8 2xl:w-10 2xl:h-10' />
            </Button>
        </div>
    );
};

export default SocialLinks;