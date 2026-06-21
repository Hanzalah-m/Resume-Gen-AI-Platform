import axios from "axios";

const api = axios.create({
  baseURL: "https://resume-gen-ai-platform.onrender.com",
  withCredentials: true,
});

const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
  try {
    const formData = new FormData()
    formData.append("jobDescription", jobDescription)
    formData.append("selfDescription", selfDescription)
    formData.append("resume", resumeFile)
    const response = await api.post("/api/report", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};  

const getReportById = async (Id) => {
  try {
    const response = await api.get(`/api/report/report/${Id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

const getAllReports = async () => {
  try {
    const response = await api.get("/api/report");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

const generateResumePdf = async ({Id}) => {
  try {
    const response = await api.post(`/api/report/resume/pdf/${Id}`, null, { responseType: 'blob' });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export { generateReport, getReportById, getAllReports, generateResumePdf };