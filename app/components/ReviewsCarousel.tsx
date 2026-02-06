"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ReviewCard from "./ReviewCard";
import { reviews } from "./reviews";

const ReviewsCarousel = () => {
  const [index, setIndex] = useState(0);
  const visible = 3;

  const next = () => {
    if (index < reviews.length - visible) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
   <div className="relative max-w-7xl mx-auto">
  
  {/* MASK */}
  <div className="overflow-hidden">
    <div
      className="flex gap-6 mx-10 transition-transform duration-500"
      style={{ transform: `translateX(-${index * 33.333}%)` }}
    >
      {reviews.map((review, i) => (
        <div key={i} className="min-w-[33.333%]">
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  </div>

  {/* Arrows */}
  <button
    onClick={prev}
    className="absolute left-[-30px] top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
  >
    <ChevronLeft />
  </button>

  <button
    onClick={next}
    className="absolute right-[-30px] top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
  >
    <ChevronRight />
  </button>
</div>

  );
};

export default ReviewsCarousel;
