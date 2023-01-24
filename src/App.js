import React, { useState } from 'react';
import Header from './components/header.js';
import Search from './routes/search.js';

import './styles.scss';
export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Search />
      </div>
    </>
  );
}
