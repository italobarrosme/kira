'use client'
import React from 'react'
import render from '../functions/render'

export const Systemsolarthreejs = () => {
  if (typeof window !== 'undefined') {
    render()
  }
  return (
    <div className="w-full h-full">
      <div id="scene"> </div>
    </div>
  )
}
