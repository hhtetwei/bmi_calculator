import Navbar from '../components/NavBar'

export default function Layout({ children }) {
  return (
    <>
      <div className="w-full h-full">
        <body>
          {/* <Navbar /> */}
          <main>{children}</main>
        </body>

        {/* <Footer /> */}
      </div>
    </>
  )
}
