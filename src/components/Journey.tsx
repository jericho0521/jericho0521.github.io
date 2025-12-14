import { Lightbulb, Users, FlaskConical, Rocket } from 'lucide-react';

const milestones = [
  {
    icon: Lightbulb,
    phase: 'First',
    title: 'Project Ideation',
    description: 'Extensive literature review on music therapy and Parkinson\'s disease. Conducted interviews with patients and healthcare professionals to understand needs.',
    timeline: 'Week 1-2'
  },
  {
    icon: Users,
    phase: 'Second',
    title: 'Initial Device Prototype',
    description: 'Developed a basic prototype of the device with AI tremor detection and ergonomic design.',
    timeline: 'Week 3-4'
  },
  {
    icon: FlaskConical,
    phase: 'Third',
    title: 'Initial Application Design Prototype',
    description: 'Created a basic prototype of the application with AI tremor detection and ergonomic design.',
    timeline: 'Week 5-6'
  },
  {
    icon: Rocket,
    phase: 'Fourth',
    title: 'Final Design',
    description: 'Finalized the design of the device and application.',
    timeline: 'Week 7-8'  
  }
];

export function Journey() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Project Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From concept to clinical validation, our journey has been driven by empathy, innovation, and rigorous testing.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#9DB2BF] via-[#536D82] to-[#9DB2BF] transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={isEven ? 'lg:text-right' : 'lg:col-start-2'}>
                      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DDE6ED] text-[#26374D] rounded-full mb-3 text-sm">
                          {milestone.timeline}
                        </div>
                        <h3 className="text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {milestone.description}
                        </p>
                        <div className="text-[#536D82] text-sm">
                          {milestone.phase} Phase
                        </div>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#26374D] to-[#536D82] rounded-full items-center justify-center shadow-lg z-10">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Mobile icon */}
                    <div className="lg:hidden w-12 h-12 bg-gradient-to-br from-[#26374D] to-[#536D82] rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}