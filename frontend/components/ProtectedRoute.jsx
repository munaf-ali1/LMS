import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.userData);

  return user ? children : <Navigate to="/signin" />;
}
