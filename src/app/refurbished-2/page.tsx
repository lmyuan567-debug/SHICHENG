import { PageLayout } from "@/components/page-layout";
import { GradingTable } from "@/components/grading-table";

export default function RefurbishedPage() {
  const criteria = [
    {
      category: "Cosmetic Guideline",
      items: [
        { name: "Scratches", ng: true },
        { name: "Cracks", ng: true },
        { name: "Chips", ng: true },
        { name: "Scuffing", ng: true },
        { name: "Ding", ng: true },
        { name: "Dent", ng: true },
      ],
    },
    {
      category: "Key Function Test",
      items: [
        { name: "Screen (Digitizer)", good: true },
        { name: "Power Up", good: true },
        { name: "Data Clear", good: true },
        { name: "Unlocked", good: true },
        { name: "Cable Port", good: true },
        { name: "Sim", good: true },
        { name: "WiFi", good: true },
      ],
    },
    {
      category: "Accessory",
      items: [
        { name: "Packing", optional: true },
        { name: "Accessory", optional: true },
      ],
    },
  ];

  return (
    <PageLayout title="Refurbished">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#3f4c4d] mb-4">Description</h2>
          <p className="text-gray-700">
            Devices that have been professionally restored to like-new condition. All components have been tested and verified to work perfectly. May include original or replacement packaging.
          </p>
        </div>

        <GradingTable criteria={criteria} />
      </div>
    </PageLayout>
  );
}
