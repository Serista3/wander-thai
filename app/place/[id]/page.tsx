import { getPlaces } from "@/action/actions";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { Place } from "@/types";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MapPin, Star, SquareCheckBig } from "lucide-react";
import { SlidePlaceImage } from "@/components/place/SlidePlaceImage";
import { Badge } from "@/components/ui/badge";
import FavoriteButton from "@/components/place/FavoriteButton";
import { Separator } from "@/components/ui/separator";
import PlaceList from "@/components/home/PlaceList";

type PlaceDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PlaceDetailPage({
  params,
}: PlaceDetailPageProps) {
  const id = (await params).id;
  const places: Place[] = await getPlaces();
  const place = places.find((place) => place.id === id);

  if (!place)
    return <Paragraph>ไม่มีข้อมูลรายละเอียดสำหรับสถานที่นี้</Paragraph>;

  return (
    <section className="container py-10 mb-5">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">หน้าแรก</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="line-clamp-1">
              {place.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Heading className="mb-2">{place.name}</Heading>
      <Paragraph className="flex gap-1 mb-4">
        <MapPin />
        {place.province}
      </Paragraph>
      <SlidePlaceImage title={place.name} gallery={place.gallery} />

      {/* Detail */}

      <div>
        <div className="flex flex-col gap-15">
          <div className="flex flex-col gap-1 items-start text-black mt-3">
            <div className="flex gap-3 justify-between items-center w-full">
              <div className="text-sm flex gap-2 items-center">
                {place.category}{" "}
                <span className="size-1.5 rounded-full bg-black"></span>
                {place.tags.join(", ")}
              </div>
              <FavoriteButton id={place.id} />
            </div>
            <Badge className="flex gap-1 items-center bg-yellow-300 text-black">
              <Star fill="black" />
              {place.rating}
            </Badge>
            <Paragraph className="mt-4">{place.description_full}</Paragraph>
          </div>
          <section className="flex flex-col gap-6">
            <Heading level="2">ข้อมูลทั่วไป</Heading>
            <div className="p-6 rounded-lg border border-gray-300">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Heading level="4">สถานะ</Heading>
                  <Paragraph>{place.status}</Paragraph>
                </li>
                <li>
                  <Heading level="4">อุณหภูมิเฉลี่ย</Heading>
                  <Paragraph>{place.average_temperature}</Paragraph>
                </li>
                <li>
                  <Heading level="4">เวลาเปิดทำการ</Heading>
                  <Paragraph>{place.opening_hours}</Paragraph>
                </li>
                <li>
                  <Heading level="4">ราคาค่าเข้า</Heading>
                  <Paragraph>{place.entrance_fee}</Paragraph>
                </li>
                <li>
                  <Heading level="4">ช่วงเวลาแนะนำ</Heading>
                  <Paragraph>{place.recommended_time}</Paragraph>
                </li>
                <li>
                  <Heading level="4">ที่จอดรถ</Heading>
                  <Paragraph>{place.parking}</Paragraph>
                </li>
                <li>
                  <Heading level="4">การเดินทาง</Heading>
                  <Paragraph>{place.travel_method}</Paragraph>
                </li>
              </ul>
            </div>
          </section>
          <div className="rounded-lg bg-emerald-500 text-white p-4 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <SquareCheckBig />
              <Heading level="3">Tip แนะนำ</Heading>
            </div>
            <Separator />
            <Paragraph className="mt-3">{place.tips}</Paragraph>
          </div>
          <section className="flex flex-col gap-12">
            <Heading level="2">แนะนำสถานที่ท่องเที่ยวอื่นๆ</Heading>
            <PlaceList
              places={places.slice(0, 3).sort((a, b) => b.rating - a.rating)}
            />
          </section>
        </div>
        <iframe
          className="max-w-150 h-125 mt-10 rounded-lg"
          style={{
            border: 0,
          }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${place.latitude},${place.longitude}&output=embed`}
        ></iframe>
      </div>
    </section>
  );
}
