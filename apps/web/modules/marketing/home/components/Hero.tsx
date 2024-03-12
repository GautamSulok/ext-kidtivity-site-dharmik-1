export function Hero() {
  return (
    <section className="pb-24 pt-12 md:pb-8">
      <div className="relative mx-auto max-w-[1024px] px-5 md:px-6 lg:px-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-[52%]">
            <h1 className="text-[44px] font-semibold leading-[52px] text-gray-600 lg:text-[56px] lg:leading-[64px] dark:text-gray-300">
              A better way to introduce{" "}
              <span className="bg-bg-gradient bg-clip-text fill-transparent">
                fun and learning
              </span>{" "}
              for your little ones
            </h1>
            <ul className="mt-10 flex items-center gap-2">
              <li>
                <a
                  href="#"
                  className="font-inter flex items-center justify-center gap-2 rounded-lg border-2 border-blue-100 bg-blue-100 px-4 py-3 text-base font-semibold leading-6 text-blue-500 transition-all duration-500 ease-in-out hover:border-blue-200 hover:bg-transparent dark:text-blue-400"
                >
                  Get started
                  <img src="images/arrow-right.svg" className="ml-2" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter flex items-center justify-center gap-2 rounded-lg border-2 border-blue-200 bg-transparent px-4 py-3 text-base font-semibold leading-6 text-blue-500 transition-all duration-500 ease-in-out hover:bg-blue-100 dark:text-blue-400"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10 w-full md:mt-0 md:w-[48%]">
            <div className="text-center md:text-end">
              <img src="images/home-img.png" alt="" className="inline-block" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-[114px] left-[56%] -translate-x-1/2 md:-bottom-[60px]">
          <img src="images/combined-shape.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
