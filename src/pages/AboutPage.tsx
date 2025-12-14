import { Play } from 'lucide-react';
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

      {/* Video Showcase Section */}
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-gray-900 mb-4">Product Showcase</h2>
            <p className="text-gray-600 text-lg">See NeuroRhythm+ in action</p>

            {/* Video Section */}
            <div className="mt-12 w-full mx-auto rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Lv0ZH5GWYf0"
                  title="NeuroRhythm+ Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Poster Section */}
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-gray-900 mb-4">Project Poster</h2>
            <p className="text-gray-600 text-lg">Overview of our research and design</p>

            {/* Poster Image */}
            <div className="mt-12 w-full mx-auto bg-white p-4 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <a
                href="/prototype/poster.png"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-zoom-in group rounded-lg overflow-hidden"
              >
                <img
                  src="/prototype/poster.png"
                  alt="NeuroRhythm+ Project Poster"
                  className="w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-500"
                />
              </a>
            </div>
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
          </div>
        </div>
      </div>

      <Journey />
      <Footer />
    </>
  );
}
