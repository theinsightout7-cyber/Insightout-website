// TestimonialContainer.tsx
import TestimonialCard from "./Testimonial";

const testimonials = [
  { id: 1, name: "John Doe", text: "Great service!", img: "/assets/image-1.jpg", position: "CEO" },
  { id: 2, name: "Jane Smith", text: "Highly recommend!", img: "/assets/image-2.jpg", position: "CEO" },
  { id: 3, name: "Alice Johnson", text: "Very professional.", img: "/assets/image-3.jpg", position: "CEO" },
  { id: 4, name: "Bob Brown", text: "Excellent experience.", img: "/assets/image-4.jpg", position: "CEO" },
  { id: 5, name: "Mary Lee", text: "Will use again!", img: "/assets/image-5.jpg", position: "CEO" },
];

const doubled = [...testimonials, ...testimonials];

const TestimonialContainer = () => {
  return (
    <>
      {/* Inline custom animation styles */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .scroll-left {
            animation: scroll-left 40s linear infinite;
          }

          .scroll-right {
            animation: scroll-right 40s linear infinite;
          }
        `}
      </style>

      <div className="flex flex-col w-full overflow-hidden bg-[var(--background-light)] gap-4 py-12">
        {/* Row 1: Left to Right */}
        <div className="w-full overflow-hidden">
          <div className="flex py-1 gap-5 w-max scroll-right">
            {doubled.map((item, idx) => (
              <div key={`r1-${idx}`} className="min-w-[300px]">
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="w-full overflow-hidden">
          <div className="flex py-1 gap-5 w-max scroll-left">
            {doubled.map((item, idx) => (
              <div key={`r2-${idx}`} className="min-w-[300px]">
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialContainer;
