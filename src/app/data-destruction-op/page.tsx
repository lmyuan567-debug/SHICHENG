import { PageLayout } from "@/components/page-layout";

export default function DataDestructionPage() {
  return (
    <PageLayout title="Data Destruction">
      <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
        <p>
          Protecting the confidentiality of information is one of our business principle, release of media improperly could lead to unauthorized disclosure of information. This document demonstrates the procedure in implementing media sanitization with proper and applicable techniques and controls. To ensure effective Data Destruction performance Shi Cheng Telecom tracks, and verified media sanitization and destruction actions and periodically tests sanitization procedure.
        </p>

        <p>
          Shi Cheng Telecom processes Data Destruction in accordance with the NIST Special Publication 800-88 standard. Four of the most common methods can be used to sanitize media are presented below:
        </p>

        <h2 className="text-2xl font-bold text-[#3f4c4d] mt-8 mb-4">
          Data destruction guideline:
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Data destruction guideline for "Android"</li>
          <li>Data destruction guideline for "Blackberry"</li>
          <li>Data destruction guideline for "IOS"</li>
          <li>Data destruction guideline for "Window"</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#3f4c4d] mt-8 mb-4">
          Validation of Data Destruction:
        </h2>
        <p>
          Shi Cheng Telecom periodically randomly checks the Data Destruction procedure to ensure data clearance is carried out properly, this is independent validation of data destruction processes.
        </p>
        <p>
          To keep documented evidence that demonstrates a process consistently and effectively produces an outcome that conforms to established criteria and quality controls.
        </p>

        <h2 className="text-2xl font-bold text-[#3f4c4d] mt-8 mb-4">
          The validation aspects are:
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Validation of the procedures</li>
          <li>Effectiveness of employee training</li>
          <li>Calibration, maintenance of equipment</li>
          <li>Performance of data destruction methods</li>
        </ul>
      </div>
    </PageLayout>
  );
}
