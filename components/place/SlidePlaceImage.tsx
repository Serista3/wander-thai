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
                alt={`Image of ${title}-${index}`}
                width={1000}
                height={400}
                className="object-cover w-full h-50 sm:h-75 md:h-95 lg:h-115"
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-3 right-3 flex items-center gap-1">
        <CarouselPrevious className="static translate-0 border-gray-500" aria-label="สไลด์ก่อนหน้านี้" />
        <CarouselNext className="static translate-0 border-gray-500" aria-label="สไลด์ถัดไป" />
      </div>
    </Carousel>
  );
}
