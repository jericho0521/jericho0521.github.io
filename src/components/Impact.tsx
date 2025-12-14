import { TrendingUp, Users, Award, Heart } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    label: 'Improve Motor Stability',
    description: 'Provide real-time AI assistances to reduce individuals impact of tremors, while enhancing individuals’ accuracy in daily activities such as typing, writing, and instruments practices. '
  },
  {
    icon: Users,
    label: 'Improve Ergonomics Comfort',
    description: 'Reduces stresses and fatigue by adapting to individual tremor patterns and adjusting dynamic adjustments. '
  },
  {
    icon: Award,
    label: 'Increase Independence',
    description: 'Enable individuals to perform daily basis task with less reliance on caregivers.'
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#DDE6ED] to-[#9DB2BF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[#26374D]" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-500 text-sm">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}