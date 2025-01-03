import { Outlet } from "react-router-dom"
import { Navbar } from "../Components/Navbar"
import { Footer } from "../Components/Footer"

export const MainLayout = () => {
  return (
    <>
      <header className="fixed z-50 w-full">
        <Navbar></Navbar>
      </header>

      <main className="min-h-[calc(100vh-316px)]">
        <Outlet></Outlet>
      </main>
      <footer className="bg-base-300 text-base-content">
        <Footer></Footer>
      </footer>
    </>
  )
}
