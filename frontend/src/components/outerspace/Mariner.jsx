import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const MISSION_STATS = [
  { label: 'Launch Date', value: 'Nov 3, 1973' },
  { label: 'Closest Approach', value: '203 miles' },
  { label: 'Key Discovery', value: "Mercury's magnetic field" },
  { label: 'Milestone', value: 'First gravity assist' },
  { label: 'Current Status', value: 'Silent, orbiting the Sun', small: true },
];

const LEFT_BEHIND = [
  { item: 'Mariner 10 Spacecraft', status: 'Silent' },
];

const Mariner = ({
  heroImagePath = '/Outerspace-spacecrafts/Mariner_10.jpeg',
  captureImagePath = '/Outerspace-spacecrafts/mariner-capture-imgs.jpeg',
}) => {
  return (
    <div className="mb-24">
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6061B6]">
            Featured Pioneer
          </span>
          <h3 className="text-[clamp(1.75rem, 3.5vw, 2.5rem)] font-bold text-[#FCF9EC] mt-2">
            Mariner 10: The Furnace Survivor
          </h3>
        </div>
      </ScrollReveal>

      {/* Hero Image + Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        <ScrollReveal delay={0.2}>
          <div className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-80 md:h-[400px]">
            <img
              src={heroImagePath}
              alt="Mariner 10 spacecraft with thermal sunshade"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold text-[#C9B5E0] tracking-wider uppercase">November 3, 1973</p>
              <p className="text-2xl font-extrabold text-[#FCF9EC] mt-1">Mariner 10</p>
              <p className="text-sm text-[#C9B5E0]/90 mt-1">
                The machine built to fly straight into the furnace
              </p>
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
            Most spacecraft are built to survive the freezing dark. Mariner 10 was built to fly
            straight into the furnace.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            In the early 1970s, the innermost planet of our solar system was practically a ghost.
            Hidden in the blinding glare of the Sun, Mercury was impossible to see clearly from Earth.
            Scientists didn't know if it had an atmosphere, a magnetic field, or what its surface even
            looked like. Furthermore, getting there required more rocket fuel than any launch vehicle
            could carry. They needed a brilliant trick of orbital mechanics, and a machine capable of
            surviving heat so intense it could melt lead.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Built by Boeing for the Jet Propulsion Laboratory,{' '}
            <span className="text-[#FCF9EC] font-semibold">Mariner 10</span> was a 1,108-pound
            mechanical pioneer shaped like an octagonal drum. It carried twin television cameras,
            ultraviolet spectrometers, and magnetometers to study both Venus and Mercury. Because it
            was flying closer to the Sun than any spacecraft before it, it featured a massive,
            deployable sunshade—a protective thermal umbrella woven from heat-resistant fabric—to keep
            its sensitive electronics from boiling alive in the blistering, 800-degree sunlight.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">November 3, 1973</span>, Mariner 10
            launched from Florida atop an Atlas-Centaur rocket. Its journey was a masterclass in
            cosmic billiards. In February 1974, it swept past Venus, taking the first close-up
            ultraviolet images of the planet's swirling cloud cover. More importantly, it stole a tiny
            bit of Venus's orbital momentum to bend its own path toward Mercury, becoming the very
            first spacecraft to execute a planetary gravity assist. On March 29, 1974, it swooped
            within 438 miles of Mercury’s scorched surface. The heat was brutal, the solar radiation
            intense, and its attitude control system constantly battled glitches, but the hardy probe
            survived to make three total flybys over the following year.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#6061B6] py-4">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "It fell toward the Sun on a daring gravitational tightrope, risking incineration to
              photograph a world we had never truly seen."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            The data Mariner 10 beamed back lifted the veil on the solar system’s smallest planet. It
            mapped nearly half of Mercury’s heavily cratered, moon-like surface, revealing towering
            cliffs and massive impact basins. It shocked planetary geologists by discovering that
            Mercury possessed a global magnetic field, suggesting that its massive iron core was still
            partially molten. By proving that the gravity slingshot maneuver actually worked, Mariner
            10 wrote the navigational playbook that would later send the Voyagers across the outer
            solar system.
          </p>
        </ScrollReveal>

        {/* Archive Image: Captured imagery */}
        <ScrollReveal delay={0.2}>
          <figure className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm">
            <img
              src={captureImagePath}
              alt="Mariner 10 captured images of Mercury"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <figcaption className="absolute bottom-4 left-6 right-6 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#FCF9EC]">
                The first close-up views of Earth and Moon
              </span>
              <span className="text-xs text-[#C9B5E0]/80 uppercase tracking-wider whitespace-nowrap">
                Archive Photo
              </span>
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            But surviving the Sun's wrath required a constant, delicate balancing act. Mariner 10
            relied on tiny thrusters firing bursts of nitrogen gas to keep its heat shield pointed
            squarely at the Sun. On <span className="text-[#FCF9EC] font-semibold">March 24, 1975</span>,
            during its final approach, that gas finally ran out. Unable to hold its protective
            posture, its electronics began to bake. NASA commanded the transmitter to shut down,
            silencing the probe forever.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Today, the scorched and battered remains of Mariner 10 orbit the Sun in absolute silence,
            a forgotten cinder forever chasing the ghost of Mercury.
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
              "Today, the scorched and battered remains of Mariner 10 orbit the Sun in absolute
              silence, a forgotten cinder forever chasing the ghost of Mercury."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Mariner;