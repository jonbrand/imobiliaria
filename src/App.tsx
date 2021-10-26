import React from 'react';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};
