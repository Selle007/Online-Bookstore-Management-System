import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Categories from './Categories'

export const App = () => {
  return (
      <>
    <Routes>
        <Route path="/" element={<Categories />} />
    </Routes>
    </>
  )
}
