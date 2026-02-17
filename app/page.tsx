import { getPlaces } from "@/action/actions";
import { Place } from "@/types";
import SlidePlacesHome from "@/components/home/SlidePlacesHome";
import SectionContent from "@/components/home/SectionContent";

export default async function Home() {
  const places: Place[] = await getPlaces()
  const sildeData = places.slice(5, 10)

  return (
    <div>
      <SlidePlacesHome places={sildeData} />
      <SectionContent title="Category">

      </SectionContent>
    </div>
  );
}
