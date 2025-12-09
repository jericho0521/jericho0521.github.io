import { Music, Brain, Smartphone, Activity, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Tremor Analysis',
    description: 'Advanced machine learning algorithms analyze tremor patterns in real-time, adapting to individual patient needs.',
    color: 'indigo'
  },
  {
    icon: Music,
    title: 'Rhythmic Stabilization',
    description: 'Therapeutic music and rhythmic cues activate motor control pathways to reduce tremor amplitude.',
    color: 'purple'
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Continuous tracking of tremor severity with instant feedback and adjustment of therapeutic interventions.',
    color: 'blue'
  },
  {
    icon: Smartphone,
    title: 'Mobile Integration',
    description: 'Companion app for tracking progress, customizing music preferences, and sharing data with healthcare providers.',
    color: 'indigo'
  },
  {
    icon: Shield,
    title: 'Ergonomic Design',
    description: 'Lightweight, comfortable wearable designed for extended use without causing fatigue or discomfort.',
    color: 'purple'
  },
  {
    icon: Users,
    title: 'Patient-Centered',
    description: 'Co-designed with Parkinson\'s patients and caregivers to ensure practical, user-friendly functionality.',
    color: 'blue'
  }
];

const colorClasses = {
  indigo: {
    bg: 'bg-[#DDE6ED]',
    icon: 'text-[#26374D]',
    gradient: 'from-gray-50 to-gray-100'
  },
  purple: {
    bg: 'bg-[#DDE6ED]',
    icon: 'text-[#536D82]',
    gradient: 'from-gray-50 to-gray-100'
  },
  blue: {
    bg: 'bg-[#DDE6ED]',
    icon: 'text-[#26374D]',
    gradient: 'from-gray-50 to-gray-100'
  }
};

export function Features() {
  return (
    <div id="features" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Core Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            NeuroRhythm+ combines cutting-edge AI technology with proven music therapy principles to deliver effective tremor management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                
                <h3 className="text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}