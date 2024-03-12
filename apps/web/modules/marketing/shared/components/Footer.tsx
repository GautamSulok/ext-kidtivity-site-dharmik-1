export function Footer() {
  return (
    <footer className="py-8">
      <div className="relative mx-auto max-w-[1024px] px-5 md:px-6 lg:px-10">
        <div className="flex">
          <div className="w-1/3 lg:w-1/2">
            <img src="images/logo.svg" alt="" />
          </div>
          <div className="w-2/3 lg:w-1/2">
            <div className="ml-auto flex max-w-[228px] items-center justify-end gap-8 sm:gap-16">
              <div>
                <ul>
                  <li>
                    <a
                      href="/blog"
                      className="mb-2 block text-xs font-semibold text-black hover:text-blue-500 dark:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#features"
                      className="mb-2 block text-xs font-semibold text-black hover:text-blue-500 dark:text-white"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing"
                      className="mb-2 block text-xs font-semibold text-black hover:text-blue-500 dark:text-white"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:support@chopwoodventures.com"
                      className="mb-2 block text-xs font-semibold text-black hover:text-blue-500 dark:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a
                      href="/privacy"
                      className="mb-2 block text-xs font-semibold text-black hover:text-blue-500 dark:text-white"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cookie"
                      className="mb-2 block text-xs font-semibold text-black hover:text-blue-500 dark:text-white"
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="mb-2 block text-xs font-semibold text-black hover:text-blue-500 dark:text-white"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/disclaimer"
                      className="mb-2 block text-xs font-semibold text-black hover:text-blue-500 dark:text-white"
                    >
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-8 text-[10px] font-normal text-black dark:text-white">
            ©{new Date().getFullYear()} Kidtivity Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
