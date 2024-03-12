export function Testimonials() {
  return (
    <section className="bg-purple-200 py-14 dark:bg-purple-950">
      <div className="relative mx-auto max-w-[1024px] px-5 md:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[400px] gap-[30px] md:max-w-full md:grid-cols-3">
          <div className="rounded-[16px] bg-white p-6 dark:bg-black">
            <div className="text-center">
              <img
                src="images/avatar-1.svg"
                alt=""
                className="inline-block rounded-[56px]"
              />
              <h6 className="mb-2 mt-6 text-sm font-bold leading-6 text-purple-500 dark:text-purple-300">
                Emma R.
              </h6>
            </div>
            <p className="text-sm font-medium leading-[22px] text-purple-500 dark:text-purple-300">
              "Kidtivity Lab has been a game-changer for our family. The
              personalized activities are not only fun but also educational.
              It's everything we needed and more!"
            </p>
          </div>
          <div className="rounded-[16px] bg-white p-6 dark:bg-black">
            <div className="text-center">
              <img
                src="images/avatar-2.svg"
                alt=""
                className="inline-block rounded-[56px]"
              />
              <h6 className="mb-2 mt-6 text-sm font-bold leading-6 text-purple-500 dark:text-purple-300">
                David T.
              </h6>
            </div>
            <p className="text-sm font-medium leading-[22px] text-purple-500 dark:text-purple-300">
              "I love how easy and convenient it is to find activities tailored
              to my son's interests. Kidtivity Lab has made our weekends so much
              more enjoyable!"
            </p>
          </div>
          <div className="rounded-[16px] bg-white p-6 dark:bg-black">
            <div className="text-center">
              <img
                src="images/avatar-3.svg"
                alt=""
                className="inline-block rounded-[56px]"
              />
              <h6 className="mb-2 mt-6 text-sm font-bold leading-6 text-purple-500 dark:text-purple-300">
                Sofia P.
              </h6>
            </div>
            <p className="text-sm font-medium leading-[22px] text-purple-500 dark:text-purple-300">
              "Discovering Kidtivity Lab has brought so much joy and creativity
              into our home. It's like having a personal guide to enriching our
              family time together!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
