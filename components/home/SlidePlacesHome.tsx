'use client';

import { Place } from '@/types';
import { useRef } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';
import { Separator } from '../ui/separator';
import { MapPin } from 'lucide-react';

export default function SlidePlacesHome({ places }: { places: Place[] }) {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {places.map((place, index) => (
          <CarouselItem key={place.id}>
            <div className="relative">
              <div className="h-70 sm:h-85 md:h-100 overflow-hidden">
                <Image
                  src={place.gallery.at(0)!}
                  alt={`Image of ${place.name}`}
                  className="object-cover w-full h-full brightness-50"
                  width={1200}
                  height={400}
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
              </div>
              <div className="container absolute bottom-6 left-1/2 -translate-x-1/2 text-white">
                <Heading level="2">{place.name}</Heading>
                <div className="flex gap-2 mb-5 mt-2">
                  <MapPin aria-hidden={true} />
                  <Paragraph>{place.province}</Paragraph>
                </div>
                <Separator />
                <Paragraph className="mt-3">{place.description_full}</Paragraph>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="max-w-275 mx-auto w-full flex gap-1.5 justify-end pt-4 px-4">
          <CarouselPrevious className="static translate-y-0 border-gray-400" aria-label="สไลด์ก่อนหน้านี้" />
          <CarouselNext className="static translate-y-0 border-gray-400" aria-label="สไลด์ถัดไป" />
        </div>
      </div>
    </Carousel>
  );
}
