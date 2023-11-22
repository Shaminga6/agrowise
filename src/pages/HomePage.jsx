import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import MySVGComponent from "../components/MySVGComponent";
import cropImg from "../assets/cropImg.png";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Crop management", href: "#" },
  { name: "Market insight", href: "#" },
  { name: "Community", href: "#" },
  { name: "Weather Forcast", href: "#" },
];

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="relative inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
          id="nav-bar"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Agrowise</span>
              <img className="h-8 w-auto" src={logo} alt="company logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12 lg:justify-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            ></a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Agrowise</span>
                <img className="h-8 w-auto" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>








      <div className="relative banner-wrapper">
        <div className="banner-white-layer">
          <MySVGComponent />

          <div className="content-div">
            <h1 id="banner-title">Welcome To AgroWise</h1>
            <img src={cropImg} alt="" id="cropImg" />
          </div>

          <div className="description-div">
            <p>
              {" "}
              A dynamic platform dedicated to ensuring that every farmer is
              equipped with the knowledge needed to thrive in the ever-evolving
              agricultural sector.
            </p>
          </div>

          <div className="banner-btn-wrapper">
            <button className="banner-btn">Get Started</button>
            <button className="banner-btn" id="banner-login-btn">
              Login
            </button>
          </div>
        </div>

        {/* =========== Mobile================ */}
        <div className="mobile-display-data">
          <h1 id="banner-title-mobile">Welcome To AgroWise</h1>

          <p id="banner-desc-mobile">
            A dynamic platform dedicated to ensuring that every farmer is
            equipped with the knowledge needed to thrive in the ever-evolving
            agricultural sector.
          </p>

          <div className="banner-mobile-btn">
            <button className="banner-btn" id="mobile-signup-btn">Get Started</button>
            <button className="banner-btn" id="banner-login-btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
