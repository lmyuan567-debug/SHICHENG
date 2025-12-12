import { PageLayout } from "@/components/page-layout";
import { Barcode, Package, TruckIcon, MapPin } from "lucide-react";

export default function TraceabilityTrackingPage() {
  return (
    <PageLayout title="Traceability and Tracking">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <p className="text-gray-700 text-lg">
            Our advanced warehouse management system (WMS) with barcode tracking ensures complete traceability of every device throughout our facility. From the moment a device enters our warehouse to its final destination, we monitor and track every movement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Barcode className="w-12 h-12 text-[#57b79c] mb-4" />
            <h3 className="text-xl font-bold text-[#3f4c4d] mb-3">Barcode System</h3>
            <p className="text-gray-700">
              Each device is assigned a unique barcode upon arrival, enabling precise tracking throughout the entire process—from receiving to testing, grading, and shipping.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Package className="w-12 h-12 text-[#57b79c] mb-4" />
            <h3 className="text-xl font-bold text-[#3f4c4d] mb-3">Inventory Management</h3>
            <p className="text-gray-700">
              Real-time inventory tracking provides instant visibility into stock levels, location, and status of all devices in our warehouse.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <TruckIcon className="w-12 h-12 text-[#57b79c] mb-4" />
            <h3 className="text-xl font-bold text-[#3f4c4d] mb-3">Shipment Tracking</h3>
            <p className="text-gray-700">
              Comprehensive shipment tracking from our facility to your door, with regular updates and delivery notifications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <MapPin className="w-12 h-12 text-[#57b79c] mb-4" />
            <h3 className="text-xl font-bold text-[#3f4c4d] mb-3">Full Traceability</h3>
            <p className="text-gray-700">
              Complete audit trail of every device's journey, including processing history, quality checks, and chain of custody documentation.
            </p>
          </div>
        </div>

        <div className="bg-[#d5e5e3] p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#3f4c4d] mb-3">Key Benefits:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Enhanced security and prevention of loss or pilferage</li>
            <li>Improved operational efficiency and accuracy</li>
            <li>Real-time visibility of inventory and shipments</li>
            <li>Complete compliance with industry regulations</li>
            <li>Detailed reporting and analytics capabilities</li>
            <li>Faster order processing and fulfillment</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
