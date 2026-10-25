import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../header/Header.jsx"

export default function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
