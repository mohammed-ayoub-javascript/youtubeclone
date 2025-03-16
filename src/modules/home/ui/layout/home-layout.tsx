import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import HomeNavbar from "@/modules/home/ui/components/home-navbar/index";


export  function HomeLayout({children} : {children : React.ReactNode}){
    return(
        <SidebarProvider>
            <div>
                <div className=" w-full">
                   <HomeNavbar />
                   <div>
                      {children}
                   </div>
                </div>
            </div>            
        </SidebarProvider>
    )
}