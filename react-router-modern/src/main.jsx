import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home'

const router =createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}/>
        </Route>
    )
)


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
