import { Mail, Linkedin, Github } from 'lucide-react';

const teamMembers = [
  {
    name: 'Your Name',
    role: 'Project Lead & AI Engineer',
    bio: 'Specializes in machine learning and healthcare applications.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },
  {
    name: 'Team Member',
    role: 'Hardware & Ergonomics Designer',
    bio: 'Expert in wearable device design and human factors.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    name: 'Team Member',
    role: 'Clinical Research Coordinator',
    bio: 'Coordinates clinical trials and patient engagement.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
  },
  {
    name: 'Team Member',
    role: 'Music Therapist & Researcher',
    bio: 'Develops therapeutic music interventions for neurological conditions.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  }
];

export function Team() {
  return (
    <div id="team" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A multidisciplinary team bringing together expertise in AI, healthcare, design, and music therapy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-[#9DB2BF] to-[#536D82] overflow-hidden">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-[#536D82] mb-3 text-sm">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#DDE6ED] hover:text-[#26374D] transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#DDE6ED] hover:text-[#26374D] transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#DDE6ED] hover:text-[#26374D] transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}