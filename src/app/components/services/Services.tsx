import React from "react";
import { services } from "./servicesData";

export default function Services() {
  return (
    <section id="services">
      <div className="container mx-auto p-8">
        <h1 className="text-red-600 text-4xl font-bold text-center m-12">
          ບໍລິການຂອງພວກເຮົາ
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-500 rounded-md shadow-lg"
            >
              <div className="flex items-center justify-center mb-4 text-primaryBase text-4xl">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold text-center mb-4">
                {service.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-500">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
