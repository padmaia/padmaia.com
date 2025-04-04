import Link from 'next/link'

export default function Blog() {
  // This would typically come from a database or CMS
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build fast and efficient web applications using Next.js, a popular React framework.",
      date: "2023-05-15",
      slug: "getting-started-with-nextjs"
    },
    {
      id: 2,
      title: "The Power of GraphQL",
      excerpt: "Explore the benefits of using GraphQL for your API and how it can streamline your data fetching process.",
      date: "2023-06-02",
      slug: "the-power-of-graphql"
    },
    {
      id: 3,
      title: "Mastering CSS Grid",
      excerpt: "Dive deep into CSS Grid and learn how to create complex layouts with ease.",
      date: "2023-06-20",
      slug: "mastering-css-grid"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-16">
        <Link href="/" className="text-xl text-gray-800 font-bold font-mono">padmaia</Link>
        <h1 className="text-3xl text-gray-800 font-bold font-mono">Blog</h1>
      </header>
      <main className="max-w-4xl mx-auto">
        <ul className="space-y-12">
          {blogPosts.map((post) => (
            <li key={post.id} className="border-b border-gray-200 pb-12 last:border-b-0">
              <article>
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-2xl text-gray-800 font-bold mb-2 font-mono hover:text-emerald-600">{post.title}</h2>
                  <p className="text-gray-600 mb-2 font-mono">{post.date}</p>
                  <p className="text-gray-700 font-mono">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-emerald-500 hover:text-emerald-600 font-mono">Read more →</span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}