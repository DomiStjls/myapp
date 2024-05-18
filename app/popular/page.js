'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { Preloader } from '../components/Preloader/preloader';
import { endpoints } from "@/app/api/config";
export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, 'popular')
    return (
    <main className="popular">
            {newGames ? (
        <CardsListSection id="popular" title="Популярные" data={newGames} />
      ) : (
        <Preloader />
      )}
  </main>
    )

}