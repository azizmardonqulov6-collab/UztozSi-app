import { Outlet } from "react-router-dom"
import { Silider , HeaderOne } from "./conpanents/Header"

export default function Layout() {
  return (
    <>
        <HeaderOne />
        <Silider />
        <main>
            <Outlet />
        </main>
    </>
    // Layout
  )
}
