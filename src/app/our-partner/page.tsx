import { PageLayout } from "@/components/page-layout";
import Image from "next/image";

const partners = [
  { name: "ecoATM", image: "https://ext.same-assets.com/4249926934/783040911.png" },
  { name: "Verizon", image: "https://ext.same-assets.com/4249926934/3118822319.jpeg" },
  { name: "T-Mobile", image: "https://ext.same-assets.com/4249926934/1012980894.png" },
  { name: "Sprint", image: "https://ext.same-assets.com/4249926934/1644601867.jpeg" },
  { name: "Samsung Mobile Auctions", image: "https://ext.same-assets.com/4249926934/3440801437.png" },
  { name: "Ingram", image: "https://ext.same-assets.com/4249926934/3401639310.jpeg" },
  { name: "Hyla", image: "https://ext.same-assets.com/4249926934/1818564578.jpeg" },
  { name: "GameStop", image: "https://ext.same-assets.com/4249926934/922709915.jpeg" },
  { name: "Best Buy", image: "https://ext.same-assets.com/4249926934/601611757.png" },
  { name: "AUCNET", image: "https://ext.same-assets.com/4249926934/4166255270.png" },
  { name: "AT&T", image: "https://ext.same-assets.com/4249926934/3618853850.jpeg" },
  { name: "Asurion", image: "https://ext.same-assets.com/4249926934/3692832313.jpeg" },
  { name: "Assurant", image: "https://ext.same-assets.com/4249926934/156812709.png" },
];

export default function PartnersPage() {
  return (
    <PageLayout title="PARTNERS">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Image
              src={partner.image}
              alt={partner.name}
              width={200}
              height={100}
              className="object-contain w-full h-24"
            />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
