import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function SlidePlaceImage({
  title,
  gallery,
}: {
  title: string;
  gallery: string[];
}) {
  return (
    <Carousel className="w-full relative">
      <CarouselContent>
        {gallery.map((image, index) => (
          <CarouselItem key={`${title}-${index}`}>
            <div className="rounded-lg overflow-hidden border border-gray-300">
              <Image
                src={image}
                alt={`${title}-${index}`}
                width={1000}
                height={600}
                className="object-cover w-full h-50"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-3 right-3 flex items-center gap-1">
        <CarouselPrevious className="static translate-0 border-gray-500" />
        <CarouselNext className="static translate-0 border-gray-500" />
      </div>
    </Carousel>
  );
}
