"use client"
import { c2aLabels } from "@/utils/labels";
import Link from "next/link";

const C2AButton = () => {

    return (
        <Link href={c2aLabels.url} className="px-6 md:px-8 py-4 bg-color-primary rounded-lg texte-center w-fit font-bold">
            {c2aLabels.label}
        </Link>
    )
}

export default C2AButton;