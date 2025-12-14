import { Mail, Linkedin, Github } from 'lucide-react';

const teamMembers = [
  {
    name: 'Jericho',
    role: 'Project Lead & Developer',
    bio: 'Leads project development and technical implementation.',
    avatar: '/team/jericho.png'
  },
  {
    name: 'Ben',
    role: 'Team Member',
    bio: 'Contributes to design and development.',
    avatar: '/team/ben.png'
  },
  {
    name: 'Carlos',
    role: 'Team Member',
    bio: 'Contributes to research and development.',
    avatar: '/team/carlos.png'
  },
  {
    name: 'Jouni',
    role: 'Team Member',
    bio: 'Contributes to engineering and testing.',
    avatar: '/team/jouni.png'
  },
  {
    name: 'Lam',
    role: 'Team Member',
    bio: 'Contributes to project coordination.',
    avatar: '/team/lam.png'
  },
  {
    name: 'Serene',
    role: 'Team Member',
    bio: 'Contributes to design and user experience.',
    avatar: '/team/serene.png'
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