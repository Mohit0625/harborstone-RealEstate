import { Mail, Phone, FileText } from 'lucide-react';
import { TeamMember } from '../types';

interface MeetTheTeamProps {
  team: TeamMember[];
}

export default function MeetTheTeam({ team }: MeetTheTeamProps) {
  return (
    <section id="team" className="py-24 bg-cream text-brand-slate border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/15 mb-4">
            <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-gold uppercase">
              Elite Brokerage
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-slate mb-6">
            Meet Our Elite Advisory Team
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="font-sans text-xs sm:text-sm text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Led by founder James Whitfield, our selected Austin brokers possess structural experience, neighborhood mastery, and extreme legal integrity.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((agent) => (
            <article
              key={agent.id}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              id={`team-card-${agent.id}`}
            >
              {/* Image Container with Border Accent */}
              <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 border-b border-gray-100">
                <img
                  src={agent.image}
                  alt={agent.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-102"
                />
                
                {/* Gold Trim Corner Accent on Hover */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-all m-4" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-all m-4" />
                
                {/* Hover License tag */}
                <div className="absolute top-4 right-4 bg-brand-slate text-cream text-[9px] tracking-wider font-semibold uppercase px-2.5 py-1 flex items-center gap-1">
                  <FileText className="w-2.5 h-2.5 text-gold" />
                  <span>{agent.license}</span>
                </div>
              </div>

              {/* Agent details */}
              <div className="p-8 flex flex-col flex-grow justify-between text-left">
                <div>
                  <div className="font-sans text-[11px] tracking-widest font-semibold text-gold uppercase mb-2">
                    {agent.role}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-slate mb-4">
                    {agent.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 font-light leading-relaxed mb-6">
                    {agent.bio}
                  </p>
                </div>

                {/* Direct contact hook */}
                <div className="pt-6 border-t border-gray-100 space-y-3.5">
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center gap-3 text-slate-600 hover:text-gold transition-colors font-sans text-xs"
                    aria-label={`Email ${agent.name}`}
                  >
                    <div className="w-8 h-8 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center">
                      <Mail className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span className="font-mono text-xs font-medium">{agent.email}</span>
                  </a>
                  
                  <a
                    href={`tel:${agent.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-3 text-slate-600 hover:text-gold transition-colors font-sans text-xs"
                    aria-label={`Call ${agent.name}`}
                  >
                    <div className="w-8 h-8 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span className="font-mono text-xs font-medium">{agent.phone}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
