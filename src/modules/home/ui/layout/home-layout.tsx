import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import HomeNavbar from "@/modules/home/ui/components/home-navbar/index";
import { HomeSidebar } from "../components/home-sidebar";


export  function HomeLayout({children} : {children : React.ReactNode}){
    return(
        <SidebarProvider>
            <div>
                <div className=" w-full">
                   <HomeNavbar />
                   <div className=" flex min-h-screen pt-[4rem]">
                      <HomeSidebar />
                      <main>
                      {children}
                      </main>
                   </div>
                </div>
            </div>            
        </SidebarProvider>
    )
}