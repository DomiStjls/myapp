'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { Preloader } from '../components/Preloader/preloader';
import { endpoints } from "@/app/api/config";
export default function New() {
  const newGames = useGetDataByCategory(endpoints.games,"runner");
    return (
    <main className="runners">
            {newGames ? (
        <CardsListSection id="runners" title="Ранеры" data={newGames} />
      ) : (
        <Preloader />
      )}
  </main>
    )

}