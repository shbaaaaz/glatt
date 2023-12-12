import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
// importing local files
import styles from './App.module.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import RouteError from './components/RouteError/RouteError'

const App = () => {
  const [searchString, setSearchString] = useState('')

  const handleSearch = (text) => {
    setSearchString(text)
  }

  return (
    <div className={styles['app']}>
      <Header handleSearch={handleSearch} />
      <Outlet context={searchString} />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouteError />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
