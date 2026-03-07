import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Category } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Card className="relative w-full p-0 border-none group">
      <Link href={`/browse?category=${category.title}`} className="absolute w-full h-full z-3" aria-label={`ไปที่หน้าค้นหาสถานที่ท่องเที่ยวตามหมวดหมู่${category.title}`} />
      <div className="overflow-hidden rounded-lg relative">
        <div className="shadow-[inset_0_-78px_35px_0_rgba(0,0,0,0.70)] group-hover:shadow-[inset_0_-70px_40px_0_rgba(0,0,0,0.5)] transition-all duration-300 absolute top-0 left-0 w-full h-full"></div>
        <Image
          src={category.image}
          alt={`Image of ${category.title}`}
          className="object-cover w-full h-45"
          width={260}
          height={260}
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
        />
      </div>
      <CardHeader className="absolute bottom-2 left-0 w-full p-2">
        <CardTitle className="text-white z-4">{category.title}</CardTitle>
        <CardDescription className="line-clamp-2 font-light text-gray-200 z-4">
          {category.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
