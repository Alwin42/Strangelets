import React from 'react';
import { useNavigate } from 'react-router-dom';
import Pioneer10 from '../../components/outerspace/Pioneer10';
import Pioneer11 from '../../components/outerspace/Pioneer11';
import Voyager1 from '../../components/outerspace/Voyager-1';
import Voyager2 from '../../components/outerspace/Voyager-2';

const OuterSpaceExplore = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen bg-black text-[#FCF9EC] flex flex-col overflow-x-hidden">
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/explore')}
        className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-5 py-2.5 bg-[#00105B]/90 text-[#FCF9EC] border border-[#6061B6] rounded-full font-bold text-sm uppercase tracking-wider backdrop-blur-sm transition-all duration-300 hover:bg-[#C9B5E0] hover:text-black hover:border-[#FCF9EC] hover:scale-105 cursor-pointer"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
        <span>Back to Orbit</span>
      </button>

      {/* Page Header */}
      <header className="relative z-10 text-center px-6 pt-24 pb-8 md:pt-32 md:pb-12">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.14em] uppercase bg-[#00105B]/85 text-[#C9B5E0] border border-[#6061B6] rounded-full">
          Beyond the Planets
        </span>
        <h1 className="text-[clamp(2rem, 5vw, 3.5rem)] font-extrabold mb-4 text-[#FCF9EC] tracking-tight">
          Interstellar & Outer Solar System Pioneers
        </h1>
        <p className="text-lg text-[#C9B5E0] max-w-2xl mx-auto">
          The machines that braved the asteroid belt, mapped the gas giants, and ultimately left our
          solar system entirely, carrying our golden greetings into the endless night.
        </p>
      </header>

      {/* Content Sections */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <Pioneer10 />
        <Pioneer11 />
        <Voyager1 />
        <Voyager2 />
      </div>
    </main>
  );
};

export default OuterSpaceExplore;