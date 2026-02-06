"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { reviews } from "./reviews";

const ReviewCard = ({ review }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-100 rounded-xl p-6 shadow-sm h-[340px] flex flex-col justify-between">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-bold ${review.color}`}>
          {review.initial}
        </div>
        <div>
          <h4 className="font-semibold">{review.name}</h4>
          <p className="text-sm text-gray-500">{review.time}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mt-3">
        {[...Array(review.rating)].map((_, i) => (
          <Star
  key={i}
  size={18}
  className="text-[#fbbc04] fill-[#fbbc04]"
/>
        ))}
      </div>

      {/* Text */}
      <p
        className={`text-gray-700 mt-3 text-sm leading-relaxed ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {review.text}
      </p>

      {/* Toggle */}
      {review.text.length > 120 && (
        <button
  onClick={() => setExpanded(!expanded)}
  className={`text-sm mt-2 text-left ${
    review.text.length < 90
      ? "text-gray-300 cursor-default"
      : "text-gray-500 hover:underline"
  }`}
  disabled={review.text.length < 90}
>
  {expanded ? "Hide" : "Read more"}
</button>

      )}

      {/* Footer */}
      <div className="flex flex-col items-start gap-2 mt-4">
        <img src="/g.png" alt="google" className="w-5 h-5" />
        <span className="text-sm text-gray-500">Posted on</span>
        <span className="text-blue-500 text-sm">Google</span>
      </div>
    </div>
  );
};

export default ReviewCard;
