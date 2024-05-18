'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { Preloader } from '../components/Preloader/preloader';
import { endpoints } from "@/app/api/config";
export default function New() {
  const newGames = useGetDataByCategory(endpoints.games,"shooter");
    return (
    <main className="shooters">
            {newGames ? (
        <CardsListSection id="shooters" title="Шутеры" data={newGames} />
      ) : (
        <Preloader />
      )}
  </main>
    )

}