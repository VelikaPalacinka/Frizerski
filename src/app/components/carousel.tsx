'use client'
import styles from './components.module.scss';
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import UseEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { transform } from 'next/dist/build/swc';


export default function Carousel({data} : {
    data: {
        image: string
    }[]
}) {
    const [emblaRef] = UseEmblaCarousel({ loop: true }, [Autoplay({delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true})])
    

    return (
        <div className={styles.gallery} ref={emblaRef}>
            <div className={styles.slide}>
                {data.map((v, i) => (
                     <div key={i} className={styles.slika}>
                         <Image src={v.image} fill alt={`Image-${i}`} sizes='(max-width= 500px) (max-heigth= 500px)'/>
                     </div>
                ))}
            </div>
        </div>
    )
}

