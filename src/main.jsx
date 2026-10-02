import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Blogs from './pages/Blogs.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AppNav from './AppNav.jsx'
import Hooks from './Hooks.jsx'



 
import './index.css'
import App from './App.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Hooks/>
  },
  {
    path: '/joueurs',
    element: <App/>
    // element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/blogs',
    element: <Blogs/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  {
    path: '/correction',
    element: <AppNav/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={routes}></RouterProvider>
)
