import { Metadata } from 'next'
import Link from 'next/link'
import { formatDate, estimateReadTime } from '@/lib/utils'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog - Caterina Gestri',
  description: 'Articoli e risorse sulla psicologia, psicoterapia e benessere mentale',
}

export default async function Blog() {
  const allPosts = await getAllPosts()
  const blogPosts = allPosts.map((post) => ({
    ...post,
    readTime: estimateReadTime(post.content),
  }))
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-header">Blog</h1>
          <p className="text-xl text-neutral-600">
            Articoli, risorse e insights sulla psicologia, psicoterapia e benessere mentale
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                I blog post saranno presto disponibili. Rimani aggiornato sui contenuti di psicologia e psicoterapia.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group border-b border-neutral-200 pb-8 last:border-b-0 hover:shadow-md transition-shadow rounded-lg p-6"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-neutral-600 mb-4 text-lg leading-relaxed">
                      {post.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-4">
                      <span>{formatDate(new Date(post.date))}</span>
                      <span>•</span>
                      <span>{post.readTime} min di lettura</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read More Link */}
                    <div className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                      Leggi l'articolo
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-lg border border-primary-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Rimani Aggiornato</h2>
            <p className="text-neutral-700 mb-6">
              Iscriviti alla mia newsletter per ricevere articoli, risorse e consigli sulla psicologia e il benessere mentale direttamente nella tua casella di posta.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Inserisci il tuo email"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-200"
                required
              />
              <button
                type="submit"
                className="button-primary"
              >
                Iscriviti
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
