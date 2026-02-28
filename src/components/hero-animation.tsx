"use client"

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas"

export default function HeroAnimation() {
  const { RiveComponent } = useRive({
    src: "/animations/hero.riv",
    stateMachines: "State Machine 1",
    artboard: "Artboard",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  })

  return (
    <div className="w-full h-screen">
      <RiveComponent />
    </div>
  )
}