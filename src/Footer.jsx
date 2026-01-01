const Footer = () => {
  return (
    <footer className="bg-[#F6F4F1] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-300 to-green-400" />
              <span className="font-semibold text-lg">Everyday Co.</span>
            </div>
            <p className="text-gray-600 text-sm max-w-xs">
              Thoughtfully curated everyday essentials designed for modern,
              simple living.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/about" className="hover:text-gray-900">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-900">Contact</a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-gray-900">FAQs</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/shipping" className="hover:text-gray-900">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-900">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Social</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 flex items-center gap-2"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 flex items-center gap-2"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Everyday Co. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made for everyday living
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
