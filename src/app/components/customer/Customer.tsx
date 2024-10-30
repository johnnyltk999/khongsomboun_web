"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonials } from "./CustomerData";

export default function page() {
  return (
    <section id="customer">
      <div className="p-10 mb-20">
        <h1 className="text-red-600 text-3xl font-bold text-center mb-10 pt-10">
          ລູກຄ້າຂອງພວກເຮົາ
        </h1>
        <div className="h-[25rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden bg-primaryBase">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
