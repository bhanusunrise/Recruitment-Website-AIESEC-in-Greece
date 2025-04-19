import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-16 text-white" style={{ background: 'linear-gradient(135deg, #037EF3 0%, #0256a7 100%)' }}>
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Entity Support Teams</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Discover opportunities to support AIESEC Greece and make a global impact through our specialized teams.
        </p>
      </div>
    </section>
  );
};

export default Hero;