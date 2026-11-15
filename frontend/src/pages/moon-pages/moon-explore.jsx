import MoonHero from '../../components/moon/MoonHero';
import { useNavigate } from 'react-router-dom';
import MoonTimeline from '../../components/moon/MoonTimeline';
import Pioneer4Feature from '../../components/moon/early-programs/Pioneer4Feature';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import RangerProgram from '../../components/moon/early-programs/ranger-program';
import Surveyor from '../../components/moon/early-programs/Surveyor';
import Apollo11 from '../../components/moon/apollo-program/apollo11';
import Apollo12 from '../../components/moon/apollo-program/apollo12';
import Apollo14 from '../../components/moon/apollo-program/apollo14';
import Apollo15 from '../../components/moon/apollo-program/apollo15';
import LunarProspector from '../../components/moon/post-apollo/lunar-prospector';
import LRO from '../../components/moon/post-apollo/LRO';
import LCROSS from '../../components/moon/post-apollo/LCROSS';
import LADEE from '../../components/moon/post-apollo/LADEE';

const MoonExplore = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen bg-black text-[#FCF9EC] flex flex-col overflow-x-hidden">
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/explore')}
        className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-5 py-2.5 bg-[#00105B]/90 text-[#FCF9EC] border border-[#6061B6] rounded-full font-bold text-sm uppercase tracking-wider backdrop-blur-sm transition-all duration-300 hover:bg-[#C9B5E0] hover:text-black hover:border-[#FCF9EC] hover:scale-105 cursor-pointer"
      >
        <span>←</span>
        <span>Back to Orbit</span>
      </button>

      {/* Page Header */}
      <header className="relative z-10 text-center px-6 pt-24 pb-8 md:pt-32 md:pb-12">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.14em] uppercase bg-[#00105B]/85 text-[#C9B5E0] border border-[#6061B6] rounded-full">
          Lunar History
        </span>
        <h1 className="text-[clamp(2rem, 5vw, 3.5rem)] font-extrabold mb-4 text-[#FCF9EC] tracking-tight">
          Timeline of Lunar Exploration
        </h1>
        <p className="text-lg text-[#C9B5E0] max-w-2xl mx-auto">
          From early robotic crash-landers to the upcoming Artemis missions, 
          trace the history of humanity's journey to the Moon.
        </p>
      </header>

      {/* 3D Moon Stage (extracted) */}
      <MoonHero />

      {/* Horizontal Timeline (extracted) */}
      <MoonTimeline />

      {/* Early Robotic Programs Era Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        {/* Era Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.14em] uppercase bg-[#00105B]/85 text-[#C9B5E0] border border-[#6061B6] rounded-full">
              Era Spotlight · 1950s–1970s
            </span>
            <h2 className="text-[clamp(2rem, 4.5vw, 3rem)] font-extrabold mb-4 text-[#FCF9EC] tracking-tight">
              Early Robotic Programs
            </h2>
            <p className="text-lg text-[#C9B5E0] max-w-3xl mx-auto leading-relaxed">
              Before humans set foot on the Moon, robotic pioneers paved the way. These early missions 
              answered critical questions about the lunar surface and proved that landing was possible.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Pioneer 4 Story (extracted) */}
        <Pioneer4Feature />
        <RangerProgram />
        <Surveyor /> 
        <Apollo11 />
        <Apollo12 />
        <Apollo14 />
        <Apollo15 />
        <LunarProspector />
        <LRO />
        <LCROSS />
        <LADEE />
      </section>
    </main>
  );
};

export default MoonExplore;