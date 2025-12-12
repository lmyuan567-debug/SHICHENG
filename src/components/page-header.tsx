import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  breadcrumbs?: { label: string; href: string }[];
}

export function PageHeader({ title, breadcrumbs = [] }: PageHeaderProps) {
  return (
    <div className="bg-[#d5e5e3] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3f4c4d]">{title}</h1>
          <div className="flex items-center gap-2 text-sm text-[#3f4c4d]">
            <Link href="/" className="hover:text-[#57b79c] transition-colors">
              HOME
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <Link href={crumb.href} className="hover:text-[#57b79c] transition-colors">
                  {crumb.label}
                </Link>
              </div>
            ))}
            <ChevronRight className="w-4 h-4" />
            <span className="uppercase">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
