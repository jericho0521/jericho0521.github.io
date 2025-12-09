import { ProblemSolution } from '../components/ProblemSolution';
import { Journey } from '../components/Journey';
import { Footer } from '../components/Footer';

export function AboutPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-6">
              About NeuroRhythm+
            </h1>
            <p className="text-gray-600 text-lg">
              Our mission is to improve the lives of Parkinson&apos;s patients through innovative technology that combines AI, music therapy, and ergonomic design.
            </p>
          </div>
        </div>
      </div>

      <ProblemSolution />
      
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-600 mb-6 text-lg">
              We envision a world where Parkinson&apos;s patients have access to non-invasive, comfortable assistive technologies that seamlessly integrate into their daily lives. NeuroRhythm+ represents a paradigm shift in tremor management, moving beyond traditional pharmaceutical and surgical interventions.
            </p>
            
            <h2 className="text-gray-900 mb-6 mt-12">The Science Behind Music Therapy</h2>
            <p className="text-gray-600 mb-4 text-lg">
              Research has shown that rhythmic auditory stimulation can significantly improve motor function in Parkinson&apos;s patients. The basal ganglia, which are affected by Parkinson&apos;s disease, play a crucial role in both movement and rhythm perception.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              By providing rhythmic cues through music, we can help activate alternative neural pathways, effectively bypassing the damaged circuits and reducing tremor amplitude. Our AI algorithms continuously analyze tremor patterns and adapt the musical intervention in real-time for maximum effectiveness.
            </p>

            <div className="bg-gradient-to-br from-[#DDE6ED] to-gray-100 p-8 rounded-xl mt-8">
              <h3 className="text-gray-900 mb-4">Key Statistics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#26374D]">•</span>
                  <span>Over 10 million people worldwide live with Parkinson&apos;s disease</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#26374D]">•</span>
                  <span>70% of Parkinson&apos;s patients experience hand tremors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#26374D]">•</span>
                  <span>Music therapy has shown up to 50% improvement in motor function</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#26374D]">•</span>
                  <span>Non-invasive interventions have 95% patient acceptance rates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Journey />
      <Footer />
    </>
  );
}
