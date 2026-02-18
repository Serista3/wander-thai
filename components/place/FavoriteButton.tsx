'use client';

import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/store/FavoriteContext';

export default function FavoriteButton({ id }: { id: string }) {
  const { favorites, toggleFav } = useFavorites()

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full border-gray-300"
      onClick={() => toggleFav(id)}
    >
      <Heart fill={`${favorites.find(fav => fav.placeId === id) ? 'black' : 'transparent'}`} />
    </Button>
  );
}
