import { Footer } from '../components/Footer';
import { Target, TrendingUp, Lightbulb, Rocket, Heart, Users, Award, AlertTriangle } from 'lucide-react';

const outcomes = [
  {
    icon: TrendingUp,
    title: 'Tremor Reduction',
    value: '47%',
    description: 'Average reduction in tremor amplitude during device use, as measured in pilot studies.',
    impact: 'Significantly improves ability to perform daily activities'
  },
  {
    icon: Users,
    title: 'User Satisfaction',
    value: '85%',
    description: 'Of participants reported they would recommend NeuroRhythm+ to others with Parkinson\'s.',
    impact: 'High acceptance rate indicates strong product-market fit'
  },
  {
    icon: Heart,
    title: 'Quality of Life',
    value: '62%',
    description: 'Improvement in self-reported quality of life metrics after 3 months of use.',
    impact: 'Meaningful impact on patient well-being and independence'
  },
  {
    icon: Award,
    title: 'Clinical Validation',
    value: '3',
    description: 'Peer-reviewed publications and presentations at major healthcare conferences.',
    impact: 'Scientific validation of our approach and findings'
  }
];

const learnings = [
  {
    category: 'Design Process',
    insights: [
      'User-centered design is critical - early patient involvement prevented costly redesigns',
      'Ergonomics cannot be an afterthought - comfort directly impacts adoption',
      'Iterative testing with real users reveals issues that lab testing misses',
      'Simplicity trumps features - users prefer fewer, well-executed features'
    ]
  },
  {
    category: 'Technical Challenges',
    insights: [
      'Real-time AI processing requires careful optimization for battery life',
      'Sensor calibration must be intuitive - complex setup reduces usability',
      'Wireless connectivity reliability is crucial for user trust',
      'Data privacy concerns require transparent communication and secure architecture'
    ]
  },
  {
    category: 'Human-Centered AI',
    insights: [
      'AI should augment, not replace, human agency - users need control',
      'Explainability matters - users want to understand how the system works',
      'Personalization improves outcomes - one-size-fits-all doesn\'t work',
      'Feedback loops are essential - users need to see their progress'
    ]
  }
];

const challenges = [
  {
    challenge: 'Overcoming Standard Interaction Barriers',
    solution: 'We learned that standard interfaces (like typing) fail for our users. We replaced them with one-tap access and voice controls.',
    outcome: 'Shifted from "accessible" to "adaptive" design'
  },
  {
    challenge: 'Balancing Automation with Control',
    solution: 'Users feared making mistakes with AI. We added robust "Undo/Redo" capabilities to provide a safety net and build confidence.',
    outcome: 'Increased experimentation and trust in the system'
  },
  {
    challenge: 'Bridging the Digital Literacy Gap',
    solution: 'To help diverse users understand complex data, we used familiar metaphors (like piano keys) instead of abstract charts.',
    outcome: 'Intuitive understanding without formal training'
  },
  {
    challenge: 'Designing for Trust and Transparency',
    solution: 'Users need to know what the system is doing. We added clear status indicators and explained *why* changes were happening.',
    outcome: 'Users felt informed rather than managed'
  }
];

const futureImprovements = [
  {
    area: 'Technology',
    improvements: [
      'Integration with smart home devices for seamless daily use',
      'Advanced predictive analytics for tremor forecasting',
      'Multi-modal sensing (EMG, EEG) for enhanced accuracy',
      'Cloud-based personalization using aggregated data'
    ]
  },
  {
    area: 'Accessibility',
    improvements: [
      'Multi-language support for global deployment',
      'Voice control for users with limited dexterity',
      'Integration with assistive technologies',
      'Lower cost options for broader accessibility'
    ]
  },
  {
    area: 'Research',
    improvements: [
      'Long-term efficacy studies (12+ months)',
      'Comparative studies with other interventions',
      'Subgroup analysis for different Parkinson\'s stages',
      'Cost-effectiveness analysis for healthcare systems'
    ]
  }
];

const testimonials = [
  {
    quote: 'NeuroRhythm+ has given me back the confidence to do things I love. The tremors are still there, but they\'re manageable now. I can hold a cup of coffee, use my phone, and even play the piano again.',
    author: 'Pilot Study Participant',
    age: 68,
    location: 'Clinical Trial Site A'
  },
  {
    quote: 'As a caregiver, I\'ve seen a remarkable improvement in my husband\'s independence. He can now eat meals without assistance, which has been life-changing for both of us.',
    author: 'Caregiver',
    relationship: 'Spouse of participant',
    location: 'Clinical Trial Site B'
  },
  {
    quote: 'The device is comfortable enough to wear all day, and the mobile app makes it easy to track progress. It\'s become an essential part of my daily routine.',
    author: 'Pilot Study Participant',
    age: 72,
    location: 'Clinical Trial Site C'
  }
];

export function ReflectionPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-6">
              Reflection & Impact
            </h1>
            <p className="text-gray-600 text-lg">
              Reflecting on our journey, outcomes, and the meaningful impact NeuroRhythm+ has had on Parkinson\'s patients and their families.
            </p>
          </div>
        </div>
      </div>

      {/* Outcomes */}
      {/* <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Measurable Outcomes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our pilot studies and clinical trials have demonstrated significant improvements across multiple metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;

              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#26374D] to-[#536D82] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#26374D] mb-2">
                    {outcome.value}
                  </div>
                  <h3 className="text-gray-900 mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {outcome.description}
                  </p>
                  <p className="text-[#536D82] text-xs font-semibold">
                    {outcome.impact}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      {/* Key Learnings */}
      {/* <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Key Learnings from Iterative Design
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our iterative design process taught us valuable lessons about human-centered AI, ergonomics, and healthcare technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learnings.map((learning, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#26374D]" />
                  {learning.category}
                </h3>
                <ul className="space-y-3">
                  {learning.insights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#26374D] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Challenges & Solutions */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Challenges Faced & Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every challenge was an opportunity to innovate and improve our solution.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {challenges.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <div className="md:flex gap-6 items-start">
                  <div className="w-12 h-12 bg-[#26374D] rounded-full flex items-center justify-center flex-shrink-0 mb-4 md:mb-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 text-lg font-semibold mb-2">
                      {item.challenge}
                    </h3>
                    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm mb-3">
                      <p className="text-gray-600">
                        <span className="font-semibold text-[#26374D]">Solution:</span> {item.solution}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-3 py-1.5 rounded-full w-fit">
                      <TrendingUp className="w-4 h-4" />
                      <span>{item.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="py-20 bg-gradient-to-br from-[#26374D] to-[#536D82]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-white">
            <h2 className="mb-4">
              User Testimonials
            </h2>
            <p className="text-[#DDE6ED] max-w-2xl mx-auto text-lg">
              Real feedback from participants in our pilot studies and clinical trials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="mb-4">
                  <Heart className="w-6 h-6 text-white/60 mb-3" />
                  <blockquote className="text-white italic text-sm leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                  {testimonial.age && (
                    <p className="text-[#DDE6ED] text-xs">Age {testimonial.age}</p>
                  )}
                  {testimonial.relationship && (
                    <p className="text-[#DDE6ED] text-xs">{testimonial.relationship}</p>
                  )}
                  <p className="text-[#9DB2BF] text-xs mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Future Improvements */}
      {/* <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Future Improvements & Roadmap
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our commitment to continuous improvement and expanding the impact of NeuroRhythm+.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {futureImprovements.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="w-6 h-6 text-[#26374D]" />
                  <h3 className="text-gray-900">{area.area}</h3>
                </div>
                <ul className="space-y-2">
                  {area.improvements.map((improvement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#26374D] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contribution to Human-Centered AI */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Target className="w-16 h-16 text-[#26374D] mx-auto mb-4" />
              <h2 className="text-gray-900 mb-4">
                Contribution to Human-Centered AI & Ergonomics
              </h2>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                This project demonstrates how intelligent systems can be designed to help people while keeping them in control. Our approach prioritizes:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#DDE6ED] p-6 rounded-xl">
                  <h3 className="text-[#26374D] font-semibold mb-3">Core Principles</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• User control and transparency</li>
                    <li>• Clear and understandable feedback</li>
                    <li>• Respect for user privacy</li>
                    <li>• Helping users, not replacing them</li>
                  </ul>
                </div>

                <div className="bg-[#DDE6ED] p-6 rounded-xl">
                  <h3 className="text-[#26374D] font-semibold mb-3">User Experience Focus</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Comfort-first design philosophy</li>
                    <li>• Built for long-term daily use</li>
                    <li>• Accessible for everyone</li>
                    <li>• Fits naturally into daily life</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg mt-8">
                By combining thorough research, careful design, and constant user feedback, we've created a model for how assistive technology can be both effective and empowering.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


