import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { loginSuccess } from "../../redux/slices/authSlice";
import { auth } from "../../services/auth";

const ProtectedRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (!isAuthenticated) {
          const response = await auth();
          dispatch(loginSuccess(response.data.user));
        }
      } catch (error) {
        console.error("Authentication failed:", error);
        navigate('/login', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, [dispatch, isAuthenticated, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />;
};

export default ProtectedRoutes;
