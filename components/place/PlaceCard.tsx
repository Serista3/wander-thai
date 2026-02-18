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
      ></Link>
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={`${place.gallery.at(0)!}`}
          alt={place.name}
          width={1000}
          height={400}
          className="w-full h-50 object-cover group-hover:scale-104 transition-all duration-300"
        />
        <Badge
          className={`absolute top-4 right-4 z-4 ${place.status === 'เปิด' ? 'bg-emerald-500' : 'bg-red-500'} text-sm`}
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
            <MapPin />
            <span>{place.province}</span>
          </div>
          <Badge className="flex gap-1 items-center bg-yellow-300 text-black">
            <Star fill="black" />
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
