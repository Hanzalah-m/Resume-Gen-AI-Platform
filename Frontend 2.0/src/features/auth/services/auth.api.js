import axios from "axios";

const api = axios.create({
  baseURL: "https://resume-gen-ai-platform.onrender.com",
  withCredentials: true,
});

async function registerUser(username, email, password) {
  try {
    const response = await api.post("/api/auth/register",{username, email, password});
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

export { registerUser, loginUser, logoutUser , getCurrentUser };