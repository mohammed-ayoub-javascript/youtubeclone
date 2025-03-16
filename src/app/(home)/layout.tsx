import React from "react";
import { HomeLayout } from "@/modules/home/ui/layout/home-layout";

export default async function MainHomeLayout({children} : {children : React.ReactNode}){
    return(
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}