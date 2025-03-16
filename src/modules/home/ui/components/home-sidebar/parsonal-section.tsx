"use client";
import { SidebarGroup, SidebarGroupContent , SidebarGroupLabel, SidebarMenuButton , SidebarMenuItem} from '@/components/ui/sidebar';
import { FlameIcon, HistoryIcon, ListVideoIcon, PlaySquareIcon, ThumbsUpIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const items = [
    {
        title:"التأريخ",
        url:"/playlists/history",
        icon : HistoryIcon,
        auth : true,
    },
    {
      title:"تم الاعجاب",
      url:"/playlists/liked",
      icon : ThumbsUpIcon,
      auth : true,
    },
    {
      title:"قوائم التشغيل",
      url:"/playlists",
      icon : ListVideoIcon,
      auth : true,

    }
];

const ParsonalSection = () => {
  return (
    <div >
      <SidebarGroup>
        <SidebarGroupLabel>حسابك</SidebarGroupLabel>
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

export default ParsonalSection;