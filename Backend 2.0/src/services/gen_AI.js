const { GoogleGenAI } = require("@google/genai")
const { z } = require("zod")
const { zodToJsonSchema } = require("zod-to-json-schema")
const puppeteer = require("puppeteer")

const ai = new GoogleGenAI({
    apiKey: process.env.GEN_AI_API_KEY
})

const ReportSchema = z.object({
    title: z.string().describe(
        "The exact job title for which this interview preparation report is generated."
    ),

    matchScore: z.number().min(0).max(100).describe(
        "An overall score from 0 to 100 representing how well the candidate's resume/profile aligns with the job description, based on skills, experience, and qualifications."
    ),

    technicalQuestions: z.array(z.object({
        question: z.string().describe(
            "A realistic, role-specific technical question the interviewer is likely to ask, based on the job description and the candidate's background."
        ),
        intention: z.string().describe(
            "A concise explanation of what the interviewer is trying to assess with this question (e.g., depth of knowledge, problem-solving approach, hands-on experience)."
        ),
        answer: z.string().describe(
            "A structured guide on how to answer this question — key points to cover, relevant examples to draw from the candidate's own experience, and any frameworks or terminology to reference."
        )
    })).describe(
        "A curated list of technical interview questions tailored to the job requirements and the candidate's profile, each paired with the interviewer's intent and a strong answering strategy."
    ),

    behavioralQuestions: z.array(z.object({
        question: z.string().describe(
            "A realistic behavioral or situational interview question the interviewer is likely to ask, relevant to the role and likely company culture."
        ),
        intention: z.string().describe(
            "A concise explanation of what trait, value, or competency the interviewer is trying to evaluate (e.g., teamwork, conflict resolution, ownership, leadership)."
        ),
        answer: z.string().describe(
            "A structured guide on how to answer, ideally following the STAR method (Situation, Task, Action, Result), with guidance on which experiences from the candidate's background to highlight."
        )
    })).describe(
        "A curated list of behavioral interview questions tailored to the role, each paired with the interviewer's intent and a strong answering strategy."
    ),

    skillGaps: z.array(z.object({
        skill: z.string().describe(
            "A specific skill, technology, or knowledge area required by the job description that is missing or underrepresented in the candidate's profile."
        ),
        severity: z.enum(["low", "medium", "high"]).describe(
            "How critical this gap is for the role: 'high' if it's a core requirement and likely a dealbreaker, 'medium' if important but learnable on the job, 'low' if it's a nice-to-have."
        )
    })).describe(
        "An honest, prioritized list of gaps between the candidate's current profile and the job requirements."
    ),

    preparationPlan: z.array(z.object({
        day: z.number().describe(
            "The day number in the preparation plan, starting from 1."
        ),
        focus: z.string().describe(
            "The primary theme for this day (e.g., 'Data Structures & Algorithms', 'System Design Fundamentals', 'Mock Behavioral Interviews', 'Resume Review')."
        ),
        tasks: z.array(z.string()).describe(
            "Specific, actionable tasks for the day — concrete enough that the candidate knows exactly what to do (e.g., specific problems to solve, resources to read, mock interviews to run)."
        )
    })).describe(
        "A day-by-day preparation plan that helps the candidate close the identified skill gaps before the interview."
    ),
})



async function generateReport({ resume, selfDescription, jobDescription }) {

    const prompt = `You are an expert technical interview coach and recruiter. Analyze the candidate's background against the job description below, and generate a personalized interview preparation report.

Base every question, skill gap, and recommendation strictly on the actual content provided — avoid generic advice that could apply to any candidate, and be honest/calibrated when scoring the match.

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}`

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: zodToJsonSchema(ReportSchema),
        }
    })

    return JSON.parse(response.text)
  }

  module.exports = { generateInterviewReport}