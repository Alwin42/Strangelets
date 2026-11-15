import React, { useState, useRef, useEffect, useMemo, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiLoader } from '../components/ui/ai-loader';
import OrbitalSystemSection from '../components/OrbitalSystemSection';
import Hyperspeed from '../components/Hyperspeed';
import anime from 'animejs/lib/anime.es.js';

/* =========================================================
   FLOATING PARTICLE FIELD (anime.js)
   - Pure white dots drifting slowly behind the 3D scene
   - pointer-events-none so they never block planet clicks
   ========================================================= */
const PARTICLE_COUNT = 55;

const FloatingParticles = () => {
  const containerRef = useRef(null);

  // Generate stable random positions once per mount
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        top: Math.random() * 100,        // % of viewport height
        left: Math.random() * 100,       // % of viewport width
        size: 1 + Math.random() * 2.5,   // 1px - 3.5px
        baseOpacity: 0.25 + Math.random() * 0.55,
        driftX: (Math.random() - 0.5) * 80,  // -40px to +40px
        driftY: (Math.random() - 0.5) * 120, // -60px to +60px
        duration: 6000 + Math.random() * 8000, // 6s - 14s
        delay: Math.random() * 3000,
      })),
    []
  );

  useEffect(() => {
    if (!containerRef.current) return;
    const dots = containerRef.current.querySelectorAll('.space-dot');

    // Animate each dot with its own random drift + opacity pulse
    dots.forEach((dot, i) => {
      const p = particles[i];
      anime({
        targets: dot,
        translateX: [0, p.driftX],
        translateY: [0, p.driftY],
        opacity: [p.baseOpacity, p.baseOpacity * 0.25],
        scale: [1, 1.4],
        duration: p.duration,
        delay: p.delay,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
      });
    });

    // Cleanup: kill all animations on this component's nodes when unmounting
    return () => {
      anime.remove(dots);
    };
  }, [particles]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="space-dot absolute rounded-full bg-white"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.baseOpacity,
            boxShadow: `0 0 ${p.size * 2}px rgba(255,255,255,0.6)`,
          }}
        />
      ))}
    </div>
  );
};

/* =========================================================
   EXPLORE PAGE
   ========================================================= */
const ExplorePage = () => {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [warpTarget, setWarpTarget] = useState(null);

  const handleSelectDestination = (path, label) => {
    setSelectedDestination(label);
    setWarpTarget({ path, label });
    // Match landing-page warp duration: hyperspeed plays, then navigate.
    setTimeout(() => {
      navigate(path);
    }, 2400);
  };

  const handleOuterSpaceClick = () => {
    setWarpTarget({ path: '/outerspace', label: 'Outer Space' });
    setTimeout(() => {
      navigate('/outerspace');
    }, 2400);
  };

  return (
    
    <main className="relative w-full h-screen bg-black text-[#FCF9EC] flex flex-col items-center overflow-hidden">

      {/* Top-left back-to-home button (no background or border) */}
      <a
        href="/"
        className="absolute top-6 left-6 z-30 inline-flex items-center gap-2 px-4 py-2 text-[#C9B5E0] text-xs font-bold uppercase tracking-widest hover:text-[#FCF9EC] transition-colors duration-200"
      >
        ← Home
      </a>

      {/* Far-point link to outer space */}
      <div
        onClick={handleOuterSpaceClick}
        className="absolute bottom-8 right-8 z-30 inline-flex items-center gap-2 px-4 py-2 text-[#C9B5E0] text-xs font-bold uppercase tracking-widest hover:text-[#FCF9EC] transition-colors duration-200 cursor-pointer"
      >
        Outer Space →
      </div>

      {/* Fullscreen Hyperspeed Transition Overlay */}
      {warpTarget && (
        <div className="hyperspeed-overlay">
          <Hyperspeed
            effectOptions={{
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 3,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              colors: {
                roadColor: 0x000000,
                islandColor: 0x00105b,
                background: 0x000000,
                shoulderLines: 0x6061b6,
                brokenLines: 0xc9b5e0,
                leftCars: [0xc9b5e0, 0x6061b6, 0xfcf9ec],
                rightCars: [0x6061b6, 0x00105b, 0xc9b5e0],
                sticks: 0xfcf9ec,
              },
            }}
          />
          <div className="warp-hud">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.14em] uppercase bg-[#00105B]/85 text-[#C9B5E0] border border-[#6061B6] rounded-full">
              Hold tightly..
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] text-[#FCF9EC] drop-shadow-[0_0_25px_rgba(96,97,182,0.9)]">
              Warping to {warpTarget.label}...
            </h2>
          </div>
        </div>
      )}

      {/* ✅ Floating white particle field sits behind the 3D canvas */}
      <FloatingParticles />

      {/* Header */}
      <header className="relative z-10 w-full max-w-[720px] text-center px-4 pt-6 pb-2 md:pt-8 md:pb-4 pointer-events-auto shrink-0">
        <span className="inline-block px-4 py-1.5 mb-3 md:mb-5 text-[10px] md:text-xs font-bold tracking-[0.14em] uppercase bg-[#00105B]/85 text-[#C9B5E0] border border-[#6061B6] rounded-full">
          Solar System Orbit
        </span>
        <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold my-2 mb-2 md:mb-4 text-[#FCF9EC] tracking-tight leading-tight">
          Journey Beyond Earth
        </h1>
        <p className="text-[0.9rem] md:text-[1.05rem] leading-[1.5] md:leading-[1.6] text-[#C9B5E0] mb-2 md:mb-6 px-2">
          Earth at the center — the Moon dancing near, Mars drifting far — set against a deep space black void.
        </p>
        <p className="text-[0.75rem] md:text-[0.85rem] text-[#C9B5E0]/70 tracking-widest uppercase mb-2 px-2">
          Tap the Moon to explore the Moon · Tap Mars to explore Mars
        </p>
      </header>

      {/* 3D Stage — sits ABOVE the particles (z-10 vs z-0) */}
      <div className="relative z-10 w-full max-w-[1200px] flex-1 min-h-0 flex justify-center items-center px-2 md:px-8 pb-4 md:pb-8">
        {/* Placeholder matches the 3D stage dimensions so the fallback → content swap causes zero layout shift. AiLoader fades in gracefully while the heavy .glb models (Earth, Moon, Mars) fetch. */}
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center w-full h-full bg-black">
              <AiLoader text="Loading 3D Environment..." size={170} />
            </div>
          }
        >
          <OrbitalSystemSection
            showOrbits={true}
            onSelectDestination={handleSelectDestination}
          />
        </Suspense>
      </div>

      {/* Feedback */}
      {selectedDestination && (
        <div className="relative z-10 shrink-0 pb-4 md:pb-6">
          <p className="text-[0.85rem] md:text-[0.95rem] text-[#C9B5E0]">
            Destination selected:{' '}
            <span className="text-[#FCF9EC] font-bold">{selectedDestination}</span>
          </p>
        </div>
      )}
    </main>
  );
};

export default ExplorePage;
