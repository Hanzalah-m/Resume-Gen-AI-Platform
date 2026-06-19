import {createBrowserRouter} from 'react-router-dom'
import Homepage from './features/auth/page/homepage.jsx'
import Login from './features/auth/page/login'
import Register from './features/auth/page/Register'
import Protected from './features/auth/component/protected'
import Dashboard from './features/report/dashboard'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>
    },
    {
        path: "/login",
        element: <Homepage />
    },
    {
        path: "/register",
        element: <Homepage />
    },
    {
        path: "/dashboard",
        element: <Protected><Dashboard /></Protected>
    }
])

export default router