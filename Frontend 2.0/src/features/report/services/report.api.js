import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const generateReport = async (resume, selfDescription, jobDescription) => {
  try {
    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("selfDescription", selfDescription);
    formData.append("jobDescription", jobDescription);
    const response = await api.post("/api/report/generate", formData, {
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

const generateResumePdf = async (Id) => {
  try {
    const response = await api.get(`/api/report/resume/pdf/${Id}`, { responseType: 'blob' });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export { generateReport, getReportById, getAllReports, generateResumePdf };