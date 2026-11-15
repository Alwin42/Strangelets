import React from 'react';
import { ScrollReveal } from '../../ui/ScrollReveal';

const MISSION_STATS = [
  { label: 'Weight', value: '13 lbs' },
  { label: 'Distance Tracked', value: '655,000 mi' },
  { label: 'Signal Duration', value: '82 hrs' },
  { label: 'Moon Flyby Distance', value: '37,000 mi' },
  { label: 'Current Status', value: 'Solar Orbit · 398 days', small: true },
];

const Pioneer4Feature = ({
  imagePath = '/models/3D-moon-assets/Pioneer_4.jpg',
}) => {
  return (
    <div className="mb-24">
      {/* Featured Mission Title */}
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6061B6]">
            Featured Mission
          </span>
          <h3 className="text-[clamp(1.75rem, 3.5vw, 2.5rem)] font-bold text-[#FCF9EC] mt-2">
            Pioneer 4: The Little Probe That Missed the Moon
          </h3>
        </div>
      </ScrollReveal>

      {/* Hero Image + Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        <ScrollReveal delay={0.2}>
          <div className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-80 md:h-[400px]">
            <img
              src={imagePath}
              alt="Pioneer 4 spacecraft"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold text-[#C9B5E0] tracking-wider uppercase">March 3, 1959</p>
              <p className="text-2xl font-extrabold text-[#FCF9EC] mt-1">Pioneer 4</p>
              <p className="text-sm text-[#C9B5E0]/90 mt-1">America's first spacecraft to escape Earth's gravity</p>
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
            In early 1959, America was losing a race it had only just entered. The Soviet Union had
            already sent <span className="text-[#FCF9EC] font-semibold">Luna 1</span> past the Moon.
            NASA was barely two months old, and its answer was a pair of small flyby probes. Every
            American attempt played out in public, and so far, every one had failed. Pioneers 1, 2
            and 3 had all fallen short, undone by trouble with their rockets.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Then came <span className="text-[#FCF9EC] font-semibold">Pioneer 4</span>.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#6061B6] py-4">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "It was a tiny thing: a cone about the size of a lampshade, weighing just thirteen pounds."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Engineers at the Jet Propulsion Laboratory had plated it with gold and painted it with
            stripes, not for beauty, but to keep it from freezing or overheating in the void. Inside
            were a radio, a radiation counter, and a sensor meant to catch the Moon as it passed.
            Scientist <span className="text-[#FCF9EC] font-semibold">James Van Allen</span> stood over
            it days before launch, checking the instruments that would carry his work into space.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">March 3, 1959</span>, a Juno II rocket
            climbed out of Cape Canaveral in the dark. And it worked, almost. Pioneer 4 became the
            first American spacecraft to break free of Earth's gravity.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            But the aim was off. Instead of skimming close to the Moon, the probe slipped past at
            roughly 37,000 miles—about 17,000 miles wide of the plan. The sensor never triggered.
            There would be no photographs. No reading of lunar radiation. The mission's main goal
            slid silently by.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#C9B5E0] py-4 bg-[#00105B]/30 rounded-r-xl pr-6">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "And yet Pioneer 4 kept talking."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            For <span className="text-[#FCF9EC] font-semibold">82 hours</span>, its small transmitter
            kept sending back data, including valuable measurements of the Van Allen radiation belts.
            It traveled some 655,000 miles, the farthest a human-made object had ever been tracked.
            Ground stations followed it deeper and deeper into space, until, on March 6, the signal
            faded and went quiet.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Pioneer 4 was never recovered. It never could be. It fell into orbit around the Sun,
            circling once every 398 days, a thirteen-pound relic of America's first reach beyond Earth.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            It never saw the Moon up close. But the dish in California's Mojave Desert that listened
            for its whisper went on to track the Rangers, the Surveyors, and, in 1969, the lunar
            module <span className="text-[#FCF9EC] font-semibold italic">Eagle</span> as it touched
            down on the Moon.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Pioneer4Feature;