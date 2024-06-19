import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import Dragon from "./dragon.js"

const Slide = ({ slide, children }) => {
  return (
    <div
      id="slide"
      className="flex flex-col lg:flex-row lg:items-center w-screen h-screen "
    >
      <div
        id={slide.Name}
        className="slide border  flex flex-col items-start justify-start relative flex-shrink-0"
        style={{
          background: "url(/" + slide.Background[0].filename + ")",
        }}
      >
        {slide.Name === "biochain biospecimens" &&
          typeof window !== "undefined" && <Dragon />}
      </div>
      <div className="flex flex-col items-center justify-start overflow-y-scroll notes z-20 bg-blue p-4  flex-shrink-0 lg:text-xl">
        {slide.Notes && <p className="text-white mb-6">{slide.Notes}</p>}
        {slide.Tags && slide.Tags.length && (
          <ul>
            {slide.Tags.map(tag => (
              <li className="text-white mb-4">{tag}</li>
            ))}
          </ul>
        )}
        {slide.Git ? (
          <a href={slide.Git} target="_blank" className="text-teal underline">
            View Git
          </a>
        ) : (
          <p class="hidden">nothing</p>
        )}
        <a href={slide.Link} target="_blank" className="text-teal underline">
          {slide.Text}
        </a>
      </div>
    </div>
  )
}

export default Slide
