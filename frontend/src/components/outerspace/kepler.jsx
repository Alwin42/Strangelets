import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Resize } from '@react-three/drei';
import { ScrollReveal } from '../ui/ScrollReveal';

const MODEL_PATH = '/models/Kepler(A).glb';

// --- Rotating 3D Kepler Model ---
function KeplerModel({ autoRotate = true }) {
  const ref = useRef();
  const { scene } = useGLTF(MODEL_PATH);

  useFrame((_, delta) => {
    if (ref.current && autoRotate) {
      ref.current.rotation.y += delta * 0.2; // Slow, steady stare
    }
  });

  return (
    <group ref={ref}>
      <Resize scale={2.5}>
        <Center>
          <primitive object={scene} />
        </Center>
      </Resize>
    </group>
  );
}

const MISSION_STATS = [
  { label: 'Launch Date', value: 'March 6, 2009' },
  { label: 'Total Planets Discovered', value: '2,662 confirmed exoplanets' },
  { label: 'Orbit', value: 'Earth-trailing heliocentric (~94 million miles)' },
  {
    label: 'Key Discovery',
    value: 'Proved there are more planets than stars in the Milky Way',
  },
  { label: 'Current Status', value: 'Retired and silent', small: true },
];

const LEFT_BEHIND = [
  { item: 'Kepler Space Telescope', status: 'Silent' },
];

const Kepler = ({
  imagePath = '/Outerspace-spacecrafts/kepler.jpg',
  spaceViewPath = '/Outerspace-spacecrafts/kepler-space-view.jpg',
}) => {
  const sectionRef = useRef(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  // Watches the Kepler section — true while on screen, false once the next section arrives
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
            Kepler Space Telescope
          </h3>
          <p className="text-sm text-[#C9B5E0] mt-2">The machine that measured shadows</p>
        </div>
      </ScrollReveal>

      {/* Hero Image + Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        <ScrollReveal delay={0.2}>
          <div className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-80 md:h-[400px]">
            <img
              src={imagePath}
              alt="Kepler Space Telescope"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold text-[#C9B5E0] tracking-wider uppercase">March 6, 2009</p>
              <p className="text-2xl font-extrabold text-[#FCF9EC] mt-1">Kepler</p>
              <p className="text-sm text-[#C9B5E0]/90 mt-1">A silent, glass-eyed sentry drifting behind Earth</p>
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

      {/* Space View Image */}
      <ScrollReveal delay={0.2}>
        <div className="relative overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-80 md:h-[420px] mb-12">
          <img
            src={spaceViewPath}
            alt="Kepler's view of deep space"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs font-bold text-[#C9B5E0] tracking-wider uppercase">Earth-trailing heliocentric orbit</p>
            <p className="text-lg font-bold text-[#FCF9EC] mt-1">Staring unblinking at a single patch of dark</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Narrative */}
      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollReveal>
          <p className="text-xl text-[#FCF9EC] font-semibold leading-[1.8]">
            Most telescopes are built to look at everything. Kepler was built to stare unblinking at a
            single patch of dark.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            For thousands of years, humans looked up at the night sky and wondered a single, terrifying
            question: Are we alone? By the early 2000s, astronomers had found a few massive, boiling gas
            giants orbiting other stars, but we still didn't know if worlds like ours—small, rocky, and
            resting in a temperate zone where water could pool—were a cosmic fluke or a universal
            standard. We needed a machine that could measure shadows.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Built by Ball Aerospace and NASA, Kepler wasn't a sleek, fast-moving voyager; it was
            essentially a massive, 2,320-pound flying camera. Its heart was a specialized Schmidt
            photometer equipped with a staggering 95-megapixel digital sensor array. It was designed to
            do one thing with terrifying precision: measure the infinitesimal dip in a star's brightness
            when a planet crossed in front of it. It was a change as subtle as a flea crawling across a
            car headlight from miles away.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">March 6, 2009</span>, Kepler roared into
            the night aboard a Delta II rocket from Cape Canaveral. Instead of circling the Earth, it was
            placed in an Earth-trailing orbit around the Sun, a vantage point that ensured our own planet
            would never block its view or reflect stray light into its ultra-sensitive lens. For four
            years, it locked its gaze onto a single crowded neighborhood of the Milky Way near the
            constellation Cygnus, watching 150,000 stars simultaneously.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Then, in 2013, disaster struck. Two of the four gyroscope-like reaction wheels that kept the
            telescope perfectly steady broke down. The spacecraft began to wobble, its primary mission
            seemingly over. But engineers pulled off a brilliant mechanical resurrection, using the
            microscopic pressure of sunlight itself to stabilize the telescope, giving birth to a
            legendary extended mission called K2.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#6061B6] py-4">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "It didn't just find new worlds; it proved that the night sky is crowded with planets just
              waiting in the dark."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Kepler fundamentally changed how humanity views the universe. By the time its mission ended,
            it had discovered over 2,600 confirmed exoplanets, ranging from scorching lava worlds to
            ocean-covered super-Earths. Because of this single, stubborn telescope, astronomers now know
            a staggering truth: there are more planets than stars in our galaxy, and billions of them are
            rocky worlds orbiting at just the right distance for life to potentially take hold.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            But staring into the deep requires a steady hand, and holding that precise position required
            small hydrazine thrusters. By the fall of 2018, the fuel tank was finally dry. On October 30,
            2018, NASA sent the final command to turn off its transmitter, permanently severing the
            connection.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Today, Kepler is a silent, glass-eyed sentry drifting in the dark millions of miles behind
            Earth, having given us a universe teeming with home.
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
              "Today, Kepler is a silent, glass-eyed sentry drifting in the dark millions of miles behind
              Earth, having given us a universe teeming with home."
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* =====================================================
          FLOATING 3D KEPLER MODEL
          Visible only while the Kepler section is on screen.
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
            <KeplerModel />
          </Suspense>
          <OrbitControls enableZoom={true} enablePan={false} rotateSpeed={0.6} />
        </Canvas>
        <span className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-bold uppercase tracking-widest text-[#C9B5E0] pointer-events-none">
          Kepler
        </span>
      </div>
    </div>
  );
};

useGLTF.preload(MODEL_PATH);
export default Kepler;
