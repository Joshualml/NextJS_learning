// import Image from "next/image";
import styles from "./page.module.css";
import Favorito from "@/components/Favorito";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello, NextJs!</h1>
      <ul className={styles.listBorder}>
        <Favorito pageName={"Sobre ti"} linkRef={"/Joshua"}/>
        <Favorito pageName={"Balon de Volley"} linkRef={"/balonDeVolley"}/>
        <Favorito pageName={"Guitarra"} linkRef={"/guitarra"}/>
        <Favorito pageName={"PC Gamer"} linkRef={"/pcGamer"}/>
      </ul>
    </div>
  );
}
