"use client";

import { useUser } from "@saas/auth/hooks/use-user";
import { ColorModeToggle } from "@shared/components/ColorModeToggle";
import { LocaleSwitch } from "@shared/components/LocaleSwitch";
import { Logo } from "@shared/components/Logo";
import { Button } from "@ui/components/button";
import { Sheet, SheetContent, SheetTrigger } from "@ui/components/sheet";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useIsClient } from "usehooks-ts";

export function NavBar() {
  const t = useTranslations();
  const { user, loaded: userLoaded } = useUser();
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isClient = useIsClient();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const menuItems: {
    label: string;
    href: string;
  }[] = [
    {
      label: t("common.menu.pricing"),
      href: `/pricing`,
    },
    {
      label: t("common.menu.blog"),
      href: "/blog",
    },
  ];
  return (
    <header className="bg-background/80 fixed left-0 top-0 z-20 w-full border-b border-gray-100 py-2.5 backdrop-blur-lg md:py-[15px]">
      <nav className="">
        <div className="mx-auto flex max-w-[1024px] flex-wrap items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="block hover:no-underline active:no-underline"
          >
            <Logo withLabel={false} />
          </Link>

          <Sheet
            open={mobileMenuOpen}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.75 9H20.25M3.75 15.75H20.25"
                    stroke="#212121"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[250px]" side="right">
              <div className="flex flex-col items-start justify-center">
                {menuItems.map((menuItem) => (
                  <Link
                    key={menuItem.href}
                    href={menuItem.href}
                    className="block px-3 py-2 text-lg"
                  >
                    {menuItem.label}
                  </Link>
                ))}

                <Link
                  key={user ? "dashboard" : "login"}
                  href={user ? `/app` : "/auth/login"}
                  className="block px-3 py-2 text-lg"
                  prefetch={!user}
                >
                  {user ? t("common.menu.dashboard") : t("common.menu.login")}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="absolute left-0 top-[50px] z-[999] w-full items-center gap-5 bg-white py-6 text-center md:static md:flex md:bg-transparent md:py-0 md:text-start">
              <ColorModeToggle />
              <LocaleSwitch />
              {menuItems.map((menuItem) => (
                <li className="mb-4 md:mb-0">
                  <Link
                    key={menuItem.href}
                    href={menuItem.href}
                    className="text-sm font-semibold text-black hover:text-blue-500 dark:text-white"
                  >
                    {menuItem.label}
                  </Link>
                </li>
              ))}
              <li className="mb-4 md:mb-0">
                <Link
                  key={user ? "dashboard" : "login"}
                  href={user ? `/app` : "/auth/login"}
                  className="rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition duration-500 ease-in-out hover:bg-transparent hover:text-blue-500"
                  prefetch={!user}
                >
                  {user ? t("common.menu.dashboard") : t("common.menu.login")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

//   return (
//     <nav
//       className={`bg-background/80 fixed left-0 top-0 z-20 w-full backdrop-blur-lg`}
//       data-test="navigation"
//     >
//       <Banner />

//       <div className="container">
//         <div className="flex items-center justify-stretch gap-6 py-8">
//           <div className="flex flex-1 justify-start">
//             <Link
//               href="/"
//               className="block hover:no-underline active:no-underline"
//             >
//               <Logo withLabel={false} />
//             </Link>
//           </div>

//           <div className="hidden flex-1 items-center justify-center md:flex">
//             {menuItems.map((menuItem) => (
//               <Link
//                 key={menuItem.href}
//                 href={menuItem.href}
//                 className="block px-3 py-2 text-lg"
//               >
//                 {menuItem.label}
//               </Link>
//             ))}
//           </div>

//           <div className="flex flex-1 items-center justify-end gap-3">
//             <ColorModeToggle />
//             <LocaleSwitch />

//             <Sheet
//               open={mobileMenuOpen}
//               onOpenChange={(open) => setMobileMenuOpen(open)}
//             >
//               <SheetTrigger asChild>
//                 <Button className="md:hidden" size="icon" variant="outline">
//                   <Icon.menu />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent className="w-[250px]" side="right">
//                 <div className="flex flex-col items-start justify-center">
//                   {menuItems.map((menuItem) => (
//                     <Link
//                       key={menuItem.href}
//                       href={menuItem.href}
//                       className="block px-3 py-2 text-lg"
//                     >
//                       {menuItem.label}
//                     </Link>
//                   ))}

//                   <Link
//                     key={user ? "dashboard" : "login"}
//                     href={user ? `/app` : "/auth/login"}
//                     className="block px-3 py-2 text-lg"
//                     prefetch={!user}
//                   >
//                     {user ? t("common.menu.dashboard") : t("common.menu.login")}
//                   </Link>
//                 </div>
//               </SheetContent>
//             </Sheet>

//             {isClient && userLoaded && (
//               <>
//                 {user ? (
//                   <Button
//                     key="dashboard"
//                     className="hidden md:block"
//                     asChild
//                     variant="ghost"
//                   >
//                     <Link href="/app">{t("common.menu.dashboard")}</Link>
//                   </Button>
//                 ) : (
//                   <Button
//                     key="login"
//                     className="hidden md:block"
//                     asChild
//                     variant="ghost"
//                   >
//                     <Link href="/auth/login">{t("common.menu.login")}</Link>
//                   </Button>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
