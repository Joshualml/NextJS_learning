"use client"
import BackButton from "@/components/backButton";
import { useParams } from "next/navigation";

export default function Redaccion () {
    const { id } = useParams();

    return (
        <div>
            <h1>Soy { id }</h1>
            <textarea name="" id="" placeholder="Escribe acerca de ti"></textarea>
            <footer>
                < BackButton/>
            </footer>
        </div>
    )
}

