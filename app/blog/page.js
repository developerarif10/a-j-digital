export const metadata = {
  title: 'Blog',
}

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Why Accessibility Matters in 2025",
      excerpt: "Building inclusive web experiences is not just a moral obligation, it makes business sense.",
      date: "Oct 12, 2025"
    },
    {
      id: 2,
      title: "Switching from Create React App to Next.js",
      excerpt: "A guide on how we migrated our agency portfolio to leverage Server Side Rendering.",
      date: "Sep 28, 2025"
    }
  ]

  return (
    <div className="container mx-auto px-6 py-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-12">Thoughts & Insights</h1>
      <div className="space-y-12">
        {posts.map(post => (
          <article key={post.id} className="border-b border-muted pb-12">
            <div className="text-accent-violet font-medium text-sm mb-2">{post.date}</div>
            <h2 className="text-2xl font-bold mb-4 hover:text-accent-teal cursor-pointer transition-colors">
              {post.title}
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <span className="text-primary font-medium border-b border-primary pb-1 cursor-pointer">Read more</span>
          </article>
        ))}
      </div>
    </div>
  )
}