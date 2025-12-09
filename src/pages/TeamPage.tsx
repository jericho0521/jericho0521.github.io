import { Team } from '../components/Team';
import { Footer } from '../components/Footer';
import { Award, Users, Target, Heart } from 'lucide-react';

export function TeamPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-6">
              Meet Our Team
            </h1>
            <p className="text-gray-600 text-lg">
              A passionate, multidisciplinary team dedicated to improving the lives of Parkinson&apos;s patients through innovation and empathy.
            </p>
          </div>
        </div>
      </div>

      <Team />

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DDE6ED] to-[#9DB2BF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#26374D]" />
              </div>
              <h3 className="text-gray-900 mb-3">Empathy</h3>
              <p className="text-gray-600 text-sm">
                We center our work around the lived experiences of Parkinson&apos;s patients and caregivers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DDE6ED] to-[#9DB2BF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#26374D]" />
              </div>
              <h3 className="text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We push the boundaries of technology to create novel solutions for complex healthcare challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DDE6ED] to-[#9DB2BF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#26374D]" />
              </div>
              <h3 className="text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                We work closely with patients, clinicians, and researchers to ensure real-world impact.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DDE6ED] to-[#9DB2BF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#26374D]" />
              </div>
              <h3 className="text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We maintain the highest standards in research, design, and development to deliver meaningful results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-gray-900 mb-6 text-center">
              Our Approach
            </h2>
            <p className="text-gray-600 mb-8 text-lg text-center">
              We believe in human-centered design and evidence-based innovation. Every decision we make is guided by patient needs and validated through rigorous research.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-gray-900 mb-6">Collaborative Partners</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#26374D] rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-700 mb-1">University Medical Centers</p>
                    <p className="text-gray-600 text-sm">Clinical research and patient recruitment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#536D82] rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-700 mb-1">Parkinson&apos;s Patient Advocacy Groups</p>
                    <p className="text-gray-600 text-sm">Patient insights and co-design feedback</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9DB2BF] rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-700 mb-1">Music Therapy Research Institutes</p>
                    <p className="text-gray-600 text-sm">Therapeutic protocol development</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#26374D] rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-700 mb-1">AI & Healthcare Technology Labs</p>
                    <p className="text-gray-600 text-sm">Machine learning and sensor technology expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
