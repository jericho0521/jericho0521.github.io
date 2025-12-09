import { AlertCircle, Heart, CheckCircle } from 'lucide-react';

export function ProblemSolution() {
  return (
    <div id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Problem */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-6">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">The Challenge</span>
            </div>
            
            <h2 className="text-gray-900 mb-6">
              Living with Hand Tremors
            </h2>
            
            <p className="text-gray-600 mb-6">
              Over 10 million people worldwide live with Parkinson&apos;s disease, with hand tremors being one of the most visible and limiting symptoms. These tremors significantly impact:
            </p>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-700">Daily activities like eating, writing, and using devices</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-700">Independence and confidence in social situations</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-700">Overall quality of life and mental well-being</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Our Solution</span>
            </div>
            
            <h2 className="text-gray-900 mb-6">
              Music-Based Tremor Stabilization
            </h2>
            
            <p className="text-gray-600 mb-6">
              NeuroRhythm+ leverages the neurological connection between music, rhythm, and motor control to provide real-time tremor stabilization through an ergonomic, wearable device.
            </p>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-700">AI-powered tremor detection and real-time adaptation</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-700">Personalized music therapy calibrated to each user</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-700">Non-invasive, comfortable design for everyday use</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
