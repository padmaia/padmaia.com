import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faBluesky } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import profileImage from '@/images/tree_profile.jpeg'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-16">
        <div className="text-xl text-gray-800 font-bold font-mono">padmaia</div>
        {/* <Link href="/blog" className="text-emerald-500 hover:text-emerald-600 font-mono">
          Blog
        </Link> */}
      </header>
      <main className="max-w-4xl mx-auto">
        <section className="flex flex-col md:flex-row items-center md:items-start mb-16">
          <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8">
            <Image
              src={profileImage}
              alt="Maia Teegarden"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl text-gray-800 font-bold mb-2 font-mono">Maia Teegarden</h1>
            <p className="text-xl text-gray-500 mb-6 font-mono">@padmaia</p>
            <div className="flex justify-center md:justify-start space-x-6 mb-8">
              <Link href="https://github.com/padmaia" className="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://bsky.app/profile/padmaia.bsky.social" className="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon icon={faBluesky} size="2x" />
                <span className="sr-only">Bluesky</span>
              </Link>
              <Link href="https://linkedin.com/in/padmaia" className="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:hey@padmaia.com" className="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl text-gray-800 font-bold mb-6 font-mono">About Me</h2>
          <div className="space-y-4 text-gray-700 font-mono leading-relaxed">
            <p>
            I’m an Engineering Manager with a vibrant passion for web development and an in-depth focus on frontend platforms, frameworks, and tooling. I love solving challenging yet common problems elegantly and sharing those solutions with the world, which has led me to the rewarding experience of contributing to open source projects like <a href="https://parceljs.org/">Parcel</a>, <a href="https://nextjs.org/">Next.js</a>, and <a href="https://turbo.build/pack/docs">Turbopack</a>.
            </p>
            <p>
            When I’m not working for that paper, I tend to take it easy. I love a good laugh, letting my mind wander, and moving my body, whether that’s dancing to my favorite music or exploring the outdoors. Mostly, I just enjoy unwinding with friends/family/pets, and doing my best to live in the moment.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}