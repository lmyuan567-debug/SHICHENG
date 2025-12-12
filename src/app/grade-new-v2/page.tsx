import { PageLayout } from "@/components/page-layout";
import { GradingTable } from "@/components/grading-table";

export default function GradeNewPage() {
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
        { name: "Packing", good: true },
        { name: "Accessory", good: true },
      ],
    },
  ];

  return (
    <PageLayout title="New">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#3f4c4d] mb-4">Description</h2>
          <p className="text-gray-700">
            These merchandises are in its original packaging (unless otherwise stated) and includes all features of original design. These stock are entirely ready for retail sale but never made it to the shelves.
          </p>
        </div>

        <GradingTable criteria={criteria} />
      </div>
    </PageLayout>
  );
}
