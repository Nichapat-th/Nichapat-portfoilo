import React from 'react';

const Section = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;

