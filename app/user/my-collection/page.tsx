import { getPlaces } from "@/action/actions";
import FavoriteList from "@/components/collection/FavoriteList";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { Place } from "@/types";

export default async function MyCollectionPage() {
  const places: Place[] = await getPlaces();

  return (
    <section className="container py-10 mb-5">
      <Heading className="mb-8">รายการที่ชื่นชอบ</Heading>
      {places.length > 0 && <FavoriteList places={places} />}
      {places.length === 0 && <Paragraph>ไม่มีข้อมูลสถานที่</Paragraph>}
    </section>
  );
}
