import { getPlaces } from "@/action/actions";
import FilterControl from "@/components/browse/FilterControl";
import PlaceCard from "@/components/place/PlaceCard";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { Place } from "@/types";

type BrowsePageProps = {
  searchParams: Promise<{
    budget?: string;
    category?: string;
    province?: string;
    status?: string;
    tags?: string;
    ratings?: string;
  }>;
};

export default async function BrowsePage({ searchParams }: BrowsePageProps) {
  const params = await searchParams;
  const places: Place[] = await getPlaces();

  const filterPlaces = places.filter((place) => {
    const ratingValues = params.ratings
      ? params.ratings.split(",").map(Number)
      : [];
    const ratingGte = ratingValues.length > 0 ? ratingValues[0] : 0;
    const ratingLte =
      ratingValues.length > 0 ? ratingValues[ratingValues.length - 1] : 5;

    const matchBudget = params.budget
      ? place.budget.split("-").some((p) => Number(p) <= Number(params.budget))
      : true;

    const matchCategory = params.category
      ? place.category === params.category
      : true;
    const matchProvince = params.province
      ? place.province === params.province
      : true;
    const matchStatus = params.status ? place.status === params.status : true;

    const matchTags = params.tags
      ? params.tags
          .split(",")
          .some((selectedTag) => place.tags.includes(selectedTag))
      : true;

    const matchRating = place.rating >= ratingGte && place.rating <= ratingLte;

    return (
      matchBudget &&
      matchCategory &&
      matchProvince &&
      matchStatus &&
      matchTags &&
      matchRating
    );
  });

  return (
    <section className="container py-10 mb-5">
      <Heading className="mb-8">สำรวจค้นหาสถานที่</Heading>
      <FilterControl />
      <div className="mt-15">
        <Heading level="3">
          สถานที่ที่ค้นพบ{" "}
          <span className="text-gray-400 font-light">({filterPlaces.length} รายการ)</span>
        </Heading>

        {filterPlaces.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 mt-7">
            {filterPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <Paragraph className="mt-7">ไม่พบสถานที่ที่ตรงกับเงื่อนไข</Paragraph>
        )}
      </div>
    </section>
  );
}
