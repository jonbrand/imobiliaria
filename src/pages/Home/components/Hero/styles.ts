import styled, { css, keyframes } from 'styled-components/macro';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export const HeroSection = styled.section`
  display: flex;

  height: 100vh;
  max-height: 1100px;
`;

export const HeroWrapper = styled.div<any>`
  height: 100%;
  display: flex;
  position: relative;
  transition: transform 1s ease;

  transform: translateX(${props => `-${props.current * 33.5}%`});
`;

export const HeroSlide = styled.div`
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100%;
`;

export const HeroSlider = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  pointer-events: none;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: brightness(70%);
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  font-weight: 600;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

export const SliderButtons = styled.div<any>`
  position: fixed;
  bottom: 50px;
  left: calc(${props => `${props.current * 100}vw`} + 50px);
  transition: left 1s;

  display: flex;
  z-index: 10;
`;

export const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;

  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;

  padding: 10px;
  margin-right: 1rem;
  user-select: none;

  transition: 0.3s;
  box-shadow: 5px 0 5px 0 rgba(0, 0, 0, 0.5);

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

export const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;
