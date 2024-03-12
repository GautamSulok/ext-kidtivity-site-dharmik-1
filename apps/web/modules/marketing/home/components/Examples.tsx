"use client";
import { useState } from "react";

export function Examples() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section className="bg-[url('/images/bg-img.png')] bg-cover bg-no-repeat py-8">
      <div className="relative mx-auto max-w-[1024px] px-5 md:px-6 lg:px-10">
        {/* Tab Titles */}
        <ul className="flex flex-wrap justify-center gap-2">
          <li>
            <button
              className={`inline-block !border-2 !bg-transparent !px-4 !py-2 !text-sm !font-semibold !text-blue-500 ${
                activeTab === "profile"
                  ? "!border-blue-500"
                  : "!border-blue-200"
              } !rounded-lg`}
              onClick={() => setActiveTab("profile")}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={`inline-block !border-2 !bg-transparent !px-4 !py-2 !text-sm !font-semibold !text-blue-500 ${
                activeTab === "funFood"
                  ? "!border-blue-500"
                  : "!border-blue-200"
              } !rounded-lg`}
              onClick={() => setActiveTab("funFood")}
            >
              Fun Food
            </button>
          </li>
          <li>
            <button
              className={`inline-block !border-2 !bg-transparent !px-4 !py-2 !text-sm !font-semibold !text-blue-500 ${
                activeTab === "funCraft"
                  ? "!border-blue-500"
                  : "!border-blue-200"
              } !rounded-lg`}
              onClick={() => setActiveTab("funCraft")}
            >
              Fun Craft
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="mt-10">
          {activeTab === "profile" && (
            <div>
              <div className="mx-auto grid max-w-[360px] gap-3 md:max-w-full md:grid-cols-3 lg:gap-[38px] lg:px-2">
                <div>
                  <div className="relative">
                    <img
                      src="images/food-img1.png"
                      className="w-full rounded-t-lg"
                      alt=""
                    />
                    <span className="absolute right-6 top-4 rounded-[4px] bg-green-200 px-4 py-1 text-sm font-semibold leading-6 text-green-500">
                      Fun Food
                    </span>
                  </div>
                  <div className="rounded-b-lg bg-purple-100 px-4 pb-8 pt-4 lg:px-6">
                    <div className="ml-auto flex h-[30px] w-[109px] items-center gap-2 rounded-[32px] bg-white px-4 py-2">
                      <img src="images/timer.svg" alt="" />
                      <h6 className="text-sm font-bold leading-[22px] text-purple-500">
                        55 <span className="font-normal"> mins</span>
                      </h6>
                    </div>
                    <h6 className="mb-2 mt-6 text-base font-bold leading-8 text-purple-500">
                      Pumpkin Rice Crispie Treats
                    </h6>
                    <p className="text-base font-normal leading-6 text-purple-500">
                      This simple and fun Halloween themed treat is a great way
                      to celebrate the fall season together.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <img
                      src="images/lovebug.png"
                      className="w-full rounded-t-lg"
                      alt=""
                    />
                    <span className="absolute right-6 top-4 rounded-[4px] bg-red-200 px-4 py-1 text-sm font-semibold leading-6 text-red-100">
                      Fun Craft
                    </span>
                  </div>
                  <div className="rounded-b-lg bg-purple-100 px-4 pb-8 pt-4 lg:px-6">
                    <div className="ml-auto flex h-[30px] w-[110px] items-center gap-2 rounded-[32px] bg-white px-4 py-2">
                      <img src="images/timer.svg" alt="" />
                      <h6 className="text-sm font-bold leading-[22px] text-purple-500">
                        30 <span className="font-normal"> mins</span>
                      </h6>
                    </div>
                    <h6 className="mb-2 mt-6 text-base font-bold leading-8 text-purple-500">
                      Love Bug Handprint Card
                    </h6>
                    <p className="text-base font-normal leading-6 text-purple-500">
                      This image illustrates how the vibrant red handprint can
                      be transformed into an adorable love bug, complete with
                      heart-shaped wings, googly eyes, and a cheerful message.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <img
                      src="images/fish.png"
                      className="w-full rounded-t-lg"
                      alt=""
                    />
                    <span className="absolute right-6 top-4 rounded-[4px] bg-red-200 px-4 py-1 text-sm font-semibold leading-6 text-red-100">
                      Fun Craft
                    </span>
                  </div>
                  <div className="rounded-b-lg bg-purple-100 px-4 pb-8 pt-4 lg:px-6">
                    <div className="ml-auto flex h-[30px] w-[110px] items-center gap-2 rounded-[32px] bg-white px-4 py-2">
                      <img src="images/timer.svg" alt="" />
                      <h6 className="text-sm font-bold leading-[22px] text-purple-500">
                        45 <span className="font-normal"> mins</span>
                      </h6>
                    </div>
                    <h6 className="mb-2 mt-6 text-base font-bold leading-8 text-purple-500">
                      Paper Plate Fish
                    </h6>
                    <p className="text-base font-normal leading-6 text-purple-500">
                      This craft is not only easy to make but also wonderfully
                      vibrant, perfect for bringing a bit of the ocean into your
                      home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "funFood" && (
            <div>
              <div className="grid grid-cols-3 gap-[38px] px-2">
                <div>
                  <div className="relative">
                    <img
                      src="images/food-img1.png"
                      className="rounded-t-lg"
                      alt=""
                    />
                    <span className="absolute right-6 top-4 rounded-[4px] bg-green-200 px-4 py-1 text-sm font-semibold leading-6 text-green-500">
                      Fun Food
                    </span>
                  </div>
                  <div className="rounded-b-lg bg-purple-100 px-4 pb-8 pt-4 lg:px-6">
                    <div className="ml-auto flex h-[30px] w-[109px] items-center gap-2 rounded-[32px] bg-white px-4 py-2">
                      <img src="images/timer.svg" alt="" />
                      <h6 className="text-sm font-bold leading-[22px] text-purple-500">
                        55 <span className="font-normal"> mins</span>
                      </h6>
                    </div>
                    <h6 className="mb-2 mt-6 text-base font-bold leading-8 text-purple-500">
                      Pumpkin Rice Crispie Treats
                    </h6>
                    <p className="text-base font-normal leading-6 text-purple-500">
                      This simple and fun Halloween themed treat is a great way
                      to celebrate the fall season together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "funCraft" && (
            <div>
              <div className="grid grid-cols-3 gap-[38px] px-2">
                <div>
                  <div className="relative">
                    <img
                      src="images/lovebug.png"
                      className="rounded-t-lg"
                      alt=""
                    />
                    <span className="absolute right-6 top-4 rounded-[4px] bg-red-200 px-4 py-1 text-sm font-semibold leading-6 text-red-100">
                      Fun Craft
                    </span>
                  </div>
                  <div className="rounded-b-lg bg-purple-100 px-4 pb-8 pt-4 lg:px-6">
                    <div className="ml-auto flex h-[30px] w-[110px] items-center gap-2 rounded-[32px] bg-white px-4 py-2">
                      <img src="images/timer.svg" alt="" />
                      <h6 className="text-sm font-bold leading-[22px] text-purple-500">
                        30 <span className="font-normal"> mins</span>
                      </h6>
                    </div>
                    <h6 className="mb-2 mt-6 text-base font-bold leading-8 text-purple-500">
                      Love Bug Handprint Card
                    </h6>
                    <p className="text-base font-normal leading-6 text-purple-500">
                      This image illustrates how the vibrant red handprint can
                      be transformed into an adorable love bug, complete with
                      heart-shaped wings, googly eyes, and a cheerful message.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <img
                      src="images/fish.png"
                      className="rounded-t-lg"
                      alt=""
                    />
                    <span className="absolute right-6 top-4 rounded-[4px] bg-red-200 px-4 py-1 text-sm font-semibold leading-6 text-red-100">
                      Fun Craft
                    </span>
                  </div>
                  <div className="rounded-b-lg bg-purple-100 px-4 pb-8 pt-4 lg:px-6">
                    <div className="ml-auto flex h-[30px] w-[110px] items-center gap-2 rounded-[32px] bg-white px-4 py-2">
                      <img src="images/timer.svg" alt="" />
                      <h6 className="text-sm font-bold leading-[22px] text-purple-500">
                        45 <span className="font-normal"> mins</span>
                      </h6>
                    </div>
                    <h6 className="mb-2 mt-6 text-base font-bold leading-8 text-purple-500">
                      Paper Plate Fish
                    </h6>
                    <p className="text-base font-normal leading-6 text-purple-500">
                      This craft is not only easy to make but also wonderfully
                      vibrant, perfect for bringing a bit of the ocean into your
                      home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
