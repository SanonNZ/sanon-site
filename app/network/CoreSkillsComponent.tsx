import Image from "next/image"

const CoreSkillsComponent = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Core Skills</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Bring to the Table
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our team possesses a diverse range of skills and expertise, enabling us to tackle complex challenges and
            deliver innovative solutions.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* Heroicon name: outline/globe-alt */}
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
                      d="M21 12a9 9 0 01-9 9m-9-9a9 9 0 019-9m-9 9h18"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Artificial Intelligence</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We leverage cutting-edge AI techniques to develop intelligent systems, automate processes, and extract
                valuable insights from data.
                <div className="relative w-full h-48 mt-4">
                  <Image
                    src="/images/neural-network-bg.png"
                    alt="Neural network visualization with golden center"
                    width={1000}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* Heroicon name: outline/trending-up */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Data Science & Analytics</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our data scientists are skilled in statistical modeling, machine learning, and data visualization,
                enabling us to uncover hidden patterns and drive data-driven decisions.
                <div className="relative w-full h-48 mt-4">
                  <Image
                    src="/images/neural-network-bg.png"
                    alt="Multiple neural connections visualization"
                    width={1000}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* Heroicon name: outline/lightning-bolt */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Software Engineering</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We build robust, scalable, and maintainable software solutions using modern technologies and best
                practices, ensuring seamless integration and optimal performance.
                <div className="relative w-full h-48 mt-4">
                  <Image
                    src="/images/molecular-structure-bg.png"
                    alt="Neural network visualization"
                    width={1000}
                    height={400}
                    className="w-full h-full object-cover transform scale-110 rotate-180"
                  />
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default CoreSkillsComponent
