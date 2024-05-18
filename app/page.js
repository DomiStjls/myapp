"use client";
import { useGetDataByCategory } from "./api/api-hooks";
import { Banner } from "./components/Banner/Banner";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";
import { Promo } from "./components/Promo/Promo";
import { Preloader } from './components/Preloader/preloader';
import { useEffect } from "react";
import { endpoints } from "@/app/api/config";
 

export default function Home() {

  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error("Ошибка получения данных");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        return error;
      }
    };
    getData("https://localhost:3001/api/games");
  }, []);

  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className="main">
      
      {popularGames || newGames ?
      (<><Banner />
      <CardsListSection type='slider' id="popular" title="Популярные" data={popularGames} />
      <CardsListSection type='slider' id="new" title="Новые" data={newGames} />
      <Promo /></>)
       :
        (<Preloader/>)
      }
    </main>
  );
}