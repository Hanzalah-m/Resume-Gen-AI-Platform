import {createBrowserRouter} from 'react-router-dom'
import Homepage from './features/auth/page/homepage.jsx'
import Login from './features/auth/page/login'
import Register from './features/auth/page/Register'
import Protected from './features/auth/component/protected'
import Dashboard from './features/report/page/dashboard.jsx'
import Report from './features/report/page/report.jsx'
import PublicRoute from './features/auth/component/public.jsx'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoute><Homepage/></PublicRoute>
    },
    {
        path: "/dashboard",
        element: <Protected><Dashboard /></Protected>
        // element: <Dashboard />
    },
    {
        path: "/report/:reportId",
        element: <Protected><Report /></Protected>
        
    }
])

export default router