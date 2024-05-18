'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { Preloader } from '../components/Preloader/preloader';
import { endpoints } from "@/app/api/config";
export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "pixel-games");
  return (
    <main className="pixel-games">
            {newGames ? (
        <CardsListSection id="pixel-games" title="НоПиксельныевые" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
    
  )

}