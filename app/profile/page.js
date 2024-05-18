"use client";
import Styles  from "./profile.module.css"
import { useStore } from "@/app/store/app-store";


export default function Home() {
    const authContext = useStore();


    if (!authContext.isAuth) {
        return <span>You are not logged in</span>
    }
    return (
        <main className="main">
            <img className={Styles["image"]} src="https://avatars.mds.yandex.net/i?id=699e56451be8067bff27ec291bf68a18042726c1-10158687-images-thumbs&n=13" />
            <ul className={Styles['not-found']}><li><a className={Styles['text']}>Ваше имя: <small>{authContext.user?.username}</small></a></li>
            <li><a className={Styles['text']}>Ваша почта: <small>{authContext.user?.email}</small></a></li>
            </ul>
            


        </main>
    );
}