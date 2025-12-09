import { Footer } from '../components/Footer';
import { Mail, MessageSquare, FileText, Users, MapPin, Phone } from 'lucide-react';

export function ContactPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-600 text-lg">
              We&apos;d love to hear from you. Whether you&apos;re a patient, researcher, clinician, or potential collaborator, reach out to learn more about NeuroRhythm+.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26374D] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26374D] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26374D] focus:border-transparent"
                  >
                    <option>General Inquiry</option>
                    <option>Research Collaboration</option>
                    <option>Clinical Partnership</option>
                    <option>Patient Interest</option>
                    <option>Press & Media</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26374D] focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#26374D] text-white rounded-lg hover:bg-[#536D82] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#DDE6ED] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#26374D]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Email</h3>
                    <a href="mailto:contact@neurorhythm.com" className="text-[#536D82] hover:text-[#26374D]">
                      contact@neurorhythm.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#DDE6ED] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#26374D]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#DDE6ED] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#26374D]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      Research Lab, University Campus<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-gray-900 mb-4">Specific Inquiries</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#536D82]" />
                    <div>
                      <p className="text-gray-700">Clinical Partnerships</p>
                      <a href="mailto:clinical@neurorhythm.com" className="text-sm text-[#536D82]">
                        clinical@neurorhythm.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#536D82]" />
                    <div>
                      <p className="text-gray-700">Research Collaboration</p>
                      <a href="mailto:research@neurorhythm.com" className="text-sm text-[#536D82]">
                        research@neurorhythm.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-[#536D82]" />
                    <div>
                      <p className="text-gray-700">Press & Media</p>
                      <a href="mailto:press@neurorhythm.com" className="text-sm text-[#536D82]">
                        press@neurorhythm.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-gray-900 mb-6">
              Join Our Research
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We&apos;re actively seeking participants for clinical trials and research studies. If you or someone you know has Parkinson&apos;s disease and is interested in contributing to the development of NeuroRhythm+, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:trials@neurorhythm.com"
                className="px-6 py-3 bg-[#26374D] text-white rounded-lg hover:bg-[#536D82] transition-colors"
              >
                Express Interest in Clinical Trials
              </a>
              <a
                href="#"
                className="px-6 py-3 border-2 border-[#26374D] text-[#26374D] rounded-lg hover:bg-[#DDE6ED] transition-colors"
              >
                Download Information Sheet
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
