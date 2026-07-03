import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Pokemon from './Pokemon.jsx'
import Detail from './Detail.jsx'


 
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
  },
  {
    path: '/pokemon',
    element: <Pokemon/>
  },
  {
    path: '/detail/:nom',
    element: <Detail/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
