import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const MISSION_STATS = [
  { label: 'Launch Date', value: 'Mar 2, 1972' },
  { label: 'Top Speed', value: '82,000 mph' },
  { label: 'Final Signal Distance', value: '7.6 billion mi' },
  { label: 'Key Discovery', value: 'Asteroid belt navigable' },
  { label: 'Current Status', value: 'Silent, heading to Aldebaran', small: true },
];

const LEFT_BEHIND = [
  { item: 'Pioneer 10 Spacecraft', status: 'Silent' },
  { item: 'The Pioneer Plaque', status: 'Drifting' },
];

const Pioneer10 = ({ imagePath = '/Outerspace-spacecrafts/pioneer_10.webp' }) => {
  return (
    <div className="mb-24">
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6061B6]">
            Featured Pioneer
          </span>
          <h3 className="text-[clamp(1.75rem, 3.5vw, 2.5rem)] font-bold text-[#FCF9EC] mt-2">
            Pioneer 10: The First to Leave
          </h3>
        </div>
      </ScrollReveal>

      {/* Hero Image + Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        <ScrollReveal delay={0.2}>
          <div className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-80 md:h-[400px]">
            <img
              src={imagePath}
              alt="Pioneer 10 spacecraft"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold text-[#C9B5E0] tracking-wider uppercase">March 2, 1972</p>
              <p className="text-2xl font-extrabold text-[#FCF9EC] mt-1">Pioneer 10</p>
              <p className="text-sm text-[#C9B5E0]/90 mt-1">The machine built not to explore, but to leave</p>
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
            Most spacecraft are built to explore our solar system. Pioneer 10 was built to leave it.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            In the early 1970s, the outer solar system was a terrifying, uncharted frontier. No one
            knew if a spacecraft could survive a trip through the asteroid belt, a churning ring of
            primordial space rocks that many scientists feared would grind any passing machine into
            metallic dust. Beyond that obstacle course lay an even greater monster: Jupiter.
            Astronomers knew the gas giant possessed an enormous magnetic field, but they had no idea
            if the intense radiation belts surrounding it would instantly fry the electronics of an
            approaching probe. Humanity desperately needed a scout to test the waters of the deep dark
            before risking more complex, fragile machines.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Enter <span className="text-[#FCF9EC] font-semibold">Pioneer 10</span>. Built by TRW for
            NASA, it was a rugged, spin-stabilized survivor designed for endurance. It carried eleven
            scientific instruments to measure magnetic fields, cosmic rays, and the solar wind, but its
            most striking physical feature was its massive, nine-foot-wide parabolic dish antenna.
            Weighing just 569 pounds—roughly the size of a golf cart—it was powered not by the fading
            sun, but by four radioisotope thermoelectric generators mounted on long, extending booms.
            Tucked securely beneath its great golden dish, it also carried a controversial anodized
            aluminum plaque. The plaque was etched with a map of Earth and figures of a man and a
            woman, just in case someone, someday, found this machine adrift in the void.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">March 2, 1972</span>, Pioneer 10 launched
            atop an Atlas-Centaur rocket from Cape Canaveral, tearing into the sky with such ferocity
            that it became the fastest human-made object at the time. It shattered speed records,
            crossing the Moon's orbit in a mere eleven hours. By July, it became the very first
            spacecraft to plunge into the dreaded asteroid belt. Month after month, it sailed through
            the debris field, detecting far fewer microscopic impacts than anticipated, and emerged on
            the other side completely unscathed. Then, on December 3, 1973, the true test arrived.
            Pioneer 10 swept within 81,000 miles of Jupiter's swirling, turbulent cloud tops, fighting
            through a radiation environment tens of thousands of times stronger than Earth’s. Its
            systems struggled, taking false commands from the intense radiation, but the tough little
            spacecraft held together.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#6061B6] py-4">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "It was a mechanical canary in a cosmic coal mine, proving to a waiting world that the
              outer darkness was survivable."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            The science it beamed home fundamentally rewrote textbooks. Pioneer 10 proved that Jupiter
            was entirely a liquid and gas planet, captured the first spectacular up-close images of the
            Great Red Spot, and mapped a massive magnetic field far larger than anyone had theorized.
            It revealed that the solar wind pushes outward far beyond Jupiter, reshaping our
            understanding of the Sun's vast domain. It didn't just study the largest planet in our
            neighborhood; it proved that the Voyagers could safely follow in its wake.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Its primary mission was a triumphant success, but Pioneer 10 just kept flying, kept
            spinning, and kept transmitting. For three decades, it sent data back to Earth as its
            nuclear heart slowly cooled and decayed. Year by year, the signals grew weaker, requiring
            NASA's massive Deep Space Network antennas to strain just to hear its whispers against the
            cosmic static. On <span className="text-[#FCF9EC] font-semibold">January 23, 2003</span>,
            from a staggering 7.6 billion miles away, the spacecraft sent its final, impossibly faint
            signal.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Today, Pioneer 10 is dead. It is a silent, frozen monument coasting at 26,000 miles per
            hour toward the star Aldebaran, the glowing red eye in the constellation Taurus.
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
              "It will take two million years to arrive, carrying our golden hello into the endless
              night."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Pioneer10;