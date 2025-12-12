import { PageLayout } from "@/components/page-layout";

export default function ReturnPolicyPage() {
  return (
    <PageLayout title="RETURN POLICY">
      <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
        <div className="bg-[#d5e5e3] p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-[#3f4c4d] mb-4">RETURN POLICY</h2>
          <p>
            Customers are guaranteed of return of devices in accordance with the terms of this policy as set forth below: If you have any query, please contact us at (852) 5124 8496.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#3f4c4d] mt-8 mb-4">
          The return terms are as follows:
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-[#3f4c4d] mb-3">
              Maintain the Device Status:
            </h3>
            <p>
              Please keep the device package and accessories and cosmetic status as we sold (without any damage by user or keeper). You must keep the invoice and related documents when unpacking the product, simultaneously, you have to present the bar code of the device upon return.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#3f4c4d] mb-3">
              Timing of Returns:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>7-day return guarantee for all devices, please apply for return within seven days of receipt of the device by contacting our Sales Department for assistance.</li>
              <li>No return will be accepted after the return deadline (7-day guarantee), however, if there are special reasons, we may make discretionary arrangements on a case-by-case basis.</li>
              <li>A return charged at 20% of the device value may be posted.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#3f4c4d] mb-3">
              Return Process:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Phone our sales staff and specify the device specifications, Sales invoice and bar code number.</li>
              <li>An RMA number will be provided to customer, if our staff define the return is eligible, customer can download the RMA form from our company's website or request to send by the sales staff.</li>
              <li>Customer must fill in the RMA form together with the RMA number provided and device details and return to our Sales Department.</li>
              <li>Customer must send the device(s) concerned within 7 days of the date of RMA Form.</li>
              <li>Customers can mail or personally return the goods, but prior notice to our sales staff is necessary for return arrangement. Customer must present the devices together with the documents, bar code for confirmation.</li>
              <li>If your return reason is not solid and any damage on the packaging, accessories was found or failed to provide the bar code and documents, your return request may be rejected.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#3f4c4d] mb-3">
              Refund / Replace Arrangement:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Refund will be arranged within 10 working days after confirming receipt of the return item. Or</li>
              <li>Arrange replacement in 3 working days</li>
            </ul>
          </div>

          <p className="italic mt-6">
            The above terms are in effect and govern our sale of device to customers, if any changes of terms will be published in company website and posted on notice board for customer attention.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
