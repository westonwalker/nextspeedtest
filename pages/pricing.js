import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Pricing() {
  return (
    <div>
      <Header activeTab="pricing" />
      <div className="bg-white">
        <div className="bg-gradient-to-b from-blue-50 via-white to-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="pb-16 xl:flex xl:items-center xl:justify-between">
              <div>
                <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                  <span className="text-gray-900">Everything you need for</span>
                  <span className="text-blue-600">$99 a month</span>
                </h1>
                <p className="mt-5 text-xl text-gray-500">
                  Includes every feature we offer plus unlimited projects and
                  unlimited users.
                </p>
              </div>
            </div>
            <div
              className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8"
            >
              <div>
                <h2
                  className="text-base font-semibold text-blue-600 uppercase tracking-wide"
                >
                  Everything you need
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900">
                  All-in-one platform
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                  Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus
                  elementum blandit et.
                </p>
              </div>
              <div
                className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2"
              >
                <ul role="list" className="divide-y divide-gray-200">
                  <li className="py-4 flex md:py-0 md:pb-4">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500"
                    >Vitae in pulvinar odio id utobortis in inter.</span
                    >
                  </li>

                  <li className="py-4 flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500"
                    >Sed sed id viverra viverra augue eget massa.</span
                    >
                  </li>

                  <li className="py-4 flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500"
                    >Urna, gravida amet, a, integer venenatis.</span
                    >
                  </li>

                  <li className="py-4 flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500"
                    >Lobortis sed pharetra amet vitae eleifend.</span
                    >
                  </li>

                  <li className="py-4 flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500"
                    >Ullamcorper blandit a consequat donec elit aoreet.</span
                    >
                  </li>
                </ul>
                <ul
                  role="list"
                  className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0"
                >
                  <li className="py-4 flex md:border-t-0 md:py-0 md:pb-4">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500"
                    >Dolor quo assumenda.</span
                    >
                  </li>

                  <li className="py-4 flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500"
                    >Esse rerum distinctio maiores maiores.</span
                    >
                  </li>

                  <li className="py-4 flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500"
                    >Eos enim officiis ratione.</span
                    >
                  </li>

                  <li className="py-4 flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500"
                    >Tempore molestiae aliquid excepturi.</span
                    >
                  </li>

                  <li className="py-4 flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500"
                    >Perspiciatis eveniet inventore eum et aliquam.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white">
              Frequently asked questions
            </h2>
            <div className="mt-6 border-t border-blue-400 border-opacity-25 pt-10">
              <dl
                className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12"
              >
                <div>
                  <dt className="text-lg leading-6 font-medium text-white">
                    What&#039;s the best thing about Switzerland?
                  </dt>
                  <dd className="mt-2 text-base text-blue-200">
                    I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quas cupiditate
                    laboriosam fugiat.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-white">
                    Why do you never see elephants hiding in trees?
                  </dt>
                  <dd className="mt-2 text-base text-blue-200">
                    Because they&#039;re so good at it. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-white">
                    How do you make holy water?
                  </dt>
                  <dd className="mt-2 text-base text-blue-200">
                    You boil the hell out of it. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-white">
                    Why can&#039;t you hear a pterodactyl go to the bathroom?
                  </dt>
                  <dd className="mt-2 text-base text-blue-200">
                    Because the pee is silent. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-white">
                    What do you call someone with no body and no nose?
                  </dt>
                  <dd className="mt-2 text-base text-blue-200">
                    Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-white">
                    Why did the invisible man turn down the job offer?
                  </dt>
                  <dd className="mt-2 text-base text-blue-200">
                    He couldn&#039;t see himself doing it. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Quas cupiditate laboriosam
                    fugiat.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="bg-blue-50">
          <div
            className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between"
          >
            <h2
              className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl"
            >
              <span className="block">Ready to dive in?</span>
              <span className="block text-blue-600">Start your free trial today.</span>
            </h2>
            <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
              <div className="inline-flex rounded-md shadow" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
