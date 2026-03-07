import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Place } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import FavoriteButton from './FavoriteButton';
import Paragraph from '../ui/Paragraph';
import Heading from '../ui/Heading';
import { MapPin, Star } from 'lucide-react';

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Card className="relative w-full h-full pt-0 border-gray-300 group">
      <Link
        className="absolute top-0 left-0 size-full z-3"
        href={`/place/${place.id}`}
        aria-label={`ไปที่หน้ารายละเอียดของสถานที่ท่องเที่ยว${place.name}`}
      ></Link>
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={`${place.gallery.at(0)!}`}
          alt={`Image of ${place.name}`}
          width={350}
          height={210}
          className="w-full h-50 object-cover group-hover:scale-104 transition-all duration-300 brightness-75"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <Badge
          className={`absolute top-4 right-4 z-4 font-semibold ${place.status === 'เปิด' ? 'bg-green-400 text-black' : 'bg-red-700'} text-sm`}
        >
          {place.status}
        </Badge>
      </div>
      <CardHeader>
        <CardAction className="z-4">
          <FavoriteButton id={place.id} />
        </CardAction>
        <CardTitle className="z-4">
          <Heading level="3">{place.name}</Heading>
        </CardTitle>

        {/* Additional Header */}
        <div className="z-4 flex flex-col gap-2 mb-3 items-start">
          <div className="text-sm flex gap-2 items-center text-gray-600">
            {place.category}{' '}
            <span className="size-1.5 bg-gray-600 rounded-full"></span>
            {place.tags.join(', ')}
          </div>
          <div className="flex gap-1 items-center">
            <MapPin aria-hidden={true} />
            <span>{place.province}</span>
          </div>
          <Badge className="flex gap-1 items-center bg-yellow-300 text-black">
            <Star fill="black" aria-hidden={true} />
            {place.rating}
          </Badge>
        </div>
        <CardDescription className="z-4">
          <Paragraph>{place.description_full}</Paragraph>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
