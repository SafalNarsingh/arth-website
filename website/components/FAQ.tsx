"use client"
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is AR Treasure Hunt?",
      answer: "AR Treasure Hunt is an innovative augmented reality experience that combines real-world exploration with digital treasure hunting. Using your smartphone, you can discover virtual treasures hidden in physical locations around you."
    },
    {
      question: "Should I Be The Student Of Kathmandu University To Join?",
      answer: "No, our AR Treasure Hunt is open to everyone! While we welcome Kathmandu University students, anyone with a smartphone and a sense of adventure can participate in the treasure hunt experience."
    },
    {
      question: "How many Players are Required to Participate?",
      answer: "You need 3 players to compete in this competition. It is very strict that you have 3 players in each round as we have designed all the rounds as per 3 players."
    }
  ];

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-10 px-4 font-jersey" id='faq'>
      <div className="landing_container mx-auto">
        <h1 className="text-5xl md:text-7xl font-semibold mb-12 text-gray-800">
          FAQ<span className="text-orange-500">s</span>
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-2xl  text-gray-800 pr-4">
                  {faq.question}
                </span>
                <span className="shrink-0 text-orange-500 text-2xl font-bold">
                  {openIndex === index ? '−' : '▼'}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;