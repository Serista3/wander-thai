import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Place } from '@/types';
import PlaceCard from '../place/PlaceCard';

export default function PlaceList({ places }: { places: Place[] }) {
  return (
    <Carousel className="w-full max-w-275 relative">
      <CarouselContent className="-ml-1">
        {places.map((place) => (
          <CarouselItem
            key={place.id}
            className="pl-1 not-first:pl-4 basis-1/1 sm:basis-1/2 lg:basis-1/3 grow"
          >
            <PlaceCard place={place} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -top-11 right-0 flex items-center gap-2">
        <CarouselPrevious className="static translate-0 border-gray-400" />
        <CarouselNext className="static translate-0  border-gray-400" />
      </div>
    </Carousel>
  );
}
