import Link from 'next/link'
import React, { useEffect, useState } from "react";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div>
      <header>
        <div className="relative bg-white">
          <div
            className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
          >
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <div className="">
                  <span className="sr-only">Workflow</span>
                  <img
                    src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                    alt="Logo"
                    className="h-8 w-auto sm:h-10"
                  />
                </div>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                onClick={() => setShowMobileMenu(true)}
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Link href="/pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </nav>
          </div>
          {showMobileMenu && (

            <div
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div
                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
              >
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        onClick={() => setShowMobileMenu(false)}
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <span className="sr-only">Close menu</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Home
                    </Link>
                    <Link href="/pricing" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Pricing
                    </Link>
                    <Link href="/contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}
