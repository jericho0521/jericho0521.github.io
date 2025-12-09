import { Technology } from '../components/Technology';
import { Footer } from '../components/Footer';
import { Code, Database, Shield, Zap } from 'lucide-react';

export function TechnologyPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-6">
              Technology & Innovation
            </h1>
            <p className="text-gray-600 text-lg">
              Explore the advanced technology powering NeuroRhythm+ and learn how we leverage AI and sensor technology for effective tremor management.
            </p>
          </div>
        </div>
      </div>

      <Technology />

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">
            Technical Specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-gray-900 mb-6">Hardware Components</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Processor</span>
                  <span className="text-gray-900">ARM Cortex-M4</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Sensors</span>
                  <span className="text-gray-900">6-axis IMU (Gyro + Accel)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Sampling Rate</span>
                  <span className="text-gray-900">100 Hz</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Battery</span>
                  <span className="text-gray-900">300 mAh Li-Po</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Connectivity</span>
                  <span className="text-gray-900">Bluetooth 5.0 LE</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Audio Output</span>
                  <span className="text-gray-900">Bone Conduction Transducer</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 mb-6">Software & AI</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">ML Framework</span>
                  <span className="text-gray-900">TensorFlow Lite</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Model Type</span>
                  <span className="text-gray-900">LSTM Neural Network</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Inference Time</span>
                  <span className="text-gray-900">&lt; 50ms</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Mobile Platform</span>
                  <span className="text-gray-900">iOS & Android</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Data Encryption</span>
                  <span className="text-gray-900">AES-256</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Cloud Storage</span>
                  <span className="text-gray-900">HIPAA Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">
            Our Technology Principles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Code className="w-8 h-8 text-[#26374D]" />
              </div>
              <h3 className="text-gray-900 mb-3">Open Standards</h3>
              <p className="text-gray-600 text-sm">
                Built on open-source frameworks and industry standards for transparency and interoperability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Shield className="w-8 h-8 text-[#26374D]" />
              </div>
              <h3 className="text-gray-900 mb-3">Privacy First</h3>
              <p className="text-gray-600 text-sm">
                Patient data is encrypted end-to-end and stored in compliance with healthcare privacy regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Database className="w-8 h-8 text-[#26374D]" />
              </div>
              <h3 className="text-gray-900 mb-3">Edge Computing</h3>
              <p className="text-gray-600 text-sm">
                AI processing happens on-device for instant response times and enhanced privacy protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Zap className="w-8 h-8 text-[#26374D]" />
              </div>
              <h3 className="text-gray-900 mb-3">Continuous Learning</h3>
              <p className="text-gray-600 text-sm">
                Our AI models improve over time through federated learning while protecting user privacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}