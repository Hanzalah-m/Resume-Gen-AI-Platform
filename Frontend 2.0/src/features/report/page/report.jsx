import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useReport } from "../hooks/useReport";

const Report = () => {
  const { reportId } = useParams();
  const { report, loading, fetchReportById } = useReport();
  const [notFound, setNotFound] = useState(false);

 useEffect(() => {
  const loadReport = async () => {
    if (!reportId) {
      setNotFound(true);
      return;
    }

    try {
      const response = await fetchReportById(reportId);
      setNotFound(!response);
    } catch (error) {
      console.error("Failed to load report:", error);
      setNotFound(true);
    }
  };

  loadReport();
}, [reportId]);


  if (loading) {
    return (
      <div className="min-h-screen bg-[#07100E] flex items-center justify-center text-white">
        Loading report...
      </div>
    );
  }

  if (notFound || !report) {
    return (
      <div className="min-h-screen bg-[#07100E] flex items-center justify-center text-white">
        Report not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07100E] text-[#E8F6ED]">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="back mb-6 text-sm text-[#B0E4CC]/70 cursor-pointer" onClick={() => window.history.back()}>
          &larr; Back to Dashboard
        </div>
        {/* Hero */}
        <div className="rounded-4xl border border-[#285A48] bg-[#10221B]/95 p-8 mb-8 shadow-[0_30px_80px_rgba(14,47,40,0.35)]">

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