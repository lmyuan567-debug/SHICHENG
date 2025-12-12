"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuItems = [
  { title: "HOME", href: "/" },
  {
    title: "ABOUT US",
    href: "/about",
    submenu: [
      { title: "Introduction", href: "/introduction" },
      { title: "Partners", href: "/our-partner" },
      { title: "Location Map", href: "/location-map" },
    ],
  },
  {
    title: "SERVICES",
    href: "/services",
    submenu: [
      { title: "Asset Recovery", href: "/asset-recovery" },
      { title: "Data Sanitization", href: "/data-sanitization" },
      { title: "Consignment Services", href: "/consignment" },
    ],
  },
  {
    title: "GRADING",
    href: "/grading",
    submenu: [
      { title: "New", href: "/grade-new-v2" },
      { title: "Refurbished", href: "/refurbished-2" },
      { title: "Grade A+", href: "/grade-a-2" },
      { title: "Grade A", href: "/grade-a-3" },
      { title: "Grade B+", href: "/grade-b-3" },
      { title: "Grade B", href: "/grade-b-4" },
      { title: "Grade C", href: "/grade-c-3" },
      { title: "Damaged/Salvage", href: "/damagedsalvage" },
    ],
  },
  {
    title: "OPERATION",
    href: "/operation",
    submenu: [
      { title: "Data Destruction", href: "/data-destruction-op" },
      { title: "RETURN POLICY", href: "/return-policy" },
      { title: "Traceability and Tracking", href: "/traceability-and-tracking" },
    ],
  },
];

export function Navigation() {
  return (
    <div className="hidden lg:flex items-center gap-6">
      {menuItems.map((item, index) => {
        if (item.submenu) {
          return (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-[#3f4c4d] hover:text-[#57b79c] transition-colors outline-none">
                {item.title}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[200px]">
                {item.submenu.map((subitem, subindex) => (
                  <DropdownMenuItem key={subindex} asChild>
                    <Link
                      href={subitem.href}
                      className="cursor-pointer text-[#3f4c4d] hover:text-[#57b79c]"
                    >
                      {subitem.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }
        return (
          <Link
            key={index}
            href={item.href}
            className="text-[#3f4c4d] hover:text-[#57b79c] transition-colors"
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}
