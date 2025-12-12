import { PageLayout } from "@/components/page-layout";

export default function DataSanitizationPage() {
  return (
    <PageLayout title="Data Sanitization">
      <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
        <p>
          All inbound and outbound electronic devices intended for resale must ensure that the information stored on them aligns with the confidentiality level of the system's security classification. Improper handling or release of these devices may result in unauthorized disclosure of sensitive information, violating management system requirements and regulations in certain countries.
        </p>

        <h2 className="text-2xl font-bold text-[#3f4c4d] mt-8 mb-4">
          This applies to:
        </h2>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>Windows-based mobile phones</li>
          <li>Android-based mobile phones</li>
          <li>iOS-based mobile phones</li>
        </ol>

        <p className="mt-6">
          We offer highly competitive pricing and efficient services delivered by our skilled staff. All delivery and operational processes are monitored through our secure CCTV system to ensure safety and compliance.
        </p>
      </div>
    </PageLayout>
  );
}
