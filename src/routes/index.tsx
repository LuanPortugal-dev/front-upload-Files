import { ReactNode }  from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type ProtectedRouteProps = {
    children: ReactNode;
  };

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;