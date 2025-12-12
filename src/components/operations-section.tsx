import Image from "next/image";
import Link from "next/link";
import { MapPin, Check, RefreshCw, CheckCircle } from "lucide-react";

const operations = [
  {
    title: "TRACEABILITY & TRACKING",
    icon: MapPin,
    image: "https://ext.same-assets.com/4249926934/2689784917.jpeg",
    link: "/traceability-and-tracking",
  },
  {
    title: "DATA DESTRUCTION",
    icon: Check,
    image: "https://ext.same-assets.com/4249926934/3143188156.jpeg",
    link: "/data-destruction-op",
  },
  {
    title: "RETURN POLICY",
    icon: RefreshCw,
    image: "https://ext.same-assets.com/4249926934/1927803393.jpeg",
    link: "/return-policy",
  },
];

export function OperationsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3f4c4d] mb-12 text-center md:text-left">
          Our Operations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {operations.map((operation, index) => {
            const Icon = operation.icon;
            return (
              <Link
                key={index}
                href={operation.link}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src={operation.image}
                    alt={operation.title}
                    fill
                    className="object-cover brightness-75 group-hover:brightness-90 transition-all"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="mb-4 flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-10 h-10" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold px-4">
                        {operation.title.split(' & ').map((part, i) => (
                          <span key={i}>
                            {part}
                            {i < operation.title.split(' & ').length - 1 && <><br />&</>}
                          </span>
                        ))}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
