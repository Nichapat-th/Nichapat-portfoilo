import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import userInsightPDF from '../assets/HR_UserInsightResearch.pdf';
import infoPDF from '../assets/HR_InformationArchitecture.pdf';
import wireframePDF from '../assets/HR_Wireframe.pdf';
import uiDesignPDF from '../assets/HealthReport_UIDesign.pdf';

const steps = [
  {
    number: '01',
    label: 'User Insight Research',
    description: 'Understanding user needs, pain points, and behaviours',
    pdf: userInsightPDF,
  },
  {
    number: '02',
    label: 'Information Architecture',
    description: 'Organising content structure and navigation flow',
    pdf: infoPDF,
  },
  {
    number: '03',
    label: 'Wireframe',
    description: 'Low-fidelity layout and screen structure',
    pdf: wireframePDF,
  },
  {
    number: '04',
    label: 'UI Design',
    description: 'Final high-fidelity interface design',
    pdf: uiDesignPDF,
  },
];

const HealthReportWireframe = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Section className="pt-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-14">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-soft-gray hover:text-white transition-colors mb-8"
            >
              <span>←</span>
              <span>Back to Home</span>
            </Link>
            <p className="text-xs text-soft-gray uppercase tracking-widest mb-3 font-medium">Wireframe / UX</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Health Report</h1>
            <p className="text-lg text-soft-gray max-w-2xl">
              Full design process — from user research to final UI, showing how patient data is translated into a clear and accessible health report interface.
            </p>
          </div>

          {/* Process steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Step label */}
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-soft-gray/30 text-4xl font-bold leading-none select-none">{step.number}</span>
                  <div>
                    <h2 className="text-xl font-bold text-white">{step.label}</h2>
                    <p className="text-soft-gray text-sm mt-0.5">{step.description}</p>
                  </div>
                </div>

                {/* Connector line (not on last) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-0 ml-[1.75rem] w-px h-6 bg-dark-gray" />
                )}

                {/* PDF embed */}
                <div
                  className="rounded-xl overflow-hidden border border-soft-gray/15 bg-dark-gray"
                  style={{ height: '80vh' }}
                >
                  <iframe
                    src={step.pdf}
                    title={step.label}
                    className="w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default HealthReportWireframe;
