import { generateReport as generateReportApi, getReportById, getAllReports, generateResumePdf } from "../services/report.api";
import { useContext } from "react";
import { ReportContext } from "../state/report.context";


export const useReport = () => {
    const context = useContext(ReportContext);
    const { loading, setLoading, report, setReport, reports, setReports } = context;

    const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
        setLoading(true);
        try {
            const reportData = await generateReportApi({ jobDescription, selfDescription, resumeFile });
            setReport(reportData.Report);
            return reportData.Report;
        }
        catch (error) {
            console.error("Report generation failed:", error);
        }
        finally {
            setLoading(false);
        }
    };

    const fetchReportById = async (Id) => {
        setLoading(true);
        try {
            const reportData = await getReportById(Id);
            setReport(reportData.Report);
            return reportData.Report;
        }
        catch (error) {
            console.error("Fetching report failed:", error);
        }
        finally {
            setLoading(false);
        }
    };

    const fetchAllReports = async () => {
        setLoading(true);
        try {
            const reportsData = await getAllReports();
            setReports(reportsData.Reports);
            return reportsData.Reports;
        }
        catch (error) {
            console.error("Fetching reports failed:", error);
            throw error;
        }
        finally {
            setLoading(false);
        }
    };

    const downloadResumePdf = async (Id) => {
        setLoading(true);
        try {
            const pdfData = await generateResumePdf(Id);
            const url = window.URL.createObjectURL(new Blob([pdfData], { type: 'application/pdf' }));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `resume_${Id}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
        catch (error) {
            console.error("Downloading PDF failed:", error);
        }
        finally {
            setLoading(false);
        }
    };

    return {
        loading,
        report,
        reports,
        generateReport,
        fetchReportById,
        fetchAllReports,
        downloadResumePdf
    };
}

export default useReport;