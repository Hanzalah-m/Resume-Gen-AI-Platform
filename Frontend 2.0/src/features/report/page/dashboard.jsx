import { memo, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Upload, Plus } from "lucide-react";
import { useReport } from '../hooks/useReport'
const Dashboard = () => {
  const navigate = useNavigate();
  const { loading, report, reports, generateReport, fetchAllReports } = useReport()
  const [jobDescription, setJobDescription] = useState('')
  const [selfDescription, setSelfDescription] = useState('')
  const resumeInputRef = useRef(null)

  useEffect(() => {
    fetchAllReports().catch((error) => console.error('Failed to load recent reports:', error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerateReport = async () => {
    const resumeFile = resumeInputRef.current?.files?.[0];
    if (!resumeFile) {
      alert("Please upload a resume file.");
      return;
    }

    try {
      const data = await generateReport({ jobDescription, selfDescription, resumeFile })
      if (data?._id) {
        navigate(`/report/${data._id}`);
      } else {
        alert("Report generated but could not navigate. Check backend response.");
      }
    } catch (error) {
      console.error("Generate report failed:", error);
      alert("Failed to generate report. See console for details.");
    }
  }

  return (
    <div className="min-h-screen bg-[#07100E] text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-6 md:py-8">

        {/* Header */}
        <div className="mb-6 md:mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-[#E8F6ED]">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm md:text-base text-[#B0E4CC]/70">
            Generate AI-powered interview preparation reports from your resume and job description.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-4 md:gap-8">

          {/* Main Section */}
          <div className="space-y-4 md:space-y-8">

            {/* Generate Report */}
            <div className="rounded-2xl md:rounded-4xl border border-[#285A48] bg-[#10221B]/95 p-4 md:p-8">

              <div className="flex items-center gap-3 mb-4 md:mb-8">
                <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-[#285A48]/30 flex-shrink-0">
                  <Plus size={20} className="md:hidden" />
                  <Plus size={22} className="hidden md:block" />
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg md:text-2xl font-semibold">
                    Generate Report
                  </h2>

                  <p className="text-[#B0E4CC]/70 text-xs md:text-sm">
                    Upload your resume and provide job details.
                  </p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">

                {/* JD */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm text-[#B0E4CC]">
                    Job Description
                  </label>

                  <textarea
                    rows={5}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the job description..."
                    className="w-full rounded-2xl md:rounded-3xl border border-[#285A48] bg-[#091413] p-3 md:p-4 text-sm md:text-base text-white outline-none focus:border-[#408A71]"
                  />
                </div>

                {/* Self Description */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm text-[#B0E4CC]">
                    Career Background
                  </label>

                  <textarea
                    rows={4}
                    onChange={(e) => setSelfDescription(e.target.value)}
                    placeholder="Describe your skills, experience and achievements..."
                    className="w-full rounded-2xl md:rounded-3xl border border-[#285A48] bg-[#091413] p-3 md:p-4 text-sm md:text-base text-white outline-none focus:border-[#408A71]"
                  />
                </div>

                {/* Upload */}
                <div>
                  <label className="block mb-2 text-xs md:text-sm text-[#B0E4CC]">
                    Resume
                  </label>

                  <label className="flex flex-col items-center justify-center h-36 md:h-44 rounded-2xl md:rounded-3xl border-2 border-dashed border-[#408A71] bg-[#091413] cursor-pointer hover:bg-[#0d1715] transition px-4 text-center">

                    <Upload
                      size={28}
                      className="text-[#B0E4CC] md:hidden"
                    />
                    <Upload
                      size={34}
                      className="text-[#B0E4CC] hidden md:block"
                    />

                    <p className="mt-3 md:mt-4 text-sm md:text-base text-[#E8F6ED]">
                      Upload Resume
                    </p>

                    <span className="text-xs md:text-sm text-[#B0E4CC]/60">
                      PDF or DOCX
                    </span>

                    <input
                      type="file"
                      ref={resumeInputRef}
                      hidden
                    />
                  </label>
                </div>

                <button onClick={handleGenerateReport} className="w-full h-12 md:h-14 rounded-2xl md:rounded-3xl bg-linear-to-r from-[#285A48] to-[#408A71] text-sm md:text-base font-semibold hover:opacity-90 transition">
                  Generate Report
                </button>

              </div>
            </div>

            {/* Recent Reports */}
            <div className="rounded-2xl md:rounded-4xl border border-[#285A48] bg-[#10221B]/95 p-4 md:p-8">

              <div className="flex justify-between items-center mb-4 md:mb-6">

                <h2 className="text-lg md:text-xl font-semibold">
                  Recent Reports
                </h2>

                <button className="text-[#6ED6A6] text-xs md:text-sm" onClick={() => navigate('/dashboard')}>
                  View All
                </button>
              </div>

              {loading && reports.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 md:py-14">
                  <FileText
                    size={36}
                    className="text-[#408A71] animate-pulse md:hidden"
                  />
                  <FileText
                    size={40}
                    className="text-[#408A71] animate-pulse hidden md:block"
                  />
                  <h3 className="mt-4 text-base md:text-lg font-medium">
                    Loading reports...
                  </h3>
                </div>
              ) : reports.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 md:py-14 px-4 text-center">
                  <FileText
                    size={36}
                    className="text-[#408A71] md:hidden"
                  />
                  <FileText
                    size={40}
                    className="text-[#408A71] hidden md:block"
                  />

                  <h3 className="mt-4 text-base md:text-lg font-medium">
                    No Reports Yet
                  </h3>

                  <p className="text-[#B0E4CC]/60 text-center mt-2 text-sm md:text-base">
                    Generate your first report to start interview preparation.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 md:space-y-4">
                  {reports.slice(0, 4).map((item) => (
                    <div
                      key={item._id}
                      className="rounded-2xl md:rounded-3xl border border-[#285A48] bg-[#091413]/90 p-4 md:p-5 cursor-pointer transition hover:border-[#6ED6A6]"
                      onClick={() => navigate(`/report/${item._id}`)}
                    >
                      <div className="flex items-start justify-between gap-3 md:gap-4">
                        <div className="min-w-0">
                          <h3 className="text-base md:text-lg font-semibold text-white truncate">
                            {item.title || 'Untitled report'}
                          </h3>
                          <p className="mt-1 md:mt-2 text-xs md:text-sm text-[#B0E4CC]/70 line-clamp-2">
                            {item.jobDescription?.slice(0, 100) || 'No job description provided.'}
                          </p>
                        </div>
                        <span className="flex-shrink-0 rounded-full bg-[#335748]/80 px-2.5 py-1 md:px-3 md:py-1 text-xs font-semibold text-[#B0E4CC]">
                          {item.matchScore ?? '—'}%
                        </span>
                      </div>
                      <div className="mt-3 md:mt-4 flex items-center justify-between text-xs text-[#B0E4CC]/60">
                        <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                        <span className="truncate ml-2">{item.selfDescription ? 'Ready to review' : 'No description'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-4 md:space-y-6">

            <div className="rounded-2xl md:rounded-4xl border border-[#285A48] bg-[#10221B]/95 p-4 md:p-6">

              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                Profile
              </h3>

              <div className="space-y-3">

                <div>
                  <p className="text-[#B0E4CC]/60 text-xs md:text-sm">
                    Reports Generated
                  </p>

                  <p className="text-lg md:text-xl font-bold">
                    {reports.length}
                  </p>
                </div>

                <div>
                  <p className="text-[#B0E4CC]/60 text-xs md:text-sm">
                    Last Report
                  </p>

                  <p className="text-sm truncate">
                    {reports[0]?.title || '—'}
                  </p>
                </div>

              </div>
            </div>

            <div className="rounded-2xl md:rounded-4xl border border-[#285A48] bg-[#10221B]/95 p-4 md:p-6">

              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                About
              </h3>

              <p className="text-xs md:text-sm text-[#B0E4CC]/70 leading-6">
                Upload a resume, provide a job description, and generate an AI-powered interview preparation report with skill gap analysis, technical questions, behavioral questions, and a personalized study plan.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default memo(Dashboard);