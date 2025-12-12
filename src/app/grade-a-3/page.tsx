import { PageLayout } from "@/components/page-layout";
import { GradingTable } from "@/components/grading-table";

export default function GradeAPage() {
  const criteria = [
    {
      category: "Cosmetic Guideline",
      items: [
        { name: "Scratches", optional: true },
        { name: "Cracks", ng: true },
        { name: "Chips", ng: true },
        { name: "Scuffing", optional: true },
        { name: "Ding", optional: true },
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
        { name: "Packing", ng: true },
        { name: "Accessory", ng: true },
      ],
    },
  ];

  return (
    <PageLayout title="Grade A">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#3f4c4d] mb-4">Description</h2>
          <p className="text-gray-700">
            Good condition with light signs of use. May have minor scratches or light wear on housing. Screen is in good condition with no major scratches. All functions work perfectly.
          </p>
        </div>

        <GradingTable criteria={criteria} />
      </div>
    </PageLayout>
  );
}
