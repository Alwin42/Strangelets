import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Resize } from '@react-three/drei';
import { ScrollReveal } from '../ui/ScrollReveal';

const MODEL_PATH = '/models/Voyager.glb';

// --- Rotating 3D Voyager Model ---
function VoyagerModel({ autoRotate = true }) {
  const ref = useRef();
  const { scene } = useGLTF(MODEL_PATH);

  useFrame((_, delta) => {
    if (ref.current && autoRotate) {
      ref.current.rotation.y += delta * 0.3; // Slightly slower, majestic rotation
    }
  });

  return (
    <group ref={ref}>
      <Resize scale={3.8}>
        <Center>
          <primitive object={scene} />
        </Center>
      </Resize>
    </group>
  );
}

const MISSION_STATS = [
  { label: 'Launch Date', value: 'Sep 5, 1977' },
  { label: 'Distance', value: '>15 billion mi' },
  { label: 'Top Speed', value: '38,000 mph' },
  { label: 'Key Discovery', value: 'Active volcanoes on Io' },
  { label: 'Current Status', value: 'Drifting in interstellar space', small: true },
];

const LEFT_BEHIND = [
  { item: 'Voyager 1 Spacecraft', status: 'Drifting' },
  { item: 'The Golden Record', status: 'Drifting' },
];

const Voyager1 = ({ 
  imagePath = '/Outerspace-spacecrafts/voyager-1.jpg' // Replace with your actual Voyager 1 image path if you have one
}) => {
  const sectionRef = useRef(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  // Watches the Voyager 1 section — true while on screen, false once the next section arrives
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setSectionVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="mb-24">
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6061B6]">
            Featured Pioneer
          </span>
          <h3 className="text-[clamp(1.75rem, 3.5vw, 2.5rem)] font-bold text-[#FCF9EC] mt-2">
            Voyager 1: The Interstellar Ambassador
          </h3>
        </div>
      </ScrollReveal>

      {/* Hero Image + Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        <ScrollReveal delay={0.2}>
          <div className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-80 md:h-[400px]">
            <img
              src={imagePath}
              alt="Voyager 1 spacecraft"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold text-[#C9B5E0] tracking-wider uppercase">September 5, 1977</p>
              <p className="text-2xl font-extrabold text-[#FCF9EC] mt-1">Voyager 1</p>
              <p className="text-sm text-[#C9B5E0]/90 mt-1">The machine that belongs to the Milky Way</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="h-full min-h-80 md:min-h-[400px] p-6 rounded-2xl bg-gradient-to-br from-[#00105B]/60 to-[#6061B6]/20 border border-[#6061B6]/40 backdrop-blur-sm flex flex-col justify-center">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9B5E0] mb-5">
              Mission Profile
            </h4>
            <div className="space-y-4">
              {MISSION_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-baseline justify-between ${
                    i < MISSION_STATS.length - 1 ? 'pb-3 border-b border-[#6061B6]/20' : ''
                  }`}
                >
                  <span className="text-xs text-[#C9B5E0]/70 uppercase tracking-wider">{stat.label}</span>
                  <span className={`${stat.small ? 'text-sm text-[#C9B5E0]' : 'text-xl text-[#FCF9EC]'} font-bold`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Narrative */}
      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollReveal>
          <p className="text-lg text-[#FCF9EC] font-semibold leading-[1.8]">
            Most machines belong to the people who built them. Voyager 1 belongs to the Milky Way.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            In the mid-1970s, the outer solar system was little more than a blurry collection of
            astronomical theories. Humanity had caught fleeting glimpses of Jupiter and Saturn, but we
            had never truly mapped their chaotic weather, their strange moons, or the intricate physics
            of their rings. We needed a grand tour. A rare alignment of the outer planets—an event
            that happens only once every 175 years—offered a fleeting window to send a spacecraft
            skipping from one gas giant to the next, using the gravity of each to hurl itself onward.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Built by the Jet Propulsion Laboratory, <span className="text-[#FCF9EC] font-semibold">Voyager 1</span> was a one-ton marvel of deep-space engineering. It looked like a giant, twelve-foot white satellite dish grafted onto a ten-sided metallic box, bristling with spindly booms that held cameras, magnetometers, and cosmic ray detectors. But its most precious piece of cargo wasn't an instrument at all. Bolted to the spacecraft's frame was the <span className="text-[#FCF9EC] font-semibold">Golden Record</span>, a 12-inch gold-plated copper disk containing the sounds of surf, wind, a baby's cry, and greetings in 55 languages. It was a message in a bottle for the cosmic ocean.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">September 5, 1977</span>, Voyager 1
            launched from Cape Canaveral atop a Titan IIIE-Centaur rocket. Though its twin, Voyager 2,
            had launched two weeks earlier, Voyager 1 was placed on a faster, more aggressive
            trajectory. By March 1979, the spacecraft swooped within 173,000 miles of Jupiter's
            swirling clouds, using the planet's immense gravity to slingshot toward Saturn. It arrived
            at the ringed giant in November 1980, where mission controllers made a fateful choice.
            Instead of flying onward to Uranus and Neptune, they bent Voyager 1's path to get a close
            look at Saturn's massive moon, Titan. That single maneuver flung the spacecraft up and out
            of the solar system's orbital plane forever.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#6061B6] py-4">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "It traded the rest of the solar system for a single, breathtaking glimpse of a new
              world, and in doing so, became our first interstellar ambassador."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            The science it returned was staggering. Voyager 1 discovered active volcanoes on Jupiter's
            moon Io—the first ever seen beyond Earth. It revealed that Saturn's rings were not just
            broad, uniform bands, but thousands of delicate, icy ringlets. It found that Titan
            possessed a thick, nitrogen-rich atmosphere, hiding a surface that hinted at primordial
            chemistry. Finally, in 1990, at the request of astronomer Carl Sagan, it turned its
            cameras backward and snapped the "Pale Blue Dot," capturing Earth as a single, fragile
            pixel suspended in a sunbeam from four billion miles away.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Today, Voyager 1 is the most distant human-made object in existence. It has crossed the
            heliopause, leaving the protective magnetic bubble of our Sun, and is now sailing through
            the cold, uncharted waters of interstellar space over 15 billion miles away. Its
            radioactive power supply is steadily decaying. To keep its faint, beating heart alive,
            engineers on Earth have slowly turned off its heaters and backup systems one by one,
            shivering the spacecraft to preserve a few watts of power. It takes over 22 hours for a
            single radio command from Earth to reach it.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Soon, the last instrument will freeze, the radio will go dark, and it will drift in
            absolute silence, carrying the music of Earth into the abyss.
          </p>
        </ScrollReveal>

        {/* Inventory */}
        <ScrollReveal delay={0.2}>
          <div className="p-6 md:p-8 rounded-2xl bg-black/40 border border-[#6061B6]/30 backdrop-blur-sm">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9B5E0] mb-5">
              Left Behind in the Void
            </h4>
            <ul className="space-y-3">
              {LEFT_BEHIND.map((entry) => (
                <li
                  key={entry.item}
                  className="flex items-center justify-between gap-4 pb-3 border-b border-[#6061B6]/20 last:border-0 last:pb-0"
                >
                  <span className="text-sm md:text-base text-[#FCF9EC]">{entry.item}</span>
                  <span className="shrink-0 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border text-[#FCF9EC] bg-[#C9B5E0]/20 border-[#C9B5E0]/50">
                    {entry.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#00105B]/60 to-[#6061B6]/20 border border-[#C9B5E0]/30 backdrop-blur-sm text-center">
            <p className="text-xl md:text-2xl font-bold text-[#FCF9EC] leading-snug italic">
              "Soon, the last instrument will freeze, the radio will go dark, and it will drift in
              absolute silence, carrying the music of Earth into the abyss."
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* =====================================================
          FLOATING 3D VOYAGER 1 MODEL
          Visible only while the Voyager 1 section is on screen.
          Fades + slides away when the next section arrives.
          ===================================================== */}
      <div
        className={`fixed right-4 bottom-4 md:right-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-40 w-48 h-48 md:w-96 md:h-96 rounded-2xl overflow-hidden transition-all duration-700 ease-out ${
          sectionVisible
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 translate-x-10 pointer-events-none'
        }`}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[4, 6, 5]} intensity={2.5} color="#FCF9EC" />
          <directionalLight position={[-4, -2, -5]} intensity={1} color="#6061B6" />
          <Suspense fallback={null}>
            <VoyagerModel />
          </Suspense>
          <OrbitControls enableZoom={true} enablePan={false} rotateSpeed={0.6} />
        </Canvas>
        <span className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-bold uppercase tracking-widest text-[#C9B5E0] pointer-events-none">
          Voyager 1
        </span>
      </div>
    </div>
  );
};

useGLTF.preload(MODEL_PATH);
export default Voyager1;