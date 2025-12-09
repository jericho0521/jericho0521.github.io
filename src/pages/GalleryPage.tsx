import { Footer } from '../components/Footer';
import { Camera, Video, FileImage, Play, Download, ExternalLink } from 'lucide-react';

const milestones = [
  {
    title: 'Initial Concept Sketches',
    date: 'Month 1',
    description: 'Early ideation and concept exploration for wearable device form factors.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    type: 'sketch'
  },
  {
    title: 'First Physical Prototype',
    date: 'Month 3',
    description: '3D-printed prototype with basic sensor integration and form factor testing.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    type: 'prototype'
  },
  {
    title: 'Ergonomic Testing',
    date: 'Month 4',
    description: 'User testing sessions to evaluate comfort, fit, and usability of wearable design.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    type: 'testing'
  },
  {
    title: 'Mobile App Wireframes',
    date: 'Month 5',
    description: 'Initial wireframes and user flow designs for the companion mobile application.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    type: 'design'
  },
  {
    title: 'Second Iteration Prototype',
    date: 'Month 6',
    description: 'Improved prototype with wireless connectivity and enhanced ergonomics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    type: 'prototype'
  },
  {
    title: 'AI Model Training',
    date: 'Month 7',
    description: 'Machine learning model development and training with tremor data from pilot studies.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    type: 'development'
  },
  {
    title: 'Final Product Design',
    date: 'Month 8',
    description: 'Production-ready design with all integrated features and polished aesthetics.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    type: 'final'
  },
  {
    title: 'Clinical Trial Setup',
    date: 'Month 9',
    description: 'Preparation and setup for clinical validation studies with partner hospitals.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    type: 'clinical'
  }
];

const prototypes = [
  {
    name: 'Prototype V1',
    description: 'Initial proof of concept with basic functionality',
    features: ['Basic tremor detection', 'Wired connection', 'Simple music playback'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
  },
  {
    name: 'Prototype V2',
    description: 'Improved ergonomics and wireless connectivity',
    features: ['Wireless Bluetooth', 'Better battery life', 'Enhanced comfort'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  },
  {
    name: 'Prototype V3',
    description: 'Production-ready design with full feature set',
    features: ['AI-powered analysis', 'All-day battery', 'Intuitive mobile app'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop'
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

      {/* Timeline Gallery */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Project Timeline
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Key milestones and visual documentation of our development journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <div className="relative h-48 bg-gradient-to-br from-[#536D82] to-[#26374D] overflow-hidden">
                  <img 
                    src={milestone.image} 
                    alt={milestone.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-[#26374D] font-semibold">
                      {milestone.date}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    {milestone.type === 'sketch' && <FileImage className="w-5 h-5 text-white" />}
                    {milestone.type === 'prototype' && <Camera className="w-5 h-5 text-white" />}
                    {milestone.type === 'testing' && <Video className="w-5 h-5 text-white" />}
                    {milestone.type === 'design' && <FileImage className="w-5 h-5 text-white" />}
                    {milestone.type === 'development' && <Camera className="w-5 h-5 text-white" />}
                    {milestone.type === 'final' && <Camera className="w-5 h-5 text-white" />}
                    {milestone.type === 'clinical' && <Video className="w-5 h-5 text-white" />}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {milestone.description}
                  </p>
                </div>
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
              Prototype Evolution
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              See how our design evolved through three major iterations, each addressing critical user needs and technical challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {prototypes.map((prototype, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 bg-gradient-to-br from-[#536D82] to-[#26374D]">
                  <img 
                    src={prototype.image} 
                    alt={prototype.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-semibold mb-1">
                      {prototype.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">
                    {prototype.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-gray-700 text-sm font-semibold">Key Features:</h4>
                    <ul className="space-y-1">
                      {prototype.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#26374D] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#26374D] to-[#536D82] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8" />
                </div>
                <h2 className="mb-4">
                  Project Video
                </h2>
                <p className="text-[#DDE6ED] mb-8">
                  Watch our 2-minute project overview video showcasing NeuroRhythm+, our design process, and impact.
                </p>
              </div>
              
              <div className="bg-black/30 rounded-xl p-8 backdrop-blur-sm">
                <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-75" />
                    <p className="text-[#DDE6ED] mb-4">2-Minute Project Video</p>
                    <a 
                      href="https://drive.google.com/file/d/YOUR_VIDEO_ID/view" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#26374D] rounded-lg hover:bg-[#DDE6ED] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Watch on Google Drive
                    </a>
                  </div>
                </div>
                <p className="text-sm text-[#9DB2BF] text-center">
                  Note: Replace the Google Drive link with your actual video URL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


