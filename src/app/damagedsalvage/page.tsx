import { PageLayout } from "@/components/page-layout";
import { GradingTable } from "@/components/grading-table";

export default function DamagedSalvagePage() {
  const criteria = [
    {
      category: "Cosmetic Guideline",
      items: [
        { name: "Scratches", optional: true },
        { name: "Cracks", optional: true },
        { name: "Chips", optional: true },
        { name: "Scuffing", optional: true },
        { name: "Ding", optional: true },
        { name: "Dent", optional: true },
      ],
    },
    {
      category: "Key Function Test",
      items: [
        { name: "Screen (Digitizer)", optional: true },
        { name: "Power Up", optional: true },
        { name: "Data Clear", optional: true },
        { name: "Unlocked", optional: true },
        { name: "Cable Port", optional: true },
        { name: "Sim", optional: true },
        { name: "WiFi", optional: true },
      ],
    },
    {
      category: "Accessory",
      items: [
        { name: "Packing", ng: true },
        { name: "Accessory", ng: true },
      ],
    },
  ];

  return (
    <PageLayout title="Damaged/Salvage">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#3f4c4d] mb-4">Description</h2>
          <p className="text-gray-700">
            Devices with significant damage or non-functional components. May not power on or have critical function failures. Suitable for parts harvesting, repair projects, or recycling purposes only.
          </p>
        </div>

        <GradingTable criteria={criteria} />
      </div>
    </PageLayout>
  );
}
