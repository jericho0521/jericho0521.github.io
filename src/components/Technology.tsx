import { Cpu, Waves, Bluetooth, Battery } from 'lucide-react';

const techStack = [
  {
    icon: Cpu,
    title: 'Machine Learning',
    items: ['TensorFlow Lite', 'Real-time Classification', 'Adaptive Learning Models']
  },
  {
    icon: Waves,
    title: 'Sensor Technology',
    items: ['6-axis IMU Sensors', 'High-frequency Sampling', 'Precision Motion Tracking']
  },
  {
    icon: Bluetooth,
    title: 'Connectivity',
    items: ['Bluetooth Low Energy', 'Cloud Synchronization', 'Secure Data Transfer']
  },
  {
    icon: Battery,
    title: 'Power Efficiency',
    items: ['All-day Battery Life', 'Fast Charging', 'Low Power Consumption']
  }
];

export function Technology() {
  return (
    <div id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Technology Stack
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Built on a foundation of advanced sensors, AI algorithms, and ergonomic hardware design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#26374D] to-[#536D82] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-gray-900 mb-4">
                  {tech.title}
                </h3>
                
                <ul className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#DDE6ED] to-gray-100 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-gray-900 mb-4">
                How It Works
              </h3>
              <p className="text-gray-600 mb-6">
                NeuroRhythm+ uses advanced sensors to continuously monitor hand movements. When tremors are detected, our AI algorithm analyzes the pattern and selects the optimal rhythmic intervention. Music therapy is delivered through bone conduction audio, allowing users to benefit from the treatment while remaining aware of their environment.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-[#26374D] mb-1">1</div>
                  <div className="text-gray-700 text-sm">Detect</div>
                </div>
                <div className="flex-1 bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-[#26374D] mb-1">2</div>
                  <div className="text-gray-700 text-sm">Analyze</div>
                </div>
                <div className="flex-1 bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-[#26374D] mb-1">3</div>
                  <div className="text-gray-700 text-sm">Intervene</div>
                </div>
                <div className="flex-1 bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-[#26374D] mb-1">4</div>
                  <div className="text-gray-700 text-sm">Adapt</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-[#DDE6ED] to-[#9DB2BF] rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Waves className="w-24 h-24 text-[#26374D] mx-auto mb-4" />
                  <p className="text-gray-600">Continuous Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}