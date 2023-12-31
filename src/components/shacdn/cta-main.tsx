"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/lqKgGoIWHFh
 */

import { CtaGallery } from "./cta-gallery";

export function CtaMain() {
  return (
    <main className="flex flex-col gap-8 px-4 lg:px-6">
      <section className="w-full pt-6 lg:pt-16">
        <div className="grid max-h-[500px] lg:max-h-[500px] max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl xl:text-[4rem] 2xl:text-[4.20rem] mb-3">
              MK
            </h1>
            <h2 className="lg:leading-tighter text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-black/80 mb-3">
              Elevate Your Style. Elevate Your Life
            </h2>
            <a
              href="#collections"
              className="btn hover:text-black mt-4 bg-black text-white text-base"
            >
              Explore Collection
            </a>
          </div>
          <div>
            <CtaGallery />
          </div>
        </div>
      </section>
      <section className="container mx-auto flex justify-center lg:p-20">
        <img src="/logos.png" alt="" />
      </section>
      <section className="w-full py-12 lg:py-24 bg-base-200 rounded-2xl">
        <div className="container mx-auto">
          <h2 className="text-3xl text-base-content font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] mb-8">
            Trending Now
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>
    </main>
  );
}
