import { Footer } from '../components/Footer';


const devicePrototypes = [
  {
    image: '/prototype/dev_pro_1.png',
  },
  {
    image: '/prototype/dev_pro_2.png',
  },
  {
    image: '/prototype/dev_pro_3.png',
  },
  {
    image: '/prototype/dev_pro_4.png',
  }
];

const milestones = [
  {
    image: '/prototype/pap_pro_1.png',
  },
  {
    image: '/prototype/pap_pro_2.png',
  },
  {
    image: '/prototype/pap_pro_3.png',
  }
];

const prototypes = [
  {
    image: '/prototype/dig_pro_1.png',
  },
  {
    image: '/prototype/dig_pro_2.png',
  }
];

export function GalleryPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-6">
              Gallery & Milestones
            </h1>
            <p className="text-gray-600 text-lg">
              A visual journey through our design process, from initial concepts to final product. Explore our prototypes, design iterations, and key milestones.
            </p>
          </div>
        </div>
      </div>

      {/* Device Prototype Gallery */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Device Prototype
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hardware iterations and final device design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devicePrototypes.map((prototype, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <img
                  src={prototype.image}
                  alt="Device Prototype"
                  className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Gallery */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Paper Prototype
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Paper prototype of the app
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <img
                  src={milestone.image}
                  alt="Paper Prototype"
                  className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prototype Evolution */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Digital Prototype
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              See how our design evolved through three major iterations, each addressing critical user needs and technical challenges.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {prototypes.map((prototype, index) => (
              <div key={index} className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={prototype.image}
                  alt="Digital Prototype"
                  className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>



      <Footer />
    </>
  );
}


