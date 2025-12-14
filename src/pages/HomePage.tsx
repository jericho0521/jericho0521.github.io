import { Music, Zap, ArrowRight } from 'lucide-react';
import { Impact } from '../components/Impact';
import { Footer } from '../components/Footer';
import { ProductShowcase } from '../components/ProductShowcase';

export function HomePage() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DDE6ED] text-[#26374D] rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm">AI-Enhanced Assistive Technology</span>
              </div>
              
              <h1 className="text-gray-900 mb-6">
                Stabilizing Hand Tremors Through the Power of Music
              </h1>
              
              <p className="text-gray-600 mb-8 text-lg">
                NeuroRhythm+ is an innovative AI-enhanced assistive device designed to help Parkinson&apos;s patients manage hand tremors through therapeutic music interaction, improving quality of life and daily functioning.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#products" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#26374D] text-white rounded-lg hover:bg-[#536D82] transition-colors"
                >
                  View Products
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#learn-more" 
                  className="px-6 py-3 border-2 border-[#26374D] text-[#26374D] rounded-lg hover:bg-[#DDE6ED] transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#536D82] to-[#26374D] rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Music className="w-24 h-24 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9DB2BF]/40 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#536D82]/40 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="learn-more" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Why NeuroRhythm+?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our innovative approach combines cutting-edge technology with proven therapeutic principles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#26374D] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">1</span>
              </div>
              <h3 className="text-gray-900 mb-3">Evidence-Based</h3>
              <p className="text-gray-600">
                Built on extensive research demonstrating the neurological connection between music and motor control.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#536D82] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">2</span>
              </div>
              <h3 className="text-gray-900 mb-3">Patient-Centered</h3>
              <p className="text-gray-600">
                Co-designed with Parkinson&apos;s patients and caregivers to ensure practical, comfortable use.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#9DB2BF] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">3</span>
              </div>
              <h3 className="text-gray-900 mb-3">Clinically Validated</h3>
              <p className="text-gray-600">
                Ongoing clinical trials showing significant improvements in tremor control and quality of life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <ProductShowcase /> */}

      <Impact />
      <Footer />
    </>
  );
}
