import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import $ from "jquery"
const Posts = ({ posts, children }) => {
  const [
    // posts,
    // setPosts,
    slides,
    setCurrentSlide,
    setSlides,
    currentSlide,
  ] = useState({
    currentSlide: false,
  })
  function slideTo(slide) {
    let newLeft = $("#" + slide).offset().left * -1
    // $('main').css('marginLeft',newLeft);
    $("main").animate({
      marginLeft: newLeft,
    })
    console.log(slide, newLeft)
  }
  function loadSlide(slide) {
    setCurrentSlide(slide)
  }

  return (
    <div
      id="posts"
      className="p-8 flex flex-col flex-shrink-0 items-center justify-center"
    >
      {posts && posts.length > 0 ? (
        posts.map(post => (
          <div
            className="post w-full border relative px-8 py-2 bg-black max-w-xl cursor-pointer"
            onClick={() => loadSlide(post.fields.Name)}
          >
            <p className="bg-white p-2 rounded-xl" key={post.id}>
              {post.fields.Notes}
            </p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Posts
