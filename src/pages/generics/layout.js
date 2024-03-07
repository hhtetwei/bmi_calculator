import Navbar from '../components/NavBar'

export default function Layout({ children }) {
  return (
    <>
      <div className="w-full h-full">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  )
}
