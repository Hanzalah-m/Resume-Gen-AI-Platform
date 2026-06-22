import { useContext } from "react";
import { AuthContext } from "../state/auth.context";
import { registerUser, loginUser, logoutUser , getCurrentUser } from "../services/auth.api";

const useAuth = () => {
    const context = useContext(AuthContext);  
    const { user, setUser, loading, setLoading } = context;

    const handleLogin = async (username, email, password) => {
        setLoading(true);
        try {
            const userData = await loginUser( username, email, password);
            setUser(userData.user);
        }
        catch (error) {
            console.error("Login failed:", error);
        }
        finally {
            setLoading(false);
        }
    };

    const handleRegister = async (username, email, password) => {
        setLoading(true);
        try {
            const userData = await registerUser(username, email, password);
            setUser(userData.user);
            return true;
        }
        catch (error) {
            console.error("Registration failed:", error);
            return false;
        }
        finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        setLoading(true);
        try {
            await logoutUser(); 
            setUser(null);
        }
        catch (error) {
            console.error("Logout failed:", error);
        }
        finally {
            setLoading(false);
        }
    };

    const fetchCurrentUser = async () => {
        setLoading(true);
        try {
            const userData = await getCurrentUser();
            setUser(userData.user);
        }
        catch (error) {
            console.error("Fetching current user failed:", error);
        }
        finally {
            setLoading(false);
        }
    };

    return {
        user,
        loading,
        handleLogin,
        handleRegister,
        handleLogout,
        fetchCurrentUser,
        
    };
}

export { useAuth };