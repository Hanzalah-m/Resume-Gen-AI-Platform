import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

async function sendOtp(username, email, password) {
  try {
    const response = await api.post("/api/auth/send-otp", { username, email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
}

async function verifyOtp(email, otp) {
  try {
    const response = await api.post("/api/auth/verify-otp", { email, otp });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
}

async function loginUser(username, email, password) {
  try {
    const response = await api.post("/api/auth/login", {username, email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
}

async function logoutUser() {
  try {
    const response = await api.post("/api/auth/logout", {});
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
}

async function getCurrentUser() {
  try {
    const response = await api.get("/api/auth/me",{});
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
}

export { sendOtp, verifyOtp, loginUser, logoutUser, getCurrentUser };