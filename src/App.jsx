// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import TestimonialCard from './component/TestimonialCard'
import './App.css'


function App() {

  const customer1 = {
    customerName: "Emily Watson",
    reviewText: "This service was amazing! Highly recommended.",
  }
  const customer2 = {
    customerName: "Virat kohli",
    reviewText: "I enjoyed this service very much,great experience!",
  }
  const customer3 = {
    customerName: "Rohit Sharma",
    reviewText: "It was great experience! highly recommended."
  }

  return (
    <>
      <div className='flex justify-center items-center gap-6 h-screen bg-gray-100'>
        <TestimonialCard {...customer1} />
        <TestimonialCard {...customer2} />
        <TestimonialCard {...customer3} />
      </div>
        
    </>
  )
}

export default App
