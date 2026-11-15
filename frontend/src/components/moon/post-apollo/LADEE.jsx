import React from 'react';
import { ScrollReveal } from '../../ui/ScrollReveal';

const MISSION_STATS = [
  { label: 'Launch', value: 'Sep 6, 2013' },
  { label: 'Orbit Insertion', value: 'Oct 6, 2013' },
  { label: 'Mission Duration', value: '~7 months' },
  { label: 'Payload', value: '3 instruments + laser' },
  { label: 'Final Resting Place', value: 'Far side', small: true },
];

const LEFT_BEHIND = [
  { item: 'LADEE spacecraft wreckage', status: 'Crashed on purpose' },
];

const LADEE = () => {
  return (
    <div className="mb-24">
      {/* Featured Mission Title */}
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6061B6]">
            Featured Mission · 2013–2014
          </span>
          <h3 className="text-[clamp(1.75rem, 3.5vw, 2.5rem)] font-bold text-[#FCF9EC] mt-2">
            LADEE: The Dust Hunter That Fell on the Far Side
          </h3>
        </div>
      </ScrollReveal>

      {/* Hero Interactive Globe + Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        <ScrollReveal delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black w-full h-80 md:h-[400px]">
            <iframe
              src="https://eyes.nasa.gov/apps/solar-system/#/sc_ladee"
              allowFullScreen
              className="w-full h-full border-0"
              title="NASA Eyes on the Solar System - LADEE"
              loading="lazy"
            />
            
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
          <blockquote className="relative pl-8 border-l-2 border-[#6061B6] py-4">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "The Moon has an atmosphere. It's just almost nothing."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            It's so thin that scientists call it an <span className="text-[#FCF9EC] font-semibold">
            exosphere</span>, a faint haze of gas clinging to the surface. And for decades, scientists
            had been chasing another mystery: dust. Was something lifting fine grains of lunar soil
            into the sky, creating a glow above the horizon at sunrise and sunset? Nobody was sure.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            So NASA built a small, car-sized spacecraft to find out. It was called{' '}
            <span className="text-[#FCF9EC] font-semibold">LADEE</span>, short for the Lunar
            Atmosphere and Dust Environment Explorer.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On the night of <span className="text-[#FCF9EC] font-semibold">September 6, 2013</span>,
            it climbed into the sky from the coast of Virginia, a quiet Friday night launch from
            NASA's Wallops Flight Facility. It was a night of firsts: the first lunar mission
            launched from Wallops, and the first time the Minotaur V rocket had ever flown. People as
            far away as Pittsburgh and Maine could see its glow.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            A month later, on October 6, LADEE entered orbit around the Moon.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            It had three instruments, designed to taste the thin atmosphere and catch the drifting
            dust. It also carried a surprise passenger: an experimental laser communication system,
            designed to test sending data from the Moon to Earth with light instead of radio.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            By November, science operations began. For months, LADEE circled the Moon, sniffing the
            gases drifting above the ground and counting the grains of dust. It found that tiny
            meteorites, striking the surface, kick up sprays of debris. Each impact sends up a small
            cloud, together forming a thin veil of dust over the Moon.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Then, in <span className="text-[#FCF9EC] font-semibold">March 2014</span>, the main
            mission ended, and LADEE did something risky. It dropped to a much lower orbit, skimming
            just above the surface, to get an even closer look.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            It couldn't stay there. At that altitude, with the Moon's uneven gravity tugging at it,
            the spacecraft would eventually fall.{' '}
            <span className="text-[#FCF9EC] font-semibold">This was always the plan.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">April 17, 2014</span>, after about seven
            months around the Moon, LADEE was commanded to crash into the lunar surface. One source
            places the impact on the far side, out of sight of Earth.
          </p>
        </ScrollReveal>

        {/* Inventory */}
        <ScrollReveal delay={0.2}>
          <div className="p-6 md:p-8 rounded-2xl bg-black/40 border border-[#6061B6]/30 backdrop-blur-sm">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9B5E0] mb-5">
              Still on the Far Side Today
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
              "The mission was over. But the questions it answered, and the dust it counted, helped
              future missions know what to expect at the Moon's surface. The small hunter of dust
              became part of it."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default LADEE;