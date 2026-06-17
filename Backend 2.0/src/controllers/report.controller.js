const pdfParse = require("pdf-parse")
const { generateReport , generateResumePdf} = require("../services/gen_AI")
const ReportModel = require("../models/Report.model")
const authMiddleware = require("../middlewares/auth.middleware")
const upload = require("../middlewares/file.middleware")



async function generateReportController(req, res) {

    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
    const { selfDescription, jobDescription } = req.body

    const ReportByAi = await generateReport({
        resume: resumeContent.text,
        selfDescription,
        jobDescription
    })

    const Report = await ReportModel.create({
        user: req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...ReportByAi
    })

    res.status(201).json({
        message: " report generated successfully.",
        Report
    })

}

async function getReportByIdController(req, res) {

    const { Id } = req.params

    const Report = await ReportModel.findOne({ _id: Id, user: req.user.id })

    if (!Report) {
        return res.status(404).json({
            message: " report not found."
        })
    }

    res.status(200).json({
        message: " report fetched successfully.",
        Report
    })
}

async function getAllReportsController(req, res) {
    const Reports = await ReportModel.find({ user: req.user.id }).sort({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")

    res.status(200).json({
        message: " reports fetched successfully.",
        Reports
    })
}


async function generateResumePdfController(req, res) {
    const { Id } = req.params;

    const Report = await ReportModel.findOne({ _id: Id, user: req.user.id });

    if (!Report) {
        return res.status(404).json({
            message: "Interview report not found."
        });
    }

    const { resume, jobDescription, selfDescription } = Report;

    const pdfBuffer = await generateResumePdf({ resume, jobDescription, selfDescription });

    res.set({
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=resume_${Id}.pdf`
    });

    res.send(pdfBuffer);
}


module.exports = { generateReportController, getReportByIdController, getAllReportsController , generateResumePdfController }