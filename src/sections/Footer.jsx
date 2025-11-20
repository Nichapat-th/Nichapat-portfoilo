import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-dark-gray mt-20"
    >
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-2xl font-bold mb-2">Nichapat.T</p>
            <p className="text-sm text-soft-gray">Product Designer</p>
          </div>
          <div className="text-sm text-soft-gray">
            <p>© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

