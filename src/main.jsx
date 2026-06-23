import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'


 
import './index.css'
import App from './App.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/joueurs',
    element: <App/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
