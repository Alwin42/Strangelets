'use client';
import React, { useRef, useState, useEffect } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import GradientText from '../GradientText';
import ScrollFloat from '../ScrollFloat';
import SplitText from '../SplitText';

const MISSION_STATS = [
  { label: 'Launch Date', value: 'May 14, 1973' },
  { label: 'Total Crew Time', value: '171 days (three crews)' },
  { label: 'Orbital Altitude', value: '270 miles (initial)' },
  { label: 'Key Discovery', value: 'Solar coronal holes; long-duration spaceflight' },
  { label: 'Current Status', value: 'Destroyed upon reentry in 1979', small: true },
];

const LEFT_BEHIND = [
  { item: 'Skylab Space Station', status: 'Lost' },
  { item: 'Recovered Debris', status: 'Returned to Earth' },
];

const Skylab = ({ heroImagePath = '/Outerspace-spacecrafts/skylab.webp' }) => {
  const sectionRef = useRef(null);
  const [sectionVisible, setSectionVisible] = useState(false);

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
      {/* Section header */}
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6061B6]">
           A Laboratory Where Humanity Learned to Live in the Void
          </span>
          <GradientText
            colors={['#FCF9EC', '#C9B5E0', '#6061B6']}
            variant="flow"
            angle={90}
            animationSpeed={5}
            scale={2}
            className="block text-[clamp(2rem,5vw,3.25rem)] font-extrabold tracking-tight leading-tight"
          >
             America's First Orbital Outpost - Skylab
          </GradientText>
          <p className="mt-4 text-lg text-[#C9B5E0] max-w-2xl mx-auto leading-relaxed">
            A hollowed-out rocket tank turned into a mansion in the stars.
          </p>
        </div>
      </ScrollReveal>

      

      {/* Hero Image + Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        <ScrollReveal delay={0.2}>
          <div className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-80 md:h-[440px]">
            <img
              src={heroImagePath}
              alt="Skylab space station in orbit"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold text-[#C9B5E0] tracking-wider uppercase">May 14, 1973</p>
              <p className="text-2xl font-extrabold text-[#FCF9EC] mt-1">Skylab</p>
              <p className="text-sm text-[#C9B5E0]/90 mt-1">The station built not to visit, but to stay</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="h-full min-h-80 md:min-h-[440px] p-6 rounded-2xl bg-gradient-to-br from-[#00105B]/60 to-[#6061B6]/20 border border-[#6061B6]/40 backdrop-blur-sm flex flex-col justify-center">
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
        {/* Opening hook with split-text reveal */}
        <ScrollReveal>
          <SplitText
            text="Most space stations are meticulously built in orbit piece by piece. Skylab was a hollowed-out rocket tank turned into a mansion in the stars."
            effect="pop"
            splitType="chars"
            color="#FCF9EC"
            className="text-lg font-semibold leading-[1.8] text-center"
          />
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            By the early 1970s, the Apollo moon landings had proved that humanity could visit the deep
            dark, but we still didn't know if we could actually live there. No one knew what weeks of
            weightlessness would do to the human heart, bones, or mind. To survive a future journey to
            Mars, we needed a laboratory where astronauts could stay for months, not just days,
            learning how to exist in the unforgiving void.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Built primarily by <span className="text-[#FCF9EC] font-semibold">McDonnell Douglas</span>
            from the empty third stage of a Saturn V rocket, Skylab was an absolute behemoth. Weighing
            nearly 170,000 pounds, it offered a staggering 10,000 cubic feet of living space—roughly
            the volume of a three-bedroom house. It was equipped with the Apollo Telescope Mount to
            stare at the Sun, a zero-gravity shower, a treadmill, and hundreds of medical and
            Earth-observation instruments. It wasn't just a ship; it was America's first true orbital
            outpost.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">May 14, 1973</span>, Skylab launched
            from the Florida coast atop the final flight of the mighty Saturn V rocket. But within
            seconds, disaster struck. The violent aerodynamic forces of liftoff tore away the
            station's protective micrometeoroid shield, taking one massive solar panel with it and
            pinning the other tightly to the hull. Arriving in orbit naked and starved of power, the
            station's internal temperature spiked past 120 degrees Fahrenheit. It was baking alive
            before the first crew even arrived.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Days later, three astronauts flew up in an Apollo command module and pulled off a
            miraculous orbital rescue. Hanging outside the roasting station, they cut the jammed solar
            panel free and deployed a makeshift, gold-colored sunshade, saving the billion-dollar
            mission from the brink of total failure.
          </p>
        </ScrollReveal>

        {/* Salvage quote */}
        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#6061B6] py-4 my-2">
            <GradientText
              colors={['#FCF9EC', '#C9B5E0']}
              variant="linear"
              angle={90}
              animationSpeed={6}
              className="text-2xl md:text-3xl font-bold italic leading-snug block"
            >
              "It was the ultimate salvage operation in the void, proving that human hands could fix
              the unfixable in the vacuum of space."
            </GradientText>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Over the next nine months, three separate crews called Skylab home, staying up to 84 days
            at a time. The science they conducted fundamentally changed spaceflight. They proved that
            with rigorous exercise, the human body could endure months of zero gravity, laying the
            physiological groundwork for the International Space Station.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Above them, the massive Apollo Telescope Mount captured over 150,000 images of the Sun,
            discovering massive coronal holes and giving astronomers their first continuous,
            unobstructed view of solar flares violently erupting into the solar system.
          </p>
        </ScrollReveal>

        {/* Image gallery */}
        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-3 gap-4">
            <figure className="relative group overflow-hidden rounded-xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm aspect-video">
              <img
                src="/Outerspace-spacecrafts/skylab-img-spaceview.jpg"
                alt="Skylab viewed from space"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-sm font-semibold text-[#FCF9EC]">The outpost in orbit</p>
                <span className="text-xs text-[#C9B5E0]/80 uppercase tracking-wider">Space View</span>
              </figcaption>
            </figure>

            <figure className="relative group overflow-hidden rounded-xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm aspect-video">
              <img
                src="/Outerspace-spacecrafts/skylab-crew.jpg"
                alt="Skylab crew"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-sm font-semibold text-[#FCF9EC]">Home for three crews</p>
                <span className="text-xs text-[#C9B5E0]/80 uppercase tracking-wider">Crew Photo</span>
              </figcaption>
            </figure>

            <figure className="relative group overflow-hidden rounded-xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm aspect-video">
              <img
                src="/Outerspace-spacecrafts/skylab.webp"
                alt="Skylab space station"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-sm font-semibold text-[#FCF9EC]">America's first orbital home</p>
                <span className="text-xs text-[#C9B5E0]/80 uppercase tracking-wider">Archive Image</span>
              </figcaption>
            </figure>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            But Skylab was never meant to stay up forever. By the late 1970s, intense solar storms
            expanded the Earth's upper atmosphere, increasing the drag on the massive station. NASA
            had hoped the new Space Shuttle could fly up and boost Skylab to a higher orbit, but the
            shuttle wasn't ready in time. The station's orbit decayed, pulling it relentlessly down
            toward the atmosphere. On <span className="text-[#FCF9EC] font-semibold">July 11, 1979</span>,
            the empty, silent outpost plunged back to Earth. It broke apart in a blaze of fire,
            raining twisted metal across the Indian Ocean and the remote deserts of Western Australia.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Today, its scorched fragments rest in museums and the red outback dirt, the scattered
            bones of our first real home in the dark.
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
              "Today, its scorched fragments rest in museums and the red outback dirt, the scattered
              bones of our first real home in the dark."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Skylab;
