"use client";
import GaussianGraphs from "./GaussianGraphs";
import NameGraph from "./NameGraph";

/* eslint-disable react/no-unescaped-entities */
export default function ExplanationPage() {
  return (
    <article className="max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:gap-16 mb-10">
      <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
        How does our calculator work?
      </h1>
      <div className="mt-2 mx-auto text-muted-foreground md:text-xl">
        The sheep worth calculator works by using many different parameters.
        <br />
        {/* We calculate your baseline value by simply multiplying all of your values together. */}
        Some parameters have their own "ideal" score, which is determined by
        gaussian graphs (i.e. bell curves);
        <br />
        <GaussianGraphs />
        <div className="mt-4">
          But some other paramaters like the "name" parameter look different;
          <NameGraph />
        </div>
      </div>
    </article>
  );
}
