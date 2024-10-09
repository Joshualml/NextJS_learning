"use client"
import Link from 'next/link';
import Image from 'next/image';
import emptyFavorito from  './emptyFavorito.png';
import fullFavorito from './fullFavorito.png';
import { useState } from 'react';
import styles from "./styles.module.css"

interface IFavorito {
    pageName: string;
    linkRef: string;
}

export default function Favorito ({pageName, linkRef}: IFavorito) {
    const empty = emptyFavorito;
    const full = fullFavorito;
    const [favorite, setFavorite] = useState(empty);

    const toogleFavorite = () => {
        const favToogle = (favorite == empty) ? full : empty;
        console.log(favorite == empty)
        setFavorite(favToogle);
    }

    return (
        <div className={styles.main}>
            <li><Link href={linkRef}>{ pageName }</Link></li>
            <button onClick={toogleFavorite} className={styles.btnFav}>
                <Image
                    src={favorite}
                    width={18}
                    height={18}
                    alt="no favorite"
                />
            </button>
        </div>
    )
}