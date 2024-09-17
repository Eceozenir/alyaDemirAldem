"use client"

import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

export default function Carousels(){
    return(
        <div className='carousel'>
        <Carousel fade>
        <Carousel.Item>
            <Image className='carouselImg' src='/yatayCarousel3.jpg' alt='First slide'></Image>
            <Carousel.Caption>
            <h3>Bu, Bizim Hikayemiz</h3>
            <p></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <img className='carouselImg' src='/yatayCarousel.jpg' alt='Second slide'></img> */}
            <Image className='carouselImg' src='/yatayCarousel.jpg' alt='Second slide'></Image>
            <Carousel.Caption>
            <h3>Gözlerin Cennetim...</h3>
            <p></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <img className='carouselImg' src='/yatayCarousel2.jpg' alt='Third slide'></img> */}
            <Image className='carouselImg' src='/yatayCarousel2.jpg' alt='Third slide'></Image>
            <Carousel.Caption>
            <h3></h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <img className='carouselImg' src='/yatayCarousel4.jpg' alt='Third slide'></img> */}
            <Image className='carouselImg' src='/yatayCarousel4.jpg' alt='Third slide'></Image>
            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <img className='carouselImg' src='/yatayCarousel5.jpg' alt='Third slide'></img> */}
            <Image className='carouselImg' src='/yatayCarousel5.jpg' alt='Third slide'></Image>
            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
    )
}