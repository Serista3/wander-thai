'use client';

import { Favorite } from '@/types';
import { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'sonner';

type FavoirtContext = {
  favorites: Favorite[];
  toggleFav: (id: string) => void;
};

export const FavoriteContext = createContext<FavoirtContext>({
  favorites: [],
  toggleFav: () => {},
});

export default function FavoriteContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const favorites = localStorage.getItem('favorites')
    if(favorites){
      setFavorites(JSON.parse(favorites))
    }
  }, [])

  const toggleFav = function (id: string): void {
    const isFav = favorites.length > 0 && favorites.find((fav) => fav.placeId === id);

    if (!isFav) {
      const newFav: Favorite = {
        id: Date.now().toString(),
        placeId: id,
      };

      localStorage.setItem('favorites', JSON.stringify([...favorites, newFav]));

      setFavorites((prev) => [...prev, newFav]);
    }

    if (isFav) {
      localStorage.setItem(
        'favorites',
        JSON.stringify(favorites.filter((fav) => fav.placeId !== id)),
      );

      setFavorites((prev) => prev.filter((fav) => fav.placeId !== id));
    }

    toast.success(`${isFav ? 'ลบ' : 'เพิ่มไปยัง'}รายการที่ชื่นชอบสำเร็จ!`, {
      position: 'top-center',
      description: (
        <div className="text-gray-500">
          {new Date().toLocaleString('th-TH', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      ),
    });
  };

  const ctxValue = {
    favorites,
    toggleFav,
  };

  return (
    <FavoriteContext.Provider value={ctxValue}>
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoriteContext);
