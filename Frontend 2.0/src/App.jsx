import { memo } from 'react';
import AuthProvider from './features/auth/state/auth.context.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.app.jsx';
import { ReportProvider } from './features/report/state/report.context.jsx';
import Navbar from './features/navbar.jsx';

const App = () => {
  return (

    <>
    
    <AuthProvider><Navbar />
      <ReportProvider>
      <div className="relative min-h-screen overflow-hidden bg-[#091413] text-[#B0E4CC]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-4 top-8 h-32 w-32 md:left-20 md:top-16 md:h-56 md:w-56 rounded-full bg-[#408A71]/20 blur-3xl" />
          <div className="absolute right-4 bottom-12 h-40 w-40 md:right-32 md:bottom-24 md:h-72 md:w-72 rounded-full bg-[#B0E4CC]/15 blur-3xl" />  </div>
        <RouterProvider router={router} />
      </div>
      </ReportProvider>
    </AuthProvider>
    </>

    
  );
};

export default memo(App);