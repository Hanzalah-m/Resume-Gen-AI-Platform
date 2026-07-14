import { useContext } from "react";
import { AuthContext } from "../state/auth.context";
import { sendOtp, verifyOtp, loginUser, logoutUser , getCurrentUser } from "../services/auth.api";

const useAuth = () => {
    const context = useContext(AuthContext);  
    const { user, setUser, loading, setLoading } = context;

  const handleLogin = async (username, email, password) => {
    setLoading(true);

    try {
        const userData = await loginUser(username, email, password);

        setUser(userData.user);

        return {
            success: true
        };

    } catch (error) {
        console.error("Login failed:", error);

        return {
            success: false,
            message:
                error.response?.data?.message ||
                "Invalid username or password"
        };

    } finally {
        setLoading(false);
    }
};

const handleSendOtp = async (username, email, password) => {
    setLoading(true);
    try {
        const data = await sendOtp(username, email, password);
        return { success: true, message: data.message };
    }
    catch (error) {
        console.error("Send OTP failed:", error);
        const message =
            error?.message ||
            (typeof error === "string" ? error : "Failed to send OTP. Please try again.");
        return { success: false, message };
    }
    finally {
        setLoading(false);
    }
};

const handleVerifyOtp = async (email, otp) => {
    setLoading(true);
    try {
        const userData = await verifyOtp(email, otp);
        setUser(userData.user);
        return { success: true };
    }
    catch (error) {
        console.error("OTP verification failed:", error);
        const message =
            error?.message ||
            (typeof error === "string" ? error : "Invalid or expired OTP.");
        return { success: false, message };
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
        handleSendOtp,
        handleVerifyOtp,
        handleLogout,
        fetchCurrentUser,
        
    };
}

export { useAuth };