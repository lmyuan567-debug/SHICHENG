import { PageLayout } from "@/components/page-layout";
import { Users, Shield, BarChart3, Award } from "lucide-react";

export default function ConsignmentPage() {
  return (
    <PageLayout title="Consignment Services">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-[#3f4c4d] mb-4">
            We are your trusted partner in business development.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Users className="w-12 h-12 text-[#57b79c] mb-4" />
            <p className="text-gray-700">
              With a broad customer network across China, Southeast Asia, and North America, we help ensure fast product turnover and market reach.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Shield className="w-12 h-12 text-[#57b79c] mb-4" />
            <p className="text-gray-700">
              Our secure, well-equipped facilities are supported by a comprehensive CCTV surveillance system, ensuring safe storage and distribution while preventing loss or pilferage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <BarChart3 className="w-12 h-12 text-[#57b79c] mb-4" />
            <p className="text-gray-700">
              We utilize an advanced warehouse management system with barcode tracking to monitor every device's movement, ensuring full traceability throughout the consignment process.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Award className="w-12 h-12 text-[#57b79c] mb-4" />
            <p className="text-gray-700">
              Our experienced and capable team manages all inbound and outbound operations with precision, maintaining high levels of efficiency and operational excellence.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
