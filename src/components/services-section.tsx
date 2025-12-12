import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Asset Recovery",
    image: "https://ext.same-assets.com/4249926934/241430845.jpeg",
    link: "/asset-recovery",
  },
  {
    title: "Data Sanitization",
    image: "https://ext.same-assets.com/4249926934/1955964228.jpeg",
    link: "/data-sanitization",
  },
  {
    title: "Consignment",
    image: "https://ext.same-assets.com/4249926934/732382751.jpeg",
    link: "/consignment",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3f4c4d] mb-12 text-center md:text-left">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#3f4c4d] mb-4">
                  {service.title}
                </h3>
                <Link href={service.link}>
                  <Button variant="outline" className="border-[#95a5ae] text-[#3f4c4d] hover:bg-[#57b79c] hover:text-white hover:border-[#57b79c]">
                    view more
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
