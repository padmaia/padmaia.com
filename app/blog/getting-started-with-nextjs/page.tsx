import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// This would typically come from a database or CMS
const getBlogPost = (slug: string) => {
  const posts = {
    'getting-started-with-nextjs': {
      title: 'Getting Started with Next.js',
      date: '2023-05-15',
      content: `
        <p>Next.js is a powerful React framework that makes it easy to build fast, SEO-friendly web applications. In this post, we'll explore the basics of Next.js and how to get started with your first project.</p>
        <h2>Why Next.js?</h2>
        <p>Next.js offers several advantages over traditional React applications:</p>
        <ul>
          <li>Server-side rendering out of the box</li>
          <li>Automatic code splitting for faster page loads</li>
          <li>Simple client-side routing</li>
          <li>API routes to build your API alongside your app</li>
          <li>Easy deployment with Vercel (formerly ZEIT)</li>
        </ul>
        <h2>Setting Up Your First Next.js Project</h2>
        <p>To create a new Next.js project, you can use the following command:</p>
        <pre><code>npx create-next-app my-next-app</code></pre>
        <p>This will set up a new Next.js project with all the necessary dependencies and a basic file structure.</p>
        <h2>Conclusion</h2>
        <p>Next.js provides a great starting point for building modern web applications with React. Its intuitive API and powerful features make it an excellent choice for developers of all skill levels.</p>
      `
    },
    // Add more blog posts here
  }
  return posts[slug as keyof typeof posts]
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/blog" className="inline-block mb-8 text-blue-600 hover:text-blue-800">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to all posts
        </Link>
        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-8">{post.date}</p>
          <div 
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  )
}