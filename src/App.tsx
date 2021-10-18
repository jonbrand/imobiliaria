import { useState } from "react";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { SliderData } from "./data/SliderData";
import { GlobalStyle } from "./styles/global";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
    </>
  ) ;
}

export default App;
