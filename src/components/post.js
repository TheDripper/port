import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"

const Post = ({ post, children }) => {
  return (
    <div
      id="post"
      className="flex flex-col lg:flex-row lg:items-center flex-shrink-0"
    >
      <div
        id={post.fields['Name']}
        className="post border  flex flex-col items-start justify-start relative flex-shrink-0 text-center"
        style={{
          background: "url(" + post.fields.Pic[0].url + ")",
        }}
      >
        <h1>{post.fields['Name']}</h1>
      </div>
      <div className="flex flex-col items-center justify-start overflow-y-scroll notes z-20 p-4  flex-shrink-0 lg:text-xl hidden">
        {post.fields['Name'] && <p className="text-white mb-6">{post.fields['Name']}</p>}
        {post.Git ? (
          <a href={post.Git} target="_blank" className="text-teal underline">
            View Git
          </a>
        ) : (
          <p className="hidden">nothing</p>
        )}
        <a href={post.Link} target="_blank" className="text-teal underline">
          {post.Text}
        </a>
      </div>
    </div>
  )
}

export default Post
