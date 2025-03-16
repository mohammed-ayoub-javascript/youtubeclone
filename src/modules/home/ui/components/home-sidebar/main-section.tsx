"use client";
import { SidebarGroup, SidebarGroupContent , SidebarMenuButton , SidebarMenuItem} from '@/components/ui/sidebar';
import { FlameIcon, HomeIcon, PlaySquareIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const items = [
    {
        title:"الرئيسية",
        url:"/",
        icon : HomeIcon,
        auth : false,
    },
    {
      title:"المشتركين",
      url:"/feed/subscriptions",
      icon : PlaySquareIcon,
      auth : true,
    },
    {
      title:"الترند",
      url:"/feed/trending",
      icon : FlameIcon,
    }
];

const MainSection = () => {
  return (
    <div >
      <SidebarGroup>
        <SidebarGroupContent>
            {items.map((item) => (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton 
                tooltip={item.title}
                asChild
                isActive={false}
                onClick={() => {}}
                >
                  <Link href={item.url} className='flex items-center gap-4'>
                    <item.icon />
                    <span className=' text-sm'>
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
        </SidebarGroupContent>
      </SidebarGroup>
    </div>
  )
}

export default MainSection