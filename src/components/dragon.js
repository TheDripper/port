import openseadragon from "openseadragon"
import React, { useState, useEffect } from "react"

const Dragon = ({ children }) => {
  useEffect(() => {
    let viewer = new openseadragon({
      showNavigationControl: false,
      id: "openseadragon1",
      // prefixUrl: "/openseadragon/images/",
      tileSources:
        "https://biochain.s3.us-west-1.amazonaws.com/converted/T2234003-A808183.dzi",
    })
  }, [])
  return (
    <div className="relative">
      <div id="openseadragon1" ></div>
      <h1 className="pointer-events-none absolute blink bottom-0 left-50 text-xl lg:text-4xl z-30 text-center pb-20 w-full">SCROLL / CLICK / DRAG / PINCH</h1>
    </div>
  )
}

export default Dragon
