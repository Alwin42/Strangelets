import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const MISSION_STATS = [
  { label: 'Launch Date', value: 'Aug 20, 1977' },
  { label: 'Distance', value: '>13.5 billion mi' },
  { label: 'Top Speed', value: '34,390 mph' },
  { label: 'Key Discovery', value: 'Visited Uranus & Neptune' },
  { label: 'Current Status', value: 'Drifting in interstellar space', small: true },
];

const LEFT_BEHIND = [
  { item: 'Voyager 2 Spacecraft', status: 'Drifting' },
  { item: 'The Golden Record', status: 'Drifting' },
];

const Voyager2 = () => {
  return (
    <div className="mb-24">
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6061B6]">
            Featured Pioneer
          </span>
          <h3 className="text-[clamp(1.75rem, 3.5vw, 2.5rem)] font-bold text-[#FCF9EC] mt-2">
            Voyager 2: The Grand Tour Marathoner
          </h3>
        </div>
      </ScrollReveal>

      {/* Hero Interactive Globe + Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        <ScrollReveal delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black w-full h-80 md:h-[400px]">
            <iframe
              src="https://eyes.nasa.gov/apps/solar-system/#/sc_voyager_2"
              allowFullScreen
              className="w-full h-full border-0"
              title="NASA Eyes on the Solar System - Voyager 2"
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
          <p className="text-lg text-[#FCF9EC] font-semibold leading-[1.8]">
            Most spacecraft are built to study a single world. Voyager 2 was built to introduce us to
            half the solar system.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            In the late 1970s, the outer solar system was a void of blurry telescopic smudges.
            Scientists realized that a rare planetary alignment—an event that wouldn't happen again
            for 175 years—was about to occur. The gravity of Jupiter could fling a probe to Saturn,
            which could then fling it to Uranus, which could finally fling it to Neptune. But humanity
            didn't have a map for such a journey, and we didn't know if a machine could survive a
            twelve-year gauntlet through the freezing, radiation-soaked dark to complete this ultimate
            "Grand Tour."
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Built by the Jet Propulsion Laboratory, <span className="text-[#FCF9EC] font-semibold">
            Voyager 2</span> was a one-ton robotic marathoner. Nearly identical to its twin, Voyager
            1, it was anchored by a massive, twelve-foot-wide white radio antenna mounted on a
            ten-sided metallic chassis. It carried a suite of magnetometers, cosmic ray detectors, and
            television cameras powered by glowing nuclear generators. But its most poignant component
            was identical to its twin's: a twelve-inch, gold-plated copper phonograph record carrying
            the sounds of Earth—a greeting card bolted to the side of a machine designed to never
            return.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">August 20, 1977</span>, Voyager 2
            launched from Florida atop a Titan IIIE-Centaur rocket. Oddly, it launched sixteen days
            before Voyager 1, but was placed on a slower, sweeping trajectory that allowed it to visit
            all four gas giants. It survived the crushing radiation of Jupiter in 1979 and the icy
            debris of Saturn in 1981. But Voyager 2’s defining moments came later, in places no human
            artifact had ever been. In January 1986, it swept just 50,600 miles above Uranus, becoming
            the only spacecraft to ever visit the pale blue world. Then, in August 1989, it skimmed a
            mere 3,000 miles over the north pole of Neptune, completing the most ambitious planetary
            tour in human history.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#6061B6] py-4">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "It was the ultimate marathon runner, a single machine that pulled back the curtain on
              four entirely new worlds before sailing off the edge of our map."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            The science it beamed home rewrote our understanding of the cosmos. Voyager 2 proved that
            Uranus and Neptune were not just gas giants, but "ice giants" with bizarre, off-center
            magnetic fields. It captured the first-ever images of Uranus's dark, delicate rings and
            Neptune's howling, supersonic winds. And as it departed the Neptune system, it looked back
            at the frigid moon Triton and discovered geysers of frozen nitrogen erupting into space,
            proving that even the coldest edges of our solar system were alive with geological
            activity.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Having completed its grand tour, Voyager 2 just kept flying. In{' '}
            <span className="text-[#FCF9EC] font-semibold">2018</span>, it finally crossed the
            heliopause—the boundary where the Sun's magnetic bubble gives way to the interstellar
            wind. Today, it is over 13 billion miles from Earth, plunging deeper into the space
            between the stars. Its nuclear power source is dying. To keep its transmission alive,
            engineers on Earth are carefully rationing its remaining wattage, shutting down heaters
            and non-essential systems, letting the spacecraft freeze in the absolute cold to buy a few
            more years of data.
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
              "Soon, the last sensor will power down, leaving a blind and silent traveler to carry our
              golden voice into the eternal night."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Voyager2;