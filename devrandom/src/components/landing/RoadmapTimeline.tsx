import { useState, useEffect } from 'preact/hooks';

interface TimelinePhase {
  id: string;
  title: string;
  subtitle: string;
  timeline: string;
  icon: string;
  features: string[];
  color: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const phases: TimelinePhase[] = [
  {
    id: 'phase1',
    title: 'Nova MVP',
    subtitle: 'Autonomous GitHub Security Agents',
    timeline: 'Immediate',
    icon: '🚀',
    features: [
      'Connect seamlessly to any GitHub repository',
      'Execute comprehensive vulnerability scans',
      'Provide real-time security analysis',
      'Foundation for autonomous security intelligence'
    ],
    color: {
      primary: 'from-blue-500 to-cyan-500',
      secondary: 'bg-blue-50 border-blue-200',
      accent: 'text-blue-600'
    }
  },
  {
    id: 'phase2',
    title: 'Enhanced Detection Models',
    subtitle: 'Advanced Security Intelligence',
    timeline: '3 Months',
    icon: '🔬',
    features: [
      'Develop proprietary security models for superior accuracy',
      'Implement machine learning-driven threat pattern recognition',
      'Create adaptive detection algorithms that evolve with threats',
      'Build comprehensive vulnerability databases and scoring'
    ],
    color: {
      primary: 'from-purple-500 to-pink-500',
      secondary: 'bg-purple-50 border-purple-200',
      accent: 'text-purple-600'
    }
  },
  {
    id: 'phase3',
    title: 'SSI-Powered Agent Runtime',
    subtitle: 'Verifiable Autonomous Security',
    timeline: '6 Months',
    icon: '🔐',
    features: [
      'Launch SSI-based secure agent runtime with full verifiability',
      'Deploy reasoning and inference engines for intelligent analysis',
      'Integrate with CI/CD pipelines for automated security testing',
      'Enable standalone operations with cryptographic proof of integrity'
    ],
    color: {
      primary: 'from-green-500 to-emerald-500',
      secondary: 'bg-green-50 border-green-200',
      accent: 'text-green-600'
    }
  }
];

export default function RoadmapTimeline() {
  const [activePhase, setActivePhase] = useState<string>('phase1');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="roadmap-timeline w-full max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Development Roadmap
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our vision unfolds through a strategic three-phase approach, combining cutting-edge AI with decentralized trust mechanisms.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform md:-translate-x-1/2 rounded-full"></div>

        {/* Timeline phases */}
        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 transform md:-translate-x-1/2 z-10">
                <div className={`w-full h-full rounded-full bg-gradient-to-r ${phase.color.primary} shadow-lg flex items-center justify-center text-white text-lg border-4 border-white`}>
                  {phase.icon}
                </div>
              </div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                } md:w-5/12 cursor-pointer transition-all duration-300 hover:scale-105`}
                onClick={() => setActivePhase(phase.id)}
              >
                <div className={`${phase.color.secondary} rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                  activePhase === phase.id ? 'shadow-2xl ring-4 ring-opacity-20 ring-current' : 'hover:shadow-xl'
                }`}>
                  {/* Phase header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${phase.color.accent} bg-white bg-opacity-80`}>
                      Phase {index + 1} • {phase.timeline}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className={`text-lg font-medium ${phase.color.accent} mb-4`}>
                    {phase.subtitle}
                  </p>

                  {/* Features list */}
                  <div className={`space-y-2 transition-all duration-300 ${
                    activePhase === phase.id ? 'max-h-96 opacity-100' : 'max-h-20 opacity-70'
                  } overflow-hidden`}>
                    {phase.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-2 text-gray-700"
                        style={{ 
                          transitionDelay: activePhase === phase.id ? `${featureIndex * 100}ms` : '0ms' 
                        }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color.primary} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expand indicator */}
                  <div className="mt-4 flex justify-center">
                    <div className={`w-6 h-6 rounded-full ${phase.color.accent} bg-opacity-20 flex items-center justify-center transition-transform duration-300 ${
                      activePhase === phase.id ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final message */}
      <div className={`text-center mt-16 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`} style={{ transitionDelay: '800ms' }}>
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">The Future of Cybersecurity</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            This roadmap positions devrandom at the forefront of autonomous security intelligence, 
            combining cutting-edge AI with decentralized trust mechanisms to create the next generation 
            of cybersecurity solutions.
          </p>
        </div>
      </div>
    </div>
  );
} 