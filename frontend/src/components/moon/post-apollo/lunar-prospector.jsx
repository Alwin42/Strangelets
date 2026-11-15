import React from 'react';
import { ScrollReveal } from '../../ui/ScrollReveal';

const MISSION_STATS = [
  { label: 'Launch', value: 'Jan 6, 1998' },
  { label: 'Weight', value: '660 lbs' },
  { label: 'Orbits Completed', value: '~7,000' },
  { label: 'Hydrogen Signal', value: '3× average' },
  { label: 'Final Crash Speed', value: '3,800 mph', small: true },
];

const LEFT_BEHIND = [
  { item: 'Lunar Prospector spacecraft', status: 'Crashed on purpose' },
  { item: "Eugene Shoemaker's ashes — the only human remains on the Moon", status: 'Still there' },
];

const LunarProspector = ({
  imagePath = '/Post-apollo/Lunar-Prospector.jpg',
}) => {
  return (
    <div className="mb-24">
      {/* Featured Mission Title */}
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6061B6]">
            Featured Mission · 1998–1999
          </span>
          <h3 className="text-[clamp(1.75rem, 3.5vw, 2.5rem)] font-bold text-[#FCF9EC] mt-2">
            Lunar Prospector: A Burial at the Bottom of the Moon
          </h3>
        </div>
      </ScrollReveal>

      {/* Hero Image + Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        <ScrollReveal delay={0.2}>
          <div className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-80 md:h-[400px]">
            <img
              src={imagePath}
              alt="Lunar Prospector spacecraft"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold text-[#C9B5E0] tracking-wider uppercase">January 6, 1998</p>
              <p className="text-2xl font-extrabold text-[#FCF9EC] mt-1">Lunar Prospector</p>
              <p className="text-sm text-[#C9B5E0]/90 mt-1">
                Built cheap, fast, and focused — one question: is there water on the Moon?
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
            On the night of <span className="text-[#FCF9EC] font-semibold">January 6, 1998</span>, an
            Athena II rocket lifted off from Cape Canaveral, carrying a compact 660-pound spacecraft.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            It was called <span className="text-[#FCF9EC] font-semibold">Lunar Prospector</span>, and
            it was built to be cheap, fast, and focused. One question.{' '}
            <span className="text-[#FCF9EC] font-semibold italic">Is there water on the Moon?</span>
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            For decades, the idea had seemed absurd. The Moon was dry, baked by sunlight, scoured by
            the vacuum. But Clementine had left a hint: at the poles, deep in craters where the Sun
            never reaches, something might be hiding.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#FCF9EC] font-semibold leading-[1.8]">
            Lunar Prospector went to find out.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            For about a year and a half, it circled the Moon from pole to pole, completing roughly{' '}
            <span className="text-[#FCF9EC] font-semibold">seven thousand orbits</span>. Its
            instruments read the chemistry of the ground below. And in March 1998, NASA made an
            announcement: the neutron spectrometer had detected hydrogen at both poles, hydrogen that
            scientists believed was locked in water ice. The signal was strongest at the north pole,
            and at both poles the hydrogen was about three times the lunar average.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            It was the first direct evidence of ice on the Moon, and it was exciting. But it wasn't
            proof. <span className="text-[#FCF9EC] font-semibold">Hydrogen is not water</span>, and no
            one could say for sure what form it was in.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#FCF9EC] font-semibold leading-[1.8]">
            So NASA came up with a daring plan.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            As the mission neared its end, Lunar Prospector would not be left to drift. Instead,
            controllers would steer it, on purpose, into a permanently shadowed crater near the south
            pole. The crash might kick up a cloud of vapor. If there was ice below, telescopes on
            Earth might see it.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            The chosen crater was named <span className="text-[#FCF9EC] font-semibold">
            Shoemaker</span>, for the geologist Eugene Shoemaker, who had dreamed of walking on the
            Moon but never made it. He had died in a car accident two years earlier.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#6061B6] py-4">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "Fixed to the spacecraft, in a container about the size of a lipstick, were his ashes."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">July 31, 1999</span>, at about 3,800
            miles an hour, Lunar Prospector went behind the Moon and rocketed into the crater.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Astronomers watched. Observatory telescopes on Earth trained their lenses on the pole.
            They saw no plume, and no spectral sign of water vapor. The odds had never been good, and
            the Moon kept its secret.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#C9B5E0] py-4 bg-[#00105B]/30 rounded-r-xl pr-6">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "But the mission hadn't failed."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            A decade later, another spacecraft crashed into another south pole crater and found real
            water ice in the debris. <span className="text-[#FCF9EC] font-semibold">Lunar Prospector
            had pointed the way.</span>
          </p>
        </ScrollReveal>

        {/* Inventory */}
        <ScrollReveal delay={0.2}>
          <div className="p-6 md:p-8 rounded-2xl bg-black/40 border border-[#6061B6]/30 backdrop-blur-sm">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9B5E0] mb-5">
              Still at Shoemaker Crater Today
            </h4>
            <ul className="space-y-3">
              {LEFT_BEHIND.map((entry) => (
                <li
                  key={entry.item}
                  className="flex items-center justify-between gap-4 pb-3 border-b border-[#6061B6]/20 last:border-0 last:pb-0"
                >
                  <span className="text-sm md:text-base text-[#FCF9EC]">{entry.item}</span>
                  <span
                    className={`shrink-0 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                      entry.status !== 'Still there'
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
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#00105B]/60 to-[#6061B6]/20 border border-[#C9B5E0]/30 backdrop-blur-sm text-center">
            <p className="text-xl md:text-2xl font-bold text-[#FCF9EC] leading-snug italic">
              "And at the bottom of Shoemaker, a geologist finally made it to the Moon."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default LunarProspector;