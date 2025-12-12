import { Check, X } from "lucide-react";

interface GradingCriteria {
  category: string;
  items: {
    name: string;
    good?: boolean;
    ng?: boolean;
    optional?: boolean;
  }[];
}

interface GradingTableProps {
  criteria: GradingCriteria[];
}

export function GradingTable({ criteria }: GradingTableProps) {
  return (
    <div className="space-y-6">
      {criteria.map((section, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#57b79c] text-white px-6 py-3">
            <h3 className="font-bold">{section.category}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Item</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Good</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">NG</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Optional</th>
                </tr>
              </thead>
              <tbody>
                {section.items.map((item, itemIndex) => (
                  <tr key={itemIndex} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">{item.name}</td>
                    <td className="px-6 py-4 text-center">
                      {item.good && <Check className="w-5 h-5 text-green-600 mx-auto" />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.ng && <X className="w-5 h-5 text-red-600 mx-auto" />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.optional && <Check className="w-5 h-5 text-blue-600 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
