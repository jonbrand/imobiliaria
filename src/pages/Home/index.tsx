import React, { useState } from 'react';
import { Dropdown } from './components/Dropdown/Dropdown';
import { Hero } from './components/Hero/Hero';
import { InfoSection } from './components/InfoSection/InfoSection';
import { Header } from '../../components/Header/Header';
import { InfoData } from '../../data/InfoData';
import { SliderData } from '../../data/SliderData';
import { Padding } from '../../components/Padding/Padding';

export const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Padding />
    </>
  );
};
