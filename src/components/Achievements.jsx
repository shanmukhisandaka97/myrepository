import React from 'react';
import { Trophy, TrendingUp, Shield, Clock, Users, Star } from 'lucide-react';

const iconMap = {
  trophy: Trophy,
  trending: TrendingUp,
  shield: Shield,
  clock: Clock,
  users: Users,
  star: Star,
};

const Achievements = ({ data }) => {
  return (
    <section id="achievements" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Key <span className="text-cyan-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Measurable impact delivered across cybersecurity operations and enterprise environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            return (
              <div
                key={index}
                className="bg-slate-800/60 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{achievement.metric}</div>
                    <h3 className="text-white font-semibold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                    <span className="inline-block mt-3 text-xs text-cyan-400/70 bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 rounded-full">
                      {achievement.company}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
