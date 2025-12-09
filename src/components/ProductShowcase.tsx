import { Hand, Watch, Battery, Headphones, Package, Zap } from 'lucide-react';

const products = [
  {
    icon: Hand,
    name: 'Therapeutic Gloves',
    description: 'Ergonomic gloves with integrated sensors and haptic feedback. Designed for comfort during extended wear with breathable, hypoallergenic materials.',
    features: ['Sensor Integration', 'Haptic Feedback', 'Breathable Material', 'Multiple Sizes'],
    color: 'from-[#26374D] to-[#536D82]'
  },
  {
    icon: Watch,
    name: 'Smart Wristband',
    description: 'Lightweight wristband with AI processing unit and bone conduction audio. Features adjustable straps and all-day battery life.',
    features: ['AI Processing', 'Bone Conduction', '12+ Hour Battery', 'Adjustable Fit'],
    color: 'from-[#536D82] to-[#9DB2BF]'
  },
  {
    icon: Battery,
    name: 'Fast Charging Station',
    description: 'Dual-device charging dock with wireless charging capability. LED indicators show charging status for both devices.',
    features: ['Wireless Charging', 'Dual Device Support', 'LED Indicators', 'Fast Charge'],
    color: 'from-[#9DB2BF] to-[#DDE6ED]'
  },
  {
    icon: Headphones,
    name: 'Bone Conduction Headset',
    description: 'Optional bone conduction headset for enhanced audio experience. Keeps ears open for environmental awareness.',
    features: ['Bone Conduction Tech', 'Comfortable Fit', 'Long Battery', 'Noise Cancellation'],
    color: 'from-[#26374D] to-[#9DB2BF]'
  },
  {
    icon: Package,
    name: 'Carrying Case',
    description: 'Premium protective case for storing and transporting your NeuroRhythm+ devices. Includes compartments for all accessories.',
    features: ['Protective Design', 'Organized Compartments', 'Portable', 'Durable Material'],
    color: 'from-[#536D82] to-[#DDE6ED]'
  },
  {
    icon: Zap,
    name: 'Replacement Sensors',
    description: 'High-precision replacement sensors for the therapeutic gloves. Easy to install and maintain optimal performance.',
    features: ['High Precision', 'Easy Installation', 'Long Lifespan', 'Calibrated'],
    color: 'from-[#9DB2BF] to-[#26374D]'
  }
];

export function ProductShowcase() {
  return (
    <div id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Product Lineup
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A complete ecosystem of products designed to work together seamlessly, providing comprehensive tremor management solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                <div className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-gray-900 mb-3 text-xl">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-gray-700 text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1.5">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#26374D] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#DDE6ED] to-gray-100 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-gray-900 mb-4">
              Complete System Package
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              All products are designed to work together as a unified system. Purchase the complete package or individual components based on your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <div className="text-[#26374D] font-semibold">Starter Kit</div>
                <div className="text-gray-600 text-sm">Wristband + Gloves</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <div className="text-[#26374D] font-semibold">Complete Kit</div>
                <div className="text-gray-600 text-sm">All Products Included</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <div className="text-[#26374D] font-semibold">Accessories</div>
                <div className="text-gray-600 text-sm">Individual Components</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


