import Link from "next/link";
import { Phone, Mail, Globe, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeroCarousel } from "@/components/hero-carousel";
import { PartnersCarousel } from "@/components/partners-carousel";
import { ServicesSection } from "@/components/services-section";
import { OperationsSection } from "@/components/operations-section";
import { EnquiryForm } from "@/components/enquiry-form";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#d5e5e3] py-3">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm text-[#3f4c4d]">
          <div className="flex items-center gap-1">
            <span>English</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(852) 5124 8496</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>www.hkshicheng.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hanshicong049@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-[#3f4c4d]">
                SHI CHENG TELECOM
              </Link>
              <Navigation />
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Input
                  type="search"
                  placeholder="Search"
                  className="w-48 pr-8 border-[#95a5ae]"
                />
                <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#95a5ae]" />
              </div>
              <Button className="bg-[#ccdad9] text-[#3f4c4d] hover:bg-[#57b79c] hover:text-white transition-colors">
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Partners Section */}
      <PartnersCarousel />

      {/* Services Section */}
      <ServicesSection />

      {/* Operations Section */}
      <OperationsSection />

      {/* Enquiry Form */}
      <EnquiryForm />

      {/* Footer */}
      <footer className="bg-[#d5e5e3] py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-[#3f4c4d]">
          <p className="mb-2">© 2025 SHI CHENG TELECOM LIMITED</p>
          <p>香港九龙鸿图道1号2209室</p>
        </div>
      </footer>
    </div>
  );
}
