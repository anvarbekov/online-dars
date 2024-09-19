// rrd
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// pages
import { Home, About, Contact } from './pages'
import MainLayout from './layouts/MainLayout'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
