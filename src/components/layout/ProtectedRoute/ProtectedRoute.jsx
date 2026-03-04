import { Navigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext';

export default function ProtectedRoute({ children }){
    const { isAuthenticated } = useAppContext();

    const location = useLocation();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
