import { PageLayout } from "@/components/page-layout";

export default function IntroductionPage() {
  return (
    <PageLayout title="INTRODUCTION">
      <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
        <h2 className="text-3xl font-bold text-[#57b79c] mb-6">
          Welcome To SHI CHENG TELECOM LIMITED
        </h2>

        <p>
          SHI CHENG TELECOM LIMITED (hereafter referred to as "SCT") is a leading asset management and electronics devices recycling company based in Hong Kong. We specialize in the resale, remarketing, data sanitization, recycling, and logistics management of electronic mobile devices—including smartphones, tablets, and smartwatches.
        </p>

        <p>
          SCT is committed to environmental protection through responsible cellular asset recycling. Our partners include major U.S. carriers, renowned device OEMs, and top-tier recycling firms who trust us to maximize the value of their mobile assets while safeguarding sensitive corporate and personal data.
        </p>

        <p>
          Our highly skilled team possesses up-to-date knowledge of electronic products and market trends. With a strong and efficient operations team, we process and distribute over 2 million mobile devices annually.
        </p>

        <p>
          At SCT, we uphold the spirit of sustainable development. We are dedicated to protecting the environment through proper disposal of surplus and end-of-life mobile devices, while maintaining a safe and positive workplace for our staff.
        </p>

        <h2 className="text-2xl font-bold text-[#3f4c4d] mt-8 mb-4">
          Location
        </h2>

        <p className="font-semibold">
          香港九龙鸿图道1号2209室
        </p>

        <div className="mt-6">
          <h3 className="font-bold text-lg mb-2">Business Scope:</h3>
          <ul className="list-none space-y-2">
            <li>Downstream Vendor Management</li>
            <li>Logical Data Sanitization and Testing of Used Mobile Phones, Tablets and Smartwatches</li>
            <li>Repairing of Used Mobile Phones.</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
