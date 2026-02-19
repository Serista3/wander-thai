"use client";

import { useFavorites } from "@/store/FavoriteContext";
import PlaceCard from "../place/PlaceCard";
import { Place } from "@/types";
import Paragraph from "../ui/Paragraph";

export default function FavoriteList({ places }: { places: Place[] }) {
  const { favorites } = useFavorites();
  const favPlaces = places.filter((place) =>
    favorites.some((fav) => fav.placeId === place.id),
  );

  return (
    <>
      {favPlaces.length === 0 && (
        <Paragraph>ยังไม่มีรายการที่ชื่นชอบ</Paragraph>
      )}
      {favPlaces.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favPlaces.map((fav) => (
            <PlaceCard key={fav.id} place={fav} />
          ))}
        </div>
      )}
    </>
  );
}
