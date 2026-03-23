import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const HealthReportWireframe = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Section className="pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-soft-gray hover:text-white transition-colors mb-6"
            >
              <span>←</span>
              <span>Back to Home</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Health Report Wireframe
            </h1>
            <p className="text-lg text-soft-gray">
              Simple, patient-first screens that show your status, risk level, and what to do next.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Screen 1: Health Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-sm mx-auto bg-dark-gray rounded-3xl p-4 border border-soft-gray/20 shadow-lg"
            >
              <p className="text-xs text-soft-gray uppercase tracking-wider mb-2">
                Screen 1 · Health Overview
              </p>
              <div className="rounded-2xl border border-soft-gray/30 bg-black/40 p-3 space-y-3">
                <div className="border-b border-soft-gray/20 pb-2 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-soft-gray">Health Checkup Report</p>
                    <p className="text-[10px] text-soft-gray">Date: Jun 23, 2014</p>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-soft-gray/20 text-[10px] text-soft-gray">
                    For patient view
                  </span>
                </div>

                <div className="border border-soft-gray/30 rounded-lg p-2">
                  <p className="text-[10px] text-soft-gray mb-1">
                    Patient Info
                  </p>
                  <p className="text-xs text-white">Saranya L. • 42 • Female</p>
                  <p className="text-[11px] text-soft-gray">
                    Ashby Medical Center
                  </p>
                </div>

                <div className="border border-red-400/60 bg-red-500/5 rounded-lg p-2 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-300" />
                    <p className="text-[10px] text-soft-gray uppercase tracking-wider">
                      Overall status
                    </p>
                  </div>
                  <p className="text-xs font-semibold text-red-300">
                    Needs attention (not emergency)
                  </p>
                  <p className="text-[11px] text-amber-200">
                    2 results are out of normal range
                  </p>
                </div>

                <div className="border border-soft-gray/30 rounded-lg p-2">
                  <p className="text-[10px] text-soft-gray mb-1">
                    Key things to know
                  </p>
                  <ul className="text-[11px] text-light-gray space-y-1">
                    <li>• Cholesterol: Borderline</li>
                    <li>• Triglycerides: High</li>
                    <li>• Blood pressure: Normal</li>
                  </ul>
                </div>

                <button className="w-full text-[11px] mt-1 py-2 rounded-lg bg-white text-black font-medium">
                  See results that are not normal
                </button>

                <div className="border border-soft-gray/30 rounded-lg p-2">
                  <p className="text-[10px] text-soft-gray mb-1">
                    Quick navigation
                  </p>
                  <div className="grid grid-cols-2 gap-1 text-[11px] text-light-gray">
                    <span>▢ Detailed results</span>
                    <span>▢ Doctor’s notes</span>
                    <span>▢ History &amp; trends</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Screen 2: Abnormal Findings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-sm mx-auto bg-dark-gray rounded-3xl p-4 border border-soft-gray/20 shadow-lg"
            >
              <p className="text-xs text-soft-gray uppercase tracking-wider mb-2">
                Screen 2 · Abnormal Findings
              </p>
              <div className="rounded-2xl border border-soft-gray/30 bg-black/40 p-3 space-y-3">
                <p className="text-sm font-semibold text-white">
                  Results that need attention
                </p>
                <p className="text-[10px] text-soft-gray">
                  These values are outside the normal range and come with clear next steps.
                </p>

                <div className="border border-amber-300/60 rounded-lg p-2">
                  <p className="text-xs font-semibold text-white">
                    Triglycerides
                  </p>
                  <p className="text-[11px] text-soft-gray">
                    193 mg/dL – slightly above the healthy range
                  </p>
                  <p className="text-[11px] text-amber-200">
                    Risk level: Medium
                  </p>
                  <p className="text-[11px] text-light-gray mt-1">
                    Focus on lifestyle changes (food, exercise) and recheck at the next visit.
                  </p>
                  <p className="text-[10px] text-soft-gray mt-1 underline">
                    See explanation in everyday language
                  </p>
                </div>

                <div className="border border-soft-gray/40 rounded-lg p-2">
                  <p className="text-xs font-semibold text-white">
                    Urinalysis – Casts
                  </p>
                  <p className="text-[11px] text-soft-gray">
                    Some values are slightly higher than usual.
                  </p>
                  <p className="text-[11px] text-amber-200">
                    Risk level: Low
                  </p>
                  <p className="text-[11px] text-light-gray mt-1">
                    Often temporary – we recommend checking again at your next appointment.
                  </p>
                </div>

                <div className="border border-soft-gray/30 rounded-lg p-2">
                  <p className="text-[10px] text-soft-gray mb-1">
                    Next steps
                  </p>
                  <ul className="text-[11px] text-light-gray space-y-1">
                    <li>✓ Monitor next checkup</li>
                    <li>✓ Consult doctor if symptoms appear</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Screen 3: Detailed Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-sm mx-auto bg-dark-gray rounded-3xl p-4 border border-soft-gray/20 shadow-lg"
            >
              <p className="text-xs text-soft-gray uppercase tracking-wider mb-2">
                Screen 3 · Detailed Results
              </p>
              <div className="rounded-2xl border border-soft-gray/30 bg-black/40 p-3 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">
                    Cholesterol &amp; urine tests – detailed view
                  </p>
                  <p className="text-[10px] text-soft-gray">
                    Compare current vs previous vs healthy range.
                  </p>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-3 text-[10px] text-soft-gray">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>In healthy range</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-300" />
                    <span>Borderline</span>
                  </div>
                </div>

                {/* Header row – summary view */}
                <div className="grid grid-cols-4 text-[10px] text-soft-gray mt-1 px-2">
                  <span>Test</span>
                  <span className="text-center">Current</span>
                  <span className="text-center">Previous</span>
                  <span className="text-right">Healthy range</span>
                </div>

                {/* Result rows modeled after reference design */}
                <div className="space-y-2 text-[11px] mt-1">
                  <div className="rounded-md px-2 py-1 bg-dark/40">
                    <div className="grid grid-cols-4 items-center gap-1">
                      <p className="text-light-gray text-[11px]">
                        Total Cholesterol
                      </p>
                      <div className="text-center">
                        <p className="text-[11px] text-white">151 mg/dL</p>
                        <p className="text-[9px] text-emerald-300">Current</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[11px] text-soft-gray">168 mg/dL</p>
                        <p className="text-[9px] text-soft-gray">Previous</p>
                      </div>
                      <p className="text-[10px] text-soft-gray text-right">
                        &lt;195 mg/dL
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md px-2 py-1 bg-dark/40 border border-amber-300/40">
                    <div className="grid grid-cols-4 items-center gap-1">
                      <p className="text-light-gray text-[11px]">
                        Triglycerides
                      </p>
                      <div className="text-center">
                        <p className="text-[11px] text-white">193 mg/dL</p>
                        <p className="text-[9px] text-amber-200">Current</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[11px] text-soft-gray">168 mg/dL</p>
                        <p className="text-[9px] text-soft-gray">Previous</p>
                      </div>
                      <p className="text-[10px] text-soft-gray text-right">
                        &lt;150 mg/dL
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md px-2 py-1 bg-dark/40">
                    <div className="grid grid-cols-4 items-center gap-1">
                      <p className="text-light-gray text-[11px]">HDL</p>
                      <div className="text-center">
                        <p className="text-[11px] text-white">97 mg/dL</p>
                        <p className="text-[9px] text-emerald-300">Current</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[11px] text-soft-gray">99 mg/dL</p>
                        <p className="text-[9px] text-soft-gray">Previous</p>
                      </div>
                      <p className="text-[10px] text-soft-gray text-right">
                        &gt;65 mg/dL
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md px-2 py-1 bg-dark/40">
                    <div className="grid grid-cols-4 items-center gap-1">
                      <p className="text-light-gray text-[11px]">Urine pH</p>
                      <div className="text-center">
                        <p className="text-[11px] text-white">6.0</p>
                        <p className="text-[9px] text-emerald-300">Current</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[11px] text-soft-gray">6.0</p>
                        <p className="text-[9px] text-soft-gray">Previous</p>
                      </div>
                      <p className="text-[10px] text-soft-gray text-right">
                        5.0 – 8.5
                      </p>
                    </div>
                  </div>
                </div>

                {/* Full lab-style table – separated section */}
                <div className="pt-3 mt-1 border-t border-soft-gray/30 space-y-2">
                  <p className="text-[10px] text-soft-gray font-semibold">
                    Full lab sheet (urine analysis)
                  </p>

                  {/* Header row – same format as comparison table */}
                  <div className="grid grid-cols-4 text-[10px] text-soft-gray px-2">
                    <span>Test</span>
                    <span className="text-center">Current</span>
                    <span className="text-center">Previous</span>
                    <span className="text-right">Healthy range</span>
                  </div>

                  {/* Result rows with color coding */}
                  <div className="max-h-48 overflow-y-auto space-y-1 text-[10px]">
                    {/* Color - Normal */}
                    <div className="rounded-md px-2 py-1 bg-dark/40">
                      <div className="grid grid-cols-4 items-center gap-1">
                        <p className="text-light-gray text-[10px]">Color</p>
                        <div className="text-center">
                          <p className="text-[10px] text-white">Yellow</p>
                          <p className="text-[8px] text-emerald-300">Current</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-soft-gray">Yellow</p>
                          <p className="text-[8px] text-soft-gray">Previous</p>
                        </div>
                        <p className="text-[9px] text-soft-gray text-right">Yellow</p>
                      </div>
                    </div>

                    {/* Appearance - Normal */}
                    <div className="rounded-md px-2 py-1 bg-dark/40">
                      <div className="grid grid-cols-4 items-center gap-1">
                        <p className="text-light-gray text-[10px]">Appearance</p>
                        <div className="text-center">
                          <p className="text-[10px] text-white">Clear</p>
                          <p className="text-[8px] text-emerald-300">Current</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-soft-gray">Clear</p>
                          <p className="text-[8px] text-soft-gray">Previous</p>
                        </div>
                        <p className="text-[9px] text-soft-gray text-right">Clear</p>
                      </div>
                    </div>

                    {/* Glucose - Normal */}
                    <div className="rounded-md px-2 py-1 bg-dark/40">
                      <div className="grid grid-cols-4 items-center gap-1">
                        <p className="text-light-gray text-[10px]">Glucose</p>
                        <div className="text-center">
                          <p className="text-[10px] text-white">Negative</p>
                          <p className="text-[8px] text-emerald-300">Current</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-soft-gray">Negative</p>
                          <p className="text-[8px] text-soft-gray">Previous</p>
                        </div>
                        <p className="text-[9px] text-soft-gray text-right">Negative</p>
                      </div>
                    </div>

                    {/* Specific Gravity - Normal */}
                    <div className="rounded-md px-2 py-1 bg-dark/40">
                      <div className="grid grid-cols-4 items-center gap-1">
                        <p className="text-light-gray text-[10px]">Specific Gravity</p>
                        <div className="text-center">
                          <p className="text-[10px] text-white">1.009</p>
                          <p className="text-[8px] text-emerald-300">Current</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-soft-gray">1.008</p>
                          <p className="text-[8px] text-soft-gray">Previous</p>
                        </div>
                        <p className="text-[9px] text-soft-gray text-right">1.003–1.030</p>
                      </div>
                    </div>

                    {/* pH - Normal */}
                    <div className="rounded-md px-2 py-1 bg-dark/40">
                      <div className="grid grid-cols-4 items-center gap-1">
                        <p className="text-light-gray text-[10px]">pH</p>
                        <div className="text-center">
                          <p className="text-[10px] text-white">6.0</p>
                          <p className="text-[8px] text-emerald-300">Current</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-soft-gray">6.0</p>
                          <p className="text-[8px] text-soft-gray">Previous</p>
                        </div>
                        <p className="text-[9px] text-soft-gray text-right">5.0–8.5</p>
                      </div>
                    </div>

                    {/* WBC - Normal */}
                    <div className="rounded-md px-2 py-1 bg-dark/40">
                      <div className="grid grid-cols-4 items-center gap-1">
                        <p className="text-light-gray text-[10px]">WBC</p>
                        <div className="text-center">
                          <p className="text-[10px] text-white">0–1</p>
                          <p className="text-[8px] text-emerald-300">Current</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-soft-gray">0–1</p>
                          <p className="text-[8px] text-soft-gray">Previous</p>
                        </div>
                        <p className="text-[9px] text-soft-gray text-right">0–5</p>
                      </div>
                    </div>

                    {/* RBC - Normal */}
                    <div className="rounded-md px-2 py-1 bg-dark/40">
                      <div className="grid grid-cols-4 items-center gap-1">
                        <p className="text-light-gray text-[10px]">RBC</p>
                        <div className="text-center">
                          <p className="text-[10px] text-white">0</p>
                          <p className="text-[8px] text-emerald-300">Current</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-soft-gray">0</p>
                          <p className="text-[8px] text-soft-gray">Previous</p>
                        </div>
                        <p className="text-[9px] text-soft-gray text-right">0–5</p>
                      </div>
                    </div>

                    {/* Bacteria - Worth monitoring */}
                    <div className="rounded-md px-2 py-1 bg-dark/40 border border-amber-300/40">
                      <div className="grid grid-cols-4 items-center gap-1">
                        <p className="text-light-gray text-[10px]">Bacteria</p>
                        <div className="text-center">
                          <p className="text-[10px] text-white">Few</p>
                          <p className="text-[8px] text-amber-200">Current</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-soft-gray">None</p>
                          <p className="text-[8px] text-soft-gray">Previous</p>
                        </div>
                        <p className="text-[9px] text-soft-gray text-right">None / Few</p>
                      </div>
                    </div>

                    {/* Sugar/Glucose - Normal */}
                    <div className="rounded-md px-2 py-1 bg-dark/40">
                      <div className="grid grid-cols-4 items-center gap-1">
                        <p className="text-light-gray text-[10px]">Sugar / Glucose</p>
                        <div className="text-center">
                          <p className="text-[10px] text-white">97 mg/dL</p>
                          <p className="text-[8px] text-emerald-300">Current</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-soft-gray">95 mg/dL</p>
                          <p className="text-[8px] text-soft-gray">Previous</p>
                        </div>
                        <p className="text-[9px] text-soft-gray text-right">70–110</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Screen 4 & 5: Notes + History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-sm mx-auto bg-dark-gray rounded-3xl p-4 border border-soft-gray/20 shadow-lg space-y-6"
            >
              {/* Screen 4: Doctor's Notes & Medical Imaging (matches IA) */}
              <div className="rounded-2xl border border-soft-gray/30 bg-black/40 p-4 space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b border-soft-gray/20">
                  <div className="w-1 h-4 bg-blue-400 rounded-full" />
                  <p className="text-xs text-soft-gray uppercase tracking-wider">
                    Screen 4 · Physician reports &amp; medical imaging
                  </p>
                </div>

                {/* Physician Notes - Hero section with better visual hierarchy */}
                <div className="rounded-xl bg-gradient-to-br from-dark/60 to-dark/40 border border-blue-400/30 p-4 space-y-3 shadow-lg">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-300 text-sm">👨‍⚕️</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-white mb-1">
                        Doctor's Summary
                      </p>
                      <p className="text-[11px] text-light-gray leading-relaxed">
                        “Overall, your results look good. The flagged values are in a range we will monitor. Please focus on the recommended lifestyle changes and follow up at your next visit.”
                      </p>
                      <p className="text-[10px] text-soft-gray mt-2">— Dr. Nancy Marshall</p>
                    </div>
                  </div>
                </div>

                {/* Visual divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-soft-gray/30 to-transparent" />

                {/* Imaging Summaries - Clear section with visual indicators */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-teal-400 rounded-full" />
                    <p className="text-xs font-bold text-white">
                      Imaging Summaries
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-lg bg-dark/50 border-l-2 border-teal-400/50 border border-soft-gray/30 px-3 py-2.5 hover:bg-dark/60 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[11px] font-semibold text-white">X‑ray</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full">Normal</span>
                          <button className="text-teal-300 hover:text-teal-200 transition-colors" title="View">
                            <span className="text-xs">👁</span>
                          </button>
                          <button className="text-teal-300 hover:text-teal-200 transition-colors" title="Download">
                            <span className="text-xs">⬇</span>
                          </button>
                        </div>
                      </div>
                      <p className="text-[10px] text-soft-gray">
                        No acute issues detected
                      </p>
                    </div>
                    <div className="rounded-lg bg-dark/50 border-l-2 border-teal-400/50 border border-soft-gray/30 px-3 py-2.5 hover:bg-dark/60 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[11px] font-semibold text-white">Ultrasound</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full">Normal</span>
                          <button className="text-teal-300 hover:text-teal-200 transition-colors" title="View">
                            <span className="text-xs">👁</span>
                          </button>
                          <button className="text-teal-300 hover:text-teal-200 transition-colors" title="Download">
                            <span className="text-xs">⬇</span>
                          </button>
                        </div>
                      </div>
                      <p className="text-[10px] text-soft-gray">
                        Normal findings
                      </p>
                    </div>
                    <div className="rounded-lg bg-dark/50 border-l-2 border-teal-400/50 border border-soft-gray/30 px-3 py-2.5 hover:bg-dark/60 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[11px] font-semibold text-white">Other Imaging</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded-full">Available</span>
                          <button className="text-teal-300 hover:text-teal-200 transition-colors" title="View">
                            <span className="text-xs">👁</span>
                          </button>
                          <button className="text-teal-300 hover:text-teal-200 transition-colors" title="Download">
                            <span className="text-xs">⬇</span>
                          </button>
                        </div>
                      </div>
                      <p className="text-[10px] text-soft-gray">
                        CT, MRI results available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-soft-gray/30 to-transparent" />

                {/* Raw Data Files - Clear section with visual indicators */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-purple-400 rounded-full" />
                    <p className="text-xs font-bold text-white">
                      Raw Data Files
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-lg bg-dark/50 border-l-2 border-purple-400/50 border border-soft-gray/30 px-3 py-2.5 hover:bg-dark/60 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[11px] font-semibold text-white">EKG</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full">View</span>
                          <button className="text-purple-300 hover:text-purple-200 transition-colors" title="View">
                            <span className="text-xs">👁</span>
                          </button>
                          <button className="text-purple-300 hover:text-purple-200 transition-colors" title="Download">
                            <span className="text-xs">⬇</span>
                          </button>
                        </div>
                      </div>
                      <p className="text-[10px] text-soft-gray">
                        View waveform summary
                      </p>
                    </div>
                    <div className="rounded-lg bg-dark/50 border-l-2 border-purple-400/50 border border-soft-gray/30 px-3 py-2.5 hover:bg-dark/60 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[11px] font-semibold text-white">Audiogram</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full">View</span>
                          <button className="text-purple-300 hover:text-purple-200 transition-colors" title="View">
                            <span className="text-xs">👁</span>
                          </button>
                          <button className="text-purple-300 hover:text-purple-200 transition-colors" title="Download">
                            <span className="text-xs">⬇</span>
                          </button>
                        </div>
                      </div>
                      <p className="text-[10px] text-soft-gray">
                        Hearing test results
                      </p>
                    </div>
                    <button className="w-full text-[11px] font-medium px-4 py-2.5 rounded-lg border-2 border-purple-400/50 bg-purple-500/10 text-purple-200 hover:border-purple-400 hover:bg-purple-500/20 transition-all shadow-sm flex items-center justify-center gap-2">
                      <span>⬇</span>
                      <span>Download / View Original Files</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Screen 5: History & Trends - Matches IA structure */}
              <div className="rounded-2xl border border-soft-gray/30 bg-black/40 p-4 space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b border-soft-gray/20">
                  <div className="w-1 h-4 bg-pink-400 rounded-full" />
                  <p className="text-xs text-soft-gray uppercase tracking-wider">
                    Screen 5 · Health history &amp; trends
                  </p>
                </div>

                {/* 1. Previous Health Reports */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-3 bg-pink-300 rounded-full" />
                    <p className="text-xs font-bold text-white">
                      Previous Health Reports
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <button className="w-full text-left rounded-lg bg-dark/50 border border-soft-gray/30 px-3 py-2 hover:bg-dark/60 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-medium text-white">Nov 2016 Report</p>
                          <p className="text-[9px] text-soft-gray">View full report</p>
                        </div>
                        <span className="text-xs text-pink-300">→</span>
                      </div>
                    </button>
                    <button className="w-full text-left rounded-lg bg-dark/50 border border-soft-gray/30 px-3 py-2 hover:bg-dark/60 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-medium text-white">Feb 2018 Report</p>
                          <p className="text-[9px] text-soft-gray">View full report</p>
                        </div>
                        <span className="text-xs text-pink-300">→</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Visual divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-soft-gray/30 to-transparent" />

                {/* 2. Trend Visualization - with Improving/Stable/Worsening */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-3 bg-pink-300 rounded-full" />
                    <p className="text-xs font-bold text-white">
                      Trend Visualization
                    </p>
                  </div>

                  {/* Improving Trends */}
                  <div className="rounded-lg bg-emerald-500/10 border-l-2 border-emerald-400/50 border border-soft-gray/30 p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">📈</span>
                      <p className="text-[11px] font-semibold text-emerald-300">Improving</p>
                    </div>
                    <div className="space-y-1.5">
                      <div className="bg-dark/40 rounded px-2 py-1.5">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-[10px] font-medium text-white">Urine pH</p>
                          <span className="text-[9px] text-emerald-300 bg-emerald-500/20 px-1.5 py-0.5 rounded">→</span>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] text-soft-gray">
                          <span>Nov 2016: 5.5</span>
                          <span>→</span>
                          <span className="text-emerald-300">Nov 2018: 6.0</span>
                        </div>
                        <p className="text-[9px] text-emerald-200 mt-1">Within healthy range (5.0-8.5)</p>
                      </div>
                      <div className="bg-dark/40 rounded px-2 py-1.5">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-[10px] font-medium text-white">WBC (White Blood Cells)</p>
                          <span className="text-[9px] text-emerald-300 bg-emerald-500/20 px-1.5 py-0.5 rounded">↓</span>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] text-soft-gray">
                          <span>Nov 2016: 2-3 cells/HPF</span>
                          <span>→</span>
                          <span className="text-emerald-300">Nov 2018: 0-1 cells/HPF</span>
                        </div>
                        <p className="text-[9px] text-emerald-200 mt-1">Within healthy range (0-5)</p>
                      </div>
                    </div>
                  </div>

                  {/* Stable Trends */}
                  <div className="rounded-lg bg-blue-500/10 border-l-2 border-blue-400/50 border border-soft-gray/30 p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">➡</span>
                      <p className="text-[11px] font-semibold text-blue-300">Stable</p>
                    </div>
                    <div className="space-y-1.5">
                      <div className="bg-dark/40 rounded px-2 py-1.5">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-[10px] font-medium text-white">Specific Gravity</p>
                          <span className="text-[9px] text-blue-300 bg-blue-500/20 px-1.5 py-0.5 rounded">→</span>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] text-soft-gray">
                          <span>Nov 2016: 1.009</span>
                          <span>→</span>
                          <span className="text-blue-300">Nov 2018: 1.009</span>
                        </div>
                        <p className="text-[9px] text-blue-200 mt-1">Within healthy range (1.003-1.030)</p>
                      </div>
                      <div className="bg-dark/40 rounded px-2 py-1.5">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-[10px] font-medium text-white">Sugar/Glucose</p>
                          <span className="text-[9px] text-blue-300 bg-blue-500/20 px-1.5 py-0.5 rounded">→</span>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] text-soft-gray">
                          <span>Nov 2016: 97 mg/dL</span>
                          <span>→</span>
                          <span className="text-blue-300">Nov 2018: 97 mg/dL</span>
                        </div>
                        <p className="text-[9px] text-blue-200 mt-1">Within healthy range (70-110)</p>
                      </div>
                    </div>
                  </div>

                  {/* Worsening Trends */}
                  <div className="rounded-lg bg-amber-500/10 border-l-2 border-amber-400/50 border border-soft-gray/30 p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">📉</span>
                      <p className="text-[11px] font-semibold text-amber-300">Worth Monitoring</p>
                    </div>
                    <div className="space-y-1.5">
                      <div className="bg-dark/40 rounded px-2 py-1.5">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-[10px] font-medium text-white">Bacteria</p>
                          <span className="text-[9px] text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded">↑</span>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] text-soft-gray">
                          <span>Nov 2016: None</span>
                          <span>→</span>
                          <span className="text-amber-300">Nov 2018: Few</span>
                        </div>
                        <p className="text-[9px] text-amber-200 mt-1">Still within acceptable range - monitor</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-soft-gray/30 to-transparent" />

                {/* 3. Key Metric Comparisons Over Time */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-3 bg-pink-300 rounded-full" />
                    <p className="text-xs font-bold text-white">
                      Key Metric Comparisons Over Time
                    </p>
                  </div>
                  <div className="rounded-lg bg-dark/50 border border-soft-gray/30 p-3 space-y-2">
                    <div className="grid grid-cols-3 gap-2 text-[9px] text-soft-gray mb-2 pb-2 border-b border-soft-gray/20">
                      <span>Metric</span>
                      <span className="text-center">Nov 2016</span>
                      <span className="text-center">Nov 2018</span>
                    </div>
                    <div className="space-y-1.5 text-[10px]">
                      <div className="grid grid-cols-3 gap-2 items-center">
                        <p className="text-light-gray">pH</p>
                        <p className="text-center text-soft-gray">5.5</p>
                        <p className="text-center text-emerald-300">6.0 →</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 items-center">
                        <p className="text-light-gray">Specific Gravity</p>
                        <p className="text-center text-soft-gray">1.009</p>
                        <p className="text-center text-blue-300">1.009 →</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 items-center">
                        <p className="text-light-gray">WBC</p>
                        <p className="text-center text-soft-gray">2-3</p>
                        <p className="text-center text-emerald-300">0-1 ↓</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 items-center">
                        <p className="text-light-gray">RBC</p>
                        <p className="text-center text-soft-gray">-</p>
                        <p className="text-center text-blue-300">- →</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 items-center">
                        <p className="text-light-gray">Bacteria</p>
                        <p className="text-center text-soft-gray">None</p>
                        <p className="text-center text-amber-300">Few ↑</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 items-center">
                        <p className="text-light-gray">Sugar/Glucose</p>
                        <p className="text-center text-soft-gray">97 mg/dL</p>
                        <p className="text-center text-blue-300">97 mg/dL →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default HealthReportWireframe;


