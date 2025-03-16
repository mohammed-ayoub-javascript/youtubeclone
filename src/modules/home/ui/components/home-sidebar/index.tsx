import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import MainSection from "./main-section"
import { Separator } from "@/components/ui/separator"
import ParsonalSection from "./parsonal-section"

export const HomeSidebar = () => {
    return(
        <Sidebar  className=" pt-16 z-40 border-none" side="right" collapsible="icon">
            <SidebarContent  className=" bg-background">
                <MainSection />
                <Separator />
                <ParsonalSection />
            </SidebarContent>
        </Sidebar>
    )
}