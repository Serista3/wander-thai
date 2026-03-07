import { getPlaces } from '@/action/actions';
import { Place } from '@/types';
import SlidePlacesHome from '@/components/home/SlidePlacesHome';
import SectionContent from '@/components/home/SectionContent';
import CategoryList from '@/components/home/CategoryList';
import { categories } from '@/lib/placeholder-data';
import PlaceList from '@/components/home/PlaceList';
import { Separator } from '@/components/ui/separator';
import Paragraph from '@/components/ui/Paragraph';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import contactImg from '@/public/images/ติดต่อเรา.png';

export default async function Home() {
  const places: Place[] = await getPlaces();
  const sildeData = places.slice(5, 10);
  const popularPlaces = [...places]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 7);
  const moodPlaces = places
    .filter((place) => place.tags.includes('ผ่อนคลาย'))
    .slice(0, 7);
  const neturalPlaces = places
    .filter((place) => place.category.includes('ภูเขา'))
    .slice(0, 7);

  return (
    <div>
      <SlidePlacesHome places={sildeData} />
      <SectionContent title="หมวดหมู่">
        <CategoryList categories={categories} />
      </SectionContent>
      <Separator />
      <SectionContent title="ยอดฮิต">
        <PlaceList places={popularPlaces} />
      </SectionContent>
      <SectionContent title="บรรยากาศดี">
        <PlaceList places={moodPlaces} />
      </SectionContent>
      <SectionContent title="ธรรมชาติ">
        <PlaceList places={neturalPlaces} />
      </SectionContent>
      <Separator />
      <SectionContent title="ติดต่อเรา">
        <div className="flex flex-col sm:flex-row gap-8 mb-4">
          <div className='flex flex-col justify-between'>
            <Paragraph>
              เราให้บริการแก่ผู้เข้าชมเว็บไซต์อย่างเต็มที่
              หากท่านประสบปัญหาในด้านใด หรือมีเรื่องที่ต้องการสอบถาม
              สามารถติดต่อกับทางบริษัทเราได้ที่ด่านล่างนี้
            </Paragraph>
            <Button
              variant="default"
              className="font-semibold mt-6 w-fit"
              asChild
            >
              <Link href="contact">ติดต่อเรา</Link>
            </Button>
          </div>
          <div className='w-full sm:h-40 sm:w-100 rounded-lg overflow-hidden'>
            <Image
              src={contactImg}
              alt="รูปภาพแสดงในหัวข้อติดต่อเรา"
              className="w-full h-full object-cover"
              width={400}
              height={300}
            />
          </div>
        </div>
      </SectionContent>
    </div>
  );
}
