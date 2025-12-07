import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2">
            <Heart className="text-blue-600 w-6 h-6" />
            <h2 className="text-xl font-semibold text-gray-800">
              Cancer Awareness & Support
            </h2>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Dedicated to providing education, support, and hope to those
            affected by cancer. Together, we can make a meaningful
            difference in the fight against cancer.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Awareness</a></li>
            <li><a href="#" className="hover:text-blue-600">Support</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Contact</h3>

          <ul className="mt-4 space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              support@cancerawareness.org
            </li>

            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              1-800-CANCER-HELP
            </li>

            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              123 Hope Street, Healing City, HC 12345
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 px-6 text-center text-gray-600 text-sm flex flex-col md:flex-row items-center justify-between">
        <p>© 2025 Cancer Awareness & Support. All Rights Reserved.</p>

        <p className="flex items-center gap-1 mt-2 md:mt-0">
          Made with <Heart className="w-4 h-4 text-blue-600" />
          for a cancer-free world
        </p>
      </div>
    </footer>
  );
}
