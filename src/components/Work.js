import React from "react";

import html5 from "../img/html5.svg";
import css3 from "../img/css3.svg";
import js from "../img/js.svg";
import react from "../img/react.svg";
import tailwind from "../img/tailwind.svg";

export default function Work() {
  return (
    <section id="work" className="mb-64 w-full font-sans text-slate-900">
      <div
        id="work"
        className="m-auto mb-8 ml-8 mr-8 w-64 text-orange-500 md:ml-24 md:w-full lg:ml-64"
      >
        <h1 className="text-left font-mono text-3xl md:w-[384px] md:text-5xl">
          &lt;Work /&gt;
        </h1>
      </div>

      <div className="wrapper dark:text-white lg:ml-32 lg:mr-32 lg:grid lg:grid-cols-2 lg:gap-16">
        {/* Project 1 */}
        <div className="project-1 m-auto flex h-64 w-64 flex-col items-center justify-around rounded-lg p-2 shadow-lg shadow-orange-300 dark:shadow-orange-900 lg:w-[384px]">
          <h1 className="font-mono font-bold">Palindrome Checker</h1>
          <p className="text-center">
            Simple web app to check if a given word is a palindrome (99% done).
          </p>
          <div className="flex flex-col items-center justify-around">
            <p className="text-center">Built with</p>
            <div className="mt-2 mb-2 flex w-48 items-center justify-around">
              <img
                className="h-6 w-6 lg:h-8 lg:w-8"
                alt="html logo"
                src={html5}
              ></img>
              <img
                className="h-6 w-6 lg:h-8 lg:w-8"
                alt="css logo"
                src={css3}
              ></img>
              <img
                className="h-6 w-6 lg:h-8 lg:w-8"
                alt="javascript logo"
                src={js}
              ></img>
            </div>
          </div>
          <div className="link-wrapper flex">
            <a
              className="ml-2 mr-2 rounded-full border-2 border-slate-900 p-2 hover:bg-slate-900 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-slate-900"
              href="https://yinchurijnaard.github.io/Palindrome-Checker/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              className="ml-2 mr-2 rounded-full border-2 border-slate-900 p-2 hover:bg-slate-900 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-slate-900"
              href="https://github.com/YinChuRijnaard/Palindrome-Checker"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-1 m-auto mt-12 flex h-64 w-64 flex-col items-center justify-around rounded-lg  p-2 shadow-lg shadow-orange-300 dark:shadow-orange-900 lg:mt-0 lg:w-[384px]">
          <h1 className="font-mono font-bold">Blog</h1>
          <p className="text-center">
            <span className="font-bold">Coming soon:</span> a blog website for,
            well..., blog articles.
          </p>
          <div className="flex flex-col items-center justify-around">
            <p className="text-center">Building with</p>
            <div className="mt-2 mb-2 flex w-48 items-center justify-around">
              <img
                className="h-6 w-6 lg:h-8 lg:w-8"
                alt="react logo"
                src={react}
              ></img>
              <img
                className="h-6 w-6 lg:h-8 lg:w-8"
                alt="tailwind logo"
                src={tailwind}
              ></img>
            </div>
          </div>
          {/* <div className="link-wrapper flex">
            <a
              className="ml-2 mr-2 rounded-full border-2 border-slate-900 p-2 hover:bg-slate-900 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-slate-900"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              className="ml-2 mr-2 rounded-full border-2 border-slate-900 p-2 hover:bg-slate-900 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-slate-900"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div> */}
        </div>

        {/* Project 3 */}
        <div className="project-1 m-auto mt-12 flex h-64 w-64 flex-col items-center justify-around rounded-lg p-2 shadow-lg shadow-orange-300 dark:shadow-orange-900 lg:mt-0 lg:w-[384px]">
          <h1 className="font-mono font-bold">Business landing page</h1>
          <p className="text-center">
            <span className="font-bold">Coming soon:</span> a business landing
            page for a digital art artist.
          </p>
          <div className="flex flex-col items-center justify-around">
            <p className="text-center">Building with</p>
            <div className="mt-2 mb-2 flex w-48 items-center justify-around">
              <img
                className="h-6 w-6 lg:h-8 lg:w-8"
                alt="react logo"
                src={react}
              ></img>
              <img
                className="h-6 w-6 lg:h-8 lg:w-8"
                alt="tailwind logo"
                src={tailwind}
              ></img>
            </div>
          </div>
          {/* <div className="link-wrapper flex">
            <a
              className="ml-2 mr-2 rounded-full border-2 border-slate-900 p-2 hover:bg-slate-900 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-slate-900"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              className="ml-2 mr-2 rounded-full border-2 border-slate-900 p-2 hover:bg-slate-900 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-slate-900"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
