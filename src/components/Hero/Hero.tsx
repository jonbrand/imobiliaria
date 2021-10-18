import { useState, useRef, useEffect } from 'react';
import { Button } from "../Button/styles"
import { Arrow, HeroContent, HeroImage, HeroSection, HeroSlide, HeroSlider, HeroWrapper, NextArrow, PrevArrow, SliderButtons } from "./styles"
// import { css } from 'styled-components/macro';

export const Hero = ({ slides }: any) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout: any = useRef(null);

  useEffect(
    () => {
      const nextSlide = () => {
        setCurrent( current => ( current ===length - 1 ? 0 : current + 1));
      };

      timeout.current = setTimeout(nextSlide, 5000);

      return function() {
        if ( timeout.current ) {
          clearTimeout(timeout.current);
        }
      };
    },
    [current, length]
  );

  const nextSlide = () => {
    if ( timeout.current ) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if ( timeout.current ) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? length -1 : current - 1);
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div>
      <HeroSection>
        <HeroWrapper>
          {slides.map((slide: any, index: any) => (
                <HeroSlide key={index}>
                  { index === current && (
                    <HeroSlider>
                      <HeroImage src={slide.image} alt={slide.alt} />
                      <HeroContent>
                        <h1>{slide.title}</h1>
                        <p>{slide.price}</p>
                        <Button 
                          to={slide.path} 
                          primary='true'
                          css={`
                            max-width: 160px;
                          `}
                        >
                          {slide.label}
                          <Arrow />
                        </Button>
                      </HeroContent>
                  </HeroSlider>                
                  )}
                </HeroSlide>
            ))
          }
          <SliderButtons>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    </div>
  )
}