"use client";
import React, { useState } from "react";
import AshwinSantiago from "@/assets/images/image1.jpg";
import AlecWhitten from "@/assets/images/image3.webp";
import ReneWells from "@/assets/images/image4.webp";
import MollieHall from "@/assets/images/image6.jpg";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export const testimonials = [
  {
    quote:
      "Sphereal has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: "Alec Whitten",
    title: "Operations Manager",
    image: AshwinSantiago,
  },
  {
    quote:
      "Sphereal integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: "Jenny Wilson",
    title: "Lead Developer",
    image: AlecWhitten,
  },
  {
    quote:
      "Sphereal's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: "Renald Regan",
    title: "Customer Success Manager",
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like Sphereal. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: "John Doe",
    title: "Product Designer",
    image: MollieHall,
  },
];

export const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <section id="testimonials">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <LayoutGroup>
              <motion.div
                layout
                className="border-gradient lg:mx-20 lg:px-16 lg:py-24 md:px-10 md:mx-10 flex flex-col md:flex-row gap-12 rounded-3xl px-6 py-16 relative"
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="absolute size-20 text-violet-400 top-0 -translate-y-1/2 left-6 md:left-10 lg:left-16"
                />
                <AnimatePresence mode="wait" initial={false}>
                  {testimonials.map((testimonial, index) =>
                    testimonialIndex === index ? (
                      <motion.blockquote
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 25 }}
                        transition={{ duration: 0.5 }}
                        key={testimonial.name}
                        layout
                        className="flex flex-col lg:flex-row gap-12"
                      >
                        <p className="text-xl md:text-2xl font-medium">
                          {testimonial.quote}
                        </p>
                        <cite className="not-italic lg:text-right">
                          <Image
                            className="rounded-xl size-28 max-w-none"
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <div className="font-bold mt-4">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-2">
                            {testimonial.title}
                          </div>
                        </cite>
                      </motion.blockquote>
                    ) : null
                  )}
                </AnimatePresence>
                <motion.div
                  layout="position"
                  className="flex cursor-pointer gap-2 md:flex-col"
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      onClick={() => setTestimonialIndex(index)}
                      key={testimonial.name}
                      className="size-6 relative isolate inline-flex items-center justify-center"
                    >
                      {testimonialIndex === index && (
                        <motion.div
                          layoutId="testimonial-dot"
                          className="absolute border-gradient size-full rounded-full -z-10"
                        ></motion.div>
                      )}
                      <div className="size-1.5 bg-gray-200 rounded-full"></div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </LayoutGroup>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Testimonials;
