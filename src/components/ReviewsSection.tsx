
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  project: string;
  content: string;
  rating: number;
  university: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    project: "E-Learning Platform",
    content: "Excellent service! The project was delivered on time and the setup support was amazing. Saved me a lot of time and effort for my final year presentation.",
    rating: 5,
    university: "VTU Belgaum"
  },
  {
    id: 2,
    name: "Priya Patel",
    project: "Hospital Management System",
    content: "Very affordable compared to other options in the market. The code was well-documented which helped me understand and present it confidently.",
    rating: 4,
    university: "BMS College of Engineering"
  },
  {
    id: 3,
    name: "Arun Kumar",
    project: "Smart Parking System",
    content: "Great communication throughout the project. They made several customizations for me at no extra cost. Highly recommended for final year students!",
    rating: 5,
    university: "PES University"
  }
];

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-700 mb-4">{review.content}</p>
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 bg-blue-100 text-blue-600">
            <span className="text-lg font-semibold">{review.name.charAt(0)}</span>
          </Avatar>
          <div>
            <p className="font-semibold">{review.name}</p>
            <p className="text-sm text-gray-600">{review.university}</p>
            <p className="text-xs text-vtu-blue">{review.project}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-vtu-blue">
          Student Reviews
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Here's what our students are saying about their project experience with us
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
