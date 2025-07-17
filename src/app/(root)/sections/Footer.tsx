import logo from '@/../public/assets/logo.svg';
import Image from 'next/image';

const Footer = () => {
    return (
      <footer className="bg-neutral text-white py-12">
        <div className="section my-0 flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* Brand Info */}
          <div className='w-1/3'>
            <div className="flex items-center gap-2 mb-4">
              <Image src={logo} alt="Car Doctor Logo" className="w-8 h-8" />
              <span className="text-lg font-bold">Car Doctor</span>
            </div>
            <p className="text-sm text-gray-300">
              Edwin Diaz is a software and web technologies engineer, a life
              coach trainer who’s also a serial.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Google" className="hover:opacity-80">
                <i className="fa-brands fa-google text-xl" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-80">
                <i className="fa-brands fa-twitter text-xl" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <i className="fa-brands fa-instagram text-xl" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
                <i className="fa-brands fa-linkedin text-xl" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Why Car Doctor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider">Copyright {new Date().getFullYear()}. All rights reserved by <a href="https://sajmul.com"><strong>Sajmul</strong></a></div>
      </footer>
    );
};

export default Footer;