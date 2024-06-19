import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
const Slides = ({ slides, children }) => {
  console.log("slides", slides)
  return (
    <div id="slides" className="flex bg-tan h-screen">
      {slides && slides.length > 0 ? (
        slides.map(post => (
          <div
            id={post.fields.Name}
            className="post border  h-screen w-screen flex flex-col flex-shrink-0 items-center justify-center relative px-8 py-2 "
          >
            <video
              className="z-10 w-screen max-w-none"
              src={post.fields.Name + ".m4v"}
              muted="muted"
              autoplay=""
              loop
            />
            <video
              className="z-10 w-screen max-w-none"
              src={post.fields.Name + ".m4v"}
              muted="muted"
              autoplay=""
              loop
            />
            <video
              className="z-10 w-screen max-w-none"
              src={post.fields.Name + ".m4v"}
              muted="muted"
              autoplay=""
              loop
            />
            <video
              className="z-10 w-screen max-w-none"
              src={post.fields.Name + ".m4v"}
              muted="muted"
              autoplay=""
              loop
            />
            <div className="absolute z-20 bg-blue p-4">
              <p className="text-white">{post.fields.Notes}</p>
            </div>
            <a
              href={post.fields.Link}
              target="_blank"
              className="cursor-pointer absolute w-screen h-screen z-20 top-0 left-0 "
            ></a>
          </div>
        ))
      ) : (
        <p>No slides</p>
      )}
    </div>
  )
}

export default Slides
