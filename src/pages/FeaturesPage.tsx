import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { ProductShowcase } from '../components/ProductShowcase';
import { Smartphone, Clock, Volume2, TrendingUp } from 'lucide-react';

export function FeaturesPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-6">
              Features & Capabilities
            </h1>
            <p className="text-gray-600 text-lg">
              NeuroRhythm+ is packed with advanced features designed to provide effective, comfortable tremor management.
            </p>
          </div>
        </div>
      </div>

      <Features />

      <ProductShowcase />

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">
            Additional Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#DDE6ED] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-[#26374D]" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3">Mobile App Integration</h3>
                  <p className="text-gray-600">
                    Track your progress over time, customize music preferences, and share data with healthcare providers through our intuitive mobile application.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#DDE6ED] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#26374D]" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3">All-Day Battery Life</h3>
                  <p className="text-gray-600">
                    Advanced power management ensures the device can operate for 12+ hours on a single charge, supporting you throughout your entire day.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#DDE6ED] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Volume2 className="w-6 h-6 text-[#26374D]" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3">Bone Conduction Audio</h3>
                  <p className="text-gray-600">
                    Experience therapeutic music without blocking your ears. Stay aware of your environment while receiving treatment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#DDE6ED] rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#26374D]" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3">Progress Analytics</h3>
                  <p className="text-gray-600">
                    Detailed analytics and visualizations help you and your healthcare team understand tremor patterns and treatment effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-gray-900 mb-6 text-center">
              Designed for Comfort
            </h2>
            <p className="text-gray-600 text-lg mb-8 text-center max-w-2xl mx-auto">
              Every aspect of NeuroRhythm+ has been carefully designed with user comfort in mind. From the lightweight materials to the adjustable fit, we ensure that the device feels natural during extended wear.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-[#26374D] mb-2">50g</div>
                <p className="text-gray-600 text-sm">Lightweight Design</p>
              </div>
              <div className="text-center">
                <div className="text-[#26374D] mb-2">Adjustable</div>
                <p className="text-gray-600 text-sm">Fits All Wrist Sizes</p>
              </div>
              <div className="text-center">
                <div className="text-[#26374D] mb-2">Hypoallergenic</div>
                <p className="text-gray-600 text-sm">Medical-Grade Materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
