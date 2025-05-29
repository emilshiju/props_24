import { useMemo } from "react";
import { StarIcon } from '@heroicons/react/24/solid';

type Review = {
  rating: number;
  // you can add other fields if needed
};

const ReviewStars = ({ reviews }: { reviews: Review[] }) => {
  const reviewCount = reviews.length;

  // Calculate average rating using useMemo for performance optimization
  const averageRating = useMemo(() => {
    if (reviewCount === 0) return 0;
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return total / reviewCount;
  }, [reviews, reviewCount]);

  const stars = useMemo(() => 
    [...Array(5)].map((_, i) => (
      <StarIcon 
        key={i} 
        className={`h-5 w-5 ${i < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`} 
      />
    )), [averageRating]
  );

  return (
    <div className="flex items-center p-3 pl-6">
      <div className="flex">
        {stars}
      </div>
      <p className="ml-2 text-black">
        {averageRating.toFixed(1)} ({reviewCount} review{reviewCount !== 1 ? 's' : ''})
      </p>
    </div>
  );
};

export default ReviewStars;
