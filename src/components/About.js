import React from "react";

import html5 from "../img/html5.svg";
import css3 from "../img/css3.svg";
import js from "../img/js.svg";
import ts from "../img/ts.svg";
import react from "../img/react.svg";
import tailwind from "../img/tailwind.svg";

export default function About() {
  return (
    <section id="about" w-full className="mb-[768px] font-sans">
      {/* mb-[512px] seems to work for this (https://imgur.com/a/vLp8H6i) problem. Issue:
          Other components were neatly positioned directly underneath the other component.
          With this one, there was overlap, don't know where it came from...
      */}
      <div
        id="about"
        className="m-auto mb-8 ml-8 mr-8 w-64 text-red-500 md:ml-24 md:w-full lg:ml-64"
      >
        <h1 className="text-left font-mono text-3xl md:w-[384px] md:text-5xl">
          &lt;About /&gt;
        </h1>
      </div>

      <div className="float-left ml-8 mr-8 dark:text-white md:flex md:flex-row-reverse md:items-center md:justify-end lg:ml-48">
        <p className="leading-loose first-letter:text-3xl md:ml-16 lg:w-1/2 lg:text-lg">
          Hey you! Welcome to my - internet - home. My name is Yin Chu Rijnaard,
          a self-taught junior web developer from{" "}
          <span className="underline decoration-orange-500 decoration-4">
            Rotterdam
          </span>
          &nbsp;🇳🇱 I'm currently based in{" "}
          <span className="underline decoration-blue-500 decoration-4">
            Athens
          </span>
          &nbsp;🇬🇷<br></br>I have a BASc. degree International Business for Asia
          from the Rotterdam University of Applied Sciences. As part of my
          studies I have studied abroad in{" "}
          <span className="underline decoration-red-500 decoration-4">
            Shanghai
          </span>{" "}
          &nbsp;🇨🇳 and done an internship in{" "}
          <span className="underline decoration-yellow-500 decoration-4">
            Kuala Lumpur
          </span>
          &nbsp;🇲🇾<br></br>
          <br></br>
          <span className="font-bold">Some of my interests:</span>
          <span className="tracking-[0.375em]">
            &nbsp;🇨🇭 🥟 🍣 ✈️ 🥾 🎿 ⌚️ 🚗
          </span>
          <br></br>
          <br></br>
          <span className="font-bold">Technologies I work with</span>
          <span className="mt-4 grid grid-cols-6 place-items-center gap-6 text-center text-xs">
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
            <img
              className="h-6 w-6 lg:h-8 lg:w-8"
              alt="typescript logo"
              src={ts}
            ></img>
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
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>React</p>
            <p>Tailwind CSS</p>
          </span>
        </p>
      </div>
      <div className="mt-8 flex items-center justify-center md:mt-0 md:ml-8">
        {/* <img src={pfp} width="32" height="32" className="rounded-full"></img> */}
      </div>
    </section>
  );
}
