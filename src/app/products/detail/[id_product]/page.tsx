"use client";

import { MainLayout } from "@/layouts";
import { useParams } from "next/navigation";

export default function ProductDetail() {
    const params = useParams();
    const {id_product} = params;
    console.log(id_product)
    return (
        <MainLayout>
            <div></div>
        </MainLayout>
    )
}