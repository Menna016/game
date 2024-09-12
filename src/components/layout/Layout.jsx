import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className=" p-5"  style={{
          backgroundColor: '#212529',
          fontFamily: '"Nerko One", cursive',
          fontWeight: 400,
          fontStyle: 'normal'
        }}>
        <Outlet />
      </div>
    </div>
  )
}
