import { PageLayout } from "@/components/page-layout";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function LocationMapPage() {
  return (
    <PageLayout title="Location Map">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3f4c4d] mb-4">Our Location</h2>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#57b79c] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Address:</p>
                <p className="text-gray-700">香港九龙鸿图道1号2209室</p>
                <p className="text-gray-700">Room 2209, No. 1 Hung To Road, Kowloon, Hong Kong</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#57b79c] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Phone:</p>
                <p className="text-gray-700">(852) 5124 8496</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#57b79c] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-gray-700">hanshicong049@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-[#57b79c] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Website:</p>
                <p className="text-gray-700">www.hkshicheng.com</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d114.2!3d22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzAwLjAiTiAxMTTCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2shk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-[#3f4c4d] mb-4">Business Hours</h3>
          <div className="space-y-2 text-gray-700">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
