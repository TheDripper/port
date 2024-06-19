import React, { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import background from "../images/2024.mp4"
import Post from "../components/post"
import Posts from "../components/posts"
import Slide from "../components/slide"
import back from "../images/back.svg"
import $ from "jquery"
import Airtable from "airtable"

const IndexPage: React.FC<PageProps> = () => {
  const [slide, setSlide] = useState(false)
  const [posts, setPosts] = useState(false)
  function scrollTo(slide) { }
  function rewind() {
    $("main").animate(
      {
        marginLeft: 0,
      },
      200,
      function () {
        setSlide(false)
        return
      }
    )
  }

  function loadSlide(slide) {
    console.log("slide", slide)
    setSlide(slide)
    let newLeft = $("main").outerWidth() * -1
  }

  useEffect(() => {
    Airtable.configure({
      apiKey:
        "pato11Hx9bNFxa88A.b4532d99a417e7f7a53b4f75aaeab632837235998a77212d7a252c4a39ea4a05",
      endpointUrl: "https://api.airtable.com",
    })
    const base = new Airtable.base("app3Jg0t6qlaPp2rf")
    let posts = []
    base("Table 1")
      .select({
        // Selecting the first 3 records in Grid view:
        view: "Grid view",
        maxRecords: 99,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          records.forEach(function (record) {
            console.log(record)
            posts.push(record)
          })

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
            return
          }
          console.log("posts", posts)
          setPosts(posts)
        }
      )
  }, [])
  return (
    <main className="flex flex-wrap w-screen h-screen">
      <Posts posts={posts} />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
