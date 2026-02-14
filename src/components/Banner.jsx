import { useEffect, useState } from "react";

const slides = [
   "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  "https://images.unsplash.com/photo-1542826438-bd32f43d626f",
  "https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
//   "https://images.unsplash.com/photo-1548365328-8b849e6c7b38",
//   "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
  "https://images.unsplash.com/photo-1670164745517-5b41d4660613?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGZvb2RzfGVufDB8fDB8fHww",
 
];


 

const Banner = () => {
  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 1500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
     
      <img
        src={slides[current]}
        alt="slide"
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
      />

     
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition-all ${
              idx === current ? "bg-primary scale-125" : "bg-white/50"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
