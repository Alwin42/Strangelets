import React from 'react';
import { ScrollReveal } from '../../ui/ScrollReveal';

const MISSION_STATS = [
  { label: 'Crew', value: '3' },
  { label: 'Landing Site', value: 'Fra Mauro' },
  { label: 'Landing Date', value: 'Feb 5, 1971' },
  { label: 'Cone Crater Width', value: '1,000 ft' },
  { label: 'Golf Balls Left', value: '2', small: true },
];

const CREW = [
  { name: 'Alan Shepard', role: 'Commander — first American in space, 47' },
  { name: 'Stuart Roosa', role: 'Command Module Pilot — rookie' },
  { name: 'Edgar Mitchell', role: 'Lunar Module Pilot — rookie' },
];

const LEFT_BEHIND = [
  { item: 'Two golf balls', status: 'Still there' },
  { item: 'Makeshift six-iron club', status: 'Still there' },
  { item: 'The MET tool cart', status: 'Still there' },
  { item: "Antares' descent stage", status: 'Still there' },
];

const Apollo14 = () => {
  return (
    <div className="mb-24">
      {/* Featured Mission Title */}
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6061B6]">
            Featured Mission · February 1971
          </span>
          <h3 className="text-[clamp(1.75rem, 3.5vw, 2.5rem)] font-bold text-[#FCF9EC] mt-2">
            Apollo 14: The Landing Apollo 13 Never Got
          </h3>
        </div>
      </ScrollReveal>

      {/* Row 1: Launch Image + Mission Profile */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
        <ScrollReveal delay={0.2}>
          <div className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-80 md:h-[400px]">
            <img
              src="/Apollo/apollo-14-launch.jpg"
              alt="Apollo 14 launch"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold text-[#C9B5E0] tracking-wider uppercase">1971</p>
              <p className="text-2xl font-extrabold text-[#FCF9EC] mt-1">The Comeback Flight</p>
              <p className="text-sm text-[#C9B5E0]/90 mt-1">The win the Apollo program desperately needed</p>
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

      {/* Row 2: Crew Photo + Crew List */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
        <ScrollReveal delay={0.3}>
          <div className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm w-full h-64 md:h-full md:min-h-64">
            <img
              src="/Apollo/apollo-14-crew.jpg"
              alt="The Apollo 14 crew"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-6 text-sm font-bold text-[#FCF9EC]">
              Shepard · Roosa · Mitchell
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="h-full min-h-64 p-6 rounded-2xl bg-black/40 border border-[#6061B6]/30 backdrop-blur-sm flex flex-col justify-center">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9B5E0] mb-5">
              The Crew
            </h4>
            <div className="space-y-5">
              {CREW.map((member) => (
                <div key={member.name} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#6061B6] shrink-0" />
                  <div>
                    <p className="text-lg font-bold text-[#FCF9EC]">{member.name}</p>
                    <p className="text-sm text-[#C9B5E0]/80">{member.role}</p>
                  </div>
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
            After Apollo 13, NASA had two problems. One was how to get back to the Moon. The other
            was what to do about the place they had never reached.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Apollo 13 had been headed for <span className="text-[#FCF9EC] font-semibold">Fra
            Mauro</span>, a hilly highland region scattered with ancient debris thrown out by a giant
            impact. Scientists wanted it badly. It could hold some of the oldest rocks on the Moon.
            And so, after the accident, NASA made a choice: the next crew would go to Fra Mauro
            instead.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            That crew was led by <span className="text-[#FCF9EC] font-semibold">Alan Shepard</span>,
            the first American in space, now 47 and eager to fly again. With him were Stuart Roosa
            and Edgar Mitchell. Both were rookies.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            It wasn't an easy mission to begin. In the summer of 1970, budget cuts had already forced
            NASA to cancel Apollo 18 and 19.{' '}
            <span className="text-[#FCF9EC] font-semibold">The program needed a win.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On the way down, the lander <span className="text-[#FCF9EC] font-semibold italic">
            Antares</span> nearly stumbled. Minutes into the descent, its landing radar failed to
            lock on to the surface. Mission Control and the crew worked out a fix, Mitchell entered
            the changes, and Shepard took the final landing in hand.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            On <span className="text-[#FCF9EC] font-semibold">February 5, 1971</span>, Antares touched
            down at Fra Mauro, at the time the most accurate landing of the Apollo program.
          </p>
        </ScrollReveal>

        {/* Spacecraft figure */}
        <ScrollReveal delay={0.2}>
          <figure className="relative group overflow-hidden rounded-2xl border border-[#6061B6]/30 bg-black/40 backdrop-blur-sm">
            <img
              src="/Apollo/apollo-14-spacecraft.jpg"
              alt="Apollo 14 spacecraft over the Moon"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <figcaption className="absolute bottom-4 left-6 right-6 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#FCF9EC]">Antares over Fra Mauro — the pinpoint landing Apollo 13 never got</span>
              <span className="text-xs text-[#C9B5E0]/80 uppercase tracking-wider whitespace-nowrap">Archive Photo</span>
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            The next day, they set out for <span className="text-[#FCF9EC] font-semibold">Cone
            Crater</span>, a 1,000-foot-wide hole that might offer a glimpse of the deepest rock.
            They pulled their tools behind them on a little cart, a two-wheeled device the crew
            called the MET. It kept bogging down in the soft soil.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            The climb was brutal. The ground rolled and rose in the same shapes again and again, and
            they couldn't tell how far they had gone. Tired and out of breath, they turned back,
            stopping short of the crater's rim.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            But before leaving the Moon, Shepard did something nobody had planned. He pulled a golf
            ball from his suit, dropped it in the dust, and swung a makeshift club made from a tool
            handle and a six-iron head.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote className="relative pl-8 border-l-2 border-[#C9B5E0] py-4 bg-[#00105B]/30 rounded-r-xl pr-6">
            <p className="text-2xl md:text-3xl font-bold text-[#FCF9EC] italic leading-snug">
              "The ball, he said, went 'miles and miles.' It didn't."
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            Later estimates say neither shot traveled more than a mile.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-[#C9B5E0] leading-[1.8]">
            But it didn't matter. The balls are still there. So are the club, the cart, and the
            lander's descent stage, left behind at Fra Mauro, in a place the Apollo 13 crew should
            have seen.
          </p>
        </ScrollReveal>

        {/* Inventory */}
        <ScrollReveal delay={0.2}>
          <div className="p-6 md:p-8 rounded-2xl bg-black/40 border border-[#6061B6]/30 backdrop-blur-sm">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9B5E0] mb-5">
              Still at Fra Mauro Today
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
              "Apollo 14 brought back what Apollo 13 lost. And on the Moon, a golf ball still waits
              to be found."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Apollo14;