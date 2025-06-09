import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  // Jei neprisijungęs – keliauja į login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Jei prisijungęs – rodo puslapį
  return children;
}
