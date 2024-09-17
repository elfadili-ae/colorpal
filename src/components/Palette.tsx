'use client'

import React, { useEffect, useRef, useState } from 'react'
import palettColors from '../data/palettes.json';
import Controls from './Controls';

const Palette = () => {
    const first = useRef<HTMLDivElement>(null)
    const second = useRef<HTMLDivElement>(null)
    const third = useRef<HTMLDivElement>(null)
    const fourth = useRef<HTMLDivElement>(null)
    const fifth = useRef<HTMLDivElement>(null)

    const [used, setUsed] = useState({});
    const [currentColor, setCurrentColor] = useState(Math.floor(Math.random() * 1000));

    const palettes = [first, second, third, fourth, fifth];

    const setColors = (colors: string[]) : void => {
        palettes.forEach((palette, i) => {
            if (palette.current && colors[i]) {
                palette.current.style.backgroundColor = colors[i];
                palette.current.children[0].textContent = colors[i];
            }
        })
    }

    const copyColor = (e: React.MouseEvent<HTMLDivElement>) => {
        const col = (e.target as HTMLDivElement).children[0].textContent as string;
        navigator.clipboard.writeText(col);

        (e.target as HTMLDivElement).children[0].textContent = 'Copied!';
        (e.target as HTMLDivElement).classList.add('clicked');
        (e.target as HTMLDivElement).style.opacity = '0.5';
        setTimeout(() => {
            (e.target as HTMLDivElement).classList.remove('clicked');
            (e.target as HTMLDivElement).style.opacity = '1.0';
            (e.target as HTMLDivElement).children[0].textContent = col;
        }, 200);
    }

    const nextColor = (): void => {
        if (currentColor+1 === palettColors.length) {
            setCurrentColor(0);
        } else {
            setCurrentColor(currentColor + 1);
        }
    }

    const prevColor = (): void => {
        if (currentColor === 0) {
            setCurrentColor(palettColors.length - 1);
        } else {
            setCurrentColor(currentColor - 1);
        }
    }

    useEffect(() => {
        setColors(palettColors[currentColor]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentColor]);
    
  return (
    <div className='w-full h-screen flex max-sm:flex-col-reverse sm:flex-col'>
      <Controls
      next={nextColor}
      prev={prevColor}
      />
        <div className='w-full h-full flex max-sm:flex-col'>
            <div onClick={copyColor} ref={first} className='cursor-pointer w-full h-full flex-1 flex justify-center items-end p-4 sm:p-10'>
                <p className='w-full text-right sm:text-center font-bold'>color 1</p>
            </div>
            <div onClick={copyColor} ref={second} className='cursor-pointer w-full h-full flex-1 flex justify-center items-end p-4 sm:p-10'>
                <p className='w-full text-right sm:text-center font-bold'>color 2</p>
            </div>
            <div onClick={copyColor} ref={third} className='cursor-pointer w-full h-full flex-1 flex justify-center items-end p-4 sm:p-10'>
                <p className='w-full text-right sm:text-center font-bold'>color 3</p>
            </div>
            <div onClick={copyColor} ref={fourth} className='cursor-pointer w-full h-full flex-1 flex justify-center items-end p-4 sm:p-10'>
                <p className='w-full text-right sm:text-center font-bold'>color 4</p>
            </div>
            <div onClick={copyColor} ref={fifth} className='cursor-pointer w-full h-full flex-1 flex justify-center items-end p-4 sm:p-10'>
                <p className='w-full text-right sm:text-center font-bold'>color 5</p>
            </div>
        </div>
    </div>
  )
}

export default Palette