import React from 'react';
import { ScrollReveal } from '../../ui/ScrollReveal';

const MISSION_STATS = [
  { label: 'Launch', value: 'Jun 18, 2009' },
  { label: 'Impact Site', value: 'Cabeus Crater' },
  { label: 'Impact Speed', value: '5,600 mph' },
  { label: 'Accuracy', value: '<700 ft' },
  { label: 'The Answer', value: 'Yes, we found water', small: true },
];

const LEFT_BEHIND = [
  { item: 'Centaur rocket stage — first to hit', status: 'Crashed on purpose' },
  { item: 'LCROSS spacecraft — followed minutes later', status: 'Crashed on purpose' },
];

const LCROSS = ({
  imagePath = '/Post-apollo/LCROSS.jpg',
}) => {
  return (
    <div className="mb-24">
      {/* Featured Mission Title */}
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6061B6]">
            Featured Mission · October 2009
          </span>
          <h3 className="text-[clamp(1.75rem, 3.5vw, 2.5rem)] font-bold text-[#FCF9EC] mt-2">
            LCROSS: The Mission Built to Crash
          </h3>
        </div>
      </ScrollReveal>

      {/* Hero Image + Stats Panel */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        <ScrollReveal delay={0.2}>
          <div className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-80 md:h-[400px]">
            <img
              src={imagePath}
              alt="LCROSS spacecraft"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold text-[#C9B5E0] tracking-wider uppercase">October 9, 2009</p>
              <p className="text-2xl font-extrabold text-[#FCF9EC] mt-1">LCROSS</p>
              <p className="text-sm text-[#C9B5E0]/90 mt-1">
                The mission designed to die — so the Moon could answer
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
            Most spacecraft are designed to survive. LCROSS was designed to die.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">June 18, 2009</span>, an Atlas V rocket
            lifted off from Cape Canaveral, carrying two spacecraft toward the Moon: the Lunar
            Reconnaissance Orbiter, and a low-cost mission called LCROSS. Its full name was the Lunar
            Crater Observation and Sensing Satellite, and its job was blunt. Find out if there was
            water on the Moon by smashing something into it.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            The plan was strange but clever. Clementine and Lunar Prospector had hinted at ice hiding
            in craters at the poles, places where the Sun hasn't shone for billions of years. But no
            one had been able to prove it. So NASA would slam the spent upper stage of the rocket,
            called <span className="text-[#FCF9EC] font-semibold">Centaur</span>, into one of those
            craters at about 5,600 miles per hour. The collision would throw up a plume of debris,
            and if there was ice below, it would rise into the sunlight.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Then LCROSS, riding a few minutes behind, would fly through the cloud, measure it, and
            send the results home before it crashed too.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#FCF9EC] font-semibold leading-[1.8]">
            It was a one-way trip.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">October 9, 2009</span>, after four
            months of careful steering, the two spacecraft closed in on{' '}
            <span className="text-[#FCF9EC] font-semibold">Cabeus</span>, a crater near the Moon's
            south pole. About nine hours out, LCROSS released the Centaur, then backed off to watch.
            The rocket stage struck the crater floor, less than 700 feet from its aim point.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Astronomers across the world pointed their telescopes at the Moon. They waited for a
            flash. A plume. Anything.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#FCF9EC] font-semibold leading-[1.8]">
            They saw nothing.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            The impact, it seemed, was a dud. News headlines called it a disappointment.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#6061B6] py-4">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "But LCROSS wasn't built to be watched from Earth."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            In the minutes after the impact, its instruments flew through the debris, and the
            spectrometers were recording data. Scientists spent weeks studying every line of it.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#C9B5E0] py-4 bg-[#00105B]/30 rounded-r-xl pr-6">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "Yes, we found water."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">November 13, 2009</span>, NASA announced
            the results. Not a trace, but a significant amount, in the form of ice grains lifted into
            the sunlight. Later analysis found that water was mixed with other chemicals, including
            ammonia, hydrogen gas, and carbon dioxide, locked away in the cold for ages.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Scientists believed it might be left by ancient comets.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            For LCROSS, there was no second chance. It crashed into Cabeus just minutes after the
            Centaur, its wreckage joining the rocket stage on the floor of a crater where no sunlight
            falls.
          </p>
        </ScrollReveal>

        {/* Inventory */}
        <ScrollReveal delay={0.2}>
          <div className="p-6 md:p-8 rounded-2xl bg-black/40 border border-[#6061B6]/30 backdrop-blur-sm">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9B5E0] mb-5">
              Still in Cabeus Crater Today
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
              "But its answer lives on. It told the world that the Moon's frozen shadows hold water,
              and told the next explorers where to look."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default LCROSS;