import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useReport } from "../hooks/useReport";

const Report = () => {
  const { reportId } = useParams();
  const { report, loading, fetchReportById, downloadResumePdf } = useReport();
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

const handleDownloadPdf = async () => {
  if (!reportId) {
    alert("Report ID is missing. Cannot download PDF.");
    return;
  }

  try {
    await downloadResumePdf(reportId);
  } catch (error) {
    console.error("Failed to download PDF:", error);
    alert("Could not download the PDF. Please try again.");
  }
};



  if (loading) {
    return (
      <div className="min-h-screen bg-[#07100E] flex items-center justify-center text-white px-4 text-center">
        Loading report...
      </div>
    );
  }

  if (notFound || !report) {
    return (
      <div className="min-h-screen bg-[#07100E] flex items-center justify-center text-white px-4 text-center">
        Report not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07100E] text-[#E8F6ED]">
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-6 md:py-8">

        <div className="back mb-4 md:mb-6 text-sm text-[#B0E4CC]/70 cursor-pointer" onClick={() => window.history.back()}>
          &larr; Back to Dashboard
        </div>
        {/* Hero */}
        <div className="rounded-2xl md:rounded-4xl border border-[#285A48] bg-[#10221B]/95 p-4 md:p-8 mb-6 md:mb-8 shadow-[0_30px_80px_rgba(14,47,40,0.35)]">

          <p className="text-[#B0E4CC]/70 text-xs md:text-sm">
            AI Interview Preparation Report
          </p>

          <div className="mt-4 md:mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                  Match Score
                </h1>

                <p className="mt-2 md:mt-3 text-sm md:text-base text-[#B0E4CC]/70">
                  Based on your resume and the provided job description.
                </p>
              </div>

              {/* Score circle - kept next to title on mobile so hero doesn't feel awkwardly stacked */}
              <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-40 md:h-40 rounded-full border-4 md:border-10 border-[#408A71] mx-auto sm:mx-0">
                <span className="text-2xl md:text-5xl font-bold text-[#6ED6A6]">
                  {report.matchScore}%
                </span>
              </div>
            </div>

            <div className="text-sm md:text-base">
              Download the full report as a PDF for offline access and sharing.
              <div className="mt-3">
                <a
                  onClick={handleDownloadPdf}
                  className="inline-block w-full sm:w-auto text-center cursor-pointer rounded-lg bg-[#408A71] px-6 py-3 text-white font-semibold hover:bg-[#6ED6A6] transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Skill Gaps */}
        <section className="rounded-2xl md:rounded-4xl border border-[#285A48] bg-[#10221B]/95 p-4 md:p-8 mb-6 md:mb-8">

          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">
            Skill Gaps
          </h2>

          <div className="flex flex-wrap gap-3 md:gap-4">

            {report.skillGaps?.map((skill, index) => (
              <div
                key={index}
                className="rounded-full border border-[#285A48] bg-[#091413] px-4 py-2.5 md:px-5 md:py-3"
              >
                <div className="text-sm md:text-base font-medium">
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
        <section className="mb-6 md:mb-8">

          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">
            Technical Questions
          </h2>

          <div className="space-y-4 md:space-y-6">

            {report.technicalQuestions?.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl md:rounded-[28px] border border-[#285A48] bg-[#10221B]/95 p-4 md:p-8"
              >
                <h3 className="text-base md:text-xl font-semibold">
                  {index + 1}. {item.question}
                </h3>

                <div className="mt-4 md:mt-5">
                  <p className="text-xs md:text-sm uppercase tracking-wider text-[#6ED6A6]">
                    Why This Is Asked
                  </p>

                  <p className="mt-2 text-sm md:text-base text-[#B0E4CC]/80">
                    {item.intention}
                  </p>
                </div>

                <div className="mt-4 md:mt-6 rounded-xl md:rounded-2xl bg-[#091413] p-4 md:p-5">
                  <p className="text-xs md:text-sm uppercase tracking-wider text-[#6ED6A6]">
                    Suggested Answer
                  </p>

                  <p className="mt-2 text-sm md:text-base text-[#E8F6ED]/90">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </section>

        {/* Behavioral Questions */}
        <section className="mb-6 md:mb-8">

          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">
            Behavioral Questions
          </h2>

          <div className="space-y-4 md:space-y-6">

            {report.behavioralQuestions?.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl md:rounded-[28px] border border-[#285A48] bg-[#10221B]/95 p-4 md:p-8"
              >
                <h3 className="text-base md:text-xl font-semibold">
                  {index + 1}. {item.question}
                </h3>

                <div className="mt-4 md:mt-5">
                  <p className="text-xs md:text-sm uppercase tracking-wider text-[#6ED6A6]">
                    Why This Is Asked
                  </p>

                  <p className="mt-2 text-sm md:text-base text-[#B0E4CC]/80">
                    {item.intention}
                  </p>
                </div>

                <div className="mt-4 md:mt-6 rounded-xl md:rounded-2xl bg-[#091413] p-4 md:p-5">
                  <p className="text-xs md:text-sm uppercase tracking-wider text-[#6ED6A6]">
                    Suggested Approach
                  </p>

                  <p className="mt-2 text-sm md:text-base text-[#E8F6ED]/90">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </section>

        {/* Preparation Plan */}
        <section>

          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">
            Preparation Plan
          </h2>

          <div className="grid gap-4 md:gap-6">

            {report.preparationPlan?.map((day) => (
              <div
                key={day.day}
                className="rounded-2xl md:rounded-[28px] border border-[#285A48] bg-[#10221B]/95 p-4 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                  <h3 className="text-lg md:text-2xl font-semibold">
                    Day {day.day}
                  </h3>

                  <div className="self-start md:self-auto rounded-full bg-[#285A48]/30 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-[#6ED6A6]">
                    {day.focus}
                  </div>

                </div>

                <div className="mt-4 md:mt-6">

                  <ul className="space-y-2 md:space-y-3">

                    {day.tasks?.map((task, index) => (
                      <li
                        key={index}
                        className="rounded-xl md:rounded-2xl bg-[#091413] px-4 py-3 md:px-5 md:py-4 text-sm md:text-base"
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