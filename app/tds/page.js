'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { Preloader } from '../components/Preloader/preloader';
import { endpoints } from "@/app/api/config";
export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "TDS");
    return (
    <main className="tds">
            {newGames ? (
        <CardsListSection id="tds" title="TDS" data={newGames} />
      ) : (
        <Preloader />
      )}
  </main>
    )

}