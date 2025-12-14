import { Team } from '../components/Team';
import { Footer } from '../components/Footer';

export function TeamPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-6">
              Meet Our Team
            </h1>
            <p className="text-gray-600 text-lg">
              A passionate, multidisciplinary team dedicated to improving the lives of Parkinson&apos;s patients through innovation and empathy.
            </p>
          </div>
        </div>
      </div>

      <Team />
      <Footer />
    </>
  );
}
