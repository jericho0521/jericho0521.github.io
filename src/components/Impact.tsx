import { TrendingUp, Users, Award, Heart } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '47%',
    label: 'Average Tremor Reduction',
    description: 'Based on pilot study results'
  },
  {
    icon: Users,
    value: '85%',
    label: 'User Satisfaction',
    description: 'Would recommend to others'
  },
  {
    icon: Award,
    value: '3',
    label: 'Innovation Awards',
    description: 'Healthcare & AI categories'
  },
  {
    icon: Heart,
    value: '50+',
    label: 'Pilot Participants',
    description: 'Across multiple test sites'
  }
];

export function Impact() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Impact & Outcomes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Early results demonstrate significant improvements in tremor control and quality of life for participants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#DDE6ED] to-[#9DB2BF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[#26374D]" />
                </div>
                <div className="text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-700 mb-1">
                  {metric.label}
                </div>
                <p className="text-gray-500 text-sm">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-[#26374D] to-[#536D82] rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-4">
              Patient Testimonial
            </h3>
            <blockquote className="text-lg md:text-xl mb-6 italic">
              &ldquo;NeuroRhythm+ has given me back the confidence to do things I love. The tremors are still there, but they&apos;re manageable now. I can hold a cup of coffee, use my phone, and even play the piano again.&rdquo;
            </blockquote>
            <div className="text-[#DDE6ED]">
              — Pilot Study Participant, Age 68
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}