import { motion } from 'framer-motion';
import Section from '../components/Section';

const About = () => {
  const education = [
    {
      period: '2014 - 2020',
      title: 'Monfort College',
      description: 'Science stream, Gifted Thai',
    },
    {
      period: '2021 - 2024',
      title: 'Bachelor of Computer Engineering',
      description: 'Information Systems and Network Engineering',
      institution: 'Chiangmai University',
    },
    {
      period: 'May 2023 – June 2023',
      title: 'Internship UX-UI Design Website Meet Software',
      details: 'Meet SoftWare Co., LTD.',
    },
    {
      period: '2025 - now',
      title: 'Master of Business Administration MBA',
      institution: 'Chiang Mai University',
    },
  ];

  const experience = [
    {
      period: '2021 - 2024',
      title: 'ISMath Tutor',
      description: 'English Math Teacher (Part Time)',
    },
    {
      period: 'July 2022 – July 2023',
      title: 'Chiangmai University Engineering',
      details: [
        'UX-UI design Admin site',
        'Testing',
      ],
      link: 'www.scholar.eng.cmu',
    },
    {
      period: 'Nov 2022 – Jan 2024',
      title: 'Chiangmai University Student Project',
      details: [
        'UX-UI design website',
        'Testing',
      ],
      link: 'https://cmu-social.web.app',
    },
    {
      period: '2024 - now',
      title: 'Meet SoftWare Co., LTD.',
      description: 'Full time',
    },
  ];

  return (
    <Section id="about" className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-12">ABOUT</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-soft-gray">Education</h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-soft-gray pl-6"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-sm text-soft-gray ml-4 whitespace-nowrap">{item.period}</p>
                  </div>
                  {item.description && (
                    <p className="text-light-gray mb-1">{item.description}</p>
                  )}
                  {item.institution && (
                    <p className="text-light-gray mb-1">{item.institution}</p>
                  )}
                  {item.details && (
                    Array.isArray(item.details) ? (
                      <ul className="list-disc list-inside text-light-gray space-y-1">
                        {item.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-light-gray">{item.details}</p>
                    )
                  )}
                  {item.link && (
                    <a
                      href={item.link.startsWith('http') ? item.link : `https://${item.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-soft-gray hover:text-white transition-colors text-sm underline mt-1 block"
                    >
                      {item.link}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-soft-gray">Experience</h3>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-soft-gray pl-6"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-sm text-soft-gray ml-4 whitespace-nowrap">{item.period}</p>
                  </div>
                  {item.description && (
                    <p className="text-light-gray mb-2">{item.description}</p>
                  )}
                  {item.details && (
                    Array.isArray(item.details) ? (
                      <ul className="list-disc list-inside text-light-gray space-y-1 mb-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-light-gray mb-2">{item.details}</p>
                    )
                  )}
                  {item.link && (
                    <a
                      href={item.link.startsWith('http') ? item.link : `https://${item.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-soft-gray hover:text-white transition-colors text-sm underline"
                    >
                      {item.link}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;

