"use client"

import * as React from "react"
import {
  IconBrain,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconMail,
  IconFileDescription,
  IconTemplate,
  IconTarget,
  IconHelp,
  IconBrandLinkedin,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconApi,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavTools } from "@/components/nav-tools"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Recruitment Admin", 
    email: "admin@hireflow.com",
    avatar: "", // Remove avatar to prevent 404 error
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Campaigns",
      url: "/campaigns",
      icon: IconTarget,
    },
    {
      title: "Leads",
      url: "/leads",
      icon: IconUsers,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: IconChartBar,
    },
    {
      title: "Templates",
      url: "/templates",
      icon: IconTemplate,
    },
  ],
  navTools: [
    {
      title: "LinkedIn Scraper",
      icon: IconBrandLinkedin,
      isActive: true,
      url: "/scraper",
      items: [
        {
          title: "Active Jobs",
          url: "/scraper/active",
        },
        {
          title: "Scraped Data",
          url: "/scraper/data",
        },
      ],
    },
    {
      title: "Email Automation",
      icon: IconMail,
      url: "/automation",
      items: [
        {
          title: "Email Sequences",
          url: "/automation/sequences",
        },
        {
          title: "Sent Emails",
          url: "/automation/sent",
        },
      ],
    },
    {
      title: "AI Personalization",
      icon: IconBrain,
      url: "/personalization",
      items: [
        {
          title: "Smart Templates",
          url: "/personalization/templates",
        },
        {
          title: "A/B Testing",
          url: "/personalization/testing",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "API Keys",
      url: "/settings/api-keys",
      icon: IconApi,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Help & Support",
      url: "/help",
      icon: IconHelp,
    },
  ],
  documents: [
    {
      name: "Lead Database",
      url: "/database/leads",
      icon: IconDatabase,
    },
    {
      name: "Campaign Reports",
      url: "/reports",
      icon: IconReport,
    },
    {
      name: "Email Templates",
      url: "/templates/email",
      icon: IconFileDescription,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <IconBrandLinkedin className="!size-5 text-primary" />
                <span className="text-base font-semibold">HireFlow</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavTools items={data.navTools} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
