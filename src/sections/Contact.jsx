import { motion } from 'framer-motion';
import Section from '../components/Section';

const Contact = () => {
  const contactInfo = [
    {
      label: 'Email',
      value: 'nthammaiwt@gmail.com',
      link: 'mailto:nthammaiwt@gmail.com',
    },
    {
      label: 'Phone',
      value: '0992711089',
      link: 'tel:0992711089',
    },
    {
      label: 'Line',
      value: 'nichapat3392',
      link: 'https://line.me/ti/p/~nichapat3392',
    },
    {
      label: 'GitHub',
      value: 'nichapat-th',
      link: 'https://github.com/nichapat-th',
    },
    {
      label: 'Dribbble',
      value: 'Meeraimai',
      link: 'https://dribbble.com/Meeraimai',
    },
  ];

  return (
    <Section id="contact" className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-12">CONTACT</h2>
        
        <div className="max-w-2xl">
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-dark-gray last:border-0"
              >
                <div className="w-32 text-soft-gray font-medium">
                  {item.label}:
                </div>
                <div className="flex-1">
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-light-gray hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-light-gray">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;

