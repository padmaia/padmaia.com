import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faBluesky } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import profileImage from '@/images/tree_profile.jpeg'

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
      <div className="relative z-10 p-6 md:p-8">
        <header className="max-w-4xl mx-auto flex justify-between items-center mb-16 animate-fade-in">
          <div className="text-xl font-bold font-mono gradient-text">padmaia</div>
        </header>

        <main className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center md:items-start mb-16 animate-slide-up">
            {/* Profile Image */}
            <div className="relative mb-8 md:mb-0 md:mr-12">
              <div className="profile-glow w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src={profileImage}
                  alt="Maia Teegarden"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 font-mono">
                <span className="gradient-text glow-text">Maia Teegarden</span>
              </h1>
              <p className="text-xl text-foreground-secondary mb-8 font-mono">@padmaia</p>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-8">
                <Link 
                  href="https://github.com/padmaia" 
                  className="text-foreground-secondary glow-hover"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <Link 
                  href="https://bsky.app/profile/padmaia.bsky.social" 
                  className="text-foreground-secondary glow-hover"
                  aria-label="Bluesky"
                >
                  <FontAwesomeIcon icon={faBluesky} size="2x" />
                </Link>
                <Link 
                  href="https://linkedin.com/in/padmaia" 
                  className="text-foreground-secondary glow-hover"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
                <Link 
                  href="mailto:hey@padmaia.com" 
                  className="text-foreground-secondary glow-hover"
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Link>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="section-divider mb-16" />

          {/* About Section */}
          <section 
            className="card card-hover p-8 md:p-10 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-mono">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="space-y-5 text-foreground-secondary font-mono leading-relaxed">
              <p>
                I'm an Engineering Manager with a vibrant passion for web development and an in-depth focus on frontend platforms, frameworks, and tooling. I love solving challenging yet common problems elegantly and sharing those solutions with the world, which has led me to the rewarding experience of contributing to open source projects like{' '}
                <Link href="https://parceljs.org/" className="text-accent-teal hover:text-accent-emerald">
                  Parcel
                </Link>
                ,{' '}
                <Link href="https://nextjs.org/" className="text-accent-teal hover:text-accent-emerald">
                  Next.js
                </Link>
                , and{' '}
                <Link href="https://turbo.build/pack/docs" className="text-accent-teal hover:text-accent-emerald">
                  Turbopack
                </Link>
                .
              </p>
              <p>
                When I'm not working for that paper, I tend to take it easy. I love a good laugh, letting my mind wander, and moving my body, whether that's dancing to my favorite music or exploring the outdoors. Mostly, I just enjoy unwinding with friends/family/pets, and doing my best to live in the moment.
              </p>
            </div>
          </section>
        </main>

        {/* Footer spacer */}
        <div className="h-16" />
      </div>
    </div>
  )
}
