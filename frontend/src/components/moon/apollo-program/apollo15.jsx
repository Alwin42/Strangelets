import React from 'react';
import { ScrollReveal } from '../../ui/ScrollReveal';

const MISSION_STATS = [
  { label: 'Crew', value: '3' },
  { label: 'Landing Site', value: 'Hadley Rille' },
  { label: 'Moonwalks', value: '4' },
  { label: 'Surface Time', value: '~67 hrs' },
  { label: 'Rover Excursions', value: '3', small: true },
];

const CREW = [
  { name: 'Dave Scott', role: 'Commander — the veteran' },
  { name: 'Jim Irwin', role: 'Lunar Module Pilot — rookie' },
  { name: 'Al Worden', role: 'Command Module Pilot — ran science from orbit' },
];

const LEFT_BEHIND = [
  { item: 'The Lunar Roving Vehicle — first car on the Moon', status: 'Still there' },
  { item: 'Fallen Astronaut figurine', status: 'Still there' },
  { item: 'Memorial plaque for fallen crews', status: 'Still there' },
  { item: "Falcon's descent stage", status: 'Still there' },
  { item: 'Rover tracks in the dust', status: 'Still there' },
];

const Apollo15 = () => {
  return (
    <div className="mb-24">
      {/* Featured Mission Title */}
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6061B6]">
            Featured Mission · July 1971
          </span>
          <h3 className="text-[clamp(1.75rem, 3.5vw, 2.5rem)] font-bold text-[#FCF9EC] mt-2">
            Apollo 15: The Car They Left on the Moon
          </h3>
        </div>
      </ScrollReveal>

      {/* Row 1: Landing Image + Mission Profile */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
        <ScrollReveal delay={0.2}>
          <div className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-80 md:h-[400px]">
            <img
              src="/Apollo/apollo-15-landing.webp"
              alt="Falcon lands at Hadley Rille"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold text-[#C9B5E0] tracking-wider uppercase">July 30, 1971</p>
              <p className="text-2xl font-extrabold text-[#FCF9EC] mt-1">Falcon Down at Hadley</p>
              <p className="text-sm text-[#C9B5E0]/90 mt-1">The most dramatic landing site any Apollo crew had seen</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="h-full min-h-80 p-6 rounded-2xl bg-gradient-to-br from-[#00105B]/60 to-[#6061B6]/20 border border-[#6061B6]/40 backdrop-blur-sm flex flex-col justify-center">
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

      {/* Row 2: Crew strip */}
      <ScrollReveal delay={0.3}>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {CREW.map((member) => (
            <div
              key={member.name}
              className="p-5 rounded-2xl bg-black/40 border border-[#6061B6]/30 backdrop-blur-sm"
            >
              <div className="w-2 h-2 mb-3 rounded-full bg-[#6061B6]" />
              <p className="text-lg font-bold text-[#FCF9EC]">{member.name}</p>
              <p className="text-sm text-[#C9B5E0]/80 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Narrative */}
      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollReveal>
          <p className="text-lg text-[#FCF9EC] font-semibold leading-[1.8]">
            In September 1970, NASA cancelled two Apollo missions.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            It was a budget decision, and it hurt. But it changed Apollo 15 forever. With fewer
            flights left, the mission was upgraded into something bigger: a longer stay on the Moon,
            more science, and, for the first time, <span className="text-[#FCF9EC] font-semibold">a
            car.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            The Lunar Roving Vehicle was a battery-powered buggy, folded flat and carried into space
            on the side of the lunar module. On the Moon, it would be unpacked and unfolded. For the
            first time, astronauts would not be limited to the short distance they could walk from
            their lander. <span className="text-[#FCF9EC] font-semibold">They could drive.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">July 26, 1971</span>, Dave Scott, Al
            Worden, and Jim Irwin lifted off from Florida. Scott was the veteran; Worden and Irwin
            were rookies. Four days later, Scott and Irwin brought the lander{' '}
            <span className="text-[#FCF9EC] font-semibold italic">Falcon</span> down at Hadley Rille,
            a deep, winding canyon over a thousand feet deep, beside the high peaks of the lunar
            Apennine mountains.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            It was the most dramatic landing site any Apollo crew had seen.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#6061B6] py-4">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "Okay, Houston, the Falcon is on the Plain at Hadley!"
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            The next day, the two men unpacked the rover, climbed aboard, and drove across the Moon.
          </p>
        </ScrollReveal>

        {/* Rover figure 1 */}
        <ScrollReveal delay={0.2}>
          <figure className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm">
            <img
              src="/Apollo/apollo-15-lunar-vehicle.webp"
              alt="Lunar Roving Vehicle on the Moon"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <figcaption className="absolute bottom-4 left-6 right-6 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#FCF9EC]">The Lunar Roving Vehicle — the first car on the Moon</span>
              <span className="text-xs text-[#C9B5E0]/80 uppercase tracking-wider whitespace-nowrap">Archive Photo</span>
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Over the next three days they made four moonwalks, three of them in the rover, for about
            nineteen hours of exploration. They drove along the edge of the rille, climbed the lower
            slopes of the mountains, and gathered rocks no earlier crew could have reached. Overhead,
            Worden ran experiments from orbit in the command module{' '}
            <span className="text-[#FCF9EC] font-semibold italic">Endeavour</span>.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Before leaving, Scott did a small experiment for the audience back home. He dropped a
            falcon feather and a hammer, and watched them fall at the same speed in the airless dust.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Then he and Irwin did something quieter. They placed a tiny metal figure on the ground,
            called <span className="text-[#FCF9EC] font-semibold italic">Fallen Astronaut</span>,
            along with a plaque listing the names of astronauts and cosmonauts who had died.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            After about <span className="text-[#FCF9EC] font-semibold">sixty-seven hours</span> on
            the surface, it was time to go.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            They parked the rover a short distance from the lander, its television camera aimed at
            the place where they would take off.{' '}
            <span className="text-[#FCF9EC] font-semibold">And then they left it there.</span>
          </p>
        </ScrollReveal>

        {/* Rover figure 2 */}
        <ScrollReveal delay={0.2}>
          <figure className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm">
            <img
              src="/Apollo/apollo-15-lunar-vehicle-2.jpg"
              alt="The parked Lunar Roving Vehicle"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <figcaption className="absolute bottom-4 left-6 right-6 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#FCF9EC]">Parked for good — its camera watched the liftoff</span>
              <span className="text-xs text-[#C9B5E0]/80 uppercase tracking-wider whitespace-nowrap">Archive Photo</span>
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            It's still there today. The first car on the Moon never made the trip home, and it was
            never meant to. It sits at the edge of Hadley Rille, in the dust, next to a figurine, a
            plaque, and the tracks of the men who drove it.
          </p>
        </ScrollReveal>

        {/* Inventory */}
        <ScrollReveal delay={0.2}>
          <div className="p-6 md:p-8 rounded-2xl bg-black/40 border border-[#6061B6]/30 backdrop-blur-sm">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9B5E0] mb-5">
              Still at Hadley Rille Today
            </h4>
            <ul className="space-y-3">
              {LEFT_BEHIND.map((entry) => (
                <li
                  key={entry.item}
                  className="flex items-center justify-between gap-4 pb-3 border-b border-[#6061B6]/20 last:border-0 last:pb-0"
                >
                  <span className="text-sm md:text-base text-[#FCF9EC]">{entry.item}</span>
                  <span className="shrink-0 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border text-[#C9B5E0] bg-[#00105B]/40 border-[#6061B6]/40">
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
              "The first car on the Moon never made the trip home, and it was never meant to."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Apollo15;