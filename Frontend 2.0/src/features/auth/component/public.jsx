import { useAuth } from '../hooks/useAuth';
import { useNavigate,Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;
