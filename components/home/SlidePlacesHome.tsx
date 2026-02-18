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
        {places.map((place) => (
          <CarouselItem key={place.id}>
            <div className="relative">
              <div className='h-70 overflow-hidden'>
                <Image
                  src={place.gallery.at(0)!}
                  alt={place.name}
                  className="object-cover w-full h-full brightness-50"
                  width={1200}
                  height={500}
                />
              </div>
              <div className="container absolute bottom-6 left-1/2 -translate-x-1/2 text-white">
                <Heading level="2">{place.name}</Heading>
                <div className="flex gap-2 mb-5 mt-2">
                  <MapPin />
                  <Paragraph>{place.province}</Paragraph>
                </div>
                <Separator />
                <Paragraph className='mt-3'>{place.description_full}</Paragraph>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex absolute top-4 right-4 gap-1.5">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}