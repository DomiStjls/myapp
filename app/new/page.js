'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { Preloader } from '../components/Preloader/preloader';
import { endpoints } from "@/app/api/config";
export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className="main-inner">
      {newGames ? (
        <CardsListSection id="new" title="Новые" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );

} 