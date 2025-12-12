import { PageLayout } from "@/components/page-layout";
import { GradingTable } from "@/components/grading-table";

export default function GradeCPage() {
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
        { name: "Packing", ng: true },
        { name: "Accessory", ng: true },
      ],
    },
  ];

  return (
    <PageLayout title="Grade C">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#3f4c4d] mb-4">Description</h2>
          <p className="text-gray-700">
            Well-used condition with heavy signs of wear. May have deep scratches, multiple dents, or screen cracks. All essential functions still work properly. Suitable for parts or budget-conscious buyers.
          </p>
        </div>

        <GradingTable criteria={criteria} />
      </div>
    </PageLayout>
  );
}
