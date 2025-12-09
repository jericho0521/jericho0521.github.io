import { Music, Mail, Linkedin, Github, FileText, Video, Image, Download, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#26374D] to-[#536D82] rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span>NeuroRhythm+</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-enhanced assistive technology helping Parkinson&apos;s patients manage hand tremors through therapeutic music interaction.
            </p>
            <div className="flex gap-4">
              <a href="mailto:contact@neurorhythm.com" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#536D82] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#536D82] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#536D82] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Features</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Technology</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Team</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:contact@neurorhythm.com" className="hover:text-white transition-colors">
                  contact@neurorhythm.com
                </a>
              </li>
              <li>For research collaborations</li>
              <li>For clinical partnerships</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4">Project Resources</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://drive.google.com/file/d/YOUR_VIDEO_ID/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Video className="w-4 h-4" />
                  <span>2-Minute Video</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://drive.google.com/file/d/YOUR_POSTER_PPTX_ID/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Image className="w-4 h-4" />
                  <span>Poster (PPTX)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://drive.google.com/file/d/YOUR_POSTER_PDF_ID/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Image className="w-4 h-4" />
                  <span>Poster (PDF)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://drive.google.com/file/d/YOUR_DOC_ID/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Project Document (.doc)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://drive.google.com/file/d/YOUR_PDF_ID/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Project Document (.pdf)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="md:flex justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 NeuroRhythm+. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              An AI-Ergonomics Research Project
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
