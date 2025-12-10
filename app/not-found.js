import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="my-20 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-accent-violet mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-secondary mb-8 max-w-md">
        Oops! It looks like this page got lost in the digital void. Let's get you back to safety.
      </p>
      <Link 
        href="/" 
        className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-accent-teal hover:text-primary transition-colors font-medium"
      >
        Return Home
      </Link>
    </section>
  )
}