"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function HeroCarousel() {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem>
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-[#e8f3f1] to-[#ccdad9]">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-[#3f4c4d] mb-4">
                  We dedicate on
                </h1>
                <p className="text-xl md:text-2xl text-[#3f4c4d] mb-6">
                  environmental... and keep pace on.
                </p>
                <div className="flex justify-center md:justify-start">
                  <svg className="w-20 h-20 text-[#99b847]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                    <path d="M6.05 8.05L8 6.1V4h2v2.1l1.95 1.95 1.41-1.41L12 5.29V2h-2v3.29L8.64 6.64z"/>
                    <path d="M17.95 8.05l-1.41 1.41L18.49 11H21v2h-2.51l-1.95 1.95 1.41 1.41L20.29 14H24v-2h-3.71z"/>
                    <path d="M6.05 15.95l1.41-1.41L5.51 13H3v-2h2.51l1.95-1.95-1.41-1.41L3.71 10H0v2h3.71z"/>
                  </svg>
                </div>
              </div>
              <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2">
                <Image
                  src="https://ext.same-assets.com/4249926934/1570568499.jpeg"
                  alt="Smartphones"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <Image
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath fill='%2399b847' d='M0 120 Q150 100 300 110 T600 100 T900 110 T1200 100 V120 H0'/%3E%3C/svg%3E"
                alt="Grass"
                width={1200}
                height={120}
                className="w-full"
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-[#d5e5e3] to-[#a8c5c1]">
            <div className="container mx-auto px-4 h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#3f4c4d] mb-4">
                  Professional Services
                </h2>
                <p className="text-xl md:text-2xl text-[#3f4c4d]">
                  Asset Recovery & Data Sanitization
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-[#ccdad9] to-[#95a5ae]">
            <div className="container mx-auto px-4 h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Quality Assurance
                </h2>
                <p className="text-xl md:text-2xl text-white">
                  Trusted by Leading Partners
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
