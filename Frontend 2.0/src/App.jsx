import { memo } from 'react';
import AuthProvider from './features/auth/state/auth.context.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.app.jsx';
import { ReportProvider } from './features/report/state/report.context.jsx';

const App = () => {
  return (
    <AuthProvider>
      <InterviewProvider>
      <div className="relative min-h-screen overflow-hidden bg-[#091413] text-[#B0E4CC]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-20 top-16 h-56 w-56 rounded-full bg-[#408A71]/20 blur-3xl" />
          <div className="absolute right-32 bottom-24 h-72 w-72 rounded-full bg-[#B0E4CC]/15 blur-3xl" />
        </div>
        <RouterProvider router={router} />
      </div>
      </InterviewProvider>
    </AuthProvider>
  );
};

export default memo(App);