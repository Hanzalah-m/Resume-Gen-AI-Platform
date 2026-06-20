import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Report = () => {
//   const { id } = useParams();

  const [report, setReport] = useState(/** 
* Paste one or more documents here
*/
{
  "jobDescription": "need a react developer",
  "resume": "Mohammad Hanzalah\nB.Tech Computer Science Engineering Student — Jamia Hamdard\nDelhi, India | linkedin.com/in/hanzalah-m | hanzalah.in | github.com/Hanzalah-m\nPROFILE\nB.Tech Computer Science Engineering student at Jamia Hamdard with a strong foundation in Java, Python, C++ and MySQL.\nPassionate about building software that solves real problems — from database-driven applications to scalable web systems.\nActively involved with the college placement cell and engaged with the wider open-source and cloud-native developer community.\nEXPERIENCE\nMember, Research & Development Team — Dept. of Placement & Alumni Affairs, Jamia Hamdard \tOct 2025 – Present\nNew Delhi, India (Hybrid) · Full-time\nServe as Student Placement Coordinator, supporting placement drives and alumni-engagement initiatives for the department.\nRepresented the department at the Alumni Meet 2026, connecting with alumni and sharing their career journeys with current\nstudents.\nEngaged with the developer community at industry events such as KCD Delhi 2026 and the India AI Impact Summit 2026,\nnetworking with professionals from organizations including GitHub.\nPROJECTS\nHospital Management System — DBMS Project (Python, MySQL, Pandas)\nBuilt a backend system automating core hospital operations: registering patients, doctors and employees, and managing their\nrecords.\nImplemented automated database and table creation, with retrieval, display and update of records via unique IDs.\nUsed the Pandas library for data manipulation and MySQL Connector for database interaction.\nCode: github.com/Hanzalah-m/Hospital-DBMS\nEDUCATION\nJamia Hamdard — Bachelor of Technology, Computer Science Engineering \tOct 2024 – Oct 2028 (Expected)\nInternational Indian School, Jeddah — High School, Science \tApr 2014 – Mar 2023\nActivities & societies: Basketball, Literature, Philosophy, Programming\nCERTIFICATIONS\nSoftware Engineering Job Simulation — J.P. Morgan (via Forage) \tIssued Nov 2025\nCredential ID: QreYSiJLFRJZCCswJ\nSKILLS\nProgramming Languages Java, Python, C++, C\nWeb Technologies \tReact.js, HTML/CSS\nDatabases & Tools \tMySQL, MySQL Connector, Pandas\nLanguages Spoken \tEnglish (Full Professional), Hindi (Native / Bilingual)\n\n-- 1 of 1 --\n\n",
  "selfDescription": "b tech student ",
  "matchScore": 55,
  "technicalQuestions": [
    {
      "question": "What are functional components and class components in React? When would you use one over the other?",
      "intention": "To assess the candidate's foundational understanding of core React component types and their appropriate use cases.",
      "answer": "Explain the characteristics of both functional components (simpler, use hooks for state/lifecycle, preferred for new development) and class components (use 'this', lifecycle methods, older approach). Discuss that functional components with hooks are now the recommended standard due to better readability, reusability, and easier testing, while class components might be encountered in legacy codebases."
    },
    {
      "question": "Explain the concept of state in React. How do you manage state within a functional React component?",
      "intention": "To gauge understanding of React's reactive programming model and how data changes are handled.",
      "answer": "Define state as an object that holds data or information about the component that can change over time and cause a re-render. Explain how to use the 'useState' hook in functional components to declare and update local state variables. Provide a simple code example or analogy."
    },
    {
      "question": "What are React Hooks, and why were they introduced? Give an example of a common hook and its use.",
      "intention": "To check knowledge of modern React practices and the evolution of the framework.",
      "answer": "Describe Hooks as functions that let you 'hook into' React state and lifecycle features from functional components. Explain they were introduced to solve problems with class components (e.g., 'this' binding, difficulty reusing stateful logic, complex component hierarchies). Give 'useEffect' as an example, explaining its use for side effects like data fetching, DOM manipulation, or setting up subscriptions."
    },
    {
      "question": "How would you fetch data from an API in a React component and handle potential loading or error states?",
      "intention": "To evaluate practical knowledge of common frontend tasks and asynchronous operations.",
      "answer": "Explain using the 'useEffect' hook to perform data fetching. Discuss using 'fetch' or 'axios' within 'useEffect'. Emphasize managing loading states (e.g., with a 'isLoading' state variable) and error states (e.g., with an 'error' state variable) to provide user feedback. Mention handling component unmounting to prevent memory leaks."
    },
    {
      "question": "Can you explain the Virtual DOM in React and how it improves performance?",
      "intention": "To test understanding of React's underlying rendering mechanism and optimization strategies.",
      "answer": "Describe the Virtual DOM as a lightweight JavaScript object that is a representation of the actual DOM. Explain the reconciliation process: when state or props change, React creates a new Virtual DOM tree, compares it with the previous one, identifies the minimal set of changes (diffing algorithm), and then updates only those specific changes in the real DOM. This minimizes expensive direct DOM manipulations, leading to better performance."
    }
  ],
  "behavioralQuestions": [
    {
      "question": "You list React.js as a skill. Can you describe a project or situation where you applied your React.js knowledge?",
      "intention": "To assess practical application of React skills and delve into project experience, given the candidate's resume primarily highlights a Python/MySQL project.",
      "answer": "Use the STAR method. Describe the situation (e.g., personal project, course assignment), the task (e.g., building a user interface for a specific feature), the actions taken (e.g., component breakdown, state management, API integration), and the results (e.g., working application, lessons learned)."
    },
    {
      "question": "As a student placement coordinator, you collaborated with various individuals. Describe a challenging situation during a team collaboration and how you contributed to resolving it.",
      "intention": "To evaluate teamwork, communication, and conflict resolution skills in a non-technical context.",
      "answer": "Use the STAR method. Describe the challenge, your specific role and actions taken (e.g., facilitating discussion, mediating, compromising), and the positive outcome for the team or project. Highlight communication and problem-solving skills."
    },
    {
      "question": "Tell me about a time you had to learn a new programming language or technology quickly for a project. How did you approach the learning process?",
      "intention": "To assess the candidate's self-learning abilities, adaptability, and resourcefulness, which are crucial for evolving tech roles.",
      "answer": "Use the STAR method. Describe the technology, why it was new, the steps you took to learn it (e.g., online courses, documentation, small practice projects, seeking mentorship), and how effectively you integrated it into your work."
    },
    {
      "question": "Your Hospital Management System project focused on the backend. How do you ensure the user experience (UX) is considered, even when working primarily on backend systems?",
      "intention": "To understand the candidate's awareness of full-stack implications and user-centric design principles, even if their experience is backend-heavy.",
      "answer": "Discuss how backend decisions impact frontend UX (e.g., API design, response times, error handling). Explain how you would collaborate with frontend developers or product managers to understand user needs, ensure clear API contracts, and provide relevant data for a good user experience. Mention testing backend endpoints for usability."
    }
  ],
  "skillGaps": [
    {
      "skill": "Demonstrated React.js Project Experience",
      "severity": "high"
    },
    {
      "skill": "State Management Libraries (Redux, Zustand, Context API advanced patterns)",
      "severity": "high"
    },
    {
      "skill": "Modern JavaScript/TypeScript for Frontend",
      "severity": "medium"
    },
    {
      "skill": "Frontend Testing (Unit, Integration)",
      "severity": "medium"
    },
    {
      "skill": "Responsive Design and CSS Frameworks (e.g., Tailwind CSS, Material UI)",
      "severity": "medium"
    },
    {
      "skill": "Version Control (Git) best practices beyond basic usage",
      "severity": "low"
    }
  ],
  "preparationPlan": [
    {
      "day": 1,
      "focus": "React Fundamentals & JSX",
      "tasks": [
        "Review React official documentation: 'Main Concepts' and 'Thinking in React'",
        "Understand JSX syntax and how it compiles to JavaScript",
        "Practice creating simple functional components and rendering them",
        "Complete a tutorial on 'create-react-app' or Vite setup"
      ],
      "_id": {
        "$oid": "6a3038a7360830b01378043f"
      }
    },
    {
      "day": 2,
      "focus": "Props and State Management (useState)",
      "tasks": [
        "Deep dive into 'props' for passing data between components",
        "Understand component re-rendering triggered by state and props changes",
        "Practice using the 'useState' hook to manage component-level state",
        "Build a small interactive component (e.g., a counter, a toggle button)"
      ],
      "_id": {
        "$oid": "6a3038a7360830b013780440"
      }
    },
    {
      "day": 3,
      "focus": "React Hooks (useEffect, useContext)",
      "tasks": [
        "Study the 'useEffect' hook for side effects (data fetching, subscriptions, DOM manipulation)",
        "Understand cleanup functions in 'useEffect'",
        "Explore the 'useContext' hook for simpler global state management",
        "Solve problems involving managing side effects and context sharing"
      ],
      "_id": {
        "$oid": "6a3038a7360830b013780441"
      }
    },
    {
      "day": 4,
      "focus": "API Integration & Asynchronous JavaScript",
      "tasks": [
        "Review JavaScript promises, async/await syntax",
        "Practice fetching data from public APIs using 'fetch' or 'axios' within 'useEffect'",
        "Implement loading and error states for API calls",
        "Build a component that displays data from an external API"
      ],
      "_id": {
        "$oid": "6a3038a7360830b013780442"
      }
    },
    {
      "day": 5,
      "focus": "React Router & Conditional Rendering",
      "tasks": [
        "Learn about client-side routing with React Router (BrowserRouter, Routes, Link, useParams)",
        "Practice conditional rendering of components based on state or props",
        "Implement a multi-page application with basic navigation"
      ],
      "_id": {
        "$oid": "6a3038a7360830b013780443"
      }
    },
    {
      "day": 6,
      "focus": "Forms, Styling & Introduction to Advanced Concepts",
      "tasks": [
        "Understand controlled vs. uncontrolled components in forms",
        "Practice handling form inputs and submissions",
        "Explore basic styling in React (CSS modules, inline styles, CSS-in-JS libraries like styled-components if time permits)",
        "Read about performance optimization (memo, useCallback, useMemo) and higher-order components/render props"
      ],
      "_id": {
        "$oid": "6a3038a7360830b013780444"
      }
    },
    {
      "day": 7,
      "focus": "Project Application & Behavioral Practice",
      "tasks": [
        "Start a small full-stack project using your backend skills (e.g., Python/MySQL) and a new React frontend to integrate with it",
        "Review common behavioral interview questions and practice answering them using the STAR method",
        "Conduct a mock interview focusing on both technical React questions and behavioral scenarios"
      ],
      "_id": {
        "$oid": "6a3038a7360830b013780445"
      }
    }
  ],
  "createdAt": {
    "$date": "2026-06-15T17:38:47.782Z"
  },
  "updatedAt": {
    "$date": "2026-06-15T17:38:47.782Z"
  },
  "__v": 0
});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchReport = async () => {
//       try {
//         const response = await fetch(`/api/reports/${id}`);
//         const data = await response.json();

//         setReport(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReport();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#07100E] flex items-center justify-center text-white">
//         Loading Report...
//       </div>
//     );
//   }

//   if (!report) {
//     return (
//       <div className="min-h-screen bg-[#07100E] flex items-center justify-center text-white">
//         Report Not Found
//       </div>
//     );
//   }

  return (
    <div className="min-h-screen bg-[#07100E] text-[#E8F6ED]">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Hero */}
        <div className="rounded-[32px] border border-[#285A48] bg-[#10221B]/95 p-8 mb-8 shadow-[0_30px_80px_rgba(14,47,40,0.35)]">

          <p className="text-[#B0E4CC]/70 text-sm">
            AI Interview Preparation Report
          </p>

          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Match Score
              </h1>

              <p className="mt-3 text-[#B0E4CC]/70">
                Based on your resume and the provided job description.
              </p>
            </div>

            <div className="flex items-center justify-center w-40 h-40 rounded-full border-[10px] border-[#408A71]">
              <span className="text-5xl font-bold text-[#6ED6A6]">
                {report.matchScore}%
              </span>
            </div>

          </div>
        </div>

        {/* Skill Gaps */}
        <section className="rounded-[32px] border border-[#285A48] bg-[#10221B]/95 p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6">
            Skill Gaps
          </h2>

          <div className="flex flex-wrap gap-4">

            {report.skillGaps?.map((skill, index) => (
              <div
                key={index}
                className="rounded-full border border-[#285A48] bg-[#091413] px-5 py-3"
              >
                <div className="font-medium">
                  {skill.skill}
                </div>

                <div
                  className={`text-xs mt-1 ${
                    skill.severity === "high"
                      ? "text-red-400"
                      : skill.severity === "medium"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }`}
                >
                  {skill.severity}
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* Technical Questions */}
        <section className="mb-8">

          <h2 className="text-3xl font-bold mb-6">
            Technical Questions
          </h2>

          <div className="space-y-6">

            {report.technicalQuestions?.map((item, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-[#285A48] bg-[#10221B]/95 p-8"
              >
                <h3 className="text-xl font-semibold">
                  {index + 1}. {item.question}
                </h3>

                <div className="mt-5">
                  <p className="text-sm uppercase tracking-wider text-[#6ED6A6]">
                    Why This Is Asked
                  </p>

                  <p className="mt-2 text-[#B0E4CC]/80">
                    {item.intention}
                  </p>
                </div>

                <div className="mt-6 rounded-2xl bg-[#091413] p-5">
                  <p className="text-sm uppercase tracking-wider text-[#6ED6A6]">
                    Suggested Answer
                  </p>

                  <p className="mt-2 text-[#E8F6ED]/90">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </section>

        {/* Behavioral Questions */}
        <section className="mb-8">

          <h2 className="text-3xl font-bold mb-6">
            Behavioral Questions
          </h2>

          <div className="space-y-6">

            {report.behavioralQuestions?.map((item, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-[#285A48] bg-[#10221B]/95 p-8"
              >
                <h3 className="text-xl font-semibold">
                  {index + 1}. {item.question}
                </h3>

                <div className="mt-5">
                  <p className="text-sm uppercase tracking-wider text-[#6ED6A6]">
                    Why This Is Asked
                  </p>

                  <p className="mt-2 text-[#B0E4CC]/80">
                    {item.intention}
                  </p>
                </div>

                <div className="mt-6 rounded-2xl bg-[#091413] p-5">
                  <p className="text-sm uppercase tracking-wider text-[#6ED6A6]">
                    Suggested Approach
                  </p>

                  <p className="mt-2 text-[#E8F6ED]/90">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </section>

        {/* Preparation Plan */}
        <section>

          <h2 className="text-3xl font-bold mb-6">
            Preparation Plan
          </h2>

          <div className="grid gap-6">

            {report.preparationPlan?.map((day) => (
              <div
                key={day.day}
                className="rounded-[28px] border border-[#285A48] bg-[#10221B]/95 p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                  <h3 className="text-2xl font-semibold">
                    Day {day.day}
                  </h3>

                  <div className="rounded-full bg-[#285A48]/30 px-4 py-2 text-sm text-[#6ED6A6]">
                    {day.focus}
                  </div>

                </div>

                <div className="mt-6">

                  <ul className="space-y-3">

                    {day.tasks?.map((task, index) => (
                      <li
                        key={index}
                        className="rounded-2xl bg-[#091413] px-5 py-4"
                      >
                        {task}
                      </li>
                    ))}

                  </ul>

                </div>
              </div>
            ))}

          </div>

        </section>

      </div>
    </div>
  );
};

export default Report;