"use client"; 

import { useState } from "react";

const testimonials = [
  {
    name: "Maria Bend",
    title: "Director",
    image: "/cl1.png", 
    text: "Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim",
  },
  {
    name: "John Doe",
    title: "Director",
    image: "/cl2.png",
    text: "Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim",
  },
  {
    name: "Jane Smith",
    title: "Director",
    image: "/cl3.png",
    text: "Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim",
  },
];

export default function Client() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        What Our Clients Say About Us
      </h2>
      <div className="flex justify-center items-center">
        <button onClick={prevSlide} className="text-2xl text-gray-400 mx-2">{"<"}</button>
        
        <div className="flex space-x-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0 hidden"
              } p-6 max-w-sm bg-white rounded-lg shadow-lg`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.12-6.545L.244 7.91l6.563-.955L10 1.5l2.194 5.455 6.563.955-4.998 4.635 1.12 6.545L10 15z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  {testimonial.text}
                </p>
                <p className="font-semibold text-gray-800">
                  {testimonial.name}, {testimonial.title}
                </p>
                <a href="#" className="text-blue-500 mt-2">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <button onClick={nextSlide} className="text-2xl text-gray-400 mx-2">{">"}</button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
