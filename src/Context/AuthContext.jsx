import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/ui/Loader";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const checkUserStatus = async () => {
    try {
      const accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error("Error checking user status:", error); // Log or handle error
    } finally {
      setLoading(false);
    }
  };

  

  const contextData = {
    user,
    loading, // Add loading state to context
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <div> <Loader /> </div> : children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

// export const handleLogOut = async () => {
//   const navigate = useNavigate();
//   await signOut();
//   setUser(null);

//   navigate("/");
// };

export default AuthContext;