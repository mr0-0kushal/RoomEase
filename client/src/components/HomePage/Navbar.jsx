import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { items } from '../../assets/data/navData';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const navItem = useRef([]);
    const navIcon = useRef([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);


    useEffect(() => {
        navItem.current.forEach((item, index) => {
            if (item) {
                if (index === hoveredIndex) {
                    gsap.to(item, {
                        x: 0,
                        y: 0,
                        rotation: 0,
                        duration: 0.5,
                        opacity: 1,
                        ease: 'power2.out',
                    });
                } else {
                    gsap.to(item, {
                        x: 200,
                        y: -200,
                        rotation: 360,
                        duration: 0.5,
                        opacity: 0,
                        ease: 'power2.in',
                    });
                }
            }
        });
    }, [hoveredIndex]);


    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        const svg = navIcon.current[index];
        if (svg) {
            gsap.killTweensOf(svg);
            gsap.to(svg, {
                y: -100,
                duration: 1,
                ease: 'power2.out',
            });
        }
    };

    const handleMouseLeave = (index) => {
        setHoveredIndex(null);
        const svg = navIcon.current[index];
        if (svg) {
            gsap.killTweensOf(svg);
            gsap.to(svg, {
                y: 0,
                duration: 0.7,
                ease: 'power2.in',
                clearProps: 'transform',
            });
        }
    };

    return (
        <div className='flex items-center gap-10 justify-center text-white z-2'>
            {items.map((item, index) => (
                <div key={index} className='flex items-center justify-center font-bold text-center'>
                    <h1
                        className="absolute text-lg opacity-0"
                        ref={(el) => {
                            navItem.current[index] = el;
                        }}
                    >
                        {item.name}
                    </h1>
                    <Link
                        to={item.link}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        className='h-[3em] w-[3.5em] z-20 relative h1-animation'>
                        <svg
                            viewBox={item.view}
                            fill="currentColor"
                            height="2.5em"
                            width="2em"
                            className='absolute -z-1 svg-animation'
                            ref={(el) => {
                                navIcon.current[index] = el;
                            }}
                        >
                            <path d={item.dPath} />
                        </svg>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Navbar;
