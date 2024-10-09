"use client";
import { useRouter } from "next/navigation";

export default function BackButton () {
    const route = useRouter();

    const handleNavigation = () => {
        route.back();
    }
    return <button onClick={handleNavigation}>Pagina anterior</button>
}