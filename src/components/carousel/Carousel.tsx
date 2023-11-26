/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import { carouselImages } from "../../utils";

export default function Carousel() {
  const [active, setActive] = useState<number>(0);

  const autoPlay = () => {
    const timeOut = setTimeout(() => {
      setActive((prevActive) => (prevActive === 2 ? 0 : prevActive + 1));
    }, 5000);

    return () => clearTimeout(timeOut);
  };

  useEffect(() => {
    const clearAutoPlay = autoPlay();

    return () => {
      // Cleanup on component unmount
      clearAutoPlay();
    };
  }, [active]);

  return (
    <div className="w-full h-full flex justify-between items-center">
      {carouselImages.map((image, index) => (
        <div
          className={`${
            index === active ? "block" : "hidden"
          } animate-fade w-full h-full`}
          key={index}
        >
          <img src={image} className="w-full h-full  object-cover" alt="" />
        </div>
      ))}
    </div>
  );
}
