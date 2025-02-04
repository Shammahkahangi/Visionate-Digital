"use client";

import Image from "next/image";

const campaigns = [
  {
    image: "/images/image2.png",
    quote: "Their digital marketing strategy doubled our website traffic in just 3 months.",
    name: "Sarah Johnson",
    title: "Marketing Director, TechStart"
  },
  {
    image: "/images/shop-2.jpeg",
    quote: "The ROI from their targeted ad campaigns exceeded all our expectations.",
    name: "Michael Chen",
    title: "CEO, UrbanFashion"
  },
  {
    image: "/images/s-2.webp",
    quote: "Our social media engagement skyrocketed thanks to their innovative approach.",
    name: "Emma Wilson",
    title: "E-commerce Manager, GreenLife"
  },
];

const ShopifyStores = () => {
  return (
    <section className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
      <div className="p-4 mx-auto relative z-10 w-full">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Digital Marketing Solutions <br />
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto">
          We drive results with data-driven marketing strategies that convert.
        </p>
        
        <div className="md:flex items-center justify-center px-10">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={campaign.image}
                  alt="digital marketing campaign"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto object-cover h-60"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center">
                  &quot;{campaign.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-2">
                  {campaign.name}
                </p>
                <p className="text-neutral-600 text-sm mt-1">
                  {campaign.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-neutral-800">
            Our Services Include
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
            <div className="p-4 bg-white rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-neutral-800">SEO & Content</h4>
              <p className="mt-2 text-neutral-600">Boost organic visibility and drive qualified traffic</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-neutral-800">Social Media Marketing</h4>
              <p className="mt-2 text-neutral-600">Engage audiences across all platforms</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-neutral-800">PPC Advertising</h4>
              <p className="mt-2 text-neutral-600">Maximize ROI with targeted ad campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;