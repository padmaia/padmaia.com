import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faBluesky } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import profileImage from '@/images/tree_profile.jpeg'
import ExperienceRolodex from './components/ExperienceRolodex'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      <div className="grid-pattern" />
      <div className="noise-overlay" />
      
      {/* Gradient orbs */}
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 min-h-screen flex flex-col">

        <main className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-center">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center md:items-start gap-12 animate-slide-up">
            {/* Profile Image */}
            <div className="relative shrink-0">
              <div className="profile-glow w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
                <Image
                  src={profileImage}
                  alt="Maia Teegarden"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 font-mono">
                <span className="gradient-text">Maia Teegarden</span>
              </h1>
              
              {/* Seeker statement */}
              <ExperienceRolodex />

              {/* Social Links - subtle */}
              <div className="flex justify-center md:justify-start gap-5">
                <Link 
                  href="https://github.com/padmaia" 
                  className="text-foreground-muted hover:text-accent-teal transition-colors"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://bsky.app/profile/padmaia.bsky.social" 
                  className="text-foreground-muted hover:text-accent-teal transition-colors"
                  aria-label="Bluesky"
                >
                  <FontAwesomeIcon icon={faBluesky} className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://linkedin.com/in/padmaia" 
                  className="text-foreground-muted hover:text-accent-teal transition-colors"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                </Link>
                <Link 
                  href="mailto:hey@padmaia.com" 
                  className="text-foreground-muted hover:text-accent-teal transition-colors"
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer spacer */}
        <div className="h-16" />
      </div>
    </div>
  )
}
