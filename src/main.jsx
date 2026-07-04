import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Pokemon from './Pokemon.jsx'
import Detail from './Detail.jsx'
import AppContext from './AppContext.jsx'
import { UserProvider } from './UserContext.jsx'


 
import './index.css'
import App from './App.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppContext/>
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
    <UserProvider>
      <RouterProvider router={routes}></RouterProvider>
    </UserProvider>
)
