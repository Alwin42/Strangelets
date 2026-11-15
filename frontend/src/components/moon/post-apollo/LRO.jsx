import React from 'react';
import { ScrollReveal } from '../../ui/ScrollReveal';

const MISSION_STATS = [
  { label: 'Launch', value: 'June 2009' },
  { label: 'Apollo Sites Imaged', value: 'All 6' },
  { label: 'Lowest Mapping Altitude', value: '13 mi' },
  { label: 'Years on Orbit', value: '17+' },
  { label: 'Status', value: 'Still working', small: true },
];

const SEEN_BY_LRO = [
  { item: "Apollo 11 — Eagle's descent stage, a tiny dot in the gray plain", status: 'Seen 2009' },
  { item: 'Apollo 14, 15, 16 & 17 — landers standing in the dust', status: 'Seen 2009' },
  { item: 'Apollo 12 — Intrepid parked beside Surveyor 3', status: 'Seen 2011' },
  { item: 'Apollo 14 — astronaut footprint trails winding across the ground', status: 'Seen 2011' },
  { item: 'Apollo 17 — rover tracks across the valley floor', status: 'Seen 2011' },
];

const LRO = ({
  imagePath = '/Post-apollo/LRO.jpeg',
}) => {
  return (
    <div className="mb-24">
      {/* Featured Mission Title */}
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6061B6]">
            Featured Mission · 2009–Present
          </span>
          <h3 className="text-[clamp(1.75rem, 3.5vw, 2.5rem)] font-bold text-[#FCF9EC] mt-2">
            Lunar Reconnaissance Orbiter: The Watcher Over the Moon
          </h3>
        </div>
      </ScrollReveal>

      {/* Hero Image + Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        <ScrollReveal delay={0.2}>
          <div className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-80 md:h-[400px]">
            <img
              src={imagePath}
              alt="Lunar Reconnaissance Orbiter over the Moon"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold text-[#C9B5E0] tracking-wider uppercase">June 2009</p>
              <p className="text-2xl font-extrabold text-[#FCF9EC] mt-1">LRO</p>
              <p className="text-sm text-[#C9B5E0]/90 mt-1">
                The high-definition mapmaker that found our abandoned machines
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
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            In <span className="text-[#FCF9EC] font-semibold">June 2009</span>, a spacecraft left
            Earth bound for the Moon with a job that sounded simple:{' '}
            <span className="text-[#FCF9EC] font-semibold italic">take better pictures.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            The Lunar Reconnaissance Orbiter, or LRO, was NASA's high-definition mapmaker. Its
            mission was to chart the Moon in detail, find safe places to land, locate resources, and
            measure the radiation future explorers would face.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#FCF9EC] font-semibold leading-[1.8]">
            But within weeks, it did something nobody had planned for the headlines.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            In <span className="text-[#FCF9EC] font-semibold">July 2009</span>, NASA released LRO's
            first pictures of the Apollo landing sites. And there, on the lunar surface, was
            something the world hadn't seen for forty years. The lander that carried Neil Armstrong
            and Buzz Aldrin. The descent stage of Apollo 11's Eagle, still standing where it was
            left, a tiny dot in the gray plain.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#6061B6] py-4">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "Each one a small abandoned machine in the dust."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            LRO had found five of the six Apollo sites. The Apollo 14, 15, 16 and 17 landers were
            there too, each one a small abandoned machine in the dust.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#FCF9EC] font-semibold leading-[1.8]">
            And then LRO dropped lower.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            In <span className="text-[#FCF9EC] font-semibold">2011</span>, the orbiter swooped to an
            altitude of just 13 miles, and the pictures sharpened. At the Apollo 14 site, a trail of
            astronaut footprints wound across the ground. At Apollo 17, the tracks of the lunar rover
            stretched across the valley floor, along with the footprints of Gene Cernan and Jack
            Schmitt. NASA said the images were sharp enough to see the paths the astronauts walked.
            At Apollo 12, the lander sat beside Surveyor 3, the old robot the crew had visited more
            than forty years before.
          </p>
        </ScrollReveal>

        {/* What the Watcher Has Seen */}
        <ScrollReveal delay={0.2}>
          <div className="p-6 md:p-8 rounded-2xl bg-black/40 border border-[#6061B6]/30 backdrop-blur-sm">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9B5E0] mb-5">
              What the Watcher Has Seen
            </h4>
            <ul className="space-y-3">
              {SEEN_BY_LRO.map((entry) => (
                <li
                  key={entry.item}
                  className="flex items-center justify-between gap-4 pb-3 border-b border-[#6061B6]/20 last:border-0 last:pb-0"
                >
                  <span className="text-sm md:text-base text-[#FCF9EC]">{entry.item}</span>
                  <span
                    className={`shrink-0 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                      entry.status !== 'Seen 2009'
                        ? 'text-[#FCF9EC] bg-[#C9B5E0]/20 border-[#C9B5E0]/50'
                        : 'text-[#C9B5E0] bg-[#00105B]/40 border-[#6061B6]/40'
                    }`}
                  >
                    {entry.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            These were the places we had left behind. The flags, the wheels, the footprints, the
            first and last signs of human presence on another world.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#C9B5E0] py-4 bg-[#00105B]/30 rounded-r-xl pr-6">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "No wind blows on the Moon. No rain falls. The footprints, scientists say, could last
              for millions of years."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            And LRO isn't finished. More than{' '}
            <span className="text-[#FCF9EC] font-semibold">seventeen years</span> after launch, it's
            still circling the Moon, still taking pictures. As recently as this summer, the team
            released another batch of images, thousands of them, covering a single month of the
            Moon's surface.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            It does the work the Apollo astronauts couldn't. It maps every crater, finds the
            ice-hiding shadows, and studies the south pole, where the next astronauts hope to land.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            For half a century, the Moon was a place we had visited and left behind. LRO is the proof
            that the Moon never stopped being ours.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#00105B]/60 to-[#6061B6]/20 border border-[#C9B5E0]/30 backdrop-blur-sm text-center">
            <p className="text-xl md:text-2xl font-bold text-[#FCF9EC] leading-snug italic">
              "Every day, from above, it checks on the footprints. And it keeps the map for those who
              are coming back."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default LRO;