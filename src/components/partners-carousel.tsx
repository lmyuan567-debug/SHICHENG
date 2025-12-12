"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const partners = [
  { name: "Assurant", logo: "https://ext.same-assets.com/4249926934/2440112022.png" },
  { name: "Asurion", logo: "https://ext.same-assets.com/4249926934/1195534260.jpeg" },
  { name: "AT&T", logo: "https://ext.same-assets.com/4249926934/800717230.jpeg" },
  { name: "AUCNET", logo: "https://ext.same-assets.com/4249926934/1712834446.png" },
  { name: "SMS", logo: "https://ext.same-assets.com/4249926934/4022042005.png" },
  { name: "BST", logo: "https://ext.same-assets.com/4249926934/1347135491.png" },
  { name: "CST", logo: "https://ext.same-assets.com/4249926934/2784908591.jpeg" },
  { name: "EcoATM", logo: "https://ext.same-assets.com/4249926934/894838625.png" },
  { name: "GAM", logo: "https://ext.same-assets.com/4249926934/3306081242.jpeg" },
  { name: "HYLA", logo: "https://ext.same-assets.com/4249926934/4053435644.jpeg" },
  { name: "INGRAM", logo: "https://ext.same-assets.com/4249926934/3388361604.jpeg" },
  { name: "SPRINT", logo: "https://ext.same-assets.com/4249926934/476896481.jpeg" },
  { name: "T-Mobile", logo: "https://ext.same-assets.com/4249926934/3096052500.png" },
  { name: "Verizon", logo: "https://ext.same-assets.com/4249926934/2264326413.jpeg" },
];

export function PartnersCarousel() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3f4c4d] mb-12 text-center md:text-left">
          OUR PARTNERS
        </h2>
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="p-4 flex items-center justify-center h-32 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={80}
                    className="object-contain max-h-20"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
