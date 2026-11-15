import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const MISSION_STATS = [
  { label: 'Launch Date', value: 'Apr 5, 1973' },
  { label: 'Top Speed', value: '71,000 mph' },
  { label: 'Distance', value: '>10.3 billion mi' },
  { label: 'Key Discovery', value: 'Saturn F-ring & safe path' },
  { label: 'Current Status', value: 'Silent, drifting to Scutum', small: true },
];

const LEFT_BEHIND = [
  { item: 'Pioneer 11 Spacecraft', status: 'Silent' },
  { item: 'The Pioneer Plaque', status: 'Drifting' },
];

const Pioneer11 = ({
  heroImagePath = '/Outerspace-spacecrafts/Pioneer11.jpg',
  jupiterImagePath = '/Outerspace-spacecrafts/pioneer-11-image_of_Jupiter.jpeg',
  saturnImagePath = '/Outerspace-spacecrafts/Pioneer11-Saturn_and_its_rings.jpeg',
}) => {
  return (
    <div className="mb-24">
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6061B6]">
            Featured Pioneer
          </span>
          <h3 className="text-[clamp(1.75rem, 3.5vw, 2.5rem)] font-bold text-[#FCF9EC] mt-2">
            Pioneer 11: The Sacrificial Scout
          </h3>
        </div>
      </ScrollReveal>

      {/* Hero Image + Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        <ScrollReveal delay={0.2}>
          <div className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-80 md:h-[400px]">
            <img
              src={heroImagePath}
              alt="Pioneer 11 spacecraft"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold text-[#C9B5E0] tracking-wider uppercase">April 5, 1973</p>
              <p className="text-2xl font-extrabold text-[#FCF9EC] mt-1">Pioneer 11</p>
              <p className="text-sm text-[#C9B5E0]/90 mt-1">The trailblazer that risked everything for the Voyagers</p>
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
            Most spacecraft are launched with a single, clear destination. Pioneer 11 was launched to
            be a sacrificial scout, aimed directly at the unknown to see if it would survive.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            By the early 1970s, humanity knew we could reach Jupiter, but Saturn remained a
            terrifying mystery guarded by a razor-sharp halo of ice and rock. Astronomers wanted to
            send the billion-dollar Voyager probes to the ringed planet, but they didn't know if a
            spacecraft could fly through Saturn's outer ring plane without being shredded by
            microscopic shrapnel. They needed a trailblazer to test the deadly waters first—a machine
            tough enough to take the hit if the calculations were wrong.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Built by TRW as a near-identical twin to Pioneer 10, the Pioneer 11 spacecraft was a
            571-pound armored survivor. It featured the same iconic, nine-foot-wide parabolic dish
            antenna designed to hurl radio signals across vast cosmic distances. Powered by nuclear
            generators perched on the ends of long mechanical booms to protect its core from
            radiation, it hummed with twelve scientific instruments built to measure magnetic fields,
            solar wind, and cosmic dust. And, just like its older sibling, it carried a golden
            aluminum plaque etched with humanity’s cosmic return address, bolted safely to its antenna
            struts.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">April 5, 1973</span>, Pioneer 11 roared
            off a launch pad in Florida atop an Atlas-Centaur rocket. Its journey was vastly more
            dangerous than its predecessor's. To reach Saturn, it first had to use Jupiter as a
            gravitational slingshot. In December 1974, it dove recklessly close to the gas giant,
            passing just 26,600 miles above Jupiter's turbulent clouds—three times closer than Pioneer
            10. The immense radiation nearly killed its electronics, but the probe survived, using
            Jupiter's colossal gravity to execute a massive cosmic U-turn that flung it across the
            solar system.
          </p>
        </ScrollReveal>

        {/* Jupiter Image */}
        <ScrollReveal delay={0.2}>
          <figure className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm">
            <img
              src={jupiterImagePath}
              alt="Pioneer 11 Jupiter flyby"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <figcaption className="absolute bottom-4 left-6 right-6 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#FCF9EC]">
                The reckless Jupiter flyby — three times closer than Pioneer 10
              </span>
              <span className="text-xs text-[#C9B5E0]/80 uppercase tracking-wider whitespace-nowrap">
                Archive Photo
              </span>
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Five years later, in <span className="text-[#FCF9EC] font-semibold">September 1979</span>,
            the moment of truth arrived. Traveling at nearly 71,000 miles per hour, Pioneer 11 was
            ordered to plunge straight through the uncharted space just outside Saturn's visible rings.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#6061B6] py-4">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "It was the ultimate cosmic scout, risking its own survival in the dark to sweep the
              path for the grand voyagers that followed."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            The gamble paid off brilliantly. The spacecraft slipped through the ring plane without a
            scratch, proving the route was safe for the Voyagers to follow. But it wasn't just a crash
            test dummy; Pioneer 11 fundamentally changed our understanding of Saturn. It discovered
            the planet's narrow, braided F-ring, identified two previously unknown moons, and revealed
            that the gas giant's magnetic field was surprisingly aligned with its axis of rotation. It
            captured grainy, breathtaking up-close images of the golden planet and its rings,
            permanently shifting our view of the solar system's crown jewel before heading out toward
            interstellar space.
          </p>
        </ScrollReveal>

        {/* Saturn Image */}
        <ScrollReveal delay={0.2}>
          <figure className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm">
            <img
              src={saturnImagePath}
              alt="Pioneer 11 Saturn encounter"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <figcaption className="absolute bottom-4 left-6 right-6 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#FCF9EC]">
                The first up-close images of Saturn's rings
              </span>
              <span className="text-xs text-[#C9B5E0]/80 uppercase tracking-wider whitespace-nowrap">
                Archive Photo
              </span>
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Having done everything asked of it and more, Pioneer 11 continued its solitary flight
            outward. For over two decades, it dutifully radioed back data on the solar wind and cosmic
            rays, until its nuclear heart finally ran out of power, its instruments shutting down one
            by one in the cold. NASA heard its final, incredibly faint whisper on{' '}
            <span className="text-[#FCF9EC] font-semibold">September 30, 1995</span>.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Today, Pioneer 11 is completely blind and frozen, a silent ghost coasting through the
            interstellar medium at roughly 25,000 miles per hour. It is drifting out toward the
            constellation Scutum, over ten billion miles away from the sun that made it, carrying our
            golden greeting into the endless dark.
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
              "It is drifting out toward the constellation Scutum, over ten billion miles away from
              the sun that made it, carrying our golden greeting into the endless dark."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Pioneer11;