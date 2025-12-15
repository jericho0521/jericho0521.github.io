import { Footer } from '../components/Footer';
import { Search, Users, ClipboardCheck, TrendingUp, BarChart3, Lightbulb } from 'lucide-react';

const researchMethods = [
  // {
  //   icon: Search,
  //   title: 'User Findings',
  //   description: 'Comprehensive analysis of existing research on music therapy, Parkinson\'s disease, and wearable assistive technologies.',
  //   findings: [
  //     'Music therapy shows 30-50% improvement in motor function',
  //     'Rhythmic auditory stimulation activates alternative neural pathways',
  //     'Wearable devices need to be lightweight (<100g) for extended use',
  //     'Patient acceptance is highest for non-invasive interventions'
  //   ]
  // },
  {
    icon: Users,
    title: 'User Findings',
    description: 'Semi-structured interviews with doctor, pharmcist and caregiver to understand daily challenges and needs.',
    findings: [
      'Fine motor control loss affects critical tasks like medication and writing',
      'Emotional distress stems from inability to engage in identity-forming hobbies',
      'Current reliance on caregivers creates a dependency cycle that undermines autonomy',
      'Validates need for "enabling fluid sequences" rather than just stopping tremors'
    ]
  },
  {
    icon: ClipboardCheck,
    title: 'Heuristic Evaluation',
    description: 'Expert evaluation of initial prototypes using Nielsen\'s 10 usability heuristics and ergonomic principles.',
    findings: [
      'Critical (Sev 5): Implemented clear recovery paths for device connection failures',
      'Major (Sev 4): Added visual aids to align calibration steps with physical instrument',
      'Data Context: Introduced color-coded health ranges for instant recognition',
      'Error Prevention: Visible constraints prevent input errors before they occur'
    ]
  },
  {
    icon: BarChart3,
    title: 'Usability Testing',
    description: 'Task-based usability testing with participants across paper prototype iterations.',
    findings: [
      'Voice control confirmed as preferred interaction method over typing for tremor patients',
      'Simplified one-tap login critical for reducing motor-load entry barriers (Severity 4 resolved)',
      'Redo functionality in calibration essential for preventing user fatigue during setup',
      'Clinical value validated: Tremor analytics help optimize medication timing regimens'
    ]
  }
];

const iterations = [
  {
    phase: 'Iteration 1',
    timeline: 'Month 3-4',
    focus: 'Basic Functionality',
    improvements: [
      'Initial sensor integration',
      'Basic tremor detection',
      'Simple music playback',
      'Wired connection to smartphone'
    ],
    issues: [
      'Too bulky and uncomfortable',
      'Poor battery life (4 hours)',
      'Complex calibration process',
      'Limited music customization'
    ],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop'
  },
  {
    phase: 'Iteration 2',
    timeline: 'Month 5-6',
    focus: 'Ergonomics & Comfort',
    improvements: [
      'Reduced weight from 120g to 60g',
      'Improved strap design for better fit',
      'Wireless Bluetooth connectivity',
      'Extended battery to 8 hours'
    ],
    issues: [
      'AI accuracy needed improvement',
      'Music selection still limited',
      'Mobile app interface confusing',
      'Sensor placement caused discomfort'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
  },
  {
    phase: 'Iteration 3',
    timeline: 'Month 7-8',
    focus: 'AI & User Experience',
    improvements: [
      'Advanced ML algorithms (95% accuracy)',
      'Intuitive mobile app redesign',
      'Personalized music recommendations',
      'All-day battery life (12+ hours)'
    ],
    issues: [
      'Minor calibration needed for some users',
      'Cost optimization required',
      'Additional language support needed'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  }
];

export function ResearchPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-6">
              Research & Iterative Process
            </h1>
            <p className="text-gray-600 text-lg">
              Our design process is grounded in rigorous research, continuous user feedback, and iterative improvement. Every decision is validated through evidence and real-world testing.
            </p>
          </div>
        </div>
      </div>

      {/* Research Methods */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Research Methods */}
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Research Methods
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We employed multiple research methodologies to ensure our solution addresses real user needs and follows best practices in healthcare technology.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {researchMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#DDE6ED] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#26374D]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-2 font-semibold">
                        {method.title}
                      </h3>
                      <div className="mb-4">
                        <p className="text-gray-600 text-sm leading-relaxed">{method.description}</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-green-800 text-sm font-semibold mb-1">Key Outcomes:</p>
                        <ul className="space-y-1">
                          {method.findings.map((finding, idx) => (
                            <li key={idx} className="text-green-700 text-sm">
                              • {finding}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Iterative Design Process */}
      {/* <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Iterative Design Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our design evolved through three major iterations, each addressing critical usability and ergonomic challenges identified through user testing.
            </p>
          </div>

          <div className="space-y-12">
            {iterations.map((iteration, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DDE6ED] text-[#26374D] rounded-full mb-4 text-sm">
                      <span>{iteration.phase}</span>
                      <span>•</span>
                      <span>{iteration.timeline}</span>
                    </div>

                    <h3 className="text-gray-900 mb-4 text-xl">
                      {iteration.focus}
                    </h3>

                    <div className="mb-6">
                      <h4 className="text-gray-700 mb-3 font-semibold flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        Improvements
                      </h4>
                      <ul className="space-y-2">
                        {iteration.improvements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-gray-700 mb-3 font-semibold flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-orange-600" />
                        Issues Identified
                      </h4>
                      <ul className="space-y-2">
                        {iteration.issues.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#536D82] to-[#26374D] p-8 flex items-center justify-center">
                    <div className="w-full h-64 bg-white/10 rounded-xl overflow-hidden">
                      <img
                        src={iteration.image}
                        alt={iteration.phase}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Key Metrics */}
      {/* <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#26374D] to-[#536D82] rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Research Impact Metrics
              </h2>
              <p className="text-[#DDE6ED] max-w-2xl mx-auto">
                Our iterative design process resulted in measurable improvements across all key metrics.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-[#DDE6ED]">Task Completion Rate</div>
                <div className="text-sm text-[#9DB2BF] mt-1">Final Iteration</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15 min</div>
                <div className="text-[#DDE6ED]">Learning Time</div>
                <div className="text-sm text-[#9DB2BF] mt-1">Reduced from 45 min</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">92%</div>
                <div className="text-[#DDE6ED]">User Satisfaction</div>
                <div className="text-sm text-[#9DB2BF] mt-1">Would recommend</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
}


