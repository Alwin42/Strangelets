import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SoftAurora from '../components/SoftAurora';
import Hyperspeed from '../components/Hyperspeed';
import SpecularButton from '../components/SpecularButton';
import Particles from '../components/Particles';
import { AiLoader } from '../components/ui/ai-loader';

const LandingPage = () => {
  const navigate = useNavigate();
  const earthTriggerRef = useRef(null);
  const orbitalTriggerRef = useRef(null);

  const [isEarthVisible, setIsEarthVisible] = useState(false);
  const [isOrbitalActive, setIsOrbitalActive] = useState(false);
  const [warpTarget, setWarpTarget] = useState(null);

  // Initial app load state: the Hero stays hidden while the loader covers the screen.
  const [isLoading, setIsLoading] = useState(true);
  // Controls whether the loader overlay is mounted (kept true while fading out).
  const [showLoader, setShowLoader] = useState(true);
  // Controls the loader's opacity (fade-in / fade-out).
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderText, setLoaderText] = useState("Initializing Space Museum...");
  const initialRevealTimer = useRef(null);

  useEffect(() => {
    const earthObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsEarthVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          setIsEarthVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    const orbitalObserver = new IntersectionObserver(
      ([entry]) => {
        setIsOrbitalActive(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    if (earthTriggerRef.current) earthObserver.observe(earthTriggerRef.current);
    if (orbitalTriggerRef.current) orbitalObserver.observe(orbitalTriggerRef.current);

    return () => {
      earthObserver.disconnect();
      orbitalObserver.disconnect();
    };
  }, []);

  // Initial load: show the loader immediately on mount, then gracefully fade it
  // out and cross-fade the Hero section in once initial assets are ready.
  useEffect(() => {
    initialRevealTimer.current = setTimeout(() => {
      setIsLoading(false); // reveal Hero (cross-fades in)
      setLoaderVisible(false); // gracefully fade the loader out
    }, 1500); // simulate initial asset / SoftAurora readiness
    return () => clearTimeout(initialRevealTimer.current);
  }, []);

  const handlePlanetClick = (path, label) => {
    setWarpTarget({ path, label });
    setTimeout(() => {
      navigate(path);
    }, 2400);
  };

  const handleExploreClick = () => {
    // Abort the initial reveal so the Hero never flashes behind the warp loader.
    if (initialRevealTimer.current) clearTimeout(initialRevealTimer.current);

    // Trigger the premium loader again before navigating to /explore.
    setLoaderText("Warping to Explore...");
    setLoaderVisible(true);
    setShowLoader(true);
    setTimeout(() => {
      navigate('/explore');
    }, 1800);
  };

  const onLoaderHidden = useCallback(() => setShowLoader(false), []);

  return (
    <main className="w-full bg-black">
      {/* Premium loader overlay: initial load + page transitions.
          Stays mounted while fading out so the exit animation is never cut short. */}
      {showLoader && (
        <AiLoader
          visible={loaderVisible}
          text={loaderText}
          size={240}
          onHidden={onLoaderHidden}
        />
      )}

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
              Hold tightly
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] text-[#FCF9EC] drop-shadow-[0_0_25px_rgba(96,97,182,0.9)]">
              Warping to {warpTarget.label}...
            </h2>
          </div>
        </div>
      )}

      {/* SECTION 1: Hero + Aurora Background — PURE TAILWIND */}
      <section
        className={`relative isolate w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 py-20 border-b border-[#6061B6]/25 transition-opacity duration-700 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Aurora: absolute, fills section, sits behind content */}
        <div className="section-aurora-bg absolute inset-0 w-full h-full -z-10">
          <SoftAurora
            speed={0.6}
            scale={1.5}
            brightness={1}
            color1="#06a5d2"
            color2="#e100ff"
            bandHeight={0.5}
            bandSpread={1}
            enableMouseInteraction
            mouseInfluence={0.25}
            spectrum={1}
            colorSpeed={1}
            noiseFrequency={2.5}
            noiseAmplitude={1}
            tilt={0}
            octaveDecay={0.1}
            layerOffset={0}
            clickPulse
            intro
            lightMode={false}
          />
        </div>

        {/* Particles: subtle starfield layer behind the hero content */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Particles
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleColors={['#6061B6', '#C9B5E0', '#FCF9EC']}
            particleBaseSize={50}
            sizeRandomness={1}
            cameraDistance={30}
            glow={2.35}
            twinkle={0.4}
            drift="up"
            driftSpeed={0.4}
            opacity={0.75}
            connections
            connectionDistance={0}
            hoverEffect="parallax"
            hoverRadius={100}
            clickBurst
            intro
          />
        </div>

        {/* Hero Content: centered, padded, max-width constrained */}
        <div className="relative z-10 max-w-[880px] w-full text-center flex flex-col items-center px-4">
          
          
          {/* Title */}
          <h1 className="text-[clamp(2.5rem,5.5vw,4.2rem)] font-extrabold mb-6 text-[#FCF9EC] leading-tight">
            Abandoned, Not Forgotten
          </h1>
          
          {/* Description */}
          <p className="text-lg leading-relaxed text-[#C9B5E0] mb-10 max-w-[720px]">
            Since the 1960s, NASA has left hardware across the solar system—on the
            Moon, on Mars, and in deep space. From retired rovers to probes still
            traveling away from Earth, explore the stories of these silent
            pioneers and the groundbreaking science they made possible.
          </p>

          {/* ✅ Explore Now Button: Navigates to /explore */}
          <SpecularButton
            onClick={handleExploreClick}
            size="lg"
            tint="#00105B"
            tintOpacity={0.55}
            textColor="#FCF9EC"
            lineColor="#C9B5E0"
            baseColor="#00105B"
            intensity={1}
            idleIntensity={0.4}
            className="uppercase tracking-widest"
          >
            <span>Explore Now</span>
            <span className="ml-1">→</span>
          </SpecularButton>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
